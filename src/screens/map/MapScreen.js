import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { Constants, Location, Permissions } from 'expo';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { Button } from '../../components';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: { coords: {latitude: 0, longitude: 0}},
        }
    }

    ComponentDidMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }

    locationChanged = (location) => {
        region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.05,
        },
        this.setState({location, region});
    }

    onRegionChange = (region) => {
       // this.setState({ region });
      }

    static navigationOptions = ({ navigation }) => {
        const headerRight = (
          <Button
            style={{ marginRight: 10, width: 20, backgroundColor: 'transparent' }}
            transparent
            // onPress={() => navigation.navigate('')}
          >
            <Icon name="md-add" style={{ fontSize: 25, color: 'red' }} />
          </Button>
        );
    
        return {
          headerRight,
          title: 'Artmap YYC',
        };
      }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                showsUserLocation={true}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
                followsUserLocation={true}
                provider="google"
            >
               {this.props.pieceMarkers.map(marker => (
                    <Marker
                    coordinate={marker.location.coordinates}
                    title={marker.title || marker.artist}
                    description={marker.desc1}
                    key={marker.art_id}
                    />))}
        
            </MapView>
        )
    }
}

export default MapScreen;
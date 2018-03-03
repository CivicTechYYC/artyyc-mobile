import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { MapView, Constants, Location, Permissions } from 'expo';

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
        this.setState({ region });
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
                initialRegion={{latitude: 51.046,
                    longitude: -114.0708,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.05}}
                region={this.state.region}
                followsUserLocation={true}
                onRegionChange={this.onRegionChange}
                provider="google"
          />
        )
    }
}

export default MapScreen;
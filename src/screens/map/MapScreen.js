import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Container, Content, List } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import { Constants, Location, Permissions } from "expo";
import MapView, { Marker } from "react-native-maps";

import { Button } from "../../components";

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerRight = (
      <Button
        style={{ marginRight: 10, width: 20, backgroundColor: "transparent" }}
        transparent
        // onPress={() => navigation.navigate('')}
      >
        <Icon name="md-add" style={{ fontSize: 25, color: "red" }} />
      </Button>
    );

    return {
      // headerRight,
      header: null,
      title: "Artmap YYC"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      pieces: [],
      location: { coords: { latitude: 0, longitude: 0 } },
      region: {
        latitude: 51.048,
        longitude: -114.07,
        latitudeDelta: 0.015,
        longitudeDelta: 0.03
      }
    };
  }

  componentDidMount() {
    this.props.actions.retrieve();
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.pieces !== nextProps.pieces) {
      const { pieces } = nextProps;
      this.setState({ pieces });
    }
  }

  locationChanged = location => {
    (region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05
    }),
      this.setState({ location });
  };

  onRegionChange = region => {
    //this.setState({ region });
  };

  render() {
    console.log("this.state.pieces", this.state);
    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        followsUserLocation={true}
        provider="google"
      >
        {this.state.pieces.map(marker => (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
            title={marker.title || marker.artist}
            description={marker.longDesc1}
            key={`${marker.art_id}-${Math.random()}`}
          />
        ))}
      </MapView>
    );
  }
}

export default MapScreen;

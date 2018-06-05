import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Container, Content, List, Spinner, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

import { Constants, Location, Permissions } from "expo";
import MapView, { Marker } from "react-native-maps";

import { Button } from "../../components";
import MapStyles from "./styles";

const mapPin = require('../../assets/images/map-pin.png');

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
				<Icon name="ios-camera" style={{ fontSize: 25, color: "red" }} />
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
    
    this.getLocationAsync = this.getLocationAsync.bind(this);
  }
  
  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        return Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
      } else {
        throw new Error('Location permission not granted');
      }
  }

  locationChanged = location => {
		const region = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			latitudeDelta: 0.03,
			longitudeDelta: 0.03
    };
    
		this.setState({ region });
	};

	componentDidMount() {
		if (!this.props.arePiecesLoaded && !this.state.loadInProgress) {
			this.props.actions.retrieve();
			this.setState({ loadInProgress: true });
		}
    
    this.getLocationAsync();
  }
  
	componentWillReceiveProps(nextProps) {
		if (this.state.pieces !== nextProps.pieces) {
			const { pieces } = nextProps;
			this.setState({ pieces });
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<MapView
					style={{ flex: 1 }}
					showsUserLocation={true}
					region={this.state.region}
					followsUserLocation={true}
					provider="google">
          {this.state.pieces
          .filter(marker => marker.latitude && marker.longitude)
          .map(marker => (
						<Marker
              image={mapPin}
							coordinate={{
								latitude: marker.latitude,
								longitude: marker.longitude
							}}
              onPress={() =>
								this.props.navigation.navigate("PieceDetails", {
									details: marker
								})
							}
							key={`${marker.art_id}-${Math.random()}`}
						/>
					))}
				</MapView>
				<Animatable.View
					animation={!this.props.arePiecesLoaded ? "fadeIn" : "fadeOut"}
					style={MapStyles.Map.loadingGrowler}>
					<Text style={MapStyles.Map.loadingGrowlerText}>
						Loading pieces...
					</Text>
				</Animatable.View>
			</View>
		);
	}
}

export default MapScreen;

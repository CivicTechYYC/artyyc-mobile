import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Container, Content, List, Spinner, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

import { Constants, Location, Permissions } from "expo";
import MapView, { Marker } from "react-native-maps";

import { Button } from "../../components";
import MapStyles from "./styles";

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
	}

	componentDidMount() {
		if (!this.props.arePiecesLoaded) {
			this.props.actions.retrieve();
			this.setState({ loadInProgress: true });
		}
		Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.pieces !== nextProps.pieces) {
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

	render() {
		return (
			<View style={{ flex: 1 }}>
				<MapView
					style={{ flex: 1 }}
					showsUserLocation={true}
					region={this.state.region}
					followsUserLocation={true}
					provider="google">
					{this.state.pieces.map(marker => (
						<Marker
              				pinColor="orange"
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

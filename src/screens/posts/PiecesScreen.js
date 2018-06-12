import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
	Container,
	Content,
	List,
	Item,
	Input,
	Button as NativeButton,
	Text
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Quadrants from "./quadrants.json";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { point, polygon } from "@turf/helpers";

import { Button } from "../../components";
import PiecesListItem from "./components/PiecesListItem";

class PiecesScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuadrant: "SW",
			inputs: {
				searchInput: ""
			}
		};

		this.setQuadrant = this.setQuadrant.bind(this);
	}

	// static navigationOptions = ({ navigation }) => {
	// 	const headerRight = (
	// 		<Button
	// 			style={{ marginRight: 10, width: 20, backgroundColor: "transparent" }}
	// 			transparent
	// 			onPress={() => navigation.navigate("CreateEditPost")}>
	// 			<Icon name="md-add" style={{ fontSize: 25, color: "red" }} />
	// 		</Button>
	// 	);

	// 	return {
	// 		headerRight,
	// 		title: "List Pieces"
	// 	};
	// };

	setQuadrant = quadrant => this.setState({ currentQuadrant: quadrant });

	render() {
		return (
			<Container>
				<Content>
					<Item
						style={{
							marginBottom: 10,
							backgroundColor: "#FFFFFF"
						}}>
						<Input
							name="searchInput"
							placeholder="Search by title here..."
							value={this.state.inputs.searchInput}
							onChangeText={text => {
								let { inputs } = this.state;
								inputs["searchInput"] = text;
								this.setState({ inputs });
							}}
						/>
					</Item>
					<Text style={{ fontSize: 12, marginLeft: 15, marginBottom: 5 }}>
						Filter by Quadrant:
					</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-around",
							marginBottom: 10
						}}>
						<NativeButton
							small
							success={this.state.currentQuadrant === "" && true}
							onPress={this.setQuadrant("")}>
							<Text>All</Text>
						</NativeButton>
						<NativeButton
							small
							success={this.state.currentQuadrant === "NW" && true}
							onPress={this.setQuadrant("NW")}>
							<Text>NW</Text>
						</NativeButton>
						<NativeButton
							small
							success={this.state.currentQuadrant === "NE" && true}
							onPress={this.setQuadrant("NE")}>
							<Text>NE</Text>
						</NativeButton>
						<NativeButton
							small
							success={this.state.currentQuadrant === "SE" && true}
							onPress={this.setQuadrant("SE")}>
							<Text>SE</Text>
						</NativeButton>
						<NativeButton
							small
							success={this.state.currentQuadrant === "SW" && true}
							onPress={this.setQuadrant("SW")}>
							<Text>SW</Text>
						</NativeButton>
					</View>
					<List style={{ flex: 1 }}>
						{this.props.pieces
							.filter((piece, i) => {
								// Pull piece.location - current format is "(51.43249242, 5235423543524)"
								// will need to parse data but this gives us the specificity we need
								const piecePoint = point(piece.location.coordinates);
								const poly = polygon(
									Quadrants[this.state.currentQuadrant].geometry.coordinates
								);

								if (this.state.currentQuadrant) {
									return booleanPointInPolygon(piecePoint, poly);
								} else {
									return true;
								}
							})
							.filter(piece =>
								piece.title.includes(this.state.inputs.searchInput)
							)
							.map(piece => (
								<PiecesListItem
									piece={piece}
									navigation={this.props.navigation}
									key={Math.random()}
								/>
							))}
					</List>
				</Content>
			</Container>
		);
	}
}

PiecesScreen.propTypes = {
	pieces: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string
		})
	).isRequired,
	actions: PropTypes.shape({
		retrieve: PropTypes.func.isRequired
	}).isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
};

export default PiecesScreen;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Content, List, Item, Input } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import { Button } from "../../components";
import PiecesListItem from "./components/PiecesListItem";

class PiecesScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				searchInput: ""
			}
		};
	}

	static navigationOptions = ({ navigation }) => {
		const headerRight = (
			<Button
				style={{ marginRight: 10, width: 20, backgroundColor: "transparent" }}
				transparent
				onPress={() => navigation.navigate("CreateEditPost")}>
				<Icon name="md-add" style={{ fontSize: 25, color: "red" }} />
			</Button>
		);

		return {
			headerRight,
			title: "List Pieces"
		};
	};

	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Content style={{ flex: 1 }}>
					<Item
						style={{
							marginBottom: 10,
							backgroundColor: "#FFFFFF"
						}}>
						<Input
							name="searchInput"
							placeholder="Search by title here..."
							value={this.state.inputs.searchInput}
							onChangeText={(text) => { 
                let { inputs } = this.state;
                inputs['searchInput'] = text;
                this.setState({ inputs });
              }}
						/>
					</Item>
					<List style={{ flex: 1 }}>
						{this.props.pieces
							.filter(piece => piece.title.includes(this.state.inputs.searchInput))
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

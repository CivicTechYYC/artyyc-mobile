import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import MapStyles from './styles';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Body
} from "native-base";

class PieceDetails extends Component {
  render() {
    let { details } = this.props.navigation.state.params;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={MapStyles.PieceDetails.titleText}>{details.title}</Text>
                <Text>A piece by {details.artist}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>{details.longDesc1}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PieceDetails;

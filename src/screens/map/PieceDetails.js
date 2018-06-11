import React, { Component } from "react";
import PropTypes from "prop-types";
import { H3 } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import MapStyles from './styles';
const placeholderImage = require('../../assets/images/placeholderImage.png');

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
    const imageURL = 'https://s3.amazonaws.com/pastperfectonline/images/museum_104/006/990531-2.jpg';
    let { details } = this.props.navigation.state.params;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body style={{ marginTop: 25, marginBottom: 25 }}>
                <Text adjustFontToFit style={MapStyles.PieceDetails.titleText}>{details.title}</Text>
                <H3 style={MapStyles.PieceDetails.subtitleText}>by {details.artist}</H3>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: details.imageSource }}
                style={MapStyles.PieceDetails.pieceImage}
              />
              
            </CardItem>
            <CardItem>
              <Body>
              <Text 
                style={[MapStyles.PieceDetails.pieceContent, 
                  MapStyles.PieceDetails.pieceAddress]}>
                <Icon name="ios-pin" 
                  style={[MapStyles.PieceDetails.pieceContent, 
                  MapStyles.PieceDetails.pieceAddress, { color: 'rgba(0, 0, 0, 0.54)', fontSize: 18 }]}/>
                  <Text>   </Text>{details.address}
              </Text>
                <Text style={MapStyles.PieceDetails.pieceContent}>{details.desc1}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PieceDetails;

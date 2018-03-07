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
    let { details } = this.props.navigation.state.params;
    let fullDesc = details.longDesc1;
    fullDesc += (details.longDesc2) ? ` ${details.longDesc2}` : '';
    fullDesc += (details.longDesc3) ? ` ${details.longDesc3}` : '';
    fullDesc += (details.longDesc4) ? ` ${details.longDesc4}` : '';

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body style={{ marginTop: 25, marginBottom: 25 }}>
                <Text adjustFontToFit style={MapStyles.PieceDetails.titleText}>{details.title}</Text>
                <H3 style={[MapStyles.PieceDetails.pieceContent, {fontStyle: 'italic'}]}>A piece by {details.artist}</H3>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={placeholderImage}
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
                  MapStyles.PieceDetails.pieceAddress, { color: 'maroon', fontSize: 18 }]}/>
                  <Text>   </Text>{details.address}
              </Text>
                <Text style={MapStyles.PieceDetails.pieceContent}>{fullDesc}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PieceDetails;

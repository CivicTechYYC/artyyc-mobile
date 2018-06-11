import React from 'react';
import PropTypes from 'prop-types';

import { Text, Body, ListItem, Thumbnail, Right } from 'native-base';
// import { Text, Button, Body, ListItem, Body } from '../../../components';

const PiecesListItem = ({ piece, navigation }) => (
  <ListItem style={{flex: 1}} button key={piece.artId} onPress={() =>
    navigation.navigate("PieceDetails", {
      details: piece
    })
  }>
    <Body style={{flex: 1}}>
      <Text>{piece.title} - by {piece.artist}</Text>
      <Text numberOfLines={3} note>{piece.shortDesc || piece.longDesc1}</Text>
    </Body>
  </ListItem>
);

PiecesListItem.propTypes = {
  piece: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
};

PiecesListItem.defaultProps = {
  piece: {
    title: 'Art',
    shortDesc: 'description',
  },
};

export default PiecesListItem;

import { StyleSheet } from "react-native";

export default (MapStyles = {
	Map: StyleSheet.create({
		loadingGrowler: {
			position: "absolute",
			bottom: 0,
			left: 0,
			right: 0,
			height: 40,
			backgroundColor: "rgba(0, 96, 15, 1)",
			justifyContent: "center",
			alignItems: "center"
		},
		loadingGrowlerText: {
			fontSize: 10,
			color: "white"
		}
	}),
	PieceDetails: StyleSheet.create({
		titleText: {
      fontFamily: 'roboto-medium',
      fontSize: 20,
      lineHeight: 23,
			color: "rgba(0, 0, 0, 0.87)",
    },
    subtitleText: {
      fontFamily: 'roboto-regular',
      fontSize: 16,
      lineHeight: 24,
      color: "rgba(0, 0, 0, 0.87)",
    },
		pieceImage: {
			height: 211,
			width: null,
			flex: 1,
			backgroundColor: "#F3F3F3",
			resizeMode: "contain"
		},
		pieceContent : {
      fontFamily: 'roboto-regular',
      fontSize: 14,
      lineHeight: 20,
      color: "rgba(0, 0, 0, 0.87)",
      width: '95%',
		},
		pieceAddress: {
			fontFamily: 'roboto-regular',
      fontSize: 12,
      lineHeight: 16,
      marginBottom: 11,
      marginTop: 11,
      padding: 10,
      color: "rgba(0, 0, 0, 0.54)",
		}
	})
});

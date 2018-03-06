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
            fontSize: 36,
            color: '#333333',
            fontWeight: 'bold'
        }
    }),
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        shadowColor: "black",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
      },
      textContainer: {
        backgroundColor: "#f8f8f8",
        width: "100%",
        padding: 10,
        paddingRight: 20,
        paddingTop: 120,
        color: "black",
        justifyContent: "flex-end",
        alignItems: "flex-end"
      },
      text: {
        fontSize: 30
      },
      buttonsContainer: {
        backgroundColor: "#f8f8f8",
        flex: 1,
        justifyContent: "center",
      },
      buttons: {
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10
      },
      textInput:{
        fontSize:50
      }
});
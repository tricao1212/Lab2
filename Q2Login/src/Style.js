import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
    },
    title : {
        fontSize : 48,
        fontWeight : 'bold',
        color : '#EF516C',
        marginTop : 100,
        marginBottom : 10,
    },
    input : {
        marginVertical : 10,
        borderRadius : 10,
        width : '80%',
        borderWidth : 1,
        borderColor : 'gray',
        paddingLeft : 10,
    },
    button : {
        borderRadius : 10,
        backgroundColor : '#EF516C',
        width : '80%',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10,
        marginVertical : 10,
    },
    button_text : {
        color : 'white',
        fontWeight : 'bold'
    }
});
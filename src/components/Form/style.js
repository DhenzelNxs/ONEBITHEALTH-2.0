import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#ffffff",
        marginTop:30,
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop: 30,
       
    },
    form: {
        width:"100%",
    },

    formLabel_1: {
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

    formLabel_2:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
        paddingTop: 10  

    },

    input:{
        width: "90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop: 14,
        paddingButtom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
        paddingBottom: 14
    },

    errorMessage: {
        fontSize: 12,
        color:"red",
        fontWeight:"bold",
        paddingLeft: 20,
    },
    resultImc: {
        flex:1,
        marginTop:60,
        paddingTop: 50,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
        
    },
    NumberImc:{
        fontSize: 48,
        color:"#FF0043",
        fontWeight: "bold",
       
    },
    information:{
        fontSize:18,
        color:"#ff0043",
        fontWeight:"bold",
        
    },
    boxSharebutton: {
        width: "100%",
        alignItems: "center",
        marginBottom:10,
        
    },
    shared: {
        backgroundColor:"#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,

    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
    exibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImc: {
        marginTop: 20,
    },
    resultImcItem:{
        fontSize: 26,
        color:"red",
        height:50,
        width: "100%",
        paddingRight:20,
        alignContent: "center"

    },
    textResultItemList: {
        fontSize: 16,
        color:"red"
    },

    focusedTextInput:{
        width: "90%",
        borderRadius:50,
        height: 40,
        margin: 12,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "red",
        textAlign:"left"
    }
})

export default styles
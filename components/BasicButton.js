import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function BasicButton ({text,press}){
    return(
        <View style={styles.buttonBottom}>
            <TouchableOpacity style={styles.button} onPress={press}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBottom:{
        paddingVertical:50,
        marginBottom:50,
    },
    buttonText:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
    button:{
        backgroundColor:"#2ED784",
        borderRadius:15,
        padding:10,
    },
})
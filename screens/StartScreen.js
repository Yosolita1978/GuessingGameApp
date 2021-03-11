import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from "../components/Card";

const StartScreen = props => {

    return(
        <View style={styles.startScreen}>
           <Text style={styles.title}>Start a New Game</Text>
           <Card style={styles.inputView}>
           <Text>Please type a number</Text>
           <TextInput />
           
               <View style={styles.buttonView}>
                   <Button title='Reset'/>
                   <Button title='Confirm'/>
               </View>

            </Card>
         
        </View>
    );

};

const styles = StyleSheet.create({
    startScreen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
       },
    title:{
        fontSize: 20,
        marginVertical:10,
        
    },
    inputView: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonView:{
        flexDirection:"row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});

export default StartScreen;
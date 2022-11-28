import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Card from "./componentes/card";

const {width, height} = Dimensions.get('screen')
export default function Login({navigation}){
   
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.titulo}>Já fez o seu login?</Text>
            <Card agencia="Agência" conta="Conta" senha="Senha" />
            <TouchableOpacity style={styles.links} onPress={() => navigation.navigate('Cadastro')}><Text style={styles.titleLink}>Não possui cadastro?</Text></TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F0F2F5",
        //width: '100%',
      
    },

    titulo:{
        fontSize: 24,
        flex: 1,
        textAlign: 'center',
        marginTop: 160,
        fontWeight: 'bold',
        marginEnd: 10
       
    },

    links:
    {
        margin: 5,
        borderWidth: 0,
        
        justifyContent: 'flex-start',
        marginHorizontal: 40,
    },

    titleLink: {
        fontSize: 12,
        color: "#969CB2",
        fontWeight: "bold",
        
    },
})


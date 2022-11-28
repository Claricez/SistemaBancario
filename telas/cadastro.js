import React from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from './componentes/card';
import { useEffect, useState } from 'react';

export default function Cadastro({navigation})
{

    const [name, setName] = useState();
    const [error, setError ] = useState();
    const [display, setDisplay] = useState('none');
    const [errorMsg, setErrorMsg] = useState(null);
    console.log('Usuário', name)


    return(
       
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <Text style={styles.titulo}>Cadastre-se</Text>
        <View style={styles.box}>
        
            <Text style={styles.title}>Nome</Text>
                <TextInput style={styles.input}
                    value={name}
                    onChangeText={(text)=> {
                     
                     var letters = /^$|^[a-zA-Z._\b ]+$/;
                     
                     if (text.match(letters))
                     
                        setName(text)
                        if (error)
                            setError(false)
                        
                     
                     else setError("Por favor, apenas letras")
                     

                    }}
                />
            <Text style={styles.title}>CPF</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Senha</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Confirmar Senha</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={styles.msgErro(display)}>Inputs incorretos</Text>
            <View  style={{alignItems: 'center', flex: 1, marginVertical: 16}}>
            <TouchableOpacity style = {styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.titleBotao}>Enviar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
       
        
    )
}


const styles = StyleSheet.create({
    box:{
        backgroundColor: "#D2C1FF",
        height: 518,
        marginHorizontal: 40,
        marginTop: 20,
        borderRadius: 4,
    
    },

    container:{
        
        backgroundColor: "#F0F2F5",
        //width: '100%',
      
    },

    titulo:{
        fontSize: 24,
        flex: 1,
        textAlign: 'center',
        marginTop: 140,
        fontWeight: 'bold',
        marginEnd: 10
       
    },

    title: {
        color: "#885EFB",
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 35,
        marginTop: 30,
        marginVertical: 10
    },

    input: 
    {
        backgroundColor: '#FFFF',
        marginHorizontal: 35,
        padding: 16,
        borderRadius: 4,
    },

    botao: {
        
        backgroundColor: "#6933FF",
        width: 80,
        height: 40,
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center',
        
    },

    titleBotao: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold',
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

    msgErro:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text,

    })
})
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Link,useHistory} from 'react-router-dom';

import api from "../../services/api";


import * as yup from 'yup';

const schema = yup.object({
    agencia: yup.string().max(4, "A agência deve conter no máximo 4 números").min(4,'').required("Informe a sua agência"),
    conta: yup.string().max(8, 'A conta deve conter até 8 dígitos').required("Informe sua conta"),
    senha: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("Informe a sua senha")
})

export default function Card({agencia, conta, senha, campo4, navigation, onPress}){
    
    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const[loading,setLoading] = useState(false)
    const history = useHistory();

    async function handleSubmit(data) {  
        setLoading(true)
        try {
          const response = await api.post('/user',data)
          //console.table(response.data)
          history.push('/profile')
           alert(`Seu cadastro foi um sucesso ${response.data.userName}`)
          
        }catch(err) {
           alert(`O email ${data.cpf} Cpf já cadastrado`)
        }finally {
          setLoading(false)
        }
      }

    function handleSingIn(data){
        console.log(data)
    }
    return(
       
        <ScrollView >
         <KeyboardAvoidingView behavior={Platform.OS=="ios"? "padding" : "height"}>
        <View style={styles.container}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>{agencia}</Text>
            <Controller
                control={control}
                name = "agencia"
                render={({field: {onChange, onBlur, value}}) =>(
                    <TextInput 
                    style={styles.input} 
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
            
            />
            
            {errors.agencia && <Text style={styles.labelerror}>{errors.agencia?.message}</Text>}

            <Text style={styles.title}>{conta}</Text>
            <Controller
                control={control}
                name = "conta"
                render={({field: {onChange, onBlur, value}}) =>(
                    <TextInput 
                    style={styles.input} 
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
            />

            {errors.conta && <Text style={styles.labelerror}>{errors.conta?.message}</Text>}
            
            <Text style={styles.title}>{senha}</Text>
                <Controller
                control={control}
                name = "senha"
                render={({field: {onChange, onBlur, value}}) =>(
                    <TextInput 
                    style={styles.input} 
                    secureTextEntry={true}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
            )}
            />
           
           {errors.senha && <Text style={styles.labelerror}>{errors.senha?.message}</Text>}
           
            </View>

            <View style={{alignItems: 'center', flex: 1, marginVertical: 16}}>
            <button style={styles.botao} type='submit'>
                {loading ? 'Carregando...' : 'Cadastrar'}
                <Text style={styles.titleBotao}>Enviar</Text>
            </button>
            </View>
        
        </View>
                
        </KeyboardAvoidingView>
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#D2C1FF",
        height: 400,
        marginHorizontal: 40,
        marginTop: 20,
        flex: 1,
        borderRadius: 5,
        flexDirection: 'column'

    
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
    labelerror:
    {
        color: "#ff375b",
        marginBottom: 8,
        marginHorizontal: 40,
    }

   
    
})
import React from 'react'
import { StyleSheet, TextInput, View ,SafeAreaView, Dimensions, Text, KeyboardAvoidingView} from 'react-native';



export default function TransacaoCard(){

    const {width, height} = Dimensions.get('screen')
    return(

        <SafeAreaView>
        <KeyboardAvoidingView>
        <Text style={styles.titleOD}>Origem</Text>
        <View style = {styles.container}>
            <View >
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.titleConta}>Conta</Text>
                    <Text style={styles.titleAg}>Agência</Text>
                </View>
            
                <View style={{flexDirection: 'row', justifyContent:'space-evenly'}} >
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input} />
                </View>
                </View>

                <View>
                <Text style={styles.titleValor}>Valor</Text>
                    <TextInput style={styles.inputValor}/>
                </View>
                </View>

                <Text style={styles.titleOD}>Destino</Text>
                <View style={styles.destino}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.titleConta}>Conta</Text>
                        <Text style={styles.titleAg}>Agência</Text>
                    </View>
                    
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                        <TextInput style={styles.input}/>
                        <TextInput style={styles.input} />
                    </View>
                        
                </View>
                </KeyboardAvoidingView>
       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "#D2C1FF",
        height: 270,
        borderRadius: 5,
        marginHorizontal: 36,
        flexDirection: 'column',
    
    },

    input: 
    {
        backgroundColor: '#FFFF',
        borderRadius: 4,
        height: 43,
    
        
    },

    titleConta: 
    {
        padding: 16,
        fontSize: 14,
        fontWeight: 'bold', 
        
    },

    titleAg: 
    {
        fontSize: 14,
        fontWeight: 'bold', 
        padding: 16,
        width: 120,
        marginHorizontal: 40,

        
    },

    

    inputValor:
    {
        backgroundColor: '#FFFF',
        marginHorizontal: 20,
        borderRadius: 4,
        height: 43,
        padding: 16,
        
        
    },

    titleValor:
    {
        
        fontSize: 14,
        fontWeight: 'bold', 
        marginTop: 24,
        marginHorizontal: 10,
        padding: 12,
      
        
    },

    destino:
    {
        backgroundColor: "#D2C1FF",
        height: 150,
        borderRadius: 5,
        //marginTop: 50,
        marginHorizontal: 30,
        flexDirection: 'column',
        marginEnd: 20
    },

    titleDestino:
    {
        
        fontSize: 14,
        fontWeight: 'bold', 
        marginTop: 14,
        marginHorizontal: 10,
        padding: 12,
       
        
    },

    titleOD:
    {
        marginHorizontal: 20,
        padding: 12,
        fontSize: 24,
        marginTop: 50
    }


})
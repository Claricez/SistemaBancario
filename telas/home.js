import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Saldo from './componentes/tagSaldo'
import Header from './componentes/Header'
import Button from './componentes/bottoms'
import CardHome from './componentes/cardHome'

export default function Home({navigation}){
    return(
        <SafeAreaView>
        <ScrollView>
        <View>
           <Header username='Clarice'/>
           <Saldo/>
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Button buttonName='Transferências' onPress={() => navigation.navigate('Transferências')}/>
           <Button buttonName='Extrato'/>
           <Button buttonName='Gift Card'/>
           </View>
           <View>
                <Text style={styles.title}>Operações</Text>
                <CardHome/>
           </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:
    {
        backgroundColor: "#5429CC",
        minHeight: 200
    },
    botao: 
    {
        padding: 10,
        margin: 16,
        backgroundColor: "#6933FF",
        width: 120,
        borderRadius: 6,
    },

    textoBotao:
    {
        fontSize: 12,
        color: "#FFFF",
        fontWeight: "bold", 
        textAlign: 'center',
       
    },

    card:
    {
        backgroundColor:"#FFFF",
        width: 299,
        height: 103,
        //alignItems: 'center',
        //alignContent: 'center',
        marginTop: 100,
        //marginHorizontal: 50,
        flex: 1
    },

    title:
    {
        
        fontSize: 20,
        marginTop: 14,
        marginLeft: 24
    }

})
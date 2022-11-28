import React from "react";
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import TransacaoCard from "./componentes/transacao";

export default function Transferencias(){
    return(
        <SafeAreaView style={styles.container}>
            <TransacaoCard/>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 3,
        backgroundColor: "#F0F2F5",
    }
})
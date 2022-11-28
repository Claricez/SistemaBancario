import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './telas/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './telas/cadastro';
import Home from './telas/home';
import Transferencias from './telas/transferencia';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen name="Transferências" component={Transferencias}
        options={{
          headerShown: true,
          headerTitle: 'Nova Transferência',
         
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

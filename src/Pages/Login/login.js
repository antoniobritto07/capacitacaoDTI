import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ route, navigation }) {
    const { PtBrData } = route.params;
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Página de login</Text>
            <View style={styles.previousDataPageContainer}>
                <Text>A data no formato em PT-BR obtido na página passada é:</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 10 }}>
                    {PtBrData}
                </Text>
            </View>
            <Button
                styles={{ border: "1px solid", marginTop: "10px" }}
                title="Refresh Page"
                onPress={() => { navigation.push("Login") }} // adiciona nova página mesmo se já estiver nela
            />
            <Button
                styles={{ border: "1px solid", marginTop: "10px" }}
                title="Go back"
                onPress={() => { navigation.goBack() }} //volta para página anterior do historico
            />
            <Button
                styles={{ border: "1px solid", marginTop: "10px" }}
                title="Ir para primeira página da pilha"
                onPress={() => { navigation.popToTop() }} //volta para primeira página da stack
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    previousDataPageContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.3)',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 15,
        marginTop: 10
    }
})
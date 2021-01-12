import React from 'react'
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {

    const name = "Veronica"

    return <View>
        <Text style={styles.headingStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
        
};

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen
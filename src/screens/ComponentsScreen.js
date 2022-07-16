import React from "react";
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Ryan';

    return (
        <View>
            <Text style={styles.textStyle}>Get</Text>
            <Text style={styles.subStyle}> {name} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subStyle: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
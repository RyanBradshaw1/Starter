import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '13' },
        { name: 'Friend #2', age: '3' },
        { name: 'Friend #3', age: '5' },
        { name: 'Friend #4', age: '88' },
        { name: 'Friend #5', age: '23' },
        { name: 'Friend #6', age: '32' },
        { name: 'Friend #7', age: '22' },
        { name: 'Friend #8', age: '334' },
        { name: 'Friend #9', age: '53' },
    ];

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
});

export default ListScreen;
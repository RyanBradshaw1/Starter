import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_CHANGE = 1;

const reducer = (state, action) => {
    // state === {count: number}
    // action === {type: 'change_increase' || 'change_decrease', payload: 1}

    switch (action.type) {
        case 'change_increase':
            return { ...state, count: state.count + action.payload };
        case 'change_decrease':
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    };
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({ type: 'change_increase', payload: COUNT_CHANGE })
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({ type: 'change_decrease', payload: -1 * COUNT_CHANGE })
                }}
            />
            <View><Text>Current Count: {state.count}</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
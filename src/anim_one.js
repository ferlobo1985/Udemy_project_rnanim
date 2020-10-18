import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

const AnimOne = () =>  {
    const movEl = useRef(new Animated.ValueXY()).current;
    const moveElTwo = useRef(new Animated.Value(1)).current;

    const runMyAnim = () => {
        Animated.timing(movEl,{
            toValue:{x:100,y:300},
            duration:2000,
            delay:1000,
            easing:Easing.elastic(1)
        }).start();
    }

    const runMyTimingAnim = () => {
        Animated.timing(moveElTwo,{
            toValue:0,
            duration:500
        }).start();
    }
    
    return (
        <View style={styles.container}>
            <Button
                title="Trigger anim"
                onPress={runMyTimingAnim}
            />

            <Animated.View style={{
                opacity: moveElTwo
            }}>
                <View style={styles.square}>
                    <Text>Anim one</Text>
                </View>
            </Animated.View>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff'
    },
    square:{
        width:100,
        height:100,
        backgroundColor:'red'
    }
})

export default AnimOne;

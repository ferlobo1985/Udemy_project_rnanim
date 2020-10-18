import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const AnimOne = () =>  {
    const movEl = useRef(new Animated.ValueXY()).current;

    useEffect(()=>{
        Animated.spring(movEl,{
            toValue:{x:100,y:300},
            friction:1,
            tension:100
        }).start();
    },[movEl])

    return (
        <View style={styles.container}>
            <Animated.View
                style={movEl.getLayout()}
                // style={{
                //     left:movEl.x,
                //     top:movEl.y
                // }}
            >
                <View style={styles.square}>
                    <Text>Anim one</Text>
                </View>
            </Animated.View>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    square:{
        width:100,
        height:100,
        backgroundColor:'red'
    }
})

export default AnimOne;

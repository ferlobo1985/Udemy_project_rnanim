import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

const AnimTwo = () =>  {
    const first = useRef(new Animated.Value(1)).current;
    const redS = useRef(new Animated.ValueXY()).current;
    const blueS = useRef(new Animated.Value(1)).current;

    const runAnim = () => {
        Animated.sequence([
            Animated.timing(first,{
                toValue:0
            }),
            Animated.parallel([
                Animated.spring(redS,{
                    toValue:{x:200,y:300}
                }),
                Animated.timing(blueS,{
                    toValue:0
                })
            ])
        ]).start()


        // Animated.parallel([
        //     Animated.spring(redS,{
        //         toValue:{x:200,y:300}
        //     }),
        //     Animated.timing(blueS,{
        //         toValue:0
        //     })
        // ]).start();
    }
  
    return (
        <View style={styles.container}>
            <Button
                title="Trigger anim"
                onPress={runAnim}
            />

            <Animated.View
                 style={{ opacity:first }}
            >
                <View style={styles.first}>
                    <Text>First</Text>
                </View>
            </Animated.View>
            <Animated.View style={redS.getLayout()}>
                <View style={styles.square}>
                    <Text>Anim one</Text>
                </View>
            </Animated.View>
            <Animated.View
                style={{ opacity:blueS }}
            >
                <View style={styles.square_two}>
                    <Text>Square 2</Text>
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
    },
    square_two:{
        width:100,
        height:100,
        backgroundColor:'blue'
    },
    first:{
        width:100,
        height:100,
        backgroundColor:'green'
    }
})

export default AnimTwo;

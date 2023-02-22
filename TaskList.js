import { useContext, useEffect, useRef } from 'react';
import { clickContext } from './contexts';
import { StyleSheet, View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function TaskList(props) {
    const clicker = useContext(clickContext);

    const slideAnim = useRef(new Animated.Value(-0.5)).current;

    let transformStyle = {transform: [
        {
            translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
            }),
        }
    ]};

    const handleClose = () => {
        transformStyle.transform[0].translateY.outputRange = [0, 500];
        Animated.timing(slideAnim, {
            toValue: -0.5,
            duration: 700,
            useNativeDriver: true,
        }).start();
        setTimeout(clicker, 500);
    }

    useEffect(() => {
        Animated.timing(slideAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        }).start();
    }, [slideAnim]);

    let mergeStyle = {...props.style, ...transformStyle};
    return (
        <Animated.View style={mergeStyle}>
            <Icon onPress={handleClose} style={styles.closeButton} name="close" size={30} color="black" />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        marginBottom: 25
    }
})
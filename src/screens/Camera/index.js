import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Camera = () => {
    const [isRecording, setIsRecording] = useState(false);
    const camera = useRef();

    const onRecord = async () => {
        if (isRecording) {
            camera.current.stopRecording();
        } else {
            const data = await camera.current.recordAsync();
            console.log('data: ', data);
        }
    };

    return (
        <View style={styles.container}>
            <RNCamera 
                ref={camera}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                style={styles.preview}
            />
            <TouchableOpacity 
                onPress={onRecord} 
                style={
                    isRecording ? styles.buttonStop : styles.buttonRecord
                    }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonRecord: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 25,
        backgroundColor: '#ff4343',
    },
    buttonStop: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        backgroundColor: 'white',
        marginVertical: 20,
        borderRadius: 3,
        backgroundColor: '#ff4343',
    },
});

export default Camera;
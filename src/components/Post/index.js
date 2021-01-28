import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, TouchableWithoutFeedback, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Bowling from '../../assets/videos/bowling.mp4';
import Video from 'react-native-video';
import Harvey from '../../assets/images/harvey.jpg';

const Post = (props) => {
    const [paused, setPaused] = useState(false);
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);

    // const { post } = props;
    
    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video 
                        source={{uri: post.videoUri}}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />

                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <View style={styles.profilePictureContainer}>
                                <Image style={styles.profilePicture} source={{uri: post.user.imageUri}} />
                            </View>

                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={"heart"} size={40} color={isLiked ? '#ED2939' : 'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <FontAwesome name={"commenting"} size={40} color="white" />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Fontisto name={"share-a"} size={35} color="white" />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>

                                <View style={styles.songRow}>
                                    <Entypo name={"beamed-note"} size={22} color="white" />
                                    <Text style={styles.songName}>{post.songName}</Text>
                                </View>
                            </View>
                            <Image style={styles.songImage} source={{uri: post.songImage}} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '100',
        marginBottom: 10,
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    iconContainer: {
        alignItems: 'center',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 5,
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },  
    videoPlayButton:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
});

export default Post;
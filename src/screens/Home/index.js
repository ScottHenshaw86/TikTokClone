import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Post from '../../components/Post';

const post1 = {
    id: 'p1',
    videoUri: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/videos/bowling.mp4',
    user: {
        id: 'u1',
        username: 'scotthenshaw',
        imageUri: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/images/harvey.jpg',
    },
    description: 'bowling! hahaha @harvey',
    songName: 'baby bowling - Scott',
    songImage: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/images/harvey.jpg',
    likes: 123,
    comments: 12,
    shares: 44,
};

const post2 = {
    id: 'p2',
    videoUri: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/videos/harv.mp4',
    user: {
        id: 'u2',
        username: 'scotthenshaw',
        imageUri: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/images/harvey.jpg',
    },
    description: "Harvey's toy bus @harvey",
    songName: 'little blue bus - Tayo',
    songImage: 'https://scottsimagesandvideos.s3.ap-northeast-2.amazonaws.com/images/harvey.jpg',
    likes: 212,
    comments: 64,
    shares: 97,
};

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Post post={post1}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Home;
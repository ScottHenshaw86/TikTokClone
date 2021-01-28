import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';

import Post from '../../components/Post';
import posts from '../../data/posts';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Home;
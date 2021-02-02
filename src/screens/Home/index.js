import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import Post from '../../components/Post';
// import posts from '../../data/posts';
import { listPosts } from '../../graphql/queries';

const Home = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
            } catch (e) {
                console.error(e);
            }
        };

        fetchPost();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 50}
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
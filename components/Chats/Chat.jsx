import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

export default function Chat() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Simulating fetching posts
    setPosts([
      {
        id: 1,
        username: 'Lily',
        avatar: require('../../assets/images/6.jpg'),
        image: require('../../assets/images/6.jpg'),
        likes: 1234,
        caption: 'Beautiful sunset at the beach! 🌅 #nature #sunset',
      },
      {
        id: 2,
        username: 'Keza',
        avatar: require('../../assets/images/11.jpg'),
        image: require('../../assets/images/11.jpg'),
        likes: 1234,
        caption: 'Beautiful sunset at the beach! 🌅 #nature #sunset',
      },
      {
        id: 3,
        username: 'Teta',
        avatar: require('../../assets/images/12.jpg'),
        image: require('../../assets/images/12.jpg'),
        likes: 1234,
        caption: 'Beautiful sunset at the beach! 🌅 #nature #sunset',
      },
      // Add more posts here
    ]);
  }, []);

  const categories = ['My Country', 'Global', 'Artists', 'Players', 'Tech', 'Nature'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#e0e0e0"
        />
      </View>

      <ScrollView>
        <ScrollView horizontal style={styles.categories}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.category,
                activeCategory === category && styles.activeCategory,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {posts.map((post, index) => (
  <View key={post.id || index} style={styles.post}>
    <View style={styles.postHeader}>
      <Image source={post.avatar} style={styles.avatar} />
      <Text style={styles.username}>{post.username}</Text>
    </View>
    <Image source={post.image} style={styles.postImage} />
    <View style={styles.postActions}>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
    <Text style={styles.likes}>{post.likes} hearts</Text>
    <Text style={styles.caption}>
      <Text style={styles.username}>{post.username}</Text> {post.caption}
    </Text>
  </View>
))}

      </ScrollView>

      <TouchableOpacity style={styles.floatingBtn}>
        <Text style={styles.floatingBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001512',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
  },
  categories: {
    padding: 10,
  },
  category: {
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  activeCategory: {
    backgroundColor: '#C13584',
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  post: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  likes: {
    color: '#e0e0e0',
    fontWeight: 'bold',
    padding: 10,
  },
  caption: {
    color: '#e0e0e0',
    padding: 10,
  },
  floatingBtn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#C13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBtnText: {
    color: 'white',
    fontSize: 24,
  },
});
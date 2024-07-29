import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import ChatItem from './ChatItem';

export default function Content({ activeTab }) {
  switch (activeTab) {
    case 'home':
      return (
        <View style={styles.content}>
          <Image source={require('../../assets/images/home3.png')} style={styles.homeImage} />
        </View>
      );
    case 'heal':
      return (
        <ScrollView style={styles.content}>
          <ChatItem
            avatar={require('../../assets/images/11.jpg')}
            name="Brandine"
            time="10:30 AM"
            message="Muraho neza. amakuru yawe??"
          />
          <ChatItem
            avatar={require('../../assets/images/6.jpg')}
            name="Justine"
            time="2:15 PM"
            message="Ukomeze kugira ibihe byiza."
          />
        </ScrollView>
      );
    default:
      return <View style={styles.content} />;
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  homeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
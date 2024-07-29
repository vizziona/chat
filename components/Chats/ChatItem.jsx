import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatItem({ avatar, name, time, message }) {
  return (
    <View style={styles.chatItem}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.chatItemContent}>
        <View style={styles.chatItemHeader}>
          <Text style={styles.chatItemName}>{name}</Text>
          <Text style={styles.chatItemTime}>{time}</Text>
        </View>
        <Text style={styles.chatItemMessage}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatItemContent: {
    flex: 1,
  },
  chatItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  chatItemName: {
    fontWeight: '500',
    color: '#fff',
  },
  chatItemTime: {
    fontSize: 12,
    color: '#999',
  },
  chatItemMessage: {
    color: '#afadad',
    fontSize: 14,
  },
});
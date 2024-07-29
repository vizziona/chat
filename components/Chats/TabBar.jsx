import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const tabs = ['Home', 'Public', 'PicEarn', 'Trends', 'Heal'];

export default function TabBar({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab.toLowerCase() && styles.activeTab]}
          onPress={() => setActiveTab(tab.toLowerCase())}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#001512',
    padding: 7,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});
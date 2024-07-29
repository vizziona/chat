import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import TabBar from './TabBar';
import Content from './Content';
import RightMenu from './RightMenu';
import Footer from './Footer';
import SearchPopup from './SearchPopup';

export default function Chat() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header onSearchPress={() => setIsSearchVisible(true)} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <RightMenu />
      <Footer />
      <SearchPopup isVisible={isSearchVisible} onClose={() => setIsSearchVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001512',
  },
});
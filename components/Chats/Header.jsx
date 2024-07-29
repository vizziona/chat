import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

export default function Header({ onSearchPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerTitle}>V-NetEngine</Text>
        <TouchableOpacity onPress={onSearchPress}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
              <Path d="m12 20.9c-.22 0-.45-.03-.62-.09-2.9-.99-9.38-5.12-9.38-12.13001 0-1.4.51-2.67997 1.36-3.65997"/>
              <Path d="m21.4905 12c.32-1.02.51-2.12.51-3.31 0-3.09-2.4899-5.59002-5.5599-5.59002-1.82 0-3.4301.88005-4.4401 2.24005-1.01-1.36-2.62995-2.24005-4.43995-2.24005"/>
              <Path d="m17.7391 21c1.7673 0 3.2-1.4327 3.2-3.2s-1.4327-3.2-3.2-3.2c-1.7674 0-3.2 1.4327-3.2 3.2s1.4326 3.2 3.2 3.2z"/>
              <Path d="m21.5391 21.6-1-1"/>
            </G>
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path d="M0 0h24v24H0V0z" fill="none"/>
          <Path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" fill="#ffffff"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#001512',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
    marginRight: 15,
  },
  headerRight: {},
});
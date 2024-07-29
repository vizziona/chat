import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <G fill="#fff">
            <Path d="m4.71 3.29a1 1 0 0 0 -1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm7.29 10.21a1.5 1.5 0 0 1 -1.5-1.5s0-.05 0-.07l1.56 1.56z"/>
            <Path d="m12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72l-1.46-1.41a15.89 15.89 0 0 0 -2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1 -1.7.25z"/>
            <Path d="m21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0 -3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1 -2.29 2.72l1.51 1.41a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0 -.04-1z"/>
          </G>
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
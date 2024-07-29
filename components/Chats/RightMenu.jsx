import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RightMenu() {
  const [activeChatroom, setActiveChatroom] = useState(null);
  const [activeDating, setActiveDating] = useState(null);

  return (
    <View style={styles.rightMenu}>
      <View style={styles.menuItems}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setActiveChatroom(activeChatroom ? null : 'chatroom')}
        >
          <Text style={styles.menuButtonText}>Chatroom</Text>
        </TouchableOpacity>
        {activeChatroom && (
          <View style={styles.submenu}>
            <TouchableOpacity style={styles.submenuButton}>
              <Text style={styles.submenuButtonText}>Public room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submenuButton}>
              <Text style={styles.submenuButtonText}>Private room</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Aura</Text>
      </TouchableOpacity>
      <View style={styles.menuItems}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setActiveDating(activeDating ? null : 'dating')}
        >
          <Text style={styles.menuButtonText}>Dating</Text>
        </TouchableOpacity>
        {activeDating && (
          <View style={styles.submenu}>
            <TouchableOpacity style={styles.submenuButton}>
              <Text style={styles.submenuButtonText}>Casual Dating</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submenuButton}>
              <Text style={styles.submenuButtonText}>Marriage Dating</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rightMenu: {
    position: 'absolute',
    top: 280,
    right: 20,
    alignItems: 'flex-end',
  },
  menuItems: {
    marginBottom: 10,
  },
  menuButton: {
    backgroundColor: '#001512',
    padding: 12,
    borderRadius: 30,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  submenu: {
    backgroundColor: '#001512',
    borderRadius: 15,
    marginTop: 5,
  },
  submenuButton: {
    padding: 10,
  },
  submenuButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
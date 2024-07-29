import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const SearchItem = ({ image, title, source, author }) => (
  <View style={styles.searchItem}>
    <Image source={image} style={styles.searchItemImage} />
    <View style={styles.searchItemText}>
      <Text style={styles.searchItemTitle}>{title}</Text>
      <Text style={styles.searchItemSource}>{source}</Text>
      <Text style={styles.searchItemAuthor}>{author}</Text>
    </View>
  </View>
);

export default function SearchPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <View style={styles.header}>
          <Text style={styles.title}>V-NetEngine</Text>
          <View style={styles.searchContainer}>
            <Svg width="20" height="20" viewBox="0 0 64 64" style={styles.searchIcon}>
              <Path d="m-1024-64h1280v800h-1280z" fill="none"/>
              <Path d="m46.03 32c0-2.751 2.233-4.985 4.985-4.985 2.751 0 4.985 2.234 4.985 4.985s-2.234 4.985-4.985 4.985c-2.752 0-4.985-2.234-4.985-4.985z" fill="#d9d9d9"/>
              <Path d="m41.92 41.92c1.946-1.945 5.105-1.945 7.051 0 1.945 1.946 1.945 5.105 0 7.051-1.946 1.945-5.105 1.945-7.051 0-1.945-1.946-1.945-5.105 0-7.051z" fill="#b3b3b3"/>
              <Path d="m32 51.015c2.751 0 4.985-2.234 4.985-4.985s-2.234-4.985-4.985-4.985-4.985 2.234-4.985 4.985 2.234 4.985 4.985 4.985z" fill="#8c8c8c"/>
              <Path d="m22.08 41.92c1.945 1.946 1.945 5.105 0 7.051-1.946 1.945-5.105 1.945-7.051 0-1.945-1.946-1.945-5.105 0-7.051 1.946-1.945 5.105-1.945 7.051 0z" fill="#666"/>
              <Path d="m17.97 32c0 2.751-2.233 4.985-4.985 4.985-2.751 0-4.985-2.234-4.985-4.985s2.234-4.985 4.985-4.985c2.752 0 4.985 2.234 4.985 4.985z" fill="#404040"/>
              <Path d="m22.08 22.08c-1.946 1.945-5.105 1.945-7.051 0-1.945-1.946-1.945-5.105 0-7.051 1.946-1.945 5.105-1.945 7.051 0 1.945 1.946 1.945 5.105 0 7.051z" fill="#404040"/>
              <Path d="m32 12.985c2.751 0 4.985 2.234 4.985 4.985s-2.234 4.985-4.985 4.985-4.985-2.234-4.985-4.985 2.234-4.985 4.985-4.985z" fill="#ffffff"/>
            </Svg>
            <TextInput
              style={styles.searchInput}
              placeholder="Search ..."
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.menu}>
          {['Trends', 'Sports', 'News', 'Music'].map((item) => (
            <TouchableOpacity key={item} style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView style={styles.content}>
          <SearchItem
            image={require('../../assets/images/cnn.png')}
            title="Biden will not seek reelection; endorses Harris."
            source="CNN"
            author="Michael Williams"
          />
          <SearchItem
            image={require('../../assets/images/igihe.jpg')}
            title="Apple igiye gushyira hanze AirPods zikoresha camera."
            source="IGIHE"
            author="Mugisha Christian"
          />
          <SearchItem
            image={require('../../assets/images/cnn.png')}
            title="Man City sign Savinho from feeder club Troyes"
            source="SuperSport"
            author="Free Nuts for All"
          />
          <SearchItem
            image={require('../../assets/images/aljazeera.png')}
            title="Scientists Puzzled: Birds Suddenly Develop Opposable Thumbs."
            source="Aljazeera"
            author="Start Using Power Tools"
          />
          <SearchItem
            image={require('../../assets/images/google.jpg')}
            title="Scientists Puzzled: Birds Suddenly Develop Opposable Thumbs."
            source="Google"
            author="Start Using Power Tools"
          />
          <SearchItem
            image={require('../../assets/images/inyarwanda.jpg')}
            title="Scientists Puzzled: Birds Suddenly Develop Opposable Thumbs,"
            source="Inyarwanda"
            author="Start Using Power Tools"
          />
        </ScrollView>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '90%',
    height: '80%',
    backgroundColor: '#092020',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    padding: 10,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#109787',
    padding: 5,
    borderRadius: 15,
    margin: 5,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  searchItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  searchItemText: {
    flex: 1,
  },
  searchItemTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  searchItemSource: {
    color: '#aaa',
    fontSize: 14,
  },
  searchItemAuthor: {
    color: '#aaa',
    fontSize: 14,
  },
  moreButton: {
    backgroundColor: '#001512',
    borderColor: '#109787',
    borderWidth: 2,
    padding: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

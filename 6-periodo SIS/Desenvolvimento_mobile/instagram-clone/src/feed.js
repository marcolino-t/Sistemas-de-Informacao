import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Titulo from './components/titulo';
import Stories from './components/stories';
import Foto from './components/foto';
import Menu from './components/menu';

export default function Feed() {
  const [activeTab, setActiveTab] = useState('home');

  // Dados mockados dos posts
  const posts = [
    {
      id: 1,
      username: 'Lucão',
      userAvatar: require('../assets/avatars/story1.jpeg'),
      image: require('../assets/avatars/story1.jpeg'),
      likes: 42,
      caption: 'Que dia lindo! ☀️ lgbtqia+',
      comments: 5,
      time: '2h',
    },
    {
      id: 2,
      username: 'Marcelo',
      userAvatar: require('../assets/avatars/story2.jpeg'),
      image: require('../assets/avatars/trisal.jpeg'),
      likes: 28,
      caption: 'Momento especial',
      comments: 3,
      time: '4h',
    },
    {
      id: 3,
      username: 'Matheus',
      userAvatar: require('../assets/avatars/story3.jpeg'),
      image: require('../assets/avatars/paunoarado.jpeg'),
      likes: 156,
      caption: 'Nova receita que aprendi hoje! 🍰 #culinaria #doce',
      comments: 12,
      time: '6h',
    },
    {
      id: 4,
      username: 'giovani',
      userAvatar: require('../assets/avatars/story4.jpeg'),
      image: require('../assets/avatars/story4.jpeg'),
      likes: 89,
      caption: 'Embreagado! 🏙️',
      comments: 7,
      time: '8h',
    },
  ];

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Titulo />
      
      <ScrollView style={styles.scrollView}>
        <Stories />
        
        {posts.map((post) => (
          <Foto key={post.id} post={post} />
        ))}
      </ScrollView>
      
      <Menu activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});

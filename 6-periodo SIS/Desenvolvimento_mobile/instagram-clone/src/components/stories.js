import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Story from './story';

export default function Stories() {
  // Dados mockados dos stories
  const stories = [
    {
      id: 1,
      username: 'seu_story',
      image: require('../../assets/avatars/your_story.jpeg'),
      hasStory: true,
    },
    {
      id: 2,
      username: 'Lucão',
      image: require('../../assets/avatars/story1.jpeg'),
      hasStory: true,
    },
    {
      id: 3,
      username: 'Marcelo',
      image: require('../../assets/avatars/story2.jpeg'),
      hasStory: true,
    },
    {
      id: 4,
      username: 'Matheus',
      image: require('../../assets/avatars/story3.jpeg'),
      hasStory: true,
    },
    {
      id: 5,
      username: 'Giovani',
      image: require('../../assets/avatars/story4.jpeg'),
      hasStory: true,
    },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
});

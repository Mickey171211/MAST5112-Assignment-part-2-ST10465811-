import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this App</Text>
      <Text style={styles.text}>This app was built to satisfy the assignment: allow a chef to add menu items, view a menu, and track the total number of items. Built with Expo + TypeScript.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  text: { color: '#666' },
});


import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About & Submission</Text>

      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.text}>• Add / Edit / Delete menu items (separate Add screen).</Text>
      <Text style={styles.text}>• Filter menu by course (Starter / Main / Dessert).</Text>
      <Text style={styles.text}>• Home screen shows complete menu and average price per course.</Text>

      <Text style={styles.sectionTitle}>Submission Checklist</Text>
      <Text style={styles.text}>1. README with changelog (included in repo)</Text>
      <Text style={styles.text}>2. GitHub repo link</Text>
      <Text style={styles.text}>3. Video demo with voice-over</Text>

      <Text style={{ color: '#666', marginTop: 12 }}>This app stores data in memory (array) as required — no persistent storage used.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F7F8FA', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
  sectionTitle: { fontWeight: '700', marginTop: 12 },
  text: { color: '#333', marginTop: 6 },
});
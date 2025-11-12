import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 10 },
  title: { fontSize: 24, fontWeight: '700', color: '#111' },
});
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#000' }}>Let's log your books</Text>
      <Button title={'Add a book'} onPress={() => navigation.navigate('Add')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    color: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

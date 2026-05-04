import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galeria Snack Expo</Text>

      {/* Primeira Imagem - Usando URL externa */}
      <View style={styles.card}>
        <Text style={styles.label}>gif exemplo: </Text>
        <Image 
          source={{ uri: 'https://cdn.dribbble.com/userupload/23994797/file/original-2d76b94d546f5ad8536bc74ba030c2ca.gif' }} 
          style={styles.image} 
        />
      </View>

      {/* Segunda Imagem - Usando URL externa */}
      <View style={styles.card}>
        <Text style={styles.label}>Imagem exemplo:</Text>
        <Image 
          source={{ uri: 'https://static.wikia.nocookie.net/aesthetics/images/c/c9/Low_poly_3D_duck.png/revision/latest/thumbnail/width/360/height/360?cb=20230607162105' }} 
          style={styles.image} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover', // Garante que a imagem preencha o espaço sem distorcer
  },
});

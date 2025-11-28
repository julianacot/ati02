
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>
        Estudante do curso de Ciências da Computação. Estou na minha segunda formação e esse curso vem sendo bem desafiador para mim. 
        No momento estou me aprofundando em desenvolvimento web, explorando tecnologias como React, Next.js. 
        Apesar das dificuldades, cada avanço, por menor que seja, me motiva a continuar aprendendo.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e9f1da',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a7a4a',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

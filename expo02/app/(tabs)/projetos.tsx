
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <Text style={styles.sectionTitle}>Portfólio Web</Text>
      <Text style={styles.text}>
        Desenvolvimento de um portfólio utilizando React e Next.js, com integração de componentes dinâmicos e design responsivo.
      </Text>

      <Text style={styles.sectionTitle}>Aplicativo Mobile</Text>
      <Text style={styles.text}>
        Criação de um app em React Native com Expo, incluindo navegação com Expo Router e integração de recursos multimídia.
      </Text>

      <Text style={styles.sectionTitle}>Jogo da Forca</Text>
      <Text style={styles.text}>
        Implementação de um jogo simples para descontrair, utilizando lógica em JavaScript e interface amigável.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e9f1da',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a7a4a',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a7a4a',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
});


import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <Text style={styles.sectionTitle}>Ciências da Computação</Text>
      <Text style={styles.text}>
        Universidade Católica de Pernambuco — 4° Período (cursando).
        Foco em desenvolvimento web e mobile, com estudos em React, Next.js e Expo.
      </Text>

      <Text style={styles.sectionTitle}>Cursos Complementares</Text>
      <Text style={styles.text}>
        • Desenvolvimento Web com HTML, CSS e JavaScript.
        • Introdução à Programação em Python.
        • Estrutura de Dados e Algoritmos.
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

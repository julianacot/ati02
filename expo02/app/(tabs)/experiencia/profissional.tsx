
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <Text style={styles.sectionTitle}>Desenvolvimento Web</Text>
      <Text style={styles.text}>
        Participação em projetos utilizando React e Next.js, com foco em interfaces responsivas e integração com APIs.
      </Text>

      <Text style={styles.sectionTitle}>Projetos Acadêmicos</Text>
      <Text style={styles.text}>
        Desenvolvimento de aplicações em Python e Java para resolução de problemas e automação de tarefas.
      </Text>

      <Text style={styles.sectionTitle}>Habilidades</Text>
      <Text style={styles.text}>
        • HTML, CSS, JavaScript
        • React, Next.js, Expo
        • Python, Java, C
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

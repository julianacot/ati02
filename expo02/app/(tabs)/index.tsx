
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/foto.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Juliana Tenório</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/experiencia/profissional')}>
        <Text style={styles.botaoTexto}>Experiência Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/experiencia/academica')}>
        <Text style={styles.botaoTexto}>Experiência Acadêmica</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/projetos')}>
        <Text style={styles.botaoTexto}>Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/(tabs)/jogo')}>
        <Text style={styles.botaoTexto}>Jogo da Forca</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  nome: { fontSize: 22, fontWeight: 'bold', marginBottom: 24 },
  botao: { backgroundColor: '#e9f1da', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, marginVertical: 8, width: '80%', alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

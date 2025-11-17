import { useRef, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const clickSound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      clickSound.current = new Audio.Sound();
      await clickSound.current.loadAsync(require('../../assets/images/audio/click.mp3'));
    };
    loadSound();
    return () => {
      clickSound.current?.unloadAsync();
    };
  }, []);

  const playClickSound = async () => {
    if (clickSound.current) {
      await clickSound.current.replayAsync();
    }
  };

  const handleEnviar = () => {
    Alert.alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/foto.jpg')}
          style={styles.foto}
        />
        <Text style={styles.nome}>Juliana Cristina de Oliveira Tenório</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text>
          Estudante do curso de Ciências da Computação. Estou na minha segunda formação e esse curso vem sendo bem desafiador para mim. No momento estou me aprofundando em desenvolvimento web, explorando tecnologias como React, Next.js. Apesar das dificuldades, cada avanço, por menor que seja, me motiva a continuar aprendendo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação</Text>
        <Text>Ciências da Computação — Universidade Católica de Pernambuco</Text>
        <Text style={styles.pequeno}>4° Período (cursando)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        <Text>HTML / CSS / JavaScript</Text>
        <Text>React, Next.js</Text>
        <Text>Python, Java, C</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={async () => { await playClickSound(); router.push('/forca'); }}
      >
        <Text style={styles.botaoTexto}>Para descontrair</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Entre em contato</Text>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          style={[styles.input, { height: 100 }]}
          multiline
        />
        <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#e9f1da' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  foto: { width: 160, height: 280, borderRadius: 20, marginRight: 20 },
  nome: { fontSize: 24, color: '#4a7a4a', flexShrink: 1 },
  section: { width: '100%', marginBottom: 20 },
  sectionTitle: { fontSize: 20, color: '#4a7a4a', borderBottomWidth: 2, borderBottomColor: '#c0d4b5', marginBottom: 8 },
  pequeno: { fontSize: 14, color: '#555' },
  input: { borderWidth: 1, borderColor: '#4a7a4a', borderRadius: 5, padding: 10, marginBottom: 10, width: '100%' },
  botao: { backgroundColor: '#4a7a4a', padding: 12, borderRadius: 12, alignItems: 'center', marginVertical: 10 },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
});

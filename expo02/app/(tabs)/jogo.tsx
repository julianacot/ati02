import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

const palavras = [
  'GIRAFA','ACENDER','AFILHADO','BASQUETE','CONTEXTO','DESALMADO',
  'ESFIRRA','IMPACTO','OFTALMOLOGISTA','QUARENTENA','REPORTAGEM',
  'SINO','VICERA','AMENDOIM','MANJERICÃO','MENTA','MOEDA','PNEUMONIA',
  'TRILOGIA','ZEBRA','XADREZ','YAKUZA','WIFI','VAGABUNDO','UTOPIA',
  'TATUAGEM','SABONETE','RINOCERONTE','QUIMICA','PTERODATILO','ORGANOGRAMA'
];

export default function Forca() {
  const router = useRouter();
  const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
  const [palavra] = useState(palavraAleatoria);
  const [tentativas, setTentativas] = useState(6);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);

  const acertoRef = useRef<Audio.Sound | null>(null);
  const erroRef = useRef<Audio.Sound | null>(null);
  const clickRef = useRef<Audio.Sound | null>(null);
  const vitoriaRef = useRef<Audio.Sound | null>(null);
  const derrotaRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSounds = async () => {
      acertoRef.current = new Audio.Sound();
      erroRef.current = new Audio.Sound();
      clickRef.current = new Audio.Sound();
      vitoriaRef.current = new Audio.Sound();
      derrotaRef.current = new Audio.Sound();

      await acertoRef.current.loadAsync(require('../../assets/images/audio/correct-6033.mp3'));
      await erroRef.current.loadAsync(require('../../assets/images/audio/windows-error-sound-effect-35894.mp3'));
      await clickRef.current.loadAsync(require('../../assets/images/audio/click.mp3'));
      await vitoriaRef.current.loadAsync(require('../../assets/images/audio/you-win-sequence-2-183949.mp3'));
      await derrotaRef.current.loadAsync(require('../../assets/images/audio/pt077pjs7b9-game-over-sfx-6.mp3'));
    };
    loadSounds();
  }, []);

  const tocarSom = async (som: Audio.Sound | null) => {
    if (!som) return;
    try {
      await som.stopAsync();
      await som.setPositionAsync(0);
      await som.playAsync();
    } catch {}
  };

  const verificarLetra = async (letra: string) => {
    await tocarSom(clickRef.current);
    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
      await tocarSom(acertoRef.current);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativas(tentativas - 1);
      await tocarSom(erroRef.current);
    }
  };

  const palavraExibida = palavra.split('').map(l => (letrasCorretas.includes(l) ? l : '_')).join(' ');
  const venceu = palavraExibida.replace(/ /g,'') === palavra;
  const perdeu = tentativas <= 0;

  useEffect(() => { if (venceu) tocarSom(vitoriaRef.current); }, [venceu]);
  useEffect(() => { if (perdeu) tocarSom(derrotaRef.current); }, [perdeu]);

  const getForcaImage = () => {
    const imagens = [
      require('../../assets/images/forca-0.png'),
      require('../../assets/images/forca-1.png'),
      require('../../assets/images/forca-2.png'),
      require('../../assets/images/forca-3.png'),
      require('../../assets/images/forca-4.png'),
      require('../../assets/images/forca-5.png'),
      require('../../assets/images/forca-6.png'),
    ];
    return imagens[6 - tentativas];
  };

  const reiniciar = () => router.replace('/forca');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Jogo da Forca</Text>
      <Image source={getForcaImage()} style={styles.forcaImg} />
      <Text style={styles.palavra}>{palavraExibida}</Text>
      <Text style={styles.tentativas}>Tentativas restantes: {tentativas}</Text>
      <Text style={styles.letrasErradas}>Letras erradas: {letrasErradas.join(', ')}</Text>

      <View style={styles.teclado}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letra) => {
          const desativado = letrasCorretas.includes(letra) || letrasErradas.includes(letra);
          return (
            <TouchableOpacity
              key={letra}
              style={[styles.botao, desativado && styles.botaoDesativado]}
              onPress={() => !desativado && verificarLetra(letra)}
              disabled={desativado}
            >
              <Text style={styles.botaoTexto}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {venceu && <Text style={styles.vitoria}>🎉 Parabéns, você venceu!</Text>}
      {perdeu && <Text style={styles.derrota}>❌ Você perdeu! Palavra: {palavra}</Text>}

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciar}>
          <Text style={styles.botaoTexto}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoReiniciar} onPress={() => router.push('/')}>
          <Text style={styles.botaoTexto}>Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#0f3017' },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#ffcc00', marginVertical: 10, textAlign: 'center' },
  forcaImg: { width: 200, height: 200, resizeMode: 'contain', marginVertical: 15 },
  palavra: { fontSize: 28, color: '#86f08f', marginVertical: 10 },
  tentativas: { fontSize: 18, color: '#aff0a9ff' },
  letrasErradas: { fontSize: 18, color: '#aff0a9ff', marginBottom: 10 },
  teclado: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 360, marginVertical: 10 },
  botao: { width: 35, height: 35, margin: 3, backgroundColor: '#1b4d1b', alignItems: 'center', justifyContent: 'center', borderRadius: 5 },
  botaoDesativado: { backgroundColor: '#555' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
  vitoria: { color: '#00ff00', fontSize: 20, marginTop: 10 },
  derrota: { color: '#ff0000', fontSize: 20, marginTop: 10 },
  botoes: { flexDirection: 'row', gap: 15, marginTop: 20 },
  botaoReiniciar: { backgroundColor: '#1b4d1b', padding: 10, borderRadius: 5 },
});

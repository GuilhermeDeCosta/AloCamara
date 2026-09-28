import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Entypo name="megaphone" size={80} color="#0056b3" />
      </View>

      <Text style={styles.title}>Alô Câmara</Text>
      <Text style={styles.subtitle}>A sua voz diretamente na prefeitura.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.buttonPrimary} 
          activeOpacity={0.8}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.buttonPrimaryText}>Acessar o App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', padding: 24 },
  logoContainer: { backgroundColor: '#E6F0FA', padding: 24, borderRadius: 60, marginBottom: 32 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0056b3', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#666666', textAlign: 'center', marginBottom: 48 },
  buttonContainer: { width: '100%', gap: 16 },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center', width: '100%' },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
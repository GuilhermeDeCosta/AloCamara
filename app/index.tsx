import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BemVindoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Entypo name="megaphone" size={80} color="#FFFFFF" />
        </View>
        
        <Text style={styles.title}>Alô Câmara</Text>
        <Text style={styles.subtitle}>
          A tua voz na cidade. Reporta problemas, acompanha soluções e avalia os teus representantes de forma simples e direta.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.buttonPrimary} 
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.buttonPrimaryText}>Começar Agora</Text>
          <Entypo name="arrow-right" size={20} color="#FFFFFF" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0056b3' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 },
  iconContainer: { width: 140, height: 140, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#E6F0FA', textAlign: 'center', lineHeight: 28 },
  footer: { padding: 32, paddingBottom: 48 },
  buttonPrimary: { backgroundColor: '#FFFFFF', flexDirection: 'row', paddingVertical: 18, borderRadius: 16, justifyContent: 'center', alignItems: 'center', elevation: 4 },
  buttonPrimaryText: { color: '#0056b3', fontSize: 18, fontWeight: 'bold' },
  arrowIcon: { marginLeft: 8 }
});
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  // Redirecionamentos falsos que ativam as abas
  const handleLoginCidadao = () => router.replace('/(user)/chamados');
  const handleLoginAdmin = () => router.replace('/(admin)/chamados');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLoginCidadao}>
        <Text style={styles.buttonPrimaryText}>Entrar como Cidadão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleLoginAdmin}>
        <Text style={styles.buttonSecondaryText}>Entrar como Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0056b3', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666666', marginBottom: 32 },
  input: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, padding: 16, marginBottom: 16, fontSize: 16 },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 16 },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  buttonSecondary: { backgroundColor: 'transparent', paddingVertical: 16, borderRadius: 12, alignItems: 'center', borderWidth: 2, borderColor: '#0056b3' },
  buttonSecondaryText: { color: '#0056b3', fontSize: 16, fontWeight: 'bold' }
});
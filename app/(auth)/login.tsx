import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  // Funções de login falso
  const handleLoginCidadao = () => router.replace('/(user)/chamados');
  const handleLoginAdmin = () => router.replace('/(admin)/chamados');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLoginCidadao}>
        <Text style={styles.buttonPrimaryText}>Entrar como Cidadão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleLoginAdmin}>
        <Text style={styles.buttonSecondaryText}>Entrar como Admin (Prefeitura)</Text>
      </TouchableOpacity>

      {/* Novo botão que leva para a tela de Cadastro */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => router.push('/(auth)/cadastro')}>
          <Text style={styles.registerLink}>Cadastre-se aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0056b3', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666666', marginBottom: 32 },
  input: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, padding: 14, marginBottom: 16, fontSize: 16, backgroundColor: '#F9F9F9' },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 16 },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  buttonSecondary: { backgroundColor: 'transparent', paddingVertical: 16, borderRadius: 12, alignItems: 'center', borderWidth: 2, borderColor: '#0056b3' },
  buttonSecondaryText: { color: '#0056b3', fontSize: 16, fontWeight: 'bold' },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 32 },
  registerText: { color: '#666', fontSize: 15 },
  registerLink: { color: '#0056b3', fontSize: 15, fontWeight: 'bold' }
});
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CadastroScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Junte-se ao Alô Câmara e participe ativamente da sua cidade.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" keyboardType="email-address" autoCapitalize="none" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Crie uma senha" secureTextEntry />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput style={styles.input} placeholder="Repita a senha" secureTextEntry />

        <TouchableOpacity 
          style={styles.buttonPrimary} 
          // Após o cadastro "falso", manda o usuário direto para o painel
          onPress={() => router.replace('/(user)/chamados')}
        >
          <Text style={styles.buttonPrimaryText}>Cadastrar e Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary} 
          onPress={() => router.back()} // Volta para a tela de login
        >
          <Text style={styles.buttonSecondaryText}>Já tenho uma conta. Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#FFFFFF', padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0056b3', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666666', marginBottom: 32, lineHeight: 24 },
  form: { width: '100%' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, padding: 14, marginBottom: 16, fontSize: 16, backgroundColor: '#F9F9F9' },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 16, marginBottom: 16 },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  buttonSecondary: { paddingVertical: 16, alignItems: 'center' },
  buttonSecondaryText: { color: '#0056b3', fontSize: 16, fontWeight: 'bold' }
});
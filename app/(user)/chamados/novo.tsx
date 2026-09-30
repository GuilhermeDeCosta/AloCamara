import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function NovoChamado() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Abrir Novo Chamado</Text>
      <Text style={styles.subtitle}>Descreva o problema ou sugestão para a prefeitura.</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} placeholder="Ex: Lâmpada queimada na rua X" />

      <Text style={styles.label}>Categoria</Text>
      <TextInput style={styles.input} placeholder="Ex: Iluminação Pública" />

      <Text style={styles.label}>Descrição</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Detalhe o máximo possível..." 
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.back()}>
        <Text style={styles.buttonPrimaryText}>Enviar Solicitação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0056b3', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
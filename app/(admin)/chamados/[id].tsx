import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DetalheChamadoAdmin() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>ID do Chamado: {id}</Text>
        <Text style={styles.title}>Semáforo avariado</Text>
        <Text style={styles.description}>
          O semáforo do cruzamento principal está intermitente há dois dias, causando risco de acidentes durante a noite.
        </Text>
        <Text style={styles.citizenInfo}>Reportado por: Maria Silva (mariasilva@email.com)</Text>
      </View>

      <Text style={styles.sectionTitle}>Atualizar Estado do Chamado</Text>
      
      <Text style={styles.labelInput}>Novo Estado</Text>
      <TextInput style={styles.input} value="Em Resolução" editable={false} />

      <Text style={styles.labelInput}>Resposta Oficial da Câmara</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Escreva a resposta que o munícipe irá ler..." 
        multiline={true}
        numberOfLines={5}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.back()}>
        <Text style={styles.buttonPrimaryText}>Guardar e Notificar Munícipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 8, elevation: 2, marginBottom: 24 },
  label: { color: '#666', fontSize: 14, marginBottom: 8 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  description: { fontSize: 16, color: '#444', lineHeight: 24, marginBottom: 16 },
  citizenInfo: { fontSize: 14, fontStyle: 'italic', color: '#777', borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#0056b3', marginBottom: 16 },
  labelInput: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16, backgroundColor: '#FFF' },
  textArea: { height: 120, textAlignVertical: 'top' },
  buttonPrimary: { backgroundColor: '#2E7D32', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
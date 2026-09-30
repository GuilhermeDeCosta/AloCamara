import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetalheChamado() {
  const { id } = useLocalSearchParams(); // Pega o ID passado na URL

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.badgeText}>Status: Em andamento</Text>
        <Text style={styles.title}>Buraco na rua (ID: {id})</Text>
        <Text style={styles.description}>
          Existe um buraco muito grande no cruzamento da Rua das Flores. O asfalto cedeu após as chuvas da última semana.
        </Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.responseTitle}>Resposta da Prefeitura:</Text>
        <Text style={styles.responseText}>
          "A equipe de obras já foi notificada e o reparo está agendado para a próxima sexta-feira."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 8, elevation: 2 },
  badgeText: { color: '#0056b3', fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  description: { fontSize: 16, color: '#555', lineHeight: 24 },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 16 },
  responseTitle: { fontSize: 14, fontWeight: 'bold', color: '#0056b3', marginBottom: 8 },
  responseText: { fontSize: 15, color: '#444', fontStyle: 'italic' }
});
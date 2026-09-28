import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChamadosUsuario() {
  const router = useRouter();
  const chamados = [{ id: '1', titulo: 'Buraco na rua', status: 'Em andamento' }];

  return (
    <View style={styles.container}>
      <FlatList
        data={chamados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.badgeText}>{item.status}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/(user)/chamados/novo')}>
        <Entypo name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, elevation: 2, marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  badgeText: { color: '#0056b3', fontSize: 12, marginTop: 8 },
  fab: { position: 'absolute', bottom: 24, right: 24, backgroundColor: '#0056b3', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center' }
});
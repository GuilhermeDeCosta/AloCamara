import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const chamadosPendentes = [
  { id: '101', titulo: 'Semáforo avariado', bairro: 'Centro', status: 'Pendente', data: '12/10/2023' },
  { id: '102', titulo: 'Buraco na via', bairro: 'Bairro Alto', status: 'Em Análise', data: '14/10/2023' },
];

export default function ListaChamadosAdmin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={chamadosPendentes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => router.push(`/(admin)/chamados/${item.id}`)}
          >
            <View style={styles.headerCard}>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text style={[styles.badge, item.status === 'Pendente' ? styles.badgePendente : styles.badgeAnalise]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.info}>Bairro: {item.bairro} | Data: {item.data}</Text>
            <View style={styles.actionRow}>
              <Text style={styles.actionText}>Responder / Atualizar</Text>
              <Entypo name="chevron-right" size={20} color="#0056b3" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  headerCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, fontSize: 12, fontWeight: 'bold', overflow: 'hidden' },
  badgePendente: { backgroundColor: '#FFE0B2', color: '#E65100' },
  badgeAnalise: { backgroundColor: '#BBDEFB', color: '#0D47A1' },
  info: { fontSize: 14, color: '#666', marginBottom: 12 },
  actionRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 12 },
  actionText: { fontSize: 14, color: '#0056b3', fontWeight: 'bold', marginRight: 4 }
});
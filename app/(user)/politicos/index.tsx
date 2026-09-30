import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const politicosFalsos = [
  { id: '1', nome: 'Vereador Carlos Silva', partido: 'Partido A (PA)', cargo: 'Vereador' },
  { id: '2', nome: 'Prefeita Ana Souza', partido: 'Partido B (PB)', cargo: 'Prefeita' },
];

export default function ListaPoliticos() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={politicosFalsos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => router.push(`/(user)/politicos/${item.id}`)}
          >
            <View style={styles.avatar}>
              <Entypo name="user" size={32} color="#0056b3" />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.role}>{item.cargo} - {item.partido}</Text>
            </View>
            <Entypo name="chevron-right" size={24} color="#CCC" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 12, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E6F0FA', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  role: { fontSize: 14, color: '#666', marginTop: 4 }
});
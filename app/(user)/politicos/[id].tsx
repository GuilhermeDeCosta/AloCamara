import { Entypo } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DetalhePolitico() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Entypo name="user" size={50} color="#0056b3" />
        </View>
        <Text style={styles.name}>Vereador Carlos Silva</Text>
        <Text style={styles.role}>Partido A (PA)</Text>
      </View>

      <Text style={styles.sectionTitle}>Avalie o mandato:</Text>
      <View style={styles.starsContainer}>
        <Entypo name="star" size={32} color="#FFD700" />
        <Entypo name="star" size={32} color="#FFD700" />
        <Entypo name="star" size={32} color="#FFD700" />
        <Entypo name="star" size={32} color="#FFD700" />
        <Entypo name="star-outlined" size={32} color="#FFD700" />
      </View>

      <TextInput 
        style={styles.input} 
        placeholder="Deixe um comentário sobre o trabalho do político..." 
        multiline={true}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.back()}>
        <Text style={styles.buttonPrimaryText}>Enviar Avaliação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24 },
  header: { alignItems: 'center', marginBottom: 32 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#E6F0FA', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  role: { fontSize: 16, color: '#666' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 16, textAlign: 'center' },
  starsContainer: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, fontSize: 16, height: 120, textAlignVertical: 'top', marginBottom: 24 },
  buttonPrimary: { backgroundColor: '#0056b3', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  buttonPrimaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
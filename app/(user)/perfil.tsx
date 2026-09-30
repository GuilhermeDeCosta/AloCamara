import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Entypo name="user" size={40} color="#0056b3" />
        </View>
        <View>
          <Text style={styles.name}>João Cidadão</Text>
          <Text style={styles.email}>joao.cidadao@email.com</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Entypo name="v-card" size={24} color="#666" />
          <Text style={styles.menuText}>Meus Dados</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Entypo name="bell" size={24} color="#666" />
          <Text style={styles.menuText}>Notificações</Text>
        </TouchableOpacity>

        {/* Botão de Logout volta para a tela inicial */}
        <TouchableOpacity style={styles.menuItemLogout} onPress={() => router.replace('/')}>
          <Entypo name="log-out" size={24} color="#D32F2F" />
          <Text style={styles.menuTextLogout}>Sair do Aplicativo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 20, borderRadius: 8, elevation: 2, marginBottom: 24 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#E6F0FA', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 14, color: '#666', marginTop: 4 },
  menu: { backgroundColor: '#FFF', borderRadius: 8, elevation: 2, overflow: 'hidden' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  menuText: { fontSize: 16, color: '#333', marginLeft: 16 },
  menuItemLogout: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  menuTextLogout: { fontSize: 16, color: '#D32F2F', marginLeft: 16, fontWeight: 'bold' }
});
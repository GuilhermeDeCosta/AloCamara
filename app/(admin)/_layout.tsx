import { Entypo } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function AdminLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0056b3' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => router.replace('/')} style={{ marginRight: 16 }}>
            <Entypo name="log-out" size={24} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen 
        name="chamados/index" 
        options={{ title: 'Painel Administrativo' }} 
      />
      <Stack.Screen 
        name="chamados/[id]" 
        options={{ title: 'Gerir Chamado' }} 
      />
    </Stack>
  );
}
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function UserLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#0056b3',
        headerStyle: { backgroundColor: '#0056b3' },
        headerTintColor: '#FFFFFF'
    }}>
      <Tabs.Screen 
        name="chamados" 
        options={{ 
          title: 'Meus Chamados',
          headerTitle: 'Chamados',
          tabBarIcon: ({ color }) => <Entypo name="list" size={24} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="politicos" 
        options={{ 
          title: 'Políticos', 
          tabBarIcon: ({ color }) => <Entypo name="users" size={24} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="perfil" 
        options={{ 
          title: 'Perfil', 
          tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} /> 
        }} 
      />
    </Tabs>
  );
}
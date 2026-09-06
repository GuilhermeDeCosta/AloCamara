import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function IndexScreen() {
  return (
    <View style={styles.container}>
      
      {/* Área do Ícone / Logo */}
      <View style={styles.logoContainer}>
        {/* Ícone de megafone/chat para representar a voz do cidadão */}

      </View>

      {/* Textos de Boas-vindas */}
      <Text style={styles.title}>Alô Câmara</Text>
      <Text style={styles.subtitle}>
        A sua voz diretamente na prefeitura. {'\n'}
        Relate problemas, envie sugestões e avalie seus políticos locais.
      </Text>

      {/* Botões de Ação (Apenas visuais por enquanto) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary} activeOpacity={0.8}>
          <Text style={styles.buttonPrimaryText}>Entrar como Cidadão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} activeOpacity={0.8}>
          <Text style={styles.buttonSecondaryText}>Acesso da Prefeitura</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé simples */}
      <Text style={styles.footerText}>Versão 1.0.0 - Projeto Inicial</Text>
      
    </View>
  );
}

// Estilos utilizando as cores Branca (Fundo) e Azul (Destaques)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fundo branco
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    backgroundColor: '#E6F0FA', // Fundo azul bem claro para dar destaque ao ícone
    padding: 24,
    borderRadius: 60,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0056b3', // Azul escuro
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    gap: 16, // Espaçamento entre os botões
  },
  buttonPrimary: {
    backgroundColor: '#0056b3', // Fundo azul
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    elevation: 2, // Sombra leve no Android
    shadowColor: '#000', // Sombra leve no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonPrimaryText: {
    color: '#FFFFFF', // Texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#0056b3', // Borda azul
  },
  buttonSecondaryText: {
    color: '#0056b3', // Texto azul
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 40,
    fontSize: 12,
    color: '#A0A0A0',
  }
});
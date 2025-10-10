import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout(); 
      navigation.replace("Login"); 
    } catch (error) {
      Alert.alert("Erro", "Não foi possível sair da conta.");
      console.error("Erro ao sair:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text style={{ color: "#888", marginTop: 10 }}>Carregando perfil...</Text>
      </View>
    );
  }

  const isProdutor = user.role === "Produtor";
  const avatarUri = isProdutor
    ? "https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
    : "https://cdn-icons-png.flaticon.com/512/1995/1995574.png";

  const roleDescription = isProdutor
    ? "Gestão da fazenda"
    : "Relatórios e analytics";

  const infoItems = isProdutor
    ? ["Soja", "Milho", "Café"]
    : ["Monitoramento de exportações", "Análises de produtividade"];

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <Text style={styles.name}>{user.email}</Text>
        <Text style={styles.role}>{`${user.role} - ${roleDescription}`}</Text>
      </View>

     
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📍 Localização</Text>
        <Text style={styles.infoText}>São Paulo, Brasil</Text>

        <Text style={styles.infoTitle}>📅 Data de Cadastro</Text>
        <Text style={styles.infoText}>06 de Outubro de 2025</Text>

        {isProdutor ? (
          <>
            <Text style={styles.infoTitle}>🌱 Tipos de Cultivo</Text>
            {infoItems.map((item, index) => (
              <Text key={index} style={styles.infoText}>• {item}</Text>
            ))}
          </>
        ) : (
          <>
            <Text style={styles.infoTitle}>📊 Áreas de Gestão</Text>
            {infoItems.map((item, index) => (
              <Text key={index} style={styles.infoText}>• {item}</Text>
            ))}
          </>
        )}
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={[styles.logoutButton, isLoggingOut && { opacity: 0.6 }]}
        disabled={isLoggingOut}
      >
        {isLoggingOut ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.logoutText}>Sair</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  header: { alignItems: "center", marginTop: 60, marginBottom: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  role: { fontSize: 15, color: "#32CD32", marginTop: 4, textAlign: "center" },
  infoCard: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
  },
  infoTitle: { fontWeight: "bold", color: "#333", marginTop: 10 },
  infoText: { color: "gray", marginTop: 4 },
  logoutButton: { backgroundColor: "#e74c3c", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  logoutText: { color: "#fff", fontWeight: "bold" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

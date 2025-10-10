import React, { useContext } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function HomeGestorScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  
  const fazendas = [
    { id: "1", nome: "Fazenda Boa Esperança", cultura: "Soja", producao: 350 },
    { id: "2", nome: "Sítio Primavera", cultura: "Milho", producao: 280 },
    { id: "3", nome: "Fazenda Rio Verde", cultura: "Café", producao: 400 },
    { id: "4", nome: "AgroVale", cultura: "Algodão", producao: 150 },
  ];

  
  const ranking = [...fazendas].sort((a, b) => b.producao - a.producao);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌾 Bem-vindo, {user?.email || "Gestor"}!</Text>
      <Text style={styles.subHeader}>Empresas e Fazendas sob sua gestão:</Text>

      
      <FlatList
        data={fazendas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.fazendaNome}>{item.nome}</Text>
              <Text style={styles.fazendaCultura}>🌱 Cultura: {item.cultura}</Text>
            </View>
            <Text style={styles.producaoText}>{item.producao} ton</Text>
          </View>
        )}
      />

      
      <View style={styles.rankingCard}>
        <Text style={styles.rankingTitle}>🏆 Ranking de Produção</Text>
        {ranking.map((item, index) => (
          <View key={item.id} style={styles.rankingItem}>
            <Text style={styles.rankingPosition}>{index + 1}º</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.rankingName}>{item.nome}</Text>
              <Text style={styles.rankingCulture}>{item.cultura}</Text>
            </View>
            <Text style={styles.rankingValue}>{item.producao} ton</Text>
          </View>
        ))}
      </View>

     
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="bar-chart-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Ver Relatórios Detalhados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f8f5", padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", color: "#1b5e20", marginTop: 20 },
  subHeader: { fontSize: 15, color: "#555", marginBottom: 10, marginTop: 6 },
  
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
    elevation: 3,
  },
  fazendaNome: { fontWeight: "bold", color: "#333", fontSize: 16 },
  fazendaCultura: { color: "#666", marginTop: 4 },
  producaoText: { fontWeight: "bold", color: "#2e7d32" },

  rankingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    elevation: 2,
  },
  rankingTitle: { fontSize: 17, fontWeight: "bold", color: "#1b5e20", marginBottom: 10 },
  rankingItem: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  rankingPosition: { fontSize: 16, fontWeight: "bold", width: 25, color: "#388e3c" },
  rankingName: { fontSize: 15, fontWeight: "600", color: "#333" },
  rankingCulture: { fontSize: 13, color: "#777" },
  rankingValue: { fontSize: 14, fontWeight: "bold", color: "#2e7d32" },

  button: {
    flexDirection: "row",
    backgroundColor: "#2e7d32",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: { color: "#fff", fontWeight: "bold", marginLeft: 8 },
});

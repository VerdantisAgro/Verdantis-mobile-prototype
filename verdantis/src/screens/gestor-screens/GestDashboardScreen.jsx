import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { BarChart, LineChart } from "react-native-chart-kit";

export default function DashboardGestorScreen() {
  const { user } = useContext(AuthContext);
  const screenWidth = Dimensions.get("window").width - 40;

  // 🔹 Dados simulados — Produção por fazenda
  const fazendasData = [
    { nome: "Boa Esperança", producao: 350 },
    { nome: "Primavera", producao: 280 },
    { nome: "Rio Verde", producao: 400 },
    { nome: "AgroVale", producao: 150 },
  ];

  // 🔹 Dados de crescimento por mês
  const crescimentoData = [
    { mes: "Jan", producao: 1200 },
    { mes: "Fev", producao: 1450 },
    { mes: "Mar", producao: 1600 },
    { mes: "Abr", producao: 1900 },
    { mes: "Mai", producao: 2100 },
    { mes: "Jun", producao: 2500 },
  ];

  // 🔹 Estatísticas rápidas
  const total = fazendasData.reduce((acc, f) => acc + f.producao, 0);
  const media = Math.round(total / fazendasData.length);
  const melhor = fazendasData.reduce((a, b) => (a.producao > b.producao ? a : b));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📊 Dashboard de Produção</Text>
      <Text style={styles.subtitle}>
        Olá, {user?.email || "Gestor"}! Aqui estão seus indicadores agrícolas.
      </Text>

      {/* Estatísticas principais */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Produção Total</Text>
          <Text style={styles.statValue}>{total} ton</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Média por Fazenda</Text>
          <Text style={styles.statValue}>{media} ton</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Melhor Fazenda</Text>
          <Text style={styles.statValue}>{melhor.nome}</Text>
        </View>
      </View>

      {/* Gráfico de produção por fazenda */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>🌾 Produção por Fazenda</Text>
        <BarChart
          data={{
            labels: fazendasData.map(f => f.nome),
            datasets: [{ data: fazendasData.map(f => f.producao) }],
          }}
          width={screenWidth}
          height={250}
          yAxisSuffix="t"
          fromZero
          chartConfig={chartConfig}
          showValuesOnTopOfBars
          style={styles.chart}
        />
      </View>

      {/* Gráfico de crescimento mensal */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>📈 Crescimento Mensal</Text>
        <LineChart
          data={{
            labels: crescimentoData.map(c => c.mes),
            datasets: [{ data: crescimentoData.map(c => c.producao) }],
          }}
          width={screenWidth}
          height={250}
          yAxisSuffix="t"
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <Text style={styles.footer}>
        Atualizado automaticamente com base nas fazendas contratadas.
      </Text>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#e8f5e9",
  backgroundGradientTo: "#c8e6c9",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16 },
  propsForDots: { r: "5" },
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f8f5", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#1b5e20", marginTop: 15 },
  subtitle: { fontSize: 15, color: "#555", marginBottom: 20 },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  statCard: {
    width: "31%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  statLabel: { color: "#555", fontSize: 13 },
  statValue: { fontWeight: "bold", color: "#1b5e20", fontSize: 16, marginTop: 4 },
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    marginBottom: 25,
    alignItems: "center",
  },
  chartTitle: { fontWeight: "bold", fontSize: 16, color: "#333", marginBottom: 10 },
  chart: { borderRadius: 16 },
  footer: { textAlign: "center", color: "#777", fontSize: 12, marginBottom: 10 },
});

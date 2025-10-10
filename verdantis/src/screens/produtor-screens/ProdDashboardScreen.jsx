import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons"; 

const screenWidth = Dimensions.get("window").width - 60;

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Painel de Produção 🌱</Text>

      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="leaf-outline" size={26} color="#1D6B3A" />
          <Text style={styles.cardTitle}>Produção Mensal (kg)</Text>
        </View>

        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
              datasets: [{ data: [800, 950, 1100, 1250, 1200, 1450] }],
            }}
            width={screenWidth}
            height={220}
            yAxisSuffix="kg"
            chartConfig={{
              backgroundGradientFrom: "#E8F3E8",
              backgroundGradientTo: "#F8FBF8",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(88, 165, 92, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(51, 94, 73, ${opacity})`,
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#A9D59A",
                fill: "#1D6B3A",
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>
      </View>

      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="water-outline" size={26} color="#1D6B3A" />
          <Text style={styles.cardTitle}>Consumo de Água (L)</Text>
        </View>

        <View style={styles.chartContainer}>
          <BarChart
            data={{
              labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
              datasets: [{ data: [100, 90, 85, 80, 78, 75] }],
            }}
            width={screenWidth}
            height={220}
            yAxisSuffix="L"
            chartConfig={{
              backgroundGradientFrom: "#E8F3E8",
              backgroundGradientTo: "#F8FBF8",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(51, 94, 73, ${opacity})`,
            }}
            style={styles.chart}
            showValuesOnTopOfBars
          />
        </View>
      </View>

     
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="speedometer-outline" size={26} color="#1D6B3A" />
          <Text style={styles.cardTitle}>Eficiência Operacional</Text>
        </View>
        <Text style={styles.value}>91%</Text>
        <Text style={styles.subtitle}>+5% em relação ao último mês</Text>
      </View>

     
      <View style={[styles.card, styles.progressCard]}>
        <Text style={styles.progressTitle}>Progresso da Safra</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "72%" }]} />
        </View>
        <Text style={styles.progressText}>72% concluído</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FBF8",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1D6B3A",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
    color: "#1D6B3A",
  },
  chartContainer: {
    overflow: "hidden",
    borderRadius: 16,
  },
  chart: {
    borderRadius: 16,
  },
  value: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: 14,
    color: "#557C68",
    marginTop: 4,
  },
  progressCard: {
    alignItems: "center",
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1D6B3A",
    marginBottom: 10,
  },
  progressBar: {
    width: "100%",
    height: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#58A55C",
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: "#2E7D32",
    fontWeight: "500",
  },
});

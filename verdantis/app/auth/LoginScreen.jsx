import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LogoHeader from "../../src/components/generic/logoHeader";
import PrimaryButton from "../../src/components/generic/primaryButton";
import LinkText from "../../src/components/generic/linkText";
import { AuthContext } from "../../src/context/AuthContext"; 

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.replace("Main");
    } catch (err) {
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/agro-image-2.png")}
      style={styles.container}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <LogoHeader />

       
        <View style={styles.inputWrapper}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#4ade80"
            style={styles.icon}
          />
          <TextInput
            style={styles.loginInput}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        
        <View style={styles.inputWrapper}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#4ade80"
            style={styles.icon}
          />
          <TextInput
            style={styles.loginInput}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        
        <PrimaryButton
          label="Entrar"
          onPress={handleLogin}
          style={{ marginTop: 25, width: "100%" }}
        />

        
        <Text style={styles.orText}>ou continue com</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={22} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={22} color="#000" />
          </TouchableOpacity>
        </View>

      
        <View style={{ marginTop: 25 }}>
          <LinkText
            text="Ainda não tem conta?"
            highlight="Cadastre-se"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  content: {
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    width: "90%",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignSelf: "center",
  },
  loginInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    backgroundColor: "transparent",
  },
  icon: { marginRight: 8 },
  orText: {
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 50,
    elevation: 3,
  },
});

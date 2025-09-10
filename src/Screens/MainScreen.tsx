import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "../Styles/MainStyles";
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen({ navigation }: any) {
  // Lista de links sociais para renderização dinâmica
  const socialLinks = [
    { uri: require("../../assets/Github.png"), url: "https://github.com/Carloscb124" },
    { uri: require("../../assets/linkedin.png"), url: "https://www.linkedin.com/in/carloscb124/" },
    { uri: require("../../assets/email.png"), url: "mailto:cb473355@gmail.com" },
  ];
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/avatar.jpg")} style={styles.avatar} />
      <Text style={styles.name}>Carlos Eduardo</Text>

      <View style={styles.iconContainer}>
        {socialLinks.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(item.url)}
            activeOpacity={0.7} // efeito visual ao clicar
          >
            <Image source={item.uri} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Skills")}>
        <Text style={styles.buttonText}>Ver Habilidades</Text>
        <Ionicons name="arrow-down-outline" size={20} color="#fff" style={{ marginLeft: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Resume")}>
        <Text style={styles.buttonText}>Ver Currículo</Text>
      </TouchableOpacity>

    </View>
  );
}

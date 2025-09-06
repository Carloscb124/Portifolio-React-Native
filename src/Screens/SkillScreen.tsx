import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../Styles/SkillStyles";

export default function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: '#0f0e17'}}>
      <Image source={require("../../assets/avatar.jpg")} style={styles.avatar} />
      <Text style={styles.name}>Carlos Eduardo</Text>
      <Text style={styles.subtitle}>SKILLS</Text>

      {/* Exemplo de Skill Card */}
      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/react.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>React Native</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "20%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/js.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>JavaScript</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "30%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/typescript.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>TypeScript</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "20%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/nodejs.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>Node.Js</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "35%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/cs.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>C#</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "20%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/html.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>HTML</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "40%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/css-3.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>CSS</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "37%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/wordpress.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>Wordpress</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "60%" }]} />
        </View>
      </View>

      <View style={styles.skillCard}>
        <View style={styles.skillRow}>
          <Image
            source={require("../../assets/figma.png")}
            style={styles.skillIcon}
          />
          <Text style={styles.skillText}>Figma</Text>
        </View>
        <View style={styles.skillLevelContainer}>
          <View style={[styles.skillLevel, { width: "40%" }]} />
        </View>
      </View>

    </ScrollView>
  );
}
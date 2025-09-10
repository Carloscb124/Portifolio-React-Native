import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ResumeScreen() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://drive.google.com/file/d/1cHTyjz5J1xdkgpLT0yXE8QS3Cozh5vhT/view?usp=sharing" }} 
        style={styles.webview} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0e17",
  },
  webview: {
    flex: 1,
  },
});

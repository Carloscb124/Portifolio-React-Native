import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: "#0f0e17",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 20,
    color: "#fffffe",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fffffe",
    marginBottom: 16,
    letterSpacing: 1,
},
  skillCard: {
    backgroundColor: "#1f1d2b",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  skillIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  skillText: {
    fontSize: 18,
    color: "#fffffe",
    fontWeight: "600",
  },
  skillLevelContainer: {
    height: 8,
    backgroundColor: "#2e2e3a",
    borderRadius: 4,
    width: "100%",
  },
  skillLevel: {
    height: 8,
    backgroundColor: "#ff8906",
    borderRadius: 4,
  },
});

export default styles;
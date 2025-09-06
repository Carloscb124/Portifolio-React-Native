import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e17',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100
  },
  avatar:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: "#fffffe"
  },
  link:{
    fontSize: 18,
    color: 'blue',
    marginBottom: 6
  },
  iconContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 20, // espaço entre os ícones e outros elementos
  marginTop: 150
},
icon: {
  width: 50,
  height: 50,
  marginHorizontal: 12, // espaçamento lateral, não usa marginVertical
},
button: {
  backgroundColor: "#ff8906",
  paddingVertical: 14,
  paddingHorizontal: 28,
  borderRadius: 30,
  marginTop: 40,
  flexDirection: "row", // organiza ícone + texto em linha
  justifyContent: "center",
  alignItems: "center",

  // sombra (Android + iOS)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},

buttonContent: {
  flexDirection: "row",
  alignItems: "center",
},

buttonText: {
  color: "#fffffe",
  fontSize: 18,
  fontWeight: "600",
  textAlign: "center",
},
});

export default styles


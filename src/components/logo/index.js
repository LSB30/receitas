import { View, Text, StyleSheet } from "react-native"

export function Logo() {
  return (
    <View style={styles.logoarea}>
      <Text style={styles.logo}>Receita Fácil</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  logoarea: {
    backgroundColor: "#4CBE6C",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 18,
    paddingRight: 20,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8,
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  }
})
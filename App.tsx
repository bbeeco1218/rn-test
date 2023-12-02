import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Open up Ap to start !!!!aaa!!</Text>
      <Text style={styles.text}>Open up Ap to start !!!!aaa!!</Text>
      <Text style={styles.text}>Open up Ap to start !!!!aaa!!</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "red",
  },
});

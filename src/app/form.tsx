import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Switch,
  Alert,
  ScrollView,
} from "react-native";

export default function FormScreen() {
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const [isAlertOn, setIsAlertOn] = useState(false);

  const handleSubmit = () => {
    const formData = {
      budgetName,
      amount: parseFloat(amount) || 0,
      alertsEnabled: isAlertOn,
      createdAt: new Date().toISOString(),
    };

    // Prints the JSON object directly to your terminal console
    console.log("Form Data JSON:", JSON.stringify(formData, null, 2));
    Alert.alert("Success", "Form data sent to console as JSON!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>MoMo-Budget Form</Text>

      <Text style={styles.label}>Budget Category</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Transport, Food"
        value={budgetName}
        onChangeText={setBudgetName}
      />

      <Text style={styles.label}>Budget Limit ($)</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Enable Spending Alerts</Text>
        <Switch value={isAlertOn} onValueChange={setIsAlertOn} />
      </View>

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit to Console</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 6, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

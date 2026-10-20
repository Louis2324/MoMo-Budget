import { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, View } from "react-native";

export default function InputTestingScreen() {
  const [textVal, setTextVal] = useState("");
  const [numVal, setNumVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [multiVal, setMultiVal] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Test Input Types</Text>

      <Text style={styles.label}>1. Default Text Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Type standard text..."
        value={textVal}
        onChangeText={setTextVal}
      />

      <Text style={styles.label}>2. Numeric Keyboard</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers only..."
        keyboardType="numeric"
        value={numVal}
        onChangeText={setNumVal}
      />

      <Text style={styles.label}>3. Email Address Keyboard</Text>
      <TextInput
        style={styles.input}
        placeholder="name@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={emailVal}
        onChangeText={setEmailVal}
      />

      <Text style={styles.label}>4. Secure Password Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter secure password..."
        secureTextEntry={true}
        value={passVal}
        onChangeText={setPassVal}
      />

      <Text style={styles.label}>5. Multiline Text Area</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Type multiple lines of text here..."
        multiline={true}
        numberOfLines={4}
        value={multiVal}
        onChangeText={setMultiVal}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flexGrow: 1 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
});

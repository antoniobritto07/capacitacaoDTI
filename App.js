import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [inputDate, setInputDate] = useState("");
  const [inputError, setInputError] = useState("");

  const validateDate = () => {
    if (isNaN(Date.parse(inputDate)) || inputDate.length !== 10) {
      setInputError("Digite uma data válida!")
    }
    else {
      setInputError("")
    }
  }

  useEffect(() => {
    validateDate();
  }, [inputDate])

  return (
    <View style={styles.container}>
      <Text>Digite uma data válida</Text>
      <TextInput
        value={inputDate}
        onChangeText={(value) => { setInputDate(value) }}
        placeholder={'yyyy-mm-dd'}
        style={styles.input}
      />
      <View style={styles.infoContainer}>
        <Text>O valor colocado no input é:</Text>
        <Text>{inputDate}</Text>
      </View>
      <Text style={styles.error}>
        {inputError}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    marginTop: 20
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 30,
    borderRadius: 12
  },
  error: {
    fontSize: 15,
    color: "red",
    marginTop: 0,
    padding: 15,
  },
});

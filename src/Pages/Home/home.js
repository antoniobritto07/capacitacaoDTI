import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
  const [inputDate, setInputDate] = useState("");
  const [brazilDate, setBrazilDate] = useState("");
  const [inputError, setInputError] = useState("");

  const formatDatetoBrazilianMode = (americanDate) => {
    const dateParts = americanDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const result = `${day}/${month}/${year}`;
    setBrazilDate(result)
  }


  const validateDate = () => {
    if (isNaN(Date.parse(inputDate)) || inputDate.length !== 10) {
      setInputError("Digite uma data válida!")
      setBrazilDate("")
    }
    else {
      setInputError("")
      formatDatetoBrazilianMode(inputDate);
    }
  }

  useEffect(() => {
    validateDate();
  }, [inputDate])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite uma data válida</Text>
      <TextInput
        value={inputDate}
        onChangeText={(value) => { setInputDate(value) }}
        placeholder={'yyyy-mm-dd'}
        style={styles.input}
      />
      <Text style={styles.error}>
        {inputError}
      </Text>
      <View style={styles.ptbrdate}>
        <Text>A data inserida no formato PR-BT é:</Text>
        <Text>{brazilDate}</Text>
      </View>
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate("Login", {
            PtBrData: brazilDate
          }
          )
        }} //comando para ir para nova página receber nome da página a qual se deseja ir
      />
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
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    marginTop: 20
  },
  error: {
    fontSize: 15,
    color: "red",
    marginTop: 0,
    padding: 15,
  },
  ptbrdate: {
    backgroundColor: 'green',
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 15,
    marginTop: 0
  },
});

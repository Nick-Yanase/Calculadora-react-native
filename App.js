import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (!pesoNum || !alturaNum) {
      setResultado('Preencha os dois campos corretamente!');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Magreza';
    else if (imc < 25) classificacao = 'Normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity style={styles.btn} onPress={calcularIMC}> 
        <Text style={styles.btnText}>Calcular</Text>
        <MaterialIcons name="calculate" size={28} color="#202020" style={{ marginRight: 10 }} />
      </TouchableOpacity>
      {resultado !== '' && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#303030', padding: '20px'
  },
  title: {
    fontSize: 24, marginBottom: 20, fontWeight: 'bold', color:'#fff'
  },
  input: {
    width: '100%', height: 40, borderWidth: 1, borderColor: '#707070',
    marginBottom: 10, borderRadius: 5, paddingLeft: 10, backgroundColor: '#606060', color: "#fff"
  },
  btn: {
    width: '100%', height: 40, backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center', borderRadius: 5, display:'flex',
    flexDirection:'row', gap:'3px'
  },
  btnText: {
    color: '#202020', fontWeight: 'bold', fontSize: 16
  },
  result: {
    marginTop: 20, fontSize: 18, fontWeight: 'bold', color:"#fff"
  }
});

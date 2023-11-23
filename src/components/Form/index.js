import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import MaskInput from "react-native-mask-input";
import styles from "../../styles/Form";

const weightBrMask = [/\d/, ".", /\d/, /\d/];
const heightBrMask = [/\d/, /\d/];

export default function Form({ valor, setValor, setImcInfo }) {
  const [altura, setAltura] = React.useState(null);
  const [peso, setPeso] = React.useState(null);

  const calc = () => {
    if (altura !== null && peso !== null) {
      const valorFixed = (peso / (altura * 2)).toFixed(1);
      setValor(valorFixed);
    } else {
      setValor("Precisa inserir um número");
    }
  };
  const limpar = () => {
    setPeso(null);
    setAltura(null);
    setValor(0);
    setImcInfo("Insira um Valor");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Altura</Text>
      <MaskInput
        style={styles.input}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={(value) => setAltura(value)}
        mask={weightBrMask}
      />
      <Text style={styles.label}>Peso</Text>
      <MaskInput
        style={styles.input}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        value={peso}
        onChangeText={(value) => setPeso(value)}
        mask={heightBrMask}
      />
      {valor === 0 ? (
        <Button title="Calcular" color={"green"} onPress={calc} />
      ) : (
        <Button title="Limpar" color={"red"} onPress={limpar} />
      )}
    </View>
  );
}

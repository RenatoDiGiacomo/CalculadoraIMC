import React from "react";
import { View } from "react-native";
import Title from "../Title";
import Form from "../Form";
import styles from "../../styles/Main";

export default function Main() {
  const [valor, setValor] = React.useState(0);
  const [imcInfo, setImcInfo] = React.useState("Insira um Valor");

  return (
    <View style={styles.container}>
      <Title valor={valor} setImcInfo={setImcInfo} imcInfo={imcInfo} />
      <Form valor={valor} setValor={setValor} setImcInfo={setImcInfo} />
    </View>
  );
}

import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles/Title";

export default function Title({ valor, imcInfo, setImcInfo }) {
  const [color, setColor] = React.useState("black");
  const [img, setImg] = React.useState(require("../../../assets/null.png"));
  React.useEffect(() => {
    if (valor !== 0) {
      if (valor <= 18.5) {
        setImcInfo("Abaixo do Normal");
        setColor("#9ABBDA");
        setImg(require("../../../assets/imc-1.png"))
      } else if (valor <= 24.9) {
        setImcInfo("Normal");
        setColor("#94CCA9");
        setImg(require("../../../assets/imc-2.png"))
      } else if (valor <= 29.9) {
        setImcInfo("Sobrepeso");
        setColor("#FFE02D");
        setImg(require("../../../assets/imc-3.png"))
      } else if (valor <= 34.9) {
        setImcInfo("Obesidade");
        setColor("#EAA353");
        setImg(require("../../../assets/imc-4.png"))
      } else if (valor >= 35.0) {
        setImcInfo("Obesidade Extrema");
        setColor("#D8424B");
        setImg(require("../../../assets/imc-5.png"))
      }
    } else {
      setImcInfo("Insira um valor");
      setColor("#000");
      setImg(require("../../../assets/null.png"))
    }
  }, [valor]);

  return (
    <View style={styles.title}>
      <Text style={styles.text}>Calculo de IMC</Text>
      {valor !== 0 && <Text>IMC: {valor}</Text>}
      <Text style={{ color: color }}>{imcInfo}</Text>
      <Image style={styles.img} source={img} />
    </View>
  );
}

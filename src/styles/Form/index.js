import { StyleSheet, Dimensions } from "react-native";

const widthData = Dimensions.get("screen").width / 2;

export default styles = StyleSheet.create({
  form: {
    width: "100%",
    flex: 1,
    backgroundColor: "#dadada",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
  },
  label: {
    width: widthData,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 21,
    fontWeight: "800",
  },
  input: {
    width: widthData,
    color: "#fff",
    backgroundColor: "#fff",
    color: "black",
    marginBottom: 21,
    borderRadius: 21,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 21,
    paddingRight: 21,
  },
  btn: {
    backgroundColor: "red",
    borderRadius: 21,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 21,
    paddingRight: 21,
  },
});

import { StyleSheet, Dimensions } from "react-native";
import { scale } from "../../../Infrastructure/utils/screenUtility";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    alignItems: "center",
  },
  form: {
    marginHorizontal: scale(50),
    marginTop: scale(20),
  },
  formTitle: {
    fontSize: scale(25),
    color: "#333246",
    fontFamily: "SourceSansPro-SemiBold",
  },
  formDetailsTitle: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: scale(18),
    color: "#797979",
    marginTop: scale(10),
  },
  formSubTitle: {
    color: "#797979",
    fontFamily: "SourceSansPro-Regular",
    fontSize: scale(16),
  },
  content: {
    marginTop: scale(36),
  },
  errorMessage: {
    fontSize: scale(10),
    color: "red",
  },
  buttonText: {
    color: "#FFFFFF",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { scale } from "../../utils/screenUtility";
const styles = StyleSheet.create({
  Image: {
    width: scale(100),
    height: scale(50),
    resizeMode: "contain",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(5),
  },
});

export default styles;

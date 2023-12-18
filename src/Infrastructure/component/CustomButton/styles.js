import { StyleSheet } from "react-native";
import { scale } from "../../../Infrastructure/utils/screenUtility";
import colors from "../../assets/colors/colors";
const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.NeonAquaBlue,
    height: scale(40),
    borderRadius: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  Buttontext: {
    color: colors.White,
    fontSize: scale(18),
    fontFamily: "SourceSansPro-Bold",
  },
});
export default styles;

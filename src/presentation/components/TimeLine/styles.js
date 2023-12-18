import { StyleSheet } from "react-native";
import colors from "../../../Infrastructure/assets/colors/colors";
import { scale } from "../../../Infrastructure/utils/screenUtility";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },

  TextStyle: {
    fontSize: scale(16),
    fontFamily: "SourceSansPro-Regular",
    color: colors.customBlack,
  },
});
export default styles;

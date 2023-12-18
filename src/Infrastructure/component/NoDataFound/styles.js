import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { scale } from "../../utils/screenUtility";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: colors.Matterhorn,
    fontSize: scale(16),
    fontFamily: "SourceSansPro-Semibold",
  },
  Image: { width: scale(200), height: scale(200) },
});

export default styles;

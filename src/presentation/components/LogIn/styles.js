import { StyleSheet } from "react-native";
import colors from "../../../Infrastructure/assets/colors/colors";
import { scale } from "../../../Infrastructure/utils/screenUtility";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  logo: {
    marginHorizontal: scale(20),
  },
  form: {
    marginHorizontal: scale(20),
  },
  content: {
    marginTop: scale(20),
  },
  forgotContent: {
    marginTop: scale(16),
  },
  linkText: {
    textDecorationLine: "underline",
    fontSize: scale(14),
    color: colors.NeonAquaBlue,
    fontFamily: "SourceSansPro-Regular",
  },
  errorMessage: {
    fontSize: scale(10),
    fontFamily: "SourceSansPro-Regular",
    color: "red",
    marginLeft: scale(5),
  },
  TextInputs: {
    marginTop: scale(5),
    borderRadius: 4,
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: scale(40),
    fontSize: scale(14),
    fontFamily: "SourceSansPro-Regular",
    paddingHorizontal: scale(10),
    color: colors.GunPowder,
  },
  labelText: {
    marginTop: scale(10),
    fontSize: scale(16),
    fontFamily: "SourceSansPro-Regular",
    color: colors.customBlack,
  },
  header: {
    color: colors.Grey_Grey,
    fontSize: scale(16),
    fontFamily: "SourceSansPro-Regular",
    marginLeft: scale(20),
    marginBottom: scale(10),
  },
  registerButton: {
    borderColor: colors.NeonAquaBlue,
    borderWidth: 1,
    borderRadius: 4,
    width: scale(120),
    height: scale(40),
    marginLeft: scale(20),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(10),
  },
});
export default styles;

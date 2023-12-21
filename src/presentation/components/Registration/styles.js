import { StyleSheet, Dimensions } from 'react-native';
import { scale } from '../../../Infrastructure/utils/screenUtility';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    alignItems: 'center',
  },
  formTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: scale(25),
    color: '#333246',
    // marginTop: scale(30),
  },
  formDetailsTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: scale(18),
    color: '#797979',
    marginTop: scale(9),
  },
  radioTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: scale(14),
    color: '#4D4848',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    // marginHorizontal: 40,
    // marginLeft: scale(32),
    // marginRight: scale(12),
    marginTop: scale(30),
    marginHorizontal: scale(20),
  },
  formInputTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: scale(16),
    color: '#24262F',
  },
  inputDis: {
    marginTop: scale(14),
  },
  input: {
    marginTop: scale(5),
    borderRadius: 4,
    borderColor: '#C3D0DE',
    borderWidth: 1,
    height: scale(40),
    fontSize: scale(14),
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: scale(10),
    // color: colors.GunPowder,
  },
  phoneContainer: {
    width: '75%',
    height: scale(50),
  },
  dropdown: {
    height: 40,
    width: scale(100),
    borderRadius: scale(5),
    borderColor: '#C3D0DE',
  },
  checkBoxContent: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: scale(10),
    color: 'red',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: scale(18),
  },
  Button: {
    borderColor: '#00A0DA',
    backgroundColor: '#00A0DA',
    borderWidth: 1,
    borderRadius: 4,
    height: scale(40),
    marginHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
  },
});

export default styles;

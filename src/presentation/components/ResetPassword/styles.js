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
  form: {
    marginHorizontal: scale(50),
    marginTop: scale(20),
  },
  formTitle: {
    fontSize: scale(25),
    color: '#333246',
    fontFamily: 'SourceSansPro-SemiBold',
  },
  formSubTitle: {
    color: '#00A0DA',
    fontFamily: "'SourceSansPro-Regular'",
    fontSize: scale(16),
  },

  formDetailsTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: scale(16),
    color: '#797979',
    // marginTop: scale(20),
    // height: scale(40),
    // width: scale(240),
  },
  content: {
    marginTop: scale(36),
  },
  errorMessage: {
    fontSize: scale(10),
    color: 'red',
  },
  buttonText: {
    color: '#FFFFFF',
  },
  formContent: {
    marginTop: scale(14),
  },
});

export default styles;

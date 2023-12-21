import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../../Infrastructure/component/Logo/Logo';
import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { scale } from '../../../Infrastructure/utils/screenUtility';
import {
  CustomInput,
  Labeltext,
  linktext,
  CustomButton,
} from '../../../Infrastructure/component/Custom';
import styles from './styles';
import { resetPassword } from '../../../application/store/actions/auth';

const loginValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(/\d/, 'Password must have a number')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')

    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const ResetPassword = ({ route, changePassword }) => {
  const [step, setStep] = useState(1);

  const { userId, userEmail } = route.params;
  const navigation = useNavigation();
  const formRef = useRef();

  const saveInput = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
      // formSubmitHandler();
      if (formRef.current.isValid) {
        setStep(2);
      }
    }
  };

  const formSubmitHandler = async formData => {
    const payload = {
      username: userId,
      newpassword: formData.password,
    };
    await changePassword(payload).then(async res => {
      Toast.show(res.message, Toast.LONG);
      if (res.status === 200) {
        navigation.navigate('Login');
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity style={styles.logo}>
          <Logo />
        </TouchableOpacity>
        <View style={styles.form}>
          <View>
            <Text style={styles.formTitle}>Reset Your Password</Text>
          </View>
          <View style={{ marginTop: scale(11) }}>
            <Text styles={styles.formDetailsTitle}>
              Reset your password & login
            </Text>
            <Formik
              validationSchema={loginValidationSchema}
              innerRef={formRef}
              validateOnBlur={true}
              validateOnChange={true}
              initialValues={{ password: '', confirmPassword: '' }}
              onSubmit={values => formSubmitHandler(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <View style={styles.content}>
                  <View style={{ ...styles.formContent, flex: 1 }}>
                    <Labeltext>New Password</Labeltext>

                    <CustomInput
                      name="password"
                      placeholder="Enter"
                      placeholderTextColor="#4D4F5C"
                      value={values.password}
                      onBlur={handleBlur('password')}
                      onChangeText={handleChange('password')}
                      autoCorrect={false}
                      secureTextEntry
                    // style={styles.input}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={{ ...styles.formContent, flex: 1 }}>
                    <Labeltext>Confirm New Password</Labeltext>

                    <CustomInput
                      name="confirmPassword"
                      placeholder="Enter"
                      placeholderTextColor="#4D4F5C"
                      value={values.confirmPassword}
                      onBlur={handleBlur('confirmPassword')}
                      onChangeText={handleChange('confirmPassword')}
                      autoCorrect={false}
                      secureTextEntry
                    // style={styles.input}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={styles.errorMessage}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </View>

                  {/* <CustomButton
                    bgcolor="#00A0DA"
                    marginTop="30px"
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>SEND EMAIL</Text>
                  </CustomButton> */}
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          // flex: 1,
          justifyContent: 'flex-end',
        }}>
        <CustomButton
          bgcolor="#00A0DA"
          borderradius="0px"
          width="100%"
          height="54px"
          onPress={() => {
            saveInput();
          }}>
          <Text style={styles.buttonText}>RESET</Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

ResetPassword.propTypes = {
  changePassword: PropTypes.func,
  // fetchDetails: PropTypes.func,
};

ResetPassword.defaultProps = {
  changePassword: () => { },
};

// const mapStateToProps = () => {};

const mapDispatchToProps = {
  changePassword: payload => resetPassword(payload),
};

export default connect(null, mapDispatchToProps)(ResetPassword);

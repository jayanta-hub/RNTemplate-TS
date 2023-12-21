import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import Logo from '../../../Infrastructure/component/Logo/Logo';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import {
  CustomInput,
  Labeltext,
  linktext,
  CustomButton,
} from '../../../Infrastructure/component/Custom';
import { scale } from '../../../infrastructure/utils/screenUtility';
import { getOTPforForgotPW } from '../../../application/store/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginValidationSchema = yup.object().shape({
  OTP: yup
    .string()
    // .email('Please enter valid User Name / ID')
    .required('OTP Required'),
});

const OtpVerification = ({ route, validateOtp }) => {
  const { otpId, userEmail, userId } = route.params;

  const navigation = useNavigation();

  const formSubmitHandler = async formData => {
    const OTP = formData.OTP;
    // console.log('userEmail--', userEmail);

    // console.log('otpId--', otpId);
    await validateOtp(otpId, OTP).then(async res => {
      Toast.show(res.message, Toast.LONG);
      // console.log('otpResp=', res);
      if (res.status === 200) {
        navigation.navigate('ResetPassword', {
          userId: userId,
          userEmail: userEmail
        });
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

            <Text style={styles.formDetailsTitle}>Your account verification code has sent to <Text style={styles.formSubTitle}>{userEmail}</Text></Text>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ OTP: '' }}
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
                  <View>
                    <Labeltext>Verification Code</Labeltext>

                    <CustomInput
                      name="OTP"
                      placeholder="Enter"
                      placeholderTextColor="#4D4F5C"
                      value={values.email}
                      onBlur={handleBlur('OTP')}
                      onChangeText={handleChange('OTP')}
                    // style={styles.input}
                    // autoCorrect={false}
                    />

                    {touched.OTP && errors.OTP && (
                      <Text style={styles.errorMessage}>{errors.OTP}</Text>
                    )}
                  </View>

                  <CustomButton
                    bgcolor="#00A0DA"
                    marginTop="30px"
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                  </CustomButton>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

OtpVerification.propTypes = {
  validateOtp: PropTypes.func,
};

OtpVerification.defaultProps = {
  validateOtp: () => { },
};

// const mapStateToProps = () => {
// };

const mapDispatchToProps = {
  validateOtp: (OTPID, OTP) => getOTPforForgotPW(OTPID, OTP),
};

export default connect(null, mapDispatchToProps)(OtpVerification);

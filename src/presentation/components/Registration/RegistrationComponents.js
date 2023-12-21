import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Checkbox } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Logo from '../../../Infrastructure/component/Logo/Logo';
import PhoneInput from 'react-native-phone-input';
// import {
//   TextInput,
//   Button,
// } from '../../../Infrastructure/component/Button';
import { RadioButton } from 'react-native-paper';
import styles from './styles';
import { scale } from '../../../Infrastructure/utils/screenUtility';
import { signUp } from '../../../application/store/actions/auth';
import Toast from 'react-native-simple-toast';
import { Button } from 'react-native';
import CustomButton from '../../../Infrastructure/component/CustomButton/CustomButton';
import colors from '../../../Infrastructure/assets/colors/colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const mailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;
const loginValidationSchema = yup.object().shape({
  title: yup.string().required('Title Required').nullable(),
  firstName: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .required('First Name Required'),
  lastName: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .required('Last Name Required'),
  email: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .matches(mailRegex, 'Please enter valid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .matches(/\d/, 'Password must have a number')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    ),
  confirmPassword: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  userID: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .matches(
      /^[^!@#$%^&*()\"/?'=+{}; :,<>]*$/,
      'May contain special character(s)(. - _)',
    )
    .min(5, ({ min }) => `User Name / ID must be at least ${min} characters`)
    .max(12, ({ max }) => `User Name / ID not more than ${max} characters`)
    .matches(/\w*[A-Z,a-z]\w*/, 'User Name / ID must have a letter')
    .matches(/\d/, 'User Name / ID must have a number')
    .required('User Name / ID Required'),
  // countryName: yup.string().required('Select Country'),
  // phoneNumber: yup.string().required('Enter Phone Number'),
});
const RegistrationComponents = ({ props, addBenificiary }) => {
  const navigation = useNavigation();
  const formRef = useRef();
  const [phoneNumber, setphoneNumber] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const phoneInput = useRef(null);
  // const {navigation} = props;
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState('Beneficiary');
  const [hasError, setHasError] = useState(true);
  const [titleValue, setTitleValue] = useState(null);
  const [step, setStep] = useState(1);
  const [checkMsg, setCheckMsg] = useState('');
  // const [input, setInput] = useState({});
  const [items, setItems] = useState([
    { label: 'Miss', value: 'Miss' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Ms.', value: 'Ms.' },
  ]);
  const saveInput = () => {
    if (!toggleCheckBox) {
      setCheckMsg('Please read & accept terms and conditions');
    }
    if (formRef.current) {
      formRef.current.handleSubmit();
      // formSubmitHandler();
      if (formRef.current.isValid) {
        setStep(2);
      }
    }
  };
  const formSubmitHandler = async formData => {
    console.log('formData', formData);

    const payload = {
      // appName: "string",
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      middleName: formData.middleName,
      password: formData.password,
      title: titleValue,
      userId: formData.userID,
    };
    console.log('payload', payload);

    if (toggleCheckBox) {
      await addBenificiary(payload).then(async res => {
        Toast.show(res.message, Toast.LONG);
        console.log('response=', res);
        setHasError(false);
        if (res.status === 200) {
          navigation.navigate('Verification', { Resp: res.data });
        }
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.logo}>
          <Logo />
        </TouchableOpacity>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.form}>
            <View>
              <View>
                <Text style={styles.formTitle}>Let's get to know you</Text>
                <Text styles={styles.formDetailsTitle}>
                  * Entered Information will be secure and will not be shared
                  for any other purpose.
                </Text>
              </View>
              <View style={{ marginTop: scale(20) }}>
                <Formik
                  initialValues={{
                    title: titleValue,
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    email: '',
                    userID: '',
                    password: '',
                    confirmPassword: '',
                    countryName: '',
                    phoneNumber: '',
                  }}
                  innerRef={formRef}
                  validateOnBlur={true}
                  validateOnChange={true}
                  onSubmit={values => formSubmitHandler(values)}
                  validationSchema={loginValidationSchema}>
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    setFieldValue,
                  }) => (
                    <View>
                      <View
                        style={{ flexDirection: 'row', flex: 1, zIndex: 100 }}>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>Title</Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <View>
                            <DropDownPicker
                              listMode="SCROLLVIEW"
                              open={open}
                              value={titleValue}
                              items={items}
                              setOpen={setOpen}
                              setValue={setTitleValue}
                              setItems={setItems}
                              onChangeValue={handleChange('title')}
                              placeholder="Enter"
                              style={styles.dropdown}
                            />
                            {touched.title && errors.title && (
                              <Text style={styles.errorMessage}>
                                {errors.title}
                              </Text>
                            )}
                          </View>
                        </View>
                        <View style={{ flex: 1, marginLeft: scale(10) }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>
                              First Name
                            </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="firstName"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.firstName}
                            onBlur={handleBlur('firstName')}
                            onChangeText={handleChange('firstName')}
                            autoCorrect={false}
                            style={styles.input}
                          />
                          {touched.firstName && errors.firstName && (
                            <Text style={styles.errorMessage}>
                              {errors.firstName}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View
                        style={{
                          ...styles.inputDis,
                          flexDirection: 'row',
                          flex: 1,
                        }}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.formInputTitle}>Middle Name</Text>
                          <TextInput
                            name="middleName"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.middleName}
                            onBlur={handleBlur('middleName')}
                            onChangeText={handleChange('middleName')}
                            autoCorrect={false}
                            style={styles.input}
                          />
                          {touched.middleName && errors.middleName && (
                            <Text style={styles.errorMessage}>
                              {errors.middleName}
                            </Text>
                          )}
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>Last Name</Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="lastName"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.lastName}
                            onBlur={handleBlur('lastName')}
                            onChangeText={handleChange('lastName')}
                            autoCorrect={false}
                            style={styles.input}
                          />
                          {touched.lastName && errors.lastName && (
                            <Text style={styles.errorMessage}>
                              {errors.lastName}
                            </Text>
                          )}
                        </View>
                      </View>

                      <View style={{ marginTop: scale(10) }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.formInputTitle}>
                            Phone No.<Text style={{ color: 'red' }}>*</Text>
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            height: scale(37),
                          }}>
                          <View
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              flexDirection: 'row',
                            }}>
                            <View
                              style={{
                                flex: 1,
                                height: scale(40),
                                borderWidth: 1,
                                borderColor: '#CCD5E6',
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                // width: scale(50)
                              }}>
                              <PhoneInput
                                name="phoneNumber"
                                ref={phoneInput}
                                initialCountry={''}
                                layout="first"
                                withShadow
                                autoFocus
                                countryCode={text => {}}
                                pickerBackgroundColor="#A2D3EA"
                                onChangeValue={value => {}}
                                onChangePhoneNumber={value =>
                                  console.log(value)
                                }
                                onSelectCountry={handleChange('countryName')}
                              />
                            </View>
                            <View style={{ flex: 8 }}>
                              <TextInput
                                name="phoneNumber"
                                placeholder="Enter"
                                placeholderTextColor="#4D4F5C"
                                value={values.phoneNumber}
                                onBlur={handleBlur('phoneNumber')}
                                onChangeText={handleChange('phoneNumber')}
                                autoCorrect={false}
                                keyboardType="numeric"
                                style={styles.input}
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            {touched.countryName && errors.countryName && (
                              <Text style={styles.errorMessage}>
                                {errors.countryName}
                              </Text>
                            )}
                            {touched.phoneNumber && errors.phoneNumber && (
                              <Text style={styles.errorMessage}>
                                {errors.phoneNumber}
                              </Text>
                            )}
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputDis}>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>Email</Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="email"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.email}
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            autoCorrect={false}
                            style={styles.input}
                          />
                          {touched.email && errors.email && (
                            <Text style={styles.errorMessage}>
                              {errors.email}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View style={styles.inputDis}>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>
                              User Name / ID
                            </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="userID"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.userID}
                            onBlur={handleBlur('userID')}
                            onChangeText={handleChange('userID')}
                            autoCorrect={false}
                            style={styles.input}
                          />
                          {touched.userID && errors.userID && (
                            <Text style={styles.errorMessage}>
                              {errors.userID}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View
                        style={{
                          ...styles.inputDis,
                          flexDirection: 'row',
                          flex: 1,
                        }}>
                        <View style={{ flex: 1 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>Password</Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="password"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.password}
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                            autoCorrect={false}
                            secureTextEntry
                            style={styles.input}
                          />
                          {touched.password && errors.password && (
                            <Text style={styles.errorMessage}>
                              {errors.password}
                            </Text>
                          )}
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.formInputTitle}>
                              Confirm Password
                            </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </View>
                          <TextInput
                            name="confirmPassword"
                            placeholder="Enter"
                            placeholderTextColor="#4D4F5C"
                            value={values.confirmPassword}
                            onBlur={handleBlur('confirmPassword')}
                            onChangeText={handleChange('confirmPassword')}
                            autoCorrect={false}
                            secureTextEntry
                            style={styles.input}
                          />
                          {touched.confirmPassword &&
                            errors.confirmPassword && (
                              <Text style={styles.errorMessage}>
                                {errors.confirmPassword}
                              </Text>
                            )}
                        </View>
                      </View>
                      <View style={styles.checkBoxContent}>
                        <View style={{ flexDirection: 'row' }}>
                          <Checkbox.Android
                            name="checkbox"
                            status={toggleCheckBox ? 'checked' : 'unchecked'}
                            color="#00A0DA"
                            onPress={() => {
                              setToggleCheckBox(!toggleCheckBox);
                            }}
                          />
                        </View>
                        <Text style={styles.formInputTitle}>
                          I have read & accepted
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Terms & Conditions')
                          }>
                          <Text style={{ color: '#00A0DA', marginLeft: 5 }}>
                            Terms & Conditions
                            <Text style={{ color: 'red' }}>*</Text>
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {toggleCheckBox === false && (
                        <Text style={styles.errorMessage}>{checkMsg}</Text>
                      )}
                    </View>
                  )}
                </Formik>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'flex-end',
          }}>
          <CustomButton
            title="PROCEED"
            buttonStyle={styles.Button}
            buttonTextStyle={{
              color: colors.White,
              fontSize: scale(14),
              fontFamily: 'SourceSansPro-SemiBold',
            }}
            onPress={() => {
              // navigation.navigate('Verification');
              saveInput();
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

RegistrationComponents.propTypes = {
  addBenificiary: PropTypes.func,
  // fetchDetails: PropTypes.func,
};

RegistrationComponents.defaultProps = {
  addBenificiary: () => {},
};

// const mapStateToProps = () => {};

const mapDispatchToProps = {
  addBenificiary: payload => signUp(payload),
};

export default connect(null, mapDispatchToProps)(RegistrationComponents);

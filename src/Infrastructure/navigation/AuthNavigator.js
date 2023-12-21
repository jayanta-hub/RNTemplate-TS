import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from "react-native-vector-icons/Entypo";
import LoginComponent from "../../presentation/components/LogIn/LoginComponent";
import ComingSoon from "../component/ComingSoon/ComingSoon";
import { scale } from "../utils/screenUtility";
import RegistrationComponents from "../../presentation/components/Registration/RegistrationComponents";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginComponent}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationComponents}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Verification"
        // component={VerificationComponets}
        component={ComingSoon}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="ForgotPassword"
        // component={ForgetPassword}
        component={ComingSoon}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="ResetPassword"
        // component={ResetPassword}
        component={ComingSoon}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="changePasswordOTP"
        // component={OtpVerification}
        component={ComingSoon}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="ForgotUserName"
        // component={ForgotUserId}
        component={ComingSoon}
      />
      <AuthStack.Screen
        name="Terms & Conditions"
        // component={TermsAndConditions}
        component={ComingSoon}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Entypo name="chevron-small-left" size={30} color="#687C93" />
            </TouchableOpacity>
          ),
          headerStyle: { borderBottomWidth: 1, borderColor: "#00000029" },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: scale(16),
            color: "#4D4F5C",
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

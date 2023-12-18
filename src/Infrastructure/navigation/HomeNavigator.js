import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TimeLine from "../../presentation/components/TimeLine/TimeLine";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { scale } from "../utils/screenUtility";

const HomeStack = createStackNavigator();
const HomeNavigator = (props) => {
  const navigation = useNavigation();
  const HeaderLeft = (props) => {
    return (
      <View style={{ marginLeft: scale(15) }}>
        <AntDesign color="#4D4F5C" name="menu-fold" size={25} />
      </View>
    );
  };
  return (
    <>
      <HomeStack.Navigator initialRouteName="Dashboard">
        <>
          <HomeStack.Screen
            name="Dashboard"
            component={TimeLine}
            options={{
              title: "",
              headerShown: true,
              headerStyle: {
                borderBottomWidth: 1,
                borderColor: "#00000029",
              },
              headerLeft: (props) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                >
                  <HeaderLeft {...props} />
                </TouchableOpacity>
              ),
            }}
          />
        </>
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;

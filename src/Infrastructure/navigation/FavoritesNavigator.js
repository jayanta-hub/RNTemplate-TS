import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { scale } from "../utils/screenUtility";
import { connect } from "react-redux";
import ComingSoon from "../component/ComingSoon/ComingSoon";
import Back from "../component/back/Back";

const FavoriteStack = createStackNavigator();

const FavoritesNavigator = (props) => {
  return (
    <FavoriteStack.Navigator initialRouteName="Favorites">
      <FavoriteStack.Screen
        name="Favorites"
        component={ComingSoon}
        options={{
          headerLeft: () => <Back />,
          headerStyle: { borderBottomWidth: 1, borderColor: "#00000029" },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: scale(16),
            color: "#4D4F5C",
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />
    </FavoriteStack.Navigator>
  );
};

export default connect(null, null)(FavoritesNavigator);

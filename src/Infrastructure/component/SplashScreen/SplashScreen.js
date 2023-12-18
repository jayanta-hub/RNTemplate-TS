import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
// import LOGOSVG from "../../assets/images/Aritha.svg";
const SplashComponent = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/ArithaLogo.png")}
          style={{
            width: "70%",
            height: "70%",
            resizeMode: "contain",
          }}
        />
        {/* <LOGOSVG width="80%" height="70%" style={{ flex: 1 }} /> */}
      </View>
    </View>
  );
};

export default SplashComponent;

import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/ArithaLogo.png")}
        style={styles.Image}
      />
    </View>
  );
};

export default Logo;

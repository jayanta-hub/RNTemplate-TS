import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import LOGOSVG from "../../assets/images/NoDataFound.svg";
import PropTypes from "prop-types";

const NoDataFound = (props) => {
  return (
    <View style={styles.container}>
      <LOGOSVG width="250px" height="250px" />
      <Text style={styles.Text}>{props.title}</Text>
    </View>
  );
};

export default NoDataFound;
NoDataFound.propTypes = {
  titleStyle: PropTypes.object,
  title: PropTypes.string,
};

NoDataFound.defaultProps = {
  title: "No Data Found...",
  titleStyle: styles.Text,
};

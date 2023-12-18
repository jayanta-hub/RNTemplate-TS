import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";
const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.buttonTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  onPress: () => {},
  title: "Submit",
  buttonStyle: styles.Button,
  buttonTextStyle: styles.Buttontext,
};

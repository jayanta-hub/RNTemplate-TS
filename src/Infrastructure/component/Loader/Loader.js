import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator, Text } from "react-native";
import colors from "../../assets/colors/colors";
import { scale } from "../../utils/screenUtility";
const Loader = (props) => {
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={props.status}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={props.status}
            color={colors.linkColor}
            size={scale(25)}
          />
          <Text style={{ color: colors.linkColor, fontSize: scale(15) }}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: colors.PrussianBlue,
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.mainWhite,
    height: scale(80),
    width: scale(80),
    borderRadius: scale(5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Loader;

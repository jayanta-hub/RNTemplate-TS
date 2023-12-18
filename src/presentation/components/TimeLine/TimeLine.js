import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import WelcomeSvg from '../../../Infrastructure/assets/images/welcome.svg';
import styles from './styles';
const TimeLine = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <WelcomeSvg width="250px" height="250px" />
          <Text style={styles.TextStyle}>Welcome !!!</Text>
          <Text style={styles.TextStyle}>To React Native Boiler Plate.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Toast from 'react-native-toast-message';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const NoInternet = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    // Return null when internet connection is available
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon name="wifi" size={65} color="red" />
      <Text style={styles.text}>Oops! It seems you're offline</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height : responsiveScreenHeight(100),
    width : responsiveScreenWidth(100)
  },
  text: {
    marginTop:10,
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
});

export default NoInternet;

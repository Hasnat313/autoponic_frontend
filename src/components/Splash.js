import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <LinearGradient
      colors={['#2cab82', '#21835a', '#156236']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/images/plant.png')}
        style={{
          width: responsiveWidth(70),
          height: responsiveHeight(45),
          resizeMode: 'contain',
          //   marginVertical: responsiveHeight(6),
        }}
      />
      <Text style={{color: '#FFF', fontSize: 22, fontWeight: '800'}}>
        AutoPonic
      </Text>
      {/* <ImageBackground
              style={{
                flex: 1,
              }}
              source={require('./splashImage.jpg')}></ImageBackground> */}
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({});

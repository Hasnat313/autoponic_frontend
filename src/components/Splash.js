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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#8CC63E"
      }}>
      <Image
        source={require('../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
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
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import STYLES from '../STYLES';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {useFocusEffect} from '@react-navigation/native';

import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';
const ForgotPassword = props => {
  const [issecure, setIssecure] = useState(true);
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [text, setText] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      setSoftinput(true);
    }, []),
  );
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Image
        source={require('../../../new.jpg')}
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(100),
          position: 'absolute',
        }}
        resizeMode="cover"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}>Forgot Password</Text>
          <Text style={styles.txt2}>Enter Your Email To Reset Password</Text>
          <View
            style={[
              styles.txtinputview,
              {borderColor: myfocus == 'email' ? '#00CE30' : '#D9D9D9'},
            ]}>
            <TextInput
              keyboardType="email-address"
              showSoftInputOnFocus={softinput}
              autoFocus
              placeholder="Enter Email"
              style={styles.txtinputstyle}
              selectionColor={'#00CE30'}
              onFocus={() => setMyfocus('email')}
              onSubmitEditing={() => setMyfocus('')}
              onChangeText={text => setText(text)}
              value={text}
            />
          </View>

          <MyButton
            title={'SEND CODE'}
            onPress={() => {
              if (!text) {
                alert('Email is empty!');
              } else {
                const url = 'http://192.168.18.32:4000/forgetPassword/userForgetPassword';
                const options = {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                  },
                  body: JSON.stringify({
                    email:text
                  }),
                };
                fetch(url, options)
                  .then(response => response.json())
                  .then(data => {

                    if(data.status==true){
                      props.navigation.navigate('VerifyAccount' , {email:"uk5458622@gmail.com"}), setMyfocus('');
                    }
                    else{
                      alert("Could not send OTP to this email")
                    }
                    console.log(data);

                  });
              }
            }}
            myStyles={styles.fixedfooter}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  txt1: {
    marginTop: responsiveHeight(9),
    fontFamily: fontFamily.Calibri_Regular,
    color: '#00CE30',
    fontSize: responsiveFontSize(3.9),
  },
  txt2: {
    marginTop: responsiveHeight(2.5),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.3),
    marginBottom: responsiveHeight(4.5),
    width: responsiveWidth(50),
    textAlign: 'center',
  },
  txtinputview: {
    width: responsiveWidth(86),
    marginTop: responsiveHeight(10),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txtinputstyle: {
    paddingVertical: responsiveHeight(2.2),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(86),
    paddingHorizontal: responsiveWidth(5),
  },
  txtinputstyle2: {
    paddingVertical: responsiveHeight(2.2),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(72),
    paddingLeft: responsiveWidth(5),
    marginRight: responsiveWidth(2),
  },
  fixedfooter: {
    marginBottom: responsiveHeight(2.5),
    marginTop: responsiveHeight(7),
  },
  forgotview: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(4),
  },
  forgottxt: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.2),
  },
  ftxt1: {
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.2),
  },
  ftxt2: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.2),
    textDecorationLine: 'underline',
  },
});

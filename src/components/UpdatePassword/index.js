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
import {Modal} from 'react-native-paper';

import {useFocusEffect} from '@react-navigation/native';
import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';

const UpdatePassword = props => {
  const [visible, setVisible] = React.useState(false);
  const confirmref = useRef();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [issecure, setIssecure] = useState(true);
  const [isconfirmsecure, setIsconfirmsecure] = useState(true);

  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);

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
          <Text style={styles.txt1}>Create {'\n'}Strong Password</Text>
          <Text style={styles.txt2}>
            Lorem ipsum dolor sit amet, consetetur!
          </Text>
          <View
            style={[
              styles.txtinputview,
              {borderColor: myfocus == 'password' ? '#00CE30' : '#D9D9D9'},
            ]}>
            <TextInput
              showSoftInputOnFocus={softinput}
              autoFocus
              placeholder="Password"
              style={styles.txtinputstyle2}
              secureTextEntry={issecure}
              selectionColor={'#00CE30'}
              onFocus={() => setMyfocus('password')}
              onBlur={() => setMyfocus('')}
              blurOnSubmit={false}
              onSubmitEditing={() => confirmref.current.focus()}
              returnKeyType="next"
            />
            <Eye
              color={'#00CE30'}
              size={responsiveFontSize(3.3)}
              name={issecure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setIssecure(!issecure)}
            />
          </View>
          <View
            style={[
              styles.txtinputview,
              {
                borderColor:
                  myfocus == 'confirmpassword' ? '#00CE30' : '#D9D9D9',
              },
            ]}>
            <TextInput
              ref={confirmref}
              placeholder="Confirm Password"
              style={styles.txtinputstyle2}
              secureTextEntry={isconfirmsecure}
              selectionColor={'#00CE30'}
              onFocus={() => setMyfocus('confirmpassword')}
              onSubmitEditing={() => setMyfocus('')}
            />
            <Eye
              color={'#00CE30'}
              size={responsiveFontSize(3.3)}
              name={isconfirmsecure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setIsconfirmsecure(!isconfirmsecure)}
            />
          </View>
          <MyButton
            title={'UPDATE'}
            onPress={() => showModal()}
            myStyles={styles.fixedfooter}
          />
        </View>

        <Modal visible={visible} onDismiss={hideModal}>
          <View
            style={{
              backgroundColor: '#fff',
              width: responsiveWidth(81),
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(2.5),
              paddingTop: responsiveHeight(6),
              paddingBottom: responsiveHeight(6),
            }}>
            <Image
              source={appImages.modaltickgreen}
              style={{width: responsiveWidth(27), height: responsiveWidth(27)}}
            />
            <Text style={styles.successtxt}>Success!</Text>
            <Text style={styles.passwordupdatedtxt}>Password Updated</Text>
            <MyButton
              title={'GO TO LOGIN'}
              onPress={() => props.navigation.navigate('Login')}
              myStyles={{
                width: responsiveWidth(60),
              }}
            />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  txt1: {
    marginTop: responsiveHeight(9),
    fontFamily: fontFamily.Calibri_Regular,
    color: '#3B3E51',
    fontSize: responsiveFontSize(3.9),
    width: responsiveWidth(85),
    textAlign: 'center',
    alignSelf: 'center',
  },
  txt2: {
    marginTop: responsiveHeight(2),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.3),
    marginBottom: responsiveHeight(8),
    width: responsiveWidth(60),
    textAlign: 'center',
  },
  txtinputview: {
    width: responsiveWidth(86),
    marginTop: responsiveHeight(3.2),
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
  successtxt: {
    fontFamily: fontFamily.OpenSans_Bold,
    color: '#2B3859',
    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveHeight(5),
  },
  passwordupdatedtxt: {
    fontFamily: fontFamily.OpenSans_Regular,
    color: '#2B3859',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(4),
  },
});

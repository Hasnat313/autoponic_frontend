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
import {Modal} from 'react-native-paper';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {verifyOTP} from '../../api';



const CELL_COUNT = 4;
const VerifyAccount = ({props , navigation , route}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [issecure, setIssecure] = useState(true);
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [value, setValue] = useState('');



  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props2, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useFocusEffect(
    React.useCallback(() => {
      setSoftinput(true);
    }, []),
  );

  const handleSubmit=async ()=>{
    console.log(value)
    const values = {
      email : route.params.email,
      userEnteredOtp : value
    }
    console.log(values)
    if(value){
      
      const result= await verifyOTP(values);

      if(result.data.verified == true){
        showModal();
      }else{
        alert("Wrong OTP")
      }
    }
  }
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
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
          <Text style={styles.txt1}>Verify Account</Text>
          <Text style={styles.txt2}>
            {route.params.email}
          </Text>
          <CodeField
            ref={ref}
            {...props2}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                <Text style={styles.textstyle} key={index}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
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
            <Text style={styles.passwordupdatedtxt}>Account Verified</Text>
            <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => navigation.navigate('UpdatePassword' , {email : route.params.email})}>
                  <Text style={styles.btnText}>Update Password</Text>
                </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  txt1: {
    marginTop: responsiveHeight(9),
    color: '#8CC63E',
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
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#A1CE69',
    width: responsiveWidth(87),
    height : responsiveHeight(7),
    padding: 15,
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    marginTop : 20
  },
  btn2: {
    backgroundColor: '#A1CE69',
    width: responsiveWidth(60),
    height : responsiveHeight(7),
    padding: 15,
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    marginTop : 25
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
  codeFieldRoot: {
    marginTop: responsiveHeight(10),
    width: responsiveWidth(72),
    alignSelf: 'center',
  },
  cell: {
    width: responsiveWidth(14),
    height: responsiveWidth(16.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.2),
    borderColor: '#D9D9D9',
    borderRadius: responsiveWidth(4),
    backgroundColor: '#fff',

    // backgroundColor: 'red',
  },
  textstyle: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    opacity: 0.7,
    marginBottom: responsiveHeight(0.6),
  },
  focusCell: {
    borderColor: '#00CE30',
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

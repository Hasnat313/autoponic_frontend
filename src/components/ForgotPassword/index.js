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
import {useFormik} from 'formik';

import {useFocusEffect} from '@react-navigation/native';

import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

import {forgotPassord} from '../../api';

const ForgotPassword = props => {
  const [issecure, setIssecure] = useState(true);
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [text, setText] = useState('');

  const [title , setTitle] = useState("");
  const [message , setMessage] = useState("")
  const [progress , setprogress] = useState();
  const [confirmButtonColor , setconfirmButtonColor] = useState("")
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [showConfirmButton, setshowConfirmButton] = useState(false);



  const showAlert = (title , message , progress , confirmButtonColor , showConfirmButton ) => {
    setTitle(title);
    setMessage(message)
    setAlertVisible(true);
    setconfirmButtonColor(confirmButtonColor);
    setprogress(progress)
    setshowConfirmButton(showConfirmButton)
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      setSoftinput(true);
    }, []),
  );

  const initialValues = {
    email: '',
  };
  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      try {
        console.log('called');
        if(values.email.length<1){
          showAlert("Missing Email!" , "Please provide email" , false , '#AA4A44' , true)

        }
        else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
        ) {
          showAlert("Invalid Email!" , "Please provide Correct email format" , false , '#AA4A44' , true )

        }  else {
          // navigation.navigate('DashBoard');
          console.log(values)
          const {data} = await forgotPassord(values);
          console.log(data);
          if (data.status == true) {
            // ToastAndroid.show('Logged in Successfully!', ToastAndroid.SHORT);
            showAlert("Email Send" , "Email is send to your account" , false , '#A1CE69' , false )
            setTimeout(()=>{
              hideAlert();
              navigation.navigate('VerifyAccount');
            }, 1000);

          }
          else if(data.data.message== 'No one found with This Email address'){
            showAlert("Email is wrong" , "Kindly provide valid email" , false , '#AA4A44' , true )
          }
        }
      } catch (e) {
        console.log(e);
        console.log(e?.response?.data?.message);
        showAlert("Email Error" , "Could not send email" , false , '#AA4A44' , true )

        // setError(e?.response?.data?.message)
      }
    },
  });
  console.log(values);



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
              name = 'email' 
              onChangeText={handleChange('email')}
              value={values.email}
            />
          </View>

          <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
        </View>
        <AwesomeAlert
          show={isAlertVisible}
          showProgress={progress}
          title={title}
          message={message}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={showConfirmButton}
          confirmText="OK"
          confirmButtonColor={confirmButtonColor}
          onConfirmPressed={hideAlert}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
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
  txt1: {
    marginTop: responsiveHeight(9),
    fontFamily: fontFamily.Calibri_Regular,
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

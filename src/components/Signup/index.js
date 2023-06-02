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
  BackHandler,
} from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
import {register} from '../../api';
import {useFormik} from 'formik';
// import {useSelector, useDispatch} from 'react-redux';

const Signup = ({navigation, route}) => {
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [issecure, setIssecure] = useState(true);
  const refpassword = useRef();
  const initialValues = {
    user_name: '',
    email: '',
    password: '',
  };
  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      try {
        console.log('called');
        if (values.user_name.length < 1) {
          alert('User Name Required!!');
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
        ) {
          alert('Invalid Email Format!!');
        } else if (values.password.length < 6) {
          alert('Password length should be greater then 6');
        } else {
          const {data} = await register(values);
          console.log(data);
          if (data.statusCode == 201) {
            alert('Registered Successfully!');
            // navigate("/authentication/sign-in")
            navigation.navigate('Login');
          }
        }
      } catch (e) {
        console.log(e);
        console.log(e?.response?.data?.message);
        alert(e?.response?.data?.message);

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
      <Image
        source={require('../../../new.jpg')}
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(100),
          position: 'absolute',
          opacity: 20,
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
          <View
            style={{
              flex: 1,
              width: responsiveWidth(100),
              height: responsiveHeight(100),
              // backgroundColor: '#1c744a',
              alignItems: 'center',
              backgroundColor : "#8CC63E"
            }}>
            <Image
              source={require('../../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
              style={{
                width: responsiveWidth(70),
                height: responsiveHeight(45),
                resizeMode: 'contain',
                marginVertical: responsiveHeight(6),
                // position: 'absolute',
              }}
            />
            <View
              style={{
                width: responsiveWidth(100),
                height: responsiveHeight(60),
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                borderTopEndRadius: 35,
                borderTopLeftRadius: 35,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#182f1d',
                  fontSize: 24,
                  fontWeight: '500',
                  marginVertical: 20,
                }}>
                Sign UP
              </Text>
              <TextInput style={styles.textinput} placeholder="Email" />
              <TextInput style={styles.textinput} placeholder="Password" />
              <TextInput
                style={styles.textinput}
                placeholder="Confirm Password"
              />
              <View
                style={{
                  flex: 0.9,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>SignUp</Text>
                </TouchableOpacity>
                <Text style={{color: '#000', fontSize: 14}}>
                  Already have an account?{' '}
                  <Text
                    style={{color: '#21835a'}}
                    onPress={() => navigation.navigate('Login')}>
                    SignIn
                  </Text>
                </Text>
              </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textinput: {
    width: responsiveWidth(90),
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    paddingHorizontal: 25,
    marginBottom: 25,
  },
  btn: {
    backgroundColor: '#A1CE69',
    width: responsiveWidth(70),
    padding: 15,
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  btn1: {
    borderColor: '#A1CE69',
    borderWidth: 1,
    width: responsiveWidth(70),
    padding: 15,
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  txt1: {
    marginTop: responsiveHeight(9),
    fontFamily: fontFamily.Calibri_Regular,
    color: '#3B3E51',
    fontSize: responsiveFontSize(3.9),
  },
  txt2: {
    marginTop: responsiveHeight(1),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.3),
    marginBottom: responsiveHeight(4.5),
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
    marginTop: responsiveHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotview: {
    marginTop: responsiveHeight(2.5),
    marginBottom: responsiveHeight(4),
  },
  forgottxt: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
  },
  ftxt1: {
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
  },
  ftxt2: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
    textDecorationLine: 'underline',
  },
});
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ScrollView,
//   ImageBackground,
//   TextInput,
//   BackHandler,
// } from 'react-native';
// import React, { useState, useRef } from 'react';
// import STYLES from '../STYLES';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveScreenHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import { useFocusEffect } from '@react-navigation/native';
// import { fontFamily } from '../../constants/fonts';
// import { appImages } from '../../assets/utilities';
// import { MyButton } from '../../component/MyButton';
// import Eye from 'react-native-vector-icons/Ionicons';
// import { register } from '../../api';
// import { useFormik } from 'formik';
// // import {useSelector, useDispatch} from 'react-redux';

// const Signup = ({ navigation, route }) => {

//   const [myfocus, setMyfocus] = useState('');
//   const [softinput, setSoftinput] = useState(false);
//   const [issecure, setIssecure] = useState(true);
//   const refpassword = useRef();
//   const initialValues = {
//     user_name: "",
//     email: "",
//     password: "",
//   }
//   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     onSubmit: async (values) => {
//       try {

//         console.log("called");
//         if (values.user_name.length < 1) {
//           alert("User Name Required!!")
//         }
//         else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
//           alert("Invalid Email Format!!");
//         }

//         else if (values.password.length < 6) {
//           alert("Password length should be greater then 6")
//         }
//         else {
//           const { data } = await register(values)
//           console.log(data);
//           if (data.statusCode == 201) {
//             alert("Registered Successfully!");
//             // navigate("/authentication/sign-in")
//             navigation.navigate("Login");
//           }
//         }
//       }

//       catch (e) {

//         console.log(e);
//         console.log(e?.response?.data?.message);
//         alert(e?.response?.data?.message);

//         // setError(e?.response?.data?.message)
//       }
//     }
//   })
//   console.log(values)

//   return (
//     <SafeAreaView style={STYLES.container}>
//       <StatusBar
//         barStyle={'dark-content'}
//         hidden={false}
//         backgroundColor={'transparent'}
//         translucent={true}
//       />
//       <Image
//         source={require('../../../new.jpg')}
//         style={{
//           width: responsiveWidth(100),
//           height: responsiveHeight(100),
//           position: 'absolute',
//           opacity: 20
//         }}
//         resizeMode="cover"
//       />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps={'always'}
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <View style={{ alignItems: 'center' }}>
//           <Text style={styles.txt1}>Sign Up</Text>
//           <Text style={styles.txt2}>Welcome to UAAR Hydroponic Unit!</Text>

//           <View
//             style={[
//               styles.txtinputview,
//               { borderColor: myfocus == 'userName' ? '#00CE30' : '#D9D9D9' },
//             ]}>
//             <TextInput

//               autoFocus
//               keyboardType="text"
//               placeholder="user name"
//               style={styles.txtinputstyle}
//               selectionColor={'#00CE30'}
//               onChangeText={handleChange('user_name')}
//               onBlur={handleBlur('user_name')}
//               value={values.user_name}
//               blurOnSubmit={false}

//               returnKeyType="next"
//             />
//           </View>

//           <View
//             style={[
//               styles.txtinputview,
//               { borderColor: myfocus == 'email' ? '#00CE30' : '#D9D9D9' },
//             ]}>
//             <TextInput

//               keyboardType="email-address"
//               placeholder="Email"
//               style={styles.txtinputstyle}
//               selectionColor={'#00CE30'}
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}

//               returnKeyType="next"
//             />
//           </View>

//           <View
//             style={[
//               styles.txtinputview,
//               { borderColor: myfocus == 'password' ? '#00CE30' : '#D9D9D9' },
//             ]}>
//             <TextInput
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               placeholder="Password"

//               style={styles.txtinputstyle2}
//               secureTextEntry={issecure}
//               selectionColor={'#00CE30'}
//               ref={refpassword}
//             />
//             <Eye
//               color={'#00CE30'}
//               size={responsiveFontSize(3.3)}
//               name={issecure ? 'eye-off-outline' : 'eye-outline'}
//               onPress={() => setIssecure(!issecure)}
//             />
//           </View>
//           <TouchableOpacity
//             style={styles.forgotview}
//             activeOpacity={0.6}
//             onPress={() => {                //non acitve
//               navigation.navigate('ForgotPassword'), setMyfocus('');
//             }}>
//           </TouchableOpacity>
//           <MyButton
//             title={'Signu Up'}
//             onPress={handleSubmit}

//           />
//         </View>
//         <View style={styles.fixedfooter}>
//           <Text style={styles.ftxt1}>ALready Signed Up? </Text>
//           <TouchableOpacity
//             activeOpacity={0.6}
//             onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.ftxt2}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   txt1: {
//     marginTop: responsiveHeight(9),
//     fontFamily: fontFamily.Calibri_Regular,
//     color: '#3B3E51',
//     fontSize: responsiveFontSize(3.9),
//   },
//   txt2: {
//     marginTop: responsiveHeight(1),
//     fontFamily: fontFamily.BioSans_Regular,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2.3),
//     marginBottom: responsiveHeight(4.5),
//   },
//   txtinputview: {
//     width: responsiveWidth(86),
//     marginTop: responsiveHeight(3.2),
//     borderWidth: responsiveWidth(0.2),
//     borderRadius: responsiveWidth(100),
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   txtinputstyle: {
//     paddingVertical: responsiveHeight(2.2),
//     fontFamily: fontFamily.BioSans_Regular,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2),
//     width: responsiveWidth(86),
//     paddingHorizontal: responsiveWidth(5),
//   },
//   txtinputstyle2: {
//     paddingVertical: responsiveHeight(2.2),
//     fontFamily: fontFamily.BioSans_Regular,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2),
//     width: responsiveWidth(72),
//     paddingLeft: responsiveWidth(5),
//     marginRight: responsiveWidth(2),
//   },
//   fixedfooter: {
//     marginBottom: responsiveHeight(2.5),
//     marginTop: responsiveHeight(20),
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   forgotview: {
//     marginTop: responsiveHeight(2.5),
//     marginBottom: responsiveHeight(4),
//   },
//   forgottxt: {
//     fontFamily: fontFamily.BioSans_SemiBold,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2.1),
//   },
//   ftxt1: {
//     fontFamily: fontFamily.BioSans_Regular,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2.1),
//   },
//   ftxt2: {
//     fontFamily: fontFamily.BioSans_SemiBold,
//     color: '#2F363D',
//     fontSize: responsiveFontSize(2.1),
//     textDecorationLine: 'underline',
//   },
// });

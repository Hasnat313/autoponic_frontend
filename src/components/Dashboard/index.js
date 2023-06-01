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
import React, {useState, useRef, useEffect} from 'react';
import socket from '../../socket';
import STYLES from '../STYLES';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Button} from '../Button/index';

import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';
import {useFormik} from 'formik';
import {getStatus, login} from '../../api';
import {useDispatch} from 'react-redux';
import {fetchStatus} from '../../redux/slices/device1';
import {fetchStatus2} from '../../redux/slices/device2';

const DashBoard = ({navigation, route}) => {
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [issecure, setIssecure] = useState(true);
  const refpassword = useRef();
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hasnat');
    socket.emit('data', 'I am sending data');
    socket.on('temp', data => {
      console.log(data);
      setTemperature(data);
    });
    socket.on('humd', data => {
      console.log(data);
      setHumidity(data);
    });
    dispatch(fetchStatus());
    dispatch(fetchStatus2());
  }, []);
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        barStyle={'light-content'}
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
        <LinearGradient colors={['#1c744a', '#21835a', '#156236']}>
          <View
            style={{
              flex: 1,
              width: responsiveWidth(100),
              height: responsiveHeight(100),
              // backgroundColor: '#1c744a',
              // alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
              style={{
                width: responsiveWidth(70),
                height: responsiveHeight(45),
                resizeMode: 'contain',
                marginVertical: responsiveHeight(-3),
                // position: 'absolute',
                marginHorizontal: 'auto',
                alignSelf: 'center',
              }}
            />

            <View
              style={{
                width: responsiveWidth(100),
                height: responsiveHeight(70),
                backgroundColor: '#eee',
                position: 'absolute',
                bottom: 0,
                borderTopEndRadius: 35,
                borderTopLeftRadius: 35,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: responsiveWidth(80),
                  // height: 120,
                  paddingVertical: 15,
                  position: 'absolute',
                  backgroundColor: '#FFF',
                  // bottom: 70,
                  top: -responsiveHeight(10),
                  borderRadius: 30,
                  zIndex: 9,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={appImages.plant}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontWeight: '900',
                      color: '#1c744a',
                    }}>
                    UIIT Hydroponic Automation Unit
                  </Text>
                </View>
                <View
                  style={{
                    width: 0.87,
                    height: '80%',
                    alignSelf: 'center',
                    backgroundColor: '#ccc',
                  }}
                />
                <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={appImages.plant}
                      style={{
                        width: 40,
                        height: 70,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text style={{color: '#000', fontSize: 14}}>
                      Lorem{'\n'}25 *c
                    </Text>
                  </View>
                  <Text style={{color: '#000', fontSize: 13}}>
                    Some text here
                  </Text>
                </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  flex: 1,
                  height: responsiveHeight(70),
                  width: responsiveWidth(85),
                  marginTop: responsiveHeight(14),
                }}>
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('WeatherScreen', {
                        data: 'device1',
                      })
                    }
                    style={styles.card}>
                    <View style={styles.cardContainer}>
                      <Icon
                        name="thermometer"
                        size={50}
                        color="#1c744a"
                        style={{
                          width: 40,
                          height: 50,
                          marginLeft: '10%',
                        }}
                      />
                      <View style={styles.cardRowView}>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Temperature
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {temperature} °C
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Button')}
                          style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                      navigation.navigate('WeatherScreen', {
                        data: 'device2',
                      })
                    }>
                  <TouchableOpacity
                   style={styles.card}>
                    <View style={styles.cardContainer}>
                      <EntypoIcon name="drop" size={53} color="#1b95e0" />

                      <View style={styles.cardRowView}>
                        <View style={{marginRight: responsiveWidth(2)}}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Humidity
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {humidity} gm/3
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                {/*  */}
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WeatherScreen')}
                    style={styles.card}>
                    <View style={styles.cardContainer}>
                      <Icon
                        name="thermometer"
                        size={50}
                        color="#1c744a"
                        style={{
                          width: 40,
                          height: 50,
                          marginLeft: '10%',
                        }}
                      />
                      <View style={styles.cardRowView}>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Temperature
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {temperature} °C
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Button')}
                          style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContainer}>
                      <EntypoIcon name="drop" size={53} color="#1b95e0" />

                      <View style={styles.cardRowView}>
                        <View style={{marginRight: responsiveWidth(2)}}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Humidity
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {humidity} gm/3
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* ---------------------- */}
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WeatherScreen')}
                    style={styles.card}>
                    <View style={styles.cardContainer}>
                      <Icon
                        name="thermometer"
                        size={50}
                        color="#1c744a"
                        style={{
                          width: 40,
                          height: 50,
                          marginLeft: '10%',
                        }}
                      />
                      <View style={styles.cardRowView}>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Temperature
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {temperature} °C
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Button')}
                          style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContainer}>
                      <EntypoIcon name="drop" size={53} color="#1b95e0" />

                      <View style={styles.cardRowView}>
                        <View style={{marginRight: responsiveWidth(2)}}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(1.8),
                              fontWeight: '500',
                            }}>
                            Humidity
                          </Text>
                          <Text
                            style={{
                              color: '#1c744a',
                              fontSize: responsiveFontSize(2.5),
                            }}>
                            {humidity} gm/3
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.cardbtn}>
                          <Text style={{color: '#ffff', fontSize: 11}}>
                            Manage
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: responsiveWidth(41),
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  cardRowView: {
    alignItems: 'flex-end',
    flex: 1,
    height: '90%',
    justifyContent: 'space-between',
  },
  cardbtn: {
    backgroundColor: '#1c744a',
    paddingHorizontal: 25,
    borderRadius: 15,
    paddingVertical: 7,
  },
});

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
  RefreshControl,
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
import CloudIcon from 'react-native-vector-icons/Fontisto';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MoistureIcon from 'react-native-vector-icons/Entypo';

import {Button} from '../Button/index';

import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';

import {useFormik} from 'formik';
import {getStatus, login} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStatus} from '../../redux/slices/device1';
import {fetchStatus2} from '../../redux/slices/device2';

import {fetchTempValues} from '../../redux/slices/temp';
import {fetchTempReadingValues} from '../../redux/slices/tempReadings';
import {fetchHumidityValues} from '../../redux/slices/humidity';
import {fetchHumidityReadings} from '../../redux/slices/humidityReadings';

import {fetchMoisture} from '../../redux/slices/moisture';
import {fetchMoistureReadings} from '../../redux/slices/moistureReadings';

import {getCurrentWeather} from '../../api';

const DashBoard = ({navigation, route}) => {
  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [issecure, setIssecure] = useState(true);
  const refpassword = useRef();
  const [temperature, setTemperature] = useState('00.0');
  const [humidity, setHumidity] = useState('00.0');
  const [refreshing, setRefreshing] = React.useState(false);

  const [currentTemperature, setcurrentTemperature] = useState();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchTempData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const dispatch = useDispatch();

  // const data = useSelector(store => store.temp);
  // console.log( "this is the " , data);

  // const temperatureReadings = useSelector(store => store.temperatureReadings);
  // console.log(temperatureReadings);

  // console.log("=======================================================================")
  // const humidityGraph = useSelector(store => store.humidity);
  // console.log(humidityGraph);

  // const humidityReadings= useSelector(store => store.humidityReadings);
  // console.log(humidityReadings);

  console.log(
    '**=======================================================================',
  );
  const moistureGraph = useSelector(store => store.moisture);
  console.log('This is mositure graph values ', moistureGraph);
  // const moistureReadings= useSelector(store => store.moistureReadings);
  // console.log(moistureReadings);

  const fetchTempData = async () => {
    const temperatureData = await getCurrentWeather(); // Assuming getCurrentWeather returns the temperature data
    console.log(temperatureData.data.main.temp);
    let tempinF = temperatureData.data.main.temp;
    console.log(tempinF);
    let tempinC = parseFloat(tempinF) - 273.15;
    console.log(tempinC);
    tempinC = tempinC.toFixed(1);

    console.log(tempinC);
    setcurrentTemperature(tempinC);
  };

  //use Effects
  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const temperatureData = await getCurrentWeather(); // Assuming getCurrentWeather returns the temperature data
        console.log(temperatureData.data.main.temp);
        let tempinF = temperatureData.data.main.temp;
        let tempinC = parseFloat(tempinF) - 273.15;
        tempinC = tempinC.toFixed(1);

        console.log(tempinC);
        setcurrentTemperature(tempinC);
      } catch (error) {
        console.error('Error fetching current weather:', error);
      }
    };

    fetchCurrentWeather();
  }, []);

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
    dispatch(fetchTempValues());
    dispatch(fetchTempReadingValues());
    dispatch(fetchHumidityValues());
    dispatch(fetchHumidityReadings());
    dispatch(fetchMoisture());
    dispatch(fetchMoistureReadings());
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
            backgroundColor: '#8CC63E',
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
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: responsiveFontSize(1.7),
                    fontWeight: '600',
                  }}>
                  Autoponic
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
                <CloudIcon
                  name="day-cloudy"
                  size={35}
                  color="#8CC63E"
                  style={{
                    width: 40,
                    height: 50,
                  }}
                />
                <Text
                  style={{color: '#000', fontSize: responsiveFontSize(1.7)}}>
                  Cloudy{'\n'}
                  {currentTemperature} °C
                </Text>

                <Text
                  style={{color: '#000', fontSize: responsiveFontSize(1.6)}}>
                  Temperature Now
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
                      type: 'temperature',
                    })
                  }
                  style={styles.card}>
                  <View style={styles.cardContainer}>
                    <Icon
                      name="thermometer"
                      size={36}
                      color="#000000"
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
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          Temperature
                        </Text>
                        <Text
                          style={{
                            color: '#1c744a',
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          {temperature} °C
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('WeatherScreen')}
                        style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
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
                      type: 'humidity',
                    })
                  }>
                  <View style={styles.cardContainer}>
                    <EntypoIcon name="drop" size={40} color="#000000" />

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
                            fontSize: responsiveFontSize(1.7),
                          }}>
                          {humidity} gm/3
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
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
                  onPress={() =>
                    navigation.navigate('WeatherScreen', {
                      data: 'device1',
                      type: 'moisture',
                    })
                  }
                  style={styles.card}>
                  <View style={styles.cardContainer}>
                    <MoistureIcon name="water" size={40} color="#000000" />
                    <View style={styles.cardRowView}>
                      <View>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          Moisture
                        </Text>
                        <Text
                          style={{
                            color: '#1c744a',
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          m3m-3
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Button')}
                        style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
                          Manage
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContainer}>
                    <Image
                      source={require('../../assets/images/phIcon.png')}
                      style={{
                        width: responsiveWidth(10),
                        height: responsiveHeight(6),
                      }}
                    />

                    <View style={styles.cardRowView}>
                      <View style={{marginRight: responsiveWidth(2)}}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: responsiveFontSize(1.8),
                            fontWeight: '500',
                          }}>
                          PH
                        </Text>
                        <Text
                          style={{
                            color: '#1c744a',
                            fontSize: responsiveFontSize(1.7),
                          }}>
                          {humidity} gm/3
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Button')}
                        style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
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
                    <Image
                      source={require('../../assets/images/water-level.png')}
                      style={{
                        width: responsiveWidth(12),
                        height: responsiveHeight(6),
                      }}
                    />
                    <View style={styles.cardRowView}>
                      <View>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          Water level
                        </Text>
                        <Text
                          style={{
                            color: '#1c744a',
                            fontSize: responsiveFontSize(1.7),
                            fontWeight: '500',
                          }}>
                          m3m-3
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Button')}
                        style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
                          Manage
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContainer}>
                    <EntypoIcon name="drop" size={40} color="#000000" />

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
                            fontSize: responsiveFontSize(1.7),
                          }}>
                          {humidity} gm/3
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Button')}
                        style={styles.cardbtn}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontSize: responsiveFontSize(1.6),
                            fontWeight: '900',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    width: responsiveWidth(35),
    height: responsiveHeight(16),
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
    backgroundColor: '#A1CE69',
    width: responsiveWidth(15),
    height: responsiveHeight(2),
    borderRadius: 15,
    textAlign: 'center',
  },
});

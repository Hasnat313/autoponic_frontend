import React, {useState} from 'react';
import database from '@react-native-firebase/database';
import {powerOn} from '../../assets/images/powerOn.png';
import {Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const reference = database().ref('/');
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeStatus} from '../../redux/slices/device1';
import {changeStatus2, changeAutomatic2} from '../../redux/slices/device2';
import CloudIcon from 'react-native-vector-icons/Fontisto';
import {getCurrentWeather} from '../../api';

const Button = ({navigation, route}) => {
  const [on_OffStatus, setOn_OffStatus] = useState(true);
  const [currentTemperature, setcurrentTemperature] = useState();

  console.log('Hasnat Testing');
  const dispatch = useDispatch();
  const {deviceStatus, status} = useSelector(store =>
    route.params.paramKey === 'device1' ? store.device1 : store.device2,
  );
  let modifiedDeviceStatus = deviceStatus.status;
  console.log('hasnatchecking status', deviceStatus);
  // const [isEnabled, setIsEnable] = useState(
  //   deviceStatus?.automatic === '1' ? true : false,
  // );
  console.log(route.params.paramKey);
  const toggleSwitch = () => {
    console.log(deviceStatus.automatic);

    // setIsEnable(previousState => !previousState);
  };
  // Toggle function
  // const toggle = state => {
  //   setEnable(state);
  //   console.log(state);
  //   update(state);
  // };

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

  return (
    <View style={{flex: 1, backgroundColor: '#8CC63E'}}>
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
          flex: 1.2,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          padding: 20,
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
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.7)}}>
              Cloudy{'\n'}
              {currentTemperature} °C
            </Text>

            <Text style={{color: '#000', fontSize: responsiveFontSize(1.6)}}>
              Temperature Now
            </Text>
          </View>
        </View>
        {route.params.paramKey === 'device2' && (
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              backgroundColor: 'white',
              marginTop: 80,
              padding: 10,
              paddingHorizontal: 15,
              borderRadius: 8,
              elevation: 3,
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View>
              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
                Automatic
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#a8b59c'}}
              thumbColor={
                deviceStatus?.automatic === '1' ? '#8CC63E' : '#f4f3f4'
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                dispatch(
                  changeAutomatic2({
                    status: deviceStatus.automatic === '1' ? '0' : '1',
                  }),
                );
              }}
              value={deviceStatus?.automatic === '1' ? false : true}
            />
          </View>
        )}
        <TouchableOpacity
          style={[
            {
              width: 170,
              height: 170,
              borderRadius: 100,
              backgroundColor:
                deviceStatus?.automatic === '1' &&
                route.params.paramKey === 'device2'
                  ? '#dddddd'
                  : 'white',
              marginTop: route.params.paramKey === 'device2' ? 40 : 120,

              justifyContent: 'center',
              alignItems: 'center',
            },
            modifiedDeviceStatus === '0'
              ? styles.elevationOff
              : styles.elevationOn,
          ]}
          disabled={
            deviceStatus?.automatic === '1' &&
            route.params.paramKey === 'device2'
          }
          onPress={() => {
            route.params.paramKey === 'device1'
              ? dispatch(
                  changeStatus(
                    modifiedDeviceStatus === '0'
                      ? {status: '1'}
                      : {status: '0'},
                  ),
                )
              : dispatch(
                  changeStatus2(
                    modifiedDeviceStatus === '0'
                      ? {status: '1'}
                      : {status: '0'},
                  ),
                );
            // setOn_OffStatus(prev => !prev);
          }}
          activeOpacity={0.9}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(4),
            }}>
            {modifiedDeviceStatus === '0' ? 'ON' : 'OFF'}
          </Text>

          {/* <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]}></View> */}
        </TouchableOpacity>
        {status == 'loading' && <Text style={styles.loading}>Loading...</Text>}
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: '500',
              letterSpacing: 1,
            }}>
            Light
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularButton: {
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 120,

    justifyContent: 'center',
    alignItems: 'center',
  },
  elevationOn: {
    elevation: 30,
    shadowColor: 'red',
  },
  elevationOff: {
    elevation: 30,
    shadowColor: 'green',
  },
  loading: {
    marginTop: 30,
    fontWeight: 'bold',
    // shadowColor: 'green',
  },
  line: {
    position: 'absolute',
    width: 20,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#000000',
  },
});

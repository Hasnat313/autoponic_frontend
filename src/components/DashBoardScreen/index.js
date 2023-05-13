import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import DashBoardMain from '../DashBoardMain';
// const reference = database().ref('/');
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import {useState, useEffect} from 'react';

export default function DashBoardScreen(props) {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  async function getDashBoardData() {
    const response = await fetch(
      'https://mocki.io/v1/54f98e25-da50-49aa-8739-88165d7fff9d',
    );
    const data = await response.json();
    console.log(data);
    setData(data);
    setLoading(false);
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const call = async () => {
      try {
        database()
          .ref('/Temperature')
          .on('value', sp => {
            console.log(sp.val());
            setData(sp.val());
          });
      } catch (e) {
        // console.log(e);
      }
    };
    call();
  }, []);

  const showDimension = () => {
    console.log(deviceHeight + ' ' + deviceWidth);
    return deviceWidth + '  ' + deviceHeight;
  };

  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          height: deviceHeight / 4,
          width: deviceWidth,
          backgroundColor: '#00CE30',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 60,
            position: 'absolute',
            marginTop: 75,
            marginHorizontal: 20,
            position: 'relative',
            marginBottom: 2,
          }}>
          Home
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: '#ffffff',
            marginHorizontal: 20,
          }}></Text>
      </View>

      <View
        activeOpacity={0.7}
        style={{
          backgroundColor: '#fff',
          paddingVertical: responsiveHeight(1.55),
          paddingHorizontal: responsiveWidth(3.4),
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2.2),
          borderRadius: responsiveWidth(1.3),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: responsiveWidth(3)}}>
            <Text>Emergency</Text>
            <Text>Short Description</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(2.2),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#fff',
            paddingVertical: responsiveHeight(1.55),
            paddingHorizontal: responsiveWidth(3.4),
            width: responsiveWidth(43),
            borderRadius: responsiveWidth(1.3),
          }}
          onPress={() => props.navigation.navigate('Button')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginTop: responsiveHeight(3),
                paddingBottom: responsiveHeight(0.5),
              }}>
              <Text
                style={{
                  fontSize: 35,
                  color: 'green',
                  marginLeft: 5,
                  position: 'relative',
                }}>
                {data !== '' && data}
                <View style={{marginBottom: 50, position: 'relative'}}>
                  <Text style={{fontSize: 30, color: 'green'}}></Text>
                </View>

                <Text style={{fontSize: 45, color: 'green'}}>°C</Text>
              </Text>
              <Text style={styles.ltxt1}>Temperature</Text>
              <Text style={styles.ltxt2}>Current Temperature</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#fff',
            paddingVertical: responsiveHeight(1.55),
            paddingHorizontal: responsiveWidth(3.4),
            width: responsiveWidth(43),
            borderRadius: responsiveWidth(1.3),
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('WeatherScreen')}
              style={{
                marginTop: responsiveHeight(3),
                paddingBottom: responsiveHeight(0.5),
              }}>
              <Text
                style={{
                  fontSize: 35,
                  color: 'green',
                  marginLeft: 5,
                  position: 'relative',
                }}>
                13{' '}
                <View style={{marginBottom: 50, position: 'absolute'}}>
                  <Text style={{fontSize: 30, color: 'green'}}></Text>
                </View>
                <Text style={{fontSize: 45, color: 'green'}}> °C</Text>
              </Text>
              <Text style={styles.ltxt1}>Humdity</Text>
              <Text style={styles.ltxt2}>Humidity</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(2.2),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#fff',
            paddingVertical: responsiveHeight(1.55),
            paddingHorizontal: responsiveWidth(3.4),
            width: responsiveWidth(43),
            borderRadius: responsiveWidth(1.3),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginTop: responsiveHeight(3),
                paddingBottom: responsiveHeight(0.5),
              }}>
              <Text
                style={{
                  fontSize: 35,
                  color: 'green',
                  marginLeft: 5,
                  position: 'relative',
                }}>
                7 <Text>Acidic</Text>
              </Text>
              <Text style={styles.ltxt1}>PH Level</Text>
              <Text style={styles.ltxt2}>Current PH Level Of Tank</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#fff',
            paddingVertical: responsiveHeight(1.55),
            paddingHorizontal: responsiveWidth(3.4),
            width: responsiveWidth(43),
            borderRadius: responsiveWidth(1.3),
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginTop: responsiveHeight(3),

                paddingBottom: responsiveHeight(0.5),
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'green',
                  marginLeft: 5,
                  position: 'relative',
                  marginBottom: 0,
                }}>
                <Text>13 , </Text>
                <Text>
                  18 , <Text>17</Text>
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  position: 'relative',
                  marginTop: 0,
                  padding: 0,
                }}>
                {' '}
                N P K{' '}
              </Text>
              <Text style={styles.ltxt2}>Current NPK Readings</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(2.2),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#fff',
            paddingVertical: responsiveHeight(1.55),
            paddingHorizontal: responsiveWidth(3.4),
            width: responsiveWidth(43),
            borderRadius: responsiveWidth(1.3),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginTop: responsiveHeight(3),
                paddingBottom: responsiveHeight(0.5),
              }}>
              <Text
                style={{
                  fontSize: 35,
                  color: 'green',
                  marginLeft: 5,
                  position: 'relative',
                }}>
                200 <Text>cms</Text>
              </Text>
              <Text style={styles.ltxt1}>Water Level </Text>
              <Text style={styles.ltxt2}>Current water level</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ltxt1: {
    color: '#222B45',
    fontSize: responsiveFontSize(1.9),
  },
  ltxt2: {
    color: '#8F9BB3',
    fontSize: responsiveFontSize(1.8),
  },
});

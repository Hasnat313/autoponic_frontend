import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import socket from '../../socket';
import {format} from 'date-fns';

import Icon from 'react-native-vector-icons/FontAwesome';
import CloudIcon from 'react-native-vector-icons/Fontisto';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MoistureIcon from 'react-native-vector-icons/Entypo';

import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WeatherCard from '../../component/WeatherCard';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const WeatherScreen = ({navigation, route}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [type, setType] = React.useState(route.params.type);
  const [temperature, setTemperature] = useState('00.0');

  let temp = useSelector(store => store.temperatureReadings);
  let humid = useSelector(store => store.humidityReadings);
  let moisture = useSelector(store => store.moistureReadings);

  React.useEffect(() => {
    setType(route.params.type);
  }, [route.params.type]);

  const date = new Date(Date.now()).toLocaleString();

  console.log('====================================');
  console.log(route.params.data);
  console.log(route.params.type);
  console.log('====================================');
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let data;
  let Readings;
  let label;

  let isLoading = false;

  if (
    temp.status == 'loading' ||
    humid.status == 'loading' ||
    moisture.status == 'loading'
  ) {
    isLoading = true;
  } else {
    isLoading = false;
  }

  useEffect(() => {
    socket.on('temp', data => {
      console.log(data);
      setTemperature(data);
    });

    if (type == 'temperature') {
      label = 'Temperature';
      // if(status == 'loading'){
      //     alert ("Data is not fetchd yet")
      // }
      Readings = temp.temperatureReadings;
    }

    if (type == 'humidity') {
      label = 'Humidity';
      // if(status == 'loading'){
      //     alert ("Data is not fetchd yet")
      // }
      Readings = humid.humidityReadings;
    }

    if (type == 'moisture') {
      label = 'Moisture';
      Readings = moisture.moistureReadings;
    }
  }, []);

  console.log('T', Readings);
  console.log(Readings);

  // console.log(route.params.data);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={{flex: 1, backgroundColor: '#8CC63E'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#8CC63E',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
              {format(new Date(), 'E , MMM dd yyyy')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <Icon
                name="thermometer"
                size={36}
                color="#ffffff"
                style={{
                  width: 40,
                  height: 50,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 32,
                  fontWeight: '600',
                  marginBottom: responsiveHeight(1.4),
                }}>
                {temperature}°C
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: -10,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 32,
                  width: 130,
                  marginVertical: 10,
                  marginEnd: 15,
                  // marginBottom:10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() =>
                  navigation.navigate('Button', {
                    paramKey: route.params.data,
                  })
                }>
                <Text style={{color: '#fff'}}>Control Device</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 32,
                  width: 130,
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                }}
                onPress={() =>
                  navigation.navigate('Chart', {
                    type: route.params.type ? route.params.type : null,
                  })
                }>
                <Text style={{color: '#fff'}}>See Chart</Text>
              </TouchableOpacity>
            </View>
          </View>

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
                width: '20%',
                height: 5,
                borderRadius: 25,
                backgroundColor: '#fff',
                marginBottom: 20,
              }}></View>

            {!isLoading ? (
              <FlatList
                style={{width: '100%'}}
                showsVerticalScrollIndicator={false}
                data={temp.temperatureReadings}
                renderItem={({item}) => {
                  const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };

                  const date = new Date(item.createdAt).toLocaleString(
                    undefined,
                    options,
                  );
                  let label;
                  let icon_name;
                  if (type == 'temperature') {
                    label = '°C';
                    icon_name = 'temperature';
                  }
                  if (type == 'humidity') {
                    label = 'gm/3';
                    icon_name = 'humidity';
                  }
                  if (type == 'moisture') {
                    label = 'wfv ';
                    icon_name = 'moisture';
                  }

                  return (
                    <WeatherCard
                      day={date.split(' ')[0]} // Extracting only the day portion
                      date={date}
                      temperature={item.value + ' ' + label}
                      icon_name={icon_name}
                    />
                  );
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#8CC63E" />
                <Text>Please Wait</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});

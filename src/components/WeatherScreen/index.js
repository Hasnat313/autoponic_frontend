import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WeatherCard from '../../component/WeatherCard';

const WeatherScreen = () => {
  const data = [1, 3, 4, 5, 6, 67, 7, 8];
  return (
    <View style={{flex: 1, backgroundColor: '#2152d2'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#2152d2',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
          Sat,Aug 29th 2023
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <FontAwesome5 name="cloud-sun-rain" color={'#ffffff'} size={50} />
          <Text style={{color: '#fff', fontSize: 32, fontWeight: '600'}}>
            {' '}
            32°C
          </Text>
        </View>
        <Text style={{color: '#fff', fontSize: 14, letterSpacing: 1}}>
          {' '}
          Partly Cloudy
        </Text>
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
          }}>
          <Text style={{color: '#fff'}}>See Details</Text>
        </TouchableOpacity>
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
            backgroundColor: '#CCCCCC',
            marginBottom: 20,
          }}></View>
        <FlatList
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={() => (
            <WeatherCard
              day="Sunday"
              date={'Aug 30 2023'}
              temperature={'32°C'}
            />
          )}
        />
      </View>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});

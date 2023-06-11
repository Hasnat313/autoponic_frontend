import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Icon from 'react-native-vector-icons/FontAwesome';
import CloudIcon from 'react-native-vector-icons/Fontisto';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MoistureIcon from 'react-native-vector-icons/Entypo';
const WeatherCard = ({day, date, temperature , icon_name}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{day}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.rowView}>
        {icon_name == 'temperature' ?  (<Icon name="thermometer" size={20} style={styles.icon} />) :
         icon_name == 'humidity' ?(<EntypoIcon name="drop" size={20} style={styles.icon} />) : 
         icon_name == 'moisture' ?(<MoistureIcon name="water" size={20} style={styles.icon} />) : 
         null
         }
        
        <Text style={styles.title}>{temperature}</Text>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#eaeefa',
    marginVertical: 8,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {color: '#000', fontWeight: 'bold', fontSize: 15},
  rowView: {
    flexDirection: 'row',
    // flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#bbcbed',
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 10,
  },
  dateText: {color: '#aaaeba'},
});

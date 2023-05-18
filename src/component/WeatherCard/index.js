import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const WeatherCard = ({day, date, temperature}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{day}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.rowView}>
        <Feather name="sun" size={20} style={styles.icon} />
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

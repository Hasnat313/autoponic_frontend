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
import {changeStatus2} from '../../redux/slices/device2';
const Button = ({navigation, route}) => {
  const [on_OffStatus, setOn_OffStatus] = useState(true);
  console.log('Hasnat Testing');
  const dispatch = useDispatch();
  const {deviceStatus, status} = useSelector(store =>
    route.params.paramKey === 'device1' ? store.device1 : store.device2,
  );
  console.log('hasnatchecking status', deviceStatus);
  const [Enable, setEnable] = useState(false);
  console.log(route.params.paramKey);

  // Toggle function
  const toggle = state => {
    setEnable(state);
    console.log(state);
    update(state);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#8CC63E'}}>
      <View
        style={{
          flex: 1.2,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          padding: 20,
          marginTop: 335,
        }}>
        <TouchableOpacity
          style={[
            styles.circularButton,
            deviceStatus === '0' ? styles.elevationOff : styles.elevationOn,
          ]}
          onPress={() => {
            route.params.paramKey === 'device1'
              ? dispatch(
                  changeStatus(
                    deviceStatus === '0' ? {status: '1'} : {status: '0'},
                  ),
                )
              : dispatch(
                  changeStatus2(
                    deviceStatus === '0' ? {status: '1'} : {status: '0'},
                  ),
                );
            // setOn_OffStatus(prev => !prev);
          }}
          activeOpacity={0.9}>
          <Text style={{fontWeight: 'bold'}}>
            {deviceStatus === '0' ? 'ON' : 'OFF'}
          </Text>

          {/* <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]}></View> */}
        </TouchableOpacity>
        {status == 'loading' && <Text style={styles.loading}>Loading...</Text>}
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
    marginTop: 90,

    justifyContent: 'center',
    alignItems: 'center',
  },
  elevationOn: {
    elevation: 20,
    shadowColor: 'red',
  },
  elevationOff: {
    elevation: 20,
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

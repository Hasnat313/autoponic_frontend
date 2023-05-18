import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import socket from '../../socket';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fFF',
          paddingTop: 30,
          paddingHorizontal: 5,
        }}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.view1}
            onPress={() => {
              console.log('I am pressing');
              socket.emit('message2', '1');
            }}>
            <Image
              source={require('../../assets/images/power.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Text here</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.view2}
              onPress={() => {
                console.log('I am pressing');
                socket.emit('message3', '0');
              }}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image2}
              />
              <Text style={styles.text}>Text here</Text>
            </TouchableOpacity>
            <View style={styles.view3}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image3}
              />
              <Text style={styles.text}>Text here</Text>
            </View>
          </View>
        </View>
        {/* ------------------------- */}
        <View style={styles.rowView}>
          <View style={styles.view1}>
            <Image
              source={require('../../assets/images/power.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Text here</Text>
          </View>
          <View>
            <View style={styles.view2}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image2}
              />
              <Text style={styles.text}>Text here</Text>
            </View>
            <View style={styles.view3}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image3}
              />
              <Text style={styles.text}>Text here</Text>
            </View>
          </View>
        </View>
        {/* ------------------------- */}
        <View style={styles.rowView}>
          <View style={styles.view1}>
            <Image
              source={require('../../assets/images/power.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Text here</Text>
          </View>
          <View>
            <View style={styles.view2}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image2}
              />
              <Text style={styles.text}>Text here</Text>
            </View>
            <View style={styles.view3}>
              <Image
                source={require('../../assets/images/power.png')}
                style={styles.image3}
              />
              <Text style={styles.text}>Text here</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  view1: {
    height: responsiveHeight(40),
    width: responsiveWidth(48),
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    height: responsiveHeight(20),
    width: responsiveWidth(47),
    backgroundColor: '#f4f4f4',
    marginBottom: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    height: responsiveHeight(20),
    width: responsiveWidth(47),
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    tintColor: '#21835a',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image2: {
    tintColor: '#21835a',
    width: '60%',
    height: '80%',
    resizeMode: 'contain',
  },
  image3: {
    tintColor: '#21835a',
    width: '60%',
    height: '80%',
    resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
});

import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {buttonColor, textColor} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';
// import {fonts} from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(7.25),
    width: responsiveWidth(86),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(2.8),
    backgroundColor: '#00CE30',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
    fontFamily: fontFamily.OpenSans_SemiBold,
  },
  IconCon: {
    width: responsiveWidth(10),
  },
  imgstyle: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: responsiveHeight(2),
    width: responsiveWidth(2.5),
  },
});

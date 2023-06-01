
import React from 'react'
import {StyleSheet , TouchableOpacity , View , Text } from 'react-native'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
export default function DashboardCard(props) {
  console.log(props)
  return (
    <TouchableOpacity
    style={styles.card}>
     <View style={styles.cardContainer}>
       {/* <EntypoIcon name= {props.iconName}  size={53} color="#1b95e0" /> */}

       <View style={styles.cardRowView}>
         <View style={{marginRight: responsiveWidth(2)}}>
           <Text style={{color: '#000',  fontSize:responsiveFontSize(2.3) , fontWeight:'500'}}>
             {props.cardName}
           </Text>
           <Text style={{color: '#1c744a' , fontSize: responsiveFontSize(3)}}>
             {props.value} {props.unit}
           </Text>
         </View>
         <TouchableOpacity style={styles.cardbtn}>
           <Text style={{color: '#ffff', fontSize: 11}}>
             {props.btnText}
           </Text>
         </TouchableOpacity>
       </View>
     </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
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
      backgroundColor: '#1c744a',
      paddingHorizontal: 25,
      borderRadius: 15,
      paddingVertical: 7,
  
    },
  });
  
import {LineChart, BarChart} from 'react-native-chart-kit';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import {format} from 'date-fns';
import {Dimensions} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';
import {useSelector} from 'react-redux';
import { useState , useEffect } from 'react';
import humidity from '../../redux/slices/humidity';


// function sortDataByTime(array) {
//   function convertToMinutes(timeString) {
//     const [hours, minutes] = timeString.split(':').map(Number);
//     return hours * 60 + minutes;
//   }

//   return array.sort((a, b) => {
//     const timeA = convertToMinutes(a.time2);
//     const timeB = convertToMinutes(b.time2);
//     return timeA - timeB;
//   });
// }

export default function Chart({navigation , route}) {

  let sortedData;
  let [Readings , setReadings] = useState([]) ; 
  let [data , setData] = useState("") ; 

  let [label , setLabel] = useState("");
  const [type, setType] = React.useState(route.params.type);

  let temp= useSelector (store => store.temperatureReadings);
  let humid= useSelector (store => store.humidityReadings);
  let moisture = useSelector (store => store.moistureReadings);
  let moistureData = useSelector (store => store.moisture);
  let tempData = useSelector (store => store.temp);
  let humidityData = useSelector (store => store.humidity);

   let isLoading =false;  
  
  if(temp.status == 'loading' ||  humid.status == 'loading' ||  moisture.status == 'loading' || moistureData.status == 'loading' ||  tempData.status == 'loading' ||  humidityData.status == 'loading'){
    isLoading = true
  }
  else{
    isLoading = false
  }


  
  React.useEffect(() => {
    setType(route.params.type);
  }, [route.params.type]);




  useEffect(() => {
    if(type== 'temperature'){
     setLabel("Temperature")
      setData(tempData.temp)
      setReadings(temp.temperatureReadings)

  }

  if(type== 'humidity'){
    setLabel("Humidity")
    // if(status == 'loading'){
    //     alert ("Data is not fetchd yet")
    // }
      setReadings(humid.humidityReadings)
      setData(humidityData.humidity)

  
  }

  if(type== 'moisture'){
    setLabel("Moisture")
      setReadings( moisture.moistureReadings)
      setData(moistureData.moisture)

  }
  }, [])
  

   sortedData = data;
 

  // // console.log(sortedData);

  let highestvalue ;
  let lowestvalue;
  let currentvalue;

  if(Readings){
    console.log("inside")
    const valueData = Readings.map(dataPoint => dataPoint.value);

    // Find the highest, lowest, and current value values
     highestvalue = Math.max(...valueData);
     lowestvalue = Math.min(...valueData);
     currentvalue = valueData[valueData.length - 1];
  
  }else{
    highestvalue = 5
    lowestvalue = 1
    currentvalue = 3
  }

  console.log(highestvalue , lowestvalue , currentvalue)

  // const maxDataPoints = 1; // Adjust this value as needed
  // const interval = Math.ceil(highestvalue - lowestvalue / maxDataPoints);

  // // Perform data sampling
  // const sampledData = sortedData?.filter((_, index) => index % interval === 0);

  // // Extract labels and values for chart
  // const labels = sampledData?.map(dataPoint => dataPoint.time2);
  // const values = sampledData?.map(dataPoint => dataPoint.value);

  console.log(sortedData);
  const labels = Object.keys(sortedData).map(interval => {
    const [, end] = interval.split(" - ");
    return end;
  });

  const roundedData = Object.values(sortedData).map(value => {
    return Number(value.toFixed(1));
  });
  

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);



return (<>

{!isLoading ? (
  <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
          style={{
            width: responsiveWidth(40),
            height: responsiveHeight(50),
            resizeMode: 'contain',
            // position: 'absolute',
            marginHorizontal: 'auto',
            alignSelf: 'center',
          }}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.bottomMain}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>{label} Analysis</Text>
          </View>
          <LineChart
            style={{
              marginBottom: 20,
            }}
            data={{
              labels:labels,
              datasets: [
                {
                  data: Object.values(sortedData).every(value => value == 0) ? [1,2,3,4,5,6,7,8] : roundedData,
                },
              ],
            }}
            width={Dimensions.get('window').width - 20}
            yAxisLabel=""
            yAxisSuffix="°"
            xAxisLabel=""
            xAxisSuffix="T"
            height={220}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 1,
              propsForLabels:{
                fontFamily:'MontserratBold',
                fontSize : 7.5
                },
              color: (opacity = 1) => `rgba(0, 128, 0, 1)`,
              style: {
                borderRadius: 16,
              },
              xAxis: {
                labelColor: 'black', // Set x-axis label color to green
                gridColor: 'white', // Set x-axis grid lines color to white
              },
              yAxis: {
                labelColor: 'black', // Set y-axis label color to green
                gridColor: 'white', // Set y-axis grid lines color to white
              },
              fillShadowGradient: `rgba(0, 128, 0, 1)`,
              useShadowColorFromDataset: true,
            }}
            bezier
          />

          <View style={styles.container}>
            <BarChart
              data={{
                labels: ['Highest', 'Lowest', 'Current'],
                datasets: [
                  {
                    data: [highestvalue, lowestvalue, currentvalue],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 20}
              height={220}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 128, 0, 1)`,
                style: {
                  borderRadius: 16,
                },
                xAxis: {
                  labelColor: 'green', // Set x-axis label color to green
                  gridColor: 'white', // Set x-axis grid lines color to white
                },
                yAxis: {
                  labelColor: 'green', // Set y-axis label color to green
                  gridColor: 'white', // Set y-axis grid lines color to white
                },
                fillShadowGradient: `rgba(0, 128, 0, 1)`, // Set shaded area color to green with increased opacity
              }}
            />
          </View>


    
          

        </View>
      </ScrollView>
    </SafeAreaView>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="small" color="#0000ff" />
    </View>
    )}
      
      </>
          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    backgroundColor: '#8CC63E',
    alignContent: 'center',
    justifyContent: 'center',
  },
  heading: {
    height: responsiveScreenHeight(4.5),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  dataContainer: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  dataPointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dataPointTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    fontSize: 16,
    color: '#666666',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  bottomMain: {
    marginTop: '10%',
  },
  headingText: {
    fontSize: responsiveFontSize(3.7),
    fontWeight: 'bold',
    color: '#000000',
  },
});

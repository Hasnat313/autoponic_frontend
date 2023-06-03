import { LineChart, BarChart } from 'react-native-chart-kit';
import { StyleSheet, Text, View, Switch, TouchableOpacity, SafeAreaView, StatusBar, Image , ScrollView , RefreshControl } from 'react-native';
import { Dimensions } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';

const data = [{
  "id": 1,
  "created_at": "0:41",
  "temperature": 17.9
}, {
  "id": 2,
  "created_at": "3:07",
  "temperature": 29.3
}, {
  "id": 3,
  "created_at": "13:44",
  "temperature": 38.3
}, {
  "id": 4,
  "created_at": "15:33",
  "temperature": 0.9
}, {
  "id": 5,
  "created_at": "18:28",
  "temperature": 58.0
}, {
  "id": 6,
  "created_at": "0:02",
  "temperature": 33.4
}, {
  "id": 7,
  "created_at": "0:39",
  "temperature": 0.6
}, {
  "id": 8,
  "created_at": "0:23",
  "temperature": 27.6
}, {
  "id": 9,
  "created_at": "8:28",
  "temperature": 43.5
}, {
  "id": 10,
  "created_at": "16:28",
  "temperature": 27.4
}, {
  "id": 11,
  "created_at": "14:15",
  "temperature": 13.8
}, {
  "id": 12,
  "created_at": "16:44",
  "temperature": 25.7
}, {
  "id": 13,
  "created_at": "7:05",
  "temperature": 41.5
}, {
  "id": 14,
  "created_at": "0:46",
  "temperature": 17.6
}, {
  "id": 15,
  "created_at": "3:13",
  "temperature": 51.3
}, {
  "id": 16,
  "created_at": "7:40",
  "temperature": 41.6
}, {
  "id": 17,
  "created_at": "15:33",
  "temperature": 53.7
}, {
  "id": 18,
  "created_at": "11:12",
  "temperature": 44.6
}, {
  "id": 19,
  "created_at": "12:02",
  "temperature": 56.9
}, {
  "id": 20,
  "created_at": "15:51",
  "temperature": 59.2
}, {
  "id": 21,
  "created_at": "19:38",
  "temperature": 32.0
}, {
  "id": 22,
  "created_at": "10:53",
  "temperature": 36.9
}, {
  "id": 23,
  "created_at": "0:07",
  "temperature": 18.5
}, {
  "id": 24,
  "created_at": "22:54",
  "temperature": 24.3
}, {
  "id": 25,
  "created_at": "21:23",
  "temperature": 58.3
}, {
  "id": 26,
  "created_at": "10:38",
  "temperature": 31.9
}, {
  "id": 27,
  "created_at": "10:09",
  "temperature": 8.7
}, {
  "id": 28,
  "created_at": "21:28",
  "temperature": 12.1
}, {
  "id": 29,
  "created_at": "3:14",
  "temperature": 38.4
}, {
  "id": 30,
  "created_at": "22:11",
  "temperature": 41.2
}, {
  "id": 31,
  "created_at": "8:25",
  "temperature": 39.8
}, {
  "id": 32,
  "created_at": "18:20",
  "temperature": 45.6
}, {
  "id": 33,
  "created_at": "22:45",
  "temperature": 38.2
}, {
  "id": 34,
  "created_at": "20:23",
  "temperature": 8.4
}, {
  "id": 35,
  "created_at": "3:53",
  "temperature": 37.6
}, {
  "id": 36,
  "created_at": "8:44",
  "temperature": 11.5
}, {
  "id": 37,
  "created_at": "21:07",
  "temperature": 41.6
}, {
  "id": 38,
  "created_at": "3:29",
  "temperature": 9.4
}, {
  "id": 39,
  "created_at": "15:15",
  "temperature": 44.2
}, {
  "id": 40,
  "created_at": "13:32",
  "temperature": 47.5
}, {
  "id": 41,
  "created_at": "9:27",
  "temperature": 52.5
}, {
  "id": 42,
  "created_at": "2:35",
  "temperature": 27.1
}, {
  "id": 43,
  "created_at": "21:07",
  "temperature": 36.6
}, {
  "id": 44,
  "created_at": "17:27",
  "temperature": 8.2
}, {
  "id": 45,
  "created_at": "22:48",
  "temperature": 33.8
}, {
  "id": 46,
  "created_at": "22:29",
  "temperature": 43.5
}, {
  "id": 47,
  "created_at": "22:46",
  "temperature": 29.3
}, {
  "id": 48,
  "created_at": "19:02",
  "temperature": 16.0
}, {
  "id": 49,
  "created_at": "0:36",
  "temperature": 34.9
}, {
  "id": 50,
  "created_at": "16:08",
  "temperature": 17.3
}, {
  "id": 51,
  "created_at": "12:02",
  "temperature": 45.1
}, {
  "id": 52,
  "created_at": "20:31",
  "temperature": 53.0
}, {
  "id": 53,
  "created_at": "11:48",
  "temperature": 7.3
}, {
  "id": 54,
  "created_at": "10:36",
  "temperature": 40.2
}, {
  "id": 55,
  "created_at": "21:00",
  "temperature": 38.1
}, {
  "id": 56,
  "created_at": "14:27",
  "temperature": 21.2
}, {
  "id": 57,
  "created_at": "0:11",
  "temperature": 1.8
}, {
  "id": 58,
  "created_at": "22:56",
  "temperature": 32.9
}, {
  "id": 59,
  "created_at": "9:25",
  "temperature": 5.3
}, {
  "id": 60,
  "created_at": "2:25",
  "temperature": 17.3
}, {
  "id": 61,
  "created_at": "1:35",
  "temperature": 15.7
}, {
  "id": 62,
  "created_at": "19:13",
  "temperature": 34.6
}, {
  "id": 63,
  "created_at": "10:16",
  "temperature": 28.6
}, {
  "id": 64,
  "created_at": "2:22",
  "temperature": 3.0
}, {
  "id": 65,
  "created_at": "19:48",
  "temperature": 24.4
}, {
  "id": 66,
  "created_at": "3:59",
  "temperature": 32.1
}, {
  "id": 67,
  "created_at": "9:06",
  "temperature": 52.3
}, {
  "id": 68,
  "created_at": "9:33",
  "temperature": 27.6
}, {
  "id": 69,
  "created_at": "22:51",
  "temperature": 19.6
}, {
  "id": 70,
  "created_at": "19:19",
  "temperature": 49.9
}, {
  "id": 71,
  "created_at": "1:01",
  "temperature": 2.3
}, {
  "id": 72,
  "created_at": "20:00",
  "temperature": 44.9
}, {
  "id": 73,
  "created_at": "3:29",
  "temperature": 55.0
}, {
  "id": 74,
  "created_at": "16:59",
  "temperature": 43.2
}, {
  "id": 75,
  "created_at": "19:06",
  "temperature": 9.6
}, {
  "id": 76,
  "created_at": "13:38",
  "temperature": 35.7
}, {
  "id": 77,
  "created_at": "12:18",
  "temperature": 23.5
}, {
  "id": 78,
  "created_at": "0:53",
  "temperature": 19.2
}, {
  "id": 79,
  "created_at": "18:31",
  "temperature": 5.8
}, {
  "id": 80,
  "created_at": "3:15",
  "temperature": 57.8
}, {
  "id": 81,
  "created_at": "4:13",
  "temperature": 26.4
}, {
  "id": 82,
  "created_at": "21:26",
  "temperature": 45.5
}, {
  "id": 83,
  "created_at": "16:30",
  "temperature": 20.1
}, {
  "id": 84,
  "created_at": "18:43",
  "temperature": 23.1
}, {
  "id": 85,
  "created_at": "1:08",
  "temperature": 44.7
}, {
  "id": 86,
  "created_at": "2:33",
  "temperature": 46.4
}, {
  "id": 87,
  "created_at": "15:27",
  "temperature": 4.2
}, {
  "id": 88,
  "created_at": "14:46",
  "temperature": 21.7
}, {
  "id": 89,
  "created_at": "6:01",
  "temperature": 36.0
}, {
  "id": 90,
  "created_at": "5:56",
  "temperature": 26.9
}, {
  "id": 91,
  "created_at": "0:57",
  "temperature": 14.9
}, {
  "id": 92,
  "created_at": "20:20",
  "temperature": 24.8
}, {
  "id": 93,
  "created_at": "23:12",
  "temperature": 51.9
}, {
  "id": 94,
  "created_at": "8:27",
  "temperature": 6.0
}, {
  "id": 95,
  "created_at": "22:50",
  "temperature": 2.6
}, {
  "id": 96,
  "created_at": "15:17",
  "temperature": 7.7
}, {
  "id": 97,
  "created_at": "5:02",
  "temperature": 38.2
}, {
  "id": 98,
  "created_at": "12:54",
  "temperature": 11.4
}, {
  "id": 99,
  "created_at": "17:09",
  "temperature": 23.3
}, {
  "id": 100,
  "created_at": "9:56",
  "temperature": 38.3
}]

function sortDataByTime(array) {
  function convertToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  }

  return array.sort((a, b) => {
    const timeA = convertToMinutes(a.created_at);
    const timeB = convertToMinutes(b.created_at);
    return timeA - timeB;
  });
}

const sortedData = sortDataByTime(data);
console.log(sortedData);

const temperatureData = sortedData.map((dataPoint) => dataPoint.temperature);

// Find the highest, lowest, and current temperature values
const highestTemperature = Math.max(...temperatureData);
const lowestTemperature = Math.min(...temperatureData);
const currentTemperature = temperatureData[temperatureData.length - 1];


const maxDataPoints = 5; // Adjust this value as needed
const interval = Math.ceil(sortedData.length / maxDataPoints);

// Perform data sampling
const sampledData = sortedData.filter((_, index) => index % interval === 0);

// Extract labels and temperatures for chart
const labels = sampledData.map((dataPoint) => dataPoint.created_at);
const temperatures = sampledData.map((dataPoint) => dataPoint.temperature);




export default function Chart() {

  const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);

  return (
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
      }
      >
             <View style={styles.bottomMain}>

        <View style={styles.heading}>
          <Text style={styles.headingText}>
            Temperature Analysis
          </Text>
        </View>
        <LineChart
        style = {{
            marginBottom : 20
        }}
          data={{
            labels: labels,
            datasets: [
              {
                data: temperatures,
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
            color: (opacity = 1) => `rgba(0, 128, 0, 1)`,
            style: {
              borderRadius: 16
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
            useShadowColorFromDataset: true// Set shaded area color to green with increased opacity
          }}
          bezier
        />


        <View style={styles.container}>
          <BarChart
            data={{
              labels: ['Highest', 'Lowest', 'Current'],
              datasets: [
                {
                  data: [highestTemperature, lowestTemperature, currentTemperature],
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


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
    marginBottom: 35
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
  Temperature: {
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
    marginTop: '10%'
  },
  headingText: {
    fontSize: responsiveFontSize(3.7),
    fontWeight: 'bold',
    color: "#000000",


  }
});
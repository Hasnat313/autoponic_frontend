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

const data = [
  {
    id: 1,
    time2: '0:41',
    value: 17.9,
  },
  {
    id: 2,
    time2: '3:07',
    value: 29.3,
  },
  {
    id: 3,
    time2: '13:44',
    value: 38.3,
  },
  {
    id: 4,
    time2: '15:33',
    value: 0.9,
  },
  {
    id: 5,
    time2: '18:28',
    value: 58.0,
  },
  {
    id: 6,
    time2: '0:02',
    value: 33.4,
  },
  {
    id: 7,
    time2: '0:39',
    value: 0.6,
  },
  {
    id: 8,
    time2: '0:23',
    value: 27.6,
  },
  {
    id: 9,
    time2: '8:28',
    value: 43.5,
  },
  {
    id: 10,
    time2: '16:28',
    value: 27.4,
  },
  {
    id: 11,
    time2: '14:15',
    value: 13.8,
  },
  {
    id: 12,
    time2: '16:44',
    value: 25.7,
  },
  {
    id: 13,
    time2: '7:05',
    value: 41.5,
  },
  {
    id: 14,
    time2: '0:46',
    value: 17.6,
  },
  {
    id: 15,
    time2: '3:13',
    value: 51.3,
  },
  {
    id: 16,
    time2: '7:40',
    value: 41.6,
  },
  {
    id: 17,
    time2: '15:33',
    value: 53.7,
  },
  {
    id: 18,
    time2: '11:12',
    value: 44.6,
  },
  {
    id: 19,
    time2: '12:02',
    value: 56.9,
  },
  {
    id: 20,
    time2: '15:51',
    value: 59.2,
  },
  {
    id: 21,
    time2: '19:38',
    value: 32.0,
  },
  {
    id: 22,
    time2: '10:53',
    value: 36.9,
  },
  {
    id: 23,
    time2: '0:07',
    value: 18.5,
  },
  {
    id: 24,
    time2: '22:54',
    value: 24.3,
  },
  {
    id: 25,
    time2: '21:23',
    value: 58.3,
  },
  {
    id: 26,
    time2: '10:38',
    value: 31.9,
  },
  {
    id: 27,
    time2: '10:09',
    value: 8.7,
  },
  {
    id: 28,
    time2: '21:28',
    value: 12.1,
  },
  {
    id: 29,
    time2: '3:14',
    value: 38.4,
  },
  {
    id: 30,
    time2: '22:11',
    value: 41.2,
  },
  {
    id: 31,
    time2: '8:25',
    value: 39.8,
  },
  {
    id: 32,
    time2: '18:20',
    value: 45.6,
  },
  {
    id: 33,
    time2: '22:45',
    value: 38.2,
  },
  {
    id: 34,
    time2: '20:23',
    value: 8.4,
  },
  {
    id: 35,
    time2: '3:53',
    value: 37.6,
  },
  {
    id: 36,
    time2: '8:44',
    value: 11.5,
  },
  {
    id: 37,
    time2: '21:07',
    value: 41.6,
  },
  {
    id: 38,
    time2: '3:29',
    value: 9.4,
  },
  {
    id: 39,
    time2: '15:15',
    value: 44.2,
  },
  {
    id: 40,
    time2: '13:32',
    value: 47.5,
  },
  {
    id: 41,
    time2: '9:27',
    value: 52.5,
  },
  {
    id: 42,
    time2: '2:35',
    value: 27.1,
  },
  {
    id: 43,
    time2: '21:07',
    value: 36.6,
  },
  {
    id: 44,
    time2: '17:27',
    value: 8.2,
  },
  {
    id: 45,
    time2: '22:48',
    value: 33.8,
  },
  {
    id: 46,
    time2: '22:29',
    value: 43.5,
  },
  {
    id: 47,
    time2: '22:46',
    value: 29.3,
  },
  {
    id: 48,
    time2: '19:02',
    value: 16.0,
  },
  {
    id: 49,
    time2: '0:36',
    value: 34.9,
  },
  {
    id: 50,
    time2: '16:08',
    value: 17.3,
  },
  {
    id: 51,
    time2: '12:02',
    value: 45.1,
  },
  {
    id: 52,
    time2: '20:31',
    value: 53.0,
  },
  {
    id: 53,
    time2: '11:48',
    value: 7.3,
  },
  {
    id: 54,
    time2: '10:36',
    value: 40.2,
  },
  {
    id: 55,
    time2: '21:00',
    value: 38.1,
  },
  {
    id: 56,
    time2: '14:27',
    value: 21.2,
  },
  {
    id: 57,
    time2: '0:11',
    value: 1.8,
  },
  {
    id: 58,
    time2: '22:56',
    value: 32.9,
  },
  {
    id: 59,
    time2: '9:25',
    value: 5.3,
  },
  {
    id: 60,
    time2: '2:25',
    value: 17.3,
  },
  {
    id: 61,
    time2: '1:35',
    value: 15.7,
  },
  {
    id: 62,
    time2: '19:13',
    value: 34.6,
  },
  {
    id: 63,
    time2: '10:16',
    value: 28.6,
  },
  {
    id: 64,
    time2: '2:22',
    value: 3.0,
  },
  {
    id: 65,
    time2: '19:48',
    value: 24.4,
  },
  {
    id: 66,
    time2: '3:59',
    value: 32.1,
  },
  {
    id: 67,
    time2: '9:06',
    value: 52.3,
  },
  {
    id: 68,
    time2: '9:33',
    value: 27.6,
  },
  {
    id: 69,
    time2: '22:51',
    value: 19.6,
  },
  {
    id: 70,
    time2: '19:19',
    value: 49.9,
  },
  {
    id: 71,
    time2: '1:01',
    value: 2.3,
  },
  {
    id: 72,
    time2: '20:00',
    value: 44.9,
  },
  {
    id: 73,
    time2: '3:29',
    value: 55.0,
  },
  {
    id: 74,
    time2: '16:59',
    value: 43.2,
  },
  {
    id: 75,
    time2: '19:06',
    value: 9.6,
  },
  {
    id: 76,
    time2: '13:38',
    value: 35.7,
  },
  {
    id: 77,
    time2: '12:18',
    value: 23.5,
  },
  {
    id: 78,
    time2: '0:53',
    value: 19.2,
  },
  {
    id: 79,
    time2: '18:31',
    value: 5.8,
  },
  {
    id: 80,
    time2: '3:15',
    value: 57.8,
  },
  {
    id: 81,
    time2: '4:13',
    value: 26.4,
  },
  {
    id: 82,
    time2: '21:26',
    value: 45.5,
  },
  {
    id: 83,
    time2: '16:30',
    value: 20.1,
  },
  {
    id: 84,
    time2: '18:43',
    value: 23.1,
  },
  {
    id: 85,
    time2: '1:08',
    value: 44.7,
  },
  {
    id: 86,
    time2: '2:33',
    value: 46.4,
  },
  {
    id: 87,
    time2: '15:27',
    value: 4.2,
  },
  {
    id: 88,
    time2: '14:46',
    value: 21.7,
  },
  {
    id: 89,
    time2: '6:01',
    value: 36.0,
  },
  {
    id: 90,
    time2: '5:56',
    value: 26.9,
  },
  {
    id: 91,
    time2: '0:57',
    value: 14.9,
  },
  {
    id: 92,
    time2: '20:20',
    value: 24.8,
  },
  {
    id: 93,
    time2: '23:12',
    value: 51.9,
  },
  {
    id: 94,
    time2: '8:27',
    value: 6.0,
  },
  {
    id: 95,
    time2: '22:50',
    value: 2.6,
  },
  {
    id: 96,
    time2: '15:17',
    value: 7.7,
  },
  {
    id: 97,
    time2: '5:02',
    value: 38.2,
  },
  {
    id: 98,
    time2: '12:54',
    value: 11.4,
  },
  {
    id: 99,
    time2: '17:09',
    value: 23.3,
  },
  {
    id: 100,
    time2: '9:56',
    value: 38.3,
  },
];

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

export default function Chart() {
  const data = useSelector(store => store.temp);
  const sortedData = data.temp;
  // console.log(sortedData);

  const valueData = sortedData.map(dataPoint => dataPoint.value);

  // Find the highest, lowest, and current value values
  const highestvalue = Math.max(...valueData);
  const lowestvalue = Math.min(...valueData);
  const currentvalue = valueData[valueData.length - 1];

  const maxDataPoints = 1; // Adjust this value as needed
  const interval = Math.ceil(highestvalue - lowestvalue / maxDataPoints);

  // Perform data sampling
  const sampledData = sortedData?.filter((_, index) => index % interval === 0);

  // Extract labels and values for chart
  const labels = sampledData?.map(dataPoint => dataPoint.time2);
  const values = sampledData?.map(dataPoint => dataPoint.value);

  console.log(data);
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
        }>
        <View style={styles.bottomMain}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>value Analysis</Text>
          </View>
          <LineChart
            style={{
              marginBottom: 20,
            }}
            data={{
              labels: labels,
              datasets: [
                {
                  data: values,
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
              useShadowColorFromDataset: true, // Set shaded area color to green with increased opacity
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

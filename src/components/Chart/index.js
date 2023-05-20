// import {LineChart} from 'react-native-chart-kit';
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
// import {Dimensions} from 'react-native';
const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
};

export default function Chart() {
  return (
    <View style={{flex: 1, backgroundColor: '#1c744a'}}>
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
        {/* <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={line}
            // width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View> */}
      </View>
    </View>
  );
}

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
  line: {
    position: 'absolute',
    width: 20,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#000000',
  },
});

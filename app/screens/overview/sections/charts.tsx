import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Subheading, Text} from 'react-native-paper';
import PieChart from 'react-native-pie-chart';
import {LineChart} from 'react-native-chart-kit';

const Chart = () => {
  const widthAndHeight = 220;
  const series = [10, 20, 30, 10, 30];
  const sliceColor = ['#11ad91', '#164a41', '#65b5a7', '#24d4b5', '#98e3d5'];

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#216484',
            height: 100,
            width: 500,
            opacity: 0.85,
          }}
        />
        <Text style={styles.heading}>Your future fund value</Text>
        <Text style={styles.total}>$9,375</Text>
        <Subheading style={styles.ytd}>
          YTD Return On Your Future Fund
        </Subheading>
        <Text style={styles.percentage}>7.8%</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.75}
          coverFill={'#FFF'}
        />
        <View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.9}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },

  percentage: {
    position: 'absolute',
    top: 370,
    zIndex: 2,
    fontSize: 40,
  },

  total: {
    marginVertical: 10,
    fontSize: 65,
    color: '#11ad91',
  },

  heading: {
    marginTop: 10,
    fontSize: 30,
    color: '#216484',
    fontWeight: '500',
  },

  ytd: {
    marginBottom: 20,
  },
});

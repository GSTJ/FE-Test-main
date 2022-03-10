import React from 'react';
import {View, FlatList, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {deposits} from './model';
import BackArrow from '../../components/backArrow';

const Statement = ({route, navigation}) => {
  const current = route.params.month;
  const Deposit = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{`${current.full} ${item.date}, ${current.year}`}</Text>
        <Text>{`$${item.amount}.00`}</Text>
      </View>
    );
  };

  const Line = () => {
    return <View style={styles.line} />;
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <BackArrow light onPress={() => navigation?.goBack()} />
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#216484',
            height: 100,
            width: 500,
            opacity: 0.85,
          }}
        />
        <Text style={styles.heading}>{`${current.full} ${current.year}`}</Text>
        <FlatList
          contentContainerStyle={styles.statementsContainer}
          data={deposits}
          renderItem={({item}) => <Deposit item={item} />}
          ItemSeparatorComponent={Line}
        />
      </View>
    </View>
  );
};

export default Statement;

const styles = StyleSheet.create({
  arrow: {
    height: 30,
    width: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  heading: {
    marginVertical: 20,
    fontSize: 30,
    color: '#216484',
    fontWeight: '500',
  },

  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  line: {
    width: Dimensions.get('window').width,
    borderBottomColor: '#DFEAED',
    borderBottomWidth: 1,
  },

  statementsContainer: {
    borderColor: '#DFEAED',
    borderWidth: 1,
    width: Dimensions.get('window').width,
  },
});

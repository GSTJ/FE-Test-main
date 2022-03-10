import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {months} from './model';

const Statements = () => {
  const navigation = React.useContext(NavigationContext);
  const handlePress = item => {
    navigation?.navigate('Statement', {month: item});
  };

  const Month = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
        <Text style={styles.date}>{`${item.full} ${item.year}`}</Text>
        <Image
          style={styles.arrow}
          source={require('../../assets/images/rightArrow.png')}
        />
      </TouchableOpacity>
    );
  };

  const Line = () => {
    return <View style={styles.line} />;
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
        <Text style={styles.heading}>Your Statements</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.statementsContainer}
          data={months}
          renderItem={({item}) => <Month item={item} />}
          ItemSeparatorComponent={Line}
          initialNumToRender={months.length}
        />
      </View>
    </View>
  );
};

export default Statements;

const styles = StyleSheet.create({
  arrow: {
    height: 20,
    width: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  date: {
    fontSize: 16,
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

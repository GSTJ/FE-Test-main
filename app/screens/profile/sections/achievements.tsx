import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import Emoji from 'react-native-emoji';
import {achievements} from './models';

const Achievements = () => {
  const styles = StyleSheet.create({
    card: {
      height: 70,
      width: 150,
      marginHorizontal: 10,
      marginVertical: 10,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {width: 2, height: 2},
      shadowRadius: 5,
      shadowOpacity: 0.1,
    },
  });

  const Card = ({item}) => {
    return (
      <View style={styles.card}>
        <Emoji name={item.icon} style={{fontSize: 40}} />
        <Text>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={achievements}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default Achievements;

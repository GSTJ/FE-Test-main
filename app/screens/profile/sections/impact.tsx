import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Screen from '../../../components/screen';
import {Title, Subheading, withTheme} from 'react-native-paper';

const Impact = ({theme}) => {
  const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      height: 200,
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },

    cardDetails: {
      backgroundColor: 'white',
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      shadowColor: 'black',
      shadowOffset: {width: 2, height: 2},
      shadowRadius: 5,
      shadowOpacity: 0.1,
    },
  });

  return (
    <Screen>
      <Title>Impact Report</Title>
      <Image
        style={styles.card}
        source={require('../../../assets/images/bike.png')}
      />
      <View style={styles.cardDetails}>
        <Title>View Report</Title>
        <Subheading>See your impact across all your donations</Subheading>
      </View>
    </Screen>
  );
};

export default withTheme(Impact);

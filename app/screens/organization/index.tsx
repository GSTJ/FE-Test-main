import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Chip, Title, Paragraph} from 'react-native-paper';
import {RootStackParamList, ScreenNames} from '../../types/reactNavigation';

type OrganizationScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.Organization
>;

const Organization = () => {
  const {params} = useRoute<OrganizationScreenRouteProp>();

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image
        testID="organization-logo"
        source={{uri: params.uri}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Title>Categories</Title>
        <FlatList /* To showcase a possible use of multiple categories */
          data={[params.type]}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: category}) => (
            <Chip style={styles.chip}>{category}</Chip>
          )}
          keyExtractor={item => String(item)}
        />
        <Title>Description</Title>
        <Paragraph>{params.description}</Paragraph>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  content: {
    padding: 20,
  },
  image: {
    height: 300,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export default Organization;

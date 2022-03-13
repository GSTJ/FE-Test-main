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
    <ScrollView
      testID="organization-screen"
      style={styles.container}
      bounces={false}>
      <Image
        accessibilityRole="image"
        testID="organization-logo"
        source={{uri: params.uri}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Title accessibilityRole="header">Categories</Title>
        <FlatList /* To showcase a possible use of multiple categories */
          data={[params.type]}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: category}) => (
            <Chip accessibilityRole="text" style={styles.chip}>
              {category}
            </Chip>
          )}
          keyExtractor={item => String(item)}
        />
        <Title accessibilityRole="header">Description</Title>
        <Paragraph accessibilityRole="text">{params.description}</Paragraph>
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
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    height: 300,
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export default Organization;

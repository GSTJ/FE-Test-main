import React, {useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, SectionList, RefreshControl} from 'react-native';
import {
  Avatar,
  Searchbar,
  List,
  Divider,
  ActivityIndicator,
  useTheme,
} from 'react-native-paper';
import useAxios from 'axios-hooks';
import {
  makeSearchByProperty,
  makeSectionByProperty,
  SectionItem,
} from './utils';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenNames} from '../../types/reactNavigation';
import {EmptyList} from './components/emptyList';
import {ErrorMessage} from './components/errorMessage';

export interface IOrganization {
  name: string;
  type: string;
  ein: string;
  uri: string;
  description: string;
}

type OrganizationsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Organizations
>;

const Organizations = () => {
  const {colors} = useTheme();
  const [{data, loading, error}, refetch] = useAxios<IOrganization[]>(
    'https://gs.npkn.net/npo',
  );
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation<OrganizationsScreenNavigationProp>();

  const filteredData: SectionItem<IOrganization>[] | void = useMemo(() => {
    return data
      ?.filter(makeSearchByProperty('name', searchQuery))
      ?.reduce(makeSectionByProperty('type'), []);
  }, [data, searchQuery]);

  const HandleRequestStates = useCallback(() => {
    if (loading) {
      return (
        <ActivityIndicator
          testID="activity-indicator"
          accessibilityLabel="Loading organizations"
          accessibilityRole="progressbar"
          style={styles.activityIndicator}
        />
      );
    }
    if (error) {
      return <ErrorMessage />;
    }

    return <EmptyList />;
  }, [loading, error]);

  return (
    <View style={styles.container}>
      <Searchbar
        autoComplete="off"
        accessibilityRole="search"
        placeholder="Search organizations by name"
        testID="organizations-searchbar"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchbar}
        inputStyle={styles.searchbarInput}
      />
      <SectionList
        contentContainerStyle={styles.organizationList}
        accessibilityState={{busy: loading}}
        sections={filteredData ?? []}
        keyExtractor={({ein}) => String(ein)}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <List.Section accessibilityRole="header" title={section.title}>
              {/* Needs a children prop in type checking */}
            </List.Section>
          </View>
        )}
        renderItem={({item}) => (
          <List.Item
            onPress={() => navigation.navigate(ScreenNames.Organization, item)}
            accessibilityLabel={item.name}
            accessibilityRole="button"
            accessibilityHint="Opens the organization details page"
            testID={`organization-list-item-${item.ein}`}
            title={item.name}
            description={item.description}
            descriptionNumberOfLines={1}
            left={props => (
              <Avatar.Image
                accessibilityRole="image"
                source={{uri: item.uri}}
                {...props}
              />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Divider inset />}
        ListEmptyComponent={<HandleRequestStates />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#f7f7f7',
  },
  searchbar: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderRadius: 0,
    shadowOpacity: 0,
  },
  searchbarInput: {
    fontSize: 15,
  },
  organizationList: {
    paddingHorizontal: 10,
    paddingBottom: 150,
  },
  activityIndicator: {
    marginTop: 25,
  },
});

export default Organizations;

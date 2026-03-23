import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UniversityCard from '../components/UniversityCard';
import universities from '../data/universities';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = universities.filter(
    item =>
      item.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <UniversityCard
      item={item}
      onPress={() => navigation.navigate('Details', { university: item })}
    />
  );

  const ListHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.resultsCount}>
        {filtered.length} {filtered.length === 1 ? 'university' : 'universities'} found
      </Text>
    </View>
  );

  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Icon name="search" size={48} color="#9ca3af" style={styles.emptyIcon} />
      <Text style={styles.emptyText}>No universities found</Text>
      <Text style={styles.emptySubText}>Try a different name or country</Text>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

     
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎓 StudentAcademics</Text>
        <Text style={styles.headerSubtitle}>Explore top universities worldwide</Text>
        <View style={styles.searchContainer}>
         <Icon name="search" size={22} color="#9ca3af" style={styles.searchIcon1} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by university or country..."
            placeholderTextColor="#a5b4fc"
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      
      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader />}
        ListEmptyComponent={<EmptyList />}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: width * 0.05,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: width < 360 ? 20 : 24,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#c7d2fe',
    marginTop: 4,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#ffffff',
    paddingVertical: 10,
  },
  listContent: {
    paddingTop: 12,
  },
  listHeader: {
    paddingHorizontal: width * 0.04,
    marginBottom: 8,
  },
  resultsCount: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  searchIcon1: {
    marginRight: 0,

  },

  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  emptySubText: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default HomeScreen;

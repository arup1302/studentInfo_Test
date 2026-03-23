import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const UniversityCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${item.university}`}
    >
      <View style={styles.header}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View style={styles.headerText}>
          <Text style={styles.universityName} numberOfLines={2}>
            {item.university}
          </Text>
          <View style={styles.countryBadge}>
            <Text style={styles.countryText}>{item.country}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.rankingText}>{item.ranking}</Text>
        <Text style={styles.viewMore}>View Details →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: width * 0.04,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  flag: {
    fontSize: 36,
    marginRight: 12,
    marginTop: 2,
  },
  headerText: {
    flex: 1,
  },
  universityName: {
    fontSize: width < 360 ? 15 : 17,
    fontWeight: '700',
    color: '#1a1a2e',
    lineHeight: 22,
    marginBottom: 6,
  },
  countryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eef2ff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  countryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4F46E5',
  },
  description: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 19,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10,
  },
  rankingText: {
    fontSize: 11,
    color: '#9ca3af',
    flex: 1,
    marginRight: 8,
  },
  viewMore: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
});

export default UniversityCard;

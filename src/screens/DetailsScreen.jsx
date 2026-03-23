import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const DetailsScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const { university } = route.params;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Icon name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          Details
        </Text>
        <View style={styles.backButtonPlaceholder} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
      >
    
        <View style={styles.heroCard}>
          <Text style={styles.heroFlag}>{university.flag}</Text>
          <Text style={styles.heroName}>{university.university}</Text>
          <View style={styles.countryBadge}>
            <Text style={styles.countryText}>{university.country}</Text>
          </View>
          <View style={styles.rankingBadge}>
            <Text style={styles.rankingText}>{university.ranking}</Text>
          </View>
        </View>

     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.fullDescription}>{university.fullDescription}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Information</Text>
          <View style={styles.infoCard}>
            <InfoRow label="🌍  Country" value={university.country} />
            <View style={styles.divider} />
            <InfoRow label="💰  Tuition" value={university.tuition} />
            <View style={styles.divider} />
            <InfoRow label="🏆  Ranking" value={university.ranking} />
          </View>
        </View>

     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Programs</Text>
          <View style={styles.programsContainer}>
            {university.programs.map((program, index) => (
              <View key={index} style={styles.programChip}>
                <Text style={styles.programText}>{program}</Text>
              </View>
            ))}
          </View>
        </View>

     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Official Website</Text>
          <View style={styles.websiteCard}>
            <Icon name="globe" size={20} style={styles.websiteIcon} />
            <Text style={styles.websiteText}>{university.website}</Text>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 18,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  backButtonPlaceholder: {
    width: 38,
  },
  scrollContent: {
    paddingTop: 16,
  },
  heroCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: width * 0.04,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  heroFlag: {
    fontSize: 56,
    marginBottom: 12,
  },
  heroName: {
    fontSize: width < 360 ? 18 : 22,
    fontWeight: '800',
    color: '#1a1a2e',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 10,
  },
  countryBadge: {
    backgroundColor: '#eef2ff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 8,
  },
  countryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
  rankingBadge: {
    backgroundColor: '#fefce8',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  rankingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400e',
  },
  section: {
    marginHorizontal: width * 0.04,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 10,
  },
  fullDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  infoLabel: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
    width: '35%',
  },
  infoValue: {
    fontSize: 13,
    color: '#1f2937',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginHorizontal: 16,
  },
  programsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  programChip: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1.5,
    borderColor: '#e0e7ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  programText: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '500',
  },
  websiteCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  websiteIcon: {
    marginRight: 12,
  },
  websiteText: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '500',
    flex: 1,
  },
});

export default DetailsScreen;

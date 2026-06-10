import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo/Logo';
import BrandIcon from '../components/BrandIcon/BrandIcon';
import TileWeather from '../components/TileWeather/TileWeather';
import CardEvent from '../components/CardEvent/CardEvent';
import CardGuide from '../components/CardGuide/CardGuide';
import Carousel from '../components/Carousel/Carousel';
import TileLocation from '../components/TileLocation/TileLocation';
import Nav from '../components/Nav/Nav';
import useTheme from '../theme/useTheme';
import { sizes, fonts } from '../theme/tokens';
import { getEvent } from '../data/events';

const imgAmelia = require('../assets/shared/images/portraits/Portrait-05.png');
const imgTeresa = require('../assets/shared/images/portraits/Portrait-12.png');
const imgKarim = require('../assets/shared/images/portraits/Portrait-13.png');

const featured = getEvent('canyon-crew');
const morningRun = getEvent('morning-run');
const horseback = getEvent('horseback');
const weekendSurf = getEvent('weekend-surf');

// Ported from src/Home.jsx.
export default function HomeScreen({ navigation }) {
  const t = useTheme();
  const openEvent = (id) => navigation.navigate('EventDetail', { eventId: id });

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: t.bgBrandPrimary }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Logo />
          <BrandIcon glyph="search" />
        </View>

        {/* Location & Weather */}
        <View style={[styles.section, { gap: sizes.padLarge }]}>
          <View>
            <Text style={[styles.headingLabel, { color: t.colorTertiary }]}>Current Location</Text>
            <Text style={[styles.headingTitle, { color: t.colorPrimary }]}>Los Angeles</Text>
          </View>
          <TileWeather time="3:43PM" conditions="Light Rain" temp="65°F" low="42°" high="67°" />
        </View>

        {/* Featured */}
        <View style={[styles.section, { gap: sizes.gapMedium }]}>
          <Text style={[styles.sectionTitle, { color: t.colorPrimary }]}>Featured</Text>
          <CardEvent
            src={featured.src}
            title={featured.title}
            location={featured.location}
            people={featured.people}
            time={featured.time}
            size="large"
            overlay={featured.overlay}
            month={featured.month}
            day={featured.day}
            onPress={() => openEvent(featured.id)}
          />
        </View>

        {/* Guides + Location tile */}
        <View style={[styles.section, { gap: sizes.padXxlarge }]}>
          <Carousel title="Guides">
            <CardGuide src={imgAmelia} name="Amelia B." category="SURFING" />
            <CardGuide src={imgTeresa} name="Teresa M." category="MEDITATION" />
            <CardGuide src={imgKarim} name="Karim N." category="HIKING" />
          </Carousel>
          <TileLocation location="Los Angeles" />
        </View>

        {/* Upcoming Events */}
        <View style={[styles.section, { gap: sizes.gapMedium }]}>
          <Text style={[styles.sectionTitle, { color: t.colorPrimary }]}>Upcoming Events</Text>
          <View style={{ gap: sizes.padXlarge }}>
            {[morningRun, horseback, weekendSurf].map((event) => (
              <CardEvent
                key={event.id}
                src={event.src}
                title={event.title}
                location={event.location}
                people={event.people}
                time={event.time}
                size="large"
                overlay={event.id === 'weekend-surf' ? 'Group Surf' : ''}
                month={event.month}
                day={event.day}
                onPress={() => openEvent(event.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <Nav active="Home" onNavigate={(key) => navigation.navigate(key)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { gap: sizes.padXlarge, padding: sizes.padMedium },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  section: { width: '100%' },
  headingLabel: { fontFamily: fonts.sansMedium, fontSize: sizes.font3xl, lineHeight: sizes.font3xl * 1.12, letterSpacing: sizes.letterSpacingSnug },
  headingTitle: { fontFamily: fonts.sansMedium, fontSize: sizes.font3xl, lineHeight: sizes.font3xl * 1.12, letterSpacing: sizes.letterSpacingSnug },
  sectionTitle: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
});

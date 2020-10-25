// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import analytics from '@react-native-firebase/analytics';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
// import {
//   InterstitialAd,
//   RewardedAd,
//   BannerAd,
//   TestIds,
// } from '@react-native-firebase/admob';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const App = () => {
  useEffect(() => {
    console.log('Ran');

    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });

    analytics().setCurrentScreen('Home', 'Home');

    analytics().setUserId('18');
    analytics().setUserProperties({['username']: 'Bilal'});
  }, []);

  return (
    <>
      <View>
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.SMART_BANNER} />

        <Button
          title="Add To Basket"
          onPress={() =>
            analytics().logEvent('generalEvent', {
              item: "It's working!!!",
            })
          }
        />
      </View>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

// import React, {useEffect, useState} from 'react';
// import {Button} from 'react-native';
// import {
//   InterstitialAd,
//   AdEventType,
//   TestIds,
// } from '@react-native-firebase/admob';

// const adUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

// function App() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const eventListener = interstitial.onAdEvent((type) => {
//       if (type === AdEventType.LOADED) {
//         setLoaded(true);
//       }
//     });

//     // Start loading the interstitial straight away
//     interstitial.load();

//     // Unsubscribe from events on unmount
//     return () => {
//       eventListener();
//     };
//   }, []);

//   // No advert ready to show yet
//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Button
//       title="Show Interstitial"
//       onPress={() => {
//         interstitial.show();
//       }}
//     />
//   );
// }
// export default App;

// import React, {useEffect, useState} from 'react';
// import {Button} from 'react-native';
// import {
//   RewardedAd,
//   RewardedAdEventType,
//   TestIds,
// } from '@react-native-firebase/admob';

// const adUnitId = __DEV__
//   ? TestIds.REWARDED
//   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

// function App() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const eventListener = rewarded.onAdEvent((type, error, reward) => {
//       if (type === RewardedAdEventType.LOADED) {
//         setLoaded(true);
//       }

//       if (type === RewardedAdEventType.EARNED_REWARD) {
//         console.log('User earned reward of ', reward);
//       }
//     });

//     // Start loading the rewarded ad straight away
//     rewarded.load();

//     // Unsubscribe from events on unmount
//     return () => {
//       eventListener();
//     };
//   }, []);

//   // No advert ready to show yet
//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Button
//       title="Show Rewarded Ad"
//       onPress={() => {
//         rewarded.show();
//       }}
//     />
//   );
// }

// export default App;

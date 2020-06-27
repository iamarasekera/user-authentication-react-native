/**
 * React Native Sign-in App
 * @author iamarasekera
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

/**
   * The SignIn react component 
   */
export default class SignIn extends Component {
  render() {
    return (
      <><ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.apptitle}>Sign In</Text>
          </View>
          <View style={styles.body}></View></ScrollView></>
    );
  }
};

/**
 * The style sheet of the application
 */
const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },
  apptitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginHorizontal:140,
    marginVertical:280
  },
}
);
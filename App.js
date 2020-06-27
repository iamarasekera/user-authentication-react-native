/**
 * React Native Sign-in App
 * @author iamarasekera
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text, StatusBar, TextInput,
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
          <View style={styles.body}>
          <View style={styles.container}>
              <View style={styles.rowstyle}>
                <Text style={styles.inputext}>Email</Text>
                <TextInput
                  placeholder='your@address.net'
                  style={styles.input} />
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.inputext}>Password</Text>
                <TextInput
                  maxLength={10}
                  placeholder='**********'
                  secureTextEntry={true}
                  style={styles.input} />
              </View>
              <View style={styles.rowstyle}>
                <Text
                  style={styles.submitbutton}
                  onPress={this.handleSubmit}>Sign-in</Text>
              </View>
            </View>
          </View></ScrollView></>
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
    margin:10
  },
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10
  },
  rowstyle: {
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 0,
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 16,
  },
  inputext: {
    fontWeight: 'bold',
    flex: 1,
    width: 200,
    height: 44,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  submitbutton: {
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'gray',
    margin: 10,
    marginLeft: 'auto',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
}
);
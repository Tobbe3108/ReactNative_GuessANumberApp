import React from 'react';
import { StyleSheet, View } from 'react-native';

import BodyText from './BodyText';
import Colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.LightAccent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.DarkShades2,
    fontSize: 22
  }
});

export default NumberContainer;

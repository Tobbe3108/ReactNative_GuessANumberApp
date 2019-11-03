import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
      <Image
        style={styles.image}
        source={require('../assets/success.png')}
        resizeMode='stretch'
      />
      <BodyText style={{ marginVertical: 10, textAlign: 'center' }}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton title='New Game' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: 300
  },
  highlight: {
    color: Colors.MainBrand,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;

import React from 'react';
import {View} from 'react-native';
import Header from './header';
import GameInfo from './gameinfo';

const Hearthstone =()=>{
  return(
    <View>
      <Header headertext={'Hearthstone'} />
      <GameInfo />
    </View>
  );
};

export default Hearthstone;

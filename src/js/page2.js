import React from 'react';
import {View} from 'react-native';
import SearchBar from './searchbar';
import GameList from './gamelist';
import TabBar from './tabBar';

const Home =() =>{
  return (
    <View>
      <SearchBar />
      <GameList />
      <TabBar />
    </View>
  );
};

export default Home;

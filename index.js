import React from 'react'
import { View, StyleSheet } from 'react-native';
import { MainLoader } from 'react-native-preloader-shimmer'


const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <MainLoader barStyle={'dark-content'} animSpeed={100} visible={true} backgroundColor={'white'} />
    </View>
  )
}

export default App;

import React from 'react'
import { View } from 'react-native';
import { BasicLoader } from '@chzappsindia/react-native-loader'


const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BasicLoader color={'#00000030'} />
    </View>
  )
}

export default App;

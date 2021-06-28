# react-native-preloader-shimmer
<img src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif" width="40" height="40" />

![](https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/item_final.gif | width=100)

## Install packages

`npm install react-native-preloader-shimmer --save`



`yarn add react-native-preloader-shimmer`

# Other Dependency - Mostly auto install

`yarn add react-native-shimmer`
`cd ios && pod install`

### If any error occur's

`yarn add react-native-shimmer`

## Usage

```javascript
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
```

| **NAME PROPS**  | **ANDROID**  | **IOS**      | **TYPE**                   |
|-----------------|--------------|--------------|----------------------------|
| barStyle        | required     | required     | dark-content light-content |
| animSpeed       | required     | required     | Number 1 - 1000            |
| backgroundColor | not required | not required | Default - white  #ffffff   |
| visible         | not requires | not requires | Boolean default is true    |


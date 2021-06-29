# react-native-preloader-shimmer

MainLoader         |  PostLoader
:-------------------------:|:-------------------------:
<img alt='MainLoader' src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/item_final.gif" width="100" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/item_final.gif" width="100" height="200" />


## Install packages

`npm install react-native-preloader-shimmer --save`

`yarn add react-native-preloader-shimmer`

### Other Dependency - Mostly auto install

`yarn add react-native-shimmer`

and

`cd ios && pod install`

### If any error occur's without installing react-native-shimmer

if any error occur's without installing react-native-shimmer then 

`yarn add react-native-shimmer`

## Usage

* [MainLoader](#MainLoader)
* [PostLoader](#PostLoader)
* [PageLoader](#PageLoader)
* [ProfileLoader](#ProfileLoader)
* [Full Example](#Full Example)

# MainLoader
```javascript
import React from "react";
import { View, StyleSheet } from "react-native";
import { MainLoader } from "react-native-preloader-shimmer";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MainLoader
        barStyle={"dark-content"} //Status bar icon color -required filed light-content or dark-content
        animSpeed={100} // Animation Run speed - default 100ms
        visible={true} //Visibility of MainLoader default true
        backgroundColor={"white"} // backgroundColor of main container default = #ffffff
      />
    </View>
  );
};

export default App;
```

| **NAME PROPS**  | **ANDROID**  | **IOS**      | **TYPE**                   |
| --------------- | ------------ | ------------ | -------------------------- |
| barStyle        | required     | required     | dark-content light-content |
| animSpeed       | required     | required     | Number 1 - 1000            |
| backgroundColor | not required | not required | Default - white #ffffff    |
| visible         | not requires | not requires | Boolean default is true    |


# PostLoader

- Make a Loader for your post like facebook

```javascript
import React from 'react'
import { View } from 'react-native';
import { PostLoader } from 'react-native-preloader-shimmer'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <PostLoader
        barStyle={'dark-content'} //---> StatusBar Icon color 
        animSpeed={100} //----> Animation Speed default 100
        visible={true} //----> Visibility  
        backgroundColor={'white'} />
    </View>
  )
}

export default App;
```
| **NAME PROPS**  | **ANDROID**  | **IOS**      | **TYPE**                   |
| --------------- | ------------ | ------------ | -------------------------- |
| barStyle        | required     | required     | dark-content light-content |
| animSpeed       | required     | required     | Number 1 - 1000            |
| backgroundColor | not required | not required | Default - white #ffffff    |
| visible         | not requires | not requires | Boolean default is true    |

# PageLoader

- PreBuild PageLoader for BlogPost / Terms and conditions fetching from internet 

```javascript
import React from 'react'
import { View } from 'react-native';
import { PageLoader } from 'react-native-preloader-shimmer'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <PageLoader
        barStyle={'dark-content'} //----> StatusBar icon Color
        animSpeed={100} //----> Animation Speed default 100
        visible={true} //----> Visibility  true/false
        backgroundColor={'white'} />
    </View>
  )
}

export default App;
```
| **NAME PROPS**  | **ANDROID**  | **IOS**      | **TYPE**                   |
| --------------- | ------------ | ------------ | -------------------------- |
| barStyle        | required     | required     | dark-content light-content |
| animSpeed       | required     | required     | Number 1 - 1000            |
| backgroundColor | not required | not required | Default - white #ffffff    |
| visible         | not requires | not requires | Boolean default is true    |

# ProfileLoader

- PreBuild Loader for profile if it's empty or fetching

```javascript
import React from 'react'
import { View } from 'react-native';
import { ProfileLoader } from 'react-native-preloader-shimmer'

const App = () => {
  return (
    <View style={{ padding: 10 }}>
      <ProfileLoader
        animSpeed={100} //----> Animation Speed default 100
        visible={true} //----> Visibility  true/false
        backgroundColor={'white'} />
    </View>
  )
}

export default App;
```
| **NAME PROPS**  | **ANDROID**  | **IOS**      | **TYPE**                   |
| --------------- | ------------ | ------------ | -------------------------- |
| animSpeed       | required     | required     | Number 1 - 1000            |
| backgroundColor | not required | not required | Default - white #ffffff    |
| visible         | not requires | not requires | Boolean default is true    |

# Full Example

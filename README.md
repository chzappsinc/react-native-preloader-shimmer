# react-native-preloader-shimmer

---
**💌 Message**

We are making new more content as soon as possible

---

- Demo Images

MainLoader         |  PageLoader    | PostLoader     |  Profile Loader
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img alt='MainLoader' src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/item_final.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/page_loader.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/post_loader.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/profileLoader.gif" width="350" height="200" />


## Install packages

`npm install react-native-preloader-shimmer --save`

`yarn add react-native-preloader-shimmer`

**Demo Video : ** https://youtu.be/SUkDm3pXmuw

### Other Dependency - Mostly auto install

`yarn add react-native-shimmer`

and

`cd ios && pod install`

### If any error occur's without installing react-native-shimmer

if any error occur's without installing react-native-shimmer then 

`yarn add react-native-shimmer`

## Usage

- Full page content background color will be also the statusBar color so please give a valid barStyle [light-content | dark-conent | default] for better UI desing 
- BarStyle not required for profile loader or any short view

* [Main Loader](#main-loder)
* [Post Loader](#post-loader)
* [Page Loader](#page-loader)
* [Profile Loader](#profile-loader)
* [Full Example](#full-example)

# Main Loader
MainLoader         |  MainLoader Dark
:-------------------------:|:-------------------------:
<img alt='MainLoader' src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/item_final.gif" width="100" height="200" />|  <img src="https://demo.chzapps.com/assets/main_dark_ex.gif" width="100" height="200" />


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


# Post Loader

PostLoader         |  PostLoader Dark
:-------------------------:|:-------------------------:
 <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/post_loader.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/post_loader_dark.gif" width="100" height="200" />


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

# Page Loader

PageLoader         |  PageLoader Dark
:-------------------------:|:-------------------------:
 <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/page_loader.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/page_loader_dark.gif" width="100" height="200" />


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

# Profile Loader

ProfileLoader        |  ProfileLoader Dark
:-------------------------:|:-------------------------:
 <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/profileLoader.gif" width="auto" height="200" />|  <img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/profileLoader_dark.gif" width="auto" height="200" />



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

- Fetching data from server 
- After fetching success profileLoader will invisible

<img src="https://raw.githubusercontent.com/chzappsinc/react-native-preloader-shimmer/main/demo_gif/profile_loader.gif" width="auto" height="200" />

```javascript 
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProfileLoader } from 'react-native-preloader-shimmer'
const App = () => {

  const [showLoader, setShowLoader] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getProfile() //---> Fetch may work fast ... this is for demo purpose
    }, 2000);
  }, [])

  const getProfile = async () => {
    /*
    Usage of async function means here if will call only after first 2 function works
    */
    const ftch = await fetch('https://demo.chzapps.com/get-user-demo.json'); //----> May load fast
    const json = await ftch.json()
    if (json) {
      setShowLoader(false) //This is for invisible Loader and visible other text and images
      setData(json)
    }
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 10 }}>
        {/* Wrapped in View for padding 10 Default ProfileLoader not support style */}
        {
          showLoader ? <ProfileLoader
            animSpeed={100} //----> Animation Speed default 100
            visible={showLoader} //----> Visibility  true/false
            backgroundColor={'white'} /> :
            <View>
              <Image
                source={{ uri: data.profile }}
                style={{ height: 50, width: 50 }} />
              <Text style={styles.name}>Name : {data.name}</Text>
              <Text style={styles.name}>Work : {data.workingtype}</Text>
              <Text style={styles.name}>Age : {data.age}</Text>
            </View>
        }
      </View>
    </View>
  )
}

//StyleSheet
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  }
})

export default App;

/**
 * this is only a demo purpose
 * Fetched image was from internet
 */

```

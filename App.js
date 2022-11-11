// import React, { useState } from 'react';
// import Config from 'react-native-config';
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const App = ( ) => {
//   const initial = [{color: 'red',checked : false},{color: 'green',checked : false},{color: 'blue',checked : false},{color: 'brown',checked : false}] 
//   const [data,setData] = useState(initial)
//   const [color,setColor] = useState();
//   console.log(Config)
//   const onPress = (val) => {
//           console.log('onpress',val)
//   }

//   const renderColor = (val) => {
//     return(
//       <View>
//         <TouchableOpacity onPress = {() => onPress(val)} style = {[styles.colorBox,{backgroundColor:`${val.item.color}`}]}>
//         <Text style = {styles.text}>{val.item.checked ? '✓' : null}</Text>
//         </TouchableOpacity> 
//       </View>
//     )
//   }

//   return (
//     <SafeAreaView style={styles.backgroundStyle}>
//       <StatusBar/>
//         <View>
//            <Text>Welcome to color picker {color}</Text>
//           <FlatList
//             data = {data}
//             renderItem={renderColor}
//           />
//           <TextInput placeholder='enter your fav color' onTextInput={(val) => setColor(val.target.value)}/>
//         </View>
//     </SafeAreaView>
//   );
// }
  
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   backgroundStyle: {
//     color: 'red'
//   },
//   text: {
//     color: 'white',
//     fontSize:25
//   },
//   colorBox: {
//      width: 50,
//      height: 50,
//      borderRadius:50,
//      justifyContent: 'center',
//      alignItems: 'center',
//      margin: 10
//   }
// });



import React, { Component } from 'react';
import Config from 'react-native-config';
import axios from 'axios'
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

const  Touchables = () =>  {

  const onLongPressButton = async () =>  {
    // alert('You long-pressed the button!')
    // fetch('https://ghibliapi.herokuapp.com/people').then((res) => {
    //   const response = res.json();
    //   // console.log(response)
    // }).then((response) => {
    //    console.log()
    // })
    const response = await axios.get('https://ghibliapi.herokuapp.com/people')
    console.log(response.data)
    // alert(Config)

  }
   
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPress={onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  
  export default Touchables

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});


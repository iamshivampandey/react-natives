import React, { useState } from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View,Flatlist } from "react-native";
import List from './components/List'
const App = () => {
  const [number,setState] =  useState(0)
  const onPress = () => {
     setState(data + 1)
  }
  const data = [{myName : 'shivam' ,rollno : 1},{myName : 'shivam' ,rollno : 1},{myName : 'shivam' ,rollno : 1}]

  const renderItem = (event) => {
    const val  = event;
    return(
      <List data = {val}/>
    )
  }
  return (
    <View style={styles.container}>
      <Text>This is list</Text>
      <View>
        <Flatlist 
          data = {data}
          renderItem = {renderItem}
        />
      </View> 
      <Text style={styles.result}>{number}</Text>
      <Button onPress={onPress} title="add number" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize: 64,
    textAlign: "center"
  }
});

export default App;

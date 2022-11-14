import React, { useState } from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [data,setState] =  useState(0)
  const onPress = () => {
     setState(data + 1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{data}</Text>
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

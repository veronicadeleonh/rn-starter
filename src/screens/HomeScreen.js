import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  // console.log("props", props.navigation)

  return (
    <View>
    <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />

      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />

      <Button 
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />

      <Button 
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button 
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />

      <Button 
        title="Go to Square Screen Demo"
        onPress={() => navigation.navigate("Square")}
      />

      <Button 
        title="Go to Square Text Demo"
        onPress={() => navigation.navigate("Text")}
      />

      <Button 
        title="Go to Square Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
)};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
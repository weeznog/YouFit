import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Router from "./src/router";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

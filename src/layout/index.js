import React from "react"
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View} from "react-native"

import Colors from "./../libraries/colors"

const AppLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.darker,
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.darker,
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 30
  }
})

export default AppLayout

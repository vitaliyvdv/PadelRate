import React from "react"
import PropTypes from "prop-types"
import {StyleSheet, Text, TouchableHighlight, View} from "react-native"

import {Colors, Borders} from "./../../../libraries"

const Icon = ({source}) => {
  return <View style={styles.icon}>{source}</View>
}

const AppButton = ({onPress, text, color, variant, size, startIcon, endIcon}) => {
  return (
    <View style={styles.root}>
      <TouchableHighlight onPress={onPress} color={Colors.white} activeOpacity={0.9}>
        <View style={[styles.button, styles[size], styles[color]]}>
          {startIcon && <Icon source={startIcon} />}
          <Text style={styles.text}>{text}</Text>
          {endIcon && <Icon source={endIcon} />}
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: Borders.default,
    overflow: "hidden"
  },
  button: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  primary: {
    backgroundColor: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.light
  },
  sm: {
    height: 48
  },
  md: {
    height: 55
  },
  lg: {
    height: 62
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold"
  },
  icon: {
    position: "relative",
    width: 24,
    height: 24
  }
})

AppButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["text", "contained"])
}

AppButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "md"
}

export default AppButton

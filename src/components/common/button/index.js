import React from "react"
import PropTypes from "prop-types"
import {StyleSheet, Text, TouchableHighlight, View} from "react-native"

import {Colors, Borders} from "./../../../libraries"

const Icon = ({source, style}) => {
  return <View style={[styles.icon, style]}>{source}</View>
}

const TextColor = color => {
  switch (true) {
    case color == "primary":
      return {color: Colors.primary}
      break
    case color == "secondary":
      return {color: Colors.light}
      break
    default:
      return {color: Colors.white}
  }
}

const TextSize = size => {
  switch (true) {
    case size == "sm":
      return {fontSize: 14, lineHeight: 17}
      break
    case size == "lg":
      return {fontSize: 18, lineHeight: 21}
      break
    default:
      return {fontSize: 16, lineHeight: 19}
  }
}

const AppButton = ({onPress, text, color, variant, size, startIcon, endIcon, disabled}) => {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={variant == "contained" ? Colors.white : null}
        activeOpacity={0.9}
        accessibilityLabel={text}
        accessibilityRole='button'
        disabled={disabled}
      >
        <View
          style={[
            styles.button,
            variant != "text" && styles[size],
            variant == "contained" && contained[color],
            variant == "outlined" && outlined[color]
          ]}
        >
          {startIcon && <Icon style={styles.startIcon} source={startIcon} />}
          <Text
            style={[
              styles.text,
              TextSize(size),
              variant == "outlined" && TextColor(color),
              variant == "text" && TextColor(color),
              variant == "contained" && {color: "rgba(255,255,255, 0.8)"}
            ]}
          >
            {text}
          </Text>
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
    fontWeight: "bold"
  },
  icon: {
    position: "relative",
    width: 16,
    height: 16,
    color: Colors.white
  },
  startIcon: {
    marginRight: 6
  },
  endIcon: {
    marginLeft: 6
  }
})

const contained = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.light
  }
})

const outlined = StyleSheet.create({
  primary: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors.primary
  },
  secondary: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors.light
  }
})

AppButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  disabled: PropTypes.bool
}

AppButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "md",
  disabled: false
}

export default AppButton

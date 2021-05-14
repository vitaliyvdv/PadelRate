import React from "react"
import PropTypes from "prop-types"
import {TouchableWithoutFeedback, View} from "react-native"

import LogoSVG from "./../../../img/logo/logo.svg"

const Logo = ({style, isTouchable, ...rest}) => {
  const logo = <LogoSVG style={styles.icon} width='100%' />
  const title = "PadelRate"
  const customStyle = [style]

  return (
    <>
      {isTouchable ? (
        <TouchableWithoutFeedback
          style={customStyle}
          accessibilityLabel={title}
          accessibilityRole='imagebutton'
          {...rest}
        >
          {logo}
        </TouchableWithoutFeedback>
      ) : (
        <View style={customStyle} accessibilityLabel={title} accessibilityRole='image' {...rest}>
          {logo}
        </View>
      )}
    </>
  )
}

Logo.propTypes = {
  isTouchable: PropTypes.bool
}

Logo.defaultProps = {
  isTouchable: false
}

export default Logo

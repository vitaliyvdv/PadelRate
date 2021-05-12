import React from "react"
import {StyleSheet, Text, useColorScheme, View} from "react-native"

import AppLayout from "./../layout"
import AppButton from "./../components/common/button"

import {Colors} from "./../libraries"

import Logo from "./../img/icons/link.svg"

const StartPage = () => {
  return (
    <AppLayout>
      <AppButton
        text='Lorem ipsum'
        onPress={() => {
          alert("test message")
        }}
      />

      <Logo style={styles.logo} />

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem lacus, dapibus vitae laoreet eu, porttitor non
        sem. Phasellus sit amet augue aliquam, lobortis ex in, laoreet diam. Donec eget metus dui. Sed non sem dui.
        Suspendisse diam lorem, sollicitudin vel elementum nec, lobortis ut sapien. Donec a lectus enim. Donec tortor
        nisi, tempor maximus iaculis ac, efficitur sit amet dui. Mauris sed commodo mauris. Aenean commodo ex eu nulla
        pellentesque, at maximus nisi finibus. Maecenas vestibulum leo magna, quis eleifend est hendrerit sed. Quisque
        varius sapien eu est laoreet faucibus.
      </Text>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 16
  },
  logo: {
    color: "red",
    width: 50,
    height: 50
  }
})

export default StartPage

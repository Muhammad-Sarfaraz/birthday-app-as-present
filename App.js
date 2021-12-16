import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

export default class App extends React.Component {
  state = {
    result: 0,
    button_text: 'Click Here'
  }

  flipCard (value) {
    if (value == 1) {
      this.setState({
        button_text: 'Hoise Ar chap dea lagbe na.',
        result: 0
      })
    } else {
      this.setState({
        button_text: 'Happy Birthday Siam',
        result: 1
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.result == 0 ? (
          <Image
            source={require('./assets/first_image.gif')}
            style={{
              width: 350,
              height: 350
            }}
          />
        ) : (
          <Image
            source={require('./assets/siam.gif')}
            style={{
              width: 350,
              height: 350
            }}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            this.flipCard(this.state.result)
          }}
          style={styles.button}
        >
          <Text>{this.state.button_text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    margin: 10,
    borderRadius: 4
  }
})

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native'

import styles from './styles'
import Box from './components/Box'

const image = {
  uri: 'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586?b=1&k=6&m=1253837586&s=170667a&w=0&h=6K4nC5sNKH7Wv8-KB4bbgl_Zg5x44fyWi6zgmufXWno=',
}

export default function App() {
  const students = [
    { name: 'Emily', age: 20, city: 'Boca Raton' },
    { name: 'Christian', age: 15, city: 'West Palm' },
    { name: 'Luiz', age: 27, city: 'Broward' },
    { name: 'Dan', age: 40, city: 'Palm Beach Gardens' },
    { name: 'Chris', age: 29, city: 'Texas' },
    { name: 'Mat', age: 19, city: 'Del Ray' },
    { name: 'Val', age: 30, city: 'Boca' },
    { name: 'Noah', age: 12, city: 'Boca' },
    { name: 'Mia', age: 17, city: 'Boca' },
    { name: 'Zack', age: 59, city: 'Jupiter' },
  ]

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.customText}>Hi Class! 🐓 🌎</Text>
        <StatusBar style='auto' />
        <ImageBackground source={image} resizeMode='cover' style={styles.container}>
          {/* <View style={styles.container}> */}
            {students.map((student) => {
              return <Box entireStudent={student} /> // passing entire object to box
            })}
          {/* </View> */}
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  )
}

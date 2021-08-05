import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Box({item}) {
  const {name, photoUrl, rating, address} = item 
  console.log('this is props =>>>', address)

  return (
    <View style={styles.box}>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{rating}</Text>
      
    </View>
  )
}

export default Box

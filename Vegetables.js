import React from 'react'
import { Text, View, FlatList } from 'react-native'

const Vegetables = ({ items }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  )

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(items) => items.id}
    />
  )
}

export default Vegetables

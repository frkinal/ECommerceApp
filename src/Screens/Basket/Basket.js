import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { getBasketProcess, selectAddressProcess } from '../../Redux/services'

import Button from '../../Components/Button'
import BasketCard from '../../Components/BasketCard'
import styles from './Basket.styles'

const Basket = ({ navigation }) => {
  const data = useSelector(state => state.getBasket.data)
  const total = useSelector(state => state.getBasket.total)
  const loading = useSelector(state => state.getBasket.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketProcess())
  }, [])

  const renderBasketCart = ({ item }) => {
    return <BasketCard item={item} />
  }

  const completeOrder = () => {
    navigation.navigate('CompelteOrder')
  }

  return (
    <SafeAreaView style={styles.container}  >
      <FlatList
        data={data}
        renderItem={renderBasketCart}
        keyExtractor={(item, index) => (index)}
      />
      <View style={styles.bottom}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 13 }}>Toplam</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
        <Button
          text='Alışverişi Tamamla'
          theme='sixth'
          onPress={completeOrder}
        />
      </View>
    </SafeAreaView>
  )
}

export default Basket


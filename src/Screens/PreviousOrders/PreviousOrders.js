import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { getPreviousOrders } from '../../Redux/services'

import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

import styles from './PreviousOrders.styles'

const PreviousOrders = () => {
    const status = useSelector(state => state.previousOrders?.status)
    const data = useSelector(state => state.previousOrders?.previousOrders)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPreviousOrders())
    }, [])

    if (status === 'error') {
        return (
            <Error />
        );
    }


    return (
        <React.Fragment>
            {
                status === 'loading' ? (
                    <Loading />
                )
                    : (
                        <View>
                            <Text>PreviousOrders</Text>
                        </View>
                    )
            }
        </React.Fragment>
    )
}

export default PreviousOrders
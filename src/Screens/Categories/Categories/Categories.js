import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import {
    firstCategories,
} from '../../../Redux/services'

import CategoriesCard from '../../../Components/CategoriesCard'
import styles from './Categories.styles'

const Categories = ({ navigation }) => {
    const firstCategoryData = useSelector(state => state.firstCategory.firstCategoryData);
    const image = useSelector(state => state.firstCategory.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(firstCategories());
    }, []);

    const renderCategoriesCard = ({ item }) => {
        return <CategoriesCard
            item={item}
            url={image}
            onPress={() => {
                navigation.navigate('SecondCategories', { id: item.id })
            }}
        />
    }


    const numColumns = 2
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.CategoriesCards}>
                <FlatList
                    numColumns={numColumns}
                    data={firstCategoryData}
                    renderItem={renderCategoriesCard}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView>
    )
}

export default Categories
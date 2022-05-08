import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import {
    thirdCategories
} from '../../../Redux/services'

import CategoriesCard from '../../../Components/CategoriesCard'
import styles from './ThirdCategories.styles'

const ThirdCategories = ({ navigation, route }) => {
    const { id } = route.params;
    const thirdCategoryData = useSelector(state => state.thirdCategory.thirdCategoryData);
    const image = useSelector(state => state.thirdCategory.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thirdCategories({ id: id }));
    }, []);
    const renderCategoriesCard = ({ item }) => {
        var categoryId;
        if (item.isNext === undefined) {
            categoryId = 3
        }
        return <CategoriesCard
            item={item}
            url={image}
            onPress={() => {
                navigation.navigate('Products', { categoryId: categoryId, id: item.id })
            }}
        />
    }


    const numColumns = 2
    return (
        <View style={styles.CategoriesCards}>
            <FlatList
                numColumns={numColumns}
                data={thirdCategoryData}
                renderItem={renderCategoriesCard}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default ThirdCategories
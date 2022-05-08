import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import {
    secondCategories
} from '../../../Redux/services'

import CategoriesCard from '../../../Components/CategoriesCard'
import styles from './SecondCategories.styles'

const SecondCategories = ({ navigation, route }) => {
    const { id } = route.params;
    const secCategoryData = useSelector(state => state.secCategory.secCategoryData);
    const image = useSelector(state => state.secCategory.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(secondCategories({ id: id }));
    }, []);

    const renderCategoriesCard = ({ item }) => {
        var categoryId;
        if (item.isNext != null) {
            categoryId = 2
        }
        return <CategoriesCard
            item={item}
            url={image}
            onPress={() => {
                if (item.isNext) {
                    navigation.navigate('ThirdCategories', { id: item.id })
                } else {
                    navigation.navigate('Products', { categoryId: categoryId, id: item.id })
                }
            }}
        />
    }


    const numColumns = 2
    return (
        <View style={styles.CategoriesCards}>
            <FlatList
                numColumns={numColumns}
                data={secCategoryData}
                renderItem={renderCategoriesCard}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default SecondCategories
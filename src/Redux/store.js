import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import sliderCategorySlice from './sliderCategorySlice';
import brandsCategorySlice from './brandsCategorySlice';
import mainProductsSlice from './mainProductsSlice';
import firstCategorySlice from './firstCategorySlice';
import secondCategorySlice from './secondCategorySlice';
import thirdCategorySlice from './thirdCategorySlice';
import productsSlice from './productsSlice';
import toggleFavoriteSlice from './toggleFavoriteSlice';
import getBasketSlice from './getBasketSlice';
import removeFromCartSlice from './removeFromCartSlice';
import updateFromCartSlice from './updateFromCartSlice';
import addBasketSlice from './addBasketSlice';
import searchProductsSlice from './searchProductsSlice';
import productDetailsSlice from './productDetailsSlice';
import brandProductsSlice from './brandProductsSlice';
import sliderProductsSlice from './sliderProductsSlice';
import loginSlice from './loginSlice';
import registerSlice from './registerSlice';
import memberInfoSlice from './memberInfoSlice';
import getPreviousOrdersSlice from './getPreviousOrdersSlice';
import getCitySlice from './getCitySlice';
import getTownSlice from './getTownSlice';
import getSecondTownSlice from './getSecondTownSlice';
import getFavoritesSlice from './getFavoritesSlice';
import getAddressSlice from './getAddressSlice';
import selectAddressSlice from './selectAddressSlice';
import saveAddressSlice from './saveAddressSlice';
import removeAddressSlice from './removeAddressSlice';
import changePasswordSlice from './changePasswordSlice';
import lostPasswordSlice from './lostPasswordSlice';

export const store = configureStore({
    reducer: {
        slider: sliderCategorySlice,
        brand: brandsCategorySlice,
        brandProduct: brandProductsSlice,
        sliderProduct: sliderProductsSlice,
        mainProducts: mainProductsSlice,
        productDetail: productDetailsSlice,
        firstCategory: firstCategorySlice,
        secCategory: secondCategorySlice,
        thirdCategory: thirdCategorySlice,
        products: productsSlice,
        favorite: toggleFavoriteSlice,
        getBasket: getBasketSlice,
        removeCart: removeFromCartSlice,
        updateCart: updateFromCartSlice,
        addBasket: addBasketSlice,
        search: searchProductsSlice,
        login: loginSlice,
        register: registerSlice,
        memberInfo: memberInfoSlice,
        previousOrders: getPreviousOrdersSlice,
        getCity: getCitySlice,
        getTown: getTownSlice,
        getSecondTown: getSecondTownSlice,
        getFavory: getFavoritesSlice,
        getAddress: getAddressSlice,
        selectAddress: selectAddressSlice,
        saveAddress: saveAddressSlice,
        removeAddress: removeAddressSlice,
        password: changePasswordSlice,
        lostPassword: lostPasswordSlice,
    },
    middleware: [...getDefaultMiddleware(), logger],
});
import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const API_BASE_URL = 'null'
const API_KEY ='null'
axios.defaults.baseURL = API_BASE_URL
axios.defaults.headers['X-API-KEY'] = API_KEY;

export const sliderCategory = createAsyncThunk(
    'slider/sliderCategory',
    async () => {
        const res = await axios.get('sliders')
        console.log(res.data)
        return res.data
    },
);

export const brandsCategory = createAsyncThunk(
    'brand/brandsCategory',
    async () => {
        const res = await axios.get('brands')
        return res.data
    },
);

export const getMainProducts = createAsyncThunk(
    'mainProducts/getMainProducts',
    async () => {
        const res = await axios.get('mainProducts')
        return res.data
    },
);

export const productDetails = createAsyncThunk(
    'productDetail/productDetails',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'product_id': data.id,
        });
        const res = await axios.post('productDetail', dataId)
        return res.data
    },
);

export const brandProducts = createAsyncThunk(
    'brandProduct/brandProducts',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'brand_id': data.id,
            'per_page': data.per_page,
            'page': data.page,
            'sorting': data.sorting
        });
        const res = await axios.post('brandProductList', dataId)
        return res.data
    },
);

export const sliderProducts = createAsyncThunk(
    'sliderProduct/sliderProducts',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'url_string': data.url_string,
            'per_page': data.per_page,
            'page': data.page,
            'sorting': data.sorting
        });
        console.log(dataId)
        const res = await axios.post('getUrl', dataId)
        return res.data
    },
);


export const firstCategories = createAsyncThunk(
    'firstCategory/firstCategories',
    async () => {
        const res = await axios.get('firstCategories')
        return res.data
    },
);

export const secondCategories = createAsyncThunk(
    'secCategory/secondCategories',
    async (data) => {
        var qs = require('qs');
        var id = qs.stringify({
            'first_category_id': data.id
        });
        const res = await axios.post('secondCategories', id)
        return res.data
    },
);

export const thirdCategories = createAsyncThunk(
    'thirdCategory/thirdCategories',
    async (data) => {
        var qs = require('qs');
        var id = qs.stringify({
            'second_category_id': data.id
        });
        const res = await axios.post('thirdCategories', id)
        return res.data
    },
);

export const allProducts = createAsyncThunk(
    'products/allProducts',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'category': data.categoryId,
            'category_id': data.id,
            'per_page': data.per_page,
            'page': data.page,
            'sorting': data.sorting
        });
        const res = await axios.post('productList', dataId)
        return res.data
    },
);

export const toggleFavorite = createAsyncThunk(
    'favorite/toggleFavorite',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'product_id': data.product_id,
        });
        const res = await axios.post('toggleFavoritte', dataId)
        return res.data
    },
);

export const addBasketProcess = createAsyncThunk(
    'addBasket/addBasketProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'product_id': data.product_id,
            'qty': data.qty,
        });
        console.log(dataId)
        const res = await axios.post('addBasket', dataId)
        return res.data
    },
);

export const getBasketProcess = createAsyncThunk(
    'getBasket/getBasketProcess',
    async () => {
        const res = await axios.get('getBasket')
        return res.data
    },
);

export const removeCartProcess = createAsyncThunk(
    'removeCart/removeCartProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'rowID': data.rowID,
        });
        const res = await axios.post('removeFromCart', dataId)
        return res.data
    },
);

export const updateCartProcess = createAsyncThunk(
    'updateCart/updateCartProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'rowID': data.rowID,
            'qty': data.qty,
        });
        const res = await axios.post('updateCart', dataId)
        return res.data
    },
);

export const searchProductProcess = createAsyncThunk(
    'search/getSearchProduct',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'keywords': data.keywords,
            'per_page': data.per_page,
            'page': data.page,
            'sorting':data.sorting
        });
        const res = await axios.post('searchProduct', dataId)
        return res.data
    },
);

export const loginProcess = createAsyncThunk(
    'login/loginProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'email': data.mail,
            'password': data.password
        });
        const res = await axios.post('login', dataId)
        res.data.data !== undefined
            ? AsyncStorage.setItem('@USERDATA', JSON.stringify(data))
            : null;
        return res.data
    },
);

export const registerProcess = createAsyncThunk(
    'register/registerProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'email': data.email,
            'password': data.password,
            'telephone': data.telephone,
            'name': data.name
        });
        const res = await axios.post('register', dataId)
        return res.data
    },
);

export const getMemberInfo = createAsyncThunk(
    'memberInfo/getMemberInfo',
    async () => {
        const res = await axios.get('memberInfo')
        return res.data
    },
);

export const getPreviousOrders = createAsyncThunk(
    'previousOrders/getPreviousOrders',
    async () => {
        const res = await axios.get('orders')
        return res.data
    },
);
export const getFavorites = createAsyncThunk(
    'getFavory/getFavorites',
    async () => {
        const res = await axios.get('favoritte')
        return res.data
    },
);
export const getAddressProcess = createAsyncThunk(
    'getAddress/getAddressProcess',
    async () => {
        const res = await axios.get('address')
        return res.data
    },
);
export const saveAddressProcess = createAsyncThunk(
    'saveAddress/saveAddressProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'name': data.name,
            'billing_name': data.billing_name,
            'surname': data.surname,
            'billing_surname': data.billing_surname,
            'email': data.email,
            'billing_email': data.billing_email,
            'telephone': data.telephone,
            'billing_telephone': data.billing_telephone,
            'city': data.city,
            'billing_city': data.billing_city,
            'town': data.town,
            'billing_town': data.billing_town,
            'clear_address': data.clear_address,
            'billing_clear_address': data.billing_clear_address,
        });
        const res = await axios.post('save_address', dataId)
        return res.data
    },
);

export const updateAddressProcess = createAsyncThunk(
    'updateAddress/updateAddressProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'address_id': data.address_id,
            'name': data.name,
            'billing_name': data.billing_name,
            'surname': data.surname,
            'billing_surname': data.billing_surname,
            'email': data.email,
            'billing_email': data.billing_email,
            'telephone': data.telephone,
            'billing_telephone': data.billing_telephone,
            'city': data.city,
            'billing_city': data.billing_city,
            'town': data.town,
            'billing_town': data.billing_town,
            'clear_address': data.clear_address,
            'billing_clear_address': data.billing_clear_address,
        });
        console.log(dataId)
        const res = await axios.post('updateAddress', dataId)
        return res.data
    },
);

export const removeAddressProcess = createAsyncThunk(
    'removeAddress/removeAddressProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'address_id': data.address_id,
        });
        const res = await axios.post('removeAddress', dataId)
        return res.data
    },
);

export const selectAddressProcess = createAsyncThunk(
    'selectAddress/selectAddressProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'address_id': data.address_id
        });
        const res = await axios.post('saveMemberDelivery', dataId)
        return res.data
    },
);

export const addressesDetail = createAsyncThunk(
    'addressDetail/addressesDetail',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'address_id': data.address_id,
        });
        const res = await axios.post('address', dataId)
        return res.data
    },
);

export const getCityProcess = createAsyncThunk(
    'getCity/getCityProcess',
    async () => {
        const res = await axios.get('city')
        return res.data
    },
);
export const getTownProcess = createAsyncThunk(
    'getTown/getTownProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'city_id': data.city_id,
        });
        const res = await axios.post('town', dataId)
        return res.data
    },
);

export const getSecondTownProcess = createAsyncThunk(
    'getSecondTown/getSecondTownProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'city_id': data.city_id,
        });
        const res = await axios.post('town', dataId)
        return res.data
    },
);

export const createOrderProcess = createAsyncThunk(
    'createOrder/createOrderProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'payment_type': data.payment_type,
            'cargo_id': data.cargo_id,
            'order_note': data.order_note,
        });
        const res = await axios.post('createOrder', dataId)
        return res.data
    },
);

export const getCargoList = createAsyncThunk(
    'getCargo/getCargoList',
    async () => {
        const res = await axios.get('cargo')
        return res.data
    },
);

export const couponControlProcess = createAsyncThunk(
    'couponControl/couponControlProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'discount_code': data.discount_code,
        });
        const res = await axios.post('couponControl', dataId)
        return res.data
    },
);

export const getBankList = createAsyncThunk(
    'getBank/getBankList',
    async () => {
        const res = await axios.get('bankList')
        return res.data
    },
);


export const logoutProcess = createAsyncThunk(
    'logoutProc/logoutProcess',
    async () => {
        AsyncStorage.removeItem('@USERDATA');
        const res = await axios.get('logout')
        return res.data
    },
);

export const changePasswordProcess = createAsyncThunk(
    'password/changePasswordProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'old_password': data.old_password,
            'new_password': data.new_password,
        });
        console.log(dataId)
        const res = await axios.post('changePassword', dataId)
        console.log(res.data)
        return res.data
    },
);

export const passwordRecoveryProcess = createAsyncThunk(
    'passwordRecovery/passwordRecoveryProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'email': data.email,
            'token': data.token,
        });
        const res = await axios.post('passwordRecovery', dataId)
        return res.data
    },
);

export const lostPasswordProcess = createAsyncThunk(
    'lostPassword/lostPasswordProcess',
    async (data) => {
        var qs = require('qs');
        var dataId = qs.stringify({
            'email': data.email,
        });
        const res = await axios.post('lostPassword', dataId)
        return res.data
    },
);
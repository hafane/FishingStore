import { $authHost, $host } from "."

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const deleteOneType = async (id) => {
    const { data } = await $authHost.delete('api/type', { data: id })
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const deleteOneBrand = async (id) => {
    const { data } = await $authHost.delete('api/brand', { data: id })
    return data
}

export const fetchItems = async (typeId, brandId, page, limit) => {
    const { data } = await $host.get('api/item', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const createItem = async (item) => {
    const { data } = await $authHost.post('api/item', item)
    return data
}

export const fetchOneItem = async (id) => {
    const { data } = await $host.get('api/item/' + id)
    return data
}

export const deleteOneItem = async (id) => {
    const { data } = await $authHost.delete('api/item', { data: id })
    return data
}

export const fetchBasket = async (basketId) => {
    const { data } = await $authHost.get('api/basketItem', { params: { basketId } });
    return data;
}

export const deleteBasketItem = async (basketId, itemId) => {
    const { data } = await $authHost.delete('api/basketItem', { data: basketId, itemId });
    return data;
}

export const createBasketItem = async (basketId, itemId) => {
    const { data } = await $authHost.post('api/basketItem',  basketId, itemId);
    return data;
}

export const fetchRating = async (itemId) => {
    const { data } = await $host.get('api/rating', {params: { itemId } });
    return data;
}

export const createRating = async (rate, title, description, itemId, userId) => {
    const { data } = await $authHost.post('api/rating', rate, title, description, itemId, userId);
    return data;
}

export const deleteRating = async (itemId, userId) => {
    const { data } = await $authHost.delete('api/rating', { data: itemId, userId });
    return data;
}
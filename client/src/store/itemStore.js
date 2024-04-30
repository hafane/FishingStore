import { makeAutoObservable } from 'mobx'

export default class itemStore {
    constructor() {
        this._types = []
        this._brands = []
        this._items = []
        this._basket = []
        this._basketItem = []
        this._itemRating = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(total) {
        this._totalCount = total
    }

    setLimit(limit) {
        this._limit = limit
    }

    setItemRating(itemRating) {
        this._itemRating = itemRating
    }

    setBasketItem(basketItem) {
        this._basketItem = basketItem
    }

    setBasket(basket) {
        this._basket = basket
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItem(items) {
        this._items = items
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    get page() {
        return this._page
    }

    get total() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get itemRating() {
        return this._itemRating
    }

    get basketItem() {
        return this._basketItem
    }

    get basket() {
        return this._basket
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
const {BasketItem} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketItemController {
    async create(req, res) {
        const {basketId, itemId} = req.body
        const basketOneItem = await BasketItem.create({basketId ,itemId})
        return res.json(basketOneItem)
    }
    
    async getAll(req, res) {
        let {basketId} = req.query
        let basketItems
        if(basketId) {
            basketItems = await BasketItem.findAll({where: {basketId}})
        }
        return res.json(basketItems)
    } 

    async delete(req, res) {
        const {basketId, itemId} = req.body
        const deleteBasketItem = await BasketItem.destroy({where: {basketId, itemId}})
        if(!deleteBasketItem) {
            return res.status(404).json({message: 'Предмет не найден.'})
        }
        return res.json({message: 'Успешно удалено.'})
    } 

    async deleteItemId(req, res) {
        const {itemId} = req.body
        const deleteBasketItemId = await BasketItem.destroy({where: {itemId}})
        if(!deleteBasketItemId) {
            return res.status(404).json({message: 'Предмет не найден.'})
        }
        return res.json({message: 'Успешно удалено.'})
    } 
}

module.exports = new BasketItemController()
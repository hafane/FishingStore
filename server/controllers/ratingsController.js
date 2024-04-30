const {Rating} = require('../models/models')
const ApiError = require('../error/ApiError')

class RatingsController {
    async create(req, res) {
        const {rate, itemId, userId, title, description} = req.body
        const rating = await Rating.create({rate, itemId, userId, title, description})
        return res.json(rating)
    }
    
    async getAll(req, res) {
        let {itemId} = req.query
        let itemRate
        if(itemId) {
            itemRate = await Rating.findAll({where: {itemId}})
        }
        return res.json(itemRate)
    }

    async delete(req, res) {
        const {itemId, userId} = req.body
        const deleteRating = await Rating.destroy({where: {itemId, userId}})
        if(!deleteRating) {
            return res.status(404).json({message: 'Рейт не найден.'})
        }
        return res.json({message: 'Успешно удалено.'})
    }
}

module.exports = new RatingsController()
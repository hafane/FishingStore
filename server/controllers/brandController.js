const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const {id} = req.body
        const deleteBrand = await Brand.destroy({where: {id}})
        if(!deleteBrand) {
            return res.status(404).json({message: 'Бренд не найден.'})
        }
        return res.json({message: 'Успешно удалено.'})
    }
}

module.exports = new BrandController()
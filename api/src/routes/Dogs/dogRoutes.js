const dogsController = require('../../controllers/dogControllers');
const router = require("express").Router();

router.get('/', async(req, res) =>{
    try {
        const response = await dogsController.getAllDogs()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})
router.get('/created', async(req, res) =>{
    try {
        const response = await dogsController.dbDogs()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
})
router.get('/:id', async(req, res) =>{
    const {id} = req.params
    try {
        const response = await dogsController.getDetail(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})
router.get('/s/name', async(req, res) =>{
    const {name} = req.query    
    try {
        const response = await dogsController.searchDogsByName(name)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})
router.post('/', async(req, res) =>{
    const perro = req.body
    try {
        const dog = await dogsController.addDog(perro)
        return res.status(201).json(dog)
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;
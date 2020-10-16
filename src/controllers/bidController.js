const { addBids, getAllBids, getAllBidsBySupplier } = require('../services/bidService')

const addBidsController = async (req, res) => {
    const amount = req.body.amount
    const description = req.body.description
    const requisitionId = req.body.requisitionId
    const supplierId = req.body.supplierId

    const result = await addBids(amount, description, requisitionId, supplierId)

    res.status(200).json(result)
}

const getAllBidsController = async (req, res) => {
    const result = await getAllBids();

    res.status(200).json(result)
}

const getAllBidsBySupplierController = async (req, res) => {
    const supplierId = req.body.supplierId
    const result = await getAllBidsBySupplier(supplierId)

    res.status(200).json(result)
}

module.exports = {
    getAllBidsBySupplierController,
    getAllBidsController,
    addBidsController
}
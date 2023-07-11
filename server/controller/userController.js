const userModel = require('../model/userModel')

const userController = {
    getAllUser: async (req, res) => {
        try {
            const userAll = await userModel.find()
            console.log('userAll', userAll)
            res.status(200).json(userAll)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const findUserDelete = await userModel.findByIdAndDelete(req.params.id)
            if (!findUserDelete) {
                res.status(404).json('Xóa người dùng thấy bại')
            }
            else {
                res.status(200).json('Xóa người dùng thành công')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = userController
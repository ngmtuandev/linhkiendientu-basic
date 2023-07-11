const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authController = {
    register: async (req, res) => {
        try {
            // Hash Password
            const createSalt = await bcrypt.genSalt(20)
            const hashPassword = await bcrypt.hash(req.body.password, createSalt)
        
            const newUser = await new userModel({
                nameUser: req.body.nameUser,
                password: hashPassword,
                email: req.body.email,
                isAdmin: req.body.isAdmin
            })
            console.log('register',newUser)
            // Save in Database
            const userNewCreate = await newUser.save()
            res.status(200).json(userNewCreate)
        
        } catch (error) {
            res.status(500).json(error)
        }
    },

    login: async (req, res) => {
        try {
            const findUser = await userModel.findOne({nameUser: req.body.nameUser})
            if (!findUser) {
                res.status(404).json('Đăng nhập lỗi')
            }

            const confirmPassword = await bcrypt.compare(
                req.body.password,
                findUser.password
            )

            if (!confirmPassword) {
                res.status(404).json('Đăng nhập lỗi')
            }

            else if (confirmPassword && findUser) {

                const createToken = jwt.sign(
                    {
                        id: findUser.id,
                        isAdmin: findUser.isAdmin
                    },
                    process.env.ACCESS_TOKEN,
                    {expiresIn: '600s'}
                    )

                res.status(200).json({findUser, createToken})
                // console.log({findUser, createToken})
            }

        } catch (error) {
            res.status(500).json(error)
            console.log('LỖI')
        }
    }

}

module.exports = authController
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const verifyAccessToken = asyncHandler( async (req, res, next) => {
    const tokenNoBearer = req.headers.token.split(' ')[1]
    jwt.verify(tokenNoBearer, process.env.ACCESS_TOKEN, (err, decode) => {
        if (err) {
            return res.status(401).json({
                status: false,
                mess: 'Lỗi xác nhận token'
            })
        }
        else {
            console.log('decode : ', decode.isAdmin) // decode(dữ liệu gửi đi từ create token) : id:..., admin:... truyển từ userLogin
            // gán dữ liệu vào dataUserLogin
            req.dataUserLogin = decode.isAdmin // gán dataUserLogin = id:..., admin:...
            next()
        }
    })
} )


// Phân quyền admin
const verifyAdmin = asyncHandler((req, res, next) => {
    const admin = req.dataUserLogin
    console.log('dataUserLogin', req.dataUserLogin)
    console.log('isadmin', admin)
    if (!admin) {
        res.status(403).json({
            success: false,
            mess: 'Xác nhận token admin lỗi'
        })
    }
    else {
        next()
    }
})

module.exports = {verifyAccessToken, verifyAdmin}
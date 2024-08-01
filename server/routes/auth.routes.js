const router = require('express').Router();
const {User} = require('../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');
const jwtConfig = require('../config/jwtConfig');

router.post('/registration', async (req, res) => {
    try {
        const {login, email, password} = req.body;

        if (login.trim() === '' ||
            email.trim() === ''|| 
            password.trim() === '') {
            return res.status(400).json({message: 'Empty'})
        }

        const userInDb = await User.findOne({where: {email}});

        if (userInDb) {
            return res.status(400).json({message: 'User is alrady exist'})
        } else {
            const user = (await User.create({login, email, password: await bcrypt.hash(password, 10)})).get();
            
            const {accessToken, refreshToken} = generateTokens({user});

            res
                .status(201)
                .cookie(jwtConfig.refresh.type, refreshToken, {httpOnly: true, maxAge: jwtConfig.refresh.expiresIn})
                .json({accessToken, user})
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/authorization', async (req, res) => {
    try {
        const { email, password} = req.body;

        if (email.trim() === ''|| 
            password.trim() === '') {
            return res.status(400).json({message: 'Empty'})
        }

        const user = (await User.findOne({where: {email}})).get();
        const isMatch = await bcrypt.compare(password, user.password)

        if (user && isMatch) {
            const {accessToken, refreshToken} = generateTokens({user});

            res
                .status(200)
                .cookie(jwtConfig.refresh.type, refreshToken, {httpOnly: true, maxAge: jwtConfig.refresh.expiresIn})
                .json({accessToken, user})
        } else {
            return res.status(400).json({message: 'In correct!'})
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.delete('/logout', (req, res) => {
    // HTTP заголовок Set-Cookie max-age=0
    res
        .clearCookie(jwtConfig.refresh.type)
        .json({accessToken: ''})
});

module.exports = router;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    register: async function (req , res){
        

        // ------- Generate Foreing Key -------
        const newForeingkey = req.body.name + req.body.password;
        // ------- Generate Foreing Key -------

        // ------- Cryptografing Foreing Key -------
        const salt = bcrypt.genSaltSync(14)
        const cryptForeingKey = bcrypt.hashSync(newForeingkey , salt)
        // ------- Cryptografing Foreing Key -------

        // ------- Cryptografing Password -------
        const cryptPassword = bcrypt.hashSync( req.body.password , salt)
        // ------- Cryptografing Password -------

        // ------- Create New User -------
        const selectedUser = await User.findOne({email: req.body.email});

        if(selectedUser){
            return res.status(400).send('Email already exist');
            // Retornar Popup de Email ja existente
        }

        const user = new User({
            name: req.body.name,
            bio: req.body.bio,
            email: req.body.email,
            foreing_key: cryptForeingKey,
            password: cryptPassword,
            contacts: req.body.contacts
        })

        try{
            const savedUser = await user.save()
            res.send(savedUser);

             // Retornar a mensagem de usuario logado e solicitar login

        } catch (err) {
            res.status(400).send(err);
        }
        // ------- Create New User -------

    },
    login: async function (req , res){
        const selectedUser = await User.findOne({email: req.body.email});

        if(!selectedUser){
            return res.status(400).send('Email or password incorrect');
            // Retornar popup de Email ou senha incorreta
        }

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password , selectedUser.password);
        if(!passwordAndUserMatch){
            return res.status(400).send('Email or password incorrect');
            // Retornar popup de Email ou senha incorreta
        }

        const token = jwt.sign({_id: selectedUser._id}, process.env.TOKEN_SECRET , {expiresIn: 1800});

        res.header('authorization-token', token);
        res.send('User Logged'); // Retornar a interface logada

    }
}

module.exports = userController;
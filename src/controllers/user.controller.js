import * as userService from '../services/user.service.js'

const create = async(req, res) => {
    //desestruturação do objeto, cada item se transforma em uma variável
    const {name, username, email, avatar, background} = req.body;
    
    if (!name || !username || !email || !avatar || !background) {
        res.status(400).json({message: "Submit all fields required"});
    }

    const user = await userService.create(req.body);

    if(!user) {
        return res.status(400).send({message: "Error creating user"});
    } 

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }        
    });
};

export {create}
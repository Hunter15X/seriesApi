const {check, body} = require("express-validator");
const usuarioDao = new (require("../models/Usuarios"))();

class UserValidator{

    static validations(){

        return [
            check('nome').isLength({min: 3, max: 50}).withMessage("Deve ter entre 3 a 90 letras"),
            check('email').isEmail().withMessage("Email invalido"),
            check('senha').isLength({min: 8, max: 50}).withMessage("Deve ter entre 8 e 15 letras"),

            body('email').custom(async email => {
                let usuario = await usuarioDao.buscaPorEmail(email)
                usuario = usuario[0]

                if(usuario)
                    return Promise.reject("Email já cadastrado")
            })
        ]

    }

}

module.exports = UserValidator;
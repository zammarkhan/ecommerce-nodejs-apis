import Joi from 'joi';
const registerController = {
  register(req, res, next) {
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
      repeat_password: Joi.ref('password'),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    // try
    // {
    //   const exist = await User.exists({email:req.body});

    //   if(exist)
    //   {
    //     return next()
    //   }

    // }
    // catch(error){

    // }
  },
};

export default registerController;

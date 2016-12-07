import Joi from 'joi';
import path from 'path';

const prefix = conf.get('prefix');

const UserHandlerLogin = requireF('core/components/user/controllers/UserHandlerLogin');

// define user component endpoint
const handlerLogin = new UserHandlerLogin();
export default [{
  // define /user/login route
  method: 'POST',
  path: path.join(prefix, 'user', 'login'),
  handler: handlerLogin.handler,
  config: {
    tags: ['api'],
    validate: {
      payload: {
        username: Joi.string(),
        email: Joi.string(),
        password: Joi.string().required(),
      },
    },
  },
}];
import Boom from 'boom';

const HandlerErrorFormatter = requireF('core/services/formatters/HandlerErrorFormatter');

export default class BaseHandler {
  constructor(model, association) {
    this.model = model;
    this.association = association;
  }

  handler = async (request, reply) => {
    try {
      return await this.query(request, reply);
    } catch (e) {
      const handlerErrorFormatter = new HandlerErrorFormatter(request);
      return reply(Boom.badRequest(handlerErrorFormatter.format(e)));
    }
  }
}

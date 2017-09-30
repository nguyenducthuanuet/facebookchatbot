import on_get_started from '../controllers/on_get_started';
import routes_helper from '../helpers/routes';

let routes = {
    GET_STARTED: on_get_started
};

routes.has = name => routes_helper.has_route(routes, name);
routes.get = name => routes_helper.get_route(routes, name);

export default routes;
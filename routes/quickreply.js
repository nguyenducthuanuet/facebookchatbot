import routes_helper from '../helpers/routes';

let routes = {
};

routes.has = name => routes_helper.has_route(routes, name);
routes.get = name => routes_helper.get_route(routes, name);

export default routes;
import routes_helper from '../helpers/routes';

let routes = {
};

routes.has = name => routes_helper.hasRoute(routes, name);
routes.get = name => routes_helper.getRoute(routes, name);

export default routes;
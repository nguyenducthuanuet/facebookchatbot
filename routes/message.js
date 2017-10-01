import search_lecturers from '../controllers/search_lecturers';
import routes_helper from '../helpers/routes';

let prev_routes = {
    SEARCH_LECTURERS: search_lecturers,
};

let get = (message, user) => routes_helper.getRoute(prev_routes, user.messages.reverse()[1].body) || function() {};

export default {
    get: get
};
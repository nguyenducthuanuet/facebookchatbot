import onGetStarted from '../controllers/on_get_started';
import onSearchLecturers from '../controllers/on_search_lecturers';
import routes_helper from '../helpers/routes';

let routes = {
    GET_STARTED: onGetStarted,
    SEARCH_LECTURERS: onSearchLecturers,
};

let get = (payload, user=null) => routes_helper.getRoute(routes, payload) || function() {};

export default {
    get: get
};
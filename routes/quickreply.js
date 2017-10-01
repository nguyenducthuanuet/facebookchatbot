import routes_helper from '../helpers/routes';
import onSearchLecturers from '../controllers/on_search_lecturers';
import detailLecture from '../controllers/detail_lecture';

let routes = {
    SEARCH_LECTURERS: onSearchLecturers,
    LECTURER_: detailLecture
};

let get = (payload, user) => routes_helper.getRoute(routes, payload) || function() {};

export default {
    get: get
};
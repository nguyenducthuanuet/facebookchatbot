export default {
    has_route: (routes, name) => {
        return Object.keys(routes).some(route => route === name || name.startsWith(route));
    },

    get_route: (routes, name) => {
        let key = Object.keys(routes).filter(route => route === name || name.startsWith(route));
        return key.length ? routes[key[0]] : () => {};
    }
}
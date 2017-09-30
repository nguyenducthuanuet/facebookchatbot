export default {
    hasRoute: (routes, name) => {
        return Object.keys(routes).some(route => route === name || name.startsWith(route));
    },

    getRoute: (routes, name) => {
        let key = Object.keys(routes).filter(route => route === name || name.startsWith(route));
        return key.length ? routes[key[0]] : () => {};
    }
}
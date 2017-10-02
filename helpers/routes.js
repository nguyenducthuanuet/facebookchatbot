export default  {
    getRoute: (routes, name) => {
        let key = Object.keys(routes).filter(route => route === name || name.startsWith(route));
        return key.length ? routes[key[0]] : null;
    }
}
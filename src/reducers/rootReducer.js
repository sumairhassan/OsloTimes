const initState = {
    posts: [
        {id: '1', title: 'et iusto sed quo', body: 'iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
        {id: '2', title: 'sed quo iure voluptatem', body: ' occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
        {id: '3', title: 'iure voluptatem occaecati', body: ' omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'}
    ]
}

const rootReducer = (state= initState, action) => {
    return state;
}

export default rootReducer
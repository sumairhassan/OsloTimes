const initState = {
    posts: [
        {id: '1', title: '1. et iusto sed quo', body: 'iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
        {id: '2', title: '2. sed quo iure voluptatem', body: ' occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
        {id: '3', title: '3. iure voluptatem occaecati', body: ' omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'}
    ]
}

const rootReducer = (state= initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ... state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer
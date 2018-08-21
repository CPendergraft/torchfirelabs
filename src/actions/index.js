export const REQUEST_ILLUSTRATIONS = 'REQUEST_ILLUSTRATIONS';
export const RECEIVE_ILLUSTRATIONS = 'RECEIVE_ILLUSTRATIONS';
export const SELECT_ILLUSTRATIONS = 'SELECT_ILLUSTRATIONS';
export const INVALIDATE_ILLUSTRATIONS = 'INVALIDATE_ILLUSTRATIONS';

export const selectIllustrations = illustrations => ({
    type: SELECT_ILLUSTRATIONS,
    illustrations
});

export const invalidateIllustrations = illustrations => ({
    type: INVALIDATE_ILLUSTRATIONS,
    illustrations
});

export const requestIllustrations = illustrations => ({
    type: REQUEST_ILLUSTRATIONS,
    illustrations
});

export const receiveIllustrations = (illustrations, json) => (


    {
    type: RECEIVE_ILLUSTRATIONS,
    illustrations,
    posts: json,
    receivedAt: Date.now()
    }
);

const fetchPosts = illustrations => dispatch => {
    dispatch(requestIllustrations(illustrations))
    return fetch(`https://www.offplanet.earth/webrest/wp-json/wp/v2/illustration?per_page=100`)
        .then(response => response.json())
        .then(json => dispatch(receiveIllustrations(illustrations, json)))
};

const shouldFetchPosts = (state, illustrations) => {
    const posts = state.postsByillustrations[illustrations]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
};

export const fetchPostsIfNeeded = illustrations => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), illustrations)) {
        return dispatch(fetchPosts(illustrations))
    }
};
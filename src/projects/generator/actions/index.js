import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
    const { memes } = json.data
    
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

//performs fetch and handles json data
function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

//dispatch helps handle asynchrnous behavior of api
export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}
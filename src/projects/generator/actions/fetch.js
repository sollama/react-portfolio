import { username, password } from './secrets';
import { receiveMemes, newMeme} from './memeActions';

//performs fetch and handles json data
const fetchMemesJson = () => {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

//dispatch helps handle asynchronous behavior of api
const fetchMemes = () => {
    return (dispatch) => {
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}

const postMemeJson = (params) => {
    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('bodyParams', bodyParams);

    return fetch('https://api.imgflip.com/caption_image', {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then(response => response.json());
}

const createMeme = (new_meme_object) => {
    return (dispatch) => {
      return postMemeJson(new_meme_object)
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
  }

export {createMeme, fetchMemes}
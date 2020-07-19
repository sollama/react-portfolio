

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

const receiveMemes = (json) => {
    const { memes } = json.data
    
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const newMeme = (meme) => {
  return {
    type: NEW_MEME,
    meme
  }
}


export {receiveMemes, newMeme}
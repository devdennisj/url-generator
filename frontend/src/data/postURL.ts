import axios from 'axios';

export interface PostURL {
  LongURL: string;
}

export async function postURL(payload: PostURL) {
  const URL = 'http://localhost:8080';

  return await axios.post(URL, {
    LongURL: 'https://www.wikipedia.org/',
  });
}

import config from '../config';

export default function fetchApi(path = '', options = {}) {
  return fetch(config.apiEndpoint + path, options);
}

export const fetchPostsApi = async () => {
  const response = await fetchApi('/shipments');
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

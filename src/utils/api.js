export const getPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getParticularPost = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addPost = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getPostDetails = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getParticularUser = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

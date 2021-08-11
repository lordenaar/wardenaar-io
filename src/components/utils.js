export const getPosts = () => {
  return fetch(getFullUrl("/posts"))
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
    })
}

export const getPost = (id) => {
  return fetch(getFullUrl(`/posts/${id}`))
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getMedia = () => {
  return fetch(getFullUrl(`/media`))
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
    })
}

const getFullUrl = (uri) => {
  return "http://localhost:80/wp-json/wp/v2" + uri
}

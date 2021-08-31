export const getPosts = () => {
  return fetch(getFullUrl("/posts"))
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
    })
}

export const getPost = (slug) => {
  return fetch(getFullUrl(`/posts/slug:${slug}`))
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
  return "https://public-api.wordpress.com/rest/v1.1/sites/196444980" + uri
}

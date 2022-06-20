const getData = path => {
  return fetch(`https://healthy-recipe-api-dlca.herokuapp.com/api/v1/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

export default getData
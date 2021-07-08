import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantApiSource {
  static async listRestaurants () {
    try {
      const response = await getRestaurants()
      return response.restaurants
    } catch (error) {
      alert(error)
    }
  }

  static async detailRestaurant (id) {
    try {
      const response = await getDetailRestaurants(id)
      return response.restaurant
    } catch (error) {
      alert(error)
    }
  }
}

function getRestaurants () {
  return fetch(API_ENDPOINT.HOME)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      const loader = document.querySelector('.loader')
      if (loader) {
        return loader.remove()
      }
    })
}

function getDetailRestaurants (id) {
  return fetch(API_ENDPOINT.DETAIL(id))
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      const loader = document.querySelector('.loader')
      if (loader) {
        return loader.remove()
      }
    })
}

export default RestaurantApiSource

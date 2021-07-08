import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
      <h1 class="main_title" tabindex="0">Favorite Restaurant</h1>
        <section class="content" id="content">
        </section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#content')
    if (restaurants.length === 0) {
      const mainContent = document.querySelector('#mainContent')
      mainContent.innerHTML = '<h1 class="main_title" tabindex="0">Favorite restaurant is empty</h1>'
    }

    const loader = document.querySelector('.loader')
    if (loader) {
      loader.remove()
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Like

import RestaurantApiSource from '../../data/restaurantapi-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div class="hero" tabindex="0">
            <picture class="lazyload">
                <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
                <img 
                    src='./images/hero-image_1-medium.jpg' 
                    alt="Hero Image" class="slides lazyload" width="640" height="360">
            </picture>
            <picture class="lazyload">
                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
                <img 
                    src='./images/hero-image_2-medium.jpg' 
                    alt="Hero Image" class="slides lazyload" width="640" height="360">
            </picture>
            <picture class="lazyload">
                <source media="(max-width: 600px)" srcset="./images/hero-image_3-small.jpg">
                <img 
                    src='./images/hero-image_3-medium.jpg' 
                    alt="Hero Image" class="slides lazyload" width="640" height="360">
            </picture>
            <picture class="lazyload">
                <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
                <img 
                    src='./images/hero-image_4-medium.jpg' 
                    alt="Hero Image" class="slides lazyload" width="640" height="360">
            </picture>
            <p class="hero_text">up&co poster</p>
            <button onclick="plusDivs(-1)" class="hero_left">&#10094;</button>
            <button onclick="plusDivs(1)" class="hero_right">&#10095;</button>
        </div>
        <h1 class="main_title" tabindex="0">Explore Restaurant</h1>
        <section class="content" id="content">
        </section>`
  },

  async afterRender () {
    const restaurants = await RestaurantApiSource.listRestaurants()
    const restaurantContainer = document.querySelector('#content')
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })

    // Display Hero Image
    let slideIndex = 1

    const plusDivs = n => showDivs((slideIndex += n))

    const showDivs = n => {
      const slide = document.querySelectorAll('.slides')
      if (n > slide.length) {
        slideIndex = 1
      } else if (n < 1) {
        slideIndex = slide.length
      }

      slide.forEach(slide => { slide.style.display = 'none' })
      slide[slideIndex - 1].style.display = 'block'
    }

    showDivs(slideIndex)

    window.plusDivs = plusDivs
  }
}

export default Home

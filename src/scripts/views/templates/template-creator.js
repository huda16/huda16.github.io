import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + '/medium/' + restaurant.pictureId}" data-srcset="${CONFIG.BASE_IMAGE_URL + '/medium/' + restaurant.pictureId}">
          <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + '/large/' + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" data-src="${CONFIG.BASE_IMAGE_URL + '/large/' + restaurant.pictureId}">
      </picture>
      <div class="sub_content">
        <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
        <div class="restaurant__info">
          <h3 tabindex="0">City</h3>
          <p tabindex="0">${restaurant.city}</p>
          <h3 tabindex="0">Address</h3>
          <p tabindex="0">${restaurant.address}</p>
          <h3 tabindex="0">Rating: ${restaurant.rating}</h3>
          <h3 tabindex="0">Description</h3>
          <p tabindex="0">${restaurant.description}</p>
          <h3 tabindex="0">Menu Categories</h3>
          <p tabindex="0">${restaurant.categories.map(categorie => ` ${categorie.name}`)}</p>
          <h3 tabindex="0">Food Menu</h3>
          <p tabindex="0">${restaurant.menus.foods.map(food => ` ${food.name}`)}</p>
          <h3 tabindex="0">Drink Menu</h3>
          <p tabindex="0">${restaurant.menus.drinks.map(drink => ` ${drink.name}`)}</p>
          <h3 tabindex="0">Customer Review</h3>
          ${restaurant.customerReviews.map(review => `<div class="review" tabindex="0"> <p class="name">${review.name}</p> <p class="message">${review.review}</p>  <p class="date">${review.date}</p> </div>`).join('')}
        </div>
      </div>`

const createRestaurantItemTemplate = (restaurant) =>
            `<article class="item">
                <a href="${`/#/detail/${restaurant.id}`}">
                    <p class="item_city">${restaurant.city}</p>
                    <picture>
                      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}" data-srcset="${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}">
                        <img class="item_thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" data-src="${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}">
                    </picture>
                    <div class="item_content">
                        <p class="item_rating">Rating: ${restaurant.rating}</p>
                        <h1 class="item_title">${restaurant.name}</h1>
                        <p class="item_description">
                            ${restaurant.description}
                        </p>
                    </div>
                </a>
            </article>`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}

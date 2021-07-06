const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#mainContent');
  I.see('Favorite restaurant is empty', '.main_title');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite restaurant is empty', '.main_title');
 
  I.amOnPage('/');

  I.seeElement('.item a');
  const firstResraurant = locate('.item a').first();
  const firstResraurantTitle = await I.grabTextFrom(firstResraurant);
  I.click(firstResraurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/like');
  I.seeElement('.item');
  const likedRestaurantTitle = await I.grabTextFrom('.item a');
 
  assert.strictEqual(firstResraurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Favorite restaurant is empty', '.main_title');
 
  I.amOnPage('/');

  I.seeElement('.item a');
  I.click(locate('.item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/like');

  I.seeElement('.item a');
  I.click(locate('.item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/like');

  I.seeElement('#mainContent');
  I.see('Favorite restaurant is empty', '.main_title');
});


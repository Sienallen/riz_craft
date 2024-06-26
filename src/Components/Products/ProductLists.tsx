import whiteBag from '../../assets/White Red Bow Bag.jpg';
import floweredBag from '../../assets/Flowered Bag.jpg';
import whiteTulips from '../../assets/WhiteTulips.jpg';
import plaidBag from '../../assets/Red Bag.jpg';
import bracelets from '../../assets/Candies.jpg';
import pinkCarnation from '../../assets/PinkCarnations.jpg';

export const productsList = [
  {
    name: 'White Bag',
    img: whiteBag,
    price: 39.99,
    rating: 4.6,
    description:
      'White bag with red bow. Comes with both a bag and a matching purse.',
    path: 'whiteBag',
  },
  {
    name: 'Flowered Bag',
    img: floweredBag,
    price: 45.99,
    rating: 4.8,
    description: 'Flower patterned bag with 2 handles and a shoulder strap.',
    path: 'floweredBag',
  },
  {
    name: 'Tulip Bouquet',
    img: whiteTulips,
    price: 34.99,
    rating: 4,
    description: 'A bouquet of white tulips and tutsan',
    path: 'tulipBouquet',
  },
  {
    name: 'Plaid Bag',
    img: plaidBag,
    price: 33.99,
    rating: 4.5,
    description: 'A red and white plaid bag with 2 red bows.',
    path: 'plaidBag',
  },
  {
    name: 'Bracelets',
    img: bracelets,
    price: 9.99,
    rating: 5,
    description: 'Bracelets made with a variety of beads and charms.',
    path: 'bracelets',
  },
  {
    name: 'Carnations Bouquet',
    img: pinkCarnation,
    price: 34.99,
    rating: 4,
    description: 'A bouquet of pink carnations.',
    path: 'carnations',
  },
];

export function findProduct(name: string | undefined) {
  productsList.map((item) => {
    if (item.name === name) {
      console.log(item);
      return item;
    }
  });
}

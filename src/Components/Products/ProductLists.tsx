import whiteBag from '../../assets/White Red Bow Bag.jpg';
import floweredBag from '../../assets/Flowered Bag.jpg';
import whiteTulips from '../../assets/WhiteTulips.jpg';
import plaidBag from '../../assets/Red Bag.jpg';

export const productsList = [
  {
    name: 'White Bag',
    img: whiteBag,
    price: 39.99,
    description:
      'White bag with red bow. Comes with both a bag and a matching purse.',
    path: 'whiteBag',
  },
  {
    name: 'Flowered Bag',
    img: floweredBag,
    price: 45.99,
    description: 'Flower patterned bag with 2 handles and a shoulder strap.',
    path: 'floweredBag',
  },
  {
    name: 'Tulip Bouquet',
    img: whiteTulips,
    price: 34.99,
    description: 'A bouquet of white tulips and tutsan',
    path: 'tulipBouquet',
  },
  {
    name: 'Plaid Bag',
    img: plaidBag,
    price: 33.99,
    description: 'A red and white plaid bag with 2 red bows.',
    path: 'plaidBag',
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

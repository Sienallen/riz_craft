import whiteBag from '../../../assets/White Red Bow Bag.jpg';
import floweredBag from '../../../assets/Flowered Bag.jpg';
import whiteTulips from '../../../assets/WhiteTulips.jpg';
import plaidBag from '../../../assets/Red Bag.jpg';
import './Populars.css';
import PopCard from './PopCard';

const Populars = () => {
  const populars = [
    {
      name: 'White Bag',
      img: whiteBag,
      description:
        'White bag with red bow. Comes with both a bag and a matching purse.',
      path: 'whiteBag',
    },
    {
      name: 'Flowered Bag',
      img: floweredBag,
      description: 'Flower patterned bag with 2 handles and a shoulder strap.',
      path: 'floweredBag',
    },
    {
      name: 'Tulip Bouquet',
      img: whiteTulips,
      description: 'A bouquet of white tulips and tutsan',
      path: 'tulipBouquet',
    },
    {
      name: 'Plaid Bag',
      img: plaidBag,
      description: 'A red and white plaid bag with 2 red bows.',
      path: 'plaidBag',
    },
  ];

  return (
    <>
      <div className="populars">
        <h2 className="pop-title">What Others Love!</h2>
        <section className="popGrid">
          {populars.map((popular) => (
            <PopCard
              name={popular.name}
              img={popular.img}
              description={popular.description}
              path={popular.path}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Populars;

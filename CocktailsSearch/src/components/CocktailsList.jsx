import React from 'react';
import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from '../components/CocktailCard';

const CocktailsList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No Matching cocktails found 🤷‍♂️...</h4>
    );
  }

  const formatedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formatedDrinks.map((item) => {
        const { id } = item;

        return <CocktailCard key={id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailsList;

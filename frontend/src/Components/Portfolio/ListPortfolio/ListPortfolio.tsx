import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  porfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ porfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {porfolioValues &&
          porfolioValues.map((porfolioValue) => {
            return (
              <CardPortfolio
                porfolioValue={porfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

export default ListPortfolio;

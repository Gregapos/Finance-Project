import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  porfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ porfolioValue, onPortfolioDelete }: Props) => {
  return (
    <>
      <h4>{porfolioValue}</h4>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={porfolioValue}
      />
    </>
  );
};

export default CardPortfolio;

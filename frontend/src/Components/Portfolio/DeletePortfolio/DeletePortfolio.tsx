import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input readOnly={true} hidden={true} value={portfolioValue} />
        <button>X</button>
      </form>
    </div>
  );
};

export default DeletePortfolio;

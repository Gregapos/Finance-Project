import React from "react";
import { Link } from "react-router-dom";

interface Props {
  ticker: string;
}

const ComparableFinderItem = ({ ticker }: Props) => {
  return (
    <Link
      reloadDocument
      to={`/company/${ticker}/company-profile`}
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
      {ticker}
    </Link>
  );
};

export default ComparableFinderItem;

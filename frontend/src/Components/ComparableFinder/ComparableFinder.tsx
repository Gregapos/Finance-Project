import React, { useEffect, useState } from "react";
import { CompanyComparableData } from "../../company";
import ComparableFinderItem from "./ComparableFinderItem/ComparableFinderItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  ticker: string;
}

//#Use these dummy Data to test functionality#
const comparableCompanies = [
  {
    symbol: "AAPL",
    peersList: [
      "LPL",
      "SNEJF",
      "PCRFY",
      "SONO",
      "VZIO",
      "MICS",
      "WLDSW",
      "KOSS",
      "GPRO",
      "SONY",
      "UEIC",
      "HEAR",
      "VUZI",
      "WLDS",
    ],
  },
];

const ComparableFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyComparableData>();

  // UseEffect to set company data on mount or when ticker changes
  useEffect(() => {
    //   #Only for Paid Version!#
    //   const getComps = async () => {
    //     const value = await getComparableData(ticker);
    //     setCompanyData(value?.data[0]);
    //   };
    //   getComps();

    //   #Using dummy data to test functionality#
    setCompanyData(comparableCompanies[0]);
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData?.peersList.map((ticker, index) => {
          return <ComparableFinderItem key={index} ticker={ticker} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ComparableFinder;

import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import { Console } from "console";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import { prototype } from "events";

function App() {
  const [search, setSearch] = useState<string>("");
  const [porfolioValues, setPorfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = porfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...porfolioValues, e.target[0].value];
    setPorfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = porfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPorfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        porfolioValues={porfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;

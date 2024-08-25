import React from "react";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;

interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });
  const renderedRows = data.map((company: any, rowIndex: number) => {
    return (
      <tr key={rowIndex}>
        {config.map((val: any, colIndex: number) => {
          return (
            <td key={colIndex} className="p-3">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide=gray-200 m-5">
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;

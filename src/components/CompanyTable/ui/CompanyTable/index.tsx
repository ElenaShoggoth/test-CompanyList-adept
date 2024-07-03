import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  deleteCompanies,
  toggleSelectAll,
} from "../../../../features/company/companySlice";
import { CompanyRow } from "../../../CompanyRow/ui/CompanyRow";

export const CompanyTable: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const allSelected = useSelector(
    (state: RootState) => state.companies.allSelected
  );

  const handleDelete = () => {
    const selectedIds = companies
      .filter((company) => company.selected)
      .map((company) => company.id);
    dispatch(deleteCompanies(selectedIds));
  };

  return (
    <div>
      <button onClick={() => dispatch(toggleSelectAll())}>
        {allSelected ? "Снять выделение" : "Выделить всё"}
      </button>
      <button onClick={handleDelete}>Удалить выделенные</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => dispatch(toggleSelectAll())}
              />
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

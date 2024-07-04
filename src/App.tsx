import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCompanies } from "./features/company/companySlice";
import { AddCompanyForm } from "./components/AddCompanyForm";
import { CompanyTable } from "./components/CompanyTable";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fakeCompanies = Array.from({ length: 10 }, (_, index) => ({
      id: `${index}`,
      name: `Company ${index + 1}`,
      address: `Address ${index + 1}`,
      selected: false,
    }));
    dispatch(loadCompanies(fakeCompanies));
  }, [dispatch]);

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-header">
          <h1 className="app-title">Список компаний</h1>
          <AddCompanyForm />
        </div>
        <CompanyTable />
      </div>
    </div>
  );
};

export default App;

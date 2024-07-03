import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCompanies } from "./features/company/companySlice";
import { AddCompanyForm } from "./components/AddCompanyForm";
import { CompanyTable } from "./components/CompanyTable";

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
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1>Список компаний</h1>
      <AddCompanyForm />
      <CompanyTable />
    </div>
  );
};

export default App;

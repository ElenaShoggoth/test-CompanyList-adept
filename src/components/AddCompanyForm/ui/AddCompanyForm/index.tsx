import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCompany } from "../../../../features/company/companySlice";

export const AddCompanyForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleAddCompany = () => {
    const newCompany = {
      id: uuidv4(),
      name,
      address,
      selected: false,
    };
    dispatch(addCompany(newCompany));
    setName("");
    setAddress("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Название компании"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Адрес"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleAddCompany}>Добавить компанию</button>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleSelectCompany,
  updateCompany,
} from "../../../../features/company/companySlice";

interface CompanyRowProps {
  company: {
    id: string;
    name: string;
    address: string;
    selected: boolean;
  };
}

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(company.name);
  const [address, setAddress] = useState(company.address);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    dispatch(updateCompany({ ...company, name: e.target.value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    dispatch(updateCompany({ ...company, address: e.target.value }));
  };

  return (
    <tr style={{ backgroundColor: company.selected ? "lightblue" : "white" }}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
          onChange={() => dispatch(toggleSelectCompany(company.id))}
        />
      </td>
      <td>
        <input type="text" value={name} onChange={handleNameChange} />
      </td>
      <td>
        <input type="text" value={address} onChange={handleAddressChange} />
      </td>
    </tr>
  );
};

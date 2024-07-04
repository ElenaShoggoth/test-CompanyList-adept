import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleSelectCompany,
  updateCompany,
} from "../../../../features/company/companySlice";
import styles from "./../../styles/CompanyRow.module.scss";

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
    <tr className={`${styles.row} ${company.selected ? styles.selected : ""}`}>
      <td>
        <label className={styles["checkbox-container"]}>
          <input
            type="checkbox"
            checked={company.selected}
            onChange={() => dispatch(toggleSelectCompany(company.id))}
          />
          <span className={styles.checkmark}></span>
        </label>
      </td>
      <td>
        <div style={{ position: "relative" }}>
          <input type="text" value={name} onChange={handleNameChange} />
          <span className={`${styles.edit_icon} material-icons`}>edit</span>
        </div>
      </td>
      <td>
        <div style={{ position: "relative" }}>
          <input type="text" value={address} onChange={handleAddressChange} />
          <span className={`${styles.edit_icon} material-icons`}>edit</span>
        </div>
      </td>
    </tr>
  );
};

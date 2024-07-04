import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCompany } from "../../../../features/company/companySlice";
import styles from "./../../styles/AddCompanyForm.module.scss";
import { TextInput } from "./../../ui/TextInput";
import { Button } from "../../../../shared/ui/Button";

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
    <div className={styles["form-container"]}>
      <div className={styles["input-container"]}>
        <TextInput
          type="text"
          placeholder="Название компании"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <Button
          className={`${styles.button}`}
          title={"Добавить компанию"}
          onClick={handleAddCompany}
        />
      </div>
    </div>
  );
};

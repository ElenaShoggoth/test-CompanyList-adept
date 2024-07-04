import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  deleteCompanies,
  toggleSelectAll,
} from "../../../../features/company/companySlice";
import { CompanyRow } from "../../../CompanyRow/ui/CompanyRow";
import styles from "./../../styles/CompanyTable.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { Onboarding } from "../Onboarding";
import { loadMoreCompanies } from "../../../../features/company/companyActions";

export const CompanyTable: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const allSelected = useSelector(
    (state: RootState) => state.companies.allSelected
  );

  const selectedCompanies = companies.filter((company) => company.selected);
  const isDeleteButtonActive = selectedCompanies.length > 0;

  const handleDelete = () => {
    const selectedIds = companies
      .filter((company) => company.selected)
      .map((company) => company.id);
    dispatch(deleteCompanies(selectedIds));
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) {
      dispatch(loadMoreCompanies());
    }
  };

  return (
    <div className={styles.container}>
      {companies.length ? (
        <div className={styles["table-container"]}>
          <div className={styles.buttonBox}>
            <Button
              className={`${styles.button} ${
                isDeleteButtonActive ? styles.active : styles.inactive
              }`}
              title={"Удалить выделенные"}
              onClick={handleDelete}
              disabled={!isDeleteButtonActive}
            />
          </div>

          <div className={styles["table-wrapper"]} onScroll={handleScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    <label className={styles["checkbox-container"]}>
                      <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={() => dispatch(toggleSelectAll())}
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                  </th>
                  <th className={styles.header}>Название компании</th>
                  <th className={styles.header}>Адрес</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <CompanyRow key={company.id} company={company} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Onboarding />
      )}
    </div>
  );
};

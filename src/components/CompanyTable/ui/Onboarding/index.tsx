import styles from "./../../styles/CompanyTable.module.scss";

export const Onboarding = () => {
  return (
    <div
      className={styles["onboarding-container"]}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <h1>Список компаний пуст</h1>
    </div>
  );
};

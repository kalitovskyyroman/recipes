import styles from "./PageLayout.module.scss";

interface IPageLayout {
    children: JSX.Element;
}

const PageLayout = ({ children }: IPageLayout) => <div className={styles["page-layout"]}>{children}</div>;

export default PageLayout;

import React from "react";
import styles from "./toolspage.module.scss";
import Card from "../../components/Card";
import classNames from "classnames";


export default function ToolsPage() {
    return (
        <div className={styles["container"]}>
            <Card className={styles["container__tags"]}>
                <div className={styles["title-container"]}>
                    <span className={styles["title-container__label"]}>Tags</span>
                    <div className={styles["title-container__circle"]}></div>
                </div>
                <ul className={styles["tags-container"]}>
                    <li className={classNames(styles["tags-container-item"], styles["tags-container-item--active"])}>JSON</li>
                    <li className={styles["tags-container-item"]}>Options</li>
                    <li className={styles["tags-container-item"]}>Picture</li>
                    <li className={styles["tags-container-item"]}>JSON</li>
                </ul>
            </Card>
            <Card className={styles["container__apps"]}>
                <div className={styles["ribbon"]}>
                    <span>current</span>
                </div>
                <ul className={styles["apps-box"]}>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                    <li className={styles["apps-box__app"]}>
                        <div className={styles["logo"]}></div>
                        <p className={styles["name"]}>app name</p>
                    </li>
                </ul>
            </Card>
        </div>
    )
}
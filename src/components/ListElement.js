import React from "react";
import styles from "../styles/ListElement.module.scss";
import { ImCheckmark, ImCross } from "react-icons/im";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const ListElement = ({ date, points, href }) => {
  return (
    <div className={styles.result_block}>
      <div className={styles.title_and_attachment_block}>
        <p className={styles.col_title}>{date}</p>
        <a
          className={styles.attachment}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineDocumentDownload />
        </a>
      </div>
      <div className={styles.col_value}>
        {points ? (
          <>
            <span className={styles.good}>
              <ImCheckmark />
            </span>
            <div className={styles.points_and_position}>
              <span className={styles.points}>{"pkt " + points}</span>
            </div>
          </>
        ) : (
          <span className={styles.bad}>
            <ImCross />
          </span>
        )}
      </div>
    </div>
  );
};

export { ListElement };

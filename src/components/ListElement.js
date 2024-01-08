import React from "react";
import styles from "../styles/ListElement.module.scss";
import { ImCheckmark, ImCross } from "react-icons/im";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { formatDateRoman } from "../shared/formatDate.js";

const ListElement = ({ date, points, href }) => {
  // GA4
  const handleDownloadXlsxFile = () => {
    const fullPath = href;
    const fileNameWithExtension = fullPath.split("/").pop();
    const fileName = fileNameWithExtension.split(".")[0];

    window.dataLayer.push({
      event: "download_xlsx_file",
      file: fileName,
    });
  };

  return (
    <div className={styles.result_block}>
      <div className={styles.title_and_attachment_block}>
        <p className={styles.col_title}>{formatDateRoman(date)}</p>
        <a
          className={styles.attachment}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={handleDownloadXlsxFile}
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

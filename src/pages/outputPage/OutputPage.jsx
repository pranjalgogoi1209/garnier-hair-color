import React, { useState } from "react";
import styles from "./outputPage.module.css";
import { Link } from "react-router-dom";

import Qr from "../../components/qr/Qr";
import Loader from "../../components/loader/Loader";

export default function OutputPage({ generatedImg, url }) {
  const [showQr, setShowQr] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className={styles.OutputPage}>
      <h1>{generatedImg ? "READY TO DOWNLOAD ?" : "PLEASE WAIT...!"}</h1>

      {generatedImg ? (
        <div className={styles.generatedImgContainer}>
          <div className={styles.imgContainer}>
            <img src={generatedImg} alt="generated-image" />
          </div>
          <div className={`flex-row-center ${styles.btnContainer}`}>
            {/* generate qr */}
            <div onClick={() => setShowQr(true)}>
              <button className={`btn2`}>QR</button>
            </div>

            <Link to={"/"}>
              <button className={`btn2`}>HOME</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {/* qr */}
      {showQr && <Qr url={url} setShowQr={setShowQr} />}

      {/* email */}
      {showEmail && <Email setShowEmail={setShowEmail} url={url} />}
    </div>
  );
}

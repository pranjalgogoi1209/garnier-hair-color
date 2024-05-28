import React, { useState } from "react";
import styles from "./outputPage.module.css";
import { Link } from "react-router-dom";

import Qr from "../../components/qr/Qr";
import Loader from "../../components/loader/Loader";

import logo from "./../../assets/logo.png";

export default function OutputPage({ generatedImg, url }) {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className={`flex-col-center ${styles.OutputPage}`}>
      {/* logo */}
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" />
      </div>

      <div className={`flex-col-center ${styles.bottom}`}>
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
      </div>

      {/* qr */}
      {showQr && <Qr url={url} setShowQr={setShowQr} />}
    </div>
  );
}

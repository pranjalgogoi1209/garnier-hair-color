import React from "react";
import styles from "./learningPage.module.css";

import logo from "./../../assets/logo.png";
import img01 from "./../../assets/learningPage/img01.png";
import img02 from "./../../assets/learningPage/img02.png";
import img03 from "./../../assets/learningPage/img03.png";
import img04 from "./../../assets/learningPage/img04.png";
import learningImg from "./../../assets/learningPage/learningPageImg.png";

const categories = [
  {
    img: img01,
    title: "BEFORE HAIR COLORING",
  },
  {
    img: img02,
    title: "WHILE HAIR COLORING",
  },
  {
    img: img03,
    title: "AFTER HAIR COLORING",
  },
  {
    img: img04,
    title: "HAIR COLOR TRENDS",
  },
];
export default function LearningPage() {
  return (
    <div className={`flex-col-center ${styles.LearningPage}`}>
      {/* logo */}
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" />
      </div>

      <div className={`flex-col-center ${styles.bottom}`}>
        <div className={`flex-col-center ${styles.title}`}>
          <h2>HOW TO</h2>
          <p className={`des`}>COLOR YOUR HAIR AT HOME?</p>
        </div>

        <div className={`flex-row-center ${styles.categories}`}>
          {categories?.map((item, index) => (
            <div
              key={index}
              className={`flex-col-center ${styles.singleContainer}`}
            >
              <div className={`flex-row-center ${styles.imgContainer}`}>
                <img src={item.img} alt={`hair-category-${index}`} />
              </div>
              <button className={`btn2`}>{item.title}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex-row-center ${styles.footer}`}>
        <div className={`flex-col-center ${styles.leftContainer}`}>
          <h3>
            FIND YOUR <br /> PERFECT SHADE
          </h3>
          <button className={`btn3`}>START NOW</button>
        </div>
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={learningImg} alt="learning-img" />
        </div>
      </div>
    </div>
  );
}

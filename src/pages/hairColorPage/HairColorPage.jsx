import React, { useEffect, useState } from "react";
import styles from "./hairColorPage.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

import { shadesArr } from "../../utils/shades";
import { originalImg } from "../../utils/originalImg";

import logo from "./../../assets/logo.png";
import avatar from "./../../assets/hairColorPage/avatar.png";
import tick from "./../../assets/hairColorPage/tick.png";

export default function HairColorPage({
  setGeneratedImg,
  capturedImg,
  setUrl,
}) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  // toast options
  const toastOptions = {
    position: "top-center",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // image uploading on server
  const getUrl = url => {
    axios
      .post(
        "https://analytiq4.com/aiphotobooth/aiphotobooth_bluehat/upload.php",
        {
          img: url,
        }
      )
      .then(function (response) {
        setUrl(response.data.url);
        // console.log("image uploaded on server");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // submitting the selected image and post request to api
  const handleSubmit = () => {
    setGeneratedImg("");
    if (capturedImg) {
      try {
        axios
          .post("https://h.ngrok.dev/rec", {
            image: originalImg.split(",")[1],
            number: selectedImageIndex,
            // status: "PREMIUM",
          })
          .then(function (response) {
            // console.log(response);
            setGeneratedImg(`data:image/webp;base64,${response.data.result}`);

            // image uploading on server
            getUrl(response.data.result);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate("/output");
      } catch (error) {
        console.error("something went wrong", error);
      }
    } else {
      toast.error(
        "Please select a shade or capture your photo again...",
        toastOptions
      );
    }
  };

  return (
    <div className={`flex-col-center ${styles.HairColorPage}`}>
      {/* logo */}
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" />
      </div>

      <div className={`flex-col-center ${styles.bottom}`}>
        <h1>SELECT YOUR SHADE</h1>
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={`flex-row-center ${styles.shades}`}>
          {shadesArr?.map((item, index) => (
            <div
              key={index}
              className={`flex-row-center ${styles.shadeContainer}`}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
            >
              <img
                src={selectedImageIndex === index ? tick : item}
                alt={`shade${index}`}
              />
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className={`btn1`}>
          YES! SUBMIT
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CameraPage from "./pages/cameraPage/CameraPage";
import HairColorPage from "./pages/hairColorPage/HairColorPage";
import OutputPage from "./pages/outputPage/OutputPage";

export default function App() {
  const [capturedImg, setCapturedImg] = useState();
  const [generatedImg, setGeneratedImg] = useState();
  const [url, setUrl] = useState();

  return (
    <BrowserRouter>
      <Routes>
        {/* camera page */}
        <Route
          path={"/"}
          element={<CameraPage setCapturedImg={setCapturedImg} />}
        />

        {/* hair color page */}
        <Route
          path="/hair-color"
          element={
            <HairColorPage
              capturedImg={capturedImg}
              setGeneratedImg={setGeneratedImg}
              setUrl={setUrl}
            />
          }
        />

        {/* output page */}
        <Route
          path="/output"
          element={<OutputPage generatedImg={generatedImg} url={url} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

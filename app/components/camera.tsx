"use client";

import Image from "next/image";
import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const Camera = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [showCam, setShowCam] = useState<boolean>(false);
  const webcamRef = React.useRef<Webcam>(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) {
      return;
    }
    setImgSrc(imageSrc);
    setShowCam(false);
  }, [webcamRef]);
  return (
    <div className="flex flex-col gap-2">
      {!showCam ? (
        <>
          {imgSrc && (
            <Image src={imgSrc} width={1280} height={720} alt="my image" />
          )}
          <button
            onClick={() => setShowCam(true)}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Usar camara
          </button>
        </>
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={1280}
            height={720}
            videoConstraints={videoConstraints}
          />
          <button
            onClick={capture}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Tomar foto
          </button>
        </>
      )}
    </div>
  );
};

export default Camera;

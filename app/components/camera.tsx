"use client";

import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

type Props = {
  callback: (imageSrc: string) => void;
};

const Camera = ({ callback }: Props) => {
  const [showCam, setShowCam] = useState<boolean>(false);
  const webcamRef = React.useRef<Webcam>(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) {
      return;
    }
    callback(imageSrc);
    setShowCam(false);
  }, [webcamRef, callback]);

  return (
    <div className="flex flex-col gap-2">
      {!showCam ? (
        <button
          onClick={() => setShowCam(true)}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Usa la cámara
        </button>
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={1280}
            height={720}
            videoConstraints={videoConstraints}
            mirrored={true}
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

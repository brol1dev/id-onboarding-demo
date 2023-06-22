"use client";

import { useStore } from "../hooks/useStore";
import { useState } from "react";
import ImageSide from "./image-side";
import Link from "next/link";

export default function DocumentSelection() {
  const [selectingBack, setSelectingBack] = useState(false);
  const frontImg = useStore((state) => state.frontImg);
  const backImg = useStore((state) => state.backImg);

  const goToFrontSelection = () => {
    setSelectingBack(false);
  };

  const setFrontImage = (image: string) => {
    useStore.setState({ frontImg: image });
  };

  const clearFrontImage = () => {
    useStore.setState({ frontImg: "" });
  };

  const goToBackSelection = () => {
    setSelectingBack(true);
  };

  const setBackImage = (image: string) => {
    useStore.setState({ backImg: image });
  };

  const clearBackImage = () => {
    useStore.setState({ backImg: "" });
  };

  if (selectingBack) {
    return (
      <div className="flex flex-col gap-6">
        <ImageSide
          title="Sube foto del reverso de tu INE"
          buttonText="Regresar a frente de INE"
          img={backImg}
          setImage={setBackImage}
          clearImage={clearBackImage}
          buttonAction={goToFrontSelection}
        />
        <Link
          href="/step3"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continuar
        </Link>
      </div>
    );
  }

  return (
    <ImageSide
      title="Sube foto del frente de tu INE"
      buttonText="Continuar a reverso de INE"
      img={frontImg}
      setImage={setFrontImage}
      clearImage={clearFrontImage}
      buttonAction={goToBackSelection}
    />
  );
}

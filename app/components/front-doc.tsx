"use client";

import Image from "next/image";
import { useStore } from "../hooks/useStore";
import Link from "next/link";
import Camera from "./camera";

export default function FrontDocument() {
  const frontImg = useStore((state) => state.frontImg);

  const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      return;
    }

    // Only allows one file.
    useStore.setState((state) => ({
      frontImg: URL.createObjectURL(files[0]),
    }));
  };

  const setImageFromCamera = (img: string) => {
    useStore.setState((state) => ({
      frontImg: img,
    }));
  };

  const clearImage = () => {
    useStore.setState((state) => ({
      frontImg: "",
    }));
  };

  return (
    <div className="space-y-6">
      <p className="font-semibold">Sube foto del frente de tu INE</p>

      {frontImg ? (
        <>
          <Image
            src={frontImg}
            width={1280}
            height={720}
            alt="document Image"
          />
          <button
            onClick={clearImage}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cambiar
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer  hover:bg-gray-100"
            >
              <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                <Image src="/plus-icon.svg" alt="id" width={48} height={48} />
                <div className="flex w-full justify-center rounded-md bg-transparent border border-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Agregar
                </div>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleSelectedFile}
              />
            </label>
          </div>
          <p className="font-semibold text-center">ó</p>
          <div>
            <Camera callback={setImageFromCamera} />
          </div>
        </>
      )}

      <div>
        <Link
          href="/step3"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continuar a reverso de INE
        </Link>
      </div>
    </div>
  );
}

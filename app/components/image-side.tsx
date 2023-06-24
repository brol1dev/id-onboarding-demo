"use client";

import Image from "next/image";
import Camera from "./camera";

type Props = {
  title: string;
  buttonText: string;
  img: string;
  setImage: (img: string) => void;
  clearImage: () => void;
  buttonAction: () => void;
};

export default function ImageSide({
  title,
  buttonText,
  img,
  setImage,
  clearImage,
  buttonAction,
}: Props) {
  const handleSelectedFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      return;
    }

    // Only allows one file.
    const b64File = await toBase64(files[0]);
    if (typeof b64File !== "string") {
      console.error("Error converting file to base64");
      return;
    }
    setImage(b64File);
  };

  const setImageFromCamera = (img: string) => {
    setImage(img);
  };

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="space-y-6">
      <p className="font-semibold">{title}</p>

      {img ? (
        <>
          <Image src={img} width={1280} height={720} alt="document Image" />
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
        <button
          onClick={buttonAction}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

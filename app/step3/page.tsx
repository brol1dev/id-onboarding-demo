"use client";

import SignaturePad from "react-signature-pad-wrapper";
import { useRouter } from "next/navigation";

import { useStore } from "../hooks/useStore";
import Steps from "../components/steps";
import { useRef } from "react";
import { ValidateResponse } from "@/app/types";
import Camera from "../components/camera";
import Link from "next/link";
import Image from "next/image";

export default function Step3() {
  const photoImg = useStore((state) => state.photoImg);

  const setImageFromCamera = (image: string) => {
    useStore.setState({ photoImg: image });
  };

  const clearImage = () => {
    useStore.setState({ photoImg: "" });
  };

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center text-gray-900">
      <div className="flex items-center justify-between sm:mx-auto sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verificación de usuario
        </h2>
      </div>
      <Steps active={3} />
      <div className="flex flex-col w-80 justify-center items-center">
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <>
                <div>
                  <h3 className="font-semibold">Foto de rostro</h3>
                </div>
              </>

              {photoImg ? (
                <>
                  <Image
                    src={photoImg}
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
                  <Link
                    href="/step4"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Continuar
                  </Link>
                </>
              ) : (
                <Camera callback={setImageFromCamera} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

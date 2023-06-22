"use client";

import SignaturePad from "react-signature-pad-wrapper";
import { useRouter } from "next/navigation";

import { useStore } from "../hooks/useStore";
import Steps from "../components/steps";
import { useRef } from "react";
import { ValidateResponse } from "@/app/types";

export default function Step3() {
  const router = useRouter();
  const store = useStore();
  const signaturePadRef = useRef<SignaturePad>(null);

  const clear = () => {
    const signature = signaturePadRef.current;

    if (!signature) {
      return;
    }

    signature.clear();
  };

  const sendData = async () => {
    const signature = signaturePadRef.current;

    if (!signature || signature.isEmpty()) {
      return;
    }
    useStore.setState({ signatureImg: signature.toDataURL() });

    const res = await fetch("/api/validate", {
      method: "POST",
      body: JSON.stringify(store),
    });

    if (res.status !== 200) {
      return;
    }

    const validateResponse = (await res.json()) as ValidateResponse;
    if (validateResponse.valid) {
      router.push("/valid");
      return;
    }

    router.push("/invalid");
  };

  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center text-gray-900">
      <div className="flex items-center justify-between sm:mx-auto sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verificación de usuario
        </h2>
      </div>
      <Steps active={4} />
      <div className="flex flex-col w-80 justify-center items-center">
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <>
                <div>
                  <h3 className="font-semibold">Firma</h3>
                </div>
              </>

              <div className="flex w-full border border-gray-200">
                <SignaturePad ref={signaturePadRef} />
              </div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={clear}
              >
                Limpiar
              </button>

              <div>
                <button
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={sendData}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

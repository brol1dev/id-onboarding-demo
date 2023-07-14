"use client";

import SignaturePad from "react-signature-pad-wrapper";
import { useRouter } from "next/navigation";
import { useRef, useTransition } from "react";

import { StoreType, useStore } from "../hooks/useStore";
import Steps from "../components/steps";
import { ValidateResponse } from "../types";
import Link from "next/link";

const getBaseUrl = () => {
  // return "https://id-onboarding-demo-api.onrender.com";
  if (process.env.VERCEL_URL) {
    return "https://id-onboarding-demo-api.onrender.com";
  }
  return "http://127.0.0.1:8081";
};

export default function Step4() {
  const [isPending, startTransition] = useTransition();
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

  const sendData = () => {
    const signature = signaturePadRef.current;

    if (!signature || signature.isEmpty()) {
      return;
    }
    useStore.setState({ signatureImg: signature.toDataURL() });

    router.push("/valid");
    // await validate();
  };

  const validate = async () => {
    // let res;
    // try {
    //   res = await fetch(`${getBaseUrl()}/api/validate`, {
    //     method: "POST",
    //     cache: "no-store",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(store),
    //   });
    // } catch (e) {
    //   console.error("error with /api/validate request. ", e);
    //   router.push("/invalid");
    //   return;
    // }

    // if (!res || !res.ok) {
    //   console.error("[Server action | Validate] The response is invalid");
    //   router.push("/invalid");
    //   return;
    // }

    // const json = (await res.json()) as ValidateResponse;
    // console.log("[Server action | Validate] validate response: ", json);

    // if (!json.valid) {
    //   router.push("/invalid");
    //   return;
    // }

    router.push("/valid");
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
                {isPending ? (
                  <button
                    className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={sendData}
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Validando...
                  </button>
                ) : (
                  // <button
                  //   className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  //   onClick={sendData}
                  // >
                  //   Enviar
                  // </button>
                  <Link
                  href="/valid"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar
                </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

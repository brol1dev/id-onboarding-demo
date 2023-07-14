"use client";

import { StoreType, VerifiedStatus, useStore } from "@/app/hooks/useStore";
import Image from "next/image";

type Props = {
  params: {
    item: string;
  };
};

export default function Item({ params }: Props) {
  const store = useStore();
  const { frontImg, signatureImg, photoImg, name, verifiedStatus } = store;
  console.log(store);

  const approveAction = () => {
    useStore.setState({ verifiedStatus: VerifiedStatus.Verified });
  };

  const rejectAction = () => {
    useStore.setState({ verifiedStatus: VerifiedStatus.Rejected });
  };

  return (
    <main className="flex flex-col gap-4">
      <div>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-4">
          Usuario por verificar
        </h2>
      </div>
      <div>
        <p className="text-center">
          Nombre: <span className="font-medium">{name}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4 text-center">
          <Image
            src={frontImg}
            width={600}
            height={338}
            alt="Document front side image"
          />
          <p>Frente de INE</p>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <Image
            src={signatureImg}
            width={600}
            height={338}
            alt="User signature image"
          />
          <p>Firma de cliente</p>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <Image
            src={photoImg}
            width={600}
            height={338}
            alt="User photo image"
          />
          <p>Foto del cliente</p>
        </div>
      </div>
      <div className="flex sticky bottom-0 border bg-white border-gray-200 left-0 right-0 gap-4 p-4">
        {verifiedStatus === VerifiedStatus.Pending && (
          <>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={approveAction}
            >
              Aprobar
            </button>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={rejectAction}
            >
              Denegar
            </button>
          </>
        )}
        {verifiedStatus === VerifiedStatus.Verified && (
          <>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Aprobado
            </button>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={rejectAction}
            >
              Denegar
            </button>
          </>
        )}
        {verifiedStatus === VerifiedStatus.Rejected && (
          <>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={approveAction}
            >
              Aprobar
            </button>
            <button
              className="inline-flex items-center w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Denegado
            </button>
          </>
        )}
      </div>
    </main>
  );
}

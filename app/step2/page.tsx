"use client";

import Image from "next/image";

import Camera from "../components/camera";
import Steps from "../components/steps";
import { useStore } from "../hooks/useStore";
import Link from "next/link";
import { useState } from "react";
import FrontDocument from "../components/front-doc";

export default function Step2() {
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center text-gray-900">
      <div className="flex items-center justify-between sm:mx-auto sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verificación de usuario
        </h2>
      </div>
      <Steps active={2} />
      <div className="flex flex-col w-80 justify-center items-center">
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FrontDocument />
          </div>
        </div>
      </div>
    </main>
  );
}

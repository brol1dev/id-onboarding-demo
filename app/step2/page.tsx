import Image from "next/image";
import Camera from "../components/Camera";

export default function Step2() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-gray-900">
      <div className="flex items-center justify-between sm:mx-auto sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verificación de usuario
        </h2>
      </div>
      <div className="flex mt-4 text-white">
        <div className="flex items-center justify-center rounded-full font-semibold text-sm bg-indigo-600 h-10 w-10">
          1
        </div>
        <div className="text-gray-300 text-base mx-1 pt-2">•••</div>
        <div className="flex items-center justify-center rounded-full font-semibold text-sm bg-emerald-500 h-10 w-10">
          2
        </div>
        <div className="text-gray-300 text-base mx-1 pt-2">•••</div>
        <div className="flex items-center justify-center rounded-full font-semibold text-sm bg-indigo-200 h-10 w-10">
          3
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <>
                <div>
                  <h3 className="font-semibold">Elige tu identificación</h3>
                </div>
              </>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer  hover:bg-gray-100"
                >
                  <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                    <Image
                      src="/plus-icon.svg"
                      alt="id"
                      width={48}
                      height={48}
                    />
                    <div className="flex w-full justify-center rounded-md bg-transparent border border-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                      Agregar
                    </div>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>

              <div>
                <Camera />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

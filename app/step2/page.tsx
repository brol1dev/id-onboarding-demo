import Image from "next/image";
import Camera from "../components/camera";
import Steps from "../components/steps";

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

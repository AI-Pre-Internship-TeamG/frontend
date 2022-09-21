/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React from 'react';

export default function EditTool() {
  return (
    <div className="fixed bottom-5 left-1/2 z-[5] inline-flex translate-x-1/2 items-center space-x-3">
      <div className="shadow-base inline-flex items-center space-x-2 rounded-[28px] border border-gray-200 bg-gray-50 p-1 text-gray-900 transition-color sm:p-2">
        <div className="group relative">
          <button className="mobile:hover:bg-white mobile:hover:text-gray-700 rounded-[20px] p-2 text-gray-700 transition-colors hover:bg-gray-900 hover:text-white disabled:cursor-default disabled:bg-transparent disabled:text-gray-300 disabled:opacity-70 sm:p-3 mobile:hover:bg-white mobile:hover:text-black mobile:hover:text-gray-300 hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="pointer-events-none absolute left-1/2 bottom-[110%] z-20 hidden translate-x-1/2 translate-y-2 whitespace-nowrap rounded-lg bg-black/30 px-2 py-1 text-center text-sm font-medium text-white opacity-0 backdrop-blur-xl transition-all group-hover:translate-y-0 group-hover:opacity-100 lg:block">
            Ctrl + Shift + ⬅
          </div>
        </div>
        <div className="group relative">
          <button className="mobile:hover:bg-white mobile:hover:text-gray-700 rounded-[20px] p-2 text-gray-700 transition-colors hover:bg-gray-900 hover:text-white disabled:cursor-default disabled:bg-transparent disabled:text-gray-300 disabled:opacity-70 sm:p-3 mobile:hover:bg-white mobile:hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6 rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="pointer-events-none absolute left-1/2 bottom-[110%] z-20 hidden translate-x-1/2 translate-y-2 whitespace-nowrap rounded-lg bg-black/30 px-2 py-1 text-center text-sm font-medium text-white opacity-0 backdrop-blur-xl transition-all group-hover:translate-y-0 group-hover:opacity-100 lg:block">
            Ctrl + Shift + ➡
          </div>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="relative">
          <div>
            <button
              className="rounded-[20px] p-2 text-gray-700 transition-colors sm:p-3 bg-gray-200"
              id="headlessui-disclosure-button-32"
              type="button"
              aria-expanded="true"
              aria-controls="headlessui-disclosure-panel-33"
            >
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.63932 11.7265L10.398 2.66174C10.7504 2.29701 11.4477 2 11.954 2H22.0868C22.2071 1.99988 22.3261 2.02367 22.4372 2.07002C22.5483 2.11637 22.6491 2.18436 22.734 2.27007C22.8189 2.35579 22.8861 2.45754 22.9317 2.56947C22.9774 2.6814 23.0006 2.80131 23 2.9223L22.9721 10.2164C22.9702 10.7253 22.6783 11.431 22.3203 11.7914L13.8238 20.3473C13.466 20.7076 12.7647 21 12.2579 21H1.91765C1.41039 21 1 20.5874 1 20.0784V13.3097C1 12.8006 1.28624 12.0919 1.63932 11.7265ZM11.036 13.6179H3.70161C3.19664 13.6179 2.78487 14.0306 2.78487 14.5399V18.2413C2.78486 18.3624 2.80856 18.4824 2.85464 18.5943C2.90072 18.7062 2.96826 18.8078 3.05341 18.8934C3.13856 18.9791 3.23964 19.047 3.35088 19.0933C3.46213 19.1396 3.58134 19.1633 3.70172 19.1632H11.0361C11.5411 19.1632 11.9528 18.7505 11.9528 18.2413V14.5399C11.9528 14.4187 11.9291 14.2988 11.8831 14.1869C11.837 14.075 11.7694 13.9733 11.6843 13.8877C11.5991 13.8021 11.498 13.7342 11.3868 13.6879C11.2756 13.6416 11.1564 13.6178 11.036 13.6179ZM14.4335 12.9217C14.0764 13.2839 13.787 13.9907 13.787 14.5002V17.0055C13.787 17.5151 14.0708 17.6307 14.4223 17.2624L20.565 10.8234C20.9158 10.4557 21.2003 9.74381 21.2003 9.23502V6.28876C21.2003 6.16131 21.1281 6.13132 21.0387 6.22209L14.4334 12.9217H14.4335ZM12.3648 3.85671C12.1745 3.86017 11.9102 3.97206 11.7753 4.10586L4.77505 11.0493C4.41441 11.4071 4.53271 11.6971 5.0394 11.6971H11.9312C12.4378 11.6971 13.1416 11.408 13.5028 11.0516L20.7843 3.86825C20.8747 3.77908 20.8445 3.70861 20.7182 3.7108L12.3648 3.85683V3.85671Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="absolute left-1/2 top-4 z-[1] translate-x-1/2 sm:-top-6"
            id="headlessui-disclosure-panel-33"
          >
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_308_8434)">
                <path
                  d="M20 1H2L10.5421 11.0675C10.9511 11.5495 11.699 11.5359 12.0901 11.0394L20 1Z"
                  fill="white"
                  fill-opacity="0.8"
                ></path>
                <path
                  d="M20 1H2L10.5421 11.0675C10.9511 11.5495 11.699 11.5359 12.0901 11.0394L20 1Z"
                  stroke="#D1D5DB"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_308_8434"
                  x="-19.0801"
                  y="-19.5"
                  width="60.1113"
                  height="51.4209"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  ...
                </filter>
              </defs>
            </svg>
            <div className="absolute bottom-3 flex w-[328px] translate-x-36 items-center space-x-3 rounded-[20px] border border-gray-300 bg-white py-1 px-2 sm:w-[460px] sm:translate-x-1/2 sm:space-x-2 sm:p-4">
              <div className="self relative h-10 w-40 overflow-hidden sm:w-56">
                <svg
                  className="absolute inset-x-0 flex h-full items-center justify-between pr-16 sm:pr-2"
                  width="214"
                  height="26"
                  viewBox="0 0 218 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M214.89 0.116705C216.036 0.0533201 217 0.965687 217 2.11365L217 23.8864C217 25.0343 216.036 25.9467 214.89 25.8833L0.998468 14.0552C0.438326 14.0242 -5.9277e-07 13.561 -5.68248e-07 13V13C-5.43726e-07 12.439 0.438332 11.9758 0.998474 11.9448L214.89 0.116705Z"
                    fill="#B1D0FF"
                  ></path>
                </svg>
                <input
                  className="absolute h-full w-full"
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

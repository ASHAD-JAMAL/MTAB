import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="./src/assets/logo.png"
                className="mr-3 h-20"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact-us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023
            <a href="https://google.com/" className="hover:underline">
              All rights reserved.
            </a>
            MTAB Technology Center Pvt. Ltd.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="https://www.youtube.com/channel/UCUqJ3_hhCIuQr0m8NuMl_aw/featured"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path
                  fill-rule="evenodd"
                  d="M32.786 10l.106.001.392.002c1.94.009 6.896.05 11.873.237l.765.03c4.589.187 9.063.504 11.068 1.04 2.71.73 4.84 2.86 5.56 5.56 1.204 4.505 1.301 13.515 1.31 14.939v.382c-.009 1.424-.106 10.434-1.31 14.939a7.885 7.885 0 0 1-5.56 5.56c-4.455 1.19-21.107 1.3-24.098 1.309h-.923c-2.99-.01-19.635-.118-24.099-1.309a7.885 7.885 0 0 1-5.56-5.56c-.401-1.502-.68-3.504-.873-5.559l-.058-.65c-.314-3.688-.368-7.394-.377-8.552L1 32.124v-.194-.054l.002-.245c.009-1.158.063-4.864.377-8.552l.058-.65c.193-2.055.472-4.057.873-5.559a7.885 7.885 0 0 1 5.56-5.56c4.296-1.146 19.878-1.29 23.706-1.307L31.97 10h.105zM26.15 22.57v18.86L42.48 32l-16.33-9.43z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Youtube</span>
            </Link>
            <Link to="https://twitter.com/AbhyazLearning" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/abhyazlearning/"
              className="text-gray-500"
              aria-label="LinkedIn page"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path
                  fill-rule="evenodd"
                  d="M64 4.706v54.588A4.706 4.706 0 0 1 59.294 64H4.706A4.706 4.706 0 0 1 0 59.294V4.706A4.706 4.706 0 0 1 4.706 0h54.588A4.706 4.706 0 0 1 64 4.706zM18.824 24.47H9.412v30.117h9.412V24.471zm.847-10.353a5.421 5.421 0 0 0-5.384-5.46h-.17a5.459 5.459 0 0 0 0 10.918 5.421 5.421 0 0 0 5.554-5.289v-.17zm34.917 22.174c0-9.054-5.76-12.574-11.482-12.574a10.73 10.73 0 0 0-9.525 4.856h-.263v-4.103H24.47v30.117h9.411V38.57a6.25 6.25 0 0 1 5.647-6.738h.358c2.993 0 5.214 1.882 5.214 6.625v16.132h9.412l.075-18.296z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";

function Sidebar() {
  return (
    <>
      <div>
        {/* Sidebar */}
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-lg"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-2 text-gray-900 rounded-lg"
                >
                  <svg
                    id="logo-14"
                    width="68"
                    height="45"
                    viewBox="0 0 73 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                      className="ccustom"
                      fill="#68DBFF"
                    ></path>{" "}
                    <path
                      d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                      className="ccompli1"
                      fill="#FF7917"
                    ></path>{" "}
                    <path
                      d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                      className="ccompli2"
                      fill="#5D2C02"
                    ></path>{" "}
                  </svg>
                  <span className="ms-3 text-lg">Content Generator</span>
                </a>
              </li>
              <div className="border-b-2"></div>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-900 hover:text-white rounded-lg hover:bg-[#b5abdf] dark:hover:bg-[#704ef8] group"
                >
                  <Home />
                  <span className="flex-1 ms-3 text-lg whitespace-nowrap">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-900 hover:text-white rounded-lg hover:bg-[#b5abdf] dark:hover:bg-[#704ef8] group"
                >
                  <FileClock />
                  <span className="flex-1 ms-3 text-lg whitespace-nowrap">
                    History
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-900 hover:text-white rounded-lg hover:bg-[#b5abdf] dark:hover:bg-[#704ef8] group"
                >
                  <WalletCards />
                  <span className="flex-1 ms-3 text-lg whitespace-nowrap">
                    Billing
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-900 hover:text-white rounded-lg hover:bg-[#b5abdf] dark:hover:bg-[#704ef8] group"
                >
                  <Settings />
                  <span className="flex-1 ms-3 text-lg whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;

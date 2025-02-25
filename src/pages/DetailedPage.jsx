import DetailedPageContent from "../components/DetailedPageContent";
import { Link } from "react-router-dom";
function DetailedPage() {
  return (
    <div className="p-6">
      <div className="ml-64">
       <Link to={"/"}>
       <button className="bg-[#704ef8] text-white flex items-center justify-center rounded-md text-sm font-medium shadow hover:bg-[#7a61e1] h-9 px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back
        </button>
       </Link>
      </div>
      <div>
        <DetailedPageContent />
      </div>
    </div>
  );
}

export default DetailedPage;

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";

function OutputSection({aiResponse}) {
  console.log(aiResponse);
  const editorRef = useRef(null);

  useEffect(()=> {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(aiResponse);
    }
  }, [aiResponse])
  return (
    <>
      <div>
        <div className="bg-white shadow-lg border rounded-lg">
          <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-lg">Your Result</h2>
            <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white bg-[#704ef8] shadow hover:bg-primary/90 h-9 px-4 py-2 flex gap-2">
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
                className="lucide lucide-copy w-4 h-4"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              Copy
            </button>
          </div>
          <div style={{ height: "600px" }}>
            <Editor
              initialEditType="wysiwyg"
              height="600px"
              useCommandShortcut={true}
              initialValue={aiResponse}
              ref={editorRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OutputSection;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AI_TOOLS from "../core/Tools.Contant";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

function DetailedPageContent() {
  const param = useParams();
  const [aiResponse, setAiResponse] = useState('')
  const selectedTool = AI_TOOLS.find((a) => a.slug === param.slug);
  console.log(selectedTool);
  return (
    <>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
       <InputSection selectedTool={selectedTool} setAiResponse={setAiResponse} />
        <div className="col-span-2">
         <OutputSection aiResponse={aiResponse} />
        </div>
      </div>
    </>
  );
}

export default DetailedPageContent;

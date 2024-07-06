import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function InputSection({ selectedTool, setAiResponse }) {
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);

 
  const createContent = async (data) => {
    try {
      let prompt = selectedTool.aiPrompt;
      const form = selectedTool.form;
      console.log(data);
      for (const field of form) {
        prompt = prompt.replace(`{${field.name}}`, data[field.name]);
      }
      setLoader(true);
      const res = await fetch(`https://ai-api.sashikumar.dev/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt }),
      });
      const aiResponse = await res.text();
      setAiResponse(aiResponse);
     
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <>
      <div className="p-5 shadow-md border rounded-lg bg-white">
        <img
          className="w-[70px] overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
          src="https://cdn-icons-png.flaticon.com/128/4186/4186534.png"
          alt="card-image"
        />
        <h2 className="font-bold text-2xl mb-2 mt-4 text-[#704ef8]">
          {selectedTool.name}
        </h2>
        <p className="text-gray-500 text-sm">{selectedTool.description}</p>
        <form onSubmit={handleSubmit(createContent)} className="mt-6">
          {selectedTool.form.map((itemField, index) => (
            <div key={index}>
              {itemField.field === "input" && (
                <div className="my-2 flex flex-col gap-2 mb-7">
                  <label className="font-bold">{itemField.label}</label>
                  <input
                    {...register(itemField.name)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    required={itemField.required}
                    name={itemField.name}
                  />
                </div>
              )}
              {itemField.field === "textarea" && (
                <div>
                  <div className="my-2 flex flex-col gap-2 mb-7">
                    <label className="font-bold">{itemField.label}</label>
                    <textarea
                      {...register(itemField.name)}
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      name={itemField.name}
                      rows="5"
                      cols="30"
                      maxLength="2000"
                    ></textarea>
                    <label className="text-xs text-gray-400">
                      Note: Max 2000 Words
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
          {loader ? (
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white bg-[#9f93cd] shadow hover:bg-[#7a61e1] h-9 px-4 w-full py-6"
              type="submit"
            >
              <img
                className="w-6 mr-1"
                src="../../public/Rolling@1x-1.0s-200px-200px.svg"
                alt=""
              />
              Generate Content
            </button>
          ) : (
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white bg-[#704ef8] shadow hover:bg-[#7a61e1] h-9 px-4 w-full py-6"
              type="submit"
            >
              Generate Content
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default InputSection;

import { Search } from "lucide-react";
import Cards from "./Cards";
import AI_TOOLS from "../core/Tools.Contant";
import { useState } from "react";
function MainContent() {
    const [cardDetails] = useState(AI_TOOLS)
  return (
    <div className="ml-64">
      {/* Main Content */}
     
      <div className=" p-10 gradient-background flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-bold">Browse All Templates</h2>
        <p className=" text-base font-normal mt-1">
          What would you like to create today?
        </p>
        <div className="w-full  flex justify-center">
          <div className="flex gap-2 items-center p-1 border rounded-md bg-white my-5 w-[50%]">
            <Search style={{ stroke: "#8a2be2" }} />
            <input
              placeholder="Search"
              className=" placeholder:text-lg placeholder:font-medium  bg-transparent w-full outline-none text-black"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="p-10 grid lg:grid-cols-4 grid-cols-2 gap-5 ">
       {cardDetails.map(items => <Cards icon={items.icon} name={items.name} description={items.description} key={items} />) }
      </div>
    </div>
  );
}

export default MainContent;

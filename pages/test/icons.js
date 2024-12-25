import { Icons } from "#/icon/icons";
import React from "react";

function icons() {
  return (
    <div>
      <div className="flex flex-wrap gap-5 p-5">
        {Object.getOwnPropertyNames(Icons)
          .filter((name) => typeof Icons[name] === "function")
          .map((key) => {
            const CurrIcon = Icons[key];
            return (
              <div
                key={key}
                className="h-[150px] w-[150px] border border-gray-400 p-3"
              >
                <CurrIcon className="h-[65%] w-full fill-primary stroke-red-600" />
                <p className="mt-3 break-words text-center text-[14px]">
                  {key}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default icons;

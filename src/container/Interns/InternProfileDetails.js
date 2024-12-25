import React, { useEffect, useState } from "react";
import { Icons } from "#/icon/icons";
import { Interns } from "../../../pages/api/data";
import { useRouter } from "next/router";

function InternProfileDetails() {
  const router = useRouter();
  const { intern_id } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    setData(Interns.getInternDetails(intern_id));
  }, [router]);

  return (
    <div className="mt-5">
      <div className="container mx-auto px-10">
        {/* title */}
        <h4 className="text-3xl leading-[39px] text-sky-950">Amaliyotchi</h4>

        {/* profile-details */}
        <div className="relative z-0 mt-10 flex items-center gap-x-6">
          {/* image */}
          <div className="relative rounded-full border border-gray-300 bg-gray-200 p-6">
            <Icons.User400 className="w-[70px] fill-slate-500" />
            <button className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-white p-2.5 shadow-[0px_8px_10px_0px_#5A779514]">
              <Icons.Edit400 className="w-5 fill-sky-950" />
            </button>
          </div>

          {/* user-info */}
          <div>
            {/* full-name */}
            <h4 className="text-3xl leading-[39px] text-sky-950">
              {data?.name} {data?.surname}
            </h4>
            {/* specialization */}
            <p className="ьt-3 text-base leading-[24px] text-sky-950">
              {data?.specialization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternProfileDetails;

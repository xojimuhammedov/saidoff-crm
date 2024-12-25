import { useRouter } from "next/router";
import React from "react";

function PaginationTabs({ children }) {
  const router = useRouter();
  const activeTab = Number(router.query.tab) || 0;

  return (
    <div>
      {/* pagination-navbar */}
      <div className="container mx-auto mt-[40px] px-10">
        <div className="w-full rounded-[4px] bg-white px-8">
          <ul className="flex items-center gap-x-8">
            {children.map((item, index) => {
              const isActive = activeTab === index;

              return (
                <li key={index}>
                  <button
                    className="relative py-3"
                    onClick={() =>
                      router.replace(
                        {
                          pathname: router.pathname,
                          query: { ...router.query, tab: index },
                        },
                        undefined,
                        { shallow: true },
                      )
                    }
                  >
                    <p
                      className={`text-base ${isActive ? "font-semibold text-primary" : "text-sky-950"}`}
                    >
                      {item.props?.pagination}
                    </p>

                    {/* bottom rounded-border */}
                    <div
                      className={`absolute inset-0 top-auto h-[2px] w-full rounded-[4px] ${isActive ? "bg-primary" : "bg-transparent"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* pagination-content */}
      {children[activeTab]}
    </div>
  );
}

export default PaginationTabs;

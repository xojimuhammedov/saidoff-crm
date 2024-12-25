import Link from "next/link";
import React from "react";

function NavLinks({ links }) {
  return (
    <div className="flex items-center gap-x-2 px-10 pt-5 mb-3">
      {links.map((item, index) => {
        const isSlashed = index + 1 < links.length;
        const isBold = index !== 0 && index + 1 === links.length;

        return (
          <React.Fragment key={index}>
            <Link href={item.href} className={`${isBold ? "font-bold text-sky-950" : 'text-slate-500'}`}>
              <p>
                {item.label}
              </p>
            </Link>
            {isSlashed ? <p className="text-sky-950">/</p> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default NavLinks;

import { Icons } from "#/icon/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { AppContext } from "../../context";

function Sidebar() {
  const [state, dispatch] = useContext(AppContext);
  const open = state.sidebarOpen;
  const [activeDropdown, setActiveDropdown] = useState([]);
  const router = useRouter();

  function checkLinkActive(link) {
    return "/" + router.pathname.split("/")[1] === link;
  }

  return (
    <div
      className={`relative z-[2000] w-full flex-grow border-r-2 border-gray-100 bg-white duration-300 ${open ? "max-w-[280px]" : "max-w-[75px]"}`}
    >
      <div className="sticky inset-0 bottom-auto h-[600px] w-full">
        <div className="relative">
          {/* SIDEBAR-BTN */}
          <button
            className="absolute right-0 top-0 flex aspect-square w-[34px] translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0px_2.32px_2.32px_0px_#5A779514]"
            onClick={() => dispatch({ ...state, sidebarOpen: !open })}
          >
            <Icons.Arrow400 className="ml-[10%] w-5 fill-none stroke-primary" />
          </button>

          <div className="">
            {/* LOGO */}
            <Link href="/" className="mb-20 block px-5 pt-8">
              <div className="relative">
                <Icons.Logo
                  className={`absolute w-[129px] fill-primary ${open ? "opacity-100" : "collapse opacity-0"}`}
                />
                <Icons.LogoIcon
                  className={`absolute w-[33px] fill-primary ${open ? "collapse opacity-0" : "opacity-100"}`}
                />
              </div>
            </Link>

            {/* USER-TYPE */}
            <h4
              className={`mb-8 px-5 text-[26px] text-sky-950 duration-300 ${!open && "collapse opacity-0"}`}
            >
              Direktor
            </h4>

            {/* LINKS */}
            <ul className="flex flex-col items-stretch gap-y-1 px-2">
              {links.map((item, index) => {
                const isDropped = activeDropdown[index];
                const isActive = checkLinkActive(item.href);

                if (item.dropdown) {
                  return (
                    <li key={index}>
                      {/* dropdown-links */}
                      <button
                        className={`group flex w-full items-center justify-between gap-x-2 rounded-[7px] border fill-sky-950 p-4 text-sky-950 ${open ? "border-transparent" : "border-gray-200"} ${isDropped ? "bg-primary/5" : "hover:bg-gray-100"}`}
                        onClick={() => {
                          const arr = [...activeDropdown];
                          arr[index] = !isDropped;
                          setActiveDropdown(arr);
                        }}
                      >
                        <div className="flex items-center gap-x-2">
                          <item.icon
                            className={`w-6 min-w-6 ${isDropped && "fill-primary"}`}
                          />
                          <h4
                            className={`text-base duration-300 ${isDropped ? "text-primary" : "text-sky-950"} ${!open && "hidden"}`}
                          >
                            {item.label}
                          </h4>
                        </div>
                        <Icons.Arrow400
                          className={`w-5 min-w-5 fill-none duration-300 ${!open && "collapse opacity-0"} ${isDropped ? "-rotate-90 stroke-primary" : "rotate-90 stroke-sky-950"}`}
                        />
                      </button>

                      {/* dropdown-list */}
                      <div
                        className={`min-w-[220px] overflow-hidden rounded-[7px] bg-white ${isDropped ? "h-full" : "h-0"}`}
                      >
                        <ul
                          className={`flex flex-col gap-y-5 py-4 pl-12 duration-300 ${!isDropped && "-translate-y-1/2"}`}
                        >
                          {item.dropdown?.map((dropdownItem, idx) => {
                            const dropDownOrder = item.dropdown.length - idx;
                            const isActive = checkLinkActive(dropdownItem.href);

                            return (
                              <li
                                key={idx}
                                className={`duration-[350ms] ease-[cubic-bezier(.36,.57,.19,.99)]`}
                                style={{
                                  transform: `translateY(${!isDropped ? `-${dropDownOrder * 50 * dropDownOrder}px` : "0"})`,
                                }}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className={`line-clamp-1 break-words text-base hover:text-primary ${isActive ? "text-primary" : "text-sky-950"}`}
                                >
                                  <p>{dropdownItem?.label}</p>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      {/* links */}
                      <Link
                        href={item.href}
                        className={`group flex w-full items-center gap-x-2 rounded-[7px] border border-transparent p-4 ${isActive ? "bg-primary/10" : "hover:bg-gray-100"}`}
                      >
                        <item.icon
                          className={`w-6 min-w-6 ${isActive ? "fill-primary" : "fill-sky-950"}`}
                        />
                        <h4
                          className={`${isActive ? "text-primary" : "text-sky-950"} text-base duration-300 ${!open && "hidden"}`}
                        >
                          {item.label}
                        </h4>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const links = [
  {
    icon: Icons.Dashboard700,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Icons.Users700,
    label: "Foydalanuvchilar",
    dropdown: [
      {
        label: "Hodimlar",
        href: "/employees",
      },
      {
        label: "O'quvchilar",
        href: "/students",
      },
      {
        label: "Amaliyotchilar",
        href: "/interns",
      },
    ],
  },
  {
    icon: Icons.Projects700,
    label: "Proyektlar",
    href: "/projects",
  },
  {
    icon: Icons.News700,
    label: "Yangiliklar",
    dropdown: [
      {
        label: "Yangiliklar",
        href: "/news",
      },
      {
        label: "So’rovnomalar",
        href: "/queries",
      },
    ],
  },
  {
    icon: Icons.Groups700,
    label: "Guruhlar",
    dropdown: [
      {
        label: "Guruhlar",
        href: "/groups",
      },
      {
        label: "Xonalar",
        href: "/rooms",
      },
    ],
  },
  {
    icon: Icons.Payments700,
    label: "To'lovlar",
    href: "/payments",
  },
  {
    icon: Icons.Archieve700,
    label: "Arxiv",
    href: "/archieve",
  },
];

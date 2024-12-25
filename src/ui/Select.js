import React, { useState } from "react";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("Amaliyotchilar");
  const [isOpen, setIsOpen] = useState(false); // Track if dropdown is open

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown open/close
  };

  return (
    <div className="flex flex-col space-y-2">
      <select
        id="dropdown"
        className={`h-11 w-44 rounded-lg border px-3 py-2 text-[#787F95] shadow focus:bg-white focus:outline-none ${isOpen ? "border-b-gray-200" : ""}`} // Change border color when open
        value={selectedOption}
        onChange={handleSelectChange}
        onClick={toggleDropdown} // Toggle dropdown on click
      >
        <option value="Amaliyotchilar">Amaliyotchilar</option>
        <option value="Boshqaruvchilar">Boshqaruvchilar</option>
        <option value="O'qituvchilar">O'qituvchilar</option>
        <option value="Talabalar">Talabalar</option>
      </select>
    </div>
  );
};

export default Select;

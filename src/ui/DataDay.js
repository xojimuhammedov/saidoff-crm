import { useState } from "react";

const DateInputForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
  };

  return (
    <div className="">
      <form className="flex" onSubmit={handleSubmit}>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border  mr-[20px] border-gray-300 p-[10px] max-w-[147px] rounded-md w-full"
          />
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 p-[10px] max-w-[147px] rounded-md w-full"
          />
      </form>
    </div>
  );
};

export default DateInputForm;

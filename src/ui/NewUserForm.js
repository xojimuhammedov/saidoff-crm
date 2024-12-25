import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ addUser }) {
  const colors = ["#717EEE", "#FF7783", "#FFBB56"]; // Ranglar massivini yuqorida e'lon qildik

  // Tasodifiy rang tanlash funksiyasi
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const [user, setUser] = useState({
    id: uuidv4(),
    backgroundColor: getRandomColor(), // Tasodifiy rangni olish
    image1: "",
    image2: "",
    image3: "",
    LoyhaNomi: "",
    Boshlanish_Sana: "",
    Tugash_Sana: "",
    progress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>O'quvchi Qo'shish</h2>
          <form className="rounded-full" onSubmit={handleSubmit}>
            {/* 1-rasm uchun input */}
            <label
              className="mb-[8px] w-full rounded-full border border-2 border-black px-[10px] pt-[3px] hover:border-[#FE7600]"
              htmlFor="image1"
            >
              <span className="">Image_1:</span>
              <input
                id="image1"
                className="hidden max-w-[245px] rounded-full border border-black bg-none text-[16px]"
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    image1: e.target.value,
                  }));
                }}
                type="file"
                accept="image/*"
              />
            </label>
            {/* 2-rasm uchun input */}
            <label
              className="mb-[8px] w-full rounded-full border border-2 border-black px-[10px] pt-[3px] hover:border-[#FE7600]"
              htmlFor="image2"
            >
              <span className="">Image_2:</span>
              <input
                id="image2"
                className="hidden max-w-[245px] rounded-full border border-black bg-none text-[16px]"
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    image2: e.target.value,
                  }));
                }}
                type="file"
                accept="image/*"
              />
            </label>
            {/* 3-rasm uchun input */}
            <label
              className="mb-[8px] w-full rounded-full border border-2 border-black px-[10px] pt-[3px] hover:border-[#FE7600]"
              htmlFor="image3"
            >
              <span className="">Image_3:</span>
              <input
                id="image3"
                className="hidden max-w-[245px] rounded-full border border-black bg-none text-[16px]"
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    image3: e.target.value,
                  }));
                }}
                type="file"
                accept="image/*"
              />
            </label>
            Loyiha Nomi:
            <input
              className="mb-[8px] w-full rounded-full border border-2 border-black px-[10px] hover:border-[#FE7600]"
              type="text"
              value={user.LoyhaNomi}
              style={{ fontSize: "15px" }}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, LoyhaNomi: e.target.value }))
              }
              required
            />
            <label className="mb-2">
              <input
                style={{ fontSize: "20px" }}
                type="date"
                value={user.Boshlanish_Sana}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    Boshlanish_Sana: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label className="mb-2">
              <input
                type="date"
                style={{ fontSize: "20px" }}
                value={user.Tugash_Sana}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    Tugash_Sana: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label className="mb-2">
              Progress:
              <input
                style={{ fontSize: "20px" }}
                type="number"
                value={user.progress}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    progress: e.target.value,
                  }))
                }
                required
                min="0"
                max="100"
              />
            </label>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;

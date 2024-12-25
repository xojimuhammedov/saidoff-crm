import React, { useEffect } from "react";
import UserList from "@/ui/UserList";
import NewUserForm from "@/ui/NewUserForm";

const AddStudent = () => {
  const [users, setUsers] = React.useState([]);
  const [showmodal, setShowModal] = React.useState(false);

  // Foydalanuvchilarni localStorage'dan olish
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // Foydalanuvchilarni localStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
    setShowModal(false);
  };

  return (
    <div

      className="App container  mx-auto"
    >
   <div className="pl-[42px]">
     <div className="flex">

       <h1 className="text-2xl font-bold">Create user</h1>
       <p className="p-4">
         {users.length > 0
           ? "You have: " + users.length + " Users"
           : "No user :)"}
       </p>
       <button
         onClick={() => setShowModal(true)}
         className="font-inherit flex-grow  ml-[955px] cursor-pointer self-center rounded-[0.2rem] border-0 bg-[#F45050] px-6 py-2 font-medium text-white"
       >
         Create user
       </button>
     </div>
     <div className="text-[10rem] font-bold opacity-20 text-[#ccc] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">{users.length === 0 && <h2>No Users</h2>}</div>
     <UserList users={users} deleteUser={deleteUser} />
     {showmodal && <NewUserForm addUser={addUser} />}
   </div>

    </div>
  );
};

export default AddStudent;

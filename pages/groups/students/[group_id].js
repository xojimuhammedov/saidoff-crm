import React from "react";
import MainLayout from "@/layouts/MainLayout";
import GroupDetailTableView from "@/container/Groups/GroupDetailTableView";

function GroupStudents() {
  return <MainLayout>
    <GroupDetailTableView/>
  </MainLayout>;
}

export default GroupStudents;

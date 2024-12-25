import React, { useEffect, useState } from "react";
import { Projects } from "../../../pages/api/data";
import { useRouter } from "next/router";
import { Icons } from "#/icon/icons";
import Image from "next/image";
import Link from "next/link";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ProjectsTaskList() {
  const router = useRouter();
  const { project_id } = router.query;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Projects.getProjectTasks(project_id));
  }, [router]);

  // Drag-and-drop tugagandan keyin elementlarni joylashtirish
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Agar destination bo'lmasa (maqsad joyiga tashlanmasa), hech nima qilmaymiz
    if (!destination) return;

    // Bosqichdagi vazifalarni yangilash
    const sourceStageIndex = data.findIndex((stage) => stage.name === source.droppableId);
    const destinationStageIndex = data.findIndex((stage) => stage.name === destination.droppableId);

    const sourceTasks = Array.from(data[sourceStageIndex].tasks);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceStageIndex === destinationStageIndex) {
      // Bitta bosqich ichida ko'chirish
      sourceTasks.splice(destination.index, 0, movedTask);
      const newData = Array.from(data);
      newData[sourceStageIndex].tasks = sourceTasks;
      setData(newData);
    } else {
      // Boshqa bosqichga ko'chirish
      const destinationTasks = Array.from(data[destinationStageIndex].tasks);
      destinationTasks.splice(destination.index, 0, movedTask);
      const newData = Array.from(data);
      newData[sourceStageIndex].tasks = sourceTasks;
      newData[destinationStageIndex].tasks = destinationTasks;
      setData(newData);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-10">
        <h4 className="mt-6 text-[26px] text-sky-950">Proektlar</h4>

        {/* DRAG AND DROP KONTEKST */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="mt-12 flex items-start gap-x-5">
            {data?.map((stage, stageIndex) => (
              <Droppable droppableId={stage.name} key={stageIndex}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="w-[300px] min-w-[300px] overflow-hidden rounded-t-[8px] border-b-[3px] border-slate-50"
                  >
                    {/* Bosqich sarlavhasi */}
                    <div className="flex h-12 items-center justify-between gap-5 bg-gray-200/60 px-5 pb-3 pt-4">
                      <h4 className="text-[14px] text-slate-500">{stage?.name}</h4>
                      <button>
                        <Icons.Options400 className="w-6 stroke-stone-400" />
                      </button>
                    </div>

                    {/* Bosqichdagi vazifalar */}
                    <div className="bg-white p-[10px] pb-5">
                      <ul className="flex flex-col gap-y-4">
                        {stage?.tasks?.map((task, taskIndex) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id.toString()}
                            index={taskIndex}
                          >
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="rounded-[8px] bg-gray-100 p-3 pb-5"
                              >
                                <div className="flex items-start justify-between gap-x-2">
                                  <p className="text-[14px] leading-[1.4] text-slate-500">
                                    {task?.text}
                                  </p>
                                  <button>
                                    <Icons.Pencil700 className="w-4 fill-black" />
                                  </button>
                                </div>

                                <Link href={`/projects/tasks/comments/${task?.id}`}>
                                  <div className="mt-5 flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-x-2">
                                      <Icons.Clock400 className="w-5 fill-primary" />
                                      <p className="text-[14px] leading-[1.4] text-slate-500">
                                        {getDottedDateString(task.start_date)}
                                        &nbsp;-&nbsp;
                                        {getDottedDateString(task.end_date)}
                                      </p>
                                    </div>

                                    {/* Foydalanuvchilar */}
                                    <ul className="flex items-center">
                                      {task?.users?.map((user, userIndex) => (
                                        <li
                                          key={userIndex}
                                          className="ml-[-6px] aspect-square w-6 overflow-hidden rounded-full border border-white bg-white"
                                          style={{
                                            zIndex: task?.users?.length - userIndex,
                                          }}
                                        >
                                          <Image
                                            src={user?.image}
                                            alt="User Image"
                                            height={1000}
                                            width={1000}
                                            className="h-full w-full object-cover"
                                          />
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </Link>
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </ul>

                      <button className="mt-5 rounded-[12px] bg-gray-100 px-7 py-2">
                        <p className="text-[14px] leading-[1.4] text-black">
                          +Task qo'shish
                        </p>
                      </button>
                    </div>
                  </div>
                )}
              </Droppable>
            ))}

            {/* Yangi bosqich qo'shish tugmasi */}
            <div>
              <button className="rounded-[6px] bg-white px-11 py-2">
                <p className="text-[14px] leading-[1.4] text-primary">
                  +Stage qo'shish
                </p>
              </button>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

// Sana formatlash funksiyasi (dd.mm formatida)
function getDottedDateString(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}`;
}

"use client";
import { TaskType } from "@/interfaces";
import { taskApi } from "@/lib/task";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AnimatedCheck from "./AnimatedCheck";

interface Props {
  data: TaskType;
}
const TaskItem: React.FC<Props> = ({ data }) => {
  const router = useRouter;
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleUpdateTask = async (value: boolean) => {
    setLoading(true);
    await taskApi.update({ completed: value });
    setIsEdited(value);
    setLoading(false);
  };
  return (
    <div className="flex bg-white dark:bg-[#1c1c1c] p-2mb-2 last:mb-0 rounded cursor-pointer">
      <div className="basis-8 mr-2 ">
        <AnimatedCheck
          checked={isEdited}
          toggle={() => handleUpdateTask(!isEdited)}
        />
        .
      </div>
      <div className="flex flex-1">Input</div>
    </div>
  );
};

export default TaskItem;

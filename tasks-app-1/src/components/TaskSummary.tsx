import { TrashIcon } from "@heroicons/react/24/outline";
import type { TaskType } from "../types/task";

interface TaskSummaryProps {
  tasks: TaskType[];
  deleteAllCompleted: () =>  void;
}

export default function TaskSummary({
  tasks,
  deleteAllCompleted
}: TaskSummaryProps) {
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="flex gap-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
      <p className="flex items-center">
        {completedTasks.length}/{tasks.length} erledigt!
      </p>
      {completedTasks.length > 0 && (
        <button
        onClick={deleteAllCompleted}
        className={"p-2 rounded cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-900 text-red-500" }
      >
        <TrashIcon className="size-5" />
        </button>
      )}
    </div>
  )
}

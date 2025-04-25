import DefaultLayout from "@/layouts/default";
import KanbanBoardContainer from "./KanbanBoardContainer";

export default function KanbanBoardPage() {
  return (
    <DefaultLayout>
      <div className="h-full bg-background flex flex-col">
        <main className="flex-1 flex flex-col px-6 pb-6">
          <KanbanBoardContainer />
        </main>
      </div>
    </DefaultLayout>
  );
}

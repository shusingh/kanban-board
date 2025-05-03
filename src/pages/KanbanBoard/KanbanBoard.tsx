import KanbanBoardContainer from "./KanbanBoardContainer";
import DefaultLayout from "@/layouts/default";

/**
 * KanbanBoardPage component that serves as the main container for the Kanban board
 *
 * @component
 * @returns {JSX.Element} The rendered Kanban board page with layout and container
 */
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

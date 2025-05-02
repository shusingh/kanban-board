import { BoardType } from "@/types/board";

export const defaultBoard: BoardType = {
  id: "board-1",
  title: "My Kanban Board",
  columns: [
    { id: "col-1", title: "To Do", position: 0, cards: [] },
    { id: "col-2", title: "In Progress", position: 1, cards: [] },
    { id: "col-3", title: "Done", position: 2, cards: [] },
  ],
};

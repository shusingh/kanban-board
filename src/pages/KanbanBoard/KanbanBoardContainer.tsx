import type { BoardType, CardType } from '@/types/board';

import { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import Column from './components/Column';
import LoadingOverlay from './components/LoadingOverlay';

import { loadBoard, saveBoard } from '@/utils/storage';
import { defaultBoard } from '@/data/defaultBoard';

export default function KanbanBoardContainer() {
  const [board, setBoard] = useState<BoardType | null>(null);

  useEffect(() => {
    const saved = loadBoard();

    setBoard(saved ?? defaultBoard);
  }, []);

  const makeId = () => crypto.randomUUID();

  const handleAddCard = (columnId: string, title: string) => {
    if (!board) return;
    const updated = { ...board };
    const col = updated.columns.find(c => c.id === columnId);

    if (col) {
      const newCard: CardType = {
        id: makeId(),
        columnId,
        title,
        position: col.cards.length,
      };

      col.cards = [...col.cards, newCard];
    }
    setBoard(updated);
    saveBoard(updated);
  };

  const handleDeleteCard = (columnId: string, cardId: string) => {
    if (!board) return;
    const updated = { ...board };
    const col = updated.columns.find(c => c.id === columnId);

    if (col) {
      col.cards = col.cards.filter(c => c.id !== cardId).map((c, i) => ({ ...c, position: i }));
    }
    setBoard(updated);
    saveBoard(updated);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || !board) return;
    const updated = { ...board };
    const { source, destination } = result;

    // Only card moves within/between columns
    const srcCol = updated.columns.find(c => c.id === source.droppableId)!;
    const dstCol = updated.columns.find(c => c.id === destination.droppableId)!;
    const [moved] = srcCol.cards.splice(source.index, 1);

    dstCol.cards.splice(destination.index, 0, moved);
    srcCol.cards = srcCol.cards.map((c, i) => ({ ...c, position: i }));
    dstCol.cards = dstCol.cards.map((c, i) => ({
      ...c,
      position: i,
      columnId: dstCol.id,
    }));

    setBoard(updated);
    saveBoard(updated);
  };

  if (!board) return <LoadingOverlay />;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex h-full space-x-4 overflow-x-auto px-2 py-2">
        {board.columns.map(col => (
          <Column
            key={col.id}
            column={col}
            onAddCard={handleAddCard}
            onDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

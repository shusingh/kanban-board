import { Droppable } from '@hello-pangea/dnd';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import type { ColumnType } from '@/types/board';
import CardComponent from './Card';
import AddCardForm from './AddCardForm';

export type ColumnProps = {
  column: ColumnType;
  onAddCard: (columnId: string, title: string) => void;
  onDeleteCard: (columnId: string, cardId: string) => void;
};

export default function Column({ column, onAddCard, onDeleteCard }: ColumnProps) {
  const bgColors = [
    'bg-red-100 dark:bg-red-900',
    'bg-yellow-100 dark:bg-yellow-900',
    'bg-green-100 dark:bg-green-900',
  ];
  const idx = column.position;
  const cardBgClass = bgColors[idx] || 'bg-default-100';

  return (
    <Card
      as="div"
      className="flex-1 flex flex-col h-full bg-default-100 text-foreground"
      shadow="none"
      radius="md"
    >
      <CardHeader as="div" className="px-4 py-2 font-medium border-b border-border">
        <div className="flex flex-col">
          <span>{column.title}</span>
          <span className="text-xs text-default-500">Double-click a card to delete it</span>
        </div>
      </CardHeader>

      <Droppable droppableId={column.id} type="CARD">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1 overflow-y-auto px-2 py-1"
          >
            <CardBody className="h-full flex flex-col space-y-2">
              {column.cards.map((card, idx) => (
                <CardComponent
                  key={card.id}
                  card={card}
                  index={idx}
                  colorClass={`${cardBgClass} text-foreground`}
                  onDelete={() => onDeleteCard(column.id, card.id)}
                />
              ))}
              {provided.placeholder}
            </CardBody>
          </div>
        )}
      </Droppable>

      <CardFooter as="div" className="p-2 border-t border-border">
        <AddCardForm onAdd={title => onAddCard(column.id, title)} />
      </CardFooter>
    </Card>
  );
}

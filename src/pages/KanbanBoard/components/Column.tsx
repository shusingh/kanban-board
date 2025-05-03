import type { ColumnType } from "@/types/board";
import { Droppable } from "@hello-pangea/dnd";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import CardComponent from "./Card";
import AddCardForm from "./AddCardForm";

interface ColumnProps {
  column: ColumnType;
  onAddCard: (columnId: string, title: string) => void;
  onDeleteCard: (columnId: string, cardId: string) => void;
  onEditCard: (columnId: string, cardId: string, title: string) => void;
}

/**
 * Column component that represents a single column in the Kanban board
 *
 * @component
 * @param {ColumnProps} props - The props for the Column component
 * @returns {JSX.Element} The rendered column with cards and add card form
 */
export default function Column({ column, onAddCard, onDeleteCard, onEditCard }: ColumnProps) {
  // Using a consistent color for all cards
  const cardBgClass = "bg-[#F5F5F5] dark:bg-[#22272B]";

  return (
    <Card
      as="div"
      className="flex-1 flex flex-col h-[calc(100vh-18rem)] bg-gray-200 dark:bg-[#161A1D] text-foreground"
      radius="sm"
      shadow="none"
    >
      <CardHeader as="div" className="px-4 py-2 font-medium">
        <div className="flex items-baseline justify-between">
          <span className="text-base text-default-500">{column.title}</span>
          <span className="text-xs -mb-0.5 ml-2 text-default-500">{column.cards.length}</span>
        </div>
      </CardHeader>

      <Droppable droppableId={column.id} type="CARD">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1 overflow-y-auto px-2 py-1 min-h-0"
          >
            <CardBody className="h-full flex flex-col space-y-2">
              {column.cards.map((card, idx) => (
                <CardComponent
                  key={card.id}
                  card={card}
                  colorClass={`${cardBgClass} text-foreground`}
                  index={idx}
                  onDelete={() => onDeleteCard(column.id, card.id)}
                  onEdit={title => onEditCard(column.id, card.id, title)}
                />
              ))}
              {provided.placeholder}
            </CardBody>
          </div>
        )}
      </Droppable>

      <CardFooter as="div" className="px-2 py-2">
        <AddCardForm onAdd={title => onAddCard(column.id, title)} />
      </CardFooter>
    </Card>
  );
}

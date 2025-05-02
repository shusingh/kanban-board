import type { CardType } from "@/types/board";
import { Draggable } from "@hello-pangea/dnd";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Card as HUICard, CardBody } from "@heroui/card";
import { Trash2 } from "lucide-react";

export type CardProps = {
  card: CardType;
  index: number;
  colorClass?: string;
  onDelete: () => void;
};

export default function Card({ card, index, colorClass = "", onDelete }: CardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="w-full cursor-grab"
          >
            <HUICard className={`w-full ${colorClass}`} radius="sm" shadow="none">
              <CardBody className="grid grid-cols-[1fr,auto] gap-2">
                <div className="flex items-center">{card.title}</div>
                <div className="flex items-center">
                  <button
                    onClick={onOpen}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Delete card"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </CardBody>
            </HUICard>
          </div>
        )}
      </Draggable>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader>Delete Card</ModalHeader>
              <ModalBody>Are you sure you want to delete this task?</ModalBody>
              <ModalFooter className="space-x-2">
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onDelete();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

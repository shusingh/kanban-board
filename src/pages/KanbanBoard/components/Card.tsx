import { Draggable } from '@hello-pangea/dnd';
import type { CardType } from '@/types/board';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react';
import { Card as HUICard, CardBody } from '@heroui/card';

export type CardProps = {
  card: CardType;
  index: number;
  colorClass?: string;
  onDelete: () => void;
};

export default function Card({ card, index, colorClass = '', onDelete }: CardProps) {
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
            onDoubleClick={onOpen}
          >
            <HUICard className={`w-full ${colorClass}`} radius="md" shadow="none">
              <CardBody>{card.title}</CardBody>
            </HUICard>
          </div>
        )}
      </Draggable>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader>Delete Card</ModalHeader>
              <ModalBody>Are you sure you want to delete "{card.title}"?</ModalBody>
              <ModalFooter className="space-x-2">
                <Button color="danger" variant="light" onPress={onClose}>
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

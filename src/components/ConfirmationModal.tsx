import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";

type ConfirmationModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
};

export default function ConfirmationModal({
  isOpen,
  onOpenChange,
  title,
  message,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <ModalFooter className="space-x-2">
              <Button variant="light" onPress={onClose}>
                {cancelText}
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                {confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

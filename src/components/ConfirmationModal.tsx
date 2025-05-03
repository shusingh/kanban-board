import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Button } from "@heroui/button";

interface ConfirmationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

/**
 * ConfirmationModal component that displays a modal dialog for confirming actions
 *
 * @component
 * @param {ConfirmationModalProps} props - The props for the ConfirmationModal component
 * @returns {JSX.Element} The rendered confirmation modal with header, body, and footer
 */
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
            <ModalHeader className="text-default-600">{title}</ModalHeader>
            <ModalBody className="text-default-500">{message}</ModalBody>
            <ModalFooter className="space-x-2">
              <Button variant="light" onPress={onClose}>
                {cancelText}
              </Button>
              <Button
                color="primary"
                variant="flat"
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

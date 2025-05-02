import { Spinner } from "@heroui/react";

export default function LoadingOverlay() {
  return (
    <div className="flex items-center justify-center h-64">
      <Spinner />
    </div>
  );
}

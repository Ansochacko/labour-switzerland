import React from "react";

interface AdPlaceholderProps {
  slotId?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export function AdPlaceholder({
  slotId = "default-slot",
  format = "horizontal",
  className = "",
}: AdPlaceholderProps) {
  // In V1, AdSense readiness is preserved via structural container wrappers
  // without intrusive scripts, fake graphics, or layout-shifting boxes.
  return (
    <div
      data-ad-slot={slotId}
      data-ad-format={format}
      className={`ad-container-slot my-4 w-full flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Invisible placeholder hook ready for future publisher configuration */}
    </div>
  );
}

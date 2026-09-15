import type { ProximityImage } from "@/lib/questions";
import { cn } from "@/lib/utils";

const SRC: Record<ProximityImage, string> = {
  "hands-icons": "/proximity/hands-icons.jpg",
  "four-hands": "/proximity/four-hands.jpg",
  "kids-group": "/proximity/kids-group.jpg",
  molecule: "/proximity/molecule.jpg",
};

export function ProximityArt({
  image,
  selected,
  className,
}: {
  image: ProximityImage;
  selected?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-surface-2",
        selected ? "ring-2 ring-accent ring-inset" : "",
        className,
      )}
    >
      <img
        src={SRC[image]}
        alt=""
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

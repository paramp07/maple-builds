import Right from "@/public/right-icon.png";
import Image from "next/image";

export default function RightIcon({ size, className }) {
    return (
        <Image
            priority
            src={Right}
            height={size}
            width={size}  // Ensure the icon maintains its aspect ratio
            className={className}  // Apply the passed className
        />
    );
}

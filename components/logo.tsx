import Image, { ImageProps } from "next/image";
import KinesiaLogo from "@/assets/kinesia-labs.jpg";

type LogoProps = Omit<ImageProps, "src" | "alt"> & { className?: string };

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Image
      src={KinesiaLogo}
      alt="Kinesia Labs"
      className={className}
      style={{ height: "auto" }}
      priority
      {...props}
    />
  );
};

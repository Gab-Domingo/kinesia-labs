import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt"> & { className?: string };

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Image
      src="/assets/logo/Kinesia-Logo.png"
      alt="Kinesia Labs"
      width={120}
      height={40}
      className={className}
      style={{ height: "auto" }}
      priority
      {...props}
    />
  );
};

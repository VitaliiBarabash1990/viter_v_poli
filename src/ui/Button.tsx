import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  iconSrc?: string;
  variant?: "primary" | "outline";
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  iconSrc,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const base =
    "group flex items-center justify-center gap-3 rounded-[50px] transition duration-300 text-[16px] lg:text-[18px] cursor-pointer overflow-hidden w-full";

  const variants = {
    primary: "bg-[#20311B] text-white hover:bg-[#20311B]",
    outline:
      "bg-transparent border border-[#FFFFFF] text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#FFFFFF]",
  };

  const responsiveHeight = "h-[40px] md:h-[54px]";

  const isDown = iconSrc?.includes("down");

  const iconElement = iconSrc ? (
    <div
      className={clsx(
        "transition-transform duration-300 ease-out",
        isDown
          ? "group-hover:animate-[arrow-bounce-y_1.8s_infinite_ease-in-out]"
          : "group-hover:translate-x-1.5",
      )}
    >
      <Image src={iconSrc} alt="" width={20} height={20} unoptimized />
    </div>
  ) : null;

  const classes = clsx(base, variants[variant], responsiveHeight, className);

  const content = (
    <>
      {children}
      {iconElement}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

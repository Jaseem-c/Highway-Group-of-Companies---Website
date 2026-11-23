import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
};

/** Page-width wrapper: 1440px max with fluid gutters. */
export function Container({ as: Tag = "div", className = "", children, id }: Props) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}

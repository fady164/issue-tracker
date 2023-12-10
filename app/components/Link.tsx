import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;

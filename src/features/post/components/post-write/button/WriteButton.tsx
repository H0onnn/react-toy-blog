import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@/shared/components/ui/Button";
import { Icon } from "@/shared/components/ui";

interface Props extends ButtonProps {
  children: React.ReactNode;
  href: string;
  imgSize?: number;
}

export const WriteButton = ({
  children,
  href,
  imgSize = 24,
  ...props
}: Props) => {
  return (
    <Link to={href}>
      <Button
        {...props}
        rightSlot={<Icon src="/icons/plus.svg" size={imgSize} />}
      >
        {children}
      </Button>
    </Link>
  );
};

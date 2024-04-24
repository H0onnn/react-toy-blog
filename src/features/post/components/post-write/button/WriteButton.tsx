import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@/shared/components/ui/Button";

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
        rightSlot={
          <img
            src="/icons/plus.svg"
            alt="plus"
            width={imgSize}
            height={imgSize}
          />
        }
      >
        {children}
      </Button>
    </Link>
  );
};

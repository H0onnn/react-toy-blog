import styled from "styled-components";

import { THEMES } from "@/shared/styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "goast";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth,
  leftSlot,
  rightSlot,
  style,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      style={style}
    >
      {leftSlot !== null ? leftSlot : null}
      {children}
      {rightSlot !== null ? rightSlot : null}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  white-space: nowrap;
  border-radius: 1.6rem;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.1rem 1rem;

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return THEMES.white;
      case "secondary":
        return THEMES.darkgray;
      case "outline" || "goast":
        return THEMES.darkgray;
    }
  }};
  background-color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return THEMES.primary;
      case "secondary":
        return THEMES.secondary;
      case "outline":
        return THEMES.white;
      case "goast":
        return THEMES.gray;
    }
  }};
  border: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `1px solid ${THEMES.primary}`;
      case "secondary":
        return `1px solid ${THEMES.secondary}`;
      case "outline":
        return `1px solid ${THEMES.darkgray}`;
      case "goast":
        return `1px solid ${THEMES.gray}`;
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "2.6rem";
      case "medium":
        return "3rem";
      case "large":
        return "3.4rem";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1.2rem";
      case "medium":
        return "1.4rem";
      case "large":
        return "1.6rem";
    }
  }};

  &:hover {
    background-color: ${({ variant }) => {
      switch (variant) {
        case "primary":
          return THEMES.hover;
        case "secondary":
          return THEMES.secondaryHover;
        case "outline":
          return THEMES.gray;
        case "goast":
          return THEMES.mediumgray;
      }
    }};

    border: ${({ variant }) => {
      switch (variant) {
        case "primary":
          return `1px solid ${THEMES.hover}`;
        case "secondary":
          return `1px solid ${THEMES.secondaryHover}`;
        case "outline":
          return `1px solid ${THEMES.gray}`;
        case "goast":
          return `1px solid ${THEMES.mediumgray}`;
      }
    }};
  }
`;

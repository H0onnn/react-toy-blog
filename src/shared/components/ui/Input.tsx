import { forwardRef } from "react";

import styled from "styled-components";

import { THEMES } from "@/shared/styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onVChange: (value: string) => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode | "reset";
}

const Input = (
  {
    placeholder,
    value,
    onVChange,
    required = false,
    leftSlot,
    rightSlot,
    ...props
  }: Props,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <Container>
      {leftSlot !== null ? leftSlot : null}
      <input
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => onVChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        tabIndex={0}
      />
      {rightSlot !== null ? rightSlot : null}
    </Container>
  );
};

const _Input = forwardRef<HTMLInputElement, Props>(Input);
export { _Input as Input };

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 0.5rem;

  border-radius: 0.8rem;
  border: 1px solid ${THEMES.mediumgray};
  padding: 1rem;

  font-size: 1.4rem;
  color: ${THEMES.black};

  &:focus-within {
    border-color: ${THEMES.primary};
  }

  input {
    width: 100%;
    flex: 1;

    ::placeholder {
      color: ${THEMES.darkgray};
    }
  }
`;

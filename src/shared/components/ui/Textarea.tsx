import { forwardRef } from "react";

import styled from "styled-components";

import { THEMES } from "@/shared/styles";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value: string;
  onVChange: (value: string) => void;
}

const Textarea = (
  { placeholder, value, onVChange, required = false, style, ...props }: Props,
  ref: React.Ref<HTMLTextAreaElement>
) => {
  return (
    <Container>
      <textarea
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => onVChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        tabIndex={0}
        style={style}
      />
    </Container>
  );
};

const _Textarea = forwardRef<HTMLTextAreaElement, Props>(Textarea);
export { _Textarea as Textarea };

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

  textarea {
    width: 100%;
    flex: 1;

    ::placeholder {
      color: ${THEMES.darkgray};
    }
  }
`;

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.textarea`
  resize: none;
  overflow: hidden;
  width: 100%;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border-color: #808d94;
  ::placeholder {
    color: #808d94;
  }
  &:hover {
    border-color: #000000;
  }
  &:focus {
    color: #000000;
    border-color: #0077c2;
    outline: none;
  }
`;

export type TextAreaProps = {
  content?: string;
};

export function TextArea({ content }: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string | undefined>(content);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <TextAreaWrapper
      ref={textAreaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="write a message..."
    />
  );
}

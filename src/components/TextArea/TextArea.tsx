import type { KeyboardEvent } from 'react';
import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div<{ maxHeight: number }>`
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 2px solid #808d94;
  max-height: ${({ maxHeight }) => maxHeight}px;
  overflow-y: auto;
  &:hover {
    border-color: #000;
  }
  &:focus {
    color: #000000;
    border-color: #0077c2;
    outline: none;
  }
  &:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: #808d94;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e1eff7;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #afbdc4;
    border-radius: 4px;
  }
`;

export type TextAreaProps = {
  html: string;
  maxHeight?: number;
  onSend?: () => void;
};

export function TextArea({ html, maxHeight, onSend }: TextAreaProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current!.innerHTML !== html) {
      divRef.current!.innerHTML = html;
    }
  }, [html]);

  function onChange() {
    focusEditableElement(divRef.current!);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.code === 'Enter') {
      e.preventDefault();
      onSend?.();
    }
  }

  return (
    <TextAreaWrapper
      contentEditable
      role="textbox"
      aria-multiline="false"
      placeholder="write a message..."
      ref={divRef}
      maxHeight={maxHeight ? maxHeight : 100}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

function focusEditableElement(element: HTMLElement) {
  const selection = window.getSelection()!;
  const range = document.createRange();
  const lastChild = element.lastChild || element;

  if (!lastChild || !lastChild.nodeValue) {
    element.focus();
    return;
  }

  range.selectNodeContents(lastChild);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

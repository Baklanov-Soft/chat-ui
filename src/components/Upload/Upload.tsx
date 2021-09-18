import type { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';
import type {
  ChangeHandler,
  InternalFieldName,
  RefCallBack,
} from 'react-hook-form';
import styled from 'styled-components';

const LabelWrapper = styled.label`
  user-select: none;
  color: #0077c2;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
  input {
    display: none;
  }
`;

export type UploadProps = {
  accept?: string;
  children: string;
  onFileChange?: (f: File) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeHandler;
  ref?: RefCallBack;
  name?: InternalFieldName;
};

export function Upload({
  accept,
  children,
  onFileChange,
  onChange,
  onBlur,
  ref,
  name,
}: UploadProps) {
  const [fileName, setFileName] = useState<string>();
  function onChangeInternal(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileChange?.(file);
      onChange?.(e);
    }
  }
  return (
    <LabelWrapper>
      <input
        type="file"
        accept={accept}
        onChange={onChangeInternal}
        onBlur={onBlur}
        ref={ref}
        name={name}
      />
      {fileName ? fileName : children}
    </LabelWrapper>
  );
}

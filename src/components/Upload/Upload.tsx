import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.label`
  font-size: 16px;
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
  children: string;
};

export function Upload({ children }: UploadProps) {
  const [file, setFile] = useState<File>();
  function onChange({ target: { files } }: ChangeEvent<HTMLInputElement>) {
    if (files) {
      setFile(files[0]);
    }
  }
  return (
    <LabelWrapper>
      <input type="file" accept="image/*" onChange={onChange} />
      {file ? file.name : children}
    </LabelWrapper>
  );
}

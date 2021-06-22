import type { CSSProperties } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClosedEye } from './closed-eye.svg';
import { ReactComponent as OpenEye } from './open-eye.svg';

const Toggle = styled.div<
  { dim: string } & Omit<CSSProperties, 'width' | 'height'>
>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${(p) => p.dim};
  height: ${(p) => p.dim};
  fill: #808d94;
`;

export type EyeToggleProps = {
  onChangeVisibility?: (visible: boolean) => void;
  dim?: string;
};

export function EyeToggle({ onChangeVisibility, dim }: EyeToggleProps) {
  const [visible, setVisible] = useState(false);
  function handleChangeVisibility() {
    setVisible((s) => !s);
    onChangeVisibility?.(visible);
  }
  return (
    <Toggle
      role="switch"
      aria-checked={visible}
      onClick={handleChangeVisibility}
      dim={dim ?? '18px'}
    >
      {visible ? <OpenEye /> : <ClosedEye />}
    </Toggle>
  );
}

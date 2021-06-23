import type { CSSProperties } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClosedEye } from './closed-eye.svg';
import { ReactComponent as OpenEye } from './open-eye.svg';

const Toggle = styled.div<
  { dim: string } & Omit<CSSProperties, 'width' | 'height'>
>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${({ dim }) => dim};
  height: ${({ dim }) => dim};
  fill: #808d94;
`;

export type EyeToggleProps = {
  visible: boolean;
  onChangeVisibility?: (visible: boolean) => void;
  dim: string;
};

export function EyeToggle({
  visible,
  onChangeVisibility,
  dim,
}: EyeToggleProps) {
  return (
    <Toggle
      role="switch"
      aria-checked={visible}
      onClick={() => onChangeVisibility?.(!visible)}
      dim={dim}
    >
      {visible ? <OpenEye /> : <ClosedEye />}
    </Toggle>
  );
}

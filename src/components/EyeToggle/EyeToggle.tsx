import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClosedEye } from './closed-eye.svg';
import { ReactComponent as OpenEye } from './open-eye.svg';

const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: #808d94;
`;

export type EyeToggleProps = {
  initialVisible?: boolean;
  onChangeVisibility?: () => void;
};

export function EyeToggle(
  { initialVisible, onChangeVisibility }: EyeToggleProps = {
    initialVisible: true,
  }
) {
  const [visible, setVisible] = useState(initialVisible);
  function handleChangeVisibility() {
    setVisible((s) => !s);
    onChangeVisibility?.();
  }
  return (
    <Toggle
      role="switch"
      aria-checked={visible}
      onClick={handleChangeVisibility}
    >
      {visible ? <OpenEye /> : <ClosedEye />}
    </Toggle>
  );
}

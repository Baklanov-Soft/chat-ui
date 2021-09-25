import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import TextArea from '../TextArea';
import { ReactComponent as PapperPlane } from './paper-plane.svg';

const ComposerWrapper = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
  button {
    display: flex;
    align-items: center;
    min-width: 131px;
    svg {
      width: 18px;
      height: 18px;
      fill: #fff;
      margin-right: 10px;
    }
  }
`;

export type ComposerProps = {
  text: string;
  setText: (s: string) => void;
  onSend?: () => void;
};

export const Composer: FC<ComposerProps> = ({ text, setText, onSend }) => {
  return (
    <ComposerWrapper>
      <TextArea text={text} setText={setText} onSend={onSend} />
      <Button type="submit" onClick={onSend}>
        <PapperPlane />
        SEND
      </Button>
    </ComposerWrapper>
  );
};

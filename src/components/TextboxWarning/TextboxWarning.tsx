import styled from 'styled-components';
import { ReactComponent as WarnSign } from './warn-sign.svg';

const MessageHelper = styled.div`
  display: flex;
`;

const Sign = styled.div`
  margin: 8px;
  fill: #c31313;
  width: 17px;
  height: 15px;
`;

const Message = styled.div`
  color: #c31313;
  font-size: 12px;
  margin: 8px;
`;

export type TextboxWarningProps = {
  text: string;
};

export function TextboxWarning({ text }: TextboxWarningProps) {
  return (
    <MessageHelper>
      <Sign>
        <WarnSign />
      </Sign>
      <Message>{text}</Message>
    </MessageHelper>
  );
}

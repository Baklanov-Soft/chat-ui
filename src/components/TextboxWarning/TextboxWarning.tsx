import styled from 'styled-components';
import { ReactComponent as WarnSign } from './warn-sign.svg';

const MessageWrapper = styled.div`
  display: flex;
`;

const WarnSignWrapper = styled.div`
  margin: 4px;
  fill: #c31313;
  width: 17px;
  height: 15px;
`;

const Message = styled.div`
  color: #c31313;
  font-size: 12px;
  margin: 4px;
`;

export type TextboxWarningProps = {
  text: string;
};

export function TextboxWarning({ text }: TextboxWarningProps) {
  return (
    <MessageWrapper>
      <WarnSignWrapper>
        <WarnSign />
      </WarnSignWrapper>
      <Message>{text}</Message>
    </MessageWrapper>
  );
}

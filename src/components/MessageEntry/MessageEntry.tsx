import type { CSSProperties } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  font-size: 16px;
  width: 600px;
`;

const AvatarWrapper = styled.div<
  { dim: string } & Omit<CSSProperties, 'width' | 'height'>
>`
  padding: 8px;
  img {
    width: ${({ dim }) => dim};
    height: ${({ dim }) => dim};
    border-radius: 50%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

const UserNameWrapper = styled.span`
  font-weight: bold;
`;

export type MessageEntryProps = {
  avatar: string;
  user: string;
  text: string;
  ts: Date;
};

const MessageWrapper = styled.span`
  padding: 4px;
`;

export function MessageEntry({ avatar, user, text, ts }: MessageEntryProps) {
  return (
    <Wrapper>
      <AvatarWrapper dim="40px">
        <img alt="" src={avatar} />
      </AvatarWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <UserNameWrapper>{user}</UserNameWrapper>
          <span>
            {ts.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </span>
        </TitleWrapper>
        <MessageWrapper>{text}</MessageWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

import type { CSSProperties } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  width: 350px;
  padding: 8px;
  ${({ selected }) => selected && `background-color: #808d94; color: #ffffff;`}
  border-radius: 2px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #e1eff7;
    ${({ selected }) => selected && `color: #000000;`}
  }
`;

const AvatarWrapper = styled.div<
  { dim: string } & Omit<CSSProperties, 'width' | 'height'>
>`
  flex: 0 0 ${({ dim }) => dim};
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
  justify-content: space-around;
  min-width: 0;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

const TruncatedTextWrapper = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UnreadedWrapper = styled.span`
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: #808d94;
  border-radius: 50%;
  color: #ffffff;
`;

export type GroupEntryProps = {
  selected: boolean;
  onSelected: (id: number) => void;
  id: number;
  avatar: string;
  title: string;
  lastMessage: {
    text: string;
    ts: Date;
  };
  unreaded?: number;
};

export function GroupEntry({
  selected,
  onSelected,
  id,
  avatar,
  title,
  lastMessage: { text, ts },
  unreaded,
}: GroupEntryProps) {
  return (
    <Wrapper selected={selected} onClick={() => !selected && onSelected?.(id)}>
      <AvatarWrapper dim="60px">
        <img alt="" src={avatar} />
      </AvatarWrapper>
      <ContentWrapper>
        <RowWrapper>
          <TruncatedTextWrapper>{title}</TruncatedTextWrapper>
          <span>
            {ts.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </RowWrapper>
        <RowWrapper>
          <TruncatedTextWrapper>{text}</TruncatedTextWrapper>
          {!selected && unreaded && (
            <UnreadedWrapper>{unreaded}</UnreadedWrapper>
          )}
        </RowWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

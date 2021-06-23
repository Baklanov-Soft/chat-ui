import type { CSSProperties } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 350px;
  cursor: pointer;
  font-size: 16px;
  ${({ selected }) => selected && `background-color: #808d94;color: #ffffff;`}
  &:hover {
    background-color: #e1eff7;
    ${({ selected }) => selected && `color: #000000;`}
  }
`;

const AvatarWrapper = styled.div<
  { dim: string } & Omit<CSSProperties, 'width' | 'height'>
>`
  flex: 0 0 ${({ dim }) => dim};
  margin-right: 8px;
  img {
    width: ${({ dim }) => dim};
    height: ${({ dim }) => dim};
    border-radius: 50%;
  }
`;

const GroupNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  div {
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TimeStampWrapper = styled.div`
  display: flex;
  flex: 0 0 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  div {
    padding: 8px;
  }
`;

const UnreadedWrapper = styled.div`
  background-color: #808d94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
  margin-right: 8px;
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
  unreaded: number;
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
      <GroupNameWrapper>
        <div>{title}</div>
        <div>{text}</div>
      </GroupNameWrapper>
      <TimeStampWrapper>
        <div>
          {ts.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        {!selected && unreaded && <UnreadedWrapper>3</UnreadedWrapper>}
      </TimeStampWrapper>
    </Wrapper>
  );
}

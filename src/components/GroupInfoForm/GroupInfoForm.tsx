import type { FunctionComponent, SVGProps } from 'react';
import styled from 'styled-components';
import { Link } from '../Link';
import { ReactComponent as InfoSign } from './info.svg';
import { ReactComponent as InviteSign } from './invite.svg';
import { ReactComponent as LeaveSign } from './leave.svg';
import { ReactComponent as MembersSign } from './members.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  align-items: center;
  padding: 0 15px 0 0;
  font-size: 16px;
`;

//#region Header

const HeaderWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 0 15px;
  padding: 15px 0;
  background-color: #afbdc4;
`;

const AvatarWrapper = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  grid-row: 1 / -1;
  justify-self: center;
`;

//#endregion Header

const TextWrapper = styled.span`
  justify-self: start;
  font-size: 16px;
`;

const LinkWrapper = styled(Link)`
  justify-self: start;
  font-size: 16px;
`;

//#region Icons

function styledIcon(component: FunctionComponent<SVGProps<SVGSVGElement>>) {
  return styled(component)`
    width: 30px;
    height: 30px;
    place-self: start center;
  `;
}

const InfoSignWrapper = styledIcon(InfoSign);

const InviteSignWrapper = styledIcon(InviteSign);

const LeaveSignWrapper = styledIcon(LeaveSign);

const MembersSignWrapper = styledIcon(MembersSign);

//#endregion

const MembersListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 4px;
    display: flex;
    align-items: center;
    strong {
      padding-left: 20px;
    }
  }
`;

const AvatarSmallWrapper = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-self: center;
`;

type Member = {
  id: string;
  avatar: string;
  name: string;
};

export type GroupInfoFormProps = {
  avatar: string;
  name: string;
  description: string;
  members?: Member[];
  onInviteMemberClick?: () => void;
  onLeaveClick?: () => void;
};

export function GroupInfoForm({
  avatar,
  name,
  description,
  members,
  onInviteMemberClick,
  onLeaveClick,
}: GroupInfoFormProps) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <AvatarWrapper src={avatar} alt="" />
        <strong>{name}</strong>
        {members && <span>{members.length} members</span>}
      </HeaderWrapper>
      <InfoSignWrapper />
      <TextWrapper>{description}</TextWrapper>
      <InviteSignWrapper />
      <LinkWrapper onClick={onInviteMemberClick}>Invite member</LinkWrapper>
      <LeaveSignWrapper />
      <LinkWrapper onClick={onLeaveClick}>Leave</LinkWrapper>
      <MembersSignWrapper />
      {members && (
        <MembersListWrapper>
          {members.map(({ id, avatar, name }) => (
            <li key={id}>
              <AvatarSmallWrapper src={avatar} alt="" />
              <strong>{name}</strong>
            </li>
          ))}
        </MembersListWrapper>
      )}
    </Wrapper>
  );
}

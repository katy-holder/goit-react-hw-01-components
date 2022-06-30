import user from "../../mock/user.json";
import styled from "styled-components";

const StatusLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const StatusItem = styled.li`
  height: 70px;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  background-color: #c9c1c176;
  flex-direction: column;
`;

const ProfileStats = styled.span`
  margin: 5px;
`;

export const Status = () => {
    return <StatusLink className="stats">
    <StatusItem>
      <ProfileStats className="label">Followers</ProfileStats>
      <ProfileStats className="quantity">{ user.stats.followers}</ProfileStats>
    </StatusItem>
    <StatusItem>
      <ProfileStats className="label">Views</ProfileStats>
      <ProfileStats className="quantity">{ user.stats.views}</ProfileStats>
    </StatusItem>
    <StatusItem>
      <ProfileStats className="label">Likes</ProfileStats>
      <ProfileStats className="quantity">{ user.stats.likes}</ProfileStats>
    </StatusItem>
  </StatusLink>
}

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
  background-color: ${p => p.theme.colors.bgColorStatus};
  flex-direction: column;
`;

const ProfileStats = styled.span`
  margin: 5px;
`;

export const Status = ({stats}) => {
    return <StatusLink className="stats">
    <StatusItem>
      <ProfileStats className="label">Followers</ProfileStats>
      <ProfileStats className="quantity">{ stats.followers}</ProfileStats>
    </StatusItem>
    <StatusItem>
      <ProfileStats className="label">Views</ProfileStats>
      <ProfileStats className="quantity">{ stats.views}</ProfileStats>
    </StatusItem>
    <StatusItem>
      <ProfileStats className="label">Likes</ProfileStats>
      <ProfileStats className="quantity">{ stats.likes}</ProfileStats>
    </StatusItem>
  </StatusLink>
}

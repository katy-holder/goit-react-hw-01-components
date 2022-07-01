import { OnlineStatus } from "../OnlineStatus/OnlineStatus";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FriedsList = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 2px;
    width: 200px;
    margin: 12px;
    padding: 15px;
    box-shadow: 18px -13px 47px -18px rgba(66, 68, 90, 1);
`;

const ImgEl = styled.img`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 15px;
`;

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <Container>
    <FriedsList className="item">
        <OnlineStatus className="status" isOnline={isOnline}></OnlineStatus>
        <ImgEl className="avatar" src={avatar} alt="Avatar" width="48" />
        <p className="name">{name}</p>
        </FriedsList>
    </Container>
    )
};
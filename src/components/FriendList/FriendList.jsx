import PropTypes from "prop-types";
import styled from "styled-components";
import { FriendListItem } from "./FriendsListItem";

const FriedsItem = styled.ul`
    list-style: none;
    margin: 20px 0;
    padding: 0;
`;

export const FriendList = ({friends}) => {
    return ( 
        <FriedsItem className="friend-list">{friends.map(el => {
            return (
                <FriendListItem
                    key={el.key}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}>
                </FriendListItem>
            )
        })}
    </FriedsItem>
    )
};

FriendList.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
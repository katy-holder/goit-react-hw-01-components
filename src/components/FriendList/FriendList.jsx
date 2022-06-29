import PropTypes from "prop-types";
import { FriendListItem } from "./FriendsListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">{friends.map(el => {
            return (
                <FriendListItem
                    key={el.key}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}>
                </FriendListItem>
            )
        })}
    </ul>
    )
};

FriendList.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
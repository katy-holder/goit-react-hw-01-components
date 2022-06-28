import friends from "../FriendList/friends.json";
import PropTypes from "prop-types";

export const FriendList = () => {
    return (
    <ul>{friends.map(el => <li key={el.id}><span>{el.isOnline}</span><img src={el.avatar} alt="User avatar" width="48"></img><p>{el.name}</p>
    </li>)}
    </ul>
)};

FriendList.propTypes = {
    name: PropTypes.string.isRequired,
    onlineStatus: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
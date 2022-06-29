import { OnlineCheckbox } from "./OnlineCheckbox"

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <li className="item">
        <OnlineCheckbox className="status" style={{ backgroundColor: isOnline ? "green" : "red" }}></OnlineCheckbox>
        <img className="avatar" src={avatar} alt="Avatar" width="48" />
        <p className="name">{name}</p>
    </li>
};
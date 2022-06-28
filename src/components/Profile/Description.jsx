import user from "./user.json";

export const Description = () => {
    return <div className="description">
    <img
        src={ user.avatar}
        alt="User avatar"
        className="avatar"/>
    <p className="name">{ user.username }</p>
    <p className="tag">@{ user.tag}</p>
    <p className="location">{ user.location}</p>
</div>
}

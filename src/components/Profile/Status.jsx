import user from "./user.json";

export const Status = () => {
    return <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{ user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{ user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{ user.stats.likes}</span>
    </li>
  </ul>
}

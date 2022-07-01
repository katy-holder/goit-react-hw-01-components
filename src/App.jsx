import { Profile } from "../src/components/Profile/Profile";
import { Statistics } from "../src/components/Statistics/Statistics";
import { FriendList } from "../src/components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionsHistory/TransactionHistory";



import user from "../src/mock/user.json";
import data from "../src/mock/data.json";
import friends from "../src/mock/friends.json";
import transactions from "../src/mock/transactions.json";

export const App = () => {
  return <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />
  </>
};

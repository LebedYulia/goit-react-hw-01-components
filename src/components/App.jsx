import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
import { FriendList } from './friends/FriendList';
import friends from './friends/friends.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList items={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

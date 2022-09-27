import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';

export const FriendList = ({ items }) => {
  return (
    <ul className={css.friendsList}>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

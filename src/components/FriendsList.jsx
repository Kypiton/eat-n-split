import Friend from './Friend';

export default function FriendsList({ friends, selectedFriend, handleSelection }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
      ))}
    </ul>
  );
}

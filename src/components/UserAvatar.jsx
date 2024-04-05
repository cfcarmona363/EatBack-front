const UserAvatar = ({ userImg, userName, onClick }) => {
  return (
    <div
      className="flex justify-center items-center gap-4 cursor-pointer"
      onClick={onClick}
    >
      <img className="rounded-full h-10 w-10 object-cover" src={userImg} />
      <h2>{userName}</h2>
    </div>
  );
};

export default UserAvatar;

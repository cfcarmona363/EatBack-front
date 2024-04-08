import NoImageProfile from "@/assets/noImageProfile";

const UserAvatar = ({ userImg, userName, onClick }) => {
  return (
    <div
      className="flex justify-center items-center gap-4 cursor-pointer"
      onClick={onClick}
    >
      {userImg ? (
        <img className="rounded-full h-10 w-10 object-cover" src={userImg} />
      ) : (
        <div className="rounded-full h-10 w-10 object-cover">
          <NoImageProfile height={50} width={50} />
        </div>
      )}
      <h2>{userName}</h2>
    </div>
  );
};

export default UserAvatar;

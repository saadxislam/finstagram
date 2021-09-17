const User = ({ user }) => {
  return (
    <div className="user-container">
      <div className="profile-pic">
        <img src={user.profile_picture} />
      </div>

      <div className="profile-container">
        <h1>{user.name} </h1>
        <div className="text-container">
          <div className="bio-text">
            <p>
              <strong>Bio</strong>
            </p>
            <p>{user.bio}</p>
          </div>
          <div className="contact">
            <p>
              <strong>Phone</strong>
            </p>
            <p className="pink">{user.phone}</p>
            <p>
              <strong>Email</strong>
            </p>
            <p className="pink">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;


const Profile = () => {
    return (
      <div className="container mt-5">
        <div className="profile-banner d-flex align-items-end p-3">
          <div className="profile-pic">F</div>
          <div className="ms-3 text-white">
            <h5>20 Followers • 10 Following</h5>
          </div>
        </div>
  
        <div className="card mt-3 p-3">
          <div className="d-flex align-items-center">
            <div className="profile-pic">F</div>
            <input
              type="text"
              className="form-control ms-2"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
  
        <div className="d-flex justify-content-between mt-2">
          <h6>Posts</h6>
          <div>
            <button className="btn btn-outline-light btn-sm">Filters</button>
            <button className="btn btn-outline-light btn-sm">Manage posts</button>
          </div>
        </div>
  
        <div className="card mt-3 p-3">
          <div className="d-flex align-items-center">
            <div className="profile-pic">F</div>
            <div className="ms-2">
              <p className="mb-0 fw-bold">Anonymous</p>
              <small>March 3, 2025</small>
            </div>
          </div>
          <p className="mt-2">Been tired and drained lately.</p>
          <div className="d-flex justify-content-between">
            <span>❤️ 5 Hearts</span>
            <span>🔗 3 Shares</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
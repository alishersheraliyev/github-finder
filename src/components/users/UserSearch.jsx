import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { users, searchUsers, clearUser } = useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      alert("Please enter a search term");
    } else {
      searchUsers(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="input w-full pr-40 bg-gray-200 text-black input-lg"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUser} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;

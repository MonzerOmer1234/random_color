import { useEffect, useState } from "react";
import User from "./User";

export default function ProfileFinder() {
  const [username, setUsername] = useState("MonzerOmer1234");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      console.log(data);
      if (data) {
        setUserData(data);
        setLoading(false);
        setUsername("");
      }
    } catch (e) {
      setError(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) {
    return <h1>Fetching User Data ...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value.toLowerCase())}
          name="search-by-username"
          placeholder="Search Github Username..."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null && <User user={userData} />}
    </div>
  );
}

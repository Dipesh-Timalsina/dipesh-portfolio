import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";


export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

    return (
      <>
        <div className="layout">
          <div className="topsection">
            <div className="github-profile-container">
              <div className="input-wrapper">
                <input
                  name="search-by-username"
                  type="text"
                  placeholder="Search Github Username..."
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
              </div>
              {userData !== null ? <User user={userData} /> : null}
            </div>
          </div>
          <div className="learnings">
            <h1>Learnings</h1>
            <ol>
              <li>
                Used the useState hook to manage three different states:
                userName, userData, and loading. userName stores the input value
                for the GitHub username search.
              </li>

              <li>
                Implemented fetchGithubUserData function to fetch GitHub user
                data asynchronously using fetch API.
              </li>
              <li>
                Utilized useEffect hook with an empty dependency array ([]) to
                fetch user data when the component mounts (componentDidMount
                equivalent).
              </li>
              <li>
                Managed user input using an input element and controlled it
                using React state userName.
              </li>
              <li>
                Implemented handleSubmit function to initiate the GitHub API
                request when the "Search" button is clicked.
              </li>
            </ol>
          </div>
        </div>
      
      </>
    );
}

"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const GitHubUser = ({ username }) => {
    
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchGitHubData = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);

        setUserData(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError("Failed to fetch GitHub data.");
        console.error(err);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!userData) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-10">
      {/* User Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={userData.avatar_url}
          alt={userData.login}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
          <p className="text-gray-600">{userData.bio || "No bio provided."}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            View GitHub Profile →
          </a>
        </div>
      </div>

      {/* Contribution Chart */}
      <div className="my-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Contributions</h3>
        <div className="overflow-auto border rounded-lg">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`${username}'s GitHub chart`}
            className="w-full"
          />
        </div>
      </div>

      {/* Repos List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Repositories</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-4 bg-gray-50 border rounded-xl hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-blue-600">{repo.name}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {repo.description || "No description."}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  ⭐ {repo.stargazers_count}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline"
                >
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubUser;

class GithubClient {
  getRepoInfo(repoName, callback) {
    fetch("https://api.github.com/repos/" + repoName)
      .then((response) => response.json())
      .then((repoInfo) => {
        callback(repoInfo);
      });
  }
}

module.exports = GithubClient;

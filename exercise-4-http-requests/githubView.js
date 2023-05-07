class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.repoInputEl = document.querySelector("#repo-name-input");

    const submitButtonEl = document.querySelector("#submit-button");
    submitButtonEl.addEventListener("click", this.addRepoInfo.bind(this));
  }

  display() {
    const info = this.model.getRepoInfo();
    // sets the content of #repo-name el to equal the value of the name property from repo data
    const repoName = document.querySelector("#repo-name");
    repoName.textContent = info.name;
    // Set the content of the #repo-description el to equal the value of the description property from repo data.
    const repoDesc = document.querySelector("#repo-description");
    repoDesc.textContent = info.description;
    // Set the content of #repo-img to equal the value of the image from repo data
    const repoImg = document.querySelector("#repo-img");
    repoImg.src = info.organization.avatar_url;
  }

  addRepoInfo() {
    const repoName = this.repoInputEl.value;
    this.client.getRepoInfo(repoName, (repoInfo) => {
      this.model.setRepoInfo(repoInfo);
      // calling .display inside the callback function ensures that `repoInfo` has the data before trying to access .display method
      this.display();
    });
  }
}

module.exports = GithubView;

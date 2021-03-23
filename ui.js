class UI {
  constructor() {
    this.profile = document.getElementById('profile') 
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Repositories: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
        <span class="badge badge-sucess">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>

        <ul class="line-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member since: ${user.created_at}</li>
        </ul
        </div>
      </div>
    </div>
    <h3>Public Repositories:</h3>
    <div id="repos"></div>
    `
  }
  errorMessage(message, className) {
    this.clearError();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearError();
    }, 3000);
  }

  clearError() {
    const errorMsg = document.querySelector('.alert');
    if(errorMsg) {
      errorMsg.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
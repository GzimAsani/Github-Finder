class Github {
  constructor() {
    this.client_id = '7714d5b7223bec221398';
    this.client_secret = 'd5b26ed178c761ad6d6248afd5fa2d5a5569599a'
    this.repos_count = 10;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
  
    return {
      profile,
      repos
    }
  }
}
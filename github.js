class Github {
  constructor() {
    this.client_id = '7714d5b7223bec221398';
    this.client_secret = 'd5b26ed178c761ad6d6248afd5fa2d5a5569599a'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const profile = await profileResponse.json();
  
    return {
      profile
    }
  }
}
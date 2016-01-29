class UserSerivce {

  /** @ngInject */
  constructor($http, Config) {
    this.$http = $http;
    this.API_URL = Config.API_URL;
    this.users = [];
  }

  getUsers() {
    return this.$http
      .get(`${this.API_URL}/users`)
      .then(res => this.users = res.data);
  }

  getUserById(id) {
    return this.$http
      .get(`${this.API_URL}/users/${id}`)
      .then(res => res.data);
  }

  updateUser(user) {
    return this.$http
      .put(`${this.API_URL}/users/${user.id}`, user)
      .then(res => this.users = this.users.map(
        u => (u.id === res.data.id) ? res.data : u
      ));
  }

  deleteUser(id) {
    return this.$http
      .delete(`${this.API_URL}/users/${id}`)
      .then(() => this.users = this.users.filter(
        user => user.id !== id
      ));
  }

  createUser(user) {
    return this.$http
      .post(`${this.API_URL}/users`, user)
      .then(res => this.users.push(res.data));
  }
}

export default UserSerivce;

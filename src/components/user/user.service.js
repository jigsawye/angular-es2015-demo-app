class UserSerivce {

  /** @ngInject */
  constructor($http, Config) {
    this.$http = $http;
    this.API_URL = Config.API_URL;
  }

  getUsers() {
    return this.$http
      .get(`${this.API_URL}/users`)
      .then(res => res.data);
  }

  getUserById(id) {
    return this.$http
      .get(`${this.API_URL}/users/${id}`)
      .then(res => res.data);
  }

  updateUser(user) {
    return this.$http
      .put(`${this.API_URL}/users/${user.id}`, user)
      .then(res => res.data);
  }

  deleteUser(id) {
    return this.$http
      .delete(`${this.API_URL}/users/${id}`)
      .then(res => res.data);
  }

  createUser(user) {
    return this.$http
      .post(`${this.API_URL}/users`, user)
      .then(res => res.data);
  }
}

export default UserSerivce;

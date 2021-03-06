module.exports = ({ fetch, discourseUrl }, username) =>
  fetch(discourseUrl(`/users/${username}.json`))
    .then(response => response.json())
    .then(body => body.user.groups.map(group => group))

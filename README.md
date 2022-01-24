Unfortunately, I did not find an api on githubApi, in which a response would come with the names
of users and the number of repositories, I tried to do this through additional requests.
but they are very expensive, github limits requests

let userRepos = [];
let usersBylogin = [];
const userReposPromises = users.items.map(user => getUserRepos(user.login));
const usersByLogin = users.items.map(user => getUserByLogin(user.login));

await axios.all(userReposPromises)
  .then((responses)=>{
    userRepos = responses
});

await axios.all(usersByLogin)
  .then((responses)=>{
    usersBylogin = responses
});

setUsers(users.items.map((user, idx) => (
  {...user, repos: userRepos[idx].length, name: usersBylogin[idx].name}))
)

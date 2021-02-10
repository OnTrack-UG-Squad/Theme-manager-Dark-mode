angular.module("doubtfire.sessions.current-user", []).constant("currentUser", {
  id: 0,
  role: "anon",
  profile: {
    name: "Anonymous",
    nickname: "anon"
  }
});

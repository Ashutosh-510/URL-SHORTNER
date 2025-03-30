const sessionIdtoUserMap = new Map();

export const setUser = (id, user) => {
  sessionIdtoUserMap.set(id, user);
};

export default function getUser(id, user) {
  return sessionIdtoUserMap.get(id);
}

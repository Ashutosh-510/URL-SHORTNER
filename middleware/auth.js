import getUser from "../service/auth";

export async function restrictToLoggedinUserOnly(req, res) {
  const userUid = req.cookies.id;

  if (!userUid) res.redirect("/login");

  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

export async function checkAuth(req, res, next) {
  const userUId = req.cookies?.uid;
  const user = getUser(userUId);
  req.user = user;
  next();
}

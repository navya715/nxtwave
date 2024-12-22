app.get("/profile/", authenticateToken, async (request, response) => {
    let { username } = request;
    const selectUserQuery = `SELECT * FROM user WHERE username = '${username}'`;
    const userDetails = await db.get(selectUserQuery);
    response.send(userDetails);
  });
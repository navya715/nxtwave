app.get("/books/", (request, response) => {
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      response.send("Invalid Access Token");
    } else {
      jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
        if (error) {
          response.send("Invalid Access Token");
        } else {
          const getBooksQuery = `
              SELECT
                *
              FROM
               book
              ORDER BY
                book_id;`;
          const booksArray = await db.all(getBooksQuery);
          response.send(booksArray);
        }
      });
    }
  });
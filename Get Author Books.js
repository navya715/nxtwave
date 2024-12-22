app.get("/authors/:authorId/books/", async (request, response) => {
    const { authorId } = request.params;
    const getAuthorBooksQuery = `
      SELECT
       *
      FROM
       book
      WHERE
        author_id = ${authorId};`;
    const booksArray = await db.all(getAuthorBooksQuery);
    response.send(booksArray);
  });
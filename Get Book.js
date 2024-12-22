app.get("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;
  const getBookQuery = `
    SELECT
      *
    FROM
      book
    WHERE
      book_id = ${bookId};`;
  const book = await db.get(getBookQuery);
  response.send(book);
});
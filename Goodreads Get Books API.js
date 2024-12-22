app.get("/books/", async (request, response) => {
    const getBooksQuery = `
      SELECT
        *
      FROM
        book
      ORDER BY
        book_id;`;
    const booksArray = await db.all(getBooksQuery);
    response.send(booksArray);
  });
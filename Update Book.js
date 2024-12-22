app.put("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;
    const bookDetails = request.body;
    const {
      title,
      authorId,
      rating,
      ratingCount,
      reviewCount,
      description,
      pages,
      dateOfPublication,
      editionLanguage,
      price,
      onlineStores,
    } = bookDetails;
    const updateBookQuery = `
      UPDATE
        book
      SET
        title='${title}',
        author_id=${authorId},
        rating=${rating},
        rating_count=${ratingCount},
        review_count=${reviewCount},
        description='${description}',
        pages=${pages},
        date_of_publication='${dateOfPublication}',
        edition_language='${editionLanguage}',
        price=${price},
        online_stores='${onlineStores}'
      WHERE
        book_id = ${bookId};`;
    await db.run(updateBookQuery);
    response.send("Book Updated Successfully");
  });
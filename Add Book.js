app.post("/books/", async (request, response) => {
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
    const addBookQuery = `
      INSERT INTO
        book (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
      VALUES
        (
          '${title}',
           ${authorId},
           ${rating},
           ${ratingCount},
           ${reviewCount},
          '${description}',
           ${pages},
          '${dateOfPublication}',
          '${editionLanguage}',
           ${price},
          '${onlineStores}'
        );`;
  
    const dbResponse = await db.run(addBookQuery);
    const bookId = dbResponse.lastID;
    response.send({ bookId: bookId });
  });
package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRestRepository
        extends CrudRepository<Book, Integer> {
    @Query(value = "SELECT * FROM books",
            nativeQuery = true)
    public List<Book> findAllBooks();
    @Query(value = "SELECT * FROM books WHERE id=:id",
            nativeQuery = true)
    public Book findBookById(@Param("id") Integer id);
}

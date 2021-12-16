package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.repositories.BookRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookRestOrmDao {
    @Autowired
    BookRestRepository bookRepository;

    @PostMapping("/api/books")
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @GetMapping("/api/books")
    public List<Book> findAllBooks() {
        return bookRepository.findAllBooks();
    }

    @GetMapping("/api/books/{id}")
    public Book findBookById(
            @PathVariable("id") Integer id) {
        return bookRepository.findBookById(id);
    }

    @PutMapping("/api/books/{id}")
    public Book updateBook(
            @PathVariable("id") Integer id,
            @RequestBody Book bookUpdates) {
        Book book = bookRepository.findBookById(id);
        book.setTitle(bookUpdates.getTitle());
        book.setAuthor(bookUpdates.getAuthor());
        book.setReserved(bookUpdates.getReserved());
        book.setGenre(bookUpdates.getGenre());
        return bookRepository.save(book);
    }

    @DeleteMapping("/api/books/{id}")
    public void deleteBook(
            @PathVariable("id") Integer id) {
        bookRepository.deleteById(id);
    }
}
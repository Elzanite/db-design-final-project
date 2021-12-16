package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Reservation;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.BookRestRepository;
import com.example.springtemplate.repositories.ReservationRestRepository;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReservationRestOrmDao {
    @Autowired
    ReservationRestRepository reservationRepository;

    @Autowired
    UserRestRepository userRepository;

    @Autowired
    BookRestRepository bookRepository;

    /*@PostMapping("/api/reservations")
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return reservationRepository.save(reservation);
    }*/

    @GetMapping("/api/reservations")
    public List<Reservation> findAllReservations() {
        return reservationRepository.findAllReservations();
    }

    @GetMapping("/api/reservations/{id}")
    public Reservation findReservationById(
            @PathVariable("id") Integer id) {
        return reservationRepository.findReservationById(id);
    }

    @PutMapping("/api/reservations/{id}")
    public Reservation updateReservation(
            @PathVariable("id") Integer id,
            @RequestBody Reservation reservationUpdates) {
        Reservation reservation = reservationRepository.findReservationById(id);
        reservation.setRes_date(reservationUpdates.getRes_date());
        reservation.setDue_date(reservationUpdates.getDue_date());
        return reservationRepository.save(reservation);
    }

    @DeleteMapping("/api/reservations/{id}")
    public void deleteReservation(
            @PathVariable("id") Integer id) {
        reservationRepository.deleteById(id);
    }

    @GetMapping("/api/users/{userId}/reservations")
   public List<Reservation> findReservationsForUser(
           @PathVariable("userId") Integer id) {
      User user = userRepository.findUserById(id);
      return user.getReservations();
  }

    @GetMapping("/api/books/{bookId}/reservations")
    public List<Reservation> findReservationsForBook(
            @PathVariable("bookId") Integer id) {
        Book book = bookRepository.findBookById(id);
        return book.getReservations();
    }

    /*@PostMapping("/api/books/{bookId}/reservations")
    public List<Reservation> findReservationsForBook(
            @PathVariable("bookId") Integer id) {
        Book book = bookRepository.findBookById(id);
        return book.getReservations();
    }*/

    /*@PostMapping("/api/reservations")
    public Reservation createNewReservation(
            @RequestBody Integer uid,
            @RequestBody Integer bid,
            @RequestBody Reservation reservation) {
        User user = userRepository.findUserById(uid);
        Book book = bookRepository.findBookById(bid);
        long millis=System.currentTimeMillis();
        Date resDate = new Date(millis);
        Date dueDate = new Date(resDate.getTime() + (7*24*60*60*1000));
        reservation.setRes_date(resDate);
        reservation.setDue_date(dueDate);
        reservation.setBook(book);
        reservation.setUser(user);
        return reservationRepository.save(reservation);
    }*/

    @GetMapping("/api/users/{userId}/reservations/book/{bookId}")
    public Reservation createReservation(
            @PathVariable("userId") Integer uid,
            @PathVariable("bookId") Integer bid) {
        System.out.println(uid + " " + bid);
        User user = userRepository.findUserById(uid);
        Book book = bookRepository.findBookById(bid);
        long millis=System.currentTimeMillis();
        Date resDate = new Date(millis);
        Date dueDate = new Date(resDate.getTime() + (7*24*60*60*1000));

        Reservation newReservation = new Reservation();
        newReservation.setUser(user);
        newReservation.setBook(book);
        newReservation.setRes_date(resDate);
        newReservation.setDue_date(dueDate);
        return reservationRepository.save(newReservation);
    }

    /*@PostMapping("/api/books/{bookId}/reservations")
    public Reservation createReservationForBook(
            @PathVariable("bookId") Integer bid,
            @RequestBody Reservation reservation) {
        reservation = reservationRepository.save(reservation);
        Book book = bookRepository.findBookById(bid);
        reservation.setBook(book);
        return reservationRepository.save(reservation);
    }*/

}
package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRestRepository
        extends CrudRepository<Reservation, Integer> {
    @Query(value = "SELECT * FROM reservations",
            nativeQuery = true)
    public List<Reservation> findAllReservations();
    @Query(value = "SELECT * FROM reservations WHERE id=:id",
            nativeQuery = true)
    public Reservation findReservationById(@Param("id") Integer id);
}

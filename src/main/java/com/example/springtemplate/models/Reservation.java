package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date res_date;
    private Date due_date;

    @ManyToOne
    @JsonIgnore
    private Book book;

    @ManyToOne
    @JsonIgnore
    private User user;

    @Transient
    public Integer getUserId() {
        return user.getId();
    }

    @Transient
    public Integer getBookId() {
        return book.getId();
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getRes_date() {
        return res_date;
    }

    public void setRes_date(Date res_date) {
        this.res_date = res_date;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Reservation() {}
}

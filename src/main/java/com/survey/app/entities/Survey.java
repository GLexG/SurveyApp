package com.survey.app.entities;


import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "survey")
@SuppressWarnings("unused")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Length(max = 50)
    private String title;

    private int locked;

    private Timestamp started_at;

    private Timestamp finished_at;

    private int personalized;

    private int pages;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "survey")
    private Set<TakenSurvey> takensurveys = new HashSet<>(0);


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @ManyToMany
    @JoinTable(name = "survey_question", joinColumns = {
            @JoinColumn(name = "survey_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "question_id",
                    nullable = false, updatable = false) })
    private Set<Question> questions = new HashSet<>(0);


    public Set<TakenSurvey> getTakensurveys() {
        return takensurveys;
    }

    public void setTakensurveys(Set<TakenSurvey> takensurveys) {
        this.takensurveys = takensurveys;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getLocked() {
        return locked;
    }

    public void setLocked(int locked) {
        this.locked = locked;
    }

    public Timestamp getStarted_at() {
        return started_at;
    }

    public void setStarted_at(Timestamp started_at) {
        this.started_at = started_at;
    }

    public Timestamp getFinished_at() {
        return finished_at;
    }

    public void setFinished_at(Timestamp finished_at) {
        this.finished_at = finished_at;
    }

    public int getPersonalized() {
        return personalized;
    }

    public void setPersonalized(int personalized) {
        this.personalized = personalized;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }
}

package com.survey.app.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "survey_status")
@SuppressWarnings("unused")
public class SurveyStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @Length(max = 50)
    private String title;

    @JsonBackReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "surveyStatus")
    private Set<TakenSurvey> takenSurveys = new HashSet<>(0);

    public Set<TakenSurvey> getTakenSurveys() {
        return takenSurveys;
    }

    public void setTakenSurveys(Set<TakenSurvey> takenSurveys) {
        this.takenSurveys = takenSurveys;
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
}
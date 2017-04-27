package com.survey.app.entities;


import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
@Table(name = "answer")
@SuppressWarnings("unused")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Length(max = 50)
    private String value;

    @ManyToOne
    @JoinColumn(name = "taken_survey_id")
    private TakenSurvey taken_survey;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;


    public TakenSurvey getTaken_survey() {
        return taken_survey;
    }

    public void setTaken_survey(TakenSurvey taken_survey) {
        this.taken_survey = taken_survey;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

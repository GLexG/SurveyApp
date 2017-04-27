package com.survey.app.entities;


import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
@Table(name = "choice")
@SuppressWarnings("unused")
public class Choice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Length(max = 50)
    private String type;

    @Length(max = 50)
    private String value;

    @Length(max = 50)
    private String title;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    private int position;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}

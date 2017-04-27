package com.survey.app.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "question")
@SuppressWarnings("unused")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String type;

    @Length(max = 50)
    private String title;

    private int position;

    private int required;

    private int hasElse;

    @JsonBackReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
    private Set<Choice> choices = new HashSet<>(0);

    @JsonBackReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
    private Set<Answer> answers = new HashSet<>(0);

    @JsonBackReference
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "questions")
    private Set<Survey> surveys = new HashSet<>(0);

    @ManyToOne
    @JsonBackReference
    private Question parent;

    public Set<Choice> getChoices() {
        return choices;
    }

    public void setChoices(Set<Choice> choices) {
        this.choices = choices;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }


    public Question getParent() {
        return parent;
    }

    public void setParent(Question parent) {
        this.parent = parent;
    }

    public Set<Question> getChildren() {
        return children;
    }

    public void setChildren(Set<Question> children) {
        this.children = children;
    }

    @OneToMany(fetch = FetchType.EAGER, mappedBy="parent")
    @JsonManagedReference
    private Set<Question> children = new HashSet<>(0);

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

    public int getRequired() {
        return required;
    }

    public void setRequired(int required) {
        this.required = required;
    }

    public int getHasElse() {
        return hasElse;
    }

    public void setHasElse(int hasElse) {
        this.hasElse = hasElse;
    }
}

package com.survey.app.repositories;

import com.survey.app.entities.Survey;
import com.survey.app.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Leon on 10/2/2017.
 */
public interface SurveyDao extends CrudRepository<Survey, Long> {


    Survey findByTitle(String title);
}

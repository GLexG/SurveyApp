package com.survey.app.controllers;

import com.google.common.collect.Lists;
import com.survey.app.entities.Survey;
import com.survey.app.entities.User;
import com.survey.app.repositories.SurveyDao;
import com.survey.app.repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by Leon on 10/2/2017.
 */
@RestController
@RequestMapping("/api/surveys")
public class SurveyController {
    @Autowired
    private SurveyDao surveyDao;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<Survey> getList() {
        return Lists.newArrayList(surveyDao.findAll());
    }
}

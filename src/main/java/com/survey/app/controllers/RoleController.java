package com.survey.app.controllers;

import com.google.common.collect.Lists;
import com.survey.app.entities.Role;
import com.survey.app.repositories.RoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Project: survey_app
 * Created by Vojin on 7/21/2016.
 */
@RestController
@RequestMapping("/api/roles")
@SuppressWarnings("unused")
public class RoleController {

    @Autowired
    private RoleDao roleDao;

    @RequestMapping("/all")
    @ResponseBody
    public ArrayList<Role> getList() {

        return Lists.newArrayList(roleDao.findAll());
    }

}

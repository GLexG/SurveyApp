package com.survey.app.controllers;

import com.survey.app.entities.User;
import com.survey.app.helpers.DigestHelper;
import com.survey.app.repositories.UserDao;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by Leon on 3/13/2017.
 */
@RestController
@RequestMapping("/user")
@SuppressWarnings("unused")
public class RegisterController {


    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register() throws ServletException, NoSuchAlgorithmException {
        // check if user exists in db


        return "index";
    }



}
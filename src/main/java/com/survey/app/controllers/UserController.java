package com.survey.app.controllers;

import com.google.common.collect.Lists;
import com.survey.app.entities.User;
import com.survey.app.repositories.UserDao;
import com.survey.app.resources.UserResource;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/users")
@SuppressWarnings("unused")
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<User> getList() {
        return Lists.newArrayList(userDao.findAll());
    }

    @RequestMapping("/current")
    @ResponseBody
    public User getCurrent(final HttpServletRequest request) {
        final Claims claims = (Claims)request.getAttribute("claims");


        // dohvatiti userId i onda usera na osnovu toga
        long userId = (long)claims.get("userId");
        return null;
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public User createUser(@RequestBody final UserResource userResource) throws ServletException {
        try {
            return userResource.toUser();
        } catch (NoSuchAlgorithmException e) {
            throw new ServletException("Invalid params");
        }
    }
//
//    public static final class UserCreate
//    {
//        public String firstName;
//        public String lastName;
//        public Date date;
//        public long role;
//    }
}

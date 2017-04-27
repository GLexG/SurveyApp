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
 * Project: survay_app
 * Created by Vojin on 7/27/2016.
 */
@RestController
@RequestMapping("/user")
@SuppressWarnings("unused")
public class LoginController {

    public static final String SECRET_KEY = "vojin_leon_nikada_zavrsiti_faks";

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody final UserLogin login) throws ServletException, NoSuchAlgorithmException {
        // check if user exists in db
        User user = userDao.findByUsername(login.username);
        String password = DigestHelper.md5HexString(login.password);

        if (login.username == null || user == null || !password.equals(user.getPassword())) {
            throw new ServletException("Invalid login");
        }

        return new LoginResponse(Jwts.builder().setSubject(login.username)
                .claim("userId", user.getId()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact(), user);
    }

    @SuppressWarnings("unused")
    private static class UserLogin {
        public String username;
        public String password;
    }

    @SuppressWarnings("unused")
    private static class LoginResponse {
        public String token;
        public User user;

        public LoginResponse(final String token, final User user) {
            this.token = token;
            this.user = user;
        }
    }

}

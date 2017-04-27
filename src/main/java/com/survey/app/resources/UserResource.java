package com.survey.app.resources;

import com.survey.app.entities.User;
import com.survey.app.helpers.DigestHelper;
import com.survey.app.repositories.RoleDao;
import org.hibernate.validator.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.NoSuchAlgorithmException;
import java.sql.Date;

@SuppressWarnings("unused")
public final class UserResource
{

    @Autowired
    private RoleDao roleDao;

    public String username;

    @Email
    public String email;

    public String phone;
    public String password;
    public String firstName;
    public String lastName;
    public Date date;

    public long role;

    public User toUser() throws NoSuchAlgorithmException {
        User user = new User();
        user.setRole(roleDao.findOne(role));
        user.setDate(date);
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(DigestHelper.md5HexString(password));

        return user;
    }
}

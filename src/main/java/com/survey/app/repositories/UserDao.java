package com.survey.app.repositories;

import com.survey.app.entities.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Project: survay_app
 * Created by Vojin on 7/21/2016.
 */
@Transactional
@SuppressWarnings("unused")
public interface UserDao extends CrudRepository<User, Long>{

    /**
     * Return the user having the passed username or null if no user is found.
     *
     * @param username the role title.
     */
     User findByUsername(String username);

}

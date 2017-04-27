package com.survey.app.repositories;

import com.survey.app.entities.Role;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Project: survay_app
 * Created by Vojin on 7/21/2016.
 */
@Transactional
@SuppressWarnings("unused")
public interface RoleDao extends CrudRepository<Role, Long>{

    /**
     * Return the role having the passed title or null if no role is found.
     *
     * @param title the role title.
     */
     Role findByTitle(String title);

}

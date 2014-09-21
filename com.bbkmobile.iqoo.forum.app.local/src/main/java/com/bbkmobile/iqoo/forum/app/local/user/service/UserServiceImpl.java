package com.bbkmobile.iqoo.forum.app.local.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bbkmobile.iqoo.forum.app.local.user.dao.UserDao;
import com.bbkmobile.iqoo.forum.entity.user.User;

@Service
public class UserServiceImpl implements UserService{

	@Resource
	private UserDao userDao;
	
	@Override
	public boolean addUser(User user) throws Exception {
		 //userDao.save(user);
		 return true;
	}

	@Override
	public List<User> list(User user) throws Exception {
		//return userDao.listByBean(user);
		return null;
	}
}

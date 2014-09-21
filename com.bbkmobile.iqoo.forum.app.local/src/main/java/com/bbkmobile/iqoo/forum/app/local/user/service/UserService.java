package com.bbkmobile.iqoo.forum.app.local.user.service;

import java.util.List;

import com.bbkmobile.iqoo.forum.entity.user.User;

public interface UserService {
	
	public boolean addUser(User user)throws Exception;
	
	public List<User> list(User user)throws Exception;
}

package com.bbkmobile.iqoo.forum.app.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.bbkmobile.iqoo.common.json.ResultObject;
import com.bbkmobile.iqoo.forum.app.local.user.service.UserService;
import com.bbkmobile.iqoo.forum.entity.user.User;

@Controller
public class UserController {

	public UserController(){
		
	}
	@Resource
	private UserService userService;
	
	@RequestMapping(value="/freemark")
	public ModelAndView freemarkTest(){
		ModelAndView model = new ModelAndView("hello");
		model.addObject("title", "hello world");
		model.addObject("content","content");
		return model;
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(User user){
		String forward = "../main";
		System.out.println("name:" + user.getName());
		return forward ;
	}
	@RequestMapping(value="/users",method=RequestMethod.GET)
	public ResultObject<User> listUsers(){
		ResultObject<User> result = new ResultObject<User>();
		result.setResult(true);
		User user = new User();
		user.setAge(18);
		user.setName("Lucy");
		result.setValue(user );
		return result;
	}
}

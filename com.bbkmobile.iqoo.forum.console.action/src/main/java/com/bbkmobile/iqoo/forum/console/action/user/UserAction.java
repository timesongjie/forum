package com.bbkmobile.iqoo.forum.console.action.user;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.bbkmobile.iqoo.platform.base.BaseAction;

@Component
@Scope("prototype")
public class UserAction extends BaseAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public String login(){
		String forward = "main";
		return forward ;
	}

}

/**
 * 
 */
package com.bbkmobile.iqoo.forum.console.action.common;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bbkmobile.iqoo.forum.entity.user.User;


/**
 * @author wangbo
 * @version 1.0.0.0/2011-7-18
 */
public class AuthFilter implements Filter {

	

	/* (non-Javadoc)
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest, javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpReq = (HttpServletRequest)req;
		
//		if(hasLogined(httpReq) || isAllowedURL(httpReq)){
//			chain.doFilter(req, resp);
//		}else{
//			//转发到登陆页面
////			req.getRequestDispatcher("/login.jsp").forward(req, resp);
//			((HttpServletResponse)resp).sendRedirect(getLoginURI(httpReq));
//			
//		}
		if(hasLogined(httpReq) || isAllowedURL(httpReq)){
			if(isLoginUrl(httpReq) && hasLogined(httpReq)){
				((HttpServletResponse)resp).sendRedirect(getIndexURI(httpReq));
			}else{
				chain.doFilter(req, resp);
			}
		}else{
			//转发到登陆页面
//			req.getRequestDispatcher("/login.jsp").forward(req, resp);
			rememberPreURI(httpReq);
			((HttpServletResponse)resp).sendRedirect(getLoginURI(httpReq));
			
		}
		
	}
	private void rememberPreURI(HttpServletRequest request){
		String reqURL = request.getContextPath()+request.getServletPath();
		if(request.getQueryString() != null && request.getQueryString() != "null" && request.getQueryString().trim().length()>0){
			reqURL += "?"+request.getQueryString();
		}
		request.getSession().setAttribute("preUrl",reqURL);
	}
	private String getIndexURI(HttpServletRequest httpReq) {
		String url = httpReq.getContextPath()+"/frame.jsp";	
		return url.replaceAll("/{2,}", "/");
	}
	private boolean isLoginUrl(HttpServletRequest req){
		String reqURL = (req).getServletPath();
		return (reqURL.endsWith("/login.jsp") ||reqURL.endsWith("/login.action"));
	}
	/* (non-Javadoc)
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub

	}

	/* (non-Javadoc)
	 * @see javax.servlet.Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub

	}
	
	
	private Boolean hasLogined(HttpServletRequest req)throws IOException, ServletException{
		User user = findUser(req);
		
		if(null == user)
			return Boolean.FALSE;
		
		return Boolean.TRUE;
		
	}
	
	private User findUser(HttpServletRequest req){
		
		User user=null;
		if(req.getSession().getAttribute(Constants.SESSION_AUTH_USER)!=null)
		{
			user = (User)(req.getSession().getAttribute(Constants.SESSION_AUTH_USER));
		}
		return user;
	}
	
	private Boolean isAllowedURL(HttpServletRequest req){
		
		String reqURL = req.getServletPath();
		if(reqURL.endsWith("/index.jsp") || reqURL.endsWith("/login.jsp") ||
				reqURL.endsWith("/login.action")||reqURL.endsWith("/getMenu.action")
				|| reqURL.endsWith("/logout.action")){
			return Boolean.TRUE;
		}
		return Boolean.FALSE;
	}
	
	private String getLoginURI(HttpServletRequest req){
		
	//	String url = req.getContextPath()+"/login.jsp";		
		String url = req.getContextPath()+"/logout.action";	
		return url.replaceAll("/{2,}", "/");
	}
	
}

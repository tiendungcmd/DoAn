package controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import logics.UserLogic;


/**
 * Servlet implementation class loginController
 */
@WebServlet("/Login.do")
public class LoginController extends HttpServlet {
       
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			// TODO Auto-generated method stub

			// lay loginName
			String name = request.getParameter("loginName");
			// lay password
			String pass = request.getParameter("password");
			// khoi tao doi tuong validate
			UserLogic us = new UserLogic();
			boolean lstErr;
			System.out.println("chưa vao day");
			// lay list danh sach err neu dang nhap co loi
			lstErr = us.checkExistLoginID(name, pass);
			System.out.println("ha>"+lstErr);
			// Kiem tra danh sach loi
			if (lstErr) {
				// khoi tao session
				HttpSession session = request.getSession();
				// thiet lap gia tri session
				session.setAttribute("loginName", name);
				// set timeout cho session
				session.setMaxInactiveInterval(100);
				// chuyen den MH ADM002
				response.sendRedirect("ListDeTaiController");
				System.out.println("vao loi ne");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

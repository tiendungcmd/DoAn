package controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Entities.DeTaiEntities;
import logics.DeTaiLogic;

/**
 * Servlet implementation class ListDeTaiController
 */
@WebServlet("/ListDeTaiController")
public class ListDeTaiController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListDeTaiController() {
        super();
        // TODO Auto-generated constructor stub
    }


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<DeTaiEntities> lstDeTai = new ArrayList<>();
		DeTaiLogic de= new DeTaiLogic();
		lstDeTai.addAll(de.getDeTai());
		int dem=0;
	request.setAttribute("lstDT",lstDeTai);
	request.setAttribute("dem",dem);
	RequestDispatcher requestDispatcher =request.getRequestDispatcher("/view/jsp/Home.jsp");
	requestDispatcher.forward(request, response);
	}

}

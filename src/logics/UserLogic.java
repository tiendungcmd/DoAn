/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package logics;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

import Entities.CanBoEntitites;
import common.Common;
import dao.UserDao;


/**
 * @author 440TranCung
 *
 */

public class UserLogic {
	public boolean checkExistLoginID(String username, String password) throws ClassNotFoundException {
		// Khởi tạo 1 đối tượng TblUserDaoImpl
		UserDao tbluser = new UserDao();
		CanBoEntitites tb;

		boolean kt = true;

		try {
			// Lấy về 1 user
			tb = tbluser.getUserByUserName(username);
			if (tb != null) {
				Common cm = new Common();
				
				// lấy pw,salt trong DB
				String passDB = tb.getPassWord();
		
				// kiểm tra tồn tại
				kt = cm.compare(password, passDB);
			}
		} catch (  SQLException  e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		return kt;

	}
}

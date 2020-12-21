/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import Entities.CanBoEntitites;

/**
 * @author Bui Tien Dung
 *
 */
public class UserDao extends BaseDao {
	/**
	 * Lay Password user
	 * 
	 * @param userName
	 * @return
	 * @throws SQLException
	 * @throws ClassNotFoundException
	 */
	public CanBoEntitites getUserByUserName(String userName) throws SQLException, ClassNotFoundException {
		// Khởi tạo một đối tượng TblUserEntities =
		CanBoEntitites cb = new CanBoEntitites();
		try {
			// tạo kết nối đến DB
			connect();
			// Nếu connect thành công
			if (conn != null) {
				// Tạo câu truy vấn sql

				String sql = "SELECT passWord FROM CanBo WHERE userName = ?";
				// Thực hiện câu truy vấn bằng PreparedStatement
				PreparedStatement pre = conn.prepareStatement(sql);
				// Truyền vào câu sql tham số userName
				pre.setString(1, userName);
				// Thực hiện câu truy vấn
				ResultSet rs = pre.executeQuery();
				// Nếu dữ liệu lấy ra khác rỗng
				if (rs.next()) {
					// Update dữ liệu mới cho pass
					cb.setPassWord(rs.getString(1));
					// Update dữ liệu mới cho salt
				}
				cb.setUserName(userName);
			}
			// Nếu bắt được lỗi
		} catch (SQLException e) {
			// ghi log
			e.printStackTrace();
			System.out.println("Lỗi");
		} finally {
			// Đóng kết nối
			closeConnect();
		}
		return cb;
	}

	public static void main(String[] args) {
		UserDao us = new UserDao();
		try {
			System.out.println(us.getUserByUserName("dung"));
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

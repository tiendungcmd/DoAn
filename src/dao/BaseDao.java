/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * @author 440TranCung
 *
 */
public class BaseDao {
	Connection conn = null;
	public String url = "jdbc:sqlserver://localhost:1433;"+"databaseName=QLDT";
	public static final String user = "sa";
	public static final String password = "0000";

	/**
	 * Tao ket noi db
	 */
	public void connect() {
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			conn = DriverManager.getConnection(url, user, password);
			System.out.println("ket noi thanh cong");
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("Ket noi that bai!");
			e.printStackTrace();
		}
	}
	/**
	 * dong ket noi
	 */
	public void closeConnect() {
		try {
			if (conn != null && !conn.isClosed()) {
				conn.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		BaseDao bs = new BaseDao();
		bs.connect();
	}
}

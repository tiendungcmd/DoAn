/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Entities.DeTaiEntities;

/**
 * @author 440TranCung
 *
 */
public class DeTaiDao extends BaseDao {
	
	//lay danh sach de tai
	public List<DeTaiEntities> getdeTai() throws SQLException {
		
		DeTaiEntities de = null;
		List<DeTaiEntities> lstDeTai = new ArrayList<>();
		connect();
		// Nếu connect thành công
		if (conn != null) {
			// Tạo câu truy vấn sql
			String sql = "SELECT TenDeTai,ThoiGianDK,TinhTrang,TenLoai FROM TTDeTai dt inner join LoaiDeTai ldt on dt.MaLoaiDeTai=ldt.MaLoaiDeTai";
			// Thực hiện câu truy vấn bằng PreparedStatement
			PreparedStatement pre = conn.prepareStatement(sql);
			
			// Thực hiện câu truy vấn
			ResultSet rs = pre.executeQuery();
			// Nếu dữ liệu lấy ra khác rỗng
			while (rs.next()) {
			 de = new DeTaiEntities();
				// Update dữ liệu mới cho pass
				de.setTenDeTai(rs.getString("TenDeTai"));
				// Update dữ liệu mới cho salt
				de.setLoaiDeTai(rs.getString("TenLoai"));
				de.setThoiGianDK(rs.getString("ThoiGianDK"));
				de.setTinhTrang(rs.getString("TinhTrang"));
				lstDeTai.add(de);
			}
			
		}
		return lstDeTai;
	}
	public static void main(String[] args) {
		DeTaiDao de = new DeTaiDao();
		
		try {
			System.out.println(de.getdeTai());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

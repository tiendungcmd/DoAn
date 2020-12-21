/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package logics;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Entities.DeTaiEntities;
import dao.DeTaiDao;

/**
 * @author 440TranCung
 *
 */
public class DeTaiLogic extends DeTaiDao {
	public List<DeTaiEntities> getDeTai() {
		List<DeTaiEntities> lstDeTai = new ArrayList<>();
		try {
			lstDeTai = getdeTai();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lstDeTai;

	}
	public static void main(String[] args) {
		DeTaiLogic dt = new DeTaiLogic();
		System.out.println(dt.getDeTai());
	}
}

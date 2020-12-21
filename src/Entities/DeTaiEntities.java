/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package Entities;

/**
 * @author 440TranCung
 *
 */
public class DeTaiEntities {
private String tenDeTai;
private String loaiDeTai;
private String tinhTrang;
private String thoiGianDK;


@Override
public String toString() {
	return "DeTaiEntities [tenDeTai=" + tenDeTai + ", loaiDeTai=" + loaiDeTai + ", tinhTrang=" + tinhTrang
			+ ", thoiGianDK=" + thoiGianDK + "]";
}
public DeTaiEntities() {
	
}
/**
 * @param tenDeTai
 * @param loaiDeTai
 * @param tinhTrang
 * @param thoiGianDK
 */
public DeTaiEntities(String tenDeTai, String loaiDeTai, String tinhTrang, String thoiGianDK) {
	super();
	this.tenDeTai = tenDeTai;
	this.loaiDeTai = loaiDeTai;
	this.tinhTrang = tinhTrang;
	this.thoiGianDK = thoiGianDK;
}
/**
 * @return the tenDeTai
 */
public String getTenDeTai() {
	return tenDeTai;
}
/**
 * @param tenDeTai the tenDeTai to set
 */
public void setTenDeTai(String tenDeTai) {
	this.tenDeTai = tenDeTai;
}
/**
 * @return the loaiDeTai
 */
public String getLoaiDeTai() {
	return loaiDeTai;
}
/**
 * @param loaiDeTai the loaiDeTai to set
 */
public void setLoaiDeTai(String loaiDeTai) {
	this.loaiDeTai = loaiDeTai;
}
/**
 * @return the tinhTrang
 */
public String getTinhTrang() {
	return tinhTrang;
}
/**
 * @param tinhTrang the tinhTrang to set
 */
public void setTinhTrang(String tinhTrang) {
	this.tinhTrang = tinhTrang;
}
/**
 * @return the thoiGianDK
 */
public String getThoiGianDK() {
	return thoiGianDK;
}
/**
 * @param thoiGianDK the thoiGianDK to set
 */
public void setThoiGianDK(String thoiGianDK) {
	this.thoiGianDK = thoiGianDK;
}


}

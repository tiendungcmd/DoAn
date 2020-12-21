/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package Entities;

import java.sql.Date;

/**
 * @author 440TranCung
 *
 */
public class CanBoEntitites {
	private int MaCanBo;
	private String HoTen;
	private Date NamSinh;
	private String GioiTinh;
	private String ChucDanh;
	private String ChucVu;
	private int DienThoai;
	private String Email;
	private String ToChucCongTac;
	private String DiaChi;
	private int MaNhiemVu;
	private String userName;
	private String passWord;
	
	@Override
	public String toString() {
		return "CanBoEntitites [MaCanBo=" + MaCanBo + ", HoTen=" + HoTen + ", NamSinh=" + NamSinh + ", GioiTinh="
				+ GioiTinh + ", ChucDanh=" + ChucDanh + ", ChucVu=" + ChucVu + ", DienThoai=" + DienThoai + ", Email="
				+ Email + ", ToChucCongTac=" + ToChucCongTac + ", DiaChi=" + DiaChi + ", MaNhiemVu=" + MaNhiemVu
				+ ", userName=" + userName + ", passWord=" + passWord + "]";
	}
	public CanBoEntitites() {
		
	}
	/**
	 * @param maCanBo
	 * @param hoTen
	 * @param namSinh
	 * @param gioiTinh
	 * @param chucDanh
	 * @param chucVu
	 * @param dienThoai
	 * @param email
	 * @param toChucCongTac
	 * @param diaChi
	 * @param maNhiemVu
	 * @param userName
	 * @param passWord
	 */
	public CanBoEntitites(int maCanBo, String hoTen, Date namSinh, String gioiTinh, String chucDanh, String chucVu,
			int dienThoai, String email, String toChucCongTac, String diaChi, int maNhiemVu, String userName,
			String passWord) {
		super();
		MaCanBo = maCanBo;
		HoTen = hoTen;
		NamSinh = namSinh;
		GioiTinh = gioiTinh;
		ChucDanh = chucDanh;
		ChucVu = chucVu;
		DienThoai = dienThoai;
		Email = email;
		ToChucCongTac = toChucCongTac;
		DiaChi = diaChi;
		MaNhiemVu = maNhiemVu;
		this.userName = userName;
		this.passWord = passWord;
	}
	/**
	 * @return the maCanBo
	 */
	public int getMaCanBo() {
		return MaCanBo;
	}
	/**
	 * @param maCanBo the maCanBo to set
	 */
	public void setMaCanBo(int maCanBo) {
		MaCanBo = maCanBo;
	}
	/**
	 * @return the hoTen
	 */
	public String getHoTen() {
		return HoTen;
	}
	/**
	 * @param hoTen the hoTen to set
	 */
	public void setHoTen(String hoTen) {
		HoTen = hoTen;
	}
	/**
	 * @return the namSinh
	 */
	public Date getNamSinh() {
		return NamSinh;
	}
	/**
	 * @param namSinh the namSinh to set
	 */
	public void setNamSinh(Date namSinh) {
		NamSinh = namSinh;
	}
	/**
	 * @return the gioiTinh
	 */
	public String getGioiTinh() {
		return GioiTinh;
	}
	/**
	 * @param gioiTinh the gioiTinh to set
	 */
	public void setGioiTinh(String gioiTinh) {
		GioiTinh = gioiTinh;
	}
	/**
	 * @return the chucDanh
	 */
	public String getChucDanh() {
		return ChucDanh;
	}
	/**
	 * @param chucDanh the chucDanh to set
	 */
	public void setChucDanh(String chucDanh) {
		ChucDanh = chucDanh;
	}
	/**
	 * @return the chucVu
	 */
	public String getChucVu() {
		return ChucVu;
	}
	/**
	 * @param chucVu the chucVu to set
	 */
	public void setChucVu(String chucVu) {
		ChucVu = chucVu;
	}
	/**
	 * @return the dienThoai
	 */
	public int getDienThoai() {
		return DienThoai;
	}
	/**
	 * @param dienThoai the dienThoai to set
	 */
	public void setDienThoai(int dienThoai) {
		DienThoai = dienThoai;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return Email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		Email = email;
	}
	/**
	 * @return the toChucCongTac
	 */
	public String getToChucCongTac() {
		return ToChucCongTac;
	}
	/**
	 * @param toChucCongTac the toChucCongTac to set
	 */
	public void setToChucCongTac(String toChucCongTac) {
		ToChucCongTac = toChucCongTac;
	}
	/**
	 * @return the diaChi
	 */
	public String getDiaChi() {
		return DiaChi;
	}
	/**
	 * @param diaChi the diaChi to set
	 */
	public void setDiaChi(String diaChi) {
		DiaChi = diaChi;
	}
	/**
	 * @return the maNhiemVu
	 */
	public int getMaNhiemVu() {
		return MaNhiemVu;
	}
	/**
	 * @param maNhiemVu the maNhiemVu to set
	 */
	public void setMaNhiemVu(int maNhiemVu) {
		MaNhiemVu = maNhiemVu;
	}
	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}
	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}
	/**
	 * @return the passWord
	 */
	public String getPassWord() {
		return passWord;
	}
	/**
	 * @param passWord the passWord to set
	 */
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
	
}

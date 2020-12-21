/**
 * Coppyright (C) 2020 Luvina
 * Bai 2 25/10/2020 BuiTienDung
 */
package common;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * @author 440TranCung
 *
 */

public class Common {
	/** 
	 * Ma hoa mat khẩu
	 * @param pw
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws UnsupportedEncodingException
	 */
	public String EncodeCreatePassword(String pw)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		MessageDigest crypt = MessageDigest.getInstance("SHA-1");
		crypt.reset();
		crypt.update(pw.getBytes("UTF-8"));
		return new BigInteger(1, crypt.digest()).toString(16);
	}
	// kiểm tra mã hoa
	/**
	 * So sáng pass do người dùng nhập vào sau khi được mã hóa với pass lấy ra được
	 * trong DB
	 * @param pass   pass do người dùng nhập vào sau khi được mã hóa
	 * @param passDB pass lấy ra được trong DB
	 * @return nếu giống nhau trả về true, nếu khác nhau trả về false
	 */
	public boolean compare(String pass, String passDB) {
		// Nếu 1 trong 2 pass bị null
		if (pass == null || passDB == null) {
			//
			return false;
		}
		return pass.equals(passDB);
	}
}

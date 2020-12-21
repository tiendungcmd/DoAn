<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<title>Đăng nhập</title>
</head>
<body align="center">
	<form action="/DoAnQLDT/Login.do" method="post">
		<center>
			<table class="tbl_input" cellpadding="4" cellspacing="0"
				width="400px">
				<tr>
					<th width="120px">
						&nbsp;
					</th>
					<th></th>
				</tr>
				<tr>
					<th colspan="2" align="left">Đăng Nhập</th>
				</tr>
				<tr>
					<td class="errMsg" colspan="2">
						&nbsp; <c:forEach items="${listMessError}" var="messError">
							<p style="color: red;">${messError}</p>
						</c:forEach>
					</td>
				</tr>
				<tr align="left">
					<td class="lbl_left">Tài Khoản :</td>
					<td align="left"><input class="txBox" type="text"
						name="loginName" value="${loginName }" size="20"
						onfocus="this.style.borderColor='#0066ff';"
						onblur="this.style.borderColor='#aaaaaa';" /></td>
				</tr>
				<tr>
					<td class="lbl_left">Mật Khẩu :</td>
					<td align="left"><input class="txBox" type="password"
						name="password" value="" size="22"
						onfocus="this.style.borderColor='#0066ff';"
						onblur="this.style.borderColor='#aaaaaa';" /></td>
				</tr>
				<tr>
					<td></td>
					<td align="left"><input class="btn btn_wider" type="submit"
						value="Đăng Nhập" /></td>
				</tr>
			</table>
		</center>
	</form>
</body>
</html>
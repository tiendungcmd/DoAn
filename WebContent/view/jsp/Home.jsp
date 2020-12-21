<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Demo AMIS BHXH</title>
    <link href="/jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
    <link href="../css/common/common.css" rel="stylesheet" />
    <link href="../css/common/main.css" rel="stylesheet" />
    <link href="../css/common/navbar.css" rel="stylesheet" />
    <link href="../css/common/input.css" rel="stylesheet" />
    <link href="../css/common/header.css" rel="stylesheet" />
    <link href="../css/common/grid.css" rel="stylesheet" />
    <link href="../css/common/content.css" rel="stylesheet" />
    <link href="../css/common/button.css" rel="stylesheet" />
    <link href="../css/page/employee.css" rel="stylesheet" />
    <link href="../css/common/select.css" rel="stylesheet" />
</head>

<body>
    <div class="navbar">
        <div>
            <div class="logo-site">
                <div class="toggle-icon"></div>
                <div class="cukcuk-logo"></div>
            </div>
        </div>
        <div class="navbar-content">
            <div class="navbar-item">
                <div class="navbar-item-icon document-online-icon"></div>
                <div>Tổng quan</div>
            </div>
            <div class="navbar-item">
                <div class="navbar-item-icon document-default-icon"></div>
                <div>Báo cáo</div>
            </div>
            <div class="navbar-item">
                <div class="navbar-item-icon dashboard-icon"></div>
                <div>Mua hàng</div>
            </div>
            <div class="navbar-item">
                <div class="navbar-item-icon dic-employee-icon"></div>
                <div>Danh mục khách hàng</div>
            </div>
            <div class="navbar-item active">
                <div class="navbar-item-icon dic-employee-icon"></div>
                <div>Danh mục nhân viên</div>
            </div>
            <div class="navbar-item">
                <div class="navbar-item-icon setting-icon"></div>
                <div>Thiết lập hệ thống</div>
            </div>
        </div>
    </div>
    <div class="header m-flex">
        <div class="department">
            <select>
                <option>Nhà hàng Biển Đông</option>
                <option>Nhà hàng Hải Dương</option>
                <option>Nhà hàng Đội Cấn</option>
                <option>Nhà hàng Cầu Giấy</option>
            </select>
        </div>
        <div class="account-infor">
            <div class="account-avatar"></div>
            <div class="account-name">Nguyễn Thị Ngọc Huyền</div>
            <div class="account-option"></div>
        </div>
    </div>
    <div class="content employee">
        <div class="header-content">
            <h1 class="title">Quản lý nhân viên</h1>
            <div class="content-feature">
                <button class="m-btn m-btn-icon btn-add">Thêm nhân viên</button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input id="txtSearchEmployee" class="input-search icon-search" type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại">
                <select class="m-filter" style="margin: auto 16px;" id="cbxSearchDepartment" fieldid="DepartmentId" fieldname="DepartmentName" api="/api/v1/departments"></select>
                <select class="m-filter" id="cbxSearchPosition" fieldid="PositionId" fieldname="PositionName" api="/api/v1/positions"></select>
            </div>
            <div class="filter-right">
                <button class="m-btn btn-single-icon btn-delete"></button>
                <button class="m-btn btn-single-icon btn-sync"></button>
            </div>
        </div>
        <div class="grid grid-employee">
            <table style="min-width: 100%;" cellspacing="0" border="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Đề Tài</th>
                        <th>Loại Đề Tài</th>
                        <th>Ngày Đăng Kí</th>
                        <th>Trạng Thái</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <c:forEach items="${lstDT}" var="deTai">

                        <tr>
                            <td>${dem=dem+1}</td>
                            <td>${deTai.tenDeTai }</td>
                            <td>${deTai.loaiDeTai }</td>
                            <td>${deTai.thoiGianDK }</td>
                            <td>${deTai.tinhTrang}</td>
                            <td>
                                <a class="btn btn-primary btn-sm"
                                   href="UserServlet?action=AddOrEdit&username=12">Edit</a> | <a class="btn btn-danger btn-sm"
                                                                                                 href="UserServlet?action=Delete&username=12">Del</a>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        <div class="pagination">
            <div class="pagi-left">
                <p><span>Hiển thị </span><strong class="total"></strong><span> nhân viên</span></p>
            </div>
            <div class="pagi-center">
                <button class="m-btn btn-single-icon first-page"></button>
                <button class="m-btn btn-single-icon privious-page"></button>
                <a href="#" class="active">1</a>
                <button class="m-btn btn-single-icon next-page"></button>
                <button class="m-btn btn-single-icon last-page"></button>
            </div>
            <div class="pagi-right">
                <!--<p><strong>20</strong> nhân viên/trang</p>-->
            </div>
        </div>
    </div>
    <div class="dialog-modal employee-detail">
        <div id="dialog">
            <div class="dialog-body">
                <div class="row" style="margin-bottom: 0px;">
                    <div class="col-3 employee-avatar">
                        <div class="avatar"></div>
                        <div class="avatar-note text-align-center">
                            (Vui lòng chọn ảnh có định dạng <br><b>.jpg, .jpeg, .png, .gif. </b>)
                        </div>
                    </div>
                    <div class="col-9">
                        <div>A. THÔNG TIN CHUNG:</div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label>Mã nhân viên (<span class="text-red">*</span>)</label>
                                <input fieldname="EmployeeCode" type="text" required />
                            </div>
                            <div class="col-6">
                                <label>Họ và tên (<span class="text-red">*</span>)</label>
                                <input fieldname="FullName" type="text" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <m-date-picker id="dtDateOfBirth"
                                               label="Ngày sinh"
                                               label-cls="m-label"
                                               input-cls="m-control"
                                               format="dd/mm/yyyy"
                                               fieldName="DateOfBirth"
                                               placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                            <div class="col-6">
                                <label>Giới tính</label>
                                <select id="cbxGender" fieldname="Gender">
                                    <option value="0">Nữ</option>
                                    <option value="1" selected>Nam</option>
                                    <option value="2">Khác</option>
                                </select>

                            </div>
                        </div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label title="Số chứng minh thư nhân dân hoặc căn cước công dân">Số CMTND/ Căn cước (<span class="text-red">*</span>)</label>
                                <input fieldname="IdentityNumber" type="text" required />
                            </div>
                            <div class="col-6">
                                <m-date-picker id="dtIndentityDate"
                                               label="Ngày cấp"
                                               label-cls="m-label"
                                               input-cls="m-control"
                                               format="dd/mm/yyyy"
                                               fieldName="IdentityDate"
                                               placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label>Nơi cấp</label>
                                <input fieldname="IdentityPlace" type="text" />
                            </div>
                            <div class="col-6"></div>
                        </div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label>Email (<span class="text-red">*</span>)</label>
                                <input fieldname="Email" type="email" required />
                            </div>
                            <div class="col-6">
                                <label>Số điện thoại (<span class="text-red">*</span>)</label>
                                <input fieldname="PhoneNumber" type="text" required />
                            </div>
                        </div>
                        <div style="margin-top:30px">B. THÔNG TIN CÔNG VIỆC</div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label>Vị trí</label>
                                <select id="cbxPosition" fieldname="PositionName" fieldid="PositionId" api="/api/v1/positions"></select>
                            </div>
                            <div class="col-6">
                                <label>Phòng ban</label>
                                <select id="cbxDepartment" fieldname="DepartmentName" fieldid="DepartmentId" api="/api/v1/departments"></select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="pd-right-16px col-6">
                                <label>Mã số thuế cá nhân</label>
                                <input fieldname="PersonalTaxCode" type="text" />
                            </div>
                            <div class="col-6">
                                <label>Mức lương cơ bản</label>
                                <div style="position: relative;">
                                    <input class="money" id="txtSalary" fieldName="Salary" type="text" style="text-align: right; padding-right: 56px; width :calc(100% - 72px)" ;" />
                                    <span class="currency-for-input">(VNĐ)</span>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 0px;">
                            <div class="col-6 pd-right-16px">
                                <m-date-picker id="dtJoinDate"
                                               label="Ngày gia nhập"
                                               label-cls="m-label"
                                               input-cls="m-control"
                                               format="dd/mm/yyyy"
                                               fieldName="JoinDate"
                                               placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                            <div class="col-6">
                                <label>Tình trạng công việc</label>
                                <select id="cbxWorkStatus" fieldname="WorkStatus">
                                    <option value="0">Đã nghỉ việc</option>
                                    <option value="1" selected>Đang làm việc</option>
                                    <option value="2">Đang thử việc</option>
                                    <option value="3">Đã nghỉ hưu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <div class="btn-group">
                    <button class="m-btn m-btn-content btn-cancel">Huỷ</button>
                    <button class="m-btn m-btn-icon btn-save">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-alert employee-delete">
        <div class="dialog-body">
            Bạn có chắc muốn xoá nhân viên <strong class="FullName"></strong> (mã nhân viên <strong class="EmployeeCode"></strong>) không?
        </div>
        <div class="dialog-footer">
            <div class="btn-group">
                <button class="m-btn m-btn-content btn-cancel">Huỷ</button>
                <button class="m-btn m-btn-content confirm-delete">Đồng ý</button>
            </div>
        </div>
    </div>
    <div class="popup-alert data-invalid">
        <div class="dialog-body">
            <p></p>
        </div>
        <div class="dialog-footer">
            <div class="btn-group">
                <button class="m-btn m-btn-content btn-cancel">Đóng</button>
            </div>
        </div>
    </div>
    <div class="toast-messenger messenger-success disable text-align-center"></div>
    <div class="toast-messenger messenger-fail disable text-align-center"></div>
    <div class="toast-messenger messenger-notify disable text-align-center"></div>
    <div class="loading-data">
        <div class="loading-icon"></div>
    </div>
    <div class="d-none">abc</div>

    <script src="/lib/jquery-3.5.1.min.js "></script>
    <script src="/jquery-ui-1.12.1/jquery-ui.min.js"></script>
    <script src="/js/common/common.js "></script>
    <script src="/js/common/base.js"></script>
    <script src="/js/common/_control.js"></script>
    <script src="/js/page/employee.js "></script>
    <script>
        
    </script>
</body>

</html>
$(document).ready(function () {
    new EmployeeJS();
})

class EmployeeJS extends BaseJS {
    constructor() {
        super();
    }

    // Đặt api
    setApi() {
        this.api = `/api/v1/employees`
    }

    // Các thuộc tính sử dụng
    entityName = "Employee"
    entityCode = "EmployeeCode"
    entityId = "EmployeeId"

    // Khởi tạo các event
    initEventCustom() {
        // Sự kiện click khi nhấn thêm mới
        $(`.employee .btn-add`).click(this.btnAddOnClick.bind(this));

        // Ẩn form chi tiết khi bấm huỷ
        $(`.employee-detail .dialog-footer .btn-cancel`).click(this.btnCancelOnClick.bind(this));

        // Hiển thị dialog xác nhận xoá bản ghi
        $(`.employee .filter-bar .filter-right .btn-delete`).click(this.btnDeleteOnClick.bind(this));

        // Thực hiện lưu dữ liệu khi nhấn button lưu
        $(`.employee-detail .dialog-footer .btn-save`).click(this.btnSaveOnClick.bind(this));

        // Ẩn dialog xác nhận xoá
        $(`.employee-delete .btn-cancel, .data-invalid .btn-cancel`).click(this.btnCancelDeleteOnClick.bind(this));

        // Xoá bản ghi khi nhấn đồng ý
        $(`.employee-delete .confirm-delete`).click(this.btnConfirmDeleteOnClick.bind(this));

        // Tìm kiếm  theo điều kiện
        $(`#cbxSearchDepartment, #txtSearchEmployee, #cbxSearchPosition`).change(this.getEmployees.bind(this))

    }

    /**
     * Tìm kiếm  theo điều kiện
     * CreatedBy: BTDung(3/12/2020)
     * */
    getEmployees() {
        var me = this;
        try {
            var keyWords = $(`#txtSearchEmployee`).val(),
                departmentId = $(`#cbxSearchDepartment`).val(),
                positionId = $(`#cbxSearchPosition`).val(),
                count = 0;
            $(`table tbody`).empty();
            var ths = $(`table thead th`);
            $(`.loading-data`).show();
            $.ajax({
                url: me.api + "/search?departmentId=" + departmentId + `&keyWords=` + keyWords + `&positionId=` + positionId,
                method: "GET"
            }).done(function (res) {
                $.each(res, function (index, obj) {
                    count++;
                    var tr = $(`<tr></tr>`);
                    $.each(ths, function (index, th) {
                        // Lấy dữ liệu để buid cho td
                        var td = $(`<td></td>`),
                            fieldname = $(th).attr(`fieldname`),
                            value = obj[fieldname];
                        var format = th.attr(`format`);
                        // Format lại các dữ liệu để hiển thị
                        switch (format) {
                            case `dd/mm/yyyy`:
                                value = formatDate(value);
                                td.css({ "text-align": "center" });
                                th.css({ "text-align": "center" });
                                break;
                            case `money`:
                                value = formatMoney(value);
                                td.css({ "text-align": "right" });
                                $(`th[format=${format}]`).css({ "text-align": "right" });
                                break;
                            default:
                        }
                        if (index == ths.length - 1) {
                            $(td).addClass(`last-field`);
                        }
                        // Thêm tooltip khi bị ẩn thông tin
                        th = $(th).attr(`title`, th.innerHTML);
                        td.attr(`title`, value);
                        td.attr(`id`, fieldname);
                        td.append(value);
                        tr.append(td);
                    })
                    // Gán giá trị ID cho mỗi bản ghi
                    tr.data(`recordId`, obj[me.entityId]);
                    $(`table tbody`).append(tr);
                })
                $(`.total`).text(count);
                $(`.loading-data`).hide();
            }).fail(function (res) {

            })
        } catch (e) {
            console.log(e);
        }
    }
}
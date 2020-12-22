
class BaseJS {
    constructor() {
        this.host = ``
        this.api = null
        this.setApi()
        this.getDataForSelectTag()
        this.loadData()
        this.initEvent()
        this.initEventCustom()
    }

    /**
     * set url để get dữ liệu về 
     * CreatedBy: BTDung
     * */
    setApi() {

    }

    /**
     * Cho phép các JS con có thể khởi tạo các event riêng
     * CreatedBy: BTDung
     * */
    initEventCustom() {

    }

    /**
     * Khởi tạo action cho các sự kiện trong trang
     * CreatedBy: BTDung
     * */
    initEvent() {
        // Sự kiện load lại trang
        $(`.btn-sync`).click(this.loadData.bind(this));

        // Thêm attribute khi kích đúp vào 1 bản ghi
        $(`table tbody`).on(`click`, `tr`, this.rowOnClick);

        // Thêm class khi chọn navbar
        $(`.navbar-content .navbar-item`).click(this.navbarOnClick);

        //Hiển thị thông tin chi tiêt khi click đúp chuột 1 bản ghi trên danh sách dữ liệu, fill thông tin có sẵn vào form
        $(`table tbody`).on(`dblclick`, `tr`, this.dblClickOnRecord.bind(this));

        // Validate các trường cần điền đầy đủ thông tin
        $(`input[required]`).blur(this.validateInputRequired);

        // Validate email đúng định dạng
        $(`input[type="email"]`).blur(this.validateInputEmailData);

        // Loại bỏ hàng được chọn khi nhấn vào các phạm vi không phải table
        $(`.navbar, .header, .header-content, .pagination`).click(function () {
            $(`.row-selected`).removeClass(`row-selected`);
        })
    }

    /**
     *  Load dữ liệu cho trang 
     *  CreatedBy: BTDung
     * */
    loadData() {
        var me = this;
        try {
            var count = 0;
            $(`table tbody`).empty();
            var ths = $(`table thead th`);
            $(`.loading-data`).show();
            $.ajax({
                url: me.host + me.api,
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
                        var format = $(th).attr(`format`);
                        // Format lại các dữ liệu để hiển thị
                        switch (format) {
                            case `dd/mm/yyyy`:
                                value = formatDate(value);
                                td.css({ "text-align": "center" });
                                $(th).css({ "text-align": "center" });
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
                $(`select.m-filter, input.input-search`).val(``);
                //showSuccessMessenger("Tải dữ liệu thành công!");
            })
                .fail(function (res) {
                    showFailMessenger("Tải dữ liệu thất bại!")
                    $(`.loading-data`).hide();
                })
        } catch (e) {

        }
    }

    /**
     * Hiển thị dialog thêm bản ghi khi nhấn nút thêm
     * CreatedBy: BTDung
     * */
    btnAddOnClick() {
        try {
            this.FormMode = `Add`;
            var me = this;
            var inputs = $(`input[fieldname], select[fieldid]`);
            $.each(inputs, function (index, input) {
                if (input.type != `radio`)
                    $(input).val(``);
            })
            $.ajax({
                url: me.host + me.api + `/` + me.entityCode.toLowerCase(),
                method: "GET"
            }).done(function (res) {
                $(`input[fieldname=${me.entityCode}]`).val(res);
            })
            // Lấy dữ liệu nhóm 
            me.getDataForSelectTag();
            commonJS.dialogDetail.dialog(`open`);
        } catch (e) {

        }
    }

    /**
     * Ẩn form chi tiết khi nhấn nút huỷ
     * CreatedBy: BTDung
     * */
    btnCancelOnClick() {
        commonJS.dialogDetail.dialog(`close`);
    }

    /**
     * Thêm mới hoặc sửa dữ liệu khi nhấn nút lưu
     * CreatedBy: BTDung
     * */
    btnSaveOnClick() {
        try {
            var me = this;
            // Validate dữ liệu
            var inputValidates = $(`input[required], input[type="email"]`);
            $.each(inputValidates, function (index, input) {
                $(this).trigger('blur');
            })
            var inputNotValids = $(`input[validate="false"]`);
            if (inputNotValids && inputNotValids.length > 0) {
                $(`.data-invalid .dialog-body p`).text(``).text("Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.");
                commonJS.dialogNotify.dialog(`open`);
                inputNotValids[0].focus();
            }
            else {
                //Thu thập thông tin => build thành object
                var inputs = $(`input[fieldname], select[fieldname]`);
                var entity = {};
                $.each(inputs, function (index, input) {
                    var fieldname = $(input).attr(`fieldname`);
                    var value = $(input).val();
                    if (this.type == `radio`) {
                        if (this.checked) {
                            entity[fieldname] = value;
                        }
                    } else {
                        if (this.type == `select-one`) {
                            var fieldid = $(input).attr(`fieldid`);
                            if (fieldid)
                                entity[fieldid] = value;
                            else
                                entity[fieldname] = value;
                        }
                        else {
                            if (this.className == `hasDatepicker`) {
                                value = stringToDate(this.value);
                                entity[fieldname] = value;
                            }
                            else {
                                if (this.className == "money") {
                                    value = value.replace(".", ``);
                                    entity[fieldname] = value;
                                }
                                entity[fieldname] = value;
                            }
                        }
                    }

                })
                //Gọi API để đẩy lưu dữ liệu
                var method = `POST`,
                    msg = "Thêm mới",
                    url = me.host + me.api;
                if (me.FormMode == `Edit`) {
                    method = `PUT`;
                    entity[me.entityId] = $(`tr.row-selected`).data(`recordId`);
                    msg = "Sửa thông tin";
                    url = url + `/` + entity[me.entityId]
                }
                $.ajax({
                    url: url,
                    method: method,
                    data: JSON.stringify(entity),
                    contentType: "application/json"
                }).done(function (res) {
                    // Đưa ra thông báo thành công => ẩn form => load lại trang
                    showSuccessMessenger(msg + ` thành công!`);
                    commonJS.dialogDetail.dialog(`close`);
                    me.loadData();
                }).fail(function (res) {
                    // Đưa ra các lỗi cụ thể
                    var errMsg = ``
                    $.each(res.responseJSON.Data, function (index, err) {
                        errMsg += err + `\n`;
                    })
                    $(`.data-invalid .dialog-body p`).text(``).text(errMsg);
                    commonJS.dialogNotify.dialog(`open`);
                    showFailMessenger(msg + ` thất bại!`);
                })
            }
        } catch (e) {

        }
    }

    /**
     * Hiển thị dialog xác nhận xoá bản ghi khi nhấn nút xoá
     * CreatedBy: BTDung
     * */
    btnDeleteOnClick() {
        var selectedRecord = $(`tr.row-selected`);
        if (selectedRecord.length == 0) {
            showNotifyMessenger("Bạn chưa chọn bản ghi nào!")
        }
        else
            commonJS.dialogConfirm.dialog(`open`);
    }

    /**
     * Xoá bản ghi khi nhấn đồng ý xoá
     * CreatedBy: BTDung
     * */
    btnConfirmDeleteOnClick() {
        try {
            var me = this;
            var selectedRecord = $(`tr.row-selected`);
            $.ajax({
                url: me.host + me.api + `/` + selectedRecord.data(`recordId`),
                method: `DELETE`
            }).done(function (res) {
                // Đóng dialog, đưa ra thông báo thành công
                commonJS.dialogConfirm.dialog(`close`);
                commonJS.dialogDetail.dialog(`close`);
                showSuccessMessenger(`Xoá thành công!`);
                // Load lại dữ liệu
                me.loadData();
            }).fail(function (res) {
                // Đóng dialog, đưa ra thông báo thành công
                commonJS.dialogConfirm.dialog(`close`);
                commonJS.dialogDetail.dialog(`close`);
                showFailMessenger(`Xoá thất bại`);
            })
        } catch (e) {

        }
    }

    /**
     * Đóng dialog xác nhận xoá bản ghi
     * CreatedBy: BTDung
     * */
    btnCancelDeleteOnClick() {
        commonJS.dialogConfirm.dialog(`close`);
        commonJS.dialogNotify.dialog(`close`);
    }

    /**
     * Lấy dữ liệu bản ghi được chọn rồi fill vào form
     * CreatedBy: BTDung
     */
    dblClickOnRecord() {
        try {
            this.FormMode = `Edit`;
            var me = this;
            var selectedRecord = $(`tr.row-selected`);
            commonJS.dialogDetail.dialog(`open`);
            var inputs = $(`#dialog input[fieldname], #dialog select[fieldname]`);
            inputs.removeClass("border-red");
            me.getDataForSelectTag();
            //Lấy dữ liệu chi tiết của bản ghi
            $.ajax({
                url: me.host + me.api + `/` + selectedRecord.data(`recordId`),
                method: "GET"
            }).done(function (res) {
                // Binding dữ liệu vào các input
                $.each(inputs, function (index, input) {
                    var fieldname = $(input).attr(`fieldname`);
                    var value = res[fieldname];
                    if (input.type == `radio`) {
                        if (input.value == value) {
                            this.checked = true;
                        }
                    } else {
                        switch (input.type) {
                            case `select-one`:
                                var fieldid = $(input).attr(`fieldid`);
                                if (fieldid)
                                    value = res[fieldid];
                                else
                                    value = res[fieldname];
                                break;
                            default: value = res[fieldname];
                                break;
                        }
                        if (this.className == `hasDatepicker`) {
                            value = formatDate(value);
                        }
                        else if (this.className == `money`) {
                            value = formatMoney(value);
                        }
                        $(input).val(value);
                    }
                })
            }).fail(function (res) {

            })
        } catch (e) {
        }
    }

    /**
     * Validate dữ liệu text khi nhập input
     * CreatedBy: BTDung
     * */
    validateInputRequired() {
        // Kiểm tra dữ liệu
        var value = $(this).val();
        if (!value) {
            $(this).addClass(`border-red`);
            $(this).attr('title', `Cần điền đầy đủ thông tin này`);
            $(this).attr(`validate`, `false`);
        } else {
            $(this).removeClass(`border-red`);
            $(this).removeAttr('title', `Cần điền đầy đủ thông tin này`);
            $(this).attr(`validate`, `true`);
        }
    }

    /**
     * Validate dữ liệu email khi nhập input
     * CreatedBy: BTDung
     * */
    validateInputEmailData() {
        var value = $(this).val();
        var testEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (testEmail.test(value)) {
            $(this).removeClass(`border-red`);
            $(this).removeAttr(`title`, `Email không đúng định dạng`);
            $(this).attr(`validate`, `true`);
        } else {
            $(this).addClass(`border-red`);
            $(this).attr(`title`, `Email không đúng định dạng`);
            $(this).attr(`validate`, `false`);
        }
    }

    /**
     * Lấy dữ liệu fill vào các combo-box
     * CreatedBy: BTDung
     * */
    getDataForSelectTag() {
        try {
            var me = this;
            var selects = $(`select[api]`);
            $(`.loading-data`).show();
            $.each(selects, function (index, select) {
                $.ajax({
                    url: me.host + $(select).attr(`api`),
                    method: "GET",
                    async: false
                }).done(function (res) {
                    $(select).empty();
                    if (select.className == `m-filter`) {
                        var option = $(`<option value="">Tất cả</option>`);
                        $(select).append(option);
                    }
                    $.each(res, function (index, obj) {
                        var fieldname = $(select).attr(`fieldname`);
                        var fieldid = $(select).attr(`fieldid`);
                        option = $(`<option value=${obj[fieldid]}>${obj[fieldname]}</option>`);
                        $(select).append(option);
                        $(`.loading-data`).hide();
                    })
                }).fail(function (res) {

                })
            })
        } catch (e) {
            console.log(e);
        }
    }

    /** 
     *  Thêm xoá attribute cho các hàng trong bảng khi được chọn
     * CreatedBy: BTDung
     * */
    rowOnClick() {
        $(this).siblings().removeClass(`row-selected`);
        $(this).addClass(`row-selected`);
    }

    /**
     * Thêm class thể hiện tab nào đang được chọn
     * CreatedBy: BTDUNG
     * */
    navbarOnClick() {
        $(this).siblings().removeClass(`active`);
        $(this).addClass(`active`)
    }
}
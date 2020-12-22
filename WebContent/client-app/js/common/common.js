

$(document).ready(function () {
    setSizeInputSearch();
})

/**
 * Định dạng date về dạng ngày/tháng/năm
 * @param {Date} date
 * CreatedBy: BTDung (2/12/2020)
 */
function formatDate(date) {
    try {
        var date = new Date(date);
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? `0` + day : day;
        month = month < 10 ? `0` + month : month;
        return day + `/` + month + `/` + year;
    } catch (e) {

    }
}

/**
 * Định dạng hiển thị tiền tệ
 * @param {Number} money
 * CreatedBy: BTDung (2/12/2020)
 */
function formatMoney(money) {
    try {
        if (money) {
            return money.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
    } catch (e) {
        console.log(e);
    }
}

commonJS = {
    /**
     * Ẩn hiện dialog thông tin ch tiết
     * CreatedBy: BTDung (2/12/2020)
     */
    dialogDetail: $(".dialog-modal").dialog({
        autoOpen: false,
        fluid: true,
        minWidth: 700,
        resizable: true,
        position: ({
            my: "center",
            at: "center",
            of: window
        }),
        modal: true,
        title: `Thông tin `
    }),

    /**
     * Khai báo dialog xác nhận xoá bản ghi
     * CreatedBy: BTDung (2/12/2020)
     */
    dialogConfirm: $(`.employee-delete`).dialog({
        title: `Xác nhận xoá`,
        autoOpen: false,
        modal: true,
        open: function () {
            $('.FullName').text($(`.row-selected td[id="FullName"]`).html());
            $(`.CustomerCode`).text($(`.row-selected td[id="CustomerCode"]`).html());
            $(`.EmployeeCode`).text($(`.row-selected td[id="EmployeeCode"]`).html());
        }
    }),

    /**
     * Khai báo popup thông báo dữ liệu không hợp lệ
     * CreatedBy: BTDung (2/12/2020)
     */
    dialogNotify: $(`.data-invalid`).dialog({
        title: `Thông báo`,
        autoOpen: false,
        modal: true
    }),
}

/**
 * Chuyển đổi string về ngày tháng
 * @param {string} string
 * CreatedBy: BTDung (2/12/2020)
 */
function stringToDate(string) {
    try {
        var arr = string.split(`/`);
        return new Date(arr[2] + '-' + arr[1] + '-' + arr[0]);
    } catch (e) {
        console.log(e);
    }
}

/**
 * Hiển thị popup thông báo thành công
 * @param {any} msg
 * CreatedBy: BTDung (2/12/2020)
 */
function showSuccessMessenger(msg) {
    $(`.messenger-success`).text(msg).slideDown(1000).delay(2000).slideUp(1000);
}

/**
 * Hiển thị popup thông báo thất bại
 * @param {any} msg
 * CreatedBy: BTDung (2/12/2020)
 */
function showFailMessenger(msg) {
    $(`.messenger-fail`).text(msg).slideDown(1000).delay(2000).slideUp(1000);
}

function showNotifyMessenger(msg) {
    $(`.messenger-notify`).text(msg).slideDown(1000).delay(2000).slideUp(1000);

}
/**
 *  Set kích thước các input có placholder
 * CreatedBy: BTDung (2/12/2020)
 */
function setSizeInputSearch() {
    $("input.input-search").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length - 10);
    })
}

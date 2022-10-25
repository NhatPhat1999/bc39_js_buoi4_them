// bt1
document.getElementById("btnNgayhomqua").onclick = function () {
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;
    if (day === 1) {
        if (month === 5 || month === 7 || month === 10 || month === 12) {
            day = 30; month--;
        }

        else if (month === 2 || month === 4 || month === 6 || month === 8 || month === 9 || month === 11) {
            day = 31;
            month--;
        }

        else if (month === 1) {
            day = 31;
            month = 12;
            year--;
        }

        else if (month === 3) {
            month--;
            if (year % 4 === 0) { day = 29; }
            else { day = 28 }
        }
    } else {
        day--;
    }
    document.getElementById("infoNTN").innerHTML = day + "/" + month + "/" + year;
}

document.getElementById("btnNgaymai").onclick = function () {
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 30) {
            day = 1;
            month++
        } else {
            day++;
        }
    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {
        if (day === 31) {
            day = 1;
            month++;
        } else {
            day++;
        }
    } else if (month === 12) {
        if (day === 31) {
            day = 1;
            month = 1;
            year++;
        } else {
            day++;
        }

    } else if (month === 2) {
        if (year % 4 === 0 && day === 29) {
            day = 1;
            month++;
        } else if (year % 4 !== 0 && day === 28) {
            day = 1;
            month++;
        } else {
            day++;
        }
    } else {
        day++;
    }
    document.getElementById("infoNTN").innerHTML = day + "/" + month + "/" + year;
}


// bt2
document.getElementById("btnSongay").onclick = function () {
    var dayBT2 = document.getElementById("dayBT2").value * 1;
    var monthBT2 = document.getElementById("monthBT2").value * 1;
    var yearBT2 = document.getElementById("yearBT2").value * 1;

    var soNgay = "";
    if (monthBT2 === 1 || monthBT2 === 3 || monthBT2 === 5 || monthBT2 === 7 || monthBT2 === 8 || monthBT2 === 10 || monthBT2 === 12) {
        soNgay = 31;
    } else if (monthBT2 === 4 || monthBT2 === 6 || monthBT2 === 9 || monthBT2 === 11) {
        soNgay = 30;
    } else if (monthBT2 === 2) {
        if (yearBT2 % 4 === 0) {
            soNgay = 29;
        } else {
            soNgay = 28;
        }
    }
    document.getElementById("infoSongay").innerHTML = "tháng " + monthBT2 + ", năm " + yearBT2 + " có " + soNgay + " ngày";
}

// bt3
document.getElementById("btnSo3chuso").onclick = function () {
    var so3chuso = document.getElementById("so3chuso").value * 1;
    var soHangtram = Math.floor(so3chuso / 100);
    var soHangchuc = Math.floor((so3chuso % 100) / 10);
    var soHangdv = so3chuso % 10;

    var cachDochangtram = soThanhchu(soHangtram);
    var cachDochangchuc = soThanhchu(soHangchuc);
    var cachDochangdv = soThanhchu(soHangdv);
    if (soHangdv === 0) {
        cachDochangdv = "";
    }
    if (soHangchuc === 0) {
        if (soHangdv === 0) {
            cachDochangchuc = "";
        } else {
            cachDochangchuc = "lẻ ";
        }
    } else {
        cachDochangchuc += " mươi ";
    }
    cachDochangtram = soThanhchu(soHangtram) + " trăm ";
    var cachDoc = cachDochangtram + cachDochangchuc + cachDochangdv;
    document.getElementById("infoSo3chuso").innerHTML = cachDoc;
}

function soThanhchu(so) {
    if (so === 1) { so = "một" }
    else if (so === 2) { so = "hai" }
    else if (so === 3) { so = "ba" }
    else if (so === 4) { so = "bốn" }
    else if (so === 5) { so = "năm" }
    else if (so === 6) { so = "sáu" }
    else if (so === 7) { so = "bảy" }
    else if (so === 8) { so = "tám" }
    else if (so === 9) { so = "chín" }
    return so;
}


// bt4
document.getElementById("btnSvxanhat").onclick = function () {
    var toadoXtruong = document.getElementById("toadoXtruong").value * 1;
    var toadoYtruong = document.getElementById("toadoYtruong").value * 1;

    var tenSv1 = document.getElementById("tenSv1").value;
    var toadoXsv1 = document.getElementById("toadoXsv1").value * 1;
    var toadoYsv1 = document.getElementById("toadoYsv1").value * 1;
    var khoangCachsv1 = tinhKhoangcach(toadoXsv1, toadoYsv1, toadoXtruong, toadoYtruong);

    var tenSv2 = document.getElementById("tenSv2").value;
    var toadoXsv2 = document.getElementById("toadoXsv2").value * 1;
    var toadoYsv2 = document.getElementById("toadoYsv2").value * 1;
    var khoangCachsv2 = tinhKhoangcach(toadoXsv2, toadoYsv2, toadoXtruong, toadoYtruong);


    var tenSv3 = document.getElementById("tenSv3").value;
    var toadoXsv3 = document.getElementById("toadoXsv3").value * 1;
    var toadoYsv3 = document.getElementById("toadoYsv3").value * 1;
    var khoangCachsv3 = tinhKhoangcach(toadoXsv3, toadoYsv3, toadoXtruong, toadoYtruong);
    var svXanhat = khoangCachxanhat(khoangCachsv1, tenSv1, khoangCachsv2, tenSv2, khoangCachsv3, tenSv3);

    document.getElementById("infoSvxanhat").innerHTML = "Sinh viên xa trường nhất là: " + svXanhat;
}



function tinhKhoangcach(toadoX, toadoY, toadoXtruong, toadoYtruong) {
    khoangCach = Math.sqrt(Math.pow((toadoX - toadoXtruong), 2) + Math.pow((toadoY - toadoYtruong), 2));
    return khoangCach;
}

function khoangCachxanhat(khoangCachsv1, tenSv1, khoangCachsv2, tenSv2, khoangCachsv3, tenSv3) {
    var max = khoangCachsv1;
    var svXanhat = tenSv1;
    if (khoangCachsv2 > max) {
        max = khoangCachsv2;
        svXanhat = tenSv2;
    }
    if (khoangCachsv3 > max) {
        max = khoangCachsv3;
        svXanhat = tenSv3;
    }
    return svXanhat;
}
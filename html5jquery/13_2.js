function splitProc(str)
{
    var s = str.split("&"), sid = s[0].split('='), spw = s[1].split('='),
        id = sid[1], pw = spw[1];
        console.log(sid);
        console.log(spw);
        //alert(sid)
        //alert(spw)
    return  "내아이디는<b stle='color:red'>" + id + "</b>이고 비번은 <b style='color:blue'>" + pw + "</b>입니다";
}

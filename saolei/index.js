window.onload = function () {

    init()

    lei()

    //console.log(navigator.appName)

    $(function () {
        $(".ys").click(function () {
            if ($(this).hasClass("LEI")) {
                $(this).removeClass("LEI")

                alert("游戏结束")
            } else {
                $(this).removeClass("bg")
                $(this).addClass("meilei")

                panleishu(this.id)
            }
            //console.log(this.id);
        })
        var temp = 0
        $(".ys").bind("contextmenu", function () {

            if ($(this).hasClass("LEI1")) {

                $(this).addClass("biaoji")
                temp = temp + 1
            } else {

                $(this).addClass("biaoji")


            }
            console.log(temp);
            if (temp == 15) {
                alert("通过游戏")
            }
            console.log("");
            return false
        })
    })

    function init() {
        var box = document.getElementById("box")
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                var c = document.createElement("div")
                c.classList.add("ys")
                c.classList.add("bg")
                c.setAttribute("id", a + "-" + b)
                box.appendChild(c)
            }
        }
    }

    function lei() {
        //产生雷的数量
        var nu = 15
        var list = []
        while (nu) {
            var num = Math.floor(Math.random() * 10);
            var num1 = Math.floor(Math.random() * 10);
            var temp = num + "-" + num1
            list.push(temp)
            list.sort()
            for (var i = 0; i < list.length; i++) {
                //判断产生的随机数是否有相同的数
                if (list[i] == list[i + 1]) {
                    list.splice(i, 1)
                    var num = Math.floor(Math.random() * 10);
                    var num = Math.floor(Math.random() * 10);
                    var temp = num + "-" + num1
                    list.push(temp)
                }
            }
            nu--;
        }
        list.sort()
        //console.log(list);
        for (var i = 1; i < list.length; i++) {
            try {
                document.getElementById(list[i]).classList.add("LEI")
                document.getElementById(list[i]).classList.add("LEI1")
            } catch (e) {
                console.log(e);
                console.log(list[i]);
            }
        }
    }

    function panleishu(id) {
        var te = id.toString()
        //console.log(te);
        var x = te.slice(0, 1)
        var y = te.slice(2, 3)
        var list1 = []

        var zuos = [parseInt(x) - 1, parseInt(y) - 1]
        var zuox = [parseInt(x) + 1, parseInt(y) - 1]
        var z = [parseInt(x), parseInt(y) - 1]
        var yous = [parseInt(x) - 1, parseInt(y) + 1]
        var youx = [parseInt(x) + 1, parseInt(y) + 1]
        var s = [parseInt(x) - 1, parseInt(y)]
        var x1 = [parseInt(x) + 1, parseInt(y)]
        var y1 = [parseInt(x), parseInt(y) + 1]

        if (y == "9" && x == "9") {
            list1.push(s, zuos, z)
        } else if (x == "0" && y == "0") {
            list1.push(y1, youx, x1)
        } else if (y == "0") {
            list1.push(s, yous, y1, youx, x1)
        } else if (x == "0") {
            list1.push(y1, youx, x1, zuox, z)
        } else if (x == "9") {
            list1.push(z, zuos, s, yous, y1)
        } else if (y == "9") {
            list1.push(s, zuos, z, x1, zuox)
        } else {
            list1.push(s, x1, z, y1, zuos, zuox, yous, youx)
        }
        setnum(list1, te)
    }

    function setnum(list1, te) {
        // console.log(list1);
        // console.log(list1);
        var tempnum = 0;
        var temp;
        for (var i = 0; i < list1.length; i++) {
            var div1 = list1[i][0] + "-" + list1[i][1]
            temp = document.getElementById(div1);

            if (temp.classList.contains("LEI")) {
                tempnum = tempnum + 1
            }

        }
        //console.log(temp);
        //console.log(tempnum);
        var num = document.getElementById(te)
        //console.log(num);
        if (tempnum !== 0) {
            num.innerHTML = (tempnum)
        } else {
            for (var i = 0; i < list1.length; i++) {

            }
        }
    }

}
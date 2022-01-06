var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.href = "./screenshot.css";
link.type = "text/css";
link.rel = "stylesheet";

function screenshot() {
  var startX, startY;
  var height = window.innerHeight;
  var width = window.innerWidth;

  //배경 어둡게
  var $screenBg = document.createElement("div");
  $screenBg.id = "screenshot_background";
  $screenBg.style.borderWidth = "0 0 " + height + "px 0";

  //마우스 이동하면서 사각형 영역
  var $screenshot = document.createElement("div");
  $screenshot.id = "screenshot";

  // <a id="target" style="display: none"></a>;

  var $imagechecker = document.createElement("a");
  $imagechecker.id = "target";
  $imagechecker.style = "display: none";

  document.querySelector("body").appendChild($screenBg);
  document.querySelector("body").appendChild($screenshot);
  document.querySelector("body").appendChild($imagechecker);

  var selectArea = false;
  var body = document.querySelector("body");

  //마우스 누르는 함수
  var mousedown = function (e) {
    e.preventDefault();
    selectArea = true;
    startX = e.clientX;
    startY = e.clientY;
    //이벤트 실행하면서 이벤트 삭제
    body.removeEventListener("mousedown", mousedown);
  };

  //마우스 누르는 이벤트 등록
  body.addEventListener("mousedown", mousedown);

  //클릭한 마우스 떼는 이벤트 함수
  var mouseup = function (e) {
    selectArea = false;
    //마우스 떼면서 마우스 무브 이벤트 삭제
    body.removeEventListener("mousemove", mousemove);
    //스크린샷을 취해 생성한 객체 삭제
    // $screenshot.parentNode.removeChild($screenshot);
    // $screenBg.parentNode.removeChild($screenBg);
    var x = e.clientX;
    var y = e.clientY;
    var top = Math.min(y, startY);
    var left = Math.min(x, startX);
    var width = Math.max(x, startX) - left;
    var height = Math.max(y, startY) - top;
    html2canvas(document.body).then(function (canvas) {
      //전체 화면 캡쳐
      //선택 영역만큼 capture
      var img = canvas.getContext("2d").getImageData(left, top, width, height);
      var c = document.createElement("canvas");
      c.width = width;
      c.height = height;
      c.getContext("2d").putImageData(img, 0, 0);
      save(c);
    });

    body.removeEventListener("mouseup", mouseup);
    //마우스 커서 기본으로 변경
    document.querySelector("body").classList.remove("edit_cursor");
  };
  body.addEventListener("mouseup", mouseup);

  //마우스 무브 함수
  function mousemove(e) {
    var x = e.clientX;
    var y = e.clientY;
    $screenshot.style.left = x;
    $screenshot.style.top = y;

    if (selectArea) {
      //캡처영역 선택
      var top = Math.min(y, startY);
      var right = width - Math.max(x, startX);
      var bottom = height - Math.max(y, startY);
      var left = Math.min(x, startX);

      $screenBg.style.borderWidth =
        top + "px " + right + "px " + bottom + "px " + left + "px";
    }
  }
  body.addEventListener("mousemove", mousemove);

  //캡처 이미지 저장
  function save(canvas) {
    if (navigator.msSaveBlob) {
      var blob = canvas.msToBlob();
      return navigator.msSaveBlob(blob, "hello.jpg");
    } else {
      var el = document.getElementById("target");
      el.href = canvas.toDataURL("image/jpeg");
      // console.log("check 1");
      el.download = "hello.jpg";
      el.click();
    }
  }
}

console.log("testtest1");
screenshot();
console.log("testtest2");

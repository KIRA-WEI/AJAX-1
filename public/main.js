
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/5.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response);
      console.log(request.response);
      const bool = JSON.parse(request.response);
      console.log(typeof bool);
      console.log(bool);
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick= () =>{
  const request = new XMLHttpRequest();
  request.open('GET','/3.html');
  request.onreadystatechange = () => {
console.log(request.readyState);
if(request.readyState === 4){
  if(request.status >= 200 && request.status < 300){
    //创建div标签
    const div = document.createElement("div");
    //填写div内容
div.innerHTML = request.response;
//将div插入到身体中
document.body.appendChild(div);
  } else {
    alert("加载 html失败");
  }
}
  };
request.send();
};

getJS.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open('GET','/2.js');
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status>=200 && request.status<300){
        //创建script标签
        const script = document.createElement("script");
        //填写script内容
script.innerHTML = request.response;
//插到身体里
document.body.appendChild(script);
      }else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();//readyState = 0
  request.open('GET', '/style.css'); //readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

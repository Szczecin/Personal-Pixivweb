# 天真，真的以为我会仔细讲吗？(￣ε(#￣) Σ
I really,really,really,really ^ N don't want to explain it...<br>

<div align=center><img src="" /></div><br>
<div align=center><img src="" /></div><br>

## 层次结构/Hierarchical structure
<div align=center>re/nt</div>
<div align=center>↓↓↓↓↓</div>
<div align=center>search/footer/description</div>
<div align=center>↓↓↓↓↓</div>
<div align=center>good</div>
<div align=center>↓↓↓↓↓</div>
<div align=center>limit</div>
<div align=center>↓↓↓↓↓</div>
<div align=center>follow</div>
<div align=center>↓↓↓↓↓</div>
<div align=center>backpic</div><br>

## 部分代码注解/Partial Code Annotations
### 背景切换/Background switching
```JavaScript
function cycle(){
	var counter = Math.floor((Math.random() * heads.length));
  document.getElementById("backimg").src = pictures[counter];
```
```HTML5
<div class="backpic">
			<img src="pic/img/1.png" alt="" id="backimg">
</div>
```
```CSS
.backpic{
	height:100%;
	width:100%;
	position:absolute;
	z-index:2;
}

#backimg {
  	width: 100%;
  	height: 100%;
	background-size: contain|cover;
	opacity:0.7;
	z-index:-1;
}
```
### 方块切片/Block slice
```JavaScript
    ..........
    document.getElementById("cubeimg").src = pictures[counter];
    ..........
```
```HTML5
<div class="top">
		<img src="pic/img/1.png" alt="" id="cubeimg">
</div>
```
```CSS
.top{
	width: 100%;
	height: 100%;
	top: 0px;
	position: relative;
	z-index: 4;
}

#cubeimg {
	position:relative;
  	width: 100%;
  	height: 100%;
	background-size: contain|cover;
	z-index:5;

  	-webkit-clip-path: polygon(49% 3%, 97% 26%, 97% 70%, 49% 98%, 1% 70%, 1% 26%);
  /* -webkit-clip-path:polygon(143px 3px, 286px 84px, 284px 250px, 143px 328px, 3px 252px, -1px 85px); */
  	-webkit-animation: pic_show 20s cubic-bezier(0.27, 0.25, 0.76, 0.76) infinite;
	
	-moz-clip-path: polygon(49% 3%, 97% 26%, 97% 70%, 49% 98%, 1% 70%, 1% 26%);
	-moz-animation: pic_show 20s cubic-bezier(0.27, 0.25, 0.76, 0.76) infinite;
  	animation: pic_show 20s cubic-bezier(0.27, 0.25, 0.76, 0.76) infinite;
}

@-webkit-keyframes pic_show {
  0% {
    -webkit-clip-path: polygon(49% 3%, 97% 26%, 97% 70%, 49% 98%, 1% 70%, 1% 26%);
  }
  10% {
    -webkit-clip-path: polygon(60% 5%, 99% 32%, 98% 75%, 43% 98%, 7% 73%, 5% 24%);
  }
  20% {
    -webkit-clip-path: polygon(69% 8%, 96% 37%, 95% 85%, 36% 98%, 9% 70%, 9% 21%);
  }
  30% {
    -webkit-clip-path: polygon(78% 10%, 95% 41%, 95% 90%, 30% 98%, 13% 68%, 13% 19%);
  }
}
```
### 随机歌曲/Random Songs
```JavaScript
function run(){
	var mp3 = Math.floor((Math.random() * music.length));
	document.getElementById("singer").innerHTML = singer[mp3];
	document.getElementById("music").src = music[mp3];
}
```
```HTML5
<div id="music_right">
			<a id="singer">松谷卓 - 共病文庫</a>
			<div class="audio_right">
			       <audio id="music" controls="controls" src="music/1.mp3" autoplay="autoplay" loop="loop"></audio>
			</div>
</div>
```
### 搜索引擎/Search Engines
```HTML5
<div class="search">
    	<div class="container">
    		   <form method=get action="http://www.google.com/search"  target="_blank" id="parent">
    		        <input type="text" name=q id="search" placeholder="Why not Google?">
    		      	<input type="image" name="search" value="" id="btn">
    		      	<span class="fa fa-search fa-lg" id="search_img"></span>
  		     </form>
  		</div>
      <div class="search_logo">
					<a href="https://cn.bing.com" target="_blank">
						<img src="pic/logo/search.png" alt="To Google" id="google_logo">
					</a>
			</div>
</div>
```
```CSS
.container {
    height: 70px;
    width: 80%;
	float: right;
	margin: 0;
    padding: 0;
	position:relative;
}

#parent {
    position: absolute;
}

#search {
    width: 300px;
    height: 40px;
    border-radius: 18px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 20px;
	margin-top: 10px;
    position: absolute;
	z-index:1100;
}

#btn {
    height: 43px;
    width: 44px;
    position: absolute;
    top: 10px;
    left: 278px;
    border-radius: 18px;
    outline: none;
    cursor: pointer;
	z-index: 1200;
}

.search {
	height: 70px;
	width: 100%;
	top: 0px;
	position: fixed;
	z-index: 1000;
}

#search_img {
	margin-left: 290px;
	margin-top: 22px;
	position: absolute;
	z-index: 1150;
}

.search_logo {
	height: 70px;
	width: 20%;
	float:left;
	text-align: center;
	position:absolute;
}

#google_logo {
	height: 85px;
	width: auto;
}
```
### 网页导航/Webpage navigation
```HTML5
.................
<li class="item">
		<a href="https://www.bilibili.com" target="_blank">
		  <img src="pic/logo/Blibili.png" id="favicon" align="left">
			<span>Bilibili</span>
		</a>
</li>
.................
```
```CSS
._footer-content-item{
	display:inline-block;
	position:relative;
	z-index:997;
	line-height:30px;
	height:30px;
	padding:0 10px;
	cursor:pointer;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none
}

._footer-content-item.right{
	float:right
}

._footer-content-item.feedback{
	height:100%;
	padding:0 10px;
	line-height:30px;
	background-color:#757c80;
	color:#fff;
	cursor:pointer
}

._footer-content-item:hover{
	background-color:hsla(0,0%,100%,.1)
}
```
### 社交平台/Social Platform
```HTML5
..................
<dl class="links">
    <dt>哔哩哔哩[bilibili]</dt>
		<dd>
		    <div class="head_pic">
						<a href="https://space.bilibili.com/1605910" target="_blank">
								<img src="pic/logo/bilibili.jpg" id="headimg">
						</a>
				</div>
				<ul>
						<li><a href="https://space.bilibili.com/1605910" target="_blank">ヴァン青</a></li>
				</ul>
		</dd>
</dl>
..................
```
```CSS
._footer-content-item .content-popup{
	display:none;
	position:absolute;
	left:0;
	bottom:30px;
	padding:10px;
	border-radius:5px 5px 0 0;
	min-width:100%;
	cursor:default;
	-webkit-user-select:auto;
	-moz-user-select:auto;
	-ms-user-select:auto;
	user-select:auto
}

._footer-content-item:hover .content-popup{
	display:block
}
```
### 作者信息/Author Information
```JavaScript
    ............................................................
    document.getElementById("artist_head").src = heads[counter];
		document.getElementById("works").innerHTML = work[counter];
		document.getElementById("author").innerHTML = author[counter];
		document.getElementById("authors").href = authors[counter];
		document.getElementById("works").href = works[counter];
    ............................................................
```
```HTML5
<div class="description">
		<div class="artist">
			<a id="authors" target="_blank" href="https://www.pixiv.net/member.php?id=23223750">
				<img alt="heads" src="pic/head/1.png" id="artist_head">
			</a>
		</div>
		<div class="introduce">
			<div id="work_name">
				<a id="works" target="_blank" href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=72525491">
					She is on the calm stage.
				</a>
			</div>
			<div id="author">banishment</div>
		</div>
	</div>
```
### 鼠标移动/Mouse movement
```HTML5
<div class="down">
		<canvas>
		</canvas>
		<script type="text/javascript" src="js/newfollow.js"></script>
</div>
```
### 问候语/Greetings
```JavaScript
function Goodmoring(){
	if(hours>=6 && hours<12)
		document.getElementsById("good").innerHTML = good[0];
	if(hours>=12 && hours<18)
		document.getElementById("good").innerHTML = good[1];
	if(hours>=18 && hours<24)
		document.getElementById("good").innerHTML = good[2];
	if(hours>=0 && hours<6)
		document.getElementById("good").innerHTML = good[3];
}
```
### 数字浮动/Digital floating
```JavaScript
$(function() {
    let numbers = $('.g-number');
    
    setInterval(() => {
        Array.prototype.slice.call(numbers).forEach((key) => {
            $(key).attr('data-digit', parseInt(Math.random() * 10)); 
        });
    }, 2000);
});
```
```HTML5
      ..............................................
      <div class="g-number preserve" data-digit="1">
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      <div class="g-line preserve translate"></div>
      </div>
      .............................................
```
### 瀑布流/Falls
懒，不想写了，反正也没人看(´；ω；`)<br>
Lazy, do not want to write, anyway, no one read it...<br>


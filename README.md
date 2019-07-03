# Personal-Pixivweb
This is a web page which is linking with Pixiv,maybe.<br>

这里是渣新自己写的一份HTML5期中作业（W大雾W），是一个仿Pixiv登录页制作的个人主页，大概吧？(°∀°)ﾉ<br>
I hope you don't expect it too much.<br>

<div align=center><img src="" />绝对不可以笑哦</div><br>
<br>

## 效果预览/Effect Preview(｀・ω・´)
温馨提示：使用Chrome食用体验更佳哦~<br>
Warm Tip: Better Browsing Experience with Chrome~<br>

![image]()<br>
<br>

## 食用说明/InstructionsΣ(ﾟдﾟ;)
警告：由于个人能力不足，导致主页还无法同步链接到Pixiv个人账号，使用操作会显繁琐QAQ<br>
个人会努力在之后进行项目更新，进行背景图与P站日榜的同步（或者个人帐户收藏夹同步），把设计的不太简陋的博客一同丢上来（咕咕咕）<br>
Warning: Due to insufficient personal ability, the home page can not link to Pixiv personal account synchronously, and the operation will be tedious.QAQ<br>
I will try to update the project later, synchronize the background map with the daily list of P stations (or personal account favorites), and throw the poorly designed blog together.ORZ<br>

<div align=center><img src="" />你的进度怎么样了</div><br>
<br>

### 背景替换/Background substitution(=・ω・=)
1.将想要作为背景的图片保存到pic/img文件夹，并重命名为1.png,2.png……<br>
Save the image you want as background to the PIC / img folder and rename it as 1. png, 2. png...<br>

<div align=center><img src="" /></div><br>

2.使用Dreamweaver或其他HTML编译器（图中是Notepad++），按命名顺序更改index.html中的var works参数变量，改为作品链接<br>
Use Dreamweaver or other HTML compilers (Notepad++) to change the VaR works parameter variables in index. HTML in naming order to work links.<br>

```JavaScript
var works = ["https://www.pixiv.net/member_illust.php?mode=medium&illust_id=72525491",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=66347331",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74759884",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=75102830",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=75087826",
      		...............................................................................
      		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74130354",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=73891130",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=58728655",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=73636925",
		"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74228429"];
```

3.按命名顺序更改var work参数变量，改为作品名<br>
Change var work parameter variables in naming order to work name.<br>

```JavaScript
var work = ["She is on the calm stage.","圧倒的美少女","画个熊天使","芸カ新刊「START LINE」サンプル","2",
            .........................................................................................
            "好きだったよ","楔","波の音","WIND~","割れてしまう前に"];
```

### 作者替换/Author Replacement(=・ω・=)
1.按照背景图片的命名顺序，将作者头像保存到pic/head文件夹，并重命名为1.png,2.png……<br>
According to the naming order of background pictures, the author's head is saved in the PIC / head folder and renamed 1.png, 2.png...<br>

<div align=center><img src="" /></div><br>

2.使用Dreamweaver或其他HTML编译器（图中是Notepad++），按命名顺序更改index.html中的var authors参数变量，改为作者主页链接<br>
Using Dreamweaver or other HTML compilers (Notepad++), change the var authors parameter variables in index. HTML in naming order to the author's home page link.<br>

```JavaScript
var authors = ["https://www.pixiv.net/member.php?id=23223750",
		"https://www.pixiv.net/member.php?id=10511528",
		"https://www.pixiv.net/member.php?id=7253174",
		"https://www.pixiv.net/member.php?id=12845810",
		"https://www.pixiv.net/member.php?id=420928",
         	..............................................
        	"https://www.pixiv.net/member.php?id=431873",
		"https://www.pixiv.net/member.php?id=1409819",
		"https://www.pixiv.net/member.php?id=337971",
		"https://www.pixiv.net/member.php?id=10710834",
		"https://www.pixiv.net/member.php?id=396769"];
```

3.按命名顺序更改var author参数变量，改为作者名<br>
Change var author parameter variable to author name in naming order.<br>

```JavaScript
var author = ["banishment","鮎瀬サウリ","卧龙先生的爸爸","焦茶 ◆ 芸カ キ01","_LM7_",
              ....................................................................
              "しぐれうい","ふすい","U35(うみこ)","Novelance","げみ"];
```

### 社交平台/Social Platform(=・ω・=)
1.将自己社交平台头像保存到pic/logo文件夹，并重命名为bilibili.jpg,twitter.jpg……<br>
Save your social platform avatar in the PIC / logo folder and rename it bilibili. jpg,twitter.jpg...<br>

<div align=center><img src="" /></div><br>

2.使用Dreamweaver或其他HTML编译器（图中是Notepad++），更改dl class="links"区域中的链接与社交平台对应的名称<br>
Using Dreamweaver or other HTML compilers (Notepad++), change the name of the link in the DL class= "link" area to correspond to the social platform.<br>

```HTML5
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
```

### 主页音乐/Homepage Music(=・ω・=)
1.将音乐以MP3格式保存到music文件夹，并重命名为1.mp3,2.mp3……<br>
Save music in MP3 format to music folder and rename it 1. mp3, 2. mp3...<br>

<div align=center><img src="" /></div><br>

2.使用Dreamweaver或其他HTML编译器（图中是Notepad++），按歌曲名顺序更改index.html中的var singer参数变量，改为歌曲名<br>
Using Dreamweaver or other HTML compilers (Notepad++), change the VaR singer parameter variable in index. HTML to the song name in the order of song names.<br>

```JavaScript
var singer = ["松谷卓 - 共病文庫","Shelter (Piano version)","Axero - River","米津玄師 - lemon",
			  "第三乐章 - 表象展观","ツキアカリのミチシルベ","周深 - 亲爱的旅人啊"];
```

## 备注/RemarksΣ( ￣□￣||)
如果想要增加/减少背景图片，对于index.html文件中的var pictures,var work,var works,var heads,var author及var authors进行同样的增加/减少<br>
If you want to increase or decrease the background image, increase or decrease the VaR pictures, var work, var works, var heads, var author and VaR authors in the index. HTML file as well.<br>
<br>
如果想要增加/减少主页歌曲，对于index.html文件中的var music及var singer进行同样的增加/减少<br>
If you want to add/reduce home page songs, add/decrease the same number of VaR music and VaR singer in index. HTML file<br>

<div align=center><img src=""问题解决了 /></div><br>
<br>

## 写在最后/In the end
非常感谢各位对这个小页面的支持和认可，感谢每一位对我做出指导的朋友<br>
本项目所涉及作品一切权力归原作者所有，感谢每一位创造者的辛勤付出<br>
相聚有时，后会无期<br>
我们有缘再见("▔□▔)/<br>
<br>
Thank you very much for your support and recognition of this small page. Thank you for your guidance to me.<br>
All the rights involved in this project belong to the original author. Thank each creator for his hard work.<br>
Sometimes we get together, and then there's no end to it.<br>
Hoping to see you soon.<br>

<div align=center><img src="" /></div><br>
<br>

## <div align=center>Open the eyes to see the world when the world like to see you.<br><br>向热爱着你的世界投入拥抱</div><br>

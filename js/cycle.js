<script>
var heads = ["head/1.jpg","head/2.png","head/3.jpg","head/4.jpg","head/5.png","head/6.png","head/7.png","head/8.jpg",
			  "head/9.jpg","head/10.jpg"];
var work = ["Melty Heart","HARAJUKU LUNA","靑","花言葉とはほど遠い","キュイラッシェ・ノワール","Marine snow","春","C","行先不明",
			"Afternoon-"];
var author = ["ASK","Mika Pikazo","￦ANKE","和武はざの","凪白みと","banishment","やまかわ","Crab D","Re°","ATDAN-"]
var authors = ["https://www.pixiv.net/member.php?id=1980643",
			   "https://www.pixiv.net/member.php?id=1039353",
			   "https://www.pixiv.net/member.php?id=24218478",
			   "https://www.pixiv.net/member.php?id=1893126",
			   "https://www.pixiv.net/member.php?id=8189060",
			   "https://www.pixiv.net/member.php?id=23223750",
			   "https://www.pixiv.net/member.php?id=1143884",
			   "https://www.pixiv.net/member.php?id=3830756",
			   "https://www.pixiv.net/member.php?id=1243903",
			   "https://www.pixiv.net/member.php?id=6662895"]
var works = ["https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279906",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279792",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279779",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74280353",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279781",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279771",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279816",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74299388",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74279750",
			"https://www.pixiv.net/member_illust.php?mode=medium&illust_id=74299274"]
var counter = 0;
function run(){
	setInterval(cycle,5000);  //重复运行cycle函数，周期1000ms
}
function cycle(){
	counter++;
	if(counter == heads.length)	
		counter = 0;
		document.getElementById("artist_head").src = heads[counter];
	if(counter == work.length)
		counter = 0;
		document.getElementById("works").innerHTML = work[counter];
	if(counter == author.length)
		counter = 0;
		document.getElementById("author").innerHTML = author[counter];
	if(counter == authors.length)
		counter = 0;
		document.getElementById("authors").href = authors[counter];
	if(counter == works.length)
		counter = 0;
		document.getElementById("works").href = works[counter];
}
</script>
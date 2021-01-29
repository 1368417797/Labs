var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:10,
    center: [104.425825,30.511117]
});
var marker=new AMap.Marker({
	position:new AMap.LngLat(104.425825,30.511117),
	title:"解剖标本实验室与人体生命科学馆"
});
map.add(marker);
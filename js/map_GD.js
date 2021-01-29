var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:17,
    center: [114.425825,30.511117]
});
var marker=new AMap.Marker({
	position:new AMap.LngLat(114.425825,30.511117),
	title:"武汉广电国家研究中心"
});
map.add(marker);
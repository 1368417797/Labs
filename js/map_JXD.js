var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:10,
    center: [104.425825,30.511117]
});
var marker=new AMap.Marker({
	position:new AMap.LngLat(104.425825,30.511117),
	title:"机械大楼(东)"
});
map.add(marker);
var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:18,
    center: [114.416503,30.517841]
});
var marker=new AMap.Marker({
	position:new AMap.LngLat(114.416503,30.517841),
	title:"精密重力测量研究中心"
});
map.add(marker);
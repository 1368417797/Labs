var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:25,
    center: [114.434134,30.509654],
});
var marker=new AMap.Marker({
	position:new AMap.LngLat(114.434134,30.509654),
	title:"国家脉冲强磁场科学中心"
});
map.add(marker);

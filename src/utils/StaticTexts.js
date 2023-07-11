
const StaticTexts = {
	Initialize: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="preload" href="/stat/blog/resource/css/blog.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link href="/prog/bar/css/font.css">

<style media="screen">
.small-logo{
	max-width: 200px;
	border-radius: 15%;
}
.mobile-ui{
	max-width: 300px;
	margin: auto!important;
}
.mobile-wide{
	max-width:500px;
	margin: auto!important;
}
.description h2.fake-h3 {
		font-size: 23px!important;
		background: none!important;
		padding: 0;
}
.rec-article{
	font-size: 15px;
	text-decoration: underline!important;
	font-weight: bold;
}
@media screen and (max-width: 550px) {
	.mobile-ui{
		margin: auto;
	}
}
@media screen and (min-width: 550px) {
	.mobile-ui, .mobile-wide{
		display: inline-block!important;
	}
}
</style>\n`,
}

export default StaticTexts;

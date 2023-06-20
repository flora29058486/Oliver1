
const StaticTexts = {
	Initialize: `<a%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="preload" href="/stat/blog/resource/css/blog.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link href="/prog/bar/css/font.css">

<style media="screen">
.small-logo{
	max-width: 200px;
	border-radius: 15%;
}
.mobile-ui{
	max-width: 300px;
}
.mobile-wide{
	max-width:500px;
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

// 	Button_MobileDownloadButton: `
// <jsp:include page="/stat/blog/resource/module/cta-responsive-download-master.jsp">
//   <jsp:param name="buttonProductId" value="211" />
//   <jsp:param name="template" value="Mobile" />
//   <jsp:param name="CustomText" value="Free Download" />
//   <jsp:param name="CustomSlogan" value="Effortless Photo Editing" />
// </jsp:include>\n`,
// 	ToolDevider: `
// <div class="divider"></div>
// 	`
}

export default StaticTexts;

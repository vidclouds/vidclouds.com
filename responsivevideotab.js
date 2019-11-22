<script type='text/javascript'>
//<![CDATA[
$(document).ready(function(){!function(){for(var t=video_listx.length,e=$(".tab-eps"),a=0;a<t;a++)e.append("<a class='button-eps' data-id='"+a+"' data-eps='Episode "+(a+1)+"'>"+(a+1)+"</a>");var i=$(".show-video");$(".button-eps").click(function(){i.html('<div class="respon-vdo"><iframe src="'+video_listx[parseInt($(this).data("id"))]+'" allowfullscreen="true" frameborder="0" width="100%" height="360"></iframe></div>'),$(".video-title").text($(this).data("eps"))})}(),$(".button-eps").click(function(){$(".video-epsx a").removeClass("activated"),$(this).addClass("activated")})});
//]]>
</script>

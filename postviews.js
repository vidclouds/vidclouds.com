<script type='text/javascript'>
//<![CDATA[
jQuery.getScript('//cdn.firebase.com/js/client/2.3.2/firebase.js').done(function() {
$.each($(".post-view[data-id]"),function(c,f){var b=$(f).parent().find("#postviews").addClass("view-load"),d=new Firebase("https://vidclouds-31198.firebaseio.com/pages/id/"+$(f).attr("data-id"));d.once("value",function(e){var h=e.val(),g=!1;null==h&&(h={},h.value=0,h.url=window.location.href,h.id=$(f).attr("data-id"),g=!0),b.removeClass("view-load").text(h.value),h.value++,"/"!=window.location.pathname&&(g?d.set(h):d.child("value").set(h.value))})});
});
//]]>
</script>

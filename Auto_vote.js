/* I RECOMMEND THAT YOU DO NOT USE THIS IN YOUR ACCOUNT OF TCC, BAN RISK OR LOSS OF POINTS */
/* Follow-me @elber333 */
var c = document.getElementsByClassName("toggle").length;
for (i = 0; i < c; i++){
	var id = (document.getElementsByClassName("toggle").item(i).getAttribute("data-id"));	
$.ajax({
  type: "POST",
  url: 'https://translate.twitter.com/translations/vote',
  data: 'id=' + id ,
});
console.log('foi ' + id);
}

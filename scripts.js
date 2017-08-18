window.addEventListener("load", function(){



 ////// CHANGE MEDIA__INFO CLASS AROUND COMMENT BOXES TO BE SOME OTHER CLASS NAME
      ////// CHANGES COMPLETED -- POSSIBLE PROBLEM WITH ADD REPLY TO COMMENTS CREATED

  // post Like Button

	var likeButton = document.getElementsByClassName("action action--like");
  	likeButton[0].addEventListener("click", function() {
      var postCounter = document.getElementsByClassName("post__info");
      var currentLikes = parseFloat(postCounter[0].childNodes[1].innerHTML.replace("Likes", ""));
      if (likeButton[0].text == "Like"){
        currentLikes += 1;
        likeButton[0].text = "Unlike"
      } else {
        currentLikes -= 1;
        likeButton[0].text = "Like"
      }
      postCounter[0].childNodes[1].innerHTML = currentLikes + " likes";
  }); 
// Add Comment Button
  var commentButton = document.getElementsByClassName("action action--comment");
    commentButton[0].addEventListener("click", function() {
      var commentArea = document.getElementsByTagName("textarea");
      commentArea[5].focus();
  }); 
/// Check 'add new comments' for text and add new post
  var postComment = document.getElementsByTagName("form");
    for (var e = 0; e < postComment.length; e++){
        postComment[e].childNodes[3].addEventListener("click", function() { 
          eventInfo = window.event;
          event.preventDefault(); 
          if (eventInfo.currentTarget.parentNode.childNodes[1].value == ""){
            alert("Whoops! Please enter your comment before submitting your post!");
          } else { 
            commentMessage = eventInfo.currentTarget.parentNode.childNodes[1].value;
            alert(commentMessage);
            newPost = eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.childNodes[1];
            newPost.childNodes[3].childNodes[2].text = commentMessage;
            index = eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.children.length - 1;
           // eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.insertBefore(newPost, eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.lastElementChild);
            eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.appendChild(newPost); 

       //     insertBefore(newPost, eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.lastElementChild);

               //  document.getElementsByClassName("comment__info")[4].appendChild(newPost);    

           debugger;
          }

        //  eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.children.length - 1

            //  eventInfo.currentTarget.parentElement.parentElement.parentNode.parentElement.childNodes

        //    [list.length -1] = new post



        });
      }



//// Share Button
 var shareButton = document.getElementsByClassName(" action action--share");
      shareButton[0].addEventListener("click", function (){
          modal = document.getElementsByClassName("modal");
          userName = document.getElementsByClassName("media__info");
          modal[0].childNodes[1].childNodes[3].innerHTML = userName[0].childNodes[1].text ;
          modal[0].style.display = "block"; 
          postText = document.getElementsByClassName("post__body");
          modal[0].childNodes[1].childNodes[5].innerHTML = postText[0].childNodes[1].innerHTML;  
        });
// comment Like Button
  var commentLikeButton = document.getElementsByClassName("comment__info");
      for (var e = 0; e < commentLikeButton.length; e++){
        commentLikeButton[e].childNodes[1].addEventListener("click", function() { 
           eventInfo = window.event;
           currentLikes = parseInt(eventInfo.currentTarget.parentNode.childNodes[5].innerHTML.replace("likes", ""));
           if (eventInfo.currentTarget.parentNode.childNodes[1].text == "Like"){
            currentLikes += 1;
            eventInfo.currentTarget.parentNode.childNodes[1].text = "Unlike"
           } else {
            currentLikes -= 1;
            eventInfo.currentTarget.parentNode.childNodes[1].text = "Like"
           }
           eventInfo.currentTarget.parentNode.childNodes[5].innerHTML = currentLikes + " likes";



           // currentLikes = parseInt(this.parentNode.childNodes[5].innerHTML.replace("likes", ""));
           // if (this.parentNode.childNodes[1].text == "Like"){
           //  currentLikes += 1;
           //  this.parentNode.childNodes[1].text = "Unlike"
           // } else {
           //  currentLikes -= 1;
           //  this.parentNode.childNodes[1].text = "Like"
           // }
           // this.parentNode.childNodes[5].innerHTML = currentLikes + " likes";
        });
      }


//Show replies
   var showReplies = document.getElementsByClassName("comment__info");
      for (var e = 0; e < showReplies.length; e++){
        showReplies[e].childNodes[3].addEventListener("click", function() {            
              eventInfo = window.event;
              replies = eventInfo.currentTarget.parentNode.parentNode.childNodes[5];
              if (replies.style.display == "none"){
                replies.style.display =  "block"
              } else { replies.style.display = "none"}
              
          });
      }
   
///queryslectorall
//OPENS MODAL WHEN a USER NAME IS CLICKED
    var userNames = document.getElementsByClassName("media__info");
      for (var e = 0; e < userNames.length; e++){
        userNames[e].childNodes[1].addEventListener("click", function() {
         modal = document.getElementsByClassName("modal");
         eventInfo = window.event;
         userName = eventInfo.currentTarget.text;
         modal[0].childNodes[1].childNodes[3].innerHTML = userName;
         modal[0].childNodes[1].childNodes[5].innerHTML = "<p>" + userName + " has [x] friends.</p>";    
         modal[0].style.display = "block"; 
  

        });
      }

  ///   CLOSES MODAL FROM BUTTON
    var modalCloseButton = document.getElementsByClassName("modal__close");
        modalCloseButton[0].addEventListener("click", function() {
                      modal = document.getElementsByClassName("modal");
                              modal[0].style.display = "none";
        });

  //// CLOSES MODAL FROM CLICKING BEHIND WINDOW


    var modalCloseBG = document.getElementsByClassName("modal");
        modalCloseBG[0].addEventListener("click", function() {
                  
              
              if (event.target == modalCloseBG[0]){
                modal[0].style.display = "none";
              }
                // if (event.target != modalCloseBG[0].childNodes[1]){
                //   modal[0].style.display = "none";
                // }
            });
   
   //    userNames[0].childNodes[1] <-- text inside

//parseInt(this.innerHTML.replace("replies", ""))

     // showReplies.forEach(makeEyes[, thisarg])
      
     //  function makeEyes(someindex){
     //    someindex.childNodes[3].addEventListener("click", function(){
        
     //    });
     //  }


 // comments Like Button
  // var commentLikeButton = document.getElementsByClassName("comment__info");
  //   commentLikeButton[0].addEventListener("click", function() {

  //     alert (commentLikeButton)
  // });
    
});
    
 //  function changeLikeText() {

 //    if (likeButton.text == "Like") {
 //      likeButton.text = "Unlike";
 //    } else {
 //      likeButton.text = "Like";
 //    } 
 //    alert ("Ive been clicked")
 
	// };

// POST LIKE BUTTON

// function changeText() {
// 	alert("I was clickled");
//     var likeStatus = likeButton.text();
//     if (likeStatus == "Like") {
//         likeButton.innerHTML = "Unlike";
//         } else {
//         	likeButton.innerHTML = "Like";
//         }
// };
// 	likeButton.onclick = changeText;







  // var post_like_button = document.getElementsByClassName("action action--like");

  // post_like_button.addEventListener("click", function() {

  // 	alert("I was clicked");
  //   var post_like_counter = document.getElementsByClassName("post_info");
  //   // when clicked, change text to like/unlike
  //   if (post_like_button.text() === "Like"){
  //   	post_like_button.text("Unlike") //= "Unlike";
  //   } else {
  //   	post_like_button.text("Like") //= "Like";
  //   }


  // });




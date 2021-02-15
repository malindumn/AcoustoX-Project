
    function CheckFormInputs(){
        var customerNAme = document.getElementById("name").value;
        sessionStorage.setItem('userName', customerNAme);
        var usrcomm = document.getElementById("comm").value;
        sessionStorage.setItem('comment',usrcomm);
        selRating =  document.getElementById("rating")
        var ratetext=  selRating.options[selRating.selectedIndex].text;
        sessionStorage.setItem('rating',ratetext);

        if(customerNAme == ""){
            document.getElementById("error").style.backgroundColor = "tomato";
            document.getElementById("error").innerHTML= "Please do not leave the Name field blank";
            return false;
        }
        var rating = document.getElementById("rating").value;
        
        if(rating == 0){
            document.getElementById("error").style.backgroundColor = "#ff2700";
            document.getElementById("error").innerHTML= "Please rate your experience!";
            return false;
        }else{
            newPopup();
        }
    }
        function newPopup() {
            popUpWindow = window.open('mypop.html','popUpWindow','height=100,width=500,left=200,top=200');
            }
        function change(){
            customerNAme = sessionStorage.getItem('userName');
            ratetext = sessionStorage.getItem('rating');
            usrcomm = sessionStorage.getItem('comment');
            var message = "Dear " + customerNAme + ", Thank you for the feedback. You have rated our site as " + ratetext + " and your comment was " + usrcomm;
            document.getElementById("popbox").innerHTML =  message;  
        }
    

        
  
      /*  var message = "Dear " + customerNAme + ", Thank you for the feedback. You have rated our site as " + ratetext + " and your comment was " + usrcomm; */

        

$(document).ready(function () {


  $(".first-button").click(function(){
    var myObject = {
      message: "Hello World",
      timeout: 3000,
      showMessage: function() {
        alert(this.message);
      }
    }

    myObject.showMessage();
  });
});

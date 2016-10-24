$(document).ready(function () {


  $(".home").click(function() {
    var context = {
      myVariable: "Hello World"
    };
    $.get( "./templates/test.hbs", function(data) {
      var template = Handlebars.compile(data);
      var html = template(context);
      $(".container").html(html);
    });
  })
});

var Toast = Backbone.Model.extend({
  defaults: {
    "message": "Hello World",
    "timeout": 3000,
  },
});

var fs = require('fs');
var exec = require('child_process').exec;
var toastTemplate = fs.readFileSync("./templates/toast.hbs", "utf8");

var ToastView = Backbone.View.extend({
  template: Handlebars.compile(toastTemplate),

  render: function() {
    $(".container").html(this.$el);
    this.$el.html(this.template(this.model.attributes));
    var self = this;
    setTimeout(function() {
      self.$el.html("");
    }, this.model.get("timeout"));
    return this;
  }
});

var toastInstance = new Toast({
  message: "Awesome message",
  timeout: 1000
});

var toastViewInstance = new ToastView({
  model: toastInstance
})

$(".first-button").click(function(){
  toastViewInstance.render();
});

$(".second-button").click(function() {
  var myInput = $(".my-input");
  var command = myInput.val();
  exec(command, function(err, stdout, stderr) {
    alert(stdout);
    myInput.val("")
  });
})

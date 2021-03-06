//= require jquery-1.11.0
//= require jquery.maskedinput.js
//= require underscore
//= require backbone
//= require backbone

//= require_tree ./todo/templates
//= require_tree ./todo/models
//= require_tree ./todo/collections
//= require_tree ./todo/views
//= require_tree ./todo/routers
//

$(document).ajaxError(function (event, xhr, options) {
  if (xhr.status == 501) {
    todoRouter.navigate('', { trigger: true, replace: true} );
  }
});

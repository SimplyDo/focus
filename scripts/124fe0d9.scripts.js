"use strict";angular.module("gtdApp",["ngRoute","gtdApp.services","firebase","ui.sortable"]).config(["$routeProvider",function(a){a.when("/todolist/",{templateUrl:"views/todolist.html",controller:"todoCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"loginCtrl"}).otherwise({redirectTo:"/todolist/"})}]);var servicesModule=angular.module("gtdApp.services",[]);angular.module("gtdApp").controller("todoCtrl",["$scope","$filter","Data","$routeParams","$location","angularFire","angularFireAuth",function(a,b,c,d,e,f,g){a.categories=[],a.todos=[],a.systemCategories=c.systemCategories,a.categoryFilter="inbox";var h=new Firebase("https://simplydogtd.firebaseio.com/");g.initialize(h,{scope:a,name:"user",callback:function(){}}),a.logout=function(){g.logout()},a.$on("angularFireAuth:login",function(b,c){var d=new Firebase("https://simplydogtd.firebaseio.com/userdata/"+c.id+"/todos");f(d.limit(150),a,"todos");var e=new Firebase("https://simplydogtd.firebaseio.com/userdata/"+c.id+"/categories");f(e.limit(150),a,"categories")}),a.$on("angularFireAuth:logout",function(){e.path("/login")});var i=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},j=function(){return i()+i()+"-"+i()+"-"+i()+"-"+i()+"-"+i()+i()+i()},k=function(a){for(var b={},c=[],d=0,e=a.length;e>d;++d)b.hasOwnProperty(a[d])||(c.push(a[d]),b[a[d]]=1);return c};a.getTags=function(b){for(var c=[],d=0;d<a.todos.length;d++)if(null!=this.todos[d]){var e=a.todos[d];if((e.category==b||!b)&&0==e.done){var f=a.tags(e);c=c.concat(f)}}return k(c)},a.countTodos=function(b,c){var d={};d.open=0,d.done=0,d.all=0,d.due=0,d.starred=0;for(var e=0;e<a.todos.length;e++)if(null!=this.todos[e]){var f=this.todos[e];(f.category==c||!c)&&0==f.done&&a.relativeDueDate(f.dueDate)<=b&&d.due++,f.category!=c&&c||0!=f.done||1!=f.starred||d.starred++,f.category!=c&&c||0!=f.done?f.category!=c&&c||1!=f.done||d.done++:d.open++}return d.all=d.open+d.done,d},a.setDueDate=function(a,c){if(c){var d=new Date;d.setDate(d.getDate()+c),a.dueDate=b("date")(d,"MM/dd/yyyy")}else a.dueDate=null},a.relativeDueDate=function(a){if(a){var b=864e5,c=new Date,d=new Date(a),e=Math.ceil((d.getTime()-c.getTime())/b);return e}},a.getCategoryLabel=function(b){if(b){for(var c=a.systemCategories.concat(a.categories),d=0;d<c.length;d++)if(c[d].id==b)return c[d].label;return"No matching Category found"}},a.getCategoryByID=function(b){if(b){for(var c=a.systemCategories.concat(a.categories),d=0;d<c.length;d++)if(c[d].id==b)return c[d];return"No matching Category found"}},a.toggleDone=function(a){return a.done||(a.doneDate=new Date),a.done=!a.done,"Todo closed."};var l=function(a,b){var c={};return c.text=a,c.done=!1,c.starred=!1,c.category=b?b:"inbox",c.created=new Date,c.UUID=j(),c};a.updateTodo=function(b){for(var c=0;c<a.todos.length;c++)null!=a.todos[c]&&a.todos[c].UUID==b.UUID&&(a.todos[c].text=b.text,a.todos[c].description=b.description,a.todos[c].dueDate=b.dueDate,a.todos[c].category=b.category)},a.showTodo=function(b){b?(a.todo={text:b.text,UUID:b.UUID,description:b.description,dueDate:b.dueDate,category:b.category},a.searchTerm=""):a.todo=!1},a.showToday=function(b){b?(a.today=!0,a.showTodo(!1),a.changeTagFilter()):a.today=!1},a.showList=function(b){a.showTodo(!1),a.showToday(!1),a.searchTerm="",a.changeTagFilter(),a.categoryFilter=b},a.tags=function(a){var b=[];return a&&(a.text.replace(/[#]+[A-Za-z0-9-_]+/g,function(a){var c=a.replace("#","");return b.push(c),"#"+c}),a.tagList!=b&&(a.tagList=b)),b},a.stripHashTags=function(a){return a?a=a.replace(/[#]+[A-Za-z0-9-_]+/g,function(a){return a.replace("#",""),""}):void 0},a.createTodo=function(b,c,d){var e=l(b,c);a.todos.splice(0,0,e),1==d&&a.showTodo(e)},a.createCategory=function(b){var c=j();b||(b="New project"),a.categories.push({id:c,label:b})},a.changeTagFilter=function(b){a.tagFilter=b},a.setListFilter=function(b){a.categoryFilter=b},a.deleteTodo=function(b){for(var c=0;c<a.todos.length;c++)if(null!=a.todos[c]&&a.todos[c].UUID==b)return a.todos.splice(c,1),!1},a.toggleStar=function(a){a.starred=!a.starred},a.deleteAll=function(b,c){for(var d=0;d<a.todos.length;d++)null!=a.todos[d]&&a.todos[d].category==b&&(a.todos.splice(d,1),d--);if(c){for(var d=0;d<a.categories.length;d++)if(a.categories[d].id==b){a.categories.splice(d,1);break}a.showList("inbox")}},a.sortableOptions={update:function(b,c){(a.tagFilter||a.omniBox)&&(c.item.parent().sortable("cancel"),alert("Sorting is not available when list is fitlered"))},axis:"y",handle:".todo-list-item-options-sortable"}}]),angular.module("gtdApp").controller("loginCtrl",["$scope","$location","angularFire","angularFireAuth",function(a,b,c,d){var e=new Firebase("https://simplydogtd.firebaseio.com/");d.initialize(e,{scope:a,name:"user",callback:function(){}}),a.submitted=!1,a.signUp=function(b){a.errorMessage="",a.submitted=!0,b.password==b.passwordConfirm?d.createUser(b.email,b.password,function(a,b){a||console.log("User Id: "+b.id+", Email: "+b.email)}):a.errorMessage="Passwords do not match"},a.changePassword=function(b){a.errorMessage="",alert("changing pass"),d.changePassword(b.email,b.password,b.passwordConfirm,function(a){a?alert(a):console.log("Password change successfully")})},a.login=function(b){a.errorMessage="",a.submitted=!0,d.login("password",{email:b.email,password:b.password,rememberMe:b.rememberMe})},a.logout=function(){d.logout(),a.submitted=!1},a.$on("angularFireAuth:login",function(){b.path("/todolist/")}),a.$on("angularFireAuth:logout",function(){}),a.$on("angularFireAuth:error",function(b,c){a.submitted=!1,c&&"INVALID_USER"==c.code?a.errorMessage="Wrong Email":c&&"INVALID_PASSWORD"==c.code&&(a.errorMessage="Wrong password")})}]),servicesModule.factory("Data",[function(){return this.todos=[],this.categories=[],this.systemCategories=[{id:"inbox",label:"Inbox",type:"system"}],this}]);
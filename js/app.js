require.register("config.jsenv",function(t,o,e){e.exports={BUILD:"git-6f97ecb"}}),angular.module("App",["app.templates","ngMaterial","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,o,e){return t.state("about",{url:"/about",templateUrl:"app/partials/about.html",controller:"About"}).state("companies",{url:"/companies/:id",templateUrl:"app/partials/companies.html",controller:"CompanyCtrl"}),o.otherwise("/companies/59066479"),e.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location","$window","$anchorScroll"].concat(function(t,o,e,n){return t.$state=o,t.$stateParam=e,t.config_build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,o){var e;return e=o.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:n.$$path,title:e}):void 0})})).controller({AppCtrl:["$scope","$location","$rootScope","$sce"].concat(function(t,o){return t.$location=o,t.$watch("$location.path()",function(o){return o||(o="/"),t.activeNavId=o,t}),t.getClass=function(o){return t.activeNavId.substring(0,o.length===o)?"active":""}})}).controller({About:["$rootScope","$http"].concat(function(t){return t.activeTab="about"})}).controller({CompanyCtrl:["$scope","$state","$http"].concat(function(t,o,e){return t.$watch("$state.params.id",function(o){return o?(t.id=o,e.get("https://beta.decent.tw/collections/companies",{params:{fc:1,q:JSON.stringify({id:t.id})}}).success(function(o){return t.company=o.entries[0],console.log(t.company)})):void 0})})});
webpackJsonp([0],[function(n,t,a){var o=a(1),c=a(7);c(".button").on("click",function(){o.post("/data/test.ajax",{dkdkd:1}).then(function(n){c(".show").val(n.name)})})}]);
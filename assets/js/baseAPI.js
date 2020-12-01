//这个函数可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // console.log(options);
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
})
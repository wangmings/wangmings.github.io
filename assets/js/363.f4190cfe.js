(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{858:function(r,t,a){"use strict";a.r(t);var e=a(30),s=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"chrome浏览器使用方法介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome浏览器使用方法介绍"}},[r._v("#")]),r._v(" chrome浏览器使用方法介绍")]),r._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[r._v("#")]),r._v(" 学习目标")]),r._v(" "),a("ol",[a("li",[r._v("了解 新建隐身窗口的目的")]),r._v(" "),a("li",[r._v("了解 chrome中network的使用")]),r._v(" "),a("li",[r._v("了解 寻找登录接口的方法")])]),r._v(" "),a("hr"),r._v(" "),a("h3",{attrs:{id:"_1-新建隐身窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建隐身窗口"}},[r._v("#")]),r._v(" 1 新建隐身窗口")]),r._v(" "),a("blockquote",[a("p",[r._v("浏览器中直接打开网站，会自动带上之前网站时保存的cookie，但是在爬虫中首次获取页面是没有携带cookie的，这种情况如何解决呢？")])]),r._v(" "),a("p",[r._v("使用隐身窗口，首次打开网站，不会带上cookie，能够观察页面的获取情况，包括对方服务器如何设置cookie在本地")]),r._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E6%96%B0%E5%BB%BA%E9%9A%90%E8%BA%AB%E7%AA%97%E5%8F%A3.png",alt:""}})]),r._v(" "),a("h3",{attrs:{id:"_2-chrome中network的更多功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-chrome中network的更多功能"}},[r._v("#")]),r._v(" 2 chrome中network的更多功能")]),r._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/chrome%E4%B8%ADnetwork%E6%9B%B4%E5%A4%9A%E7%94%A8%E9%80%94.png",alt:""}})]),r._v(" "),a("h5",{attrs:{id:"_2-1-perserve-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-perserve-log"}},[r._v("#")]),r._v(" 2.1 Perserve log")]),r._v(" "),a("p",[r._v("默认情况下，页面发生跳转之后，之前的请求url地址等信息都会消失，勾选perserve log后之前的请求都会被保留 "),a("img",{attrs:{src:"/assets/images/%E5%8B%BE%E9%80%89perservelog%E7%9A%84%E6%95%88%E6%9E%9C.png",alt:""}})]),r._v(" "),a("h5",{attrs:{id:"_2-2-filter过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-filter过滤"}},[r._v("#")]),r._v(" 2.2 filter过滤")]),r._v(" "),a("p",[r._v("在url地址很多的时候，可以在filter中输入部分url地址，对所有的url地址起到一定的过滤效果，具体位置在上面第二幅图中的2的位置")]),r._v(" "),a("h5",{attrs:{id:"_2-3-观察特定种类的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-观察特定种类的请求"}},[r._v("#")]),r._v(" 2.3 观察特定种类的请求")]),r._v(" "),a("p",[r._v("在上面第二幅图中的3的位置，有很多选项，默认是选择的"),a("code",[r._v("all")]),r._v("，即会观察到所有种类的请求")]),r._v(" "),a("p",[r._v("很多时候处于自己的目的可以选择"),a("code",[r._v("all")]),r._v("右边的其他选项，比如常见的选项：")]),r._v(" "),a("ul",[a("li",[r._v("XHR:大部分情况表示ajax请求")]),r._v(" "),a("li",[r._v("JS:js请求")]),r._v(" "),a("li",[r._v("CSS:css请求")])]),r._v(" "),a("p",[r._v("但是很多时候我们并不能保证我们需要的请求是什么类型，特别是我们不清楚一个请求是否为ajax请求的时候，直接选择"),a("code",[r._v("all")]),r._v(",从前往后观察即可，其中js，css，图片等不去观察即可")]),r._v(" "),a("p",[r._v("不要被浏览器中的一堆请求吓到了，这些请求中除了js，css，图片的请求外，其他的请求并没有多少个")]),r._v(" "),a("h3",{attrs:{id:"_3-寻找登录接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-寻找登录接口"}},[r._v("#")]),r._v(" 3 寻找登录接口")]),r._v(" "),a("blockquote",[a("p",[r._v("回顾之前人人网的爬虫我们找到了一个登陆接口，那么这个接口从哪里找到的呢？")]),r._v(" "),a("p",[a("a",{attrs:{href:"http://www.renren.com",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://www.renren.com"),a("OutboundLink")],1)])]),r._v(" "),a("h5",{attrs:{id:"_3-1-寻找action对的url地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-寻找action对的url地址"}},[r._v("#")]),r._v(" 3.1 寻找action对的url地址")]),r._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%BA%E4%BA%BA%E7%BD%91%E7%99%BB%E5%BD%95%E7%9A%84%E5%9C%B0%E5%9D%80.png",alt:""}})]),r._v(" "),a("p",[r._v("可以发现，这个地址就是在登录的form表单中action对应的url地址，回顾前端的知识点，可以发现就是进行表单提交的地址，对应的，提交的数据，仅仅需要："),a("code",[r._v("用户名的input标签中，name的值作为键，用户名作为值，密码的input标签中，name的值作为键，密码作为值即可")])]),r._v(" "),a("h5",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[r._v("#")]),r._v(" 思考：")]),r._v(" "),a("p",[r._v("如果action对应的没有url地址的时候可以怎么做？")]),r._v(" "),a("h5",{attrs:{id:"_3-2-通过抓包寻找登录的url地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-通过抓包寻找登录的url地址"}},[r._v("#")]),r._v(" 3.2 通过抓包寻找登录的url地址")]),r._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%BA%E4%BA%BA%E7%BD%91%E6%8A%93%E5%8C%85%E5%AF%BB%E6%89%BEurl%E5%9C%B0%E5%9D%80.png",alt:""}})]),r._v(" "),a("p",[r._v("通过抓包可以发现，在这个url地址和请求体中均有参数，比如"),a("code",[r._v("uniqueTimestamp")]),r._v("和"),a("code",[r._v("rkey")]),r._v("以及加密之后的"),a("code",[r._v("password")])]),r._v(" "),a("p",[r._v("这个时候我们可以观察手机版的登录接口，是否也是一样的")]),r._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%BA%E4%BA%BA%E7%BD%91%E6%89%8B%E6%9C%BA%E7%89%88%E7%99%BB%E5%BD%95.png",alt:""}})]),r._v(" "),a("p",[r._v("可以发现在手机版中，依然有参数，但是参数的个数少一些，这个时候，我们可以"),a("strong",[r._v("使用手机版作为参考，下一节来学习如何分析js")])]),r._v(" "),a("hr"),r._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[r._v("#")]),r._v(" 小结")]),r._v(" "),a("ol",[a("li",[r._v("使用隐身窗口的主要目的是为了避免首次打开网站携带cookie的问题")]),r._v(" "),a("li",[r._v("chrome的network中，perserve log选项能够在页面发生跳转之后任然能够观察之前的请求")]),r._v(" "),a("li",[r._v("确定登录的地址有两种方法：\n"),a("ul",[a("li",[r._v("寻找from表单action的url地址")]),r._v(" "),a("li",[r._v("通过抓包获取")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{937:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"h5-video踩坑记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5-video踩坑记录"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#h5-video%E8%B8%A9%E5%9D%91%E8%AE%B0%E5%BD%95"}},[s._v("#")]),s._v(" H5 Video踩坑记录")]),s._v(" "),a("p",[s._v("临时接手一个即将上线的公司项目，纯H5活动页，内容不多，但对还原度和各机型兼容性（尤其是Android机型）有极高要求。涉及的问题很多，这里重点说下在H5中Video的一系列坑。插个技术选型问题，"),a("strong",[s._v("不复杂的活动页")]),s._v("建议使用jquery技术栈，而不是使用vue和reactjs等。后者的优点在于组件系统，可复用度高，适合大型项目。活动页一般UI改动频繁，动效多，适合jquery插件生态，添加也方便。笔者半道接替该vue项目，中间要加一些新特性，还得看看有没有对应的vue轮子，十分麻烦。")]),s._v(" "),a("p",[s._v("效果请戳："),a("a",{attrs:{href:"https://3.163.com/jd",target:"_blank",rel:"noopener noreferrer"}},[s._v("H5 Video (opens new window)"),a("OutboundLink")],1),s._v("（在移动端模式查看）")]),s._v(" "),a("h2",{attrs:{id:"_1-基本video属性设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本video属性设置"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_1-%E5%9F%BA%E6%9C%ACvideo%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE"}},[s._v("#")]),s._v(" 1.基本video属性设置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("poster：视频未播放前的代替图片，如果未设置该属性，默认使用视频第一帧（但小部分机型兼容性不好）。"),a("strong",[s._v("建议添加")])])]),s._v(" "),a("li",[a("p",[s._v("muted: 静音. "),a("strong",[s._v("建议添加")])])]),s._v(" "),a("li",[a("p",[s._v("webkit-playsinline/playsinline: 视频播放时局域播放，不脱离文档流 。基本保证"),a("strong",[s._v("iphone")]),s._v("手机在H5页面内播放。个别不支持可以引入第三方库"),a("a",{attrs:{href:"'https://github.com/bfred-it/iphone-inline-video"}},[s._v("iphone-inline-video")]),s._v("。"),a("strong",[s._v("建议添加")])])]),s._v(" "),a("li",[a("p",[s._v('x5-video-player-type="h5"/x5-playsinline: 启用同层H5播放器，保证anroid手机在H5页面内播放，但在各android机型下表现不一。'),a("strong",[s._v("建议添加")])])])]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("video\n        ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("poster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"startSource"')]),s._v("\n        muted\n        x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("airplay"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allow"')]),s._v("\n        x5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("player"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"h5"')]),s._v(" x5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("playsinline\n        webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("playsinline playsinline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"videoSource"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video/mp4"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_2-自动播放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动播放"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_2-%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE"}},[s._v("#")]),s._v(" 2.自动播放")]),s._v(" "),a("p",[a("strong",[s._v("先说结论：如果需要微信/网易云音乐/微博/QQ/浏览器等各平台完美自动播放，不行")]),s._v("。正确的解决方案：让视觉设计引导用户点击屏幕，进行播放视频。或者如果产品能接受，只要用户接触屏幕就开始播放(监听touchstart事件)。错误方式："),a("s",[s._v("video标签autoplay")]),s._v(" 、"),a("s",[s._v("js执行video.play")]),s._v("、"),a("s",[s._v("load完成后执行play()")])]),s._v(" "),a("p",[a("strong",[s._v("只在微信端传播")]),s._v("。微信浏览器是经过特殊处理的，可以通过回调WeixinJSBridgeReady解决，适用于iPhone和anroid。注意自动播放的视频要无音轨或者手动muted。见示例代码：")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 必须加在微信api资源 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://res.wx.qq.com/open/js/jweixin-1.0.0.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'getNetworkType'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            video"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WeixinJSBridgeReady"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'getNetworkType'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                video"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_3-视频开始短暂黑屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-视频开始短暂黑屏"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_3-%E8%A7%86%E9%A2%91%E5%BC%80%E5%A7%8B%E7%9F%AD%E6%9A%82%E9%BB%91%E5%B1%8F"}},[s._v("#")]),s._v(" 3.视频开始短暂黑屏")]),s._v(" "),a("p",[s._v("部分android机型点击播放视频时，会出现短暂1~2s的黑屏。该问题出现可能是还没请求完成可顺利播放的视频。")]),s._v(" "),a("p",[s._v("解决方案：在视频上叠加一个div，把它的背景图换成首帧图。监听"),a("strong",[s._v("timeupdate")]),s._v("事件，有视频播放时移除该div。")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"play"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("video\n            ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'playing': playing}\"")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("poster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"startSource"')]),s._v("\n            x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("airplay"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allow"')]),s._v("\n            x5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("player"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"h5"')]),s._v("\n            x5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("playsinline\n            webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("playsinline playsinline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"videoSource"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video/mp4"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"['cover-start']\"")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!playing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("videoNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'timeupdate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当视频的currentTime大于0.1时表示黑屏时间已过，已有视频画面，可以移除浮层")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("videoNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("playing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("playing "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_4-部分android机跳到x5-player播放视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-部分android机跳到x5-player播放视频"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_4-%E9%83%A8%E5%88%86android%E6%9C%BA%E8%B7%B3%E5%88%B0x5-player%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91"}},[s._v("#")]),s._v(" 4.部分Android机跳到x5 player播放视频")]),s._v(" "),a("p",[s._v("有些android在微信或浏览器，播放视频会跳到x5 player播放器中。这种video位于页面最顶层，无法被遮盖，说不定播完会推送腾讯视频信息，而且不会自动关掉。")]),s._v(" "),a("p",[s._v("解决方案：利用timeupdate事件，当视频快要结束时，手动remove掉整个视频。")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("videoNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'timeupdate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容Android X5在浏览器行为.时间为视频时长")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("videoNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isShowVideo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_5-视频canplay的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-视频canplay的坑"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_5-%E8%A7%86%E9%A2%91canplay%E7%9A%84%E5%9D%91"}},[s._v("#")]),s._v(" 5.视频canplay的坑")]),s._v(" "),a("p",[s._v("换了引导用户的视频方案后，前面有个loading页面。产品希望视频加载好后，loading消失并视频可点击。但是ios下canplay和canplaythrough事件都不会执行回调。ios是点击播放后才会去加载视频流。android下会执行canplay事件回调，但视频流也是边下边播。所以无法准确获得视频可加载时间点")]),s._v(" "),a("p",[s._v("总结：H5现在视频标准不完善，除了"),a("strong",[s._v("timeupdate")]),s._v("、"),a("strong",[s._v("ended")]),s._v("事件外，其他事件慎用。")]),s._v(" "),a("h2",{attrs:{id:"_6-safari可以缩放视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-safari可以缩放视频"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_6-safari%E5%8F%AF%E4%BB%A5%E7%BC%A9%E6%94%BE%E8%A7%86%E9%A2%91"}},[s._v("#")]),s._v(" 6.safari可以缩放视频")]),s._v(" "),a("p",[s._v("通常情况在meta的viewport中设置"),a("strong",[s._v("user-scalable=no")]),s._v("即可。但是IOS 10以后的safari中，apple为了提高Safari中网站的辅助功能，即使网站在视口中设置该属性，用户也可以手动缩放。")]),s._v(" "),a("p",[s._v("解决方案：")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// IOS10 Safari不识别meta，故需要js hack")]),s._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("touches "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{889:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"框架雏形-实现核心模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架雏形-实现核心模块"}},[s._v("#")]),s._v(" 框架雏形 -- 实现核心模块")]),s._v(" "),a("h5",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("ol",[a("li",[s._v("完成spider模块的\b封装")]),s._v(" "),a("li",[s._v("完成调度器模块的封装")]),s._v(" "),a("li",[s._v("完成下载器模块的封装")]),s._v(" "),a("li",[s._v("完成管道模块的封装")]),s._v(" "),a("li",[s._v("完成引擎模块的封装")])]),s._v(" "),a("h3",{attrs:{id:"_1-spider模块的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-spider模块的封装"}},[s._v("#")]),s._v(" 1.spider模块的\b封装")]),s._v(" "),a("h5",{attrs:{id:"_1-1-爬虫组件功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-爬虫组件功能"}},[s._v("#")]),s._v(" 1.1 爬虫组件功能：")]),s._v(" "),a("ul",[a("li",[s._v("构建请求信息(初始的)，也就是生成请求对象(Request)")]),s._v(" "),a("li",[s._v("解析响应对象，返回数据对象(Item)或者新的请求对象(Request)")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-实现方案"}},[s._v("#")]),s._v(" 1.2 实现方案：")]),s._v(" "),a("ol",[a("li",[s._v("实现start_requests方法，返回请求对象")]),s._v(" "),a("li",[s._v("实现parse方法，返回Item对象或者新的请求对象")])]),s._v(" "),a("h5",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[s._v("#")]),s._v(" 具体实现")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrapy_plus/core/spider.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''爬虫组件封装'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Item    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入Item对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Request    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入Request对象")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Spider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n    1. 构建请求信息(初始的)，也就是生成请求对象(Request)\n    2. 解析响应对象，返回数据对象(Item)或者新的请求对象(Request)\n    '''")]),s._v("\n\n    start_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.baidu.com'")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认初始请求地址 ")]),s._v("\n                                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里以请求百度首页为例")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start_requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''构建初始请求对象并返回'''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''解析请求\n        并返回新的请求对象、或者数据对象\n        '''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回item对象 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_2-调度器模块的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调度器模块的封装"}},[s._v("#")]),s._v(" 2. 调度器模块的封装")]),s._v(" "),a("h5",{attrs:{id:"_2-1-调度器功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-调度器功能"}},[s._v("#")]),s._v(" 2.1 调度器功能：")]),s._v(" "),a("ul",[a("li",[s._v("缓存请求对象(Request)，并为下载器提供请求对象，实现请求的调度：")]),s._v(" "),a("li",[s._v("对请求对象进行去重判断：实现去重方法"),a("code",[s._v("_filter_request")]),s._v("，该方法对内提供，因此设置为私有方法")])]),s._v(" "),a("h5",{attrs:{id:"_2-2-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实现方案"}},[s._v("#")]),s._v(" 2.2 实现方案：")]),s._v(" "),a("ul",[a("li",[s._v("利用队列FIFO存储请求；")]),s._v(" "),a("li",[s._v("实现add_request方法添加请求，接收请求对象作为参数；")]),s._v(" "),a("li",[s._v("实现get_request方法对外提供从队列取出的请求对象")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrapy_plus/core/scheduler.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''调度器模块封住'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用six模块实现py2和py3兼容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" six"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moves"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("queue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Queue\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Scheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n    1. 缓存请求对象(Request)，并为下载器提供请求对象，实现请求的调度\n    2. 对请求对象进行去重判断\n    '''")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''添加请求对象'''")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''获取一个请求对象并返回'''")]),s._v("\n        request "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" request\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_filter_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''请求去重'''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂时不实现")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"_3-下载器模块的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载器模块的封装"}},[s._v("#")]),s._v(" 3 下载器模块的封装")]),s._v(" "),a("h5",{attrs:{id:"_3-1-下载器功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下载器功能"}},[s._v("#")]),s._v(" 3.1 下载器功能：")]),s._v(" "),a("ul",[a("li",[s._v("根据请求对象(Request)，发起HTTP、HTTPS网络请求，拿到HTTP、HTTPS响应，构建响应对象(Response)并返回")])]),s._v(" "),a("h5",{attrs:{id:"_3-1-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-实现方案"}},[s._v("#")]),s._v(" 3.1 实现方案：")]),s._v(" "),a("ul",[a("li",[s._v("利用requests、urllib2等模块发请求，这里使用requests模块")]),s._v(" "),a("li",[s._v("实现get_response方法，接收request请求对象作为参数，发起请求，获取响应")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrapy_plus/core/downloader.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''下载器组件'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Response\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Downloader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''根据请求对象(Request)，发起HTTP、HTTPS网络请求，拿到HTTP、HTTPS响应，构建响应对象(Response)并返回'''")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''发起请求获取响应的方法'''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 根据请求对象，发起请求，获取响应")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    判断请求方法：")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("upper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\\\n                          params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("upper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\\\n                      params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果方法不是get或者post，抛出一个异常")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"不支持的请求方法"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 构建响应对象,并返回")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_4-管道模块的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-管道模块的封装"}},[s._v("#")]),s._v(" 4.管道模块的封装")]),s._v(" "),a("h5",{attrs:{id:"_4-1-管道组件功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-管道组件功能"}},[s._v("#")]),s._v(" 4.1 管道组件功能：")]),s._v(" "),a("ul",[a("li",[s._v("负责处理数据对象")])]),s._v(" "),a("h5",{attrs:{id:"_4-2-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-实现方案"}},[s._v("#")]),s._v(" 4.2 实现方案：")]),s._v(" "),a("ul",[a("li",[s._v("实现process_item方法，接收数据对象作为参数")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrapy_plus/core/pipeline.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''管道组件封装'''")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''负责处理数据对象(Item)'''")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''处理item对象'''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_5-引擎模块的封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-引擎模块的封装"}},[s._v("#")]),s._v(" 5 引擎模块的封装")]),s._v(" "),a("h5",{attrs:{id:"_5-1-引擎组件功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-引擎组件功能"}},[s._v("#")]),s._v(" 5.1 引擎组件功能：")]),s._v(" "),a("ul",[a("li",[s._v("对外提供整个的程序的入口")]),s._v(" "),a("li",[s._v("依次调用其他组件对外提供的接口，实现整个框架的运作(驱动)")])]),s._v(" "),a("h5",{attrs:{id:"_5-2-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-实现方案"}},[s._v("#")]),s._v(" 5.2 实现方案：")]),s._v(" "),a("ul",[a("li",[s._v("利用init方法初始化其他组件对象，在内部使用")]),s._v(" "),a("li",[s._v("实现start方法，由外部调用，启动引擎")]),s._v(" "),a("li",[s._v("实现"),a("code",[s._v("_start_engine")]),s._v("方法，完成整个框架的运行逻辑")]),s._v(" "),a("li",[s._v("具体参考上一小节中雏形结构引擎的逻辑")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrapy_plus/core/engine.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''引擎组件'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Request    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入Request对象")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheduler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Scheduler\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downloader "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Downloader\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pipeline "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Pipeline\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spider "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Spider\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n    a. 对外提供整个的程序的入口\n    b. 依次调用其他组件对外提供的接口，实现整个框架的运作(驱动)\n    '''")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spider "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收爬虫对象")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheduler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化调度器对象")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downloader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Downloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化下载器对象")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pipeline "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化管道对象")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''启动整个引擎'''")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_start_engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_start_engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''依次调用其他组件对外提供的接口，实现整个框架的运作(驱动)'''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 爬虫模块发出初始请求")]),s._v("\n        start_request "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start_requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 把初始请求添加给调度器")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 从调度器获取请求对象，交给下载器发起请求，获取一个响应对象")]),s._v("\n        request "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 利用下载器发起请求")]),s._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 利用爬虫的解析响应的方法，处理响应，得到结果")]),s._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6. 判断结果对象")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.1 如果是请求对象，那么就再交给调度器")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.2 否则，就交给管道处理")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[s._v("明确每个模块的功能以及需要实现的方法")]),s._v(" "),a("li",[s._v("\b掌握引擎中实现逻辑的刘而成")]),s._v(" "),a("li",[s._v("完成对爬虫框架的编写")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
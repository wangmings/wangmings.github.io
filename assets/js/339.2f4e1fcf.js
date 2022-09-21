(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{834:function(s,t,a){"use strict";a.r(t);var e=a(30),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"requests模块的其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests模块的其他方法"}},[s._v("#")]),s._v(" requests模块的其他方法")]),s._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标")]),s._v(" "),a("ol",[a("li",[s._v("掌握requests中cookirJar的处理方法")]),s._v(" "),a("li",[s._v("掌握requests解决https证书错误的问题")]),s._v(" "),a("li",[s._v("掌握requests中超时参数的使用")]),s._v(" "),a("li",[s._v("掌握retrying模块的使用")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-requests中cookirjar的处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-requests中cookirjar的处理方法"}},[s._v("#")]),s._v(" 1 requests中cookirJar的处理方法")]),s._v(" "),a("blockquote",[a("p",[s._v("使用request获取的resposne对象，具有cookies属性，能够获取对方服务器设置在本地的cookie，但是如何使用这些cookie呢？")])]),s._v(" "),a("h5",{attrs:{id:"_1-1-方法介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-方法介绍"}},[s._v("#")]),s._v(" 1.1 方法介绍")]),s._v(" "),a("ol",[a("li",[s._v("response.cookies是CookieJar类型")]),s._v(" "),a("li",[s._v("使用requests.utils.dict_from_cookiejar，能够实现把cookiejar对象转化为字典")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-方法展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-方法展示"}},[s._v("#")]),s._v(" 1.2 方法展示")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.baidu.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送请求，获取resposne")]),s._v("\nresponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用方法从cookiejar中提取数据")]),s._v("\ncookies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dict_from_cookiejar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cookies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("输出为:")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'requests.cookies.RequestsCookieJar'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BDORZ'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'27315'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意：")]),s._v(" "),a("p",[s._v("在前面的requests的session类中，我们不需要处理cookie的任何细节，如果有需要，我们可以使用上述方法来解决")]),s._v(" "),a("h3",{attrs:{id:"_2-requests处理证书错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-requests处理证书错误"}},[s._v("#")]),s._v(" 2 requests处理证书错误")]),s._v(" "),a("blockquote",[a("p",[s._v("经常我们在网上冲浪时，经常能够看到下面的提示：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/12306ssl%E9%94%99%E8%AF%AF.png",alt:""}})]),s._v(" "),a("p",[s._v("出现这个问题的原因是：ssl的证书不安全导致")]),s._v(" "),a("h5",{attrs:{id:"_2-1-代码中发起请求的效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-代码中发起请求的效果"}},[s._v("#")]),s._v(" 2.1 代码中发起请求的效果")]),s._v(" "),a("p",[s._v("那么如果在代码中请求会怎么样呢？")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.12306.cn/mormhweb/"')]),s._v("\nresponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("返回证书错误，如下：")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CertificateError "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"_2-2-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-解决方案"}},[s._v("#")]),s._v(" 2.2 解决方案")]),s._v(" "),a("p",[s._v("为了在代码中能够正常的请求，我们修改添加一个参数")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.12306.cn/mormhweb/"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# requests.packages.urllib3.disable_warnings() # 不显示安全提示 ")]),s._v("\n\nresponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("verify"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-超时参数的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-超时参数的使用"}},[s._v("#")]),s._v(" 3 超时参数的使用")]),s._v(" "),a("blockquote",[a("p",[s._v("在平时网上冲浪的过程中，我们经常会遇到网络波动，这个时候，一个请求等了很久可能任然没有结果")]),s._v(" "),a("p",[s._v("在爬虫中，一个请求很久没有结果，就会让整个项目的效率变得非常低，这个时候我们就需要对请求进行强制要求，让他必须在特定的时间内返回结果，否则就报错")])]),s._v(" "),a("h5",{attrs:{id:"_3-1-超时参数使用方法如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-超时参数使用方法如下"}},[s._v("#")]),s._v(" 3.1 超时参数使用方法如下：")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过添加timeout参数，能够保证在3秒钟内返回响应，否则会报错")]),s._v(" "),a("h5",{attrs:{id:"注意-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[s._v("#")]),s._v(" 注意：")]),s._v(" "),a("p",[s._v("这个方法还能够拿来检测代理ip的质量，如果一个代理ip在很长时间没有响应，那么添加超时之后也会报错，对应的这个ip就可以从代理ip池中删除")]),s._v(" "),a("h3",{attrs:{id:"_4-retrying模块的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-retrying模块的使用"}},[s._v("#")]),s._v(" 4 retrying模块的使用")]),s._v(" "),a("blockquote",[a("p",[s._v("使用超时参数能够加快我们整体的请求速度，但是在正常的网页浏览过成功，如果发生速度很慢的情况，我们会做的选择是"),a("strong",[s._v("刷新页面")]),s._v("，那么在代码中，我们是否也可以刷新请求呢？")])]),s._v(" "),a("p",[s._v("对应的，retrying模块就可以帮助我们解决")]),s._v(" "),a("h5",{attrs:{id:"_4-1-retrying模块的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-retrying模块的使用"}},[s._v("#")]),s._v(" 4.1 retrying模块的使用")]),s._v(" "),a("p",[s._v("retrying模块的地址："),a("a",{attrs:{href:"https://pypi.org/project/retrying/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pypi.org/project/retrying/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("retrying 模块的使用")]),s._v(" "),a("ol",[a("li",[s._v("使用retrying模块提供的retry模块")]),s._v(" "),a("li",[s._v("通过装饰器的方式使用，让被装饰的函数反复执行")]),s._v(" "),a("li",[s._v("retry中可以传入参数"),a("code",[s._v("stop_max_attempt_number")]),s._v(",让函数报错后继续重新执行，达到最大执行次数的上限，如果每次都报错，整个函数报错，如果中间有一个成功，程序继续往后执行")])]),s._v(" "),a("h5",{attrs:{id:"_4-2-retrying和requests的简单封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-retrying和requests的简单封装"}},[s._v("#")]),s._v(" 4.2 retrying和requests的简单封装")]),s._v(" "),a("p",[s._v("实现一个发送请求的函数，每次爬虫中直接调用该函数即可实现发送请求，在其中")]),s._v(" "),a("ul",[a("li",[s._v("使用timeout实现超时报错")]),s._v(" "),a("li",[s._v("使用retrying模块实现重试")])]),s._v(" "),a("p",[s._v("代码参考:")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parse.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" retrying "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" retry\n\nheaders "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最大重试3次，3次全部报错，才会报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@retry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stop_max_attempt_number"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_parse_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#超时的时候回报错并重试")]),s._v("\n    response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#状态码不是200，也会报错并重试")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进行异常捕获")]),s._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" _parse_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#报错返回None")]),s._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[s._v("requests.utils.dict_from_cookiejar能够实现cookiejar转化为字典")]),s._v(" "),a("li",[s._v("请求方法中添加verify=False能够实现请求过程中不验证证书")]),s._v(" "),a("li",[s._v("请求方法中添加timeout能够实现强制程序返回结果的能够，否则会报错")]),s._v(" "),a("li",[s._v("retrying模块能够实现捕获函数的异常，反复执行函数的效果，和timeout配合使用，能够解决网络波动带来的请求不成功的问题")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
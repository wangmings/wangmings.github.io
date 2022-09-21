(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{874:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scrapy中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy中间件"}},[s._v("#")]),s._v(" scrapy中间件")]),s._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标：")]),s._v(" "),a("ol",[a("li",[s._v("应用 scrapy中使用间件使用随机UA的方法")]),s._v(" "),a("li",[s._v("了解 scrapy中使用代理ip的的方法")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-scrapy中间件的分类和作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-scrapy中间件的分类和作用"}},[s._v("#")]),s._v(" 1 scrapy中间件的分类和作用")]),s._v(" "),a("h5",{attrs:{id:"_1-1-scrapy中间件的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-scrapy中间件的分类"}},[s._v("#")]),s._v(" 1.1 scrapy中间件的分类")]),s._v(" "),a("p",[s._v("根据scrapy运行流程中所在位置不同分为：")]),s._v(" "),a("ol",[a("li",[s._v("下载中间件")]),s._v(" "),a("li",[s._v("爬虫中间件")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-scrapy中间的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-scrapy中间的作用"}},[s._v("#")]),s._v(" 1.2 scrapy中间的作用")]),s._v(" "),a("ol",[a("li",[s._v("主要功能是在爬虫运行过程中进行一些处理，如对非200响应的重试（重新构造Request对象yield给引擎）")]),s._v(" "),a("li",[s._v("也可以对header以及cookie进行更换和处理")]),s._v(" "),a("li",[s._v("其他根据业务需求实现响应的功能")])]),s._v(" "),a("p",[s._v("但在scrapy默认的情况下 两种中间件都在middlewares.py一个文件中")]),s._v(" "),a("p",[s._v("爬虫中间件使用方法和下载中间件相同，常用下载中间件")]),s._v(" "),a("h3",{attrs:{id:"_2-下载中间件的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载中间件的使用方法"}},[s._v("#")]),s._v(" 2 下载中间件的使用方法：")]),s._v(" "),a("blockquote",[a("p",[s._v("接下来我们对腾讯招聘爬虫进行修改完善，通过下载中间件来学习如何使用中间件 编写一个Downloader Middlewares和我们编写一个pipeline一样，定义一个类，然后在setting中开启")])]),s._v(" "),a("p",[s._v("Downloader Middlewares默认的方法：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("process_request(self, request, spider)：")]),s._v(" "),a("ul",[a("li",[s._v("当每个request通过下载中间件时，该方法被调用。")]),s._v(" "),a("li",[s._v("返回None值：继续请求")]),s._v(" "),a("li",[s._v("返回Response对象：不再请求，把response返回给引擎")]),s._v(" "),a("li",[s._v("返回Request对象：把request对象交给调度器进行后续的请求")])])]),s._v(" "),a("li",[a("p",[s._v("process_response(self, request, response, spider)：")]),s._v(" "),a("ul",[a("li",[s._v("当下载器完成http请求，传递响应给引擎的时候调用")]),s._v(" "),a("li",[s._v("返回Resposne：交给process_response来处理")]),s._v(" "),a("li",[s._v("返回Request对象：交给调取器继续请求")])])])]),s._v(" "),a("h3",{attrs:{id:"_3-定义实现随机user-agent的下载中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义实现随机user-agent的下载中间件"}},[s._v("#")]),s._v(" 3. 定义实现随机User-Agent的下载中间件")]),s._v(" "),a("h5",{attrs:{id:"_3-1-在middlewares-py中完善代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-在middlewares-py中完善代码"}},[s._v("#")]),s._v(" 3.1 在middlewares.py中完善代码")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Tencent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" USER_AGENTS_LIST "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意导入路径,请忽视pycharm的错误提示")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAgentMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        user_agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("USER_AGENTS_LIST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_agent \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"_3-2-在爬虫文件tencent-py的每个解析函数中添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在爬虫文件tencent-py的每个解析函数中添加"}},[s._v("#")]),s._v(" 3.2 在爬虫文件tencent.py的每个解析函数中添加")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CheckUA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"_3-3-在settings中设置开启自定义的下载中间件-设置方法同管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-在settings中设置开启自定义的下载中间件-设置方法同管道"}},[s._v("#")]),s._v(" 3.3 在settings中设置开启自定义的下载中间件，设置方法同管道")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DOWNLOADER_MIDDLEWARES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tencent.middlewares.UserAgentMiddleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("543")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"_3-4-在settings中添加ua的列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-在settings中添加ua的列表"}},[s._v("#")]),s._v(" 3.4 在settings中添加UA的列表")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("USER_AGENTS_LIST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h5",{attrs:{id:"_3-5-运行爬虫观察现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-运行爬虫观察现象"}},[s._v("#")]),s._v(" 3.5 运行爬虫观察现象")]),s._v(" "),a("h3",{attrs:{id:"_4-代理ip的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-代理ip的使用"}},[s._v("#")]),s._v(" 4 代理ip的使用")]),s._v(" "),a("h5",{attrs:{id:"_4-1-思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-思路分析"}},[s._v("#")]),s._v(" 4.1 思路分析")]),s._v(" "),a("ol",[a("li",[s._v("代理添加的位置：request.meta中增加"),a("code",[s._v("proxy")]),s._v("字段")]),s._v(" "),a("li",[s._v("获取一个代理ip，赋值给"),a("code",[s._v("request.meta['proxy']")]),s._v(" "),a("ul",[a("li",[s._v("代理池中随机选择代理ip")]),s._v(" "),a("li",[s._v("代理ip的webapi发送请求获取一个代理ip")])])])]),s._v(" "),a("h5",{attrs:{id:"_4-2-具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-具体实现"}},[s._v("#")]),s._v(" 4.2 具体实现")]),s._v(" "),a("p",[s._v("免费代理ip：")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProxyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxies可以在settings.py中，也可以来源于代理ip的webapi")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy = 'http://192.168.1.1:8118'")]),s._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" proxy\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以不写return ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("收费代理ip：")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 人民币玩家")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" base64\nproxyServer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://proxy.abuyun.com:9010'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 收费的代理ip服务器地址，这里是abuyun")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理隧道验证信息  这个是在那个网站上申请的")]),s._v("\nproxyUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 用户名\nproxyPass "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 密码\nproxyAuth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Basic "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b64encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("proxyUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" proxyPass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProxyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置代理")]),s._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" proxyServer\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置认证")]),s._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Proxy-Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" proxyAuth \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h5",{attrs:{id:"_4-3-检测代理ip是否可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-检测代理ip是否可用"}},[s._v("#")]),s._v(" 4.3 检测代理ip是否可用")]),s._v(" "),a("p",[s._v("在使用了代理ip的情况下可以在下载中间件的process_response()方法中处理代理ip的使用情况，如果该代理ip不能使用可以替换其他代理ip")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProxyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'302'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此时对代理ip进行操作，比如删除")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" request \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("中间件的使用：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("完善中间件代码：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("process_request(self, request, spider)：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("* 当每个request通过下载中间件时，该方法被调用。\n* 返回None值：继续请求\n* 返回Response对象：不再请求，把response返回给引擎\n* 返回Request对象：把request对象交给调度器进行后续的请求\n")])])])]),s._v(" "),a("li",[a("p",[s._v("process_response(self, request, response, spider)：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("* 当下载器完成http请求，传递响应给引擎的时候调用\n* 返回Resposne：交给process\\_response来处理\n* 返回Request对象：交给调取器继续请求\n")])])])])])]),s._v(" "),a("li",[a("p",[s._v("需要在settings.py中开启中间件 DOWNLOADER_MIDDLEWARES = { 'myspider.middlewares.UserAgentMiddleware': 543, }")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
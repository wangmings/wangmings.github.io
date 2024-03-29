(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{878:function(s,t,a){"use strict";a.r(t);var r=a(30),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scrapy-redis-domz爬虫-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-redis-domz爬虫-分析"}},[s._v("#")]),s._v(" scrapy_redis domz爬虫 分析")]),s._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标")]),s._v(" "),a("ol",[a("li",[s._v("了解 scrapy_redis实现去重的原理")]),s._v(" "),a("li",[s._v("了解 scrapy中请求入队的条件")]),s._v(" "),a("li",[s._v("能够应用 scrapy_redis完成基于url地址的增量式爬虫")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-拷贝源码中的demo文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-拷贝源码中的demo文件"}},[s._v("#")]),s._v(" 1 拷贝源码中的demo文件")]),s._v(" "),a("p",[s._v("1、clone github scrapy-redis源码文件 "),a("code",[s._v("git clone https://github.com/rolando/scrapy-redis.git")]),s._v(" 2、研究项目自带的三个demo "),a("code",[s._v("mv scrapy-redis/example-project ~/scrapyredis-project")])]),s._v(" "),a("h3",{attrs:{id:"_2-观察dmoz文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-观察dmoz文件"}},[s._v("#")]),s._v(" 2 观察dmoz文件")]),s._v(" "),a("p",[s._v("在domz爬虫文件中，实现方式就是之前的"),a("code",[s._v("crawlspider")]),s._v("类型的爬虫")]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linkextractors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" LinkExtractor\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spiders "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" CrawlSpider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Rule\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DmozSpider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CrawlSpider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Follow categories and extract links."""')]),s._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dmoz'")]),s._v("\n    allowed_domains "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dmoztools.net'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://dmoztools.net/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义数据提取规则，使用了css选择器")]),s._v("\n    rules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        Rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LinkExtractor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            restrict_css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.top-cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.sub-cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.cat-item'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'parse_directory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" follow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse_directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.title-and-desc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.site-title::text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.site-descr::text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a::attr(href)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("但是在settings.py中多了一下几行,这几行表示"),a("code",[s._v("scrapy_redis")]),s._v("中重新实现的了去重的类，以及调度器，并且使用的"),a("code",[s._v("RedisPipeline")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DUPEFILTER_CLASS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scrapy_redis.dupefilter.RFPDupeFilter"')]),s._v("\nSCHEDULER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scrapy_redis.scheduler.Scheduler"')]),s._v("\nSCHEDULER_PERSIST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\nITEM_PIPELINES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'example.pipelines.ExamplePipeline'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrapy_redis.pipelines.RedisPipeline'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-运行dmoz爬虫-观察现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行dmoz爬虫-观察现象"}},[s._v("#")]),s._v(" 3 运行dmoz爬虫，观察现象")]),s._v(" "),a("ol",[a("li",[s._v("首先我们需要添加redis的地址，程序才能够使用redis")])]),s._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v(" REDIS_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis://127.0.0.1:6379"')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者使用下面的方式")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# REDIS_HOST = "127.0.0.1"')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# REDIS_PORT = 6379 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("我们执行domz的爬虫，会发现redis中多了一下三个键：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/domz%E8%BF%90%E8%A1%8C%E7%8E%B0%E8%B1%A1.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("继续执行程序")]),s._v(" "),a("p",[s._v("继续执行程序，会发现程序在前一次的基础之上继续往后执行，"),a("strong",[s._v("所以domz爬虫是一个基于url地址的增量式的爬虫")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-scrapy-redis的原理分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-scrapy-redis的原理分析"}},[s._v("#")]),s._v(" 4. scrapy_redis的原理分析")]),s._v(" "),a("p",[s._v("我们从settings.py中的三个配置来进行分析 分别是：")]),s._v(" "),a("ul",[a("li",[s._v("RedisPipeline")]),s._v(" "),a("li",[s._v("RFPDupeFilter")]),s._v(" "),a("li",[s._v("Scheduler")])]),s._v(" "),a("h5",{attrs:{id:"_4-1-scrapy-redis之redispipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-scrapy-redis之redispipeline"}},[s._v("#")]),s._v(" 4.1 Scrapy_redis之RedisPipeline")]),s._v(" "),a("p",[s._v("RedisPipeline中观察process_item，进行数据的保存，存入了redis中")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/redis_pipeline.png",alt:""}})]),s._v(" "),a("h5",{attrs:{id:"_4-2-scrapy-redis之rfpdupefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-scrapy-redis之rfpdupefilter"}},[s._v("#")]),s._v(" 4.2 Scrapy_redis之RFPDupeFilter")]),s._v(" "),a("p",[s._v("RFPDupeFilter 实现了对request对象的加密")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/RFP.png",alt:""}})]),s._v(" "),a("h5",{attrs:{id:"_4-3-scrapy-redis之scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-scrapy-redis之scheduler"}},[s._v("#")]),s._v(" 4.3 Scrapy_redis之Scheduler")]),s._v(" "),a("p",[s._v("scrapy_redis调度器的实现了决定什么时候把request对象加入带抓取的队列，同时把请求过的request对象过滤掉")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/scheduler.png",alt:""}})]),s._v(" "),a("p",[s._v("由此可以总结出request对象入队的条件")]),s._v(" "),a("ul",[a("li",[s._v("request之前没有见过")]),s._v(" "),a("li",[s._v("request的dont_filter为True，即不过滤")]),s._v(" "),a("li",[s._v("start_urls中的url地址会入队，因为他们默认是不过滤")])]),s._v(" "),a("h3",{attrs:{id:"_7-动手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-动手"}},[s._v("#")]),s._v(" 7. 动手")]),s._v(" "),a("p",[s._v("需求：抓取京东图书的信息")]),s._v(" "),a("p",[s._v("目标：抓取京东图书包含图书的名字、封面图片地址、图书url地址、作者、出版社、出版时间、价格、图书所属大分类、图书所属小的分类、分类的url地址")]),s._v(" "),a("p",[s._v("url："),a("a",{attrs:{href:"https://book.jd.com/booksort.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://book.jd.com/booksort.html"),a("OutboundLink")],1)]),s._v(" "),a("h5",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[s._v("#")]),s._v(" 思路分析：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("确定数据抓取的入口")]),s._v(" "),a("p",[s._v("数据都在dl下的dt和dd中，其中dt是大分类的标签，dd是小分类的标签")]),s._v(" "),a("p",[s._v("对应的思路可以使选择所有的大分类后，选择他下一个兄弟节点即可")]),s._v(" "),a("p",[s._v("xpath中下一个兄弟节点的语法是"),a("code",[s._v("following-sibling::*[1]")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%AC%E4%B8%9C%E6%95%B0%E6%8D%AE%E6%8A%93%E5%8F%96%E7%9A%84%E5%85%A5%E5%8F%A3.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("确定列表页的url地址和程序终止的条件")]),s._v(" "),a("p",[s._v("有下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%AC%E4%B8%9C%E6%9C%89%E4%B8%8B%E4%B8%80%E9%A1%B5.png",alt:""}})]),s._v(" "),a("p",[s._v("没有下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%AC%E4%B8%9C%E6%B2%A1%E6%9C%89%E4%B8%8B%E4%B8%80%E9%A1%B5.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("确定数据的位置")]),s._v(" "),a("p",[s._v("数据大部分都在url地址的响应中，但是价格不在")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%AC%E4%B8%9C%E5%88%97%E8%A1%A8%E9%A1%B5%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BD%8D%E7%BD%AE.png",alt:""}})]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("search all file")]),s._v("的方法，找到价格的地址，")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/images/%E4%BA%AC%E4%B8%9C%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BD%8D%E7%BD%AE.png",alt:""}})]),s._v(" "),a("p",[s._v("对url地址进行删除无用的参数和url解码之后，获取到价格的url为")]),s._v(" "),a("p",[a("code",[s._v("https://p.3.cn/prices/mgets?skuIds=J_11635586613")])]),s._v(" "),a("p",[s._v("其中skuId为商品的id，能够在网页中获取")])]),s._v(" "),a("li",[a("p",[s._v("使用scrapy的思路完成爬虫，在settings中添加上scrapy_redis的配置")])])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[s._v("知道什么是scrapy_redis")]),s._v(" "),a("li",[s._v("掌握scarpy_redis实现分布式的原理")]),s._v(" "),a("li",[s._v("掌握scrapy_进行url地址加密的方法")]),s._v(" "),a("li",[s._v("掌握request对象入队的条件")]),s._v(" "),a("li",[s._v("能够通过scrapy_redis完成基于url地址的增量式爬虫")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
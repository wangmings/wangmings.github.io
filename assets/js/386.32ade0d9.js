(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{881:function(s,a,t){"use strict";t.r(a);var r=t(30),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"scrapyd的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapyd的使用"}},[s._v("#")]),s._v(" scrapyd的使用")]),s._v(" "),t("h5",{attrs:{id:"学习目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标：")]),s._v(" "),t("p",[s._v("1.了解 scrapyd的使用流程 了解")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"_1-scrapyd的介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-scrapyd的介绍"}},[s._v("#")]),s._v(" 1. scrapyd的介绍")]),s._v(" "),t("p",[s._v("scrapyd是一个用于部署和运行scrapy爬虫的程序，它允许你通过JSON API来"),t("strong",[s._v("部署爬虫项目和控制爬虫运行")]),s._v("，scrapyd是一个守护进程，监听爬虫的运行和请求，然后启动进程来执行它们")]),s._v(" "),t("h3",{attrs:{id:"_2-scrapyd的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-scrapyd的安装"}},[s._v("#")]),s._v(" 2. scrapyd的安装")]),s._v(" "),t("p",[s._v("scrapyd服务: "),t("code",[s._v("pip3 install scrapyd")])]),s._v(" "),t("p",[s._v("scrapyd客户端: "),t("code",[s._v("pip3 install scrapyd-client")])]),s._v(" "),t("h3",{attrs:{id:"_3-启动scrapyd服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动scrapyd服务"}},[s._v("#")]),s._v(" 3. 启动scrapyd服务")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("在scrapy项目路径下")]),s._v(" 启动scrapyd的命令："),t("code",[s._v("sudo scrapyd")]),s._v(" 或 "),t("code",[s._v("scrapyd")])])]),s._v(" "),t("li",[t("p",[s._v("启动之后就可以打开本地运行的scrapyd，浏览器中访问本地6800端口可以查看scrapyd的监控界面")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/images/scrapyd-1.jpg",alt:""}}),s._v(" "),t("img",{attrs:{src:"/assets/images/scrapyd-2.jpg",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("点击job可以查看任务监控界面")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/images/scrapyd-3.jpg",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_4-scrapy项目部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-scrapy项目部署"}},[s._v("#")]),s._v(" 4. scrapy项目部署")]),s._v(" "),t("h4",{attrs:{id:"_4-1-配置需要部署的项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-配置需要部署的项目"}},[s._v("#")]),s._v(" 4.1 配置需要部署的项目")]),s._v(" "),t("p",[s._v("编辑需要部署的项目的scrapy.cfg文件(需要将哪一个爬虫部署到scrapyd中，就配置该项目的该文件)")]),s._v(" "),t("div",{staticClass:"language-Python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deploy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("部署名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("部署名可以自行定义"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6800")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n project "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 项目名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("创建爬虫项目时使用的名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"/assets/images/scrapyd-4.jpg",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_4-2-部署项目到scrapyd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-部署项目到scrapyd"}},[s._v("#")]),s._v(" 4.2 部署项目到scrapyd")]),s._v(" "),t("p",[s._v("同样在"),t("strong",[s._v("scrapy项目路径下")]),s._v("执行：")]),s._v(" "),t("p",[t("code",[s._v("scrapyd-deploy \\-p 项目名称")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/images/scrapyd-5.jpg",alt:""}})]),s._v(" "),t("p",[s._v("部署成功之后就可以看到部署的项目 "),t("img",{attrs:{src:"/assets/images/scrapyd-6.jpg",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_4-3-管理scrapy项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-管理scrapy项目"}},[s._v("#")]),s._v(" 4.3 管理scrapy项目")]),s._v(" "),t("ul",[t("li",[s._v("启动项目："),t("code",[s._v("curl http://localhost:6800/schedule.json -d project=project_name -d spider=spider_name")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/images/scrapyd-7.jpg",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("关闭爬虫："),t("code",[s._v("curl http://localhost:6800/cancel.json -d project=project_name -d job=jobid")])])]),s._v(" "),t("h3",{attrs:{id:"_5-了解scrapyd的其他webapi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-了解scrapyd的其他webapi"}},[s._v("#")]),s._v(" 5. 了解scrapyd的其他webapi")]),s._v(" "),t("ul",[t("li",[s._v("curl "),t("a",{attrs:{href:"http://localhost:6800/listprojects.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:6800/listprojects.json"),t("OutboundLink")],1),s._v(" （列出项目）")]),s._v(" "),t("li",[s._v("curl "),t("a",{attrs:{href:"http://localhost:6800/listspiders.json?project=myspider",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:6800/listspiders.json?project=myspider"),t("OutboundLink")],1),s._v(" （列出爬虫）")]),s._v(" "),t("li",[s._v("curl "),t("a",{attrs:{href:"http://localhost:6800/listjobs.json?project=myspider",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:6800/listjobs.json?project=myspider"),t("OutboundLink")],1),s._v(" （列出job）")]),s._v(" "),t("li",[s._v("curl "),t("a",{attrs:{href:"http://localhost:6800/cancel.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:6800/cancel.json"),t("OutboundLink")],1),s._v(" -d project=myspider -d job=tencent （"),t("strong",[s._v("终止爬虫")]),s._v("，该功能会有延时或不能终止爬虫的情况，此时可用kill -9杀进程的方式中止）")]),s._v(" "),t("li",[s._v("scrapyd还有其他webapi，百度搜索了解更多")])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("ol",[t("li",[s._v("在scrapy项目路径下执行"),t("code",[s._v("sudo scrapyd")]),s._v("或"),t("code",[s._v("scrapyd")]),s._v("，启动scrapyd服务；或以后台进程方式启动"),t("code",[s._v("nohup scrapyd > scrapyd.log 2>&1 &")])]),s._v(" "),t("li",[s._v("部署scrapy爬虫项目"),t("code",[s._v("scrapyd-deploy -p myspider")])]),s._v(" "),t("li",[s._v("启动爬虫项目中的一个爬虫"),t("code",[s._v("curl http://localhost:6800/schedule.json -d project=myspider -d spider=tencent")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
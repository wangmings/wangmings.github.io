(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{546:function(_,v,e){"use strict";e.r(v);var t=e(30),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"如何发布一个自己的npm包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何发布一个自己的npm包"}},[_._v("#")]),_._v(" 如何发布一个自己的npm包")]),_._v(" "),e("h2",{attrs:{id:"_1、创建一个npm的账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建一个npm的账号"}},[_._v("#")]),_._v(" 1、创建一个npm的账号")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("npm 官网"),e("OutboundLink")],1)]),_._v(" "),e("h2",{attrs:{id:"_2、初始化一个简单的项目发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、初始化一个简单的项目发布"}},[_._v("#")]),_._v(" 2、初始化一个简单的项目发布")]),_._v(" "),e("p",[_._v("a、本地创建一个文件夹：例如："),e("code",[_._v("npm-test")]),_._v("\nb、执行命令进入目录: "),e("code",[_._v("cd npm-test")]),_._v("\nc、执行 "),e("code",[_._v("npm init")]),_._v(" 初始化项目。默认一路回车就行")]),_._v(" "),e("p",[_._v("得一个package.json文件，文件的默认字段简介")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("name")]),_._v("：发布的包名，默认是上级文件夹名。不得与现在npm中的包名重复。包名不能有大写字母/空格/下滑线!")]),_._v(" "),e("li",[e("code",[_._v("version")]),_._v("：你这个包的版本号，默认是1.0.0。版本号由三部分组成："),e("code",[_._v("major.minor.patch")]),_._v("，主版本号.次版本号.修补版本号。\n"),e("ul",[e("li",[e("code",[_._v("补丁")]),_._v("中的更改表示不会破坏任何内容的错误修复。")]),_._v(" "),e("li",[e("code",[_._v("次要版本")]),_._v("的更改表示不会破坏任何内容的新功能。")]),_._v(" "),e("li",[e("code",[_._v("主要版本")]),_._v("的更改代表了一个破坏兼容性的大变化。 如果用户不适应主要版本更改，则内容将无法正常工作。")])])]),_._v(" "),e("li",[e("code",[_._v("description")]),_._v("：项目简介")]),_._v(" "),e("li",[e("code",[_._v("main")]),_._v("：入口文件，默认是index.js，可以修改成自己的入口文件")]),_._v(" "),e("li",[e("code",[_._v("scripts")]),_._v("：包含各种脚本执行命令")]),_._v(" "),e("li",[e("code",[_._v("test")]),_._v("：测试命令。")]),_._v(" "),e("li",[e("code",[_._v("author")]),_._v("：写自己的账号名")]),_._v(" "),e("li",[e("code",[_._v("license")]),_._v("：这个直接回车，开源文件协议吧，也可以是MIT，看需要吧。")])]),_._v(" "),e("h2",{attrs:{id:"_3、如果本机第一次发布包-非第一次可忽略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、如果本机第一次发布包-非第一次可忽略"}},[_._v("#")]),_._v(" 3、如果本机第一次发布包（非第一次可忽略）")]),_._v(" "),e("p",[_._v("在终端输入"),e("code",[_._v("npm adduser")]),_._v("，提示输入账号，密码和邮箱，然后将提示创建成功")]),_._v(" "),e("p",[_._v("【注意】"),e("code",[_._v("npm adduser")]),_._v("成功的时候默认你已经登陆了，所以可跳过第四步。")]),_._v(" "),e("p",[_._v("最后一行显示登录信息，as 后面是用户名。on 后是源地址，如果不是"),e("code",[_._v("https://registry.npmjs.org/")]),_._v("，比如是淘宝源，请切换为官方源，才能推送项目到npm官方网站。")]),_._v(" "),e("p",[_._v("修改源地址为官方源")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("npm config set registry https://registry.npmjs.org/\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4、非第一次发布包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、非第一次发布包"}},[_._v("#")]),_._v(" 4、非第一次发布包")]),_._v(" "),e("p",[_._v("在终端输入"),e("code",[_._v("npm login")]),_._v("，然后输入你创建的账号和密码，和邮箱，登陆，结果同步骤三。")]),_._v(" "),e("h2",{attrs:{id:"_5、npm-publish-发包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、npm-publish-发包"}},[_._v("#")]),_._v(" 5、npm publish 发包")]),_._v(" "),e("p",[_._v("在终端输入  "),e("code",[_._v("npm publish")]),_._v(" 就可以了")]),_._v(" "),e("blockquote",[e("p",[_._v("注意：如果项目里有部分私密的代码不想发布到npm上，可以将它写入"),e("code",[_._v(".gitignore")]),_._v(" 或"),e("code",[_._v(".npmignore")]),_._v("中，上传就会被忽略了")])]),_._v(" "),e("h2",{attrs:{id:"_6、查询发布的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、查询发布的包"}},[_._v("#")]),_._v(" 6、查询发布的包")]),_._v(" "),e("p",[_._v("到npm官网全局搜索即可")]),_._v(" "),e("h2",{attrs:{id:"_7、如何撤销发布的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、如何撤销发布的包"}},[_._v("#")]),_._v(" 7、如何撤销发布的包")]),_._v(" "),e("p",[_._v("终端执行 "),e("code",[_._v("npm unpublish")])]),_._v(" "),e("p",[_._v("例如：")]),_._v(" "),e("ul",[e("li",[_._v("1、"),e("code",[_._v("npm unpublish z-tool@1.0.0")]),_._v(" 删除某个版本")]),_._v(" "),e("li",[_._v("2、"),e("code",[_._v("npm unpublish z-tool --force")]),_._v(" 删除整个npm市场的包")])]),_._v(" "),e("p",[_._v("不过撤包推荐用法：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("npm unpublish")]),_._v(" 的推荐替代命令："),e("code",[_._v("npm deprecate <pkg>[@<version>] <message>")])]),_._v(" "),e("li",[_._v("使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告")]),_._v(" "),e("li",[_._v("例如："),e("code",[_._v("npm deprecate z-tool '这个包我已经不再维护了哟～'")])])]),_._v(" "),e("blockquote",[e("p",[_._v("【注意】如果报权限方面的错，加上 --force")])]),_._v(" "),e("p",[_._v("参考文章：")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000023075167",target:"_blank",rel:"noopener noreferrer"}},[_._v("一分钟教你发布npm包"),e("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1016:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"eslint代码检查规范-react-reactnative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint代码检查规范-react-reactnative"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#eslint%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5%E8%A7%84%E8%8C%83-react-reactnative"}},[s._v("#")]),s._v(" ESlint代码检查规范 - React/ReactNative")]),s._v(" "),a("p",[s._v("在前端编码时,为了规范每个成员的代码风格以及避免低级的错误,我们可以使用Eslint来制定规则.本文旨在帮助团队成员形成良好的React代码规范。推荐使用"),a("a",{attrs:{href:"https://github.com/airbnb/javascript/tree/master/react",target:"_blank",rel:"noopener noreferrer"}},[s._v("Airbnb Eslint规范 (opens new window)"),a("OutboundLink")],1),s._v("+"),a("a",{attrs:{href:"http://eslint.cn/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[s._v("自定义Rules (opens new window)"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"airbnb-eslint规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airbnb-eslint规范"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#airbnb-eslint%E8%A7%84%E8%8C%83"}},[s._v("#")]),s._v(" Airbnb Eslint规范")]),s._v(" "),a("p",[s._v("目前使用eslint不再需要自己手动装太多npm包，社区已经在最新eslint初始化命令中自动安装。")]),s._v(" "),a("h3",{attrs:{id:"安装eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装eslint"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85eslint"}},[s._v("#")]),s._v(" 安装Eslint")]),s._v(" "),a("p",[s._v("有全局安装和本地安装两种方式，推荐本地安装")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev eslint\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"初始化eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化eslint"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#%E5%88%9D%E5%A7%8B%E5%8C%96eslint"}},[s._v("#")]),s._v(" 初始化Eslint")]),s._v(" "),a("p",[s._v("初始化会供用户很多可选的选择，这里推荐使用流行的"),a("code",[s._v("Airbnb Eslint")]),s._v("。安装完后，在"),a("code",[s._v("package.json")]),s._v("中会自动安装需要的依赖,分别为eslint-config-airbnb、eslint-plugin-import、eslint-plugin-jsx-a11y、eslint-plugin-react。同时也会创建"),a("code",[s._v(".eslintrc")]),s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    eslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("init\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"/assets/images-1/28.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"eslint检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint检查"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#eslint%E6%A3%80%E6%9F%A5"}},[s._v("#")]),s._v(" Eslint检查")]),s._v(" "),a("p",[s._v("eslint的"),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface",target:"_blank",rel:"noopener noreferrer"}},[s._v("Command Line Interface (opens new window)"),a("OutboundLink")],1),s._v("有命令行调用接口，如何搭配命令行取决于项目风格。格式：")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    eslint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("glob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("eg：当前app目录下监测js并打印报错")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    eslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("quiet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("ext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js app\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("ext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                 Specify JavaScript file extensions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("quiet                        Report errors only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("tips: 如果测试执行报错，可能你同时安装了本地和全局eslint，这里可以把eslint命令指定为本地路径："),a("code",[s._v("./node_modules/.bin/eslint")]),s._v(",参考见该"),a("a",{attrs:{href:"https://github.com/airbnb/javascript/issues/465",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue (opens new window)"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"自定义rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义rules"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89rules"}},[s._v("#")]),s._v(" 自定义Rules")]),s._v(" "),a("p",[s._v("自定义Rules综合考虑了笔者部门小伙伴习惯的Vue风格，如不使用分号结尾，以及React特殊的JSX语法，形成以下推荐配置：")]),s._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"airbnb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用airbnb规则")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"parser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// React使用了大量ES6语法，使用babel-eslint解析器代替默认的Espree")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"globals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局变量设置")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"__DEV__"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false 表示这个全局变量不允许被重新赋值")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4个空格")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"indent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/jsx-indent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/jsx-indent-props"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否使用分号结尾")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"no-console"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许console")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"max-len"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单行没有字数限制")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"object-curly-newline"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭大括号内换行符的一致性")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"comma-dangle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭是否使用拖尾逗号")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"arrow-parens"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭箭头函数是否需要大括号")]),s._v("\n    \n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/jsx-filename-extension"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"extensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".jsx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许使用js/jsx文件扩展")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/sort-comp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭sort")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/no-array-index-key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许使用index作为List的key")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"no-unused-expressions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许三元表达式")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"import/no-unresolved"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许require image")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/no-multi-comp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许一个文件定义多个组件")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react/display-name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不需要给组件定义displayName")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("blockquote",[a("p",[s._v("注意:需要额外安装babel-eslint以解析ES6语法："),a("code",[s._v("npm install \\--save-dev babel-eslint")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{823:function(s,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-反向代理配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理配置"}},[s._v("#")]),s._v(" Nginx 反向代理配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   #反向代理，指向具体的node监听端口\n    proxy_redirect     off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                           #关闭地址的重定向\n\n    # 在代理请求头中加入下面的信息，方便我们用nodejs获取一些客户端信息\n    proxy_set_header   Host             $host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        #本机地址（ip或域名）\n    proxy_set_header   "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v("        $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" #客户端真实ip\n    proxy_set_header   "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For  $proxy_add_x_forwarded_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("#客户端真实ip\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
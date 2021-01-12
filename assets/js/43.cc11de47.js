(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{215:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("大家都知道js是单线程的脚本语言，在同一时间，只能做同一件事，为了协调事件、用户交互、脚本、UI渲染和网络处理等行为，防止主线程阻塞，Event Loop方案应运而生...")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("js作为主要运行在浏览器的脚本语言，js主要用途之一是操作DOM。")]),t._v(" "),n("p",[t._v("在js高程中举过一个栗子，如果js同时有两个线程，同时对同一个dom进行操作，这时浏览器应该听哪个线程的，如何判断优先级？")]),t._v(" "),n("p",[t._v("为了避免这种问题，js必须是一门单线程语言，并且在未来这个特点也不会改变。")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("因为js是单线程语言，当遇到异步任务(如ajax操作等)时，不可能一直等待异步完成，再继续往下执行，在这期间浏览器是空闲状态，显而易见这会导致巨大的资源浪费。")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("当执行某个函数、用户点击一次鼠标，Ajax完成，一个图片加载完成等事件发生时，只要指定过回调函数，这些事件发生时就会进入执行栈队列中，等待主线程读取,遵循先进先出原则。")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("要明确的一点是，主线程跟执行栈是不同概念，主线程规定现在执行执行栈中的哪个事件。")]),t._v(" "),n("p",[t._v("主线程循环：即主线程会不停的从执行栈中读取事件，会执行完所有栈中的同步代码。")]),t._v(" "),n("p",[t._v("当遇到一个异步事件后，并不会一直等待异步事件返回结果，而是会将这个事件挂在与执行栈不同的队列中，我们称之为任务队列(Task Queue)。")]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("不太理解的话，可以运行一下下面的代码，或者点击一下这个"),n("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/LrzqBd",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("结果是当a、b、c函数都执行完成之后，三个setTimeout才会依次执行。")]),t._v(" "),t._m(6),n("hr"),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("hr"),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("异步任务分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。")]),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)")]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("Promise、 MutaionObserver、process.nextTick(Node.js环境）")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("Event Loop(事件循环)中，每一次循环称为 tick, 每一次tick的任务如下：")]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("宏任务 > 所有微任务 > 宏任务，如下图所示：")]),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("从上图我们可以看出：")]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("上面提到的"),n("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/LrzqBd",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),n("OutboundLink")],1),t._v("结果可以这么理解：先执行"),n("code",[t._v("script")]),t._v("宏任务，执行完了之后，再执行其他两个定时器宏任务。")]),t._v(" "),n("hr"),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("下面这个题，很多人都应该看过/遇到过，重新来看会不会觉得清晰很多：")]),t._v(" "),t._m(17),n("p",[t._v("根据本文的解析，我们可以得到:")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("类似上文的面试题还有很多，实则都大同小异，只要掌握了事件循环的机制，这些问题都会变得很简单。\n")]),t._v(" "),n("h3",{attrs:{id:"点个star支持我一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),n("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),n("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),n("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"事件循环-event-loop-机制以及实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-event-loop-机制以及实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件循环(Event Loop)机制以及实例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"为什么js是单线程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么js是单线程？","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么js是单线程？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"执行栈与任务队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行栈与任务队列","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行栈与任务队列")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"执行栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行栈")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"主线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 主线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("当主线程将执行栈中所有的代码执行完之后，主线程将会去查看任务队列是否有任务")]),this._v("。如果有，那么主线程会依次执行那些任务队列中的回调函数。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务队列函数1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a的for循环'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a事件执行完'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务队列函数2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b的for循环'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b事件执行完'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("c")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务队列函数3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c的for循环'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c事件执行完'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当a、b、c函数都执行完成之后，三个setTimeout才会依次执行")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"js-异步执行的运行机制。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-异步执行的运行机制。","aria-hidden":"true"}},[this._v("#")]),this._v(" js 异步执行的运行机制。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("所有任务都在主线程上执行，形成一个执行栈。")]),t._v(" "),n("li",[t._v('主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。')]),t._v(" "),n("li",[t._v('一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。')]),t._v(" "),n("li",[n("strong",[t._v("主线程不断重复上面的第三步")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"宏任务与微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务与微任务","aria-hidden":"true"}},[this._v("#")]),this._v(" 宏任务与微任务:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("宏任务(macrotask)：")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("微任务(microtask)：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-loop-事件循环-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-事件循环-：","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Loop(事件循环)：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("执行栈选择最先进入队列的宏任务(通常是"),n("code",[t._v("script")]),t._v("整体代码)，如果有则执行")]),t._v(" "),n("li",[t._v("检查是否存在 Microtask，如果存在则不停的执行，直至清空 microtask 队列")]),t._v(" "),n("li",[t._v("更新render(每一次事件循环，浏览器都可能会去更新渲染)")]),t._v(" "),n("li",[t._v("重复以上步骤")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/164081cfd8400f92?raw=true",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("将所有任务看成两个队列：执行队列与事件队列。")]),this._v(" "),s("li",[this._v("执行队列是同步的，事件队列是异步的，宏任务放入事件列表，微任务放入执行队列之后，事件队列之前。")]),this._v(" "),s("li",[this._v("当执行完同步代码之后，就会执行位于执行列表之后的微任务，然后再执行事件列表中的宏任务")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"面试题实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 面试题实践")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行顺序问题，考察频率挺高的，先自己想答案**")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("p",[t._v("先执行"),n("code",[t._v("script")]),t._v("同步代码")]),t._v(" "),n("pre",[n("code",[t._v(" 先执行new Promise中的console.log(2),then后面的不执行属于微任务\n 然后执行console.log(4)\n")])])]),t._v(" "),n("li",[n("p",[t._v("执行完"),n("code",[t._v("script")]),t._v("宏任务后，执行微任务，console.log(3)，没有其他微任务了。")])]),t._v(" "),n("li",[n("p",[t._v("执行另一个宏任务，定时器，console.log(1)。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("根据本文的内容，可以很轻松，且有理有据的"),s("s",[this._v("猜出")]),this._v("写出正确答案：2,4,3,1.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])}],!1,null,null,null);e.options.__file="js事件循环机制.md";s.default=e.exports}}]);
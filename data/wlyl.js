data.wlyl = [
  {
    title: "简述计算机网络的定义。 / 第一章",
    simple: "",
    normal: [
      "计算机网络是互连的、自治的计算机的集合。",
      "互连：利用通信链路连接相互独立的计算机系统。",
      "自治：互连的计算机系统彼此独立，不存在主从或者控制与被控制的关系。",
    ],
    start: 1,
  },
  {
    title: "简述网络协议以及协议三要素 / 第一章",
    simple: "",
    normal: [
      "网络协议：网络通信实体之间在 数据交换过程中需要遵循的规则或约定。",
      "协议三要素：语义、语法、时序。",
      "语法：语法定义实体之间交换信息的格式与结构。",
      "语义：语义就是定义实体之间交换的信息中需要发送控制信息。",
      "时序：时序也称为同步，定义实体之间交换信息的顺序以及如何匹配或适应彼此的速度。",
    ],
    start: 1,
  },
  {
    title: "简述计算机网络的功能 / 第一章",
    simple: "",
    normal: [
      "硬件资源共享：云计算, 云存储",
      "软件资源共享：SaaS",
      "信息资源共享：信息检索",
    ],
    start: 1,
  },
  {
    title: "计算机网络按覆盖范围分类以及各自的特点 / 第一章",
    simple: "",
    normal: [
      "个域网（PAN）：个域网通常覆盖范围在 1～10m。",
      "局域网（LAN）：局域网通常覆盖范围在 10m～1km。",
      "城域网（MAN）：覆盖范围通常在 5～50km。",
      "广域网（WAN）：广域网覆盖范围在几十到几千千米，通常跨越更大的地理空间，可以实现异地城域网或局域网的互连",
    ],
    start: 1,
  },
  {
    title: "计算机网络按拓扑结构分类以及各自的特点 / 第一章",
    simple:
      "背题主要记住怎么通信，星形-中央节点、总线型-广播信道、环形-通信链路、网状-多条链路、树状-二合一。 混合大于2",
    normal: [
      "星形拓扑结构：包括一个中央结点，网络中的主机通过点对点通信链路与中央结点连接。",
      "优点：易于监控管理、故障诊断、隔离。",
      "缺点：中央结点一旦故障，全网瘫痪。",

      "总线型拓扑结构：网络采用一条广播信道作为公共传输介质。所有结点均与总线连接，结点间的通信均通过共享的总线进行。",
      "优点：结构简单，电缆数量少，易于扩展。",
      "缺点：通信范围受限，故障诊断与隔离困难，容易产生冲突。",

      "环形拓扑结构：利用通信链路将所有结点连接成一个闭合的环。",
      "优点：电缆长度短，可以使用光纤，易于避免冲突。",
      "缺点：某结点故障引起全网瘫痪，加新（撤出）结点麻烦，等待时间较长。",

      "网状拓扑结构：网络中的结点通过多条链路与不同的结点直接相连接。",
      "优点：网络可靠性高，一条或多条链路故障时，网络仍然可以联通。",
      "缺点：网络结构复杂，成本高",

      "树形拓扑结构：可以看作是总线型拓扑或星形拓扑结构网络的扩展。",
      "优点：易于扩展，故障易隔离。",
      "缺点：根结点要求高。",

      "混合拓扑结构：由两种以上简单拓扑结构网络混合连接而成的网络。",
      "优点：易于扩展，可以构建不同规模的网络，根据需要优选网络结构。",
      "缺点：结构复杂，管理与维护复杂。",
    ],
    start: 1,
  },
  {
    title: "计算机网络按交换方式分几类 / 第一章",
    simple: "",
    normal: ["电路交换网络、报文交换网络、分组交换网络。"],
    start: 1,
  },
  {
    title: "计算机网络按网络用户属性分几类 / 第一章",
    simple: "谁出钱，谁在用",
    normal: [
      "公用网：公用网是指由国家或企业出资建设，面向公众提供收费或免费服务的网络。例如电信网络。",
      "私有网：私有网是指由某个组织（如政府部门或企业等）出资建设，专门面向该组织内部业务提供网络传输服务，不向公众开放的网络。例如银行、军事，铁路专用网。",
    ],
    start: 1,
  },
  {
    title: "计算机网络的结构主要包括哪些部分，每部分的主要功能 / 第一章",
    simple: "",
    normal: [
      "包括网络边缘、接入网络与网络核心三部分。",
      "网络边缘：运行网络应用，在端系统之间进行数据交换，实现应用目的。",
      "接入网络：实现网络边缘的端系统与网络核心连接与接入的网络。",
      "网络核心：实现网络边缘中主机之间的数据中继与转发。",
    ],
    start: 1,
  },
  {
    title: "接入网络以及接入网络的特点 / 第一章",
    simple: "",
    normal: [
      "电话拨号接入：利用电话网络接入，带宽有限。",
      "非对称数字用户线路 ADSL：利用电话网络；基于频分多路复用技术；非对称；独享式接入。",
      "混合光纤同轴电缆 HFC 接入网络：利用有线电视网络；基于频分多路复用技术；非对称；共享式接入",
      "局域网：典型的局域网技术是以太网、Wi-Fi 。",
      "移动接入网络：利用移动通信网络，实现智能手机、移动终端等设备的网络接入。",
    ],
    start: 1,
  },
  {
    title: "什么是报文交换？什么是分组交换，比较两者优劣 / 第一章",
    simple: "",
    normal: [
      "报文交换：发送方把要发送的信息附加上接收主机的地址及其他控制信息，",
      "然后以报文为单位在交换网络的各结点之间以存储 - 转发的方式传送，直至送达目的主机",

      "分组交换：需要将待传输数据分割成较小的数据块，每个数据块附加上地址、",
      "每个分组独立传输到目的地，目的地将接收到的分组重新组装，还原。",
      "分组交换相比较于报文交换有以下优点：交换设备存储容量要求低。交换速度快。可靠传输效率高。更加公平。",
    ],
    start: 1,
  },
  {
    title: "OSI 参考模型包括几层？以及每层的主要功能 / 第一章",
    simple: "",
    normal: [
      "应用层：提供给用户的网络服务相关，包括文件传送、电子邮件、P2P 应用等。",
      "表示层：用于处理用于实体间交换数据的语法。",
      "会话层：在建立会话时核实双方身份是否有权参加会话；确认双方支付通信费用；在会话建立以后，需要对进程间的对话进行管理和控制。",
      "传输层：复用 / 分解（区分发送和接受主机上的进程）、端到端的可靠数据传输、连接控制、流量控制和拥塞控制机制等。",
      "网络层：数据转发与路由。",
      "数据链路层：实现在相邻结点之间数据可靠而有效的传输。",
      "物理层：在传输介质上实现无结构比特流传输。",
    ],
    start: 1,
  },
  {
    title: "TCP/IP参考模型包括几层？每层主要包括哪些协议？ / 第一章",
    simple: "",
    normal: ["应用层,传输层, 网络互连层 ,网络接口层"],
    start: 1,
  },
  {
    title:
      "计算机网络应用可以分为哪几种体系结构的应用类型？各种应用类型的特点是什么？ / 第二章",
    simple: "",
    normal: [
      "客户/服务器（C/S）结构网络应用：通信只在客户与服务器之间进行，客户与客户之间不进行直接通信。",
      "纯 P2P 结构网络应用：没有一直在运行的传统服务器，所有通信都是在对等的通信方之间直接进行。",
      "P2P 应用中的每个对等端都同时具备 C/S 应用的客户与服务器的特征，是一个服务器与客户的结合体。",
      "混合结构网络应用：将 C/S 应用与 P2P 应用相结合，既有中心服务器存在，又有对等端间的直接通信。",
    ],
    start: 1,
  },
  {
    title: "为什么说客户端服务器通信方式是网络应用通信的基本方式 / 第二章",
    simple: "",
    normal: [
      "在 C/S 通信过程中，主动发起的通信的一方就是客户，被动接受通信的一方就是服务器。服务器为了能被动接受通信，必须先运行，做好通信准备。",
    ],
    start: 1,
  },
  {
    title: "网络应用通信中，需要那些信息标识一个应用进程？ / 第二章",
    simple: "",
    normal: [
      "通过进程运行的主机IP地址以及其套接字所绑定的端口号标识应用进程。",
    ],
    start: 1,
  },
  {
    title: "简述域名系统的层次结构 / 第二章",
    simple: "",
    normal: [
      "域名的结构由标号序列组成，各标号之间用点隔开，例如：“… .三级域名.二级域名.顶级域名”。",
      "顶级域名的分类：国家顶级域名：cn , us , uk 等；通用顶级域名：com , org , gov , edu 等；基础结构域名：只有一个， arpa。",
    ],
    start: 1,
  },
  {
    title: "什么是 DNS 递归解析过程？什么是 DNS 迭代解析过程？ / 第二章",
    simple: "递归让小弟去，迭代自己去",
    normal: [
      "递归解析：提供递归查询服务的域名服务器，可以代替查询主机或其他域名服务器，进行进一步的域名查询，并将最终解析结果发送给查询主机或服务器。",
      "迭代解析：提供迭代查询服务的域名服务器，不会代替查询主机或其他域名服务器，进行进一步的域名查询， 只是将下一步要查询的服务器告知查询主机或服务器。",
    ],
    start: 1,
  },
  {
    title: "什么是本地域名服务器？主机是如何确定本地域名服务器的？ / 第二章",
    simple: "",
    normal: [
      "任何一台主机在网络地址配置时，都会配置一个域名服务器作为默认域名服务器。这样这台主机任何时候需要进行域名解析，都会将域名查询请求发送给该服务器,该服务器如果保存了被查询域名信息，做出响应；",
      "如果没有，则代理查询其他域名服务器，直到查询到结果，最后将查询结果发送给主机。这个默认域名服务器通常称为本地域名服务器。",
    ],
    start: 1,
  },
  {
    title: "简述 HTTP1.0 获取一引用 10 个小 JPEG 图片网页的通信过程。 / 第二章",
    simple: "看看熟悉就行，不背了",
    normal: [
      "第一、HTTP 客户进程向服务器的端口请求建立 TCP 连接。",
      "第二、HTTP 客户进程基于已建立的 TCP 连接向服务器发送一个 HTTP 请求报文，报文中包含路径名。",
      "第三、HTTP 服务器进程接收该请求报文，从指定的路径中检索出文件，并封装到一个 HTTP 响应报文中，发送给客户进程。",
      "第四、HTTP 服务器进程通知 TCP 断开该 TCP 连接。",
      "第五、HTTP 客户接收响应报文，断开 TCP 连接。浏览器从响应报文中提取出 HTML 文件，进行解析显示，并获知还有 10 个 JPEG 图片的引用。",
      "第六、对每个引用的 JPEG 图片，重复前 4 个步骤。",
    ],
    start: 1,
  },
  {
    title:
      "什么是非持久 HTTP？什么是非流水方式的持久 HTTP？什么是流水方式的持久 HTTP？简述交互过程。/ 第二章",
    simple: "重点断开时间，何时能发送下一个请求",
    normal: [
      "非持久连接：指 HTTP 客户与 HTTP 服务器建立 TCP 连接后，通过该连接发送 HTTP 请求报文，接收 HTTP 响应报文，然后断开连接。",
      "非流水方式持久连接：也称非管道方式持久连接，客户端在通过持久连接收到前一个响应报文后，才能发出对下一个对象的请求报文。",
      "流水方式的持久连接：也称管道方式持久连接，客户端在通过持久连接收到前一个对象的响应报文之前，连续依次发送对后续对象的请求报文，然后再通过该连接依次接收服务器发回的响应报文。",
    ],
    start: 1,
  },
  {
    title: "电子邮件主要由哪几部分构成。/ 第二章",
    simple: "",
    normal: ["邮件服务器", "简单邮件传输协议", "用户代理", "邮件读取协议"],
    start: 1,
  },
  {
    title: "简述 SMTP 发送邮件的过程。/ 第二章",
    simple: "",
    normal: [
      "SMTP 客户端首先请求与服务器端的 25 号端口建立 TCP 连接。",
      "当 TCP 连接建立成功后，SMTP 通过 3 个阶段的应用层交互完成邮件的传输，",
      "分别是握手阶段、邮件传输阶段和关闭阶段。",
    ],
    start: 1,
  },
  {
    title:
      "FTP 的“带外控制”特性是什么含义？控制连接和数据连接各有什么特点？用途分别是什么？ / 第二章",
    simple: "",
    normal: [
      "带外控制：FTP 专门使用一个独立的控制连接 传输控制信息，与传输文件信息进行分离。",
      "控制连接：整个会话期间一直保持打开，是持久的。用途：用于在客户与服务器之间传输控制信息。",
      "数据连接：临时的，非持久的。,用途：数据连接用于实际传送文件内容。",
    ],
    start: 1,
  },
  {
    title:
      "简述 TCP 客户程序与 TCP 服务器程序的 SocketAPI 基本函数调用过程。 / 第二章",
    simple: "",
    normal: [
      "服务器端：绑定一个端口号；服务器开始监听，等待客户端发送请求；接收客户端发来的请求，建立连接；等待客户机发送数据；做好相应处理后，发送给客户端；如果此时双方都已完成，就关闭 TCP 连接；结束程序，退出。",
      "客户端：不分配固定端口，而是通过调用 socket 接口获取一个临时端口；使用该临时端口和服务器建立TCP 连接；对方接收连接以后，客户端开始发送请求数据；等待服务端发回来的响应数据，",
      "必要时再次调用 send 请求；所有数据发送完后，可以关闭该 TCP 连接的接口；结束程序，退出。",
    ],
    start: 1,
  },
  {
    title:
      "简述 UDP 客户程序与 UDP 服务器程序的 SockertAPI 基本函数调用过程。 / 第二章",
    simple: "",
    normal: [
      "服务器端：获得一个固定端口号；端口号和服务器进行绑定；等待客户机发来数据；接收客户机发送来的数据请求；收到后处理，向客户机发送响应数据；必要时再次接收、处理、响应；全部完成后，关闭连接。结束程序，退出",
      "客户端：不分配固定端口，通过调用 socket 接口获取一个临时端口；利用该端口向服务器端发送数据；数据发送完后，等待接收服务器端的响应；关闭相应端口和连接；结束程序，退出。",
    ],
    start: 1,
  },
  {
    title: "简述 Cookie 的常见用途。 / 第二章",
    simple: "",
    normal: [
      "网站可以利用 Cookie 的 ID 来准确统计网站的实际访问人数、新访问者和重复访问者的人数对比、访问者的访问频率等数据",
      "网站可以利用 Cookie 限制某些特定用户的访问。",
      "网站可以存储用户访问过程中的操作习惯和偏好。",
      "记录用户登录网站使用的用户名、密码等信息。",
      "电子商务网站利用 Cookie 可以实现“购物车”功能。",
    ],
    start: 1,
  },
  {
    title: "简述典型的 HTTP 请求方法及其作用。 / 第二章",
    simple: "",
    normal: [
      "GET：请求读取由 URL 所标识的信息，是最常见的方法。",
      "HEAD：请求读取由 URL 所标识的信息的首部，即无须在响应报文中包含对象。",
      "POST：给服务器添加信息。",
      "OPTION：请求一些选项的信息。",
      "PUT：在指明的 URL 下存储一个文档。",
    ],
    start: 1,
  },
  {
    title: "简述 SMTP 的特点。 / 第二章",
    simple: "",
    normal: [
      "SMTP 只能传送 7 位 ASCII 码文本内容。",
      "SMTP 传送的邮件内容中不能包含“CRLF.CRLF”。",
      "SMTP 是“推动”协议。",
      "SMTP 使用 TCP 连接是持久的",
    ],
    start: 1,
  },
  {
    title: "简述 HTTP 报文的首部行类型。 / 第二章",
    simple: "",
    normal: [
      "有些首部行只能用于请求报文，称为请求首部；",
      "有些首部行只能用于响应报文，称为响应首部；",
      "有些首部行既可用于请求报文又可用于响应报文，称为通用首部；",
      "有些首部专门用于描述实体相关属性信息，称为实体首部；",
      "还有一些由应用程序开发人员创建，尚未添加到 HTTP 规范中的非标准专用首部，称为扩展首部。",
    ],
    start: 1,
  },
  {
    title:
      "实现可靠传输的主要措施有那些？这些措施主要用于解决那些问题？ / 第三章",
    simple: "",
    normal: [
      "差错检测：利用差错编码实现数据包传输过程中的比特差错检测。",
      "确认：接收方向发送方反馈接收状态。",
      "重传：发送方重新发送接收方没有正确接收的数据。",
      "序号：确保数据按序提交。",
      "计时器：解决数据丢失问题。",
    ],
    start: 1,
  },
  {
    title: "UDP 与 TCP 分别如何实现复用分解？ / 第三章",
    simple: "",
    normal: [
      "UDP 套接字：<目的 IP 地址，目的端口号>",
      "TCP 套接字：<源 IP 地址，源端口号，目的 IP 地址，目的端口号>",
    ],
    start: 1,
  },
  {
    title:
      "TCP 为何采用三次握手来建立连接，若采用二次握手可以吗？为什么？ / 第三章",
    simple: "",
    normal: [
      "TCP 之所以采用三次握手建立连接，是为了确保连接双方彼此完全清楚对方状态，从而保证可靠、稳定地建立连接；",
      "同时，通过三次握手建立连接还可以有效预防过期、失效的连接请求到达后，导致无效连接的建立。三次握手缺一不可。",
      "若采用二次握手: 因为网络存在数据丢失，第二次握手控制段可能丢失，这样主动发起连接的一方由于没有收到第二次握手控制段，则无法建立连接",
    ],
    start: 1,
  },
  {
    title: "请说明 TCP 建立连接与断开连接的过程，并给出主要状态转移。 / 第三章",
    simple: "",
    normal: [
      "TCP 建立连接：",
      "第一次握手：客户向服务器发送连接请求段：（SYN=1,seq=x）客户端进入 SYN_SEND（同步发送）",
      "第二次握手：服务器发回确认报文段：（SYN=1,ACK=1,seq=y, ack_seq=x+1）服务器由 LISTEN 进入 SYN_RCVD（同步收到）",
      "第三次握手：客户对服务器的 同意连接报文段 进行确认：（ACK=1,seq=x+1,ack_seq=y+1）当客户发送 ACK 时，客户端进入 ESTABLISHED 状态",
      "当服务器收到 ACK 后，也进入 ESTABLISHED 状态；",

      "TCP 断开连接：",
      "第一次挥手：客户向服务器发送释放连接报文段：（FIN=1,seq=u），客户端状态由 ESTABLISHED 进入 FIN_WAIT_1（终止等待 1 状态）",
      "第二次挥手:服务器向客户发送确认段：（ACK=1,seq=v,ack_seq=u+1）服务器状态由 ESTABLISHED 进入 CLOSE_WAIT（关闭等待）",
      "客户端收到 ACK 段后，由 FIN_WAIT_1 进入 FIN_WAIT_2",
      "第三次挥手：服务器向客户发送释放连接报文段：（FIN=1,ACK=1,seq=v+1,ack_seq=u+1）",

      "服务器状态由 CLOSE_WAIT 进入 LAST_ACK（最后确认状态）",
      "第四次挥手:",
      "客户向服务器发送确认段：（ACK=1,seq=u+1,ack_seq= v+1+1 ）",
      "客户端状态由FIN_WAIT_2进入TIME_WAIT，等待2MSL时间，进入CLOSED状态。",
      "服务器在收到最后一次 ACK 后，由 LAST_ACK 进入 CLOSED。",
    ],
    start: 1,
  },
  {
    title: "请分别简述 GBN 协议和 SR 协议的工作过程。 / 第三章",
    simple: "",
    normal: [
      "GBN 协议：回退 N 步（Go-Back-N）",
      "发送方收到一个 ACK，窗口滑动后仍有已发送但未被确认的分组，则定时器重新启动；如果没有已发送但未被确认的分组，该定时器终止。",
      "因为接收窗口=1，所以 GBN 接收方只能接收当前接收窗口中序号所指向的分组，未按序到达的分组或者某个分组差错，接收方丢弃该分组，并为最近按序接收的分组重新发送 ACK。",
      "SR 协议：选择重传（Selective Repeat）",
      "增加接收方缓存能力（接收窗口 > 1），缓存正确到达但失序的分组，仅要求发送方重传未被接收方确认的分组，等缺失分组到达后一并向上层按序提交。",
    ],
    start: 1,
  },
  {
    title: "简述 GBN，SR 发送方必须响应的事件。 / 第三章",
    simple: "",
    normal: [
      "GBN 发送方必须响应 3 种类型的事件：",
      "上层调用,计时器超时，收到一个 ACKn。,",
      "SR 发送方主要响应 3 个事件：",
      "上层调用。,定时器超时。收到 ACKn。",
    ],
    start: 1,
  },
  {
    title:
      "请说明 TCP 滑动窗口机制，对比 TCP 滑动窗口与 GBN 协议的异同。 / 第三章",
    simple: "",
    normal: [
      "TCP 滑动窗口机制：",
      "实质上就是将可靠数据传输的工作过程，抽象到分组序号空间，即发送方确保分组按序发送，接收方确保分组按序提交。",
      "发送方和接收方各维护一个窗口，分别称为发送窗口 Ws 和接收窗口 Wr。",

      "异同：",
      "TCP 滑动窗口的实际应用首先就是停等协议，这时接收方的窗口和发送方的窗口大小都是1。",
      "发送方这时每次只能发送一个数据包，并且必须等待这个数据包的 ACK，才能发送下一个。在效率上比较低，带宽利用率明显较低。",

      "TCP 发送方仅需要维持已发送过但未被确认的最小序号和下一个要发送的字节的序号就可以了，这一点和 GBN 一致。",
      "GBN 定时器过期之后发送方会重传未被确认的最小序号之后的数据段，这样很可能会造成重发大量分组。",
    ],
    start: 1,
  },
  {
    title: "TCP 与 UDP 的主要区别是什么？ / 第三章",
    simple: "连接、效率、拥塞、对对、首部、资源、信道",
    normal: [
      "1.TCP 提供面向连接、可靠、有序、字节流传输服务；UDP 提供无连接、不可靠的数据报尽力传输服务。",
      "2.UDP 具有较好的实时性，工作效率比 TCP 高，适用于对高速传输和实时性有较高的 通信或广播通信。",
      "3.UDP 没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低。",
      "4.每一条 TCP 连接只能是点到点的；UDP 支持一对一、一对多、多对一和多对多的交互通信。",
      "5.TCP 首部开销 20 字节；UDP 的首部开销小，只有 8 个字节。",
      "6.TCP 对系统资源要求较多，UDP 对系统资源要求较少。",
      "7.TCP 的逻辑通信信道是全双工的可靠信道，UDP 则是不可靠信道。",
    ],
    start: 1,
  },
  {
    title: "传输层功能 / 第三章",
    simple: "分复流拥寻差错-可靠，吩咐刘墉寻差错-可靠",
    normal: [
      "1.对应用层报文进行分段和重组",
      "2.面向应用层实现复用与分解 ",
      "3.实现端到端的流量控制 ",
      "4.拥塞控制",
      "5.传输层寻址",
      "6.对报文进行差错检测 ",
      "7.实现进程间的端到端可靠数据传输控制 ",
    ],
    start: 1,
  },
  {
    title: "网络层提供的主要功能是什么 / 第四章",
    simple: "",
    normal: ["转发；路由选择"],
    start: 1,
  },
  {
    title: "说明转发和路由的含义，有什么区别和联系？ / 第四章",
    simple: "",
    normal: [
      "转发：当通过一条输入链路接收到一个分组后，路由器需要决策通过哪条输出链路将分组发送出去，并将分组从输入接口转移到输出接口。",
      "路由：分组经过的路径选择。",
      "区别和联系",
      "1.转发是在一个路由中；路由选择则是在一条路径中。",
      "2.路由选择好之后，会存在转发表中，路由选择相当于预先设置，转发是执行者。",
      "3.路由选择是转发的基础，数据转发是路由的结果。",
    ],
    start: 1,
  },
  {
    title: "虚电路网络如何建立虚电路？虚电路网络分组转发的依据是什么？ / 第四章",
    simple: "",
    normal: [
      "建立虚电路：",
      "虚电路是在源主机到目的主机的一条路径上建立的一条网络层逻辑连接，为区别于电路交换中的电路，称之为虚电路。",

      "一条虚电路由 3 个要素构成：",
      "1.从源主机到目的主机之间的一条路径（一系列的链路和分组交换机）。",
      "2.该路径上的每条链路的虚电路标识（VCID）",
      "3.分组交换机的转发表中记录虚电路标识的接续关系。",

      "依据:",
      "每条虚电路都有虚电路号，称为虚电路标识（VCID）,沿某条虚电路传输的分组中包含所属虚电路的 VCID。",
      "虚电路网络设备根据分组所携带的 VCID 判断其所属的虚电路，从而决策如何转发分组，并确保分组沿对应虚电路送达目的。",
    ],
    start: 1,
  },
  {
    title:
      "实现异构网络互联的主要方法有哪些？典型实现异构网络互联的网络设备是什么？ / 第四章",
    simple: "",
    normal: [
      "方法：协议转换 和 构建虚拟互联网络。",
      "设备：路由器 是最典型的网络层设备。",
    ],
    start: 1,
  },
  {
    title: "路由器有哪些部分组成？各部分主要功能是什么？ / 第四章",
    simple: "",
    normal: [
      "输入端口：查找，转发，到达分组 缓存排队功能",
      "交换结构：完成具体的转发工作，将输入端口的 IP 数据报交换到指定的输出端口。",
      "输出端口：缓存排队，从队列中取出分组进行数据链路层数据帧的封装，发送。",
      "路由器处理器：执行命令；路由协议运行；路由计算以及路由表的更新和维护。",
    ],
    start: 1,
  },
  {
    title: "网络层出现拥塞的原因是什么？有哪些网络层拥塞控制策略？ / 第四章",
    simple: "",
    normal: [

      "原因：",
      "缓冲区容量有限；传输线路的带宽有限；网络结点的处理能力有限；网络中某些部分发生了故障。",

      "策略：",
      "拥塞预防：流量感知路由；准入控制。",
      "拥塞消除：流量调节；负载脱落。",
    ],
    start: 1,
  },
  {
    title:
      "为什么 DHCP 请求要以广播的形式发送出去？ 为什么 DHCP 响应也要以广播的形式发送出去？/ 第四章",
    simple: "动态主机配置协议",
    normal: [
      "因为此时主机并不知道 DHCP 服务器的 IP 地址，自己也没有分配到 IP 地址，",
      "所以主机会在 IP 数据报的目的 IP 地址字段中填入 255.255.255.255，表明这是一次广播，在源 IP 地址字段中填入 0.0.0.0。",
      "由于新接入到网络中的主机此时仍不具有可用 IP 地址，因此 DHCP 提供报文仍是通过广播方式发送出去。",
    ],
    start: 1,
  },
  {
    title: "简述 ICMP 的主要功能。/ 第四章",
    simple: "",
    normal: [
      "互联网控制报文协议",
      "在主机或路由器间，实现差错信息报告。",
      "实现网络可达性或特定信息的探询。",
    ],
    start: 1,
  },
  {
    title: "解释网络地址转换（NAT）的工作原理，如何实现 NAT 穿透？/ 第四章",
    simple: "",
    normal: [
      "原理：",
      "对于从内网出去，进入公共互联网的 IP 数据报，将其源 IP 地址替换为 NAT服务器拥有的合法的公共 IP 地址，同时替换源端口号，并将替换关系记录到 NAT 转换表中；",
      "对于从公共互联网返回的 IP 数据报，依据其目的 IP 地址与目的端口号检索 NAT 转换表，并利用检索到的内部私有 IP 地址与对应的端口号替换目的 IP 地址和目的端口号，然后将 IP数据报转发到内部网络。",

      "穿透：",
      "所谓 NAT 穿透技术就是在外网主机主动与内网主机发起通信之前，先在 NAT转换表中建立好内网到外网的映射，使内网运行的服务以 NAT 公网地址的“合法”身份“暴露”出去。",
      "这样，在外网主机看来，它们是在与 NAT 公网地址上运行的服务器进行通信。可通过静态配置和动态配置的方式事先建立 NAT 映射。",
    ],
    start: 1,
  },
  {
    title:
      "IPv6 提出的动机是什么？IPv6 相比于 IPv4 其数据报格式有什么特点？ / 第四章",
    simple: "",
    normal: [
      "动机：IPv４地址耗尽",
      "特点：IPv6 删除了这些字段：分片相关字段；首部校验和；选项字段不是 IPv6 的基本首部的字段。",
    ],
    start: 1,
  },
  {
    title: "链路层协议能够向网络层提供哪些可能的服务？ / 第五章",
    simple: "",
    normal: ["组帧、链路接入、可靠交付、差错控制"],
    start: 1,
  },
  {
    title: "为什么有些网络用纠错码而不用检错和重传机制 / 第五章",
    simple: "",
    normal: [
      "1.服务的实时性要求，即使发现错误，也没有时间重发一次。但是数据必须连续发送，这里可使用前置纠错。",
      "2.如果传输质量比较差，会导致错误率太高而不得不重发所有帧，而重发的帧也可能损坏。为了避免上述情况发生，前置纠错被用于提高到达帧的成功率。",
    ],
    start: 1,
  },
  {
    title: "差错编码的检错或纠错能力与什么有关 / 第五章",
    simple: "",
    normal: [
      "差错编码的检错或纠错能力跟该差错编码的编码集的汉明距离有关。",
      "对于检错编码，如果编码集的汉明距离 ds=r+1,则该差错编码可以检测 r 位的差错。",
      "对于纠错编码，如果编码集的汉明距离 ds=2r+1，则该差错编码可以纠正 r 位的差错。",
    ],
    start: 1,
  },
  {
    title:
      "ARP 查询为什么要在广播帧中发送呢？ARP 响应为什么要在一个特定目的 MAC 地址的帧中发送呢？ / 第五章",
    simple: "",
    normal: [
      "地址解析协议",
      "ARP 查询是向子网中的全部节点发起询问，ARP 查询分组的目的是询问子网上所有其他的主机和路由器，以确定对应与要解析的 IP 地址的 MAC 地址。",
      "而 ARP 响应则是发给询问的人，每个主机的 ARP 模块，都检查自己的 IP 地址是否与ARP 查询分组中目的 IP 地址相匹配，与之匹配的主机则给查询主机发送一个带有所希望映射的 ARP 响应分组。",
    ],
    start: 1,
  },
  {
    title: "什么是 VLAN？划分 VLAN 主要有几种方法？ / 第五章",
    simple: "",
    normal: [
      "定义：虚拟局域网是一种基于交换机的逻辑分割广播域的局域网应用形式",
      "划分方法：基于交换机端口划分；基于 MAC 地址划分；基于上层协议类型或地址划分",
    ],
    start: 1,
  },
  {
    title: "数字通信和数据通信有何不同？ / 第六章",
    simple: "",
    normal: [
      "数字通信系统是指信道中传输的信号是离散的数字信号，",
      "而数据通信系统是指在信源和信宿端处理的是二进制数据，在信道中传输的信号可以是模拟信号，也可以是数字信号。",
    ],
    start: 1,
  },
  {
    title: "简述单向通信、双向交替通信和双向同时通信的特点。  / 第六章",
    simple: "",
    normal: [
      "单向通信：又称单工通信，即任何时间都只能有一个方向的通信，而没有反方向的交互。无线电广播就属于这种类型。",
      "双向交替通信又称半双工通信，即通信双方都可以发送信息，但不能双方同时发送或同时接收，这种通信方式往往是一方发送另一方接收，如无线对讲机系统。",
      "双向同时通信又称全双工通信，即通信双方可以同时发送和接收信息，电话网、计算机网络均属于全双工通信系统。",
    ],
    start: 1,
  },
  {
    title:
      "常见的物理介质有哪些？列举不同的物理介质并说明其主要特性。  / 第六章",
    simple: "",
    normal: [
      "引导型传输介质",
      "架空明线：传输损耗降低；但易受天气和外界电磁干扰，对外界噪声敏感，带宽有限。",
      "双绞线：可减少相邻导线的电磁干扰。主要用于基带传输，",
      "屏蔽双绞线：提高双绞线的抗电磁干扰能力，但成本高 ,非屏蔽双绞线：常用于以太网、局域网",
      "同轴电缆：可有效抵抗电磁干扰。主要用于频带传输，如有线电视网络。",

      "光纤",
      "1.光纤通信容量非常大，最高可达 100 兆比特/每秒",
      "2.传输损耗小，中继距离长，对最远距离传输特别经济",
      "3.抗雷电和电磁干扰性能好",
      "4.无串音干扰，保密性好，也不易被窃听或截取数据",
      "5.体积小，重量轻",


      "非引导型传输介质",
      "地波传播：低频信号，2MHz 以下，沿地球表面传播",
      "天波传播：较高频信号，2~30MHz，利用电离层的传播反射",
      "视线传播：高频信号，高于 30MHz，采用视线无障碍的点对点直线传播，中继传输。",
    ],
    start: 1,
  },
  {
    title:
      "数字基带传输系统主要有哪些部分组成？各部分的主要功能是什么？  / 第六章",
    simple: "",
    normal: [
      "组成：信号形成器、信道、接收滤波器、抽样判决器、同步提取等部分。",
      "功能：",
      "信号形成器：把原始的数字基带信号变换为适合信道传输特性的数字基带信号。",
      "信道：实现从发送端到接收端的信号传送。",
      "接收滤波器：滤除噪声，得到有利于抽样判决的基带波形。",
      "抽样判决器：基于同步提取从信号中提取的定时脉冲，对接收滤波器输出的基带波形进行样判决，再生数字基带信号。",
      "同步提取：使抽样判决器从信号中提取定时脉冲。",
    ],
    start: 1,
  },
  {
    title: "什么是 QAM 调制？QAM 调制的主要特点是什么？  / 第六章",
    simple: "",
    normal: [
      "QAM 调制：正交幅值调制（QAM）也称为幅值相位联合键控（APK），是一种具有高频带利用率，且可以自适应调整 调制速率的调制技术。",
      "特点：频带利用率高、抗噪声能力强、调制解调系统简单等。",
    ],
    start: 1,
  },
  {
    title: "物理层接口特性有哪些？  / 第六章",
    simple: "",
    normal: [
      "机械特性：也叫物理特性，指明通信实体间硬件接口的机械特点，如接口的形状和尺寸。",
      "电气特性：规定了在物理连接上，导线的电气连接及有关电路的特性。",
      "功能特性：指明物理接口各条信号的用途，",
      "规程特性：指明利用接口传输比特流的全过程。",
    ],
    start: 1,
  },

  {
    title:
      "为什么在无限局域网中不使用 CSMA/CD 协议而使用 CSMA/CA 协议？ / 第七章",
    simple: "",
    normal: [
      "CSMA/CD：碰撞检测。CSMA/CA：碰撞避免",
      "CSMA/CD 协议的特点是：先听再发，边听边发，冲突停发，随机重发；",
      "CSMA/CA 协议的特点是：发送数据时先广播告知其他结点，让其他结点在某段时间内不要发送数据，以免发生碰撞；",
      "CSMA/CA 通过 RTS 和 CTS 帧的交换，可以有效避免隐藏站问题，实现信道的预约占用，从而可以有效避免数据帧传输过程中的冲突。",
    ],
    start: 1,
  },
  {
    title:
      "随着移动节点离开基站越来越远，为了保证传送的帧的丢失概率不增加，基站可以采取的两种策略是什么？ / 第七章",
    simple: "",
    normal: ["增加传输功率、降低传输速率"],
    start: 1,
  },
  {
    title:
      "如果某主机通过无线网络连接因特网，那么该主机必须是移动的吗？假设一个使用便携计算机的用户带着计算机在室内散步，并且总是通过相同的接入点接入因特网，那么，从网络的角度看，该用户是移动的吗？为什么？  / 第七章",
    simple: "",
    normal: [
      "1.不必须是移动的。因为无线网络不一定是移动网络，但移动网络一定是无线网络。移动网络中的移动结点是随时间改变 其与网络连接位置的结点，并且一定采用无线通信技术。",
      "2.不是移动的。从网络层的角度看，该用户并没有移动。因为移动结点随时间改变，其与网络连接位置的结点并没有发生变化，都是通过相同的接入点接入因特网。从链路层角度来看该用户也没有移动，因为该用户不论在何处都与同一个接入点相关联。",
    ],
    start: 1,
  },
  {
    title: "移动网络的间接路由选择的基本工作原理是什么？   / 第七章",
    simple: "",
    normal: [
      "间接路由选择：由归属代理转发数据给外部代理。使用隧道技术。",
      "直接路由选择：由通信代理通过归属代理获得转交地址，直接发送到外部代理。",
    ],
    start: 1,
  },
  {
    title:
      "永久地址与转交地址之间有什么区别？谁为移动主机指派转交地址？  / 第七章",
    simple: "",
    normal: [
      "永久地址：移动结点在从一个网络移动到另一个网络时保持其地址不变。",
      "转交地址：移动结点在所访问网络中的地址。",

      "回答第二问",
      "外部代理。外部代理的作用之一就是为移动结点创建一个所谓的转交地址（COA），该COA 的网络部分与外部网络的网络部分相同，因此一个移动接点可与两个地址相关联，即永久地址和 COA，COA 有时又称为外部地址。",
    ],
    start: 1,
  },
  {
    title: "简述移动 IP 的代理发现与注册过程 / 第七章",
    simple: "",
    normal: [
      "代理发现：指的是当某个移动 IP 站点到达一个新网络时，不管是连接到一个外部网络还是返回其归属网络，它都必须知道相应的外部代理或归属代理的身份.",
      "注册过程：当收到一个外部代理的通告后，移动节点立即向外部代理发送一个移动 IP注册报文，外部代理收到注册报文并记录移动节点的永久 IP 地址，",
      "归属代理接受注册请求并检查其真实性和正确性，把移动节点的永久 IP 地址和 COA 绑定, 外部代理接收注册应答，然后将其转发给移动节点，到此注册就完成了。",
    ],
    start: 1,
  },

  {
    title:
      "蓝牙中的主设备和 IEEE 802.11 网络中的基站之间有什么区别？  / 第七章",
    simple: "",
    normal: [
      "蓝牙网络以小范围，低功率、低速率和低成本运行。",
      "IEEE802.11 是一个中等范围、大功率、高速率的“接入”技术。",
    ],
    start: 1,
  },
  {
    title: " 简述 IEEE 802.11中四个主要协议的共同特征。 / 第七章",
    simple: "",
    normal: [
      "都使用相同的介质访问控制协议CSMA/CA",
      "链路层帧使用相同的帧格式.",
      "都具有降低传输速率以传输更远距离的能力。",
      "都支持“基础设施模式”和“自组织模式”两种模式。 ",
    ],
    start: 1,
  },

  {
    title: "目前国际上确定的 3G 标准有哪 4 种  / 第七章",
    simple: "",
    normal: [
      "WCDMA：欧洲和日本的宽带码分多分址",
      "CDMA：美国",
      "TD-SCDMA：中国",
      "WiMax：全球微波互联接入，又称为 IEEE.802.16 标准",
    ],
    start: 1,
  },

  {
    title: "网络安全的基本属性都有哪些？ / 第八章",
    simple: "",
    normal: [
      "1.机密性：只有发送方与预订接收方能理解报文内容。",
      "2.消息完整性：消息未被篡改，发生篡改一定会被检测到。 ",
      "3.可访问与可用性： 网络信息可被授权实体访问并按需求使用的特性。 ",
      "4.身份认证：发送方与接收方希望确认彼此的真实身份",
    ],
    start: 1,
  },
  {
    title: "网络安全典型威胁有哪些？ / 第八章",
    simple: "",
    normal: [
      "报文传输方面：窃听、插入、假冒、劫持。",
      "拒绝服务 DoS 以及分布式拒绝服务 DDoS",
      "映射：探路，端口扫描",
      "嗅探：混杂模式网络接口",
      "IP 欺骗",
    ],
    start: 1,
  },
  {
    title: "典型的对称密钥密码有哪些？安全如何？/ 第八章",
    simple: "",
    normal: [
      "DES 加密算法：目前 DES 已被证实不是很安全了。,三重 DES：具有足够的安全性。",
      "AES 加密算法：安全、高效、快速。",
      "IDEA 加密算法：安全性高，对密码分析具有很强的抵抗能力",
    ],
    start: 1,
  },
  {
    title:
      "什么是消息完整性？如何检验消息的完整性？校验消息完整性的意义是什么？/ 第八章",
    simple: "",
    normal: [
      "定义：报文/消息完整性，也成为报文/消息认证（或报文鉴别）。",
      "方法：利用密码散列函数检验（MD5、SHA-1）",
      "意义：证明报文确实来自声称的发送方；验证报文在传输过程中没有被篡改；预防报文的时间、顺序被篡改；预防报文持有期被篡改；预防抵赖",
    ],
    start: 1,
  },
  {
    title: "分析密码散列函数的功能，比较不同类型密码散列函数的输入、输出特性。/ 第八章",
    simple: "",
    normal: [
      "功能：实现消息完整性检测",
      "方法：利用密码散列函数检验（MD5、SHA-1）",

      "MD5：",
      "1.压缩性：任意长度的数据，算出的 MD5 值的长度都是固定的",
      "2.容易计算：从原数据计算出 MD5 值很容易",
      "3.抗修改性：对原数据进行任何改动，修改一个字节生成的 MD5 值区别也会很大",
      "4.强抗碰撞：已知原数据和 MD5，想找到一个具有相同 MD5 值的数据（即伪造数据）是非常困难的。",

      "SHA-1：不可以从消息摘要中复原信息；两个不同的消息不会产生同样的消息摘要。",
    ],
    start: 1,
  },
  {
    title: "KDC 和 CA 的作用是什么？ / 第八章",
    simple: "",
    normal: [
      "KDC：解决对称密钥的安全可靠分发问题。",
      "CA：证实一个实体的真实身份；生成一个把其身份和实体的公钥绑定起来的证书，并由 CA 对证书进行数字签名。",
    ],
    start: 1,
  },
  {
    title: "防火墙有哪几种分类/ 第八章",
    simple: "",
    normal: ["1.无状态分组过滤器", "2.有状态分组过滤器", "3.应用网关"],
    start: 1,
  },

  {
    title: "SSL 握手协议、更改密码协议、警告协议各自完成什么功能？ / 第八章",
    simple: "",
    normal: [
      "1.SSL 握手协议：协商密码组和建立密钥，协商确认后，才能进行密钥的导出等操作。握手协议也会进行服务器认证与鉴别和客户认证与鉴别。",
      "SSL 更改密码规格协议：用于通信过程，通信双方修改密码组，标志着加密策略的改变。",
      "SSL 警告协议：用于在握手过程或者加密等出错或异常时，为对等实体传递 SSL 警告或者终止当前连接",
    ],
    start: 1,
  },
];

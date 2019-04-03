// 题库
// data.czxt = [
//     {
//         title: "简述操作系统必须完成的两个目标",
//         simple: "无",
//         normal: [
//             '1、与硬件部分相互作用，为包含在硬件平台上的所有底层可编程部件提供服务',
//             '2、为包含在计算机上的应用程序提供可执行环境'
//         ],
//         start: 2,
//     },
//     {
//         title: "简述操作系统在资源管理方面的功能",
//         simple: "无",
//         normal: [
//             '处理机管理、内存管理、设备管理、文件管理'
//         ],
//         start: 1,
//     },
//     {
//         title: "简述操作系统资源管理的作用",
//         simple: "无",
//         normal: [
//             '一方面保证用户程序的顺利执行，另一方面使计算机系统资源得到尽可能高效的利用，保证计算机系统的高性能。'
//         ],
//         start: 1,
//     },
//     {
//         title: "简述分时系统的优点",
//         simple: "无",
//         normal: [
//             '分时系统的优点是向用户提供了人机交互的方便性，使多个用户可以通过不同的终端共享主机'
//         ],
//         start: 1,
//     },
//     {
//         title: "说明单道批处理系统，多道批处理系统的特点及优缺点。",
//         simple: "无",
//         normal: [
//             '单道批处理理系统：',
//             '特点：自动性、顺序性、单道性(内存任意时刻只有一个作业)',
//             '优点：减少了等待人工操作的时间',
//             '缺点：CPU资源不能充分利用',
//             '特点：多道性（内存中可以驻留多道程序）、无序性、调度性、复杂性',
//             '优点：能够提高CPU，内存和IO设备的利用率和系统的吞吐量',
//             '缺点：系统平均周转时间长'
//         ],
//         start: 1,
//     },
//     {
//         title: "简述现在操作系统的特性",
//         simple: "无",
//         normal: [
//             ' 现代操作系统都支持多任务，',
//             '具有并发、共享、虚拟和异步性特征。',
//             '并发：两个或多个事件在同一时间间隔内发生。',
//             '共享：系统中资源可供内存中多个并发执行的进程共同使用',
//             '虚拟：最常用内存虚拟化，用户感觉到的内存大于实际内存。',
//             '异步性：进程以不可预知的速度向前推进。'
//
//         ],
//         start: 1,
//     },
//     {
//         title: "请说明操作系统的功能",
//         simple: "无",
//         normal: [
//             '操作系统的功能有内存管理、进程管理、设备管理、文件管理、提供用户接口等功能。'
//         ],
//         start: 1,
//     },
//     {
//         title: "请说明操作系统的功能",
//         simple: "无",
//         normal: [
//             '内存管理的主要任务是为多道程序的运行提供良好的环境，方便用户使用内存，提高内存的利用率，以及从逻辑上扩充内存以实现虚拟存储。'
//         ],
//         start: 1,
//     },
//     {
//         title: "请说明内存保护的任务",
//         simple: "无",
//         normal: [
//             '一是使操作系统内核的空间不会被用户随意访问，以保证系统的安全和稳定；二是确保每道用户程序都在自己的内存空间中运行，互不干扰。'
//         ],
//         start: 1,
//     },
//     {
//         title: "什么叫地址映射",
//         simple: "无",
//         normal: [
//             'CPU执行程序过程中访问内存时，需要把程序的逻辑地址转变为物理地址，这个转换过程称为地址映射。'
//         ],
//         start: 1,
//     },
//     {
//         title: "内存管理有哪些主要功能",
//         simple: "无",
//         normal: [
//             '内存管理应具有内存分配，内存保护，地址映射和内存扩充功能。'
//         ],
//         start: 1,
//     },
//     {
//         title: "简述设备管理应该具有哪些功能",
//         simple: "无",
//         normal: [
//             '1.缓冲管理，管理各种缓冲区。',
//             '2.设备分配，分配用户I/O所需要的设备。',
//             '3.设备处理，由设备驱动程序来实现CPU与设备控制器之间的通信。',
//             '4.设备独立性和虚拟设备，设备独立性功能使用应用程序独立于物理设备，使一个物理设备能供多个用户共享。'
//         ],
//         start: 1,
//     },
//     {
//         title: "文件的读、写管理和存取控制",
//         simple: "无",
//         normal: [
//             '根据用户的请求，从外存中读取数据或将数据写入外存。防止未经审核的用户存取文件，防止冒名顶替存取文件，防止以不正确的方式使用文件。'
//         ],
//         start: 1,
//     },
//     {
//         title: "进程有哪些特征 简答模拟1",
//         simple: "无",
//         normal: [
//             '并发性、动态性、独立性、异步性、结构特征'
//         ],
//         start: 1,
//     },
//     {
//         title: "什么是进程控制块",
//         simple: "无",
//         normal: [
//             '进程控制块是进程实体的一部分，是操作系统中最重要的数据结构'
//         ],
//         start: 1,
//     },
//     {
//         title: "进程控制块所包含的信息 ",
//         simple: "无",
//         normal: [
//             '进程标识符信息',
//             '处理机状态信息',
//             '进程调度信息',
//             '进程控制信息',
//         ],
//         start: 1,
//     },
//     {
//         title: "系统操作在什么情况下需要创建进程？ ",
//         simple: "无",
//         normal: [
//             '用户登录、作业调度、提供服务、应用请求。',
//         ],
//         start: 1,
//     },
//     {
//         title: "创建新进程的系统调用来创建进程的一般步骤有哪些？ 简答模拟2",
//         simple: "无",
//         normal: [
//             '1.申请空白PCB',
//             '2.为新进程分配资源',
//             '3.初始化进程控制块',
//             '4.将新进程插入到就绪队列'
//         ],
//         start: 1,
//     },
//     {
//         title: "请简化描述完成进程阻塞的过程",
//         simple: "无",
//         normal: [
//             '1.将进程的状态改为阻塞态',
//             '2.将进程插入相应的阻塞队列',
//             '3.转到进程调度程序，从就绪队列中选择进程为其分配CPU',
//         ],
//         start: 1,
//     },
//     {
//         title: "简述进程唤醒的过程",
//         simple: "无",
//         normal: [
//             '1.将进程从阻塞队列中移出',
//             '2.将进程状态由阻塞态改为就绪态',
//             '3.将进程插入就绪队列'
//         ],
//         start: 1,
//     },
//     {
//         title: "操作系统在什么情况下可能进行进程的阻塞和唤醒操作",
//         simple: "无",
//         normal: [
//             '1.请求系统服务',
//             '2.启动某种操作',
//             '3.新数据尚未达到',
//             '4.无新工作可做',
//         ],
//         start: 1,
//     },
//     {
//         title: "请根据系统调用功能，说明调用系统的类型 ",
//         simple: "无",
//         normal: [
//             '1.进程控制类系统调用。',
//             '2.文件操作类系统调用。',
//             '3.设备管理类系统调用。',
//             '4.通信类系统调用。',
//             '5.信息维护类系统调用。'
//         ],
//         start: 1,
//     },
//     {
//         title: "操作系统内核的功能是",
//         simple: "无",
//         normal: [
//             '支撑功能，资源管理功能。'
//         ],
//         start: 1,
//     },
//     {
//         title: "什么是中断",
//         simple: "无",
//         normal: [
//             '中断是改变处理器执行指令顺序的一种事件，这样的事件与CPU芯片内外部硬件电路产生的电信号相对应。'
//         ],
//         start: 1,
//     },
//     {
//         title: "时钟驱动程序的完成什么功能？",
//         simple: "无",
//         normal: [
//             '1、维护日期和时间',
//             '2、递减当前进程在一个时间片内的剩余执行时间，防止运行超时',
//             '3、对CPU的使用情况记账',
//             '4、递减报警计数器'
//         ],
//         start: 1,
//     },
//     {
//         title: "系统调用和一般函数调用的区别？",
//         simple: "无",
//         normal: [
//             '区别1:系统调⽤用运行在系统态，一般函数运行在用户态',
//             '区别2:执行过程不同（系统调用执行时，当前进程被中断）',
//             '区别3:系统调用进行中断处理，多了系统开销'
//         ],
//         start: 1,
//     },
//     {
//         title: " 请说明进程同步的任务？",
//         simple: "无",
//         normal: [
//             '多道程序环境下进程之间的关系',
//             '资源共享关系：保证各进程以互斥的方式访问临界资源。',
//             '相互合作关系：保证相互合作的各进程协调执行。'
//         ],
//         start: 1,
//     },
//     {
//         title: "强说明同步机制应遵循的准则？",
//         simple: "无",
//         normal: [
//             '空闲让进',
//             '忙则等待',
//             '有限等待',
//             '让权等待'
//         ],
//         start: 1,
//     },
//     {
//         title: "什么是空闲让进",
//         simple: "无",
//         normal: [
//             '当没有进程处于临界区，表明临界区资源处于空闲状态，应允许一个请求进入临界区的进程立即进入自己的临界区，以有效地利用临街资源',
//         ],
//         start: 1,
//     },
//     {
//         title: "什么是忙则等待",
//         simple: "无",
//         normal: [
//             '当已有进程进入临界区时，表明临界区资源正在被访问，因而其他试图进入临界区的进程必须等待，以保证对临界区资源的互斥。'
//         ],
//         start: 1,
//     },
//     {
//         title: "进程之间的高级通信机制分为哪几类？",
//         simple: "无",
//         normal: [
//             '共享存储器系统、消息传递系统、管道通信、是高级通信机制（前三个是高级通信机制）'
//         ],
//         start: 1,
//     },
//     {
//         title: "线程与进程的关系  ",
//         simple: "无",
//         normal: [
//             '1.资源和调度。线程是程序执行的基本单位，进程是拥有资源的基本单位。',
//             '2.通信关系。不同进程的地址空间是相互独立的，而同一进程中的各线程共享同一地址空间。',
//             '3.通信关系。进程之间的通信必须使用操作系统提供的进程间通信机制，而同一进程中的各线程间可以通过直接通信。',
//             '4. 并发性。多进程之间可以并发执行，多线程之间也可以并发执行。',
//             '5. 系统开销。线程切换的开销比进程切换的开销小。'
//         ],
//         start: 1,
//     },
//     {
//         title: "简述 对各种线程的活动进行同步的原因",
//         simple: "无",
//         normal: [
//            ' 一个线程对资源的任何修改都会影响同一个进程中其他线程的环境，因此需要对各种线程的活动进行同步，保证诸线程以互斥的方式访问临界资源，以使他们不互相干扰且不破坏数据结构。'
//         ],
//         start: 1,
//     },
// ];
data.czxt = [
    {
        title: "1.何为系统调用？请简述系统调用与一般函数调用的区别",
        simple: "无",
        normal: [
            '系统调用是一群预先定义好的模块，它们提供一条管道让应用程序或一般用户能由此得到核心程序的服务。',
            '系统调用与一般函数调用的区别如下',
            '1) 系统调用运行在系统态(核心态)，而一般函数运行在用户态。',
            '2) 系统调用与一般函数调用的执行过程不同。系统调用执行时，当前进程被中断，由系统找相应的系统调用子程序，并在系统态下执行，执行结果返回进程。',
            '3) 系统调用要进行“中断处理”，比一般函数调用多了一些系统开销。',
        ],
        start: 1,
    },
    {
        title: "1.何为系统调用？请简述系统调用与一般函数调用的区别",
        simple: "无",
        normal: [
            '当系统能找到一个进程执行序列，使系统只要按此序列为每个进程分配资源，就可以保证进程的资源分配和执行顺利完成，不会发生死锁时，称系统处于安全状态。',
            '银行家算法的过程：一个进程提出资源请求后，系统先进行资源的。然后检测本次的试分配是否使系统处于安全状态， 若安全则按试分配方案分配资源，否则不分配资源。'
        ],
        start: 1,
    },
    {
        title: "3.引入虚拟存储技术的目的是什么？虚拟存储系统有哪些特征？",
        simple: "无",
        normal: [
            '1、提高内存利用率。',
            '2、提高多道程序度',
            '3、把逻辑地址空间和物理地址空间分开，使程序员不用关心物理内存的容量对编程的限制。虚拟存储系统具',
            '虚拟存储系统具有以下几个主要特征：离散性、多次性、对换性、虚拟性。',
        ],
        start: 1,
    },
];

data.czxt = [
    {
        title: "何为系统调用？请简述系统调用与一般函数调用的区别 \/ 1810",
        simple: "运行,执行,开销",
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
        title: "什么是安全状态？写出用于避免死锁的银行家算法的过程。 \/ 1810",
        simple: "无",
        normal: [
            '当系统能找到一个进程执行序列，使系统只要按此序列为每个进程分配资源，就可以保证进程的资源分配和执行顺利完成，不会发生死锁时，称系统处于安全状态。',
            '银行家算法的过程：一个进程提出资源请求后，系统先进行资源的试分配。然后检测本次的试分配是否使系统处于安全状态， 若安全则按试分配方案分配资源，否则不分配资源。'
        ],
        start: 1,
    },
    {
        title: "引入虚拟存储技术的目的是什么？虚拟存储系统有哪些特征？ \/ 1810",
        simple: "无",
        normal: [
            '1、提高内存利用率。',
            '2、提高多道程序度',
            '3、把逻辑地址空间和物理地址空间分开，使程序员不用关心物理内存的容量对编程的限制。',
            '虚拟存储系统具有以下几个主要特征：离散性、多次性、对换性、虚拟性。',
        ],
        start: 1,
    },
    {
        title: "磁盘文件系统可以使用磁盘链接表实现文件存储，也可以使用内存的链接表分配文件的存储空间。请论述它们在空间利用率和存储时间上的各自特点。 \/ 1810",
        simple: "无",
        normal: [
            '使用磁盘链接表的分配：可以充分利用每个簇，不会因为磁盘碎片（除了最后一块中的内部碎片）而浪费存储空间，管理也比较简单。缺点是随机存取相当缓慢。',
            '使用内存的链接表分配：将文件所在的磁盘的簇号存放在内存的表（文件分配表）中。访问文件时，只需从内存文件分配表中顺着某种链接关系查找簇的簇号。不管文件有多大，在目录项中只需记录文件的第一块数据所在簇的簇号，根据它查找到文件的所有块。这种方法的一个缺点是必须把整个表都存放在内存中，不适合大容量的磁盘'
        ],
        start: 1,
    },
    {
        title: "磁盘的访问时间由哪几部分组成？其中花费时间最长的是哪个？ \/ 1810",
        simple: "无",
        normal: [
            '磁盘的访问时间分为以下三部分：1.寻道时间；2. 旋转延迟时间；3. 传输时间。其中，花费时间最长的是寻道时间和旋转延迟时间'
        ],
        start: 1,
    },
    {
        title: "相比于进程，请简述线程在地址空间资源、通信关系、并发性及系统开销方面有哪些特点。 \/ 1804",
        simple: "无",
        normal: [
            '1.地址空间资源。 不同进程的地址空间是相互独立的，而同一进程中的各线程共享同一地址空间。',
            '2.通信关系。 进程之间的通信必须使用操作系统提供的进程间通信机制，而同一进程中的各线程间可以通过直接读或写全局变量来进行通信，甚至无需操作系统的参与。',
            '3.并发性。 多进程之间可以并发执行，多线程之间也可以并发执行，而且同一进程中的多个线程之间也可并发执行。',
            '4.系统开销。 由于创建进程或撤销进程时，系统都要为之分配或回收资源，操作系统所付出的开销远大于创建或撤销线程时的开销。'
        ],
        start: 1,
    },
    {
        title: "在内存管理中，分页管理和分段管理的主要区别是什么？ \/ 1804",
        simple: "无",
        normal: [
            '1.页是按物理单位划分的，段是按逻辑单位划分的。',
            '2.页的大小是固定的，而段的大小不固定',
            '3.分页的地址空间是一维的，分段的地址空间是二维的。',
        ],
        start: 1,
    },
    {
        title: "请简述 SPOOLing 系统的优点。\/ 1804",
        simple: "无",
        normal: [
            '1.提高了 I/O 速度；',
            '2.将独占设备改造为共享设备',
            '3.实现了虚拟设备功能',
        ],
        start: 1,
    },
    //  以下是模拟题，上面的是真题，真题还有2个计算题没在这里面
    {
        title: "进程有哪些特征",
        simple: "无",
        normal: [
            '并发性、动态性、独立性、异步性、结构特征'
        ],
    },
    {
        title: "创建新进程的系统调用来创建进程的一般步骤有哪些？ ",
        simple: "无",
        normal: [
            '1.申请空白PCB',
            '2.为新进程分配资源',
            '3.初始化进程控制块',
            '4.将新进程插入到就绪队列'
        ],
        start: 1,
    },
    {
        title: "进程之间的高级通信机制分为哪几类",
        simple: "无",
        normal: [
            '1.共享存储器系统；',
            '2.消息传递系统；',
            '3.管道通信系统。',
        ],
        start: 1,
    },
    {
        title: "操作系统在什么情况下需要创建进程？",
        simple: "无",
        normal: [
            '1.用户登陆。',
            '2.作业调度。',
            '3.提供服务。',
            '4.应用请求',
        ],
        start: 1,
    },
    {
        title: "为什么要引入线程?",
        simple: "无",
        normal: [
            '由于进程既是独立执行的基本单位，又是资源拥有者，在进程创建、撤销和切换时需要较大的时空开销。',
            '所以，系统中所设置的进程数和进程切换的频率都受到 了限制，影响了操作系统并发程度的提高。',
            '引入线程作为独立调度和分派的单位，不独立拥有资源，而与其他线程共享同一进程的资源，减小了系统的时空开销。'
        ],
        start: 1,
    },
    {
        title: "请简述线程控制块的定义和所包含的信息?",
        simple: "无",
        normal: [
            '定义：每个线程都由一个数据结构表示，包括它的基本状态、标识及记账信息。这个数据结构就是线程控制块',
            '线程控制块包含线程标识信息、处理机状态信息、线程调度信息和线程控制信息。'
        ],
        start: 1,
    },
    {
        title: "请说明同步机制应遵循的准则?",
        simple: "无",
        normal: [
            '空闲让进，忙则等待，有限等待，让权等待',
            '线程控制块包含线程标识信息、处理机状态信息、线程调度信息和线程控制信息。'
        ],
        start: 1,
    },
    {
        title: "请简述引起中断的原因?",
        simple: "无",
        normal: [
            '1.人为设置中断；2.程序性事故；3.硬件故障；4.I/O 设备；5.外部事件。',
        ],
        start: 1,
    },
    {
        title: "请简述操作系统内核的功能?",
        simple: "无",
        normal: [
            '1.支撑功能；2.资源管理功能。',
        ],
        start: 1,
    },
    {
        title: "请简述进程的唤醒过程?",
        simple: "无",
        normal: [
            '1.将进程从阻塞队列中移出；',
            '2.将进程状态由阻塞态改为就绪态',
            '3.将进程插入就绪队列',
        ],
        start: 1,
    },
    {
        title: "操作系统在什么情况下可能进行进程的阻塞和唤醒操作?",
        simple: "无",
        normal: [
            '1.请求系统服务',
            '2.启动某种操作',
            '3.新数据尚未到达',
            '4.无新工作可做',
        ],
        start: 1,
    },
    {
        title: "请说明进程控制块中所包含的信息?",
        simple: "无",
        normal: [
            '1.进程标识符信息.',
            '2.处理机状态信息.',
            '3.进程调度信息.',
            '4.进程控制信息.',
        ],
        start: 1,
    },
    {
        title: "进程调度的功能是什么?",
        simple: "无",
        normal: [
            '进程调度功能由操作系统内核的进程调度程序完成，在 Linux 内核中，进程调度功能的实现从调用内核函数 schedule（）开始。',
            '进程调度的功能是按照某种策略和算法从就绪态进程（在 Linux 中是可执行进程）中为当前空闲的 CPU 选择在其上运行的新进程。',
        ],
        start: 1,
    },
    {
        title: "请说明处理死锁的基本方法?",
        simple: "无",
        normal: [
            '处理死锁的基本方法有预防死锁、避免死锁、检测并解除死锁和忽略死锁问题。.',

        ],
        start: 1,
    },
    {
        title: "请简述选择进程调度算法的准则?",
        simple: "无",
        normal: [
            '1.周转时间短',
            '2.响应时间快',
            '3.截止时间的保证',
            '4.系统吞吐量高',
            '5.处理机利用率好',
        ],
        start: 1,
    },
    // 第四页
    {
        title: "请简述进程切换的步骤?",
        simple: "无",
        normal: [
            '1.保存包括程序计数器和其他寄存器在内的 CPU 上下文环境。',
            '2.更新被替换进程的进程控制块。',
            '3.修改进程状态，把执行态改为就绪态或者阻塞态。',
            '4.将被替换进程的进程控制块移到就绪队列或阻塞队列。',
            '5.执行通过进程调度程序选择的新进程，并更新该进程的进程控制块。',
            '6.更新内存管理的数据结构。',
            '7.恢复被调度程序选中的进程的硬件上下文。',
        ],
        start: 1,
    },
    {
        title: "什么是死锁？引起死锁的原因是什么?",
        simple: "无",
        normal: [
            '由于多个进程竞争共享资源而引起的进程不能向前推进的僵死状态称为死锁。产生死锁的原因为：竞争共享资源且分配资源的顺序不当',
        ],
        start: 1,
    },
    {
        title: "请说明进程终止的方式",
        simple: "无",
        normal: [
            '终止所有死锁进程。',
            '一次只终止一个处于死锁的进程，直到死锁解除。',
        ],
        start: 1,
    },
    {
        title: "请说明解除死锁的途径",
        simple: "无",
        normal: [
            '终止处于死锁状态的进程',
            '抢占死锁进程占有的资源',
        ],
        start: 1,
    },
    {
        title: "什么是死锁的避免？",
        simple: "无",
        normal: [
            '避免死锁的方法是把系统的资源分配状态分为安全状态和不安全状态，只要资源分配使系统资源分配处于安全状态，死锁就不会发生。',
        ],
        start: 1,
    },
    {
        title: "如何预防发生死锁?",
        simple: "无",
        normal: [
            '预防死锁可以通过摒弃下列三个必要条件之一来实现',
            '摒弃请求和保持条件',
            '摒弃不剥夺条件',
            '摒弃环路等待条件',
        ],
        start: 1,
    },
    // 第五页

];
data.czxt = [{
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
    title: "什么是银行家算法?",
    simple: "无",
    normal: [
        '银行家算法是一种能够避免死锁的资源分配算法。其基本思想是一个进程提出资源请求后，系统先进行资源的试分配。',
        '然后检测本次的试分配是否使系统处于安全状态，若安全则按试分配方案分配资源，否则不分配资源。',

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
        '使用内存的链接表分配：将文件所在的磁盘的簇号存放在内存的表（文件分配表）中。',
        '访问文件时，只需从内存文件分配表中 顺着某种链接关系查找 簇的簇号。不管文件有多大，在目录项中只需记录文件的第一块数据所在簇的簇号，根据它查找到文件的所有块。',
        '这种方法的一个缺点是必须把整个表都存放在内存中，不适合大容量的磁盘'
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
    title: "请简述 SPOOLing 系统的 优点/特点。\/ 1804",
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
    simple: "第二章",
    normal: [
        '并发性、动态性、独立性、异步性、结构特征'
    ],
},
// 11 题目

{
    title: "进程之间的高级通信机制分为哪几类",
    simple: "第二章",
    normal: [
        '1.共享存储器系统；',
        '2.消息传递系统；',
        '3.管道通信系统。',
    ],
    start: 1,
},

{
    title: "操作系统在什么情况下需要创建进程？",
    simple: "第二章",
    normal: [
        '1.用户登陆。',
        '2.作业调度。',
        '3.提供服务。',
        '4.应用请求',
    ],
    start: 1,
},

{
    title: "操作系统在什么情况下可能进行进程的阻塞和唤醒操作?",
    simple: "第二章",
    normal: [
        '1.请求系统服务',
        '2.启动某种操作',
        '3.新数据尚未到达',
        '4.无新工作可做',
    ],
    start: 1,
},

{
    title: "创建新进程的系统调用来创建进程的一般步骤有哪些？ / 如何创建新进程？／创建新进程的步骤？ ",
    simple: "第二章",
    normal: [
        '1.申请空白PCB',
        '2.为新进程分配资源',
        '3.初始化进程控制块',
        '4.将新进程插入到就绪队列'
    ],
    start: 1,
},
{
    title: "请简述进程的唤醒过程?",
    simple: "第二章",
    normal: [
        '1.将进程从阻塞队列中移出；',
        '2.将进程状态由阻塞态改为就绪态',
        '3.将进程插入就绪队列',
    ],
    start: 1,
},
{
    title: "为什么要引入线程?",
    simple: "第二章",
    normal: [
        '由于进程既是独立执行的基本单位，又是资源拥有者，在进程创建、撤销和切换时需要较大的时空开销。',
        '所以，系统中所设置的进程数和进程切换的频率都受到 了限制，影响了操作系统并发程度的提高。',
        '引入线程作为独立调度和分派的单位，不独立拥有资源，而与其他线程共享同一进程的资源，减小了系统的时空开销。'
    ],
    start: 1,
},
{
    title: "请简述线程控制块的定义和所包含的信息?",
    simple: "第二章",
    normal: [
        '定义：每个线程都由一个数据结构表示，包括它的基本状态、标识及记账信息。这个数据结构就是线程控制块',
        '线程控制块包含线程标识信息、处理机状态信息、线程调度信息和线程控制信息。'
    ],
    start: 1,
},
{
    title: "请说明进程控制块中所包含的信息?",
    simple: "第二章",
    normal: [
        '1.进程标识符信息.',
        '2.处理机状态信息.',
        '3.进程调度信息.',
        '4.进程控制信息.',
    ],
    start: 1,
},
{
    title: "请说明同步机制应遵循的准则?",
    simple: "第二章",
    normal: [
        '空闲让进，忙则等待，有限等待，让权等待',
    ],
    start: 1,
},
{
    title: "请简述引起中断的原因?",
    simple: "第二章",
    normal: [
        '1.人为设置中断；2.程序性事故；3.硬件故障；4.I/O 设备；5.外部事件。',
    ],
    start: 1,
},

// 21题

{
    title: "请简述操作系统内核的功能?",
    simple: "第二章",
    normal: [
        '1.支撑功能；2.资源管理功能。',
    ],
    start: 1,
},



{
    title: "进程调度的功能是什么?",
    simple: "第二章",
    normal: [
        '进程调度功能由操作系统内核的进程调度程序完成，在 Linux 内核中，进程调度功能的实现从调用内核函数 schedule（）开始。',
        '进程调度的功能是按照某种策略和算法从就绪态进程（在 Linux 中是可执行进程）中为当前空闲的 CPU 选择在其上运行的新进程。',
    ],
    start: 1,
},

{
    title: "请简述选择进程调度算法的准则?",
    simple: "第三章",
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
    simple: "第三章",
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
    simple: "第三章",
    normal: [
        '由于多个进程竞争共享资源而引起的进程不能向前推进的僵死状态称为死锁。',
        '产生死锁的原因为：竞争共享资源且分配资源的顺序不当',
    ],
    start: 1,
},
{
    title: "请说明处理死锁的基本方法?",
    simple: "第三章",
    normal: [
        '处理死锁的基本方法有预防死锁、避免死锁、检测并解除死锁和忽略死锁问题。.',

    ],
    start: 1,
},
{
    title: "请说明进程终止的方式",
    simple: "第三章",
    normal: [
        '终止所有死锁进程。',
        '一次只终止一个处于死锁的进程，直到死锁解除。',
    ],
    start: 1,
},
{
    title: "请说明解除死锁的途径",
    simple: "第三章",
    normal: [
        '终止处于死锁状态的进程',
        '抢占死锁进程占有的资源',
    ],
    start: 1,
},
{
    title: "什么是死锁的避免？",
    simple: "第三章",
    normal: [
        '避免死锁的方法是把系统的资源分配状态分为安全状态和不安全状态，只要使系统资源分配处于安全状态，死锁就不会发生。',
    ],
    start: 1,
},
{
    title: "如何预防发生死锁?",
    simple: "第三章",
    normal: [
        '预防死锁可以通过摒弃下列三个必要条件之一来实现',
        '摒弃请求和保持条件',
        '摒弃不剥夺条件',
        '摒弃环路等待条件',
    ],
    start: 1,
},
// 31题

{
    title: "请说明产生死锁的必要条件?",
    simple: "第三章",
    normal: [
        '互斥条件',
        '请求和保持条件',
        '不剥夺条件',
        '环路等待条件',
    ],
    start: 1,
},


{
    title: "请说明引入 TLB 之后的地址变换过程?",
    simple: "无",
    normal: [
        '1.CPU 产生分页的逻辑地址页号和页内偏移后，将该逻辑地址的页号提交给 TLB。',
        '2.查找 TLB，如果找到页号，则把该页所在的页框号用于形成物理地址。否则(TLB 失效)查找内存页表，从内存页表中找到相应的页表项，读取页所在的页框号，以形成物理地址。',
        '3.如果所査找的页表项不在 TLB 中，在访问完内存页表后，要把找到的页表项中的页号和页框号写到 TLB 中。',
        '如果 TLB 中的条目已满，系统会根据某种策略(如最近最少使用替换)选择一个 TLB 中的条目，用刚访问的页表项信息替换选中的这个 TLB 条目。'
    ],
    start: 1,
},
{
    title: "请说明页与页框的基本概念?",
    simple: "无",
    normal: [
        '将一个进程的逻辑地址空间分成若干个大小相等的片，称为页。',
        '将物理内存空间分成与页大小相同的若干个存储块，称为页框或页帧。',
    ],
    start: 1,
},

// 第六页
{
    title: "请说明满足什么条件时，两个块可以称为伙伴?",
    simple: "无",
    normal: [
        '具有相同的大小，记作 b。',
        '他们的物理地址是连续的，起始地址是 2b 的整数倍。',
    ],
    start: 1,
},
{
    title: "请归纳影响页大小设计的因素?",
    simple: "无",
    normal: [
        '影响页大小设计的因素有管理内存的开销和内存的利用率',
    ],
    start: 1,
},
{
    title: "请说明可重定位装入方式的特点?",
    simple: "无",
    normal: [
        '编译程序使目标模块的起始地址从 0 开始',
        '程序装入时，装入程序根据内存的使用情况将装入模块装入到内存的某个位置，并对模块进行重定位。'
    ],
    start: 1,
},
{
    title: "什么是抖动？抖动产生的原因是什么?",
    simple: "无",
    normal: [
        '多道程序度太高，使运行进程的大部分时间都用于进行页的换入、换出，而几乎不能完成任何有效工作的状态称为抖动。',
        '原因：系统中的进程数量太多，每个进程能分配到的页框太少，以至于进程运行过程中频繁请求调页。'
    ],
    start: 1,
},
{
    title: "静态链接程序完成什么功能?",
    simple: "无",
    normal: [
        '对逻辑地址进行修改',
        '变换外部调用符号'
    ],
    start: 1,
},

{
    title: "什么是最佳适应算法?",
    simple: "无",
    normal: [
        '最佳适应算法每次为作业分配内存，总是把大小与进程所请求的 内存空间大小最接近的空闲分区分配给进程，避免了“大材小用”。',
        '最佳适应算法的优点是什么? （挂在这）： 避免了大材小用，能提高内存利用率'
    ],
    start: 1,
},
// 第七页


{
    title: "循环首次适应算法的优点是什么?",
    simple: "无",
    normal: [
        '空闲区分布均匀、查找开销较小。',
    ],
    start: 1,
},

// 41题
{
    title: "请说明连续分配方式的种类?",
    simple: "无",
    normal: [
        '单一连续分区分配方式',
        '固定分区分配方式',
        '动态分区分配方式',
    ],
    start: 1,
},
{
    title: "内存回收流程是什么?",
    simple: "无",
    normal: [
        '释放一块连续的内存区域。',
        '如果被释放区域与其他空闲区相邻，则合并空闲区',
        '修改空闲分区链',
    ],
    start: 1,
},

{
    title: "请说明段页式存储管理的基本原理?",
    simple: "无",
    normal: [
        '在段页式存储管理系统中，将用户进程的逻辑空间先划分成若干个段，每个段再划分成若干个页。',
        '进程以页为单位在物理内存中离散存放，每个段中被离散的页具有逻辑相关性。',
        '为了实现段页式存储管理的地址映射，操作系统为每个进程建立一个段表，再为每个段建立一个页表',
        '进程段表的每一个段表项存放某个段的页表起始地址和页表长度。',
    ],
    start: 1,
},
{
    title: "页分配和置换策略有哪几种?",
    simple: "无",
    normal: [
        '固定分配局部置换',
        '可变分配全局置换',
        '可变分配局部置换',
    ],
    start: 1,
},

// 第八页
{
    title: "请简述反置页表的地址映射过程?",
    simple: "无",
    normal: [
        '根据进程号和页号找到页框号',
        '物理地址=页框号×页框大小+页内偏移地址。',
    ],
    start: 1,
},
{
    title: "实现文件存储有哪几种常用方式?",
    simple: "无",
    normal: [
        '实现文件存储，有以下几种常用方式：',
        '1.连续分配方式；2.使用磁盘链接表的分配方式；3.使用内存的链接表分配方式；4.i-结点方式。',
    ],
    start: 1,
},

{
    title: "简述什么是 ASCII 文件?",
    simple: "无",
    normal: [
        'ASCII 文件由多行正文组成，在某些系统中每行用回车符结束，某些则用换行符结束，而有些系统还同时采用回车符和换行符，如 MS-DOS。各行的长度不必相同。 ',
    ],
    start: 1,
},
{
    title: "文件的类型有哪些?",
    simple: "无",
    normal: [
        '文件的类型有正规文件、目录文件、字符设备文件和块设备文件等。',
    ],
    start: 1,
},
// {
//     title: "什么是 i 结点？在 i 结点中使用间接地址项有什么好处? / 太大了不想背",
//     simple: "无",
//     normal: [
//         '在使用内存的链接表分配方法中，为每个文件赋予一个被称为i结点的数据结构，其中列出了文件属性和文件块的磁盘地址；',
//         '如果每个 i 结点只能存储固定数量的的磁盘地址，那么当一个文件比较大，所含簇的数目太多时，i 结点将无法记录所有的簇号，这个时候采用间接地址项可以解决这个问题，即使一个磁盘地址不存放数据块，而是存放簇号。',
//         '对于一个大文件，i 结点内的其中一个地址是一次间接块的簇号，这个块包含了存放文件数据的簇的簇号。如果还不够的话，在 i 结点中还有二次间接块的簇号，其中存放了若干个一次间接块的簇号。如果文件再大的话，可以使用三次间接块。'
//     ],
//     start: 1,
// },
// 第九页
{
    title: "简述使用两级目录的优缺点?",
    simple: "无",
    normal: [
        '使用两级目录的优点是解决了文件的重名和文件共享问题，查找时间降低。缺点是增加了系统的存储开销。',
    ],
    start: 1,
},
// 51题


{
    title: "简述树形目录的优缺点",
    simple: "无",
    normal: [
        '树形目录的优点是便于文件的分类，层次结构清晰，便于管理和保护，解决了重名问题，查找速度加快。',
        '缺点是找一个文件按路径名逐层检查, 由于每个文件都放在外存中，多次访问磁盘会影响速度，结构相对复杂。'
    ],
    start: 1,
},


{
    title: "磁盘空间管理的主要内容是什么？",
    simple: "无",
    normal: [
        '磁盘空间管理是文件系统的重要功能，包括记录空闲磁盘信息、设计文件的存放方式，以及规定文件系统的簇大小等内容。,'
    ],
    start: 1,
},
{
    title: "简述 I/O 软件总体要达到什么目的？",
    simple: "无",
    normal: [
        'I/O 软件的总体目标是将软件组织成一种层次结构，低层软件用来屏蔽硬件的具体细节，高层软件则主要是为用户提供一个简洁、规范的界面。'
    ],
    start: 1,
},

{
    title: "简述用户程序及操作系统中设备管理软件的组织层次",
    simple: "无",
    normal: [
        '在用户程序及操作系统中设备管理软件的构成和关系中，将设备管理软件组织成4 个层次：',
        '1.用户层软件；2.与设备无关的软件层；3.设备驱动程序；4.中断处理程序（底层）。',
    ],
    start: 1,
},
{
    title: "简述设备控制器的功能",
    simple: "无",
    normal: [
        '设备控制器的功能如下',
        '1.接收和识别命令；2.数据交换；3.设备状态的了解和报告；4.地址识别；5.数据缓冲；6.差错控制。',
    ],
    start: 1,
},
{
    title: "操作系统的设备管理软件可以实现哪些功能？",
    simple: "无",
    normal: [
        '操作系统的设备管理软件可以实现如下功能：',
        '1.实现I/O设备的独立性；2.错误处理；3.异步传输；4.缓冲管理；5.设备的分配和释放；6.实现 I/O 控制方式,'
    ],
    start: 1,
},
{
    title: "设备控制器的组成有哪些？",
    simple: "无",
    normal: [
        '设备控制器的逻辑构成主要包括以下 3 部分',
        '1.设备控制器与处理机的接口：数据线、控制线和地址线；',
        '2.设备控制器与设备的接口：设备与设备控制器接口中的 3 类信号为数据、状态和控制信号；',
        '3.I/O 逻辑：I/O 逻辑主要由指令译码器和地址译码器两部分功能部件构成，将 CPU 的命令和地址分别译码，控制指令设备进行 I / O 操作。'
    ],
    start: 1,
},
{
    title: "设备无关 I/O 软件的主要功能有哪些？",
    simple: "无",
    normal: [
        '设备无关 I/O 软件的主要功能如下：',
        '1.设备命名：将设备名映射到相应的驱动程序；',
        '2.设备保护：为设备设置合理的访问权限；',
        '3.提供独立于设备的块大小；',
        '4.为块设备和字符设备提供必要的缓冲技术；',
        '5.块设备的存储分配',
        '6.分配和释放独立设备；',
        '7.错误处理',
    ],
    start: 1,
},

// 第十页
{
    title: "在 DMA 控制器中，实现主机与设备控制器的数据传输，需要设置哪几类寄存器？",
    simple: "无",
    normal: [
        '为了实现主机与设备控制器之间成块数据的传送，在 DMA 控制器中设计了 4 类寄存器：命令 / 状态寄存器 CR、内存地址寄存器 MAR、数据寄存器 DR 和数据计数器 DC。',
    ],
    start: 1,
},


// 61题
{
    title: "简述采用轮询方式的缺点",
    simple: "无",
    normal: [
        '使用轮询控制方式使 CPU 经常处于由于输入/输出 而造成的循环测试状态，造成 CPU 的极大浪费，影响整个系统的吞吐量。',
    ],
    start: 1,
},
{
    title: "简述什么是双缓冲技术",
    simple: "无",
    normal: [
        '双缓冲技术是通过给操作系统指定两个系统缓冲区，对单缓冲技术进行改进，当 一个进程往这一个缓冲区中传送数据时，操作系统正在清空另一个缓冲区，这种 技术又叫做缓冲交换。'
    ],
    start: 1,
},



{
    title: "在缓冲池的组成中，包含哪几种类型的缓冲区？",
    simple: "无",
    normal: [
        '公共缓冲池既可用于输入，又可用于输出，其中至少包含三种类型的缓冲区，分别是：空缓冲区、装满输入数据的缓冲区和装满输出数据的缓冲区。',
    ],
    start: 1,
},
{
    title: "三种缓冲队列分别是：",
    simple: "无",
    normal: [
        '1.空缓冲队列 emq：是由空缓冲区链接而成的队列；',
        '2.输入队列 inq：是由装满输入数据的缓冲区链接成的队列；',
        '3.输出队列 outq：是由装满输出数据的缓冲区链接成的队列。',
    ],
    start: 1,
},


// 第十一页
{
    title: "在设备分配中，关于独占设备分配策略有哪些缺点？",
    simple: "无",
    normal: [
        '独占设备分配策略的缺点是：设备得不到充分利用，而且还可能引起死锁',
    ],
    start: 1,
},
{
    title: "简述什么是先来先服务算法",
    simple: "无",
    normal: [
        '当有多个进程对同一设备提出 I/O 请求时，该算法是根据进程对某设备提出请求的先后顺序将这些进程排成一个设备请求队列，设备分配程序总是先把设备分配给队首进程。',
    ],
    start: 1,
},
{
    title: "简述什么是基于优先权的分配算法。",
    simple: "无",
    normal: [
        '基于优先权的分配算法是优先权高的进程优先获得处理机，如果对这种高优先权进程所提出的 I / O 请求也赋予高优先权，显然有助于这种进程尽快完成。',
        '在利用该算法形成设备队列时，将优先权高的进程排在设备队列前面，而对于优先级相同的 I / O 请求，则按先来先服务原则排队。',
    ],
    start: 1,
},

{
    title: "简述不安全分配方式的优缺点",
    simple: "无",
    normal: [
        '不安全分配方式的优点是，一个进程可同时操作多个设备，使进程推进迅速。',
        '其缺点是分配不安全，因为它可能具备“请求和保持”条件，从而可能造成死锁。'
    ],
    start: 1,
},

{
    title: "什么是 SPOOLing？",
    simple: "无",
    normal: [
        '在多道程序环境下，利用一道程序来模拟脱机输入时的外围控制机的功能，把低速 I/O 设备上的数据传送到高速输出磁盘上，',
        '再利用另一道程序来模拟脱机输出时外围控制机的功能，把数据从磁盘传送到低速输出设备上。这种在联机情况下实现的同时外围操作称为 SPOOLing。'
    ],
    start: 1,
},


// 十二页
{
    title: "如何利用 SPOOLing 技术实现共享打印机？",
    simple: "无",
    normal: [
        '当用户进程提出打印请求时，SPOOLing 系统先为用户做下列两件事。',
        '1.由输出进程在输出井中申请空闲盘块区，并将要打印的数据送入其中。',
        '2.输出进程再为用户申请并填写一张用户请求打印表，将该表挂到请求打印机队列上。当打印机空闲时，输出进程完成以下动作：',
        '从请求打印队列首取一张请求打印表；',
        '将打印数据从输出井送到打印机缓冲区（输出缓冲区）；',
        '打印；打印完毕，若打印队列不为空，则转到开始步骤。',
    ],
    start: 1,
},
// 71
{
    title: "简述缓冲区有哪几种工作方式？",
    simple: "第六章",
    normal: [
        '缓冲区的工作方式有以下四种：收容输入、提取输入、收容输出和提取输出',
    ],
    start: 1,
},

{
    title: "为了使系统正常工作，系统在分配设备时应考虑哪些因素",
    simple: "第六章",
    normal: [
        '为了使系统有条不紊地工作，系统在分配设备时应考虑以下 3 个因素：1.设备的固有属性；2.设备分配算法；3.设备分配时的安全性。',
    ],
    start: 1,
},
{
    title: "设备独立性的概念是什么",
    simple: "第六章",
    normal: [
        '为了提高操作系统的可适应性和可扩展性，在现代操作系统中都毫无例外地实现了设备独立性，也称为设备无关性。其基本含义是应用程序独立于具体使用的物理设备。'
    ],
    start: 1,
},
{
    title: "实现设备独立性有哪些好处",
    simple: "第六章",
    normal: [
        '实现设备独立性好处如下：',
        '1.应用程序与物理设备无关，系统增减或变更外围设备时不需要修改应用程序；',
        '2.易于处理输入输出设备的故障；',
        '3.提高了系统的可靠性，增加了设备分配的灵活性。',
    ],
    start: 1,
},
{
    title: "设备独立软件可以完成什么功能？",
    simple: "第六章",
    normal: [
        '1.执行所有设备的公有操作。执行的操作包括：独占设备的分配与回收、将逻辑设备名映射为物理设备名、对设备进行保护、缓冲管理和差错控制；',
        '2.向用户层软件提供统一的接口。设备独立软件向用户层屏蔽访问硬件的细节，向应用软件和最终用户提供简单、统一的访问接口。',
    ],
    start: 1,
},

{
    title: "简述什么是 I/O 通道。",
    simple: "第六章",
    normal: [
        'I/O 通道是一种特殊的处理机，它具有执行 I/O 指令的能力，并通过执行通道程序来控制 I/O 操作。',
    ],
    start: 1,
},
{
    title: "设备控制表包含哪些信息",
    simple: "第六章",
    normal: [
        '设备控制表的信息包含：1.设备类型；2.设备标识符；3.设备状态：忙/闲；4.指向控制器表的指针；5.重复执行的次数或时间；6.设备队列的队首指针。',
    ],
    start: 1,
},
{
    title: "在设备分配的数据结构中，通道控制表包含哪些内容？",
    simple: "第六章",
    normal: [
        '通道控制表主要包含以下内容：1.通道标识符；2.通道状态；3.与通道连接的控制器表首址；4.通道队列的队首指针；5.通道队列的队尾指针。',
    ],
    start: 1,
},

{
    title: "对于设备分配中的数据结构，控制器控制表包含哪些信息？",
    simple: "第六章",
    normal: [
        '控制器控制表主要包含以下字段：1.控制器标识符；2.控制器状态；3.与控制器相连接的通道表指针；4.控制器队列的队首指针；5.控制器队列的队尾指针。',
    ],
    start: 1,
},




{
    title: "在设备分配的数据结构中，系统设备表主要包含哪些内容？",
    simple: "无",
    normal: [
        '系统设备表是系统范围的数据结构，其中记录了系统中全部设备的情况。每个设备占一个表目，其中包括设备类型、设备标识符、设备控制表以及设备驱动程序的入口地址。',
    ],
    start: 1,
},



];
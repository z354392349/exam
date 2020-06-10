data.sjk = [{
        simple: "第一章",
        title: "请说明数据库的定义",
        normal: [
            '数据库（DB）是指长期储存在计算机中的有组织的、可共享的数据集合，',
            '且数据库中的数据按一定的数据模型组织、描述和存储，具有较小的冗余度、较高的数据独立性，系统易于扩展，并可以被多个用户共享。',

        ],
        start: 1,
    },








    {
        title: "数据库管理系统提供哪些对数据的统一管理和控制功能? ",
        simple: "第一章",
        normal: [
            '数据库管理系统具有对数据的统一管理和控制功能，主要包括数据的安全性、完整性、并发控制与故障恢复等，即数据库保护',
        ],
        start: 1,
    },

    {
        title: "请说明数据库管理系统的功能",
        simple: "第一章",
        normal: [
            '数据库管理系统的主要功能包括以下几个方面：',
            '1.数据定义功能',
            '2.数据操纵功能',
            '5.数据组织、存储和管理功能',
            '3.数据库的运行管理功能',
            '4.数据库的建立和维护功能',
            '6.其他功能：主要包括与其他软件的网络通信功能、不同数据库管理系统之间的数据传输以及相互访问功能等。'
        ]
    },
    {
        title: "主要的逻辑数据模型有哪些？",
        simple: "第一章",
        normal: [
            '主要的逻辑数据模型有层次模型、网状模型、关系模型、面向对象模型'
        ],
        start: 1,
    },
    {
        simple: "第二章",
        title: "请简述关系数据库的基本特征",
        normal: [
            '关系数据库的基本特征是使用关系数据模型组织数据，这种思想源于数学。'
        ],
        start: 1,
    },

    {
        simple: "第二章",
        title: "关系操作中的查询操作有哪些？",
        normal: [
            '选择、投影、并、差、笛卡尔积、连接、除、交',
        ],
        start: 1,
    },
    {
        title: "简述传统的集合运算有哪些？",
        simple: "第二章",
        normal: [
            '传统的集合运算是二目运算，它将关系看成元组的集合，其运算是从关系的“水平”方向，即行的角度来进行，具体有并、差、交、笛卡尔积 4 种运算。',
        ],
        start: 1,
    },
    {
        title: "简述专门的关系运算有哪些？",
        normal: [
            '专门的关系运算不仅涉及行，而且涉及列，它可分为一元专门关系操作和二元专门关系操作。',
            '一元专门关系操作包括对单个关系进行垂直分解的投影运算和进行水平分解选择运算；二元专门关系操作则是对两个关系进行操作，包括连接运算和除运算。',
        ],
        start: 1,
    },
    {
        title: "关系模型中常用的关系操作是什么",
        simple: "第二章 / 往表操作上想",
        normal: [
            '关系模型中常用的关系操作包括查询（Query）操作和插入(Insert)、删除（Delete）、修改（Update）操作两大部分。',
        ],
        start: 1,
    },


    {
        title: "数据库模式的定义包括哪些操作？",
        simple: "第二章 / 往数据库操作方面想",
        normal: [
            '数据库模式的定义包含数据库的创建、选择、修改、删除、查看等操作'
        ],
        start: 1,
    },

    {
        title: "简述主属性和非主属性的区别",
        simple: "第二章",
        normal: [
            '关系中包含在任何一个候选码中的属性称为主属性或码属性，不包含在任何一个候选码中的属性称为非主属性或非码属性。',
        ],
        start: 1,
    },
    {
        title: "简述集合运算中“并”运算的定义。",
        simple: "第二章 / 记所有不同 - 看图是合并 去重的过程",
        normal: [
            '假设有两个关系 R1 和 R2,R1 和 R2 的并运算产生一个新关系 R3。R3 是由属于关系 R1或 R2 的所有不同元组所组成，记为 R3=R1∪R2。',
        ],
        start: 1,
    },
    {
        title: "简述关系代数中“差”运算的定义。",
        simple: "第二章",
        normal: [
            '假设有两个关系 R1 和 R2，R1 和 R2 的差运算产生一个新关系 R3。R3 是由属于关系 R1，但不属于 R2 的元组组成，记为 R3 = R1 - R2。',
        ],
        start: 1,
    },
    {
        title: "简述关系代数中“交”运算的定义。",
        simple: "第二章",
        normal: [
            '假设有两个关系 R1 和 R2，R1 和 R2 的交运算产生一个新关系 R3。R3 是由既属于关系R1，同时又属于 R2 的元组组成，记为 R3 = R1∩R2。',
        ],
        start: 1,
    },

    {
        title: "简述集合运算中“笛卡尔积”的运算规则。",
        simple: "第二章",
        normal: [
            '假设有两个关系 R1 和 R2，且 R1 为 m 元关系，R2 为 n 元关系，R1 和 R2 的笛卡尔积产生一个新关系R3，记作R3=R1✖R2。R3是由R1和R2的所有元组连接而成的具有（m+n）个分量的元组组成。',
        ],
        start: 1,
    },






    {
        title: "数据中外码（或外键）的含义是什么？",
        simple: "第二章",
        normal: [
            '当关系中的某个属性不是这个关系的主码或候选码，而是另一关系的主码时，称该属性为这个关系的外码或外键。',
        ],
        start: 1,
    },
    {
        title: "简述全码（或全键）的含义。",
        simple: "第二章",
        normal: [
            '一个关系模式的所有属性集合是这个关系的主码或主键，则称这样的主码或主键为全码或全键。',
        ],
        start: 1,
    },
    {
        title: "简述数据库中候选码或候选键的含义。",
        simple: "第二章",
        normal: [
            '如果在关系的一个码或键中，不能从中移去任何一个属性，否则它就不是这个关系的码或键。则称这样的码或键为该关系的候选码或候选键。',
        ],
        start: 1,
    },
    {
        title: "请说明实体、属性、码或键的概念。",
        simple: "第二章",
        normal: [
            '实体：客观存在并可相互区别的事物称为实体。',
            '属性：实体所具有的某种特性称为实体的属性。',
            '码或键：可唯一标识实体的属性集称为码或键。',
        ],
        start: 1,
    },

    {
        title: "关系数据库对关系的限定有哪些具体要求？",
        simple: "第二章",
        normal: [
            '1.每一个属性都是不可分解的。',
            '2.每一个关系仅仅有一种关系模式。',
            '3.每一个关系模式中的属性必须命名，在同一个关系模式中，属性名必须是不同的。',
            '4.同一个关系中不允许出现候选码或候选键值完全相同的元组。',
            '5.在关系中元组的顺序是无关紧要的，可以任意交换。',
            '6.在关系中属性的顺序是无关紧要的，可以任意交换。,',
        ],
        start: 1,
    },
    {
        title: "请简述关系规范化过程",
        simple: "第二章",
        normal: [
            '一个低一级范式的关系模式通过 模式分解可以转换为若干个 高一级范式的关系模式的集合，这种过程就叫规范化。',
        ],
        start: 1,
    },

    {
        title: "简述关系数据库中关系的三种类型以及其含义。",
        simple: "第二章",
        normal: [
            '关系可以有三种类型，即基本关系、查询表和视图表。',
            '基本关系通常又称为基本表或基表，是实际存在的表，它是实际存储数据的逻辑表示；',
            '查询表是查询结果对应的表；',
            '视图表是由基本表或其他视图表导出的表，是虚表，不对应实际存储的数据。',
        ],
        start: 1,
    },

    {
        title: "什么是函数依赖？",
        simple: "第二章",
        normal: [
            '函数依赖定义：设 R 为任一给定关系，如果对于 R 中属性 X 的每一个值，R 中的属性 Y 只有唯一值与之对应，则称 X 函数决定 Y 或称 Y 函数依赖于 X，记作 X→Y。其中 X 称为决定因素。'
        ]
    },
    {
        title: "什么是完全函数依赖？",
        simple: "第二章",
        normal: [
            '设 R 为任一给定关系，X、Y 为其属性集，若 X→Y，且对 X 中的任何真子集 X′都有 X′  **   Y，则称 Y 完全函数依赖于 X。',
        ],
        start: 1,
    },
    {
        title: "什么是部分函数依赖？",
        simple: "第二章",
        normal: [
            '设 R 为任一给定关系，X、Y 为其属性集，若 X→Y，且 X 中存在一个真子集 X\'满足 X\'→Y，则称 Y 部分函数依赖于 X。',
        ],
        start: 1,
    },

    {
        title: "什么是传递函数依赖？",
        simple: "第二章",
        normal: [
            '传递函数依赖定义： 设 R 为任一给定关系，X、Y、Z 为其不同属性子集，若 X→Y，Y 不能决定 X，Y→Z，则有 X→Z，称为 Z 传递函数依赖于 X。',
        ]
    },
    {
        title: "简述关键字的定义。",
        simple: "第二章",
        normal: [
            '关键字的定义：设 R 为任一给定关系，U 为其所含的全部属性集合，X 为 U 的子集，若有完全函数依赖 X→U，则 X 为 R 的一个候选关键字。',
        ],
        start: 1,
    },
    {
        title: "简述第一范式的定义。",
        simple: "第二章",
        normal: [
            '第一范式定义：设 R 为任一给定关系，如果 R 中每个列与行的交点处的 取值都是不可再分的基本元素，则 R 为第一范式。',
        ],
        start: 1,
    },

    {
        title: "简述第二范式的定义。",
        simple: "第二章",
        normal: [
            '第二范式定义：设 R 为任一给定关系，若 R 为 1NF，且其所有非主属性都完全函数依赖于候选关键字，则 R 为第二范式。',
        ],
        start: 1,
    },
    {
        title: "什么是 BCNF？",
        simple: "第二章",
        normal: [
            'BCNF 定义：设 R 为任一给定关系，X、Y 为其属性集，F 为其函数依赖集，若 R 为 3NF，且其 F 中所有函数依赖 X→Y(Y 不属于 X)中的 X 必包含候选关键字，则 R 为 BCNF。',
        ],
        start: 1,
    },
    {
        title: "简述第三范式的定义",
        simple: "第二章",
        normal: [
            '第三范式定义： 设 R 为任一给定关系，若 R 为 2NF，且其每一个非主属性都不传递函数依赖于候选关键字，则 R 为第三范式。'
        ],
        start: 1,
    },

    {
        title: "在关系数据库中，表有哪些部分组成？",
        simple: "第二章",
        normal: [
            '表也称为关系，是一个二维的数据结构，它由表名、构成表的各个列及若干行数据组成。'
        ],
        start: 1,
    },

    {
        simple: "第二章",
        title: "简述关系数据语言的分类以及其共同特点",
        normal: [
            '关系数据语言可以分为三类：关系代数语言。关系演算语言以及兼具两者双重特点的语言。',
            '共同特点是：语言具有完备的表达能力，是非过程化的集合操作语言，功能强，能够独立使用也可以嵌入高级语言中使用。',
        ],
        start: 1,
    },



    {
        title: "请列出 MySQL 中和表定义相关的四个 SQL 语句。",
        simple: "第三章",
        normal: [
            '1.创建表：在 MySQL 中，可以使用 CREATE TABLE 语句创建表',
            '2.更新表：在 MySQL 中，可以使用 ALTER TABLE 语句来更改原有表的结构。',
            '3.重命名表：除了 ALTER TABLE 语句，还可以直接用语句 RENAME TABLE 来更改表名，并可同时命名多个表。',
            '4.删除表：如若需要删除数据库中已存在的表，可以通过使用 DROP TABLE 语句来实现。',
            '5.查看表：',
            '5.1.显示表的名称：在 MySQL 中，可以使用 SHOW TABIES 语句来显示指定数据库中存放的所有表名；',
            '5.2.显示表的结构：在 MySQL 中，可以使用 SHOW COLUMNS 语句来显示指定数据表的结构',
        ],
        start: 1,
    },
    {
        simple: "第三章",
        title: "在 MySQL 中,定义外键时需要指定参照完整性的实现策略,除了 RESTRICT 外，还有其他哪两种含义不同的实现策略？",
        normal: [
            '关键字“CASCADE”表示级联策略,即从被参照表中删除或更新记录行时,自动删除或更新参照表中匹配的记录行;',
            '关键字“SET NULL”表示置空策略, 即当从被参照表中删除或更新记录行时,设置参照表中与之对应的外键列的值为 NULL,这个策略需要被参照表中的外键列没有声明限定词 NOT NULL',
        ],
        start: 1,
    },



    {
        simple: "第三章",
        title: "数据库的生命周期可分为哪些阶段？",
        normal: [
            '从数据库演变过程的角度来看，数据库的生命周期可分为两个阶段，分别是数据库分析与设计阶段、数据库实现与操作阶段。',
        ],
        start: 1,
    },
    {
        simple: "第三章",
        title: "数据库实现与操作阶段包括哪些子阶段？",
        normal: [
            '数据库实现与操作阶段包括数据库的实现、操作与监督、修改与调整三个子阶段。',
        ],
        start: 1,
    },
    {
        title: "简述 逻辑结构设计的主要步骤",
        simple: "第三章",
        normal: [
            '1.模型转换：模型转换是指将概念模型等价地转换为特定 DBMS 支持的关系模型、网状模型或层次模型表示。',
            '2.子模式设计：子模式设计的目标 是抽取或导出模式的子集，以构造不同用户使用的 局部数据逻辑结构。',
            '3.应用程序设计说明：编制应用程序设计说明 的目的是为 可实际运行的应用程序设计 提供依据与指导，并作为设计评价的基础。',
            '4.设计评价：设计评价的任务是 分析并检验模式及子模式的 正确性与合理性。'
        ],
        start: 1,
    },

    {
        title: "请说明数据库设计的目标 / 数据库设计的目标是什么？",
        simple: "第三章",
        normal: [
            '数据库设计具有两个十分重要的目标，即满足应用功能需求和良好的数据库性能。',
        ]



    },
    {
        title: "什么是良好的数据库性能?",
        simple: "第三章",
        normal: [
            '良好的数据库性能：主要是指对数据的高效率存取和 空间的节省，并具有良好的数据共享性、完整性、一致性及安全保密性。',
        ],
        start: 1,
    },

    {
        title: "请简述逻辑结构设计的任务是什么？",
        simple: "第三章",
        normal: [
            '逻辑结构设计的任务是把在概念结构设计产生的概念模型转换为具体的 DBMS 所支持的逻辑数据模型，',
            '也就是导出特定的 DBMS 可以处理的数据库逻辑结构。'
        ],
        start: 1,
    },
    {
        title: "逻辑设计的目的是什么？",
        simple: "第三章",
        normal: [
            '将概念模型转换为等价的、并为特定 DBMS 所支持数据模型的结构。，',
        ],
        start: 1,
    },
    {
        simple: "第三章",
        title: "请说明概念模型的表示方法",
        normal: [
            '概念模型的表示方法：用 E-R 图来描述现实世界的概念模型，实体用矩形表示；属性用椭圆形表示；联系用菱形表示'
        ],
        start: 1,
    },
    {
        title: "需求分析的目标是什么?",
        simple: "第三章",
        normal: [
            '需求分析的目标是 了解与分析用户的信息 及应用处理的要求，并将结果按一定格式整理而形成 需求分析报告。',
        ],
        start: 1,
    },
    {
        title: "数据库设计的过程",
        simple: "第三章",
        normal: [
            '需求分析、概念结构设计，逻辑结构设计，物理结构设计、数据库实施、数据库运行与维护',
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述主键约束在 CREATE TABLE 或  ALTER TABLE  语句中实现 的两种方式。",
        normal: [
            '1.一种是作为列的完整性约束，此时只需在表中某个列的属性定义后加上关键字“PRIMARY KEY”即可。',
            '2.一种是作为表的完整性约束，需要在表中所有列的属性定义后添加一条 PRIMARY KEY（index_col_name，„）格式的句子。'
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述外键声明的两种方式",
        normal: [
            '1.在表中某个列的属性定义后直接加上“reference_definition”语法项。',
            '2.在表中所有列的属性定义后添加 FOREIGN KEY （ index_col_name）reference_definition”子句的语法项'
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述 MySQL  中候选键与主键之间的区别",
        normal: [
            '1.一个表中只能创建一个主键，但可以定义若干个候选键。',
            '2.定义主键约束时，系统会自动产生 PRIMARY KEY 索引，而定义候选键约束时，系统自动产生 UNIQUE 索引。',
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述左外连接和右外连接的区别",
        normal: [
            '1.左外连接：也称左连接。以左表为基表，在 FROM 子句中使用关键字“LEFT OUTER JOIN”或关键字“LEFT JOIN”来连接两张表。',
            '2.右外连接：也称右连接。以右表为基表，在 FROM 子句中使用关键字“RIGHT OUTER JOIN”或关键字“RIGHT JOIN”来连接两张表。',
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述多表连接查询中的内连接方式。",
        normal: [
            '内连接是一种最常用的连接类型，它是通过在查询中设置连接条件的方式，来移除查询结果集中某些数据行之后的交叉连接。',
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "简述多表连接查询中内连接的三种使用情形。",
        normal: [
            '1.等值连接：在 FROM 子句中使用关键字“INNER JOIN”或“JOIN”连接两张表时，如若在ON 子句的连接条件中使用运算符“=”（即等号），即进行相等性测试，则此连接方式称为等值连接，也称为相等连接。',
            '2.非等值连接：在 FROM 子句中使用关键字“INNER JOIN”或“JOIN”连接两张表时，如若在 ON 子句的连接条件中使用除运算符“=”之外的其他比较运算符，即进行不相等性测试，则此连接方式称为非等值连接，也称为不等连接。',
            '3.自连接：在 FROM 子句中使用关键字“INNER JOIN”或“JOIN”连接两张表时，可以将一个表与它自身进行连接，这种连接方式称为自连接。'
        ],
        start: 1,
    },
    {
        simple: "第四章",
        title: "什么是交叉连接？",
        normal: [

            '交叉连接又称笛卡尔积。在 MySQL 中， 它是通过在 FROM 子句中使用关键字“CROSS JOIN”来连接两张表，从而实现一张表的每一行与另一张表的每一行的笛卡尔乘积，',
            '并返回两张表的每一行相乘的所有可能的搭配结果，供 SELECT 语句中其他语法元素进行过滤和筛选条件。'
        ],
        start: 1,
    },

    {
        simple: "第四章",
        title: "说明 DROP TABLE  语句和 DELETE  语句的联系和区别。",
        normal: [
            'DROP TABLE 语句和 DELETE 语句都可以从基本表中删除元组。',
            'DROP TABLE 语句不但删除表中的全部元组，还删除整个关系表结构。',
            'DELETE 语句可以根据条件删除表中部分元组。'
        ],
        start: 1,
    },















    {
        title: "简述完整性约束条件中列级约束包括的内容",
        simple: "第六章",
        normal: [
            '对数据类型的约束，其包括数据类型、长度、精度等。',
            '对数据格式的约束',
            '对取值范围或取值集合的约束',
            '对空值的约束'
        ],
        start: 1,
    },
    // 21题


    {
        simple: "第六章",
        title: "简述触发器的概念",
        normal: [
            '触发器是用户定义在关系表上的一类由事件驱动的数据库对象，也是一种保证数据完整性的方法。',
        ],
        start: 1,
    },


    {
        simple: "第六章",
        title: "简述数据库数据完整性的含义。",
        normal: [
            '数据库的数据完整性是指数据库中数据的正确性、相容性和一致性。这是一种语义概念，',
            '包括两个方面：与现实世界中应用需求的数据的正确性、相容性和一致性；数据库内数据之间的正确性、相容性和一致性。',
        ],
        start: 1,
    },
    {
        title: "什么是数据库的完整性?",
        simple: "第六章",
        normal: [
            '数据库完整性是指数据库中数据的正确性和相容性。',
        ],
        start: 1,
    },
    {
        simple: "第六章",
        title: "请简述数据完整性约束的含义",
        normal: [
            '数据完整性约束是为了防止数据库中 存在不符合语义的数据，为了维护数据的完整性，',
            'DBMS 必须提供一种机制来检查数据库中的数据，以判断其是否满足语义规定的条件。这些加在数据库数据之上的语义约束条件就是数据完整性约束。',
        ],
        start: 1,
    },

    {
        simple: "第六章",
        title: "简述存储函数和存储过程的区别。",
        normal: [
            '1、存储函数不能拥有输出参数，这是因为存储函数自身就是输出参数；而存储过程可以拥有输出参数。',
            '2、可以直接对存储函数进行调用，且不需要使用 CALL 语句；而对存储过程的调用，需要使用 CALL 语句。',
            '3、存储函数中必须包含一条 RETURN 语句，而这条特殊的 SQL 语句不允许包含于存储过程中。',
        ],
        start: 1,
    },

    // 31 



    {
        simple: "第六章",
        title: "简述索引存在的弊端有哪些。",
        normal: [
            '索引存在的弊端如下：',
            '1.索引是以文件的形式存储的，DBMS 会将一个表的所有索引保存在同一个索引文件中，索引文件需要占用磁盘空间。',
            '2.索引在提高查询速度的同时，却会降低更新表的速度。'
        ],
        start: 1,
    },
    {
        simple: "第六章",
        title: "简述存储过程的基本概念",
        normal: [
            '存储过程是一组为了完成某项特定功能的 SQL 语句集，其实质上就是一段存储在数据库中 的代码，它可以由声明式的 SQL 语句和过程式 SQL 语句组成。'
        ],
        start: 1,
    },
    {
        simple: "第六章",
        title: "请简述在数据库的操作中使用存储过程的优点。",
        normal: [
            '1、可增强 SQL 语言的功能和灵活性 。',
            '2、良好的封装性 。',
            '3、高性能 。',
            '4、可减少网络流量 。',
            '5、存储过程可作为一种安全机制来确保数据库的安全性和数据的完整性 。'
        ],
        start: 1,
    },
    {
        simple: "第六章",
        title: "简述使用视图的优点。",
        normal: [
            '1.集中分散数据；',
            '2.简化查询语句；',
            '3.重用 SQL 语句；',
            '4.保护数据安全；',
            '5.共享所需数据；',
            '6.更改数据格式。',
        ],
        start: 1,
    },

    // 41题

    {
        title: "数据库的并发操作会带来哪些问题?",
        normal: [
            '数据库的并发操作会带来的问题包括：丢失更新，读“脏”数据，不可重复读。',
        ],
        start: 1,
    },


    {
        title: "请简述什么是数据库行为设计?",
        normal: [
            '数据库行为设计：是确定数据库用户的行为和动作，而用户的行为和动作是对数据库的操作，它们通常是通过应用程序来实现的',
        ],
        start: 1,
    },

    {
        title: "封锁可能引起哪些问题?",
        normal: [
            '封锁带来的一个重要问题是可能引起“活锁”和“死锁”。',
            '在并发事务处理过程中，由于锁会使一事务处于等待状态 而调度其他事务处理，因而该事务 可能会因优先级低而永远等待下去，这种现象称为“活锁”。',
            '活锁问题的解决与调度算法有关，一种最简单的办法是“先来先服务”。',
            '两个以上事务循环等待 被同组中另一事务锁住的 数据单元的情形，称为“死锁”。',
        ],
        start: 1,
    },
    {
        title: "简述事务的特征包括哪几方面？",
        normal: [
            '1、原子性',
            '2、一致性',
            '3、隔离性',
            '4、持续性',
        ],
        start: 1,
    },
    // 51题
    {
        title: "简述封锁的基本思想。?",
        normal: [
            '需要时，事务通过向系统请求 对它所希望的数据对象加锁，以确保它不被非预期改变。',
        ],
        start: 1,
    },

    {
        title: "请列举说明会造成数据库运行事务异常中断的因素。",
        normal: [
            '1.计算机硬件故障',
            '2.计算机软件故障',
            '3.病毒',
            '4.人为误操作',
            '5.自然灾害',
            '6.盗窃',
        ],
        start: 1,
    },

    {
        title: "请简述局部变量与用户变量之间的区别",
        normal: [
            '两者的区别是：局部变量声明时，在其前面没有使用@符号，并且它只能被声明它的 BEGIN„END 语句块中的语句所使用；',
            '而用户变量在声明时，会在其名称前面使用@符号，同时已声明的用户变量存在于整个会话之中。',
        ],
        start: 1,
    },
    {
        title: "数据更新操作有哪几种，在 SQL  中分别对应哪三类语句？",
        normal: [
            '数据更新操作：向表中添加若干行数据、修改表中的数据和删除表中的若干行数据。对应三类语句：插入数据、修改数据和删除数据。',
        ],
        start: 1,
    },
    {
        title: "简述关系数据结构中，参照关系和被参照关系的含义。",
        normal: [
            '参照关系也称为从关系，被参照关系也称为主关系，它们是指以外码相关联的两个关系。',
            '以外码作为主码的关系称为被参照关系；外码所在的关系称为参照关系。',
            '被参照关系与参照关系是通过外码相联系的，这种联系通常是一对多的联系 。',
        ],
        start: 1,
    },
    {
        title: "请简述什么是参照完整性约束。",
        normal: [
            '参照完整性约束就是定义外码和主码之间的引用规则，它是对关系间引用数据的一种限制。',
            '描述参照完整性定义：若属性 F 是基本关系 R 的外码，它与基本关系 S 的主码 K 相对应，则对于 R 中每个元组在 F 上的值只允许两种可能，即要么取空值，要么等于 S 中某个元组的主码值。',
        ],
        start: 1,
    },
    {
        title: "简述实体完整性约束的含义",
        normal: [
            '实体完整性约束是指关系的主属性，即主码的组成不能为空，也就是关系的主属性不能是空值 NULL。',
        ],
        start: 1,
    },
    {
        title: "简述主键的含义。",
        normal: [
            '主键是一种唯一性索引。创建主键时，必须指定关键字 PRIMARY KEY，且不能有空值。',
        ],
        start: 1,
    },

    {
        title: "什么是数据冗余?",
        normal: [
            '数据冗余是指同一数据被反复存储的情况。',
        ],
        start: 1,
    },


    {
        title: "请简述局部信息结构设计的步骤？",
        normal: [
            '局部信息结构设计的步骤包括：确定局部范围；选择实体；选择实体关键字；确定实体间联系；确定实体的属性。',
        ],
        start: 1,
    },
    // 61题
    {
        title: "简述码或键的含义",
        normal: [
            '如果在一个关系中，存在这样的属性，使得在该关系的任何一个 关系状态中的两个元组，在该属性上值的组合都不相同,',
            '即这些属性的值都能用来唯一标识该关系的元组，则称这些属性为该关系的码或键。'
        ],
        start: 1,
    },
    {
        title: "什么是数据仓库？",
        normal: [
            '数据仓库是面向主题的、集成的、稳定的、随时间变化的数据集合，用以支持管理决策的过程。',
        ],
        start: 1,
    },

    {
        title: "在数据仓库中，分割是什么意思？",
        normal: [
            '分割是将数据分散到各自的物理单元中，以便能分别处理，以提高数据处理的效率。数据分割后的单元称为切片。',
        ],
        start: 1,
    },
    {
        title: "在数据仓库中，粒度是什么意思？",
        normal: [
            '粒度是指数据仓库的数据单位中 保存数据的细化或综合程度的级别，细化程度越高，粒度级就越小，相反地，细化程度越低，粒度级就越大。'
        ],
        start: 1,
    },
    {
        title: "简述常规文件系统与 HDFS  的不同。",
        normal: [
            'HDFS与常规文件系统不同的是，它以大粒度数据块的方式存储文件，从而减少了元数据的数量，这些数据块则通过随机方式选择不同的节点并存储在各个地方。'
        ],
        start: 1,
    },
    {
        title: "简述数据挖掘具备的功能",
        normal: [
            '1.概念描述',
            '2.关联分析',
            '3.分类与预测',
            '4.聚类',
            '5.孤立点检测',
            '6.趋势和演变分析',
        ],
        start: 1,
    },
    {
        title: "什么是数据挖掘",
        normal: [
            '数据挖掘是从大量的、不完全的、有噪声的、模糊的、随机的实际应用数据中发现并提取隐藏在其中的、人们事先不知道的、但又是潜在有用的信息和知识的一种技术。',
        ],
        start: 1,
    },
    {
        title: "简述在实际使用中，数据挖掘的过程。",
        normal: [
            '1.确定业务对象',
            '2.数据的选择',
            '3.数据的预处理',
            '4.建模',
            '5.模型评估',
            '6.模型部署',
        ],
        start: 1,
    },
    {
        title: "简述大数据的特征",
        normal: [
            '1.数据量巨大，即大量化。',
            '2.数据种类繁多，即多样化。',
            '3.处理速度快，即快速化。',
            '4.价值密度低。',
        ],
        start: 1,
    },

    {
        title: "简述在数据仓库中，维的含义。",
        normal: [
            '维是人们观察数据的特定角度，是考虑问题时的一类属性。此类属性的集合构成了一个维度，例如时间维、产品维等。'
        ],
        start: 1,
    },


    {
        title: "简述什么是“并发控制”？",
        normal: [
            'DBMS 必须对并发操作提供一定的控制，以防止它们彼此干扰，从而保证数据库的正确性不被破坏，避免数据库的不一致性，这种机制就称为“并发控制”。'
        ],
        start: 1,
    },

    {
        title: "简述需求分析的四个步骤",
        normal: [
            '1.确定数据库范围',
            '2.分析数据应用过程',
            '3.收集与分析数据',
            '4.编写需求分析报告'
        ],
        start: 1,
    },
    {
        title: "简述 LAMP  的构架方式",
        normal: [
            'LAMP：即使用 Linux 作为操作系统，Apache 作为 Web 服务器，MySQL 作为数据库管理系统，PHP、Perl 或 Python 语言作为服务器端脚本解释器',
        ],
        start: 1,
    },
    {
        title: "请简述什么是子查询。",
        normal: [
            '通常，可以使用 SELECT 语句创建子查询，即可嵌套在其他 SELECT 查询中的 SELECT 查询。在 MySQL 中，区分如下四类子查询： 表子查询、行子查询、列子查询和标量子查询'
        ],
        start: 1,
    },

    {
        title: "简述使用游标的四个步骤",
        normal: [
            '1、声明游标: 用 DECLARE CURSOR 语句创建游标。',
            '2、打开游标: 用 OPEN 语句打开游标。',
            '3、读取数据: 用 FETCH...INTO 语句从中读取数据。',
            '4、关闭游标: 用 CLOSE 语句关闭游标。',
        ],
        start: 1,
    },

    {
        title: "简述锁的定义",
        normal: [
            '一个锁实际上就是允许或组织一个事务对一个数据对象的存取特权。',
        ],
        start: 1,
    },
    {
        title: "什么是数据库的安全性",
        normal: [
            '数据库的安全性是指保护数据库以防止不合法的使用而造成数据泄露、更改或破坏。',
        ],
        start: 1,
    },
    {
        title: "什么是数据库的外模式？",
        normal: [
            '在三级模式结构中，外模式也称为子模式或用户模式，它是数据库用户能够看见和使用的 局部数据的逻辑结构和特征的描述，是与某一应用有关的数据的逻辑表示。',
        ],
        start: 1,
    },
    {
        title: "简述定义表时，数据类型的含义。",
        normal: [
            '数据类型指系统中所允许的数据的类型。数据库中每个列都应有适当的数据类型，用于限制或允许该列中存储的数据。',
        ],
        start: 1,
    },

    {
        title: "请简述数据备份与恢复的定义",
        normal: [
            '数据库备份是指通过导出数据或者复制表文件的方式来制作数据库的复本；数据库恢复则是当数据库出现故障或遭到破坏时，将备份的数据库加载到系统，从而使数据库从错误状态恢复到备份时的正确状态。',
        ],
        start: 1,
    },
    {
        title: "简述视图用于查询检索，主要体现在哪些应用？",
        normal: [
            '利用视图简化复杂的表连接；使用视图重新格式化检索出的数据；使用视图过滤不想要的数据。'
        ],
        start: 1,
    },
    {
        title: "简述索引的定义",
        normal: [
            '索引是 DBMS 根据表中的一列或若干列按照一定顺序建立的 列值与记录行之间的对应关系表，因而索引实质上是一张描述索引列的列值与原表中记录行之间一一对应关系的有序表。'
        ],
        start: 1,
    },
    {
        title: "简述创建索引的三种方式。",
        normal: [
            '1.使用 CREATE INDEX 语句创建索引。',
            '2.使用 CREATE TABLE 语句创建索引。',
            '3.使用 ALTER TABLE 语句创建索引',
        ],
        start: 1,
    },
    {
        title: "索引的删除有哪两种方法？",
        normal: [
            '1.使用 DROP INDEX 删除索引。',
            '2.使用 ALTER TABLE 语句删除索引'
        ],
        start: 1,
    },
    {
        title: "简述索引的分类有哪些",
        normal: [
            '1.普通索引：最基本的索引类型，没有任何限制。',
            '2.唯一性索引：索引列中的所有值都只能出现一次，必须是唯一的。',
            '3.主键：一种唯一性索引。',
        ],
        start: 1,
    },
    {
        title: "什么是唯一性索引？",
        normal: [
            '唯一性索引和普通索引基本相同，只是有一点区别，即索引列中的所有值都只能出现一次，必须是唯一的。创建唯一性索引时，通常使用的关键字 UNIQUE。',
        ],
        start: 1,
    },
    {
        title: "简述普通索引的含义",
        normal: [
            '普通索引是最基本的索引类型，没有任何限制。创建普通索引时通常使用的关键字是 INDEX或 KEY。',
        ],
        start: 1,
    },
    {
        title: "简述 INSERT  语句的三种语法形式。",
        normal: [
            'INSERT 语句有三种语法形式，分别对应的是 INSERT„VALUES 语句、INSERT„SET 语句和INSERT„SELECT 语句。',
        ],
        start: 1,
    },
    {
        title: "HAVING  子句与 WHERE子句两者之间存在哪些差异 ",
        normal: [
            'HAVING 子句与 WHERE 子句非常相似，HAVING 子句支持 WHERE 子句中所有的操作符和句法，但两者之间仍存在以下几点差异：',
            '1.WHERE 子句主要用于过滤数据行，而 HAVING 子句主要用于过滤分组，即 HAVING 子句可基于分组的聚合值而不是特定行的值来过滤数据。',
            '2.HAVING 子句中的条件可以包含聚合函数，而 WHERE 子句中则不可以。',
            '3.WHERE 子句会在数据分组前进行过滤，HAVING 子句则会在数据分组后进行过滤。因而，WHERE 子句排除的行不包含在分组中，这就会可能改变计算值，从而影响 HAVING 子句基于这些值过滤掉的分组。'
        ],
        start: 1,
    },
    {
        title: "对于 GROUP BY  子句的使用，需要注意哪些内容？",
        normal: [
            '1.GROUP BY 子句可以包含任意数目的列，使得其可对分组进行嵌套，为数据分组提供更加细致的控制。',
            '2.如果在GROUP BY子句中嵌套了分组，那么将按GROUP BY子句中列的排列顺序的逆序方式依次进行汇总，并将在最后规定的分组上进行一个完全汇总',
            '3.GROUP BY 子句中列出的每个列都必须是检索列或有效的表达式，但不能是聚合函数。',
            '4.除聚合函数之外，SELECT 语句中的每个列都必须在 GROUP BY 子句中给出。',
            '5.如果用于分组的列中含有 NULL 值，则 NULL 将作为一个单独的分组返回；如果该列中存在多个 NULL 值，则将这些 NULL 值所在的行分为一组。'
        ]
    },
    {
        title: "简述在指定外键时，需要遵守的规则",
        normal: [
            '1.被参照表必须已经用一条CREATE TABLE语句创建了，或者必须是当前正在创建的表。如若是后一种情形，则被参照表与参照表是同一个表，这样的表称为自参照表，这种结构称自参照完整性。',
            '2.必须为被参照表定义主键。',
            '3.必须在被参照表的表名后面指定列名或列名的组合。这个列或列组合必须是这个被参照表的主键或候选键。',
            '4.尽管主键是不能够包含空值的，但允许在外键出现一个空值。这意味着，只要外键的每个非空值出现在指定的主键中，这个外键的内容就是正确的。',
            '5.外键中的列的数目必须和被参照表的主键中的列的数目相同。',
            '6.外键中的列的数据类型必须和被参照表的主键中的对应列的数据类型相同。'
        ]
    },

    {
        title: "简述封锁的工作原理",
        normal: [

            '1. 若事务 T 对数据 D 加了 X 锁，则所有别的事务对数据 D 的锁请求都必须等待直到事务 T 释放锁。',
            '2. 若事务 T 对数据 D 加了 S 锁，则别的事务还可对数据 D 请求 S 锁，而对数据 D 的 X锁请求必须等待直到事务 T 释放锁。',
            '3. 事务执行数据库操作时都要先请求相应的锁，即对读请求 S 锁，对更新请求 X 锁。这个过程一般是由 DBMS 在执行操作时自动隐含地进行。',
            '4. 事务一直占有获得的锁直到结束时释放。'
        ]
    },
    {
        title: "简述第一代数据库系统，即层次数据库系统和网状数据库系统的共同特点。",
        normal: [
            '1.支持三级模式（外模式、模式、内模式）的体系结构。',
            '2.用存取路径来表示数据之间的联系。',
            '3.独立的数据定义语言。',
            '4.导航的数据操纵语言。',
        ]
    },
    {
        title: "请说明 OLAP  与数据挖掘的区别。",
        normal: [
            '在数据仓库技术中，OLAP 是数据汇总/聚集工具，可帮助简化数据分析，而数据挖掘是自动地发现隐藏在大量数据中的隐含模式和有趣知识；',
            'OLAP 工具的目标是简化和支持交互式数据分析，而数据挖掘工具的目标是尽可能自动处理。在这种意义下，数据挖掘比传统的联机分析处理前进了一步。',
        ]
    },
    {
        title: "数据管理的任务是什么？",
        normal: [
            '数据管理的任务就是进行数据收集、组织、控制、存储、选取、维护，实现在适当的时刻、以适当的形式、给适当的人、提供适当的数据，',
            '它是数据处理的中心问题，而数据处理则是指对各种数据进行收集、存储、加工和传播的一系列活动的总和。',
        ]
    },


    {
        title: "简述事务与程序的关系",
        normal: [
            '事务与程序很相似，但它们是两个彼此相联而又不同的概念：程序是静止的，事务是动态的，',
            '是程序的执行而不是程序本身；同一程序的多个独立执行可以同时进行，每一步执行则是一不同的事务。',
        ]
    },
    {
        title: "MySQL  支持数据库的三级模式结构么？并做概述。",
        normal: [
            'MySQL 作为一种关系型数据库管理系统，遵循 SQL 标准，提供了对数据定义语言 DDL、数据操纵语言 DML、数据控制语言 DCL 的支持，同样支持关系数据库的三级模式结构。',
            '其外模式包括视图和部分基本表，数据库模式包括若干基本表，内模式则包括若干存储文件。'
        ]
    },
    {
        title: "MySQL  增加的部分扩展的语言要素包括哪些？",
        normal: [
            'MySQL 在 SQL 标准的基础上增加了部分扩展的语言要素：包括常量、变量、运算符、表达式、函数、流程控制语句和注解等。',
        ]
    },
    {
        title: "简述 MySQL  中常量的含义及分类。",
        normal: [
            '常量是指在程序运行过程中值不变的量，也称为字面值或标量值。',
            '常量的使用格式取决于值的数据类型，可分为字符串常量、数值常量、十六进制常量、时间日期常量、位字段值、布尔值和 NULL 值。',
        ]
    }, = {
        title: "SQL  的特点有哪些？",
        normal: [
            'SQL 具有如下特点：',
            '1.SQL 不是某个特定数据库供应商专有的语言。',
            '2.SQL 简单易学。',
            '3.SQL 尽管看上去很简单，但它实际上是一种强有力的语言，灵活使用其语言元素，可以进行非常复杂和高级的数据库操作。'
        ]
    },
    {
        title: "简述数据定义语言在数据库中的主要应用",
        normal: [
            '数据定义语言主要用于对数据库及数据库中的各种对象进行创建、删除、修改等操作。包括SQL 语句有：',
            '1.CREATE：用于创建数据库或数据库对象。',
            '2.ALTER：用于对数据库或数据库对象进行修改。',
            '3.DROP：用于删除数据库或数据库对象。',
        ]
    },
    {
        title: "简述数据操纵语言在数据库中的主要应用。",
        normal: [
            '数据操纵语言主要用于操纵数据库中各种对象，特别是检索和修改数据。包括 SQL 语句主要有：',
            '1.SELECT：用于从表或视图中检索数据，使用最为频繁的语句之一。',
            '2.INSERT：用于将数据插入到表或视图中。',
            '3.UPDATE：用于修改表或视图中的数据，其既可修改表或视图中一行数据，也可同时修改多行或全部数据。',
            '4.DELETE：用于从表或视图中删除数据。'
        ]
    },
    {
        title: "简述数据 控制语言包括的 SQL 语句以及其功能。",
        normal: [
            '数据控制语言主要 SQL 语句如下：',
            '1.GRANT：用于授权，把语句许可或对象许可的权限授予其他用户和角色。',
            '2.REVOKE：用于收回权限。'
        ]
    },


    {
        title: "简述关系语言的特点",
        normal: [
            '关系语言的特点是高度非过程化，即：用户不必请求数据库管理员为其建立特殊的存取路径，',
            '存取路径的选择由 DBMS 的优化机制来完成；用户也不必求助于循环和递归来完成数据的重复操作。',
        ],
        start: 1,
    },
    {
        title: "简述在关系数据库中关系模型和关系的含义的区别",
        normal: [
            '同数据模型一样，数据库也有型和值之分。在关系数据库中，关系模式是型，关系是值，即关系模式是对关系的描述。',
            '关系模式是静态的、稳定的，而关系是动态的、随时间不断变化的。这是因为关系操作在不断地更新着数据库中的数据。',
        ],
        start: 1,
    },
    {
        title: "数据查询时，指定列名有哪两种方式？",
        normal: [
            '在数据查询时，列名的指定可以采用直接给出该列的名称的方式，也可以使用完全限定的列名方式，即“tbl_name.col_name"的列名格式',
        ],
        start: 1,
    },
    {
        title: "简述在 MySQL  中，主要数据类型的分类。",
        normal: [
            '在 MySQL 中，主要的数据类型包括数值类型、日期和时间类型、字符串类型、空间数据类型等',
        ],
        start: 1,
    },
    {
        title: "简述创建表时，默认值的含义。",
        normal: [
            '默认值是指在向表插入数据时，如果没有明确给出某个表列所对应的值，则 DBMS 此时允许为此表列指定的一个值。',
        ],
        start: 1,
    },
    // {
    //     title: "MySQL  提供的几类编程语言中的常用运算符有哪些？",
    //     normal: [
    //         '算术运算符有：+（加）、—（减）、*（乘）、/（除）和%（求模）',
    //         '位运算符有：&（位与）、|（位或）、^（位异或）、~（位取反）、>>（位右移）、<<（位左移）。',
    //         '比较运算符：=（等于）、>（大于）、<（小于）、>=（大于等于）、<=（小于等于）、<>（不等于）、!=（不等于）、<=>（相等或都等于空）。',
    //         '逻辑运算符：NOT 或！（逻辑非）、AND 或&&（逻辑与）、OR 或||（逻辑或）、XOR（逻辑异或）。',
    //     ], start: 1,
    // },


    {
        title: "请简述数据库应用软件设计与实现的基本步骤",
        simple: "第七章",
        normal: [
            '数据库应用软件的设计与开发过程可由需求分析、系统功能与数据库的设计、系统功能与数据库的实现、测试与维护等阶段构成。',
        ],
        start: 1,
    },

    {
        simple: "第八章",
        title: "常见的 NoSQL 数据存储模型有哪些？",
        normal: [
            'NoSQL 系统支持的数据存储模型通常有键值（Key-Value）模型、文档（Document）模型、列（Column）模型和图（Graph）模型等',
        ],
        start: 1,
    },

    // 11题

    {
        title: "简述系统测试与维护的作用",
        simple: "第八章",
        normal: [
            '完成系统的实现工作之后，在正式交付用户使用之前，需要对所开发的系统进行必要的测试，验证其是否满足用户的功能要求，并根据测试的结果，以及用户的反馈意见，对该系统进行进一步的修改、完善和维护工作。',
        ],
        start: 1,
    },
    {
        simple: "第八章",
        title: "请叙述文章《第三代数据库系统宣言》中指出第三代数据库系统应具有的基本特征。",
        normal: [
            '1.第三代数据库系统应支持数据管理、对象管理和知识管理。',
            '2.第三代数据库系统必须保持或继承第二代数据库系统的技术。',
            '3.第三代数据库系统必须对其他系统开放。',
        ],
        start: 1,
    },
]
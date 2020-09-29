#include <stdio.h>
// 1
// 设计算法在整型数组中A[n] 中查找值为K的元素，若找到，则输出其位置i(0<=i<n-1),否则输出-1作为标志，并分析算法的时间复杂度
// 时间复杂度为O(n)

int search(int a[], int k)
{
    int i = 0;
    while (a[i] != '\0')
    {

        if (a[i] == k)
        {
            return i;
        }
        i++;
    }

    return -1;
}
// 2
// 写出方阵A[n][n]与B[n][n]的乘积C[n][n]，分析算法的时间复杂度, 时间复杂度为O(n^3)
// 要计算乘积，a的行长度必须等于b的列长度
// 思想，先循环行，在循环列，最后循环，乘积,乘积是一个横着走，一个竖着走的
// 看不明白就拿出纸画一下就行了，其实就是第一层循环取出来行，第二层取出来列
// 第三个循环层 计算当前循环的乘积

void matri(int n, int a[][n], int b[n][n], int c[][n])
{
    int i, j, k;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            c[i][j] = 0; // 初始化
            for (k = 0; k < n; k++)
            {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    // 测试循环，考试没有写
    for (i = 0; i < n; i++)
    {

        for (j = 0; j < n; j++)
        {
            printf("%10d", c[i][j]);
        }
        printf("\n");
    }
}

// 3
// 数组逆置算法
void sort(int a[], int n)
{
    int i, temp;
    for (i = 0; i < n / 2; i++)
    {
        temp = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = temp;
    }

    // 测试循环，考试没有写
    for (i = 0; i < n; i++)
    {
        printf("%d,", a[i]);
    }
}

// 4 本题为伪代码。不可运行
// 假定线性表的数据元素的类型为 Data Type ,
// 顺序表的结构定义如下：
// const int Maxsize = 100;
// typedef struct
// {
//     Data Type data[Maxsize];
//     int length;
// } seqList;
// seqList L;
// 设计算法实现顺序表的插入运算 Insertseqlist (seqList L , Data Type x  , int i ）。
// 该算法是指在顺序表的第 I(1<=i <= n+1) 个元素之前，插入一个新元素 x 。使长度为 n 的线性

// 4答案
// void Insertseqlist(seqList l, Data Type x, int i)
// {
//     if (L.length == Maxsize)
//         exit("表已满");
//     if (i < 1 || i > L.length)
//         exit("位置错");

//     for (j = L.length, j >= i; j--) //注意这里写的是 j >= i; 因为当前位置也要空出来，给新元素
//     {
//         L.data[j] = L.data[j - 1];
//     }
//     L.data[i - 1] = x;
//     L.length++;
// }

// 5 伪代码不可运行
// 给出图中学生档案信息表的连接存储实现，
// typedef struct
// {
//     int num;
//     char name[8];
//     char sex[2];
//     int age;
//     int score;
// } DateType;

// typedef struct node
// {
//     DateType data;
//     struct node *next;

// } Node, *LinkList; // Node 是；链接表节点的类型。
// LinkList head;

// 6 伪代码不可运行
// 写出判断带头节点的单链表L 的元素值是否是递增算法
// int list_isrising(LinkList l)
// {
//     LinkList p, q;
//     p = L->next;
//     if (p == NULL)
//         return 0;
//     if (p->next == NULL)
//         return 1;
//     while (p->next != NULL)
//     {
//         q = p->next;
//         if (q->data < p->data)
//         {
//             return 0;
//         }
//         p = p->next;
//     }
//     return 1;
// }

// 7 伪代码不可运行
//  编写不带头结点的单链表上实现线性表运算length(l) d的算法;
//  我感觉就是求表长度
// int length_list(LinkList head)
// {
//     LinkList p;
//     int Len;
//     p = head;
//     Len = 0;

//     while (p != NULL)
//     {
//         Len++;
//         p = p->next;
//     }
//     return len;
// }

// 8 伪代码不可运行
// 假设单链表的类型定义如下，设计算法InitiateLinkList()实现单链表的初始化
// typedef struct node
// {
//     DateType data;
//     struct node *next;

// } Node, *LinkList; // Node 是；链接表节点的类型。

// // 8答案
// LinkList InitiateLinkList()
// {
//     LinkList head;
//     head = malloc(sizeof(Node));
//     head->next = null;
//     return head;
// }

// 9 伪代码不可运行
// 已知带头节点的单链表L是按照数量域值非递减有序链接的，试写一算法将值x的节点插入表L中，使得L仍然是有序链接的，
// void Linklist_insert(LinkList L, DataType x)
// {
//     LinkList s;
//     LinkList p = L->next;
//     LinkList q = L;
//     while (p != NULL && p->data < x)
//     {
//         q = p;
//         p = p->next;
//         /* code */
//     }
//     s = malloc(sizeof(Node));

//     s->data = x;
//     s->next = p;
//     q->next = s;

// }

// 10 伪代码不可运行
// 算法设计题
// 设带头节点的单链表的节点结构如下。 编写一个函数 int count(LinkList head, DataType x) 统计单链表中数据域 x的节点个数。
// typedef struct node
// {
//     DateType data;
//     struct node *next;

// } Node, *LinkList; // Node 是；链接表节点的类型。

// int count(LinkList head, DataType x)
// {
//     LinkList p = head->next;

//     int m = 0;
//     while (p != NULL)
//     {
//         if (p->data == x)
//             m++;
//         p = p->next;
//     }
//     return m;
// }

// 11 伪代码不可运行
// 假设有一个循环单链表的长度大于1，且表中既无头结点和无头指针，一直s为指向链表中某结点的指针，试编写算法在链表中删除指针s所指节点的前驱，
// 答案可能有误，主要看思想，怎么循环的前驱。
// void del_ctc(LinkList S)
// {
//     LinkList p, q;

//     p = S->next; //得到前驱结点
//     while (p->next != S)
//     {
//         p = p->next;
//         /* code */
//     }
//     q = S;
//     p->data = S->data;  // 将结点S的数据复制到其前驱结点去
//     p->next = S->next;  // 将结点S的后驱结点指针复制到其前驱结点中去，
//     free(q);
//     S = p;
// }

// 12 伪代码不可运行
// 在带头节点的双向循环链表上实现线性表的初始化
// void Init_dlkist(DLinkList head)
// {
//     DLinkList p;
//     p = malloc(sizeof(Node));
//     p->next = p;
//     p->prior = p;
//     head = p;
// }

// 13 伪代码不可运行
// 在带头节点的双向循环链表上实现线性表的插入
// void InsertList(DlinkList head, DataType x, int i)
// {
//     int c = 0;
//     p = head;
//     while (p->next != head && i(c <= i <= 1))
//     {
//         if (i = c - 1)
//         {
//             t = malloc(sizeof(Node));
//             t->data = x;
//             t->prior = p;
//             t->next = p->next;
//             p->next->prior = t;
//             p->next = t;
//         }
//         else
//         {
//             error("未找到第i-1个节点")
//         }
//     }
// }
// 14  伪代码不可运行
// 在带头结点的双向循环链表上实现线性表删除
// void deldkList(DLinkList head, int i)
// {
//     int c = 0;
//     DLinkList p = head;
//     while (p->next != head && c < i)
//     {
//         p = p->next;
//         c++;
//     }
//     if (i == c)
//     {
//         p->prior->next = p->next;
//         p->next->prior = p->prior;
//         free(p);
//     }
//     else
//     {
//         error("未找到第i个结点");
//     }
// }

void sort(int a[], int n)
{
    int i, temp;
    for (i = 0; i < n / 2; i++)
    {
        temp = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = temp;
        /* code */
    }
}

int main()
{
    // 1
    // int a[10] = {1, 2, 3, 4};
    // int x = search(a, 8);
    // printf("%d", x);

    // 2
    // int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 0}},
    //     b[3][3] = {{1, 2, 1}, {1, 1, 2}},
    //     c[3][3];
    // matri(3, a, b, c);

    // 3
    // int a[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    // sort(a, 10);
}

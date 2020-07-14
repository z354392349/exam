
<?php

    $con = mysql_connect("locahost:3306","root","root") or  die("连接服务器失败") ;
    
    mysql_select_db("mysql_test", $con) or die("选择数据库失败");
    mysql_query("set names 'gbk'");
    $res = mysql_query("select * from cust", $con);

    if($res){

        $arr=mysql_fetch_array($res,MYSQL_NUM);
        if($arr){
            echo "是".$arr[0];
        }
    }else{
        echo "查询失败"
    }

    mysql_close($con) or die("关闭服务器失败");
    
>
<?php
    $con =mysql_connect("localhost:3306","root","pwd") or die("服务器连接失败");

    mysql_select_db("mysql_test", $con) or die("服务器选择失败");

    mysql_query("set names 'gbk'");

    $res = mysql_query("select * from cust", $con);

    if($res){

        $arr= mysql_fetch_array($res, MYSQL_NUM);
        if($arr){
            echo "老师".arr[0]
        }
    }else{
        echo
    }
 
>
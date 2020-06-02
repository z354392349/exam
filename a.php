<?php
    $con = mysql_connect("locahost:3306","root","root") or  die("连接服务器失败") ;
    
    mysql_select_db('mysql_test', $con) or die("选择数据库失败");
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


>
<?php

    $con = mysql_connect("localhost:3306","root","root") or die("数据库连接失败");

    mysql_select_db("mysql",$con) or die("数据库选择失败");

    mysql_query("set names 'gbk'");

    $res=mysql_query("select * from cust", $con); 

if($res){

    echo "数据查询成功<br>";

    $arr= mysql_fetch_array($res,MYSQL_NUM);
    
}


>
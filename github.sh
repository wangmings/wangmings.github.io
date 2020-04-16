#!/bin/bash



# -eq           等于
# -ne           不等于
# -gt           大于
# -lt           小于
# -ge           大于等于
# -le           小于等于



# 查看git配置以及配置git
function config(){
    
    if [[ $1 = 0 ]]; then

        git config --list   #列出git配置
    else
        # git config --global user.name "wangmings"
        # git config --global user.email "1139009490@qq.com"
        git config --global $1 $2
 
    fi
}


function upload(){

    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:wangmings/msa.git
    git push -u origin master

}




if [[ $# > 0 ]]; then

    if [[ $1 = "list" ]]; then
        config 0
    
    elif [[ $1 = "config" ]]; then
        
        if [[ $# = 3 ]]; then
            config $2 $3
        else
            echo "配置格式: git config user.name UserName"
        fi

    elif [[ $1 = "status" ]]; then
        git status
    fi


else

    echo "hello"
fi






git config --global user.name "wangmings"
git config --global user.email "1139009490@qq.com"

#查看Git设置
git config --list 



# 初始化仓库并在当前位置创建一个.git隐藏文件
git init  

git add '添加的文件' #把文件从工作区域添加到 - 暂存

git commit -m '文件描述' #把文件提交的暂存区域

# 查看文件提交的情况
git status
# 出现下面这个证明提交成功
# On branch master
# nothing to commit, working tree clean


git push -u origin master

git 工作步骤：
    1. 工作区 -> 暂存 -> git仓库




echo "# msa" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:wangmings/msa.git
git push -u origin master






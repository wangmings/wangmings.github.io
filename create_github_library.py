import os
import sys
import time
import requests
import subprocess
import threading  # 创建线程
from bs4 import BeautifulSoup





# 创建线程类
class CreateThread:

    # 定义私有变量[外部无法访问]
    __thread_name = []
    __thread_list = []


    # 处理
    def _init_(self, _thread, fun):
        name = _thread.name +': '+ fun.__name__+' [fun.]'
        self.__thread_name.append(name)
        self.__thread_list.append(_thread)
        _thread.start()


    # 等待所有线程结束
    def EndThread(self,arg=None):
        for _threads in self.__thread_list:
            _threads.join()
        if arg == 'print':
            print('All Thread End !')

    
    # 查看函数对应的线程
    def PrintThread(self):
        for name in self.__thread_name:
            print(name)

    

    # 创建定时运行线程
    def TimerThread(self, fun, arg='none', arg2='none'):
        
        if arg2 == 'none':
            _thread = threading.Timer(arg, fun)
        
        else:
            _thread = threading.Timer(arg, fun, arg2)   #定时运行：arg=time
        
        self._init_(_thread, fun)



    # 创建线程
    def RunThread(self, fun, arg='none'):
      
        if arg == 'none':
            _thread = threading.Thread(target=fun)
        
        else:
            _thread = threading.Thread(target=fun, args=(arg,))
        
        self._init_(_thread, fun)




threads = CreateThread()





# 读取用户配置信息
def ReadUserConfig(filePath):
    request_data = []

    with open(filePath,'r+') as file:
        ReqConfig = ''
        ReqConfig2 = ''
        index = 0
        index2 = 0

        for line in file:
            line = line.strip()

            if line == '@RequestStart@':
                index = 1
            elif line == '@RequestEnd@':
                index = 0
                i = len(ReqConfig.strip()) - 1
                ReqConfig = eval('{\n'+ReqConfig[0:i]+'\n}')
                request_data.append(ReqConfig)

            elif index == 1:
                ReqConfig += "'"+line.replace(' ','',1).replace(":","':'",1)+"',\n"

            elif line == '@ReqDataStart@':
                index2 = 1
            elif line == '@ReqDataEnd@':
                index2 =0
                i = len(ReqConfig2.strip()) - 1
                ReqConfig2 = eval('{\n'+ReqConfig2[0:i]+'\n}')
                request_data.append(ReqConfig2)

            elif index2 == 1:
                ReqConfig2 += "'"+line.replace(' ','',1).replace(":","':'",1)+"',\n"


    return request_data


getReqConfig = ReadUserConfig('./lib.dat')
RequestConfig = ReadUserConfig('./data.dat')



def storagFile(path,dat):
    with open(path,'wb') as file:
        data = bytes(str(dat), encoding = "utf8")
        file.write(data)





# 请求当前存在GitHub库
def request_github_library(url):
    
    libNameAll = []
    headers = getReqConfig[0]
    
    # 静态变量
    if (not hasattr(request_github_library,'All')):   
        request_github_library.All = []           

    try:
        
        req = requests.get(url,headers=headers,timeout=20)
        html = req.text
        # storagFile('./git.html',html)
        
        # 判断是否响应数据成功
        if req.status_code == requests.codes.ok:
            soup = BeautifulSoup(html,'html.parser')
            libName = soup.find_all('h3',class_='wb-break-all')
            for name in libName:
                name = name.find('a').get_text().strip()
                libNameAll.append(name)

            request_github_library.All += libNameAll

            nexts = soup.find_all('a',class_='btn btn-outline BtnGroup-item')

            if nexts != []:
                i = len(nexts) - 1
                switch = nexts[i].get_text().strip()
                
                if switch == 'Next':
                    url = nexts[i].get('href')
                    request_github_library(url)
            
    except:
        print('请求GitHub库超时请等待..........')
        request_github_library(url)


    return request_github_library.All




libraryNum = 0


# 请求创建GitHub库
def request_create_library(arg):
    global libraryNum

    url = arg['url']
    libName = arg['libName']
    libType = arg['libType']


    if libType == 1:
        libType = 'private'
    else:
        libType = 'public'

    headers = RequestConfig[0]
    data = RequestConfig[1]
    data['repository[name]'] = libName
    data['repository[visibility]'] = libType

    try:
        
        # 解析URL并提取数据
        req = requests.post(url,headers=headers,data=data,timeout=20)
        html = req.text

        # 判断是否响应数据成功
        if req.status_code == requests.codes.ok:
            soup = BeautifulSoup(html,'html.parser')
            lib_name = soup.find_all('strong')[1].get_text().replace('\n','').strip()
          
            if libName == lib_name:
                print('创建: [ '+libName+' ] GitHub库成功')
                libraryNum += 1
            else:
                # print('GitHub库创建失败 '+libName)
                libs = soup.find_all('div',class_='container-lg px-2')[0].get_text().strip()
                if libs == 'Repository creation failed.':
                    print('创建: [ '+libName+' ] GitHub库成功')
                    libraryNum += 1
                else:
                    request_create_library(arg)  
    
    except:
        request_create_library(arg)   







# 输入验证创建库类型
def CreateType():
    
    # 静态变量
    if (not hasattr(CreateType,'type')):   
        CreateType.type= 0  
    
    createType = input('\n输入创建GitHub类型: [公共:0] [私有:1] [退出:exit]\n').strip()
    if createType == 'exit':
        sys.exit()

    elif createType == '0' or createType == '1':
        CreateType.type = int(createType)
    else:
        print('输入创建库类型错误:请重新输入！')
        CreateType()

    return CreateType.type




# 输入验证创建库名
def create_lib_name(libAll):
    # 静态变量
    if (not hasattr(create_lib_name,'name')):   
        create_lib_name.name= []

    libName = input('\n输入需要创建GitHub库名:[输入格式:name name2] [退出:exit]\n').strip()
    
    if libName == 'exit':
        sys.exit()
    else:
        libName = libName.split(' ')
        libName = list(set(libName))

        lib = list(set(libAll) & set(libName))
        if lib != []:
            print('\n输入: [ '+str(lib).replace('[','').replace(']','').replace(',','').replace("'",'')+' ] GitHub库已经存在! 请重新输入:')
            create_lib_name(libAll)
        else:
            print('\n输入数据验证成功！')
            print('需要创建: [ '+str(len(libName))+' ] GitHub库\n')
            create_lib_name.name = libName

        return create_lib_name.name







# 创建GitHub库
def create_githib_lib():

    print('*############################* Requests创建GitHub库 *############################*')
    
    this_github_lib = request_github_library('https://github.com/wangmings?tab=repositories')
    print('GitHub库: ['+str(len(this_github_lib))+']')
    print(str(this_github_lib).replace('[','').replace(']','').replace(',','').replace("'",''))

    libType = CreateType()
    libName = create_lib_name(this_github_lib)

    for name in libName:
        arg = {'url':'https://github.com/repositories','libName':name,'libType':libType}
        threads.RunThread(request_create_library,arg)

    threads.EndThread()
    print('\n成功创建: [ '+str(libraryNum)+' ] GitHub库')

create_githib_lib()





























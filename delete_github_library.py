import sys
import time
import threading                # 创建线程
import subprocess               # 创建子进程执行shell
from selenium import webdriver

driver = ''
libArray = []


# 计时器
class timering:
    startTime = 0
    
    def timer(self,arg='start'):
        if arg == 'start':
            self.startTime = time.time()
        elif arg == 'end':
            endTime = time.time()
            _time =  round((int( endTime - self.startTime) / 60),1)
            print('运行: '+str(_time)+'(分)')

        def sleep(self,s):
            _s = int(time.time()) + s
            while True:
                s_ = int(time.time())   
                if(s_ > _s):
                    print('定时结束')
                    raise
                    break
                time.sleep(0.1)


_t = timering()





# 运行shell
def RunShell(cmd):
    results = subprocess.Popen(cmd, shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    err = results.stderr.read()
    if len(err) == 0:
        out = results.stdout.read()
        return bytes(out).decode('utf8')
    else:
        print('shell_command: ' + cmd + '\n')
        print('shell_err: \n' + bytes(err).decode('utf8'))





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
    def EndThread(self,arg='null'):
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






# 所有shell控制游览器
def shellChrome(option, timer='null', url='null'):
    
    shell = '''
    echo "url"|pbcopy  #复制
    '''

    script_1='''
    tell application "Google Chrome"
        activate --激活Google到当前窗口
    end tell
    '''

    script_2='''
    tell application "Terminal"
        activate --激活终端到当前窗口
    end tell  
    '''

    script_3='''
    tell application "System Events"
        delay ((ms))     --延迟n秒
        key code 47 using {command down} --comment+.:停止加载网页
    end tell   
    '''

    script_4='''
    tell application "System Events"
        key code 37 using {command down} --comment+L:输入网址
        key code 9 using {command down}  --comment+V:粘贴
        key code 36 --回车
        delay 1
        key code 36
        delay ((ms))     --延迟n秒
        key code 47 using {command down} --comment+.:停止加载网页
    end tell   
    '''

    
    if option == 'OpenChrome':
        appScript = script_1

    elif option == 'OpenTerminal':
        appScript = script_2

    elif option == 'TimerStop':
        appScript = script_1 + script_3.replace('((ms))',str(timer))

    elif option == 'ChromeKey':
        shell = shell.replace('url',url)
        RunShell(shell)
        appScript = script_1 + script_4.replace('((ms))',str(timer))
    
    RunShell("osascript -e '"+appScript+"'")










# 执行js脚本获取数据
def RunScript(exe,Password=None,stopTime=3):
    global libArray
    
    fun = '''
    function $node(s){ return document.querySelectorAll(s)}
    '''

    get_lib_data = '''
    console.log('JS获取GitHub库');
    '''+fun+'''
    var arr = [];
    var node = $node('.wb-break-all a');
    for(var i = 0; i < node.length;i++){
        url = node[i].innerText;
        arr.push(url);
    }
    node = $node('.btn.btn-outline.BtnGroup-item')[1]
    if(node != undefined){
        if(node.localName == 'a'){
            node.id = '_button'
            arr.push('ok'); 
        }
    }

    return arr
        
    '''

    delete_lib = '''
    console.log('JS删除GitHub库');
    '''+fun+'''
    $node('.btn.btn-danger.boxed-action')[3].id = '_button';
    $node('.form-control.input-block')[2].id = '_input';
    $node('.btn.btn-block.btn-danger')[3].id = '_click'
    return $node('.Box-body.overflow-auto p strong')[1].innerText
    '''

    # 加入静态变量
    if (not hasattr(RunScript,'static')):   
        RunScript.static = 0            
    RunScript.static += 1     


    def RunJs(js):
        return driver.execute_script(js)
    
    def timerStop(ms):
        shellChrome('TimerStop',ms)
    
    
    def getlibData():  
        i = 0
        libraryName = []
        while i < 100:     
            
            libraryName += RunJs(get_lib_data)
            index = len(libraryName) - 1            
           
            if libraryName[index] == 'ok':
                del libraryName[index]
                threads.RunThread(timerStop,stopTime)
                driver.find_element_by_id('_button').click()
                threads.EndThread()

                
            else:
                break
            
            i += 1

        return libraryName     
        
        

    if exe == 'lib_get':
        return getlibData()
    
    elif exe == 'lib_delete':
        delete_lib_name = RunJs(delete_lib)
        del_libs = delete_lib_name.split('/')[1].strip()
        driver.find_element_by_id('_button').click()
        driver.find_element_by_id('_input').send_keys(delete_lib_name)
        threads.RunThread(timerStop,stopTime)
        driver.find_element_by_id('_click').click()
        threads.EndThread()

        try:
            driver.find_element_by_id('sudo_password').send_keys(Password)
            threads.RunThread(timerStop,stopTime)
            driver.find_element_by_xpath("//div[@class='auth-form-body mt-3']/button").click()  
            threads.EndThread()
        except:
            if RunScript.static == 1:
                print('不需要登录验证删除')

        libArray.append(del_libs)
        print('成功删除 [ '+delete_lib_name.split('/')[1]+' ] 库!')



   




# 输入验证
def inputProof(lib_data):

    # 验证库
    def proof_lib(dele,lib):
        num = 0
        for libs in lib:
            for libs2 in dele:
                if libs == libs2:
                   num += 1
                   break
        if len(dele) == num:
            return True
        else:
            return False
  
    lib_name = input("输入删除GitHub库:[退出:输入:exit]:\n").strip()

    if lib_name == 'exit':
        print('主程序退出！')
        driver.quit()
        sys.exit()
    else:
        lib_name = lib_name.split(' ')
        boo = proof_lib(lib_name,lib_data)
        if boo == False:
            print('\n输入库不存在! 请重新输入!\n')
            lib_name = inputProof(lib_data)
        else:
            print('\n*----------------------------------------*')
            print('输入数据验证成功!')
            print('需要删除 [ '+str(len(lib_name))+' ] GitHub库')
            print('*----------------------------------------*\n')
            return lib_name
    
    return lib_name




# 删除GitHub库
def del_github_lib(del_lib,config):
    
    UserName = config['name']
    Password = config['pass']
    loadTime = config['loadTime']  #url加载时间
    stopTime = config['stopTime']  #url停止加载时间
    
    try:         
        for lib in del_lib:
            lib = 'https://github.com/'+UserName+'/'+lib+'/settings'
            shellChrome('ChromeKey',loadTime,lib)
            RunScript('lib_delete',Password,stopTime)
    except:
        # print('删除GitHub库失败！出现删除！')
        del_lib = list(set(del_lib).difference(set(libArray)))
        del_github_lib(del_lib,config)





# 打开游览器
def OpenChrome(config):
    
    global driver
    option = webdriver.ChromeOptions()

    prefs = {
        'profile.default_content_setting_values': {
            'images': 2,
            'permissions.default.stylesheet':2
        }
    }
    option.add_experimental_option('prefs', prefs)

    option.add_argument('--user-data-dir=/Users/mac/Library/Application Support/Google/Chrome/Default')
    driver = webdriver.Chrome(executable_path='./drive/chromedriver', chrome_options=option)
    # driver.maximize_window() 

    UserName = config['name']
    Password = config['pass']
    loadTime = config['loadTime']  #url加载时间
    stopTime = config['stopTime']  #url停止加载时间
   
    shellChrome('ChromeKey',loadTime,'https://github.com/'+UserName+'?tab=repositories')

    # 获取GitHub上的所有库路径
    lib_data = RunScript('lib_get',stopTime)
    if lib_data != []:
        shellChrome('OpenTerminal')
        print("GitHub库:["+str(len(lib_data))+"]\n"+str(lib_data).replace('[','').replace(']','').replace("'",'').replace(',','')+'\n')
   
        del_lib = inputProof(lib_data)
        shellChrome('OpenChrome')
        del_github_lib(del_lib,config)    
            
    else:
        print('\n没有获取到GitHub库')

    
    
    

    shellChrome('OpenTerminal')
    print('\n*----------------------------------------*')
    print('成功删除 ['+str(len(libArray))+'] GitHub库！\n')
    _t.timer('end')  
    print('\n10秒后关闭游览器')
    time.sleep(10)
    
    # 关闭所有窗口退出
    driver.quit()
    sys.exit()





print('*############################* Selenium自动化管理GitHub库 *############################*')



def readConfig(path):
    json = ''
    with open(path, 'r') as file:
        for line in file:
            json += line
        return eval(json)
config = readConfig('./config.json')

# try:    
_t.timer()
OpenChrome(config)

# except:
#     driver.quit()
#     sys.exit()


























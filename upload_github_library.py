import subprocess               # 创建子进程执行shell


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




# 查看Git配置
def checkConfig():
    shell = '''
        git config user.name
        git config user.email
        git config remote.origin.url
    '''
    configs = RunShell(shell).split('\n')
    if configs[0] == '':
        configs[0] = 'null'

    if configs[1] == '':
        configs[1] = 'null'

    if configs[2] == '':
        configs[2] = 'null'

    if len(configs) > 3:
        del configs[3]

    print('用户: ' + configs[0] + '\n邮箱: ' + configs[1] + '\n远程库: ' + configs[2]+'\n')
    if len(configs[2]) > 6:
        configs[2] = configs[2].split('/')[1].split('.',1)[0]
    config = eval("{'name':'"+configs[0]+"','email':'"+configs[1]+"','remote':'"+configs[2]+"'}")
    return config



# 设置Git配置
def setGitConfig(config):
    name = config['name']
    email = config['email']
    remote = config['remote']

    url = 'git@github.com:'+name+'/'+remote+'.git'
   
    shell = '''
        git remote rm origin
        git config --global user.name "'''+name+'''"
        git config --global user.email "'''+email+'''"
        git remote add origin "'''+url+'''"
    '''

    RunShell(shell)




# 上传文件数据
def upload_file(path):
    
    shell = '''
        git init
        git add ((Path))
        git commit -m "first commit"
        git push -u origin master
    '''
    
    shell = shell.replace('((Path))',path)
    RunShell(shell)   






# 查看Git配置
def check_github_config():
    
    print('*************** Git配置 ****************')
    config = checkConfig()
    
   
    setCofig = input('[是,否] 修改Git配置: [ Yes:No ]: ').strip()
    if setCofig == 'Y' or setCofig == 'y':
        configv = input("配置格式: [ name:用户 email:邮箱 remote:远程库 ]\n").strip().split(' ')
        for line in configv:
            line = line.split(':')
            if line[0] == 'name':
                config['name'] = line[1]
            elif line[0] == 'email':
                config['email'] = line[1]
            elif line[0] == 'remote':
                config['remote'] = line[1]

        setGitConfig(config)
        print('\n*-----------------------------*')
        checkConfig()


    path = input('输入需要上传文件:\n')
    upload_file(path)




check_github_config()

















# GetIp
获取ip和设备信息，并且打包成容器使用

### node版本
- 14.16.1
### 启动
- node app.js

### package.json文件自动生成
- npm init -y


## 容器生成
```
1、项目根目录下创建一个名为 "Dockerfile" 的文件

2、构建 Docker 镜像，. 表示 Dockerfile 文件在当前目录
  docker build -t your-name .

3、运行容器，其中 "-p 7819:7819" 表示将容器内的 7819 端口映射到宿主机的 7819 端口，"-d" 表示在后台运行容器
  docker run -p 7819:7819 -d your-name
```
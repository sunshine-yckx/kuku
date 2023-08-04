<div align=center>

[![State-of-the-art Shitcode](https://img.shields.io/static/v1?label=State-of-the-art&message=Shitcode&color=7B5804)](https://github.com/TomyJan/Yunzai-Kuro-Plugin)

# Yunzai-Kuro-Plugin

</div>

[Yunzai-Kuro-Plugin(库洛插件)](https://github.com/TomyJan/Yunzai-Kuro-Plugin) 是 [Yunzai-Bot](https://github.com/yoimiya-kokomi/Miao-Yunzai) 的 一个插件, 主要提供 库洛游戏 相关功能

> js真你妈难写, 操

## 安装与维护

### 安装插件

插件更新强依赖 Git, 建议通过 Git 安装

#### 通过 Git 安装

在 Yunzai 根目录运行命令拉取插件: 
```shell
git clone https://github.com/TomyJan/Yunzai-Kuro-Plugin.git ./plugins/Yunzai-Kuro-Plugin/
```

也可使用 Gitee 镜像(可能会滞后): 
```shell
git clone https://gitee.com/TomyJan/Yunzai-Kuro-Plugin.git ./plugins/Yunzai-Kuro-Plugin/
```

#### 自行下载安装

下载插件包, 解压至 Yunzai `./plugins` 目录内并重命名文件夹为 `Yunzai-Kuro-Plugin`

### 安装依赖

```shell
pnpm install
```
### 更新插件

如是通过 Git 安装, 在 Yunzai 根目录运行以下命令即可

```shell
git -C ./plugins/Yunzai-Kuro-Plugin/ pull
```

如为手动安装, 需要先备份插件用户数据目录, 删除插件并解压新的插件后, 再将插件用户数据目录恢复进去

### 用户数据目录

`./data` 为插件数据目录. 其中, `./data/system` 为插件系统数据, 不用理会, 其他目录和文件为插件的用户数据, 迁移/更新时备份这些目录即可

## 功能介绍

插件帮助信息 `#库洛帮助` `kurohelp` 

### 登录相关

- [x] 提交验证码登录库街区 `#库洛验证码登录` 同一个验证码有效期内可以多次使用
- [x] 提交 token 登录库街区 `#库洛token登录` [token 获取教程](https://blog.tomys.top/2023-07/kuro-token/)

注意, 由于库街区 APP 和他的垃圾游戏一样只允许单设备登录, 新生成 token 后老 token 会失效, 所以如果使用验证码登录, 那么在你每次登录过 APP 后都需要重新登录机器人

### 签到相关

- [x] 库街区游戏签到(暂仅支持战双) `#战双签到`
- [x] 库街区游戏签到定时任务(暂仅支持战双) 每天 00:02 自动开始签到并向用户私聊推送签到结果
- [x] 库街区库洛币任务 `#库街区每日`
- [x] 库街区社区任务定时任务 每天 00:02 自动开始签到并向用户私聊推送签到结果

### 活动相关

- [x] 一键活动任务 `#库街区一键活动`
- [x] 一键活动任务定时任务 每天 05:02 自动开始执行并向用户私聊推送签到结果

### 查询相关

- [x] 库街区角色墙信息 `#战双卡片`

### 小工具

- [x] ~~库街区自定义头像 `库洛头像帮助` 上传自定义头像~~ 跳脸被橄榄了

### 咕咕咕

- [x] 代码重构: 将所有fetch请求提取到一个方法
- [ ] 代码重构: logger 套娃
- [x] 检查更新通知
- [ ] 部分项目可配置化, 适配锅巴

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

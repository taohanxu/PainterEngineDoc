---
title: 快速上手
nav:
  title: 开发文档
  order: 1
toc: 'menu'
order: 1
---

# 快速上手

## Windows

- 下载解压 PainterEngine

  ![](./assets/image001.jpg)

- 使用 Visual Studio 创建一个空项目

  ![](./assets/image004.jpg)

- 新建一个筛选器，命名为 PainterEngine(本步骤非必须)

  ![](./assets/image005.jpg)

- 将 PainterEngine 以下三个文件夹拖到项目文件夹中

  ![](./assets/image006.jpg)

- 将`platform/windows`文件夹拖到项目文件夹中

  ![](./assets/image008.jpg)

- 在菜单中点击项目=>属性

  ![](./assets/image009.png)

  ![](./assets/image010.png)

- 选中 VC++目录=>包含目录=>编辑

  ![](./assets/image011.jpg)

- 将`Painterengine`、`Painterengine/project`两个文件夹位置加入包含目录

  ![](./assets/image012.jpg)

- 编译、运行

  ![](./assets/image013.jpg)

## Ubuntu

- 下载解压，进入`PainterEngine/platform/linux`，执行 make
  ![](./assets/img.png)

## MacOS

使用 Xcode 编译 PainterEngine

- 访问 www.painterengine.com,在左下角点击下载 PainterEngine
  ![](./assets/xcode1.png)

- 解压缩 PainterEngine 压缩包

- 启动 Xcode 创建一个 Command Line Tool 新项目，Language 选择 C
  ![](./assets/xcode2.png)
- 将 PainterEngine 以下五个文件夹拖到项目文件夹中
  ![](./assets/xcode3.png)
  ![](./assets/xocde4.png)
- 删除 platform 文件夹中的平台相关文件夹
  ![](./assets/xcode5.png)
  ![](./assets/xcode6.png)
- 将 platform/macos 以下文件拖到项目对应文件夹中
  ![](./assets/xocde7.png)
  ![](./assets/xcode8.png)
- Xcode project Build Setting

  `Search Paths` Always Search User Paths (Deprecated) 设置为 Yes，Header Search Paths 添加当前项目路径.

  `Apple Clang - Preprocessing` Preprocessor Macros 添加 宏定义`GL_SILENCE_DEPRECATION`

  ![](./assets/xcode9.png)
  ![](./assets/xcode10.png)
  ![](./assets/xcode11.png)

- 修改 px_file.c 头文件路径

```c
#include "platform/modules/px_file.h"
```

现在,你可以编译运行 Painterengine 程序了
![](./assets/xcode12.png)

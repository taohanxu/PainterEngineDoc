---
title: 绘图能力

order: 5

toc: 'menu'
---# 绘图 API

## 坐标系

屏幕窗口二维坐标左上角为原点$(0,0)$，右下角为终点$(width-1,height-1)$

## 颜色

PX_COLOR 用于表示一个颜色

```c
px_color PX_COLOR(

)
```

## 线条

PX_GeoDrawLine 用于绘制一条反走样线段

```c
px_void PX_GeoDrawLine(
   px_surface *psurface,// 渲染表面
   px_int x0,px_int y0, // 起始坐标
   px_int x1,px_int y1, // 终点坐标
   pt_int lineWidth, // 线宽
   px_color color // 颜色
);
```

# <center><font face = "微软雅黑" font color = orange>Mardown新手教程</font></center>
## <center><font face = "微软雅黑" size=5>Evan2you</font></center>
### 一、准备工作
1. **安装vscode**
    [vscode官网下载地址]https://code.visualstudio.com/
2. **下载必要的插件**
   - Markdown All in one
   - Markdown Previe Enhanced
   - Markdown PDF
   - Paste Image
3. **创建.md文档,打开同步预览功能,开始编辑**
### 二、基本语法
1. **标题**
   #一级标题
   ##二级标题
   ……
2. **引用**
   >编辑这类教程文档很好用！
   >>s
3. **列表**
   1. 无序列表
   - 列表1
   + 列表2
   * 列表三
   2. 有序列表
   3. 嵌套
   4. TodoList
    - [x] a
    - [ ] b
    - [ ] c
4. **表格**
   | 左对齐| 居中对齐| 右对齐|
   | :----- | :----: | ----: |
   | a | b | c |
5. **段落**
    - 换行？—— 两个以上空格后回车/空一行
    - 分割线——三个*
      ***
    - 字体
      | 字体 | 代码 |
      |:--:|:--:|
      |*斜体*|* *|
      |==高亮==|== ==|
      |**粗体**|** **|
      |***斜粗体***|*** ***|
      |~~删除~~|~~ ~~|
      |<u>下划线<u>|```<u> </u>```|
    - 脚注
      你好这里是[^1]脚注!!
6. **代码**
   在需要高亮的代码块的前一行及后一行使用三个反引号 ```（~ 键）
   同时第一行反引号后面，输入代码块所使用的语言，实现代码高亮。
   ```C
   #include<iostream>
   using namespace std;
   int main(){
    print("hello world")
   }
   ```
   ```python
    #!/usr/bin/env python3
    print("Hello, World!");
   ```

   `print("hello world");  `
   
7. **超链接**
   - https://www.runoob.com/markdown/md-link.html
   - 查看更多使用功能请[点击链接][教程]
8. **图片**
   - 使用图床保存图片并实现插入
     [路过图床]:https://imgse.com/
   - 使用markdown语法插入
   [![pFZHwAe.jpg](https://s11.ax1x.com/2024/01/23/pFZHwAe.jpg)](https://imgse.com/i/pFZHwAe)
   - 使用html语言实现调整图片大小和位置功能(可以更改图片大小)
   <a href="https://imgse.com/i/pFZHwAe"><div align=center><img src="https://s11.ax1x.com/2024/01/23/pFZHwAe.jpg" alt="pFZHwAe.jpg" border="0" width="80%" height="60%"/></div></a>

### 三、其他操作
   - **插入latex公式**
     - 行内显示公式：
     $f(x)=ax+b$
     - 块内显示数学表达式：
     $$
    \begin{pmatrix}
    a & b \\
    c & d
    \end{pmatrix}
     $$ 
   - **html/css语法**
     - ctr+shift+P 搜索
     "Markdown Preview Enhanced:Customize CSS"
     在style中使用css语法改变标题格式等
   - **个性化设置**
     File-Preferences-Settings
### 四、导出为pdf文档
    - 使用Markdown PDF(不推荐)
    - Open in Broser-手动另存为PDF文档
     

[^1]:这里是脚注！！
[教程]:https://www.runoob.com/markdown/md-link.html

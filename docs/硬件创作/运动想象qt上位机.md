# <center><font face="微软雅黑" color="orange" size="6"><b>运动想象脑电信号采集分析软件</b></font></center>
<center><font face = "微软雅黑" size=4>Evan2you</font></center>

### 一、软件概述
1.1目标
</br>
&emsp;&emsp;基于Python开发环境开发该套使用实时脑电图信号分类的运动想象及意图识别软件，目的是能实现对使用者运动意图脑电信号的记录、特征提取、分类、保存。
</br>
1.2 功能
</br>
&emsp;&emsp;该软件设置5个界面，具有五大功能，分别为：系统登录界面、运动想象脑电信号记录界面、生成神经网络模型界面、运动意图实时识别界面、我的个人信息界面。

### 二、运行环境
2.1 配置要求  
&emsp;&emsp;CPU主频2.40GHz，8G内存，512G硬盘容量。
</br>
2.2 支持软件  
&emsp;&emsp;Pycharm2022.2. 5及以后。
</br>
2.3安装与卸载
</br>
&emsp;&emsp;该软件基于Python环境开发，软件的安装与卸载参考Pycharm软件的安装与卸载方法。

### 三、使用说明
&emsp;&emsp;Pycharm安装完成后，配置好Anoconda环境：python3.8环境下运行。
</br>
3.1 软件启动及登录
</br>
&emsp;&emsp;（1）在软件文件中运行main.py文件，进入登录界面。在用户名输入框中输入用户名，在密码框中输入密码，点击确认按钮，可以登录运动想象脑电信号采集分析软件，使用该软件的脑电意图采集、识别等功能。点击退出按钮可以退出该系统，登陆软件后点击回退按钮可以反回到登陆界面。

<figure markdown="span">
  ![MI1](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI1.png){ width="600" }
  <figcaption>登录界面</figcaption>
</figure>

&emsp;&emsp;（2）若输入的用户名不存在或密码错误，系统弹出“用户名或密码错误”的错误提示对话框。

<figure markdown="span">
  ![MI2](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI2.png){ width="600" }
  <figcaption>错误提示对话框面</figcaption>
</figure>

&emsp;&emsp;（3）若当前尚未在该系统中注册用户名，则需要管理员（初始管理员用户名和密码随软件发送，初次使用后需在用户管理模块修改，防止泄露）登录该系统，在用户管理模块新注册用户。
</br>
3.2 系统界面
</br>
&emsp;&emsp;运动想象脑电信号采集分析软件主界面包含4个功能模块，分别为MI训练、模型生成、MI测试、我的。上方有三个按钮，叉号为退出软件，横线为最小化软件，回退符号为返回到登录界面。

<figure markdown="span">
  ![MI3](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI3.png){ width="600" }
  <figcaption>系统主界面</figcaption>
</figure>

3.3 MI训练 	
</br>
&emsp;&emsp;点击菜单栏中MI训练，进入MI训练界面，界面上方有“三分类运动想象数据”提示标题，下方有建立通讯按钮、右手握拳按钮、右手舒展按钮、手指弯曲按钮、开始采集按钮。

<figure markdown="span">
  ![MI4](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI4.png){ width="600" }
  <figcaption> MI训练界面</figcaption>
</figure>

&emsp;&emsp;通过点击建立通讯按钮与OPEN BCI Cyton Board建立通讯，建立成功会弹出提示对话框。

<figure markdown="span">
  ![MI5](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI5.png){ width="600" }
  <figcaption> 与Cyton Board建立通讯</figcaption>
</figure>

&emsp;&emsp;通过点击右手握拳、右手舒展、手指弯曲按钮可以分别跳转到相队应的图片界面，对应的图片可以引导使用者进行相关的运动想象，点击开始采集按钮，软件会记录使用者六秒的脑电数据，记录完成后，会弹出提示对话框，确保数据已经保存成CSV文件。
<figure markdown="span">
  ![MI6](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI6.png){ width="600" }
  <figcaption> 脑电数据的保存</figcaption>
</figure>

3.4 模型生成
</br>
&emsp;&emsp;点击菜单栏中模型生成按钮，进入神经网络模型生成界面，界面上方有“生成神经网络模型”提示标题，下方有添加握拳文件按钮、添加舒展文件按钮、添加弯曲文件按钮、生成模型按钮，同时还有生成模型结果显示框。
<figure markdown="span">
  ![MI7](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI7.png){ width="600" }
  <figcaption> 模型生成界面</figcaption>
</figure>

&emsp;&emsp;以添加握拳文件为例，通过点击添加握拳文件按钮，将在MI训练部分采集的握拳运动想象脑电数据的CSV文件添加到软件中，添加成功会有对话框提示。
<figure markdown="span">
  ![MI8](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI8.png){ width="600" }
  <figcaption> 添加握拳文件成功提示框</figcaption>
</figure>

&emsp;&emsp;在握拳文件、舒展文件、弯曲文件全部添加完成之后，点击生成模型按钮，软件会通过内置的全连接神经网络模型，训练完成后会得出20轮训练的准确率，并弹出训练成功对话框，最后生成my_model.pth文件。
<figure markdown="span">
  ![MI9](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI9.png){ width="600" }
  <figcaption>神经网络模型训练结果</figcaption>
</figure>

3.5 MI测试
</br>
&emsp;&emsp;通过点击MI测试按钮，进入到运动意图实时识别界面，该界面有导入模型按钮、开始采集按钮、运动想想按钮、释放资源按钮，以及八通道脑电数据的实时显示，预测结果的显示框。
<figure markdown="span">
  ![MI10](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI10.png){ width="600" }
  <figcaption> MI测试主界面</figcaption>
</figure>


&emsp;&emsp;点击导入模型按钮，选择在模型生成界面生成的my_model.pth文件，添加到软件中，添加成功后会有提示对话框。
<figure markdown="span">
  ![MI11](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI11.png){ width="600" }
  <figcaption>将神经网络模型导入软件界面</figcaption>
</figure>

&emsp;&emsp;点击开始采集按钮，可以采集OPEN BCI Cython Board传到软件的8通道实时脑电信号。
<figure markdown="span">
  ![MI12](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI12.png){ width="600" }
  <figcaption> 8通道实时脑电图信号显示</figcaption>
</figure>

&emsp;&emsp;点击运动想想按钮，使用者进行六面的运动动作想象，结束后会得出一个预测结果，并在下方显示出来并弹出对话框。点击释放资源按钮，停止与OPEN BCI Cyton Board的通讯。
<figure markdown="span">
  ![MI13](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI13.png){ width="600" }
  <figcaption> 运动想象结果界面</figcaption>
</figure>


4.6 我的
</br>
&emsp;&emsp;点击我的按钮可以进入到个人信息主界面，通过输入密码以及要修改的密码可以进行登录密码的修改。
<figure markdown="span">
  ![MI4](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/硬件创作/MI上位机/MI14.png){ width="600" }
  <figcaption> 个人信息主界面</figcaption>
</figure>
</br>


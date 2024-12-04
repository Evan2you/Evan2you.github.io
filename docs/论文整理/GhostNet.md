# <center><font face="微软雅黑" color="orange" size="6"><b>GhostNet: CVPR-2020</b></font></center>
<center><font face = "微软雅黑" size=4>Evan2you</font></center>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;华为<span style="color: red; font-weight: bold;">诺亚⽅⾈实验室</span>提出的⼀个<span style="color: red; font-weight: bold;">端侧模型</span>，更加轻量⾼效，性能⾼于MobileNet，ShuffleNet。
GHostNet仅通过<span style="color: red; font-weight: bold;">少量计算（cheap operations）</span>就能⽣成⼤量特征图的结构。
</div>

### 一、提出背景
<div style="font-family: '等线', sans-serif; text-align: justify; 
    background-color: #FFF9C4; border: 2px solid orange; border-radius: 10px; padding: 20px;">
    &emsp;&emsp;卷积神经网络推动了计算机视觉诸多任务的进步，⽐如图像识别、⽬标检测等。
    但在<span style="color: blue; font-weight: bold;">嵌入式设备</span>上部署深度学习模型的一个困难就是模型过大，以及所需要的计算量过大。
    ⽐如我们所熟悉的<span style="color: blue; font-weight: bold;">ResNet-50</span>，它有大概<span style="color: green; font-weight: bold;">25.6M</span>的参数量，按照32位存储，就需要<span style="color: green; font-weight: bold;">102.4MB</span>的内存空间，
    同时处理一张 <span style="color: green; font-weight: bold;">224×224</span>的图⽚的计算量大概是<span style="color: green; font-weight: bold;">4.1B</span>。
    因此，深度神经网络设计的最新趋势是探索便携式（Portable）和高效（Efficient）的网络架构，为移动设备提供更适合的应用方式。

    <p style="font-weight: bold; text-decoration: underline; color: red;">
        &emsp;&emsp;一些研究提出了模型的压缩方法，⽐如剪枝、量化、知识蒸馏等；还有一些则着重于高效的网络结构设计。
        本工作从减少冗余特征图的角度出发，提出了一种全新的神经网络基本单元Ghost模块，
        从而搭建出轻量级神经网络架构GhostNet。
    </p>
</div>
<br/>

<figure markdown="span">
  ![ghostnet1](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/论文整理/ghostnet/ghostnet1.png){ width="300" }
  <figcaption>特征冗余</figcaption>
</figure>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;如图所⽰，是由ResNet-50中的第⼀个残差块⽣成的某些中间特征图的可视化。从图中我们可以
看出，这⾥⾯有很多特征图是具有⾼度相似性的<span style="color: red; font-weight: bold;">（在图中分别⽤不同的颜⾊⽰意）</span>，换句话说，就是
存在许多的冗余特征图。所以从另⼀个⻆度想，我们是不是可以利⽤⼀系列的线性变化，以很⼩的代
价⽣成许多能从原始特征发掘所需信息的“幽灵-Ghost”特征图呢？<span style="color: red; font-weight: bold;">（冗余的特征图是⾮常有必要
的，可以保证⽹络对输⼊数据的理解更为全⾯）</span>，这个便是整篇⽂章的核⼼思想。
</div>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;本⽂提出的Ghost模块是⼀种新颖的即插即⽤模块，主要⽬的是使⽤更少的参数来⽣成更多特征
图。具体来说，深度神经⽹络中的<span style="color: red; font-weight: bold;">每⼀个卷积层</span>将会分为两部分：
<br/>
&emsp;&emsp;<span style="background-color: #FFEB3B; padding: 2px 4px;">第⼀部分：</span>常规的卷积，但是特征图的数量将会严格控制，因为不能让计算量太⼤。
<br/>
&emsp;&emsp;<span style="background-color: #FFC107; padding: 2px 4px;">第⼆部分：</span>也是⽣成⼀些特征图，只是不采取常规的卷积来⽣成，⽽是通过简单的 "线性变换"。
</div>

<figure markdown="span">
  ![ghostnet2](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/论文整理/ghostnet/ghostnet2.png){ width="300" }
  <figcaption>常规卷积层和Ghost module</figcaption>
</figure>

### 二、Ghost-Module结构

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;Ghost-Module可分成蓝⾊1、紫⾊2、红⾊3：
<br/>
&emsp;&emsp;<span style="background-color: #ADD8E6; padding: 2px 4px;">蓝⾊部分1：是⼀个普通的Conv2D操作，作者并没有把其的通道设置的很⼤，我们假设输出通道数为
m ( m < n )， 其中n 为Output输出的通道数。</span>
<br/>
&emsp;&emsp;<span style="background-color: #D8B7DD; padding: 2px 4px;">紫⾊部分2：⼀个分组卷积操作，通过分组卷积可以得到Output输出特征图下⾯渐红的，我们想要得
到的有利于分类的“幻影-Chost”特征图。</span>
<br/>
&emsp;&emsp;<span style="background-color: #FFB6C1; padding: 2px 4px;">红⾊部分3：蓝⾊部分的Conv2D卷积得到的通道数为m的特征+紫⾊分组卷积得到的通道数( m − 1 )
s的通道数相加。</span>
</div>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;<span style="background-color: yellow; padding: 2px 4px;">其中：</span>Φ为线性变换。实际操作中Φ的变换方法不固定，可以是 3x3 卷积核或者 5x5 卷积核。另外，理论上可以使用不同尺寸大小的卷积核组合进行线性变换操作，但考虑到 CPU 或 GPU 的推理情况，作者建议全部使用 3x3 卷积核或全部使用 5x5 卷积核。
</div>

&emsp;&emsp;⼀些概念和问题：
<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;1、"廉价的线性运算 (cheap linear operation)" 是指：分组卷积，其中 分组数 = 数据输⼊通道数。
</div>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;2、Ghost与已有的⽅法相⽐区别在哪⾥：
以往的⽅法，⽐如深度可分离卷积是先使⽤Depthwise Convolution处理空间信息，再使⽤
Pointwise Convolution处理不同channel之间的信息。相⽐之下，Ghost 模块先使⽤常规的卷积得到
⼀些特征，再使⽤廉价线性变换（分组卷积）得到另⼀些特征（“幽灵/幻影”）。⽽且，这个 cheap
linear operation 可以有其他很多种变化。⽐如说 仿射变换（affine transformation） 和⼩波变换
（wavelet transformation）。
</div>
<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;补充：
Affine transformation 是⼀种在⼆维或三维空间中对图形进⾏变换的数学⽅法，它包括了平移、旋
转、缩放和剪切等操作。这种变换保持了图形的“仿射性质”，意味着它不会改变图形中<span style="color: orange; font-weight: bold;">点的共线性</span>
（即，如果三个点在变换前共线，变换后仍然共线）和<span style="color: orange; font-weight: bold;">平⾏性</span>（即，如果两条线在变换前平⾏，变换后仍然平⾏）。
</div>

&emsp;&emsp;<font face = "等线" >**基本类型**

1. 平移（Translation）：将图形沿着某个⽅向移动⼀定的距离。
2. 旋转（Rotation）：围绕⼀个固定点（旋转中⼼）按⼀定⻆度旋转图形。
3. 缩放（Scaling）：改变图形的⼤⼩，可以是均匀缩放（各⽅向⽐例相同）或⾮均匀缩放（各⽅向⽐例不同）。
4. 剪切（Shear）：使图形沿着某⼀⽅向倾斜，造成⼀种拉伸效果。
   
&emsp;&emsp;<font face = "等线" >**矩阵表⽰**

&emsp;&emsp;在⼆维空间中，⼀个仿射变换可以⽤⼀个3x3的矩阵表⽰，形式如下：

$$
\begin{bmatrix} a & b & t_x \\ c & d & t_y \\ 0 & 0 & 1 \end{bmatrix}
$$

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;其中，a,b,c,da,b,c,d 定义了旋转和缩放，tx,tytx,ty 定义了平移。如果 a,b,c,da,b,c,d 构成的2x2矩阵
是<span style="color: orange; font-weight: bold;"><span style="color: orange; font-weight: bold;">正交的</span>，那么这个变换还包括了旋转。在三维空间中，仿射变换可以⽤⼀个4x4的矩阵表⽰，形式如下：
</div>

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & t_x \\
a_{21} & a_{22} & a_{23} & t_y \\
a_{31} & a_{32} & a_{33} & t_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;仿射变换在计算机图形学、计算机视觉、图像处理、机器学习等领域有着⼴泛的应⽤。例如，在图像
处理中，仿射变换可以⽤来校正图像的⼏何失真；在<span style="color: orange; font-weight: bold;">机器学习中，它可以⽤来对数据进⾏预处理</span>，以
提⾼算法的性能。仿射变换是线性变换的⼀种，它通过添加平移向量扩展了线性变换，使其能够处理
更复杂的空间变换问题。
</div>

### 三、构建GhostNet

<figure markdown="span">
  ![ghostnet3](https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/论文整理/ghostnet/ghostnet3.png){ width="300" }
  <figcaption>Ghost Bottleneck</figcaption>
</figure>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;Ghost Bottleneck：作者设计了2种Ghost bottleneck（G-bneck）。分别对应着 <span style="color: orange; font-weight: bold;">s=1 </span>和 <span style="color: orange; font-weight: bold;">s=2 </span>的情况。
</div>
<span style="color: red; font-weight: bold;">Ghost bottleneck由两个堆叠的Ghost模块组成：</span>
<div style="font-family: '等线', sans-serif; text-align: justify;">
第1个Ghost模块：扩展层，增加了通道数。这⾥将输出通道数与输⼊通道数之⽐称为扩展⽐例（expansion ratio）。
</div>
<div style="font-family: '等线', sans-serif; text-align: justify;">
第2个Ghost模块：减少Channel，以与shortcut路径匹配。然后，使⽤shortcut连接这两个Ghost模
块的输⼊和输出。第⼆个Ghost模块之后不添加ReLU，其他层在每层之后都应⽤了批量归⼀化（BN）
和ReLU⾮线性激活。
</div>

<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;注意：考虑到效率的因素，实作中Ghost模块中的第1阶段的初始卷积是点卷积（Pointwise Convolution）。
</div>

&emsp;&emsp;<font face = "等线" >**代码实现:**
<br/>
&emsp;&emsp;[https://github.com/huawei-noah/Efficient-AI-Backbones](https://github.com/huawei-noah/Efficient-AI-Backbones)

### 四、GhostNet改进EEG SOTA的方案
GhostNet改进EEG SOTA的⽅案：
<div style="font-family: '等线', sans-serif; text-align: justify;">
&emsp;&emsp;GhostNet可完美替代深度可分离卷积，对于包含深度可分离的SOTA：EEGNet、EEG-TCNet模型可以
使⽤GhostNet替代深度可分离卷积。
</div>
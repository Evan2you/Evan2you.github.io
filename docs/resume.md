<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人简历</title>
    <style>
        /* body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        } */

        .container {
            width: 85%;
            margin: 30px auto;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            position: relative; /* 为了让绝对定位的照片相对于容器定位 */
        }

        .header .info {
            text-align: right;
        }

        .info p {
            margin: 0;
            font-size: 1.1em;
        }

        /* 设置右上角照片 */
        .header img {
            position: absolute; /* 使其绝对定位 */
            top: 20px; /* 调整到顶部 */
            right: 20px; /* 调整到右边 */
            width: 6cm;  /* 设置为二寸标准宽度 */
            height: 8.4cm; /* 设置为二寸标准高度 */
            border-radius: 50%;
            border: 1px solid rgb(235, 237, 238); /* 给照片添加边框 */
        }

        ul {
            list-style-type: none;
            padding-left: 0;
        }

        a:hover {
            color: inherit;
            text-decoration: none;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <div>
                <h1>Evan Wang</h1>
                <p>Stay hungry, stay foolish.</p>
            </div>
            <img src="https://raw.githubusercontent.com/Evan2you/Evan2you.github.io/main/docs/images/start_here/yifan.jpg" alt="evan">
        </div>

        <div class="contact section">
            <h2>联系方式</h2>
            <p><strong>电话：</strong>15614662835</p>
            <p><strong>邮箱：</strong><a href="mailto:wang_yifan_sdu@163.com">wang_yifan_sdu@163.com</a></p>
            <p><strong>地址：</strong>山东省青岛市</p>
        </div>

        <div class="education section">
            <h2>教育背景</h2>
            <ul>
                <li><strong>2023.09-2025.04：</strong>山东大学，硕士，机械电子</li>
                <li><strong>2019.09-2023.06：</strong>青岛理工大学，本科，机械设计制造及其自动化</li>
            </ul>
        </div>

        <div class="experience section">
            <h2>实习经历</h2>
            <ul>
                <li>
                    <strong>2024.07-2024.09：</strong>山东昂科斯智能科技有限公司，设备研发
                    <p>负责单通道脑电信号采集板卡的PCB设计，独立完成原理图绘制、布局布线及电磁兼容优化，使用嘉立创EDA实现高精度信号采集模块，并通过硬件测试验证。</p>
                    <p>参与脑电信号预处理算法开发，基于Python设计滤波、去噪及基线校正流程，有效提升原始信号信噪比为后续特征提取与分析提供可靠数据支持。</p>
                </li>
                
        <div class="projects section">
            <h2>项目科研</h2>
            <ul>
                <li>
                    <strong>2023.09-2024.02基于西门子PLC的气动康复辅具控制系统开发：</strong>负责气动肌肉驱动康复辅具的闭环控制设计，基于西门子200smart PLC搭建硬件控制框架，完成气动回路硬件选型及设计并实现气动肌肉的PID反馈调节算法，利用Labview开发了一款多模式康复训练界面，支持临床康复场景下参数灵活配置与实时状态监控。
                </li>
                <li>
                    <strong>2023.09-2024.02八通道脑电信号采集系统设计与实现：</strong>独立完成八通道脑电（EEG）采集板卡硬件设计，包括前端模拟信号调理电路（增益可调仪表放大器、带通滤波）、24位高精度ADC模块及ESP32-S3主控单元；根据采集的信号设计运动想象分类算法。
                </li>
            </ul>
        </div>

        <div class="papers section">
            <h2>论文专利</h2>
            <ul>
                <li>运动态感脑电信号采集分析软件 V1.0 2024SR0550722. <strong>（一作，软件著作权）</strong></li>
                <li>EEG-GSoPNet: A Convolutional Network with Global Second-Order Pooling for Multiclass Classification of Upper Limb Motor Imagery in BCI. <strong>（一作，已录用 ACM 会议待检索）</strong></li>
            </ul>
        </div>

        <div class="honors section">
            <h2>荣誉奖项</h2>
            <ul>
                <li>歌尔杯第二届高校 VR/AR 挑战赛全国一等奖</li>
                <li>2023 年山东省大学生电子设计大赛一等奖</li>
                <li>2024 年山东省机电比赛二等奖</li>
                <li>学业一等奖学金<strong>（研究生）</strong>、国家奖学金、山东省政府奖学金<strong>（本科期间）</strong></li>
            </ul>
        </div>

        <div class="skills section">
            <h2>技能证书</h2>
            <ul>
                <li>英语 CET-4 (560)，CET-6 (497)</li>
                <li>计算机二级Python,Office</li>
                <li>熟悉Fusion360、SolidWorks等三维建模软件、Abaqus 流体力学仿真软件、嘉立创EDA等PCB设计软件</li>
            </ul>
        </div>

        <div class="about section">
            <h2>更多关于我</h2>
            <p>详细信息请访问我的个人网站：<a href="https://evan2you.github.io">Evan2you.github.io</a></p>
        </div>

    </div>

</body>
</html>

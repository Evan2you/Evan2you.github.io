<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人简历</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 85%;
            margin: 30px auto;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        h2 {
            color: #4CAF50;
            font-size: 1.8em;
            margin-top: 20px;
        }
        p, ul {
            color: #333;
            font-size: 1.1em;
            margin-bottom: 10px;
        }
        .section {
            margin-bottom: 30px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .header img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 3px solid #4CAF50;
        }
        .header .info {
            text-align: right;
        }
        .info p {
            margin: 0;
            font-size: 1.1em;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        a {
            text-decoration: none;
            color: #4CAF50;
        }
        a:hover {
            text-decoration: underline;
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
            <img src="images/evan.jpg" alt="Evan">
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
                    <p>负责单通道脑电信号采集板卡的 PCB 设计，独立完成原理图绘制、布局布线及电磁兼容优化。</p>
                    <p>参与脑电信号预处理算法开发，基于 Python 设计滤波、去噪及基线校正流程。</p>
                </li>
                <li>
                    <strong>2023.09-2024.02：</strong>基于西门子 PLC 的气动康复辅具控制系统开发
                    <p>负责气动肌肉驱动康复辅具的闭环控制设计，基于西门子 PLC 搭建硬件控制框架。</p>
                </li>
            </ul>
        </div>

        <div class="projects section">
            <h2>项目科研</h2>
            <ul>
                <li>
                    <strong>八通道脑电信号采集系统设计与实现：</strong>独立完成脑电信号采集板卡硬件设计，包括前端模拟信号调理电路及高精度 ADC 模块。
                </li>
                <li>
                    <strong>运动想象脑电信号采集分析软件：</strong>一作，软件著作权，针对运动想象任务进行脑电信号采集与分析。
                </li>
            </ul>
        </div>

        <div class="papers section">
            <h2>论文专利</h2>
            <ul>
                <li>运动态感脑电信号采集分析软件 V1.0 2024SR0550722</li>
                <li>EEG-GSoPNet: A Convolutional Network with Global Second-Order Pooling for Multiclass Classification of Upper Limb Motor Imagery in BCI（已录用 ACM 会议）</li>
            </ul>
        </div>

        <div class="honors section">
            <h2>荣誉奖项</h2>
            <ul>
                <li>歌尔杯第二届高校 VR/AR 挑战赛全国一等奖</li>
                <li>2023 年山东省大学生电子设计大赛一等奖</li>
                <li>2024 年山东省机电比赛二等奖</li>
            </ul>
        </div>

        <div class="skills section">
            <h2>技能证书</h2>
            <ul>
                <li>英语 CET-4 (560)，CET-6 (497)</li>
                <li>编程语言：Python</li>
                <li>三维建模软件：Fusion360，SolidWorks</li>
                <li>流体力学仿真软件：Abaqus</li>
                <li>EDA 软件：嘉立创</li>
            </ul>
        </div>

        <div class="about section">
            <h2>更多关于我</h2>
            <p>详细信息请访问我的个人网站：<a href="https://evan2you.github.io">Evan2you.github.io</a></p>
        </div>

    </div>

</body>
</html>

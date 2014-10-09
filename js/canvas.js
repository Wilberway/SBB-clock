var clock = document.getElementById('clock');
		var cxt = clock.getContext('2d');

		function drawClock(){
			//清除画布
			cxt.clearRect(0,0,500,500);
			var now = new Date();
			var sec = now.getSeconds();
			var min = now.getMinutes();
			var hour = now.getHours();
			//小时必须获取浮点类型（小时+分数转化成的小时）
			min = min + sec/60;
			hour = hour + min/60;
			//问题 19:23:30
			//将24小时进制转换为12小时
			hour = hour>12?hour-12:hour;

			//表盘（蓝色）
			cxt.lineWidth = 2;
			cxt.strokeStyle = "#ababab";
			cxt.beginPath();
			cxt.arc(250,240,200,0,360,false);
			cxt.closePath();
			cxt.fillStyle = "#e7e7e7";
			cxt.fill();
			cxt.stroke();
			//刻度
				//时刻度
				for (var i = 0; i < 12; i++) {
					cxt.save();
					//设置时刻度的粗细
					cxt.lineWidth = 15;
					//设置时刻度的颜色
					cxt.strokeStyle = "#242424";
					//先设置0，0点
					cxt.translate(250,240);
					//在设置旋转角度
					cxt.rotate(i*30*Math.PI/180);//角度*Math.PI/180=弧度
					cxt.beginPath();
					cxt.moveTo(0,-150);
					cxt.lineTo(0,-194)
					cxt.closePath();
					cxt.stroke();
					cxt.restore();
				};
				//分刻度
				for (var i = 0; i < 60; i++) {
					cxt.save();
					//设置分刻度的粗细
					cxt.lineWidth = 3;
					//设置分刻度的颜色
					cxt.strokeStyle = "#242424";
					//设置0，0点
					cxt.translate(250,240);
					//在设置旋转角度
					cxt.rotate(i*6*Math.PI/180);//角度*Math.PI/180=弧度
					//画分针刻度
					cxt.beginPath();
					cxt.moveTo(0,-178);
					cxt.lineTo(0,-194)
					cxt.closePath();
					cxt.stroke();
					cxt.restore();
				};
			//时针阴影
				cxt.save();
				//设置时针风格
				cxt.lineWidth = 17;
				//设置时针的颜色
				cxt.strokeStyle = "#000000";
				//设置0,0点
				cxt.translate(250,245);
				//设置旋转角度
				cxt.rotate(hour*30*Math.PI/180);
				cxt.beginPath();
				cxt.moveTo(0,-110);
				cxt.lineTo(0,40);
				cxt.closePath();
				cxt.globalAlpha=0.2;
				cxt.stroke();
				
				cxt.restore();
			//分针阴影
				cxt.save();
				//设置分针风格
				cxt.lineWidth = 17;
				//设置分针的颜色
				cxt.strokeStyle = "#000000";
				//设置0,0点
				cxt.translate(250,245);
				//设置旋转角度
				cxt.rotate(min*6*Math.PI/180);
				cxt.beginPath();
				cxt.moveTo(0,-170);
				cxt.lineTo(0,60);
				cxt.closePath();
				cxt.globalAlpha=0.2;
				cxt.stroke();
				cxt.restore();
			//秒针阴影
				cxt.save();
				//设置秒针风格
				cxt.lineWidth = 6;
				//设置秒针的颜色
				cxt.strokeStyle = "#000000";
				//设置0,0点
				cxt.translate(250,245);
				//设置旋转角度
				cxt.rotate(sec*6*Math.PI/180);
				//画图
				cxt.beginPath();
				cxt.moveTo(0,-145);
				cxt.lineTo(0,30);
				cxt.closePath();
				cxt.globalAlpha=0.2;
				cxt.stroke();
				//画出时针 分针 秒针的交叉点
				cxt.beginPath();
				cxt.arc(0,0,4,0,360,false);
				cxt.closePath();
				//设置填充样式
				cxt.fillStyle = "#000000";
				cxt.fill();
				cxt.stroke();
				
				//设置笔触样式(秒针已设置)
				
				//设置秒针前端的小圆点
				cxt.beginPath();
				cxt.arc(0,-133,12,0,360,false);
				cxt.closePath();
				//设置填充样式
				cxt.fillStyle = "#999999";
				cxt.fill();
				//设置笔触样式(秒针已设置)
				cxt.stroke();
				cxt.restore();
			//时针
				cxt.save();
				//设置时针风格
				cxt.lineWidth = 15;
				//设置时针的颜色
				cxt.strokeStyle = "#242424";
				//设置0,0点
				cxt.translate(250,240);
				//设置旋转角度
				cxt.rotate(hour*30*Math.PI/180);
				cxt.beginPath();
				cxt.moveTo(0,-110);
				cxt.lineTo(0,40);
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
			
			//分针
				cxt.save();
				//设置分针风格
				cxt.lineWidth = 15;
				//设置分针的颜色
				cxt.strokeStyle = "#242424";
				//设置0,0点
				cxt.translate(250,240);
				//设置旋转角度
				cxt.rotate(min*6*Math.PI/180);
				cxt.beginPath();
				cxt.moveTo(0,-170);
				cxt.lineTo(0,60);
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
			
			//秒针
				cxt.save();
				//设置秒针风格
				cxt.lineWidth = 4;
				//设置秒针的颜色
				cxt.strokeStyle = "#c40010";
				//设置0,0点
				cxt.translate(250,240);
				//设置旋转角度
				cxt.rotate(sec*6*Math.PI/180);
				//画图
				cxt.beginPath();
				cxt.moveTo(0,-145);
				cxt.lineTo(0,30);
				cxt.closePath();
				cxt.stroke();
				//画出时针 分针 秒针的交叉点
				cxt.beginPath();
				cxt.arc(0,0,4,0,360,false);
				cxt.closePath();
				//设置填充样式
				cxt.fillStyle = "#c40010";
				cxt.fill();
				cxt.stroke();
				
				//设置笔触样式(秒针已设置)
				
				//设置秒针前端的小圆点
				cxt.beginPath();
				cxt.arc(0,-133,12,0,360,false);
				cxt.closePath();
				//设置填充样式
				cxt.fillStyle = "#c40010";
				cxt.fill();
				//设置笔触样式(秒针已设置)
				cxt.stroke();
				cxt.beginPath();
				cxt.arc(0,0,0,0,360,false);
				cxt.closePath();
				cxt.strokeStyle = "#cb5659";
				cxt.stroke();
				cxt.restore();
		};
		//使用setInterval(代码,毫秒时间) 让时钟懂起来
		drawClock();
		setInterval(drawClock,1000);
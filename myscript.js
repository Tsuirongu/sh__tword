var yap=new XMLSerializer().serializeToString(document.querySelector('body'))
var yap1=yap.replace(/翻译/g,"啦啦啦");
document.querySelector('body').innerHTML =yap1;

//我花了很长事件来精简代码，把所有的内容全都精简成三行
//第一行是获取所有的body内容
//第二行是把指定关键词全局替换
//第三行是把替换后的内容写入
//这个现在就是一个小demo了
//接下来的任务就是丰富第二行代码（丰富词语库）
//需要迭代替换，这个就是后话了。
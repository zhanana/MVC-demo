const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n");
$number.text(n || 100)


$button1.on("click" ,()=>{
    // console.log(typeof $number.text()) //判断$number.text()的数据类型，instanceof亦是
    let n = parseInt($number.text());
    n += 1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button2.on("click" , ()=>{
    let n = parseInt($number.text());
    n -=1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button3.on("click", ()=>{
    let n = parseInt($number.text());
    n *=2;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button4.on("click", ()=>{
    let n = parseInt($number.text());
    n /=2;
    localStorage.setItem("n",n);
    $number.text(n);
})
// 获取点击相应的li的index值，然后对index和非index进行区分
const $tabBar = $("#app2 #tab-bar")
const $tabContent = $("#app2 #tab-content")

$tabBar.on("click","li",(e)=>{
    const $li = $(e.currentTarget);
    $li.addClass('selected')
    .siblings().removeClass('selected');
    const index = $li.index();
    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active');
})
$tabBar.children().eq(0).trigger('click');
$(document).ready(function(){
$("#question-section").hide();
$(".question-row-2").hide();
$(".question-row-3").hide();
$(".question-row-4").hide();
$(".question-row-5").hide();
$(".answer-section").hide();
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
var form=$("#first-form");
form.validate({
rules: {
                        "fname" : {
                            required : true,
                        }
        },
messages: {
                        "fname": {
                            required: "Field cannot be blank",
                        }
         }
 });
var marks;
$("#first-btn").click(function(){
	 if(form.valid())
    {
	var name=$("#fname").val();
	console.log(name);
	console.log("fdhdhjhfdjf");
	$(".r-fname").text("Welcome" + "" +name);
	$("#question-section").show();
	$("#front-page").hide();
}
});
$(".first-next").click(function(){
	$(".question-row-2").show();
	$(".question-row-1").hide();
});
$(".first-previous").click(function(){
	$(".question-row-1").show();
	$(".question-row-2").hide();
});
$(".second-next").click(function(){
	$(".question-row-3").show();
	$(".question-row-2").hide();
});
$(".second-previous").click(function(){
	$(".question-row-2").show();
	$(".question-row-3").hide();
});
$(".third-next").click(function(){
	$(".question-row-4").show();
	$(".question-row-3").hide();
});
$(".third-previous").click(function(){
	$(".question-row-3").show();
	$(".question-row-4").hide();
});
$(".fourth-next").click(function(){
	$(".question-row-5").show();
	$(".question-row-4").hide();
});
$(".fourth-previous").click(function(){
	$(".question-row-4").show();
	$(".question-row-5").hide();
});
$(".fifth-next").click(function(){
	 var r=confirm("Are you sure want to submit");
    if(r==true)
    {
	$(".question-row-5").hide();
	$(".answer-section").show(500);
	$(".heading-section").hide();
	var count=0;
	var one=$("input:radio[name='one']:checked").val();
	var two=$("input:radio[name='two']:checked").val();
	var three=$("input:radio[name='three']:checked").val();
	var four=$("input:radio[name='four']:checked").val();
	var five=$("input:radio[name='five']:checked").val();
	$(".r-one").text("Your answer is " + one);
	$(".r-two").text("Your answer is " + two);
	$(".r-three").text("Your answer is " + three);
	$(".r-four").text("Your answer is " + four);
	$(".r-five").text("Your answer is " + five);
	//cbbba
	if(one=="c")
	{
		count++;
	}
	if(two=="b")
	{
		count++;
	}
	if(three=="b")
	{
		count++;
	}
	if(four=="b")
	{
		count++;
	}
	if(five=="a")
	{
		count++;
	}
	if(count==0)
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=0;
	}
	else if(count==1)
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=1;
	}
	else if(count==2)
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=2;
	}
	else if(count==3)
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=3;
	}
	else if (count==4)
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=4;
	}
	else
	{
		$(".r-answer-info").text("You have correctly answered " + count + " " +"out of 5");
		marks=5;
	}
	console.log(count);
	console.log(marks);
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){
	      
      		Morris.Bar({
         	element: 'bar-example',
         	data: [
            {y: count, a: marks},
            
         	],
         xkey: 'y',
         ykeys: 'a',
         labels: ['Total Correct Questions: ', 'Conversions']
      });
  
});
});
}
});	
});
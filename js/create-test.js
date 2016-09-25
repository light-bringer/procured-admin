var ct = {
	"college":"",
	"date_of_test":"",
	"crit_10":"",
	"crit_12":"",
	"cgpa":"",
	"test_format":"",
	"ctc":"",
	"bond_time":"",
	"bond_amt":"",
	"reqs":"",
	"test_id":""
}

function getFormat(){

	var apti = document.getElementById('cb_wt_apti');
	var bev = document.getElementById('cb_wt_bev');
	var reas = document.getElementById('cb_wt_psycho');
	var tech = document.getElementById('cb_wt_tech');
	var verb = document.getElementById('cb_wt_verb');

	var format =[apti, bev, reas, tech, verb];

	var ques= {"apti":"no", "bev":"no", "psycho":"no", "tech":"no", "verb":"no"};

	for(var ix in format){
		var str = format[ix].value;
		if(format[ix].checked){
			ques[str] = "yes";
		}
	}

	localStorage.setItem("quesFormat",JSON.stringify(ques));
	localStorage.setItem("qfix",0);

	return ques;

}

//verify date

// function func(){
// 	var sel = new Date ($(".md-datepicker-input").val());
// 	var now = new Date();
// 	now.setHours(0,0,0,0);
// 	if(sel<now){
// 		alert("NO!");
// 	}
// }

function onSubmit(){
	ct.college= $("#ddCollege").val();
	ct.date_of_test=$(".md-datepicker-input").val();
	ct.crit_10 = $("#range10").text();
	ct.crit_12 = $("#range12").text();
	ct.cgpa = $("#range16").text();
	ct.test_format = getFormat();
	ct.ctc = $("#ctc").val();
	ct.bond_time = $("#bond_time").val();
	ct.bond_amt = $("#bond_amt").val();
	ct.reqs = $("#reqs").val();

	window.location.href = "create-qs.html";
}
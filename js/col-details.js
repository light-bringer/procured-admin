// Upcoming tests
var companies = {
company1: [
     {
	"name": "Nitte Meenakshi Institute of Technology",
	"city": "Bangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"09",
	"dot_day":"27",
	"comp":1
}, {
	"name": "National Institute of Technology",
	"city": "Surat",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"09",
	"dot_day":"27",
	"comp":1
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"11",
	"dot_day":"17",
	"comp":1
}
   ],
   company2: [
     {
	"name": "Nitte Meenakshi AM Institute of Technology",
	"city": "Mangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"09",
	"dot_day":"29",
	"comp":2
}, {
	"name": "National Institute of Technology",
	"city": "Trichy",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2017",
	"dot_month":"01",
	"dot_day":"27",
	"comp":2
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"10",
	"dot_day":"17",
	"comp":2
}
   ]
};

//col-details

	var colObj;
	var company=localStorage.getItem("company");
	var college=localStorage.getItem("college");
	$.each(companies, function(keys, values){
		if(values[company].comp==college) colObj=values[company];
	});

	var dets = 	"<br>"
						+"<h2 id=\"col_name\" style=\"text-align: center;\">"+colObj.name+"</h2>"
                        +"<br><br>"
                        +"<div class=\"table-responsive\">"
                        +"<table class=\"table table-hover table-striped\">"
                        +"<tbody>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">City</td>"
                        +"<td align=\"right\">"+colObj.city+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">No. of Students</td>"
                        +"<td align=\"right\">"+colObj.students+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Date of Test</td>"
                        +"<td align=\"right\">"+ month(colObj.dot_month) + " " + colObj.dot_day+ ", " + colObj.dot_year + "</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Point of Contact</td>"
                        +"<td align=\"right\">"+colObj.poc_name+"</td>"
                        +"</tr>"
                        +"<td style=\"font-weight:bold;\">POC Email Id</td>"
                        +"<td align=\"right\">"+colObj.poc_email+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">POC Phone No.</td>"
                        +"<td align=\"right\">"+colObj.poc_phno+"</td>"
                        +"</tr>"
                        +"</tbody>"
                        +"</table>"
                        +"</div>"
                        +"<br>";
				 $("#fill_col").prepend(dets);


function month(num){
	switch(num){
		case "01":
	       return ("January");
	       break;
	case "02":
	       return ("February");
	       break;
	case "03":
	       return ("March");
	       break;
	case "04":
	       return ("April");
	       break;
	case "05":
	       return ("May");
	       break;
	case "06":
	       return ("June");
	       break;
	case "07":
	       return ("July");
	       break;
	case "08":
	       return ("August");
	       break;
	case "09":
	       return ("September");
	       break;
	case "10":
	       return ("October");
	       break;
	case "11":
	       return ("November");
	       break;
	case "12":
	       return ("December");
	       break;
	}
}

function getColour(index){
	switch(index){
		case 0 : return "#1abc9c";
				break;
		case 1 : return "#34495e";
				break;
		case 2 : return "#2ecc71";
				break;
		case 3 : return "#1abc9c";
				break;
		case 4 : return "#9b59b6";
				break;
		case 5 : return "#95a5a6";
				break;
		// case 6 : return "#34495e";
		// 		break;
		// case 7 : return "#e67e22";
		// 		break;
		// case 8 : return "#9b59b6";
		// 		break;
		default: return "#e74c3c";
				break;
	}
}

function viewDetails(ix,cix){
	// var data = kx+"_"+objIx;
	// window.loaction.href="col-details.htm?data="+data;
	console.log(cix+"Hello"+ix);
	localStorage.setItem('company', ix);
	localStorage.setItem('college', cix);
	window.location.href="col-details.html";
}
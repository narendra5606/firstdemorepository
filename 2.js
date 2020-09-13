function myFunctionm(){
 let asha_yes_button = document.getElementById("asha_yes_button");
 let asha_no_button = document.getElementById("asha_no_button");
 var asha_temp = " ";var image_temp = " " ; var tracking_temp=" ";var cpsia_temp=" ";
 var test_report_age_temp=" ";var test_report_image_temp=" ";var outdated_temp=" ";var cpc_temp=" ";
 var temp_41=" ";var temp_42=" ";var temp_4351=" "; var temp_4352=" ";var temp_47=" ";var temp_49=" ";var temp_71=" ";temp_tt=" ";temp_phthalate=" ";
 
 if(asha_yes_button.checked == true){
	 asha_temp = " ";
	asha_temp = asha_yes_button.value;
   }
  else if(asha_no_button.checked == true){
     asha_temp = " ";
	 asha_temp = asha_no_button.value;	 
	 }
	 
 let image_assist_yes = document.getElementById("image_assist_yes");
 let image_assist_no = document.getElementById("image_assist_no");
 if(image_assist_yes.checked == true){
	image_temp = " ";
	image_temp = image_assist_yes.value;
   }
  else if(image_assist_no.checked == true){
     image_temp = " ";
	 image_temp = image_assist_no.value;	 
	 }

 let tracking_labels_yes = document.getElementById("tracking_labels_yes");
 let tracking_labels_no = document.getElementById("tracking_labels_no");
 let tracking_labels_tf = document.getElementById("tracking_labels_tf");
 if(tracking_labels_yes.checked == true){
	tracking_temp = " ";
	tracking_temp = tracking_labels_yes.value;
   }
  else if(tracking_labels_no.checked == true){
     tracking_temp = " ";
	 tracking_temp = tracking_labels_no.value;	 
	 }
 
 var product_packaging_age_tf = document.getElementById("product_packaging_age_tf");
 var Manufacturer_minimum_age_tf = document.getElementById("Manufacturer_minimum_age_tf");
 var Amazon_minimum_age_tf = document.getElementById("Amazon_minimum _age_tf");
 var Title_age_tf = document.getElementById("Title_age_tf");
 var bp_age_tf = document.getElementById("bp_age_tf");
 var Product_description_Age_tf = document.getElementById("Product_description_Age_tf");
 var b = "  1.Product Packaging age: ";  
 var c = "  2.Manufacturer minimum age: ";
 var d = "  3.Amazon minimum age: ";
 var e = "  4.Title age: ";
 var f = "  5.Bullet Points age: "; 
 var g = "  6.Product Description age: ";
  	
 let cpsia_present = document.getElementById("cpsia_present");
 let cpsia_absent = document.getElementById("cpsia_absent");
 if(cpsia_present.checked == true){
	cpsia_temp = " ";
	cpsia_temp = cpsia_present.value;
   }
  else if(cpsia_absent.checked == true){
     cpsia_temp = " ";
	 cpsia_temp = cpsia_absent.value;	 
	 }
 var cpsia = "  7.CPSIA Warning attributes: "	
	
 let test_report_age_yes = document.getElementById("test_report_age_yes");
 let test_report_age_no = document.getElementById("test_report_age_no");
 if(test_report_age_yes.checked == true){
	test_report_age_temp = " ";
	test_report_age_temp = test_report_age_yes.value;
   }
  else if(test_report_age_no.checked == true){
     test_report_age_temp = " ";
	 test_report_age_temp = test_report_age_no.value;	 
	 }
 	
 let test_report_image_yes = document.getElementById("test_report_image_yes");
 let test_report_image_no = document.getElementById("test_report_image_no");
 if(test_report_image_yes.checked == true){
	test_report_image_temp = " ";
	test_report_image_temp = test_report_image_yes.value;
   }
  else if(test_report_image_no.checked == true){
     test_report_image_temp = " ";
	 test_report_image_temp = test_report_image_no.value;	 
	 }
	
let outdated_yes = document.getElementById("outdated_yes");
let outdated_no = document.getElementById("outdated_no");
 if(outdated_yes.checked == true){
	outdated_temp = " ";
	outdated_temp = outdated_yes.value;
   }
  else if(outdated_no.checked == true){
     outdated_temp = " ";
	 outdated_temp = outdated_no.value;	 
	 }
 	
let cpc_yes = document.getElementById("cpc_yes");
let cpc_no = document.getElementById("cpc_no");
 if(cpc_yes.checked == true){
	cpc_temp = " ";
	cpc_temp = cpc_yes.value;
   }
  else if(cpc_no.checked == true){
     cpc_temp = " ";
	 cpc_temp = cpc_no.value;	 
	 }
	
// tests
let pass41 = document.getElementById("4.1_pass");
let fail41 = document.getElementById("4.1_fail");
let missing41 = document.getElementById("4.1_missing");
let nc41 = document.getElementById("4.1_nc");
let nt41 = document.getElementById("4.1_nt");
let nr41 = document.getElementById("4.1_nr");

 if(pass41.checked == true){temp_41 = pass41.value;}
 else if(fail41.checked == true){ temp_41 = fail41.value;}
 else if(missing41.checked == true){ temp_41 = missing41.value;}
 else if(nc41.checked == true){ temp_41 = nc41.value;}
 else if(nt41.checked == true){ temp_41 = nt41.value;}
 else if(nr41.checked == true){ temp_41 = nr41.value;}
 var h ="  1.Sec 4.1: ";
	
let pass42 = document.getElementById("4.2_pass");
let fail42 = document.getElementById("4.2_fail");
let missing42 = document.getElementById("4.2_missing");
let nc42 = document.getElementById("4.2_nc");
let nt42 = document.getElementById("4.2_nt");
let nr42 = document.getElementById("4.2_nr");

 if(pass42.checked == true){temp_42 = pass42.value;}
 else if(fail42.checked == true){ temp_42 = fail42.value;}
 else if(missing42.checked == true){ temp_42 = missing42.value;}
 else if(nc42.checked == true){ temp_42 = nc42.value;}
 else if(nt42.checked == true){ temp_42 = nt42.value;}
 else if(nr42.checked == true){ temp_42 = nr42.value;}
 var i ="  2.Sec 4.2: ";
 
 let pass4351 = document.getElementById("4.3.5.1_pass");
let fail4351 = document.getElementById("4.3.5.1_fail");
let missing4351 = document.getElementById("4.3.5.1_missing");
let nc4351 = document.getElementById("4.3.5.1_nc");
let nt4351 = document.getElementById("4.3.5.1_nt");
let nr4351 = document.getElementById("4.3.5.1_nr");

 if(pass4351.checked == true){temp_4351 = pass4351.value;}
 else if(fail4351.checked == true){ temp_4351 = fail4351.value;}
 else if(missing4351.checked == true){ temp_4351 = missing4351.value;}
 else if(nc4351.checked == true){ temp_4351 = nc4351.value;}
 else if(nt4351.checked == true){ temp_4351 = nt4351.value;}
 else if(nr4351.checked == true){ temp_4351 = nr4351.value;}
 var j ="  3.Sec 4.3.5.1: ";

let pass4352 = document.getElementById("4.3.5.2_pass");
let fail4352 = document.getElementById("4.3.5.2_fail");
let missing4352 = document.getElementById("4.3.5.2_missing");
let nc4352 = document.getElementById("4.3.5.2_nc");
let nt4352 = document.getElementById("4.3.5.2_nt");
let nr4352 = document.getElementById("4.3.5.2_nr");

 if(pass4352.checked == true){temp_4352 = pass4352.value;}
 else if(fail4352.checked == true){ temp_4352 = fail4352.value;}
 else if(missing4352.checked == true){ temp_4352 = missing4352.value;}
 else if(nc4352.checked == true){ temp_4352 = nc4352.value;}
 else if(nt4352.checked == true){ temp_4352 = nt4352.value;}
 else if(nr4352.checked == true){ temp_4352 = nr4352.value;}
 var k ="  4.Sec 4.3.5.2: ";

let pass47 = document.getElementById("4.7_pass");
let fail47 = document.getElementById("4.7_fail");
let missing47 = document.getElementById("4.7_missing");
let nc47 = document.getElementById("4.7_nc");
let nt47 = document.getElementById("4.7_nt");
let nr47 = document.getElementById("4.7_nr");

 if(pass47.checked == true){temp_47 = pass47.value;}
 else if(fail47.checked == true){ temp_47 = fail47.value;}
 else if(missing47.checked == true){ temp_47 = missing47.value;}
 else if(nc47.checked == true){ temp_47 = nc47.value;}
 else if(nt47.checked == true){ temp_47 = nt47.value;}
 else if(nr47.checked == true){ temp_47 = nr47.value;}
 var l ="  5.Sec 4.7: ";
	
let pass49 = document.getElementById("4.9_pass");
let fail49 = document.getElementById("4.9_fail");
let missing49 = document.getElementById("4.9_missing");
let nc49 = document.getElementById("4.9_nc");
let nt49 = document.getElementById("4.9_nt");
let nr49 = document.getElementById("4.9_nr");

 if(pass49.checked == true){temp_49 = pass49.value;}
 else if(fail49.checked == true){ temp_49 = fail49.value;}
 else if(missing49.checked == true){ temp_49 = missing49.value;}
 else if(nc49.checked == true){ temp_49 = nc49.value;}
 else if(nt49.checked == true){ temp_49 = nt49.value;}
 else if(nr49.checked == true){ temp_49 = nr49.value;}
 var m ="  6.Sec 4.9: ";

let pass71 = document.getElementById("7.1_pass");
let fail71 = document.getElementById("7.1_fail");
let missing71 = document.getElementById("7.1_missing");
let nc71 = document.getElementById("7.1_nc");
let nt71 = document.getElementById("7.1_nt");
let nr71 = document.getElementById("7.1_nr");

 if(pass71.checked == true){temp_71 = pass71.value;}
 else if(fail71.checked == true){ temp_71 = fail71.value;}
 else if(missing71.checked == true){ temp_71 = missing71.value;}
 else if(nc71.checked == true){ temp_71 = nc71.value;}
 else if(nt71.checked == true){ temp_71 = nt71.value;}
 else if(nr71.checked == true){ temp_71 = nr71.value;}
 var n ="  7.Sec 7.1/CPSIA 103: ";
 
 let passtt = document.getElementById("tt_pass");
let failtt = document.getElementById("tt_fail");
let missingtt = document.getElementById("tt_missing");
let nctt = document.getElementById("tt_nc");
let nttt = document.getElementById("tt_nt");
let nrtt = document.getElementById("tt_nr");

 if(passtt.checked == true){temp_tt = passtt.value;}
 else if(failtt.checked == true){ temp_tt = failtt.value;}
 else if(missingtt.checked == true){ temp_tt = missingtt.value;}
 else if(nctt.checked == true){ temp_tt = nctt.value;}
 else if(nttt.checked == true){ temp_tt = nttt.value;}
 else if(nrtt.checked == true){ temp_tt = nrtt.value;}
 var o ="  9.Torque/Tension Test : ";

let passphthalate = document.getElementById("phthalate_pass");
let failphthalate = document.getElementById("phthalate_fail");
let missingphthalate = document.getElementById("phthalate_missing");
let ncphthalate = document.getElementById("phthalate_nc");
let nphthalatet = document.getElementById("phthalate_nt");
let nrphthalate = document.getElementById("phthalate_nr");

 if(passphthalate.checked == true){temp_phthalate = passphthalate.value;}
 else if(failphthalate.checked == true){ temp_phthalate = failphthalate.value;}
 else if(missingphthalate.checked == true){ temp_phthalate = missingphthalate.value;}
 else if(ncphthalate.checked == true){ temp_phthalate = ncphthalate.value;}
 else if(nphthalatet.checked == true){ temp_phthalate = nphthalatet.value;}
 else if(nrphthalate.checked == true){ temp_phthalate = nrphthalate.value;}
 var p ="  8.Phthalate : ";
 
 var findings_ta = document.getElementById("findings_ta");
 
 var tests = "9. Test Result : Pass/Fail/nc/NT/NR :"
	var a = document.getElementById("tf");
	a.value = document.getElementById("st").innerHTML + asha_temp + '\n' +
	          document.getElementById("st1").innerHTML + image_temp + '\n' +
			  document.getElementById("tracking_labels").innerHTML + tracking_temp + '\t' + tracking_labels_tf.value + '\n' +
			  document.getElementById("csi_attributes").innerHTML + '\n' +
              b + product_packaging_age_tf.value +'\n' +
              c + Manufacturer_minimum_age_tf.value +'\n' + 			  
	          d + Amazon_minimum_age_tf.value +'\n' +
			  e + Title_age_tf.value +'\n' +
			  f + bp_age_tf.value +'\n' +
			  g + Product_description_Age_tf.value +'\n' +
              cpsia + cpsia_temp + '\n' +
              document.getElementById("test_report_age").innerHTML + test_report_age_temp + '\n' +
              document.getElementById("test_report_image").innerHTML + test_report_image_temp + '\n'+
              document.getElementById("outdated").innerHTML + outdated_temp + '\n'+		  
              document.getElementById("cpc").innerHTML + cpc_temp + '\n'+ tests + '\n' +
			  h + temp_41 + '\n' +
			  i + temp_42 + '\n' +
              j + temp_4351 + '\n' +
              k + temp_4352 + '\n' +
              l + temp_47 + '\n' +
              m + temp_49 + '\n' +
              n + temp_71 + '\n' +
			  p + temp_phthalate + '\n' +
              o + temp_tt + '\n' +
              document.getElementById("findings").innerHTML +'\n'+ findings_ta.value ;			  




  			  
 // a.select();
 // a.setSelectionRange(0, 99999)
  //copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
 // document.execCommand("copy");

}

function copy(){
	var copy = document.getElementById("tf");
	copy.select();
	copy.setSelectionRange(0, 99999)
  //copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
 // alert("Copied the text: " + copy.value);
}

function reset(){
document.getElementById("product_packaging_age_tf").value = " ";
document.getElementById("Manufacturer_minimum_age_tf").value = " ";
document.getElementById("Amazon_minimum _age_tf").value = " ";
document.getElementById("Title_age_tf").value = " ";
document.getElementById("bp_age_tf").value = " ";
document.getElementById("Product_description_Age_tf").value = " ";


document.getElementById("asha_yes_button").checked = false;
document.getElementById("asha_no_button").checked = false;

document.getElementById("image_assist_yes").checked = false;
document.getElementById("image_assist_no").checked = false;

document.getElementById("tracking_labels_yes").checked = false;
document.getElementById("tracking_labels_no").checked = false;

document.getElementById("test_report_age_yes").checked = false;
document.getElementById("test_report_age_no").checked = false;

document.getElementById("test_report_image_yes").checked = false;
document.getElementById("test_report_image_no").checked = false;

document.getElementById("outdated_yes").checked = false;
document.getElementById("outdated_no").checked = false;

document.getElementById("cpc_yes").checked = false;
document.getElementById("cpc_no").checked = false;

document.getElementById("4.1_pass").checked = false;
document.getElementById("4.1_fail").checked = false;
document.getElementById("4.1_missing").checked = false;
document.getElementById("4.1_nc").checked = false;
document.getElementById("4.1_nt").checked = false;
document.getElementById("4.1_nr").checked = false;

document.getElementById("4.2_pass").checked = false;
document.getElementById("4.2_fail").checked = false;
document.getElementById("4.2_missing").checked = false;
document.getElementById("4.2_nc").checked = false;
document.getElementById("4.2_nt").checked = false;
document.getElementById("4.2_nr").checked = false;

document.getElementById("4.3.5.1_pass").checked = false;
document.getElementById("4.3.5.1_fail").checked = false;
document.getElementById("4.3.5.1_missing").checked = false;
document.getElementById("4.3.5.1_nc").checked = false;
document.getElementById("4.3.5.1_nt").checked = false;
document.getElementById("4.3.5.1_nr").checked = false;

document.getElementById("4.3.5.2_pass").checked = false;
document.getElementById("4.3.5.2_fail").checked = false;
document.getElementById("4.3.5.2_missing").checked = false;
document.getElementById("4.3.5.2_nc").checked = false;
document.getElementById("4.3.5.2_nt").checked = false;
document.getElementById("4.3.5.2_nr").checked = false;

document.getElementById("4.7_pass").checked = false;
document.getElementById("4.7_fail").checked = false;
document.getElementById("4.7_missing").checked = false;
document.getElementById("4.7_nc").checked = false;
document.getElementById("4.7_nt").checked = false;
document.getElementById("4.7_nr").checked = false;

document.getElementById("4.9_pass").checked = false;
document.getElementById("4.9_fail").checked = false;
document.getElementById("4.9_missing").checked = false;
document.getElementById("4.9_nc").checked = false;
document.getElementById("4.9_nt").checked = false;
document.getElementById("4.9_nr").checked = false;

document.getElementById("7.1_pass").checked = false;
document.getElementById("7.1_fail").checked = false;
document.getElementById("7.1_missing").checked = false;
document.getElementById("7.1_nc").checked = false;
document.getElementById("7.1_nt").checked = false;
document.getElementById("7.1_nr").checked = false;

document.getElementById("phthalate_pass").checked = false;
document.getElementById("phthalate_fail").checked = false;
document.getElementById("phthalate_missing").checked = false;
document.getElementById("phthalate_nc").checked = false;
document.getElementById("phthalate_nt").checked = false;
document.getElementById("phthalate_nr").checked = false;

document.getElementById("tt_pass").checked = false;
document.getElementById("tt_fail").checked = false;
document.getElementById("tt_missing").checked = false;
document.getElementById("tt_nc").checked = false;
document.getElementById("tt_nt").checked = false;
document.getElementById("tt_nr").checked = false;

document.getElementById("cpsia_present").checked = false;
document.getElementById("cpsia_absent").checked = false;

document.getElementById("tracking_labels_tf").value = " ";
document.getElementById("findings_ta").value = " ";
document.getElementById("tf").value = " ";
}

 
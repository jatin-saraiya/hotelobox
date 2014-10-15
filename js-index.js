//------------------------------
//Picker
//------------------------------

//jQuery(function() {
//"use strict";
//	jQuery( "#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8" ).datepicker();
//});


//function syncDates(){
//	jQuery("#datepicker2").datepicker('option','minDate',jQuery("#datepicker").datepicker( "getDate" ));
//  }
//jQuery('#datepicker').change(syncDates);





//------------------------------
//Custom Select
//------------------------------
jQuery(document).ready(function(){
"use strict";
	jQuery('.mySelectBoxClass').customSelect();

	/* -OR- set a custom class name for the stylable element */
	//jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

//jQuery(document).ready(function(){
//"use strict";
//	var currentDate = $.datepicker.formatDate('yy/mm/dd', new Date());
//	//alert("cuurent date:"+ currentDate);
//});
function mySelectUpdate(){
"use strict";
	setTimeout(function (){
		jQuery('.mySelectBoxClass').trigger('update');
	}, 200);
}
/*Check In and Check Out Logic with Jquery and DatePicker.js*/
//Old Sync Date Function
//function syncDates(){
//	jQuery("#datepicker2").datepicker('option','minDate',jQuery("#datepicker").datepicker( "getDate" ));
//  }
//jQuery('#datepicker').change(syncDates);
function hideError(errP) {
	  $("#" + errP).hide();
  }

$(function() {
	var dateFrom = $("#checkIn");
	var dateTo = $("#checkOut");
	// var prevDateSelected = $("#hdnPrevSelectedDate");
	var prevDateSelected=$(".mySelectCalendar2").datepicker("getDate");
	$(".mySelectCalendar2").datepicker("destroy").datepicker({
		numberOfMonths: 2,
		closeText: 'X',
		onSelect: function(dateText, inst) {
			if (inst.id == 'checkIn') {
				// prevDateSelected.val($(".mySelectCalendar2").datepicker("getDate"));
				d = new Date(prevDateSelected);
				d.setDate(d.getDate() + 1);
			}
			else if (inst.id == 'checkOut') {
				var Indate = new Date($("#checkIn").val());
				var Outdate = new Date($("#checkIn").val());
				var oneDay = 1000 * 60 * 60 * 24;
				var days = (Outdate - Indate) / oneDay;
			}
		}
		, beforeShow: function(input, inst) {
			var d;
			if (inst.id == 'checkIn') {
				d = new Date();
			}
			else if (inst.id == 'checkOut') {
				if(prevDateSelected==""){
					d = new Date();
				} else {
					d = new Date(prevDateSelected);
				}
				d.setDate(d.getDate() + 1);
			}
			else
				d = new Date();
			if (d) return { minDate: d }
		},
		minDate:0
	});
});
/*Validate Search Form...*/
function validateSearch() {
	if ($("#destination1").val() == "") {
		//alert("Please choose destination to search hotels");
		$("#errDestination").show();
		return false;
	}
	if ($("#checkIn").val() == "mm/dd/yyyy") {
		$("#errCheckIn").show();
	//	alert("Please select Check In date to search hotels");	
		return false;
	}
	if ($("#checkOut").val() == "mm/dd/yyyy") {
	//	alert("Please select Check Out date to search hotels");	
		$("#errCheckOut").show();
		return false;
	}
}

/*Validate SignIn*/
function validateSignIn() {
    var hbUserId =  $('#hb_userId').val();
    var hbPwd =  $('#hb_userPwd').val();	
	var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var pwd_regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
	if(!hbUserId.match(email_regex)|| hbUserId.length == 0){
		//alert("Please choose destination to search hotels");
		$("#errUserName").show();
		return false;
	}
	if(!hbPwd.match(pwd_regex)|| hbPwd.length == 0){
		$("#errPwd").show();
	//	alert("Please select Check In date to search hotels");	
		return false;
	}
}
function forgetPassword() {
    var hbUserId =  $('#hb_userId').val();
	var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var pwd_regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
	if(!hbUserId.match(email_regex)|| hbUserId.length == 0){
		//alert("Please choose destination to search hotels");
		$("#errUserName").show();
		return false;
	}
}
/*Validate Register*/
function validateRegister() {
    var hbFName =  $('#hb_fName').val();
    var hbLName =  $('#hb_lName').val();
    var hbUserId =  $('#hb_userId').val();
    var hbUserPwd =  $('#hb_userPwd').val();
    var hbUserPwdConfirm =  $('#hb_userPwdConfirm').val();
    var hbUserMobile =  $('#hb_userMobile').val();
	
	var name_regex = /^[a-zA-Z]+$/;
	var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var pwd_regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
	var mob_regex = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}[0-9][0-9](\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/;
	
	if(!hbFName.match(name_regex)|| hbFName.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_fName").show();
		return false;
	}
	if(!hbLName.match(name_regex)|| hbLName.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_lName").show();
		return false;
	}
	if(!hbUserId.match(email_regex)|| hbUserId.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userId").show();
		return false;
	}
	if(!hbUserPwd.match(pwd_regex)|| hbUserPwd.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userPwd").show();
		return false;
	}
	if(!hbUserPwdConfirm.match(pwd_regex) || hbUserPwdConfirm != hbUserPwd || hbUserPwdConfirm.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userPwdConfirm").show();
		return false;
	}
	if(!hbUserMobile.match(mob_regex)|| hbUserMobile.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userMobile").show();
		return false;
	}	
}
function validateUserProfile() {
    var hbFName =  $('#hb_fName').val();
    var hbLName =  $('#hb_lName').val();
    var hbUserPwd =  $('#hb_userPwd').val();
    var hbUserMobile =  $('#hb_userMobile').val();
	
	var name_regex = /^[a-zA-Z]+$/;
	var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var pwd_regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
	var mob_regex = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}[0-9][0-9](\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/;
	
	if(!hbFName.match(name_regex)|| hbFName.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_fName").show();
		return false;
	}
	if(!hbLName.match(name_regex)|| hbLName.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_lName").show();
		return false;
	}
	if(!hbUserPwd.match(pwd_regex)|| hbUserPwd.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userPwd").show();
		return false;
	}
	if(!hbUserMobile.match(mob_regex)|| hbUserMobile.length == 0){
		//alert("Please choose destination to search hotels");
		$("#err_userMobile").show();
		return false;
	}	
}





  
//------------------------------
//Add rooms
//------------------------------
function displayRooms(){
	var roomVal = jQuery('.selectRoom').val();
	switch(roomVal){
		case '1':
			jQuery('.room2').addClass('out');
			jQuery('.room2').removeClass('in');
			jQuery('.room3').addClass('out');
			jQuery('.room3').removeClass('in');
			jQuery('.room4').addClass('out');
			jQuery('.room4').removeClass('in');
			jQuery('#room2AdulttValue').attr('disabled','true');
			jQuery('#room2ChildtValue').attr('disabled','true');
			jQuery('#room3AdulttValue').attr('disabled','true');
			jQuery('#room3ChildtValue').attr('disabled','true');
			jQuery('#room2Child1tAge').attr('disabled','true');
			jQuery('#room2Child2tAge').attr('disabled','true');	
			jQuery('#room3Child1tAge').attr('disabled','true');
			jQuery('#room3Child2tAge').attr('disabled','true');				
		break;
		case '2':
			jQuery('.room2').addClass('in');
			jQuery('.room2').removeClass('out');
			jQuery('.room3').addClass('out');
			jQuery('.room3').removeClass('in');
			jQuery('.room4').addClass('out');
			jQuery('.room4').removeClass('in');
			jQuery('#room2AdulttValue').removeAttr('disabled');
			jQuery('#room2ChildtValue').removeAttr('disabled');
			jQuery('#room3AdulttValue').attr('disabled','true');
			jQuery('#room3ChildtValue').attr('disabled','true');
			jQuery('#room3Child1tAge').attr('disabled','true');
			jQuery('#room3Child2tAge').attr('disabled','true');				
		break;
		case '3':
			jQuery('.room2').addClass('in');
			jQuery('.room2').removeClass('out');
			jQuery('.room3').addClass('in');
			jQuery('.room3').removeClass('out');
			jQuery('.room4').addClass('out');
			jQuery('.room4').removeClass('in');
			jQuery('#room2AdulttValue').removeAttr('disabled');
			jQuery('#room2ChildtValue').removeAttr('disabled');
			jQuery('#room3AdulttValue').removeAttr('disabled');
			jQuery('#room3ChildtValue').removeAttr('disabled');
		break;
		case '4':
			jQuery('.room2').addClass('in');
			jQuery('.room2').removeClass('out');
			jQuery('.room3').addClass('in');
			jQuery('.room3').removeClass('in');
			jQuery('.room4').addClass('in');
			jQuery('.room4').removeClass('in');
		break;			   
	}
}
jQuery('.selectRoom').change(displayRooms);
jQuery('.modifySearchButton').on("click",displayRooms());

function displayChildRoom1() {
	var displayChildRoom1 = jQuery('.childRoom1').val();
	switch(displayChildRoom1){
		case '0': 
			jQuery('.child1Room1').addClass('out');
			jQuery('.child1Room1').removeClass('in');
			jQuery('.child2Room1').addClass('out');
			jQuery('.child2Room1').removeClass('in');
			jQuery('#room1Child1tAge').attr('disabled','true');
			jQuery('#room1Child2tAge').attr('disabled','true');
		break;
		case '1': 
			jQuery('.child1Room1').addClass('in');
			jQuery('.child1Room1').removeClass('out');
			jQuery('.child2Room1').addClass('out');
			jQuery('.child2Room1').removeClass('in');
			jQuery('#room1Child1tAge').removeAttr('disabled');
			jQuery('#room1Child2tAge').attr('disabled','true');
		break;
		case '2': 
			jQuery('.child1Room1').addClass('in');
			jQuery('.child1Room1').removeClass('out');
			jQuery('.child2Room1').addClass('in');
			jQuery('.child2Room1').removeClass('out');
			jQuery('#room1Child1tAge').removeAttr('disabled');
			jQuery('#room1Child2tAge').removeAttr('disabled');
		break;			   
	}
}
jQuery('.childRoom1').change(displayChildRoom1);

function displayChildRoom2() {
	var displayChildRoom2 = jQuery('.childRoom2').val();
	switch(displayChildRoom2){
		case '0': 
			jQuery('.child1Room2').addClass('out');
			jQuery('.child1Room2').removeClass('in');
			jQuery('.child2Room2').addClass('out');
			jQuery('.child2Room2').removeClass('in');
			jQuery('#room2Child1tAge').attr('disabled','true');
			jQuery('#room2Child2tAge').attr('disabled','true');
		break;
		case '1': 
			jQuery('.child1Room2').addClass('in');
			jQuery('.child1Room2').removeClass('out');
			jQuery('.child2Room2').addClass('out');
			jQuery('.child2Room2').removeClass('in');
			jQuery('#room2Child1tAge').removeAttr('disabled');
			jQuery('#room2Child2tAge').attr('disabled','true');
		break;
		case '2': 
			jQuery('.child1Room2').addClass('in');
			jQuery('.child1Room2').removeClass('out');
			jQuery('.child2Room2').addClass('in');
			jQuery('.child2Room2').removeClass('out');
			jQuery('#room2Child1tAge').removeAttr('disabled');
			jQuery('#room2Child2tAge').removeAttr('disabled');
		break;				   
	}
}
jQuery('.childRoom2').change(displayChildRoom2);

function displayChildRoom3() {
	var displayChildRoom3 = jQuery('.childRoom3').val();
	switch(displayChildRoom3){
		case '0': 
			jQuery('.child1Room3').addClass('out');
			jQuery('.child1Room3').removeClass('in');
			jQuery('.child2Room3').addClass('out');
			jQuery('.child2Room3').removeClass('in');
			jQuery('#room3Child1tAge').attr('disabled','true');
			jQuery('#room3Child2tAge').attr('disabled','true');
		break;
		case '1': 
			jQuery('.child1Room3').addClass('in');
			jQuery('.child1Room3').removeClass('out');
			jQuery('.child2Room3').addClass('out');
			jQuery('.child2Room3').removeClass('in');
			jQuery('#room3Child1tAge').removeAttr('disabled');
			jQuery('#room3Child2tAge').attr('disabled','true');
		break;
		case '2': 
			jQuery('.child1Room3').addClass('in');
			jQuery('.child1Room3').removeClass('out');
			jQuery('.child2Room3').addClass('in');
			jQuery('.child2Room3').removeClass('out');
			jQuery('#room3Child1tAge').removeAttr('disabled');
			jQuery('#room3Child2tAge').removeAttr('disabled');
		break;		
	}
}
jQuery('.childRoom3').change(displayChildRoom3);

function displayChildRoom4() {
	var displayChildRoom4 = jQuery('.childRoom4').val();
          switch(displayChildRoom4)
          {
			   case '0': jQuery('.child1Room4').addClass('out');jQuery('.child1Room4').removeClass('in');jQuery('.child2Room4').addClass('out');jQuery('.child2Room4').removeClass('in');;break;
			   case '1': jQuery('.child1Room4').addClass('in');jQuery('.child1Room4').removeClass('out');jQuery('.child2Room4').addClass('out');jQuery('.child2Room4').removeClass('in');break;
			   case '2': jQuery('.child1Room4').addClass('in');jQuery('.child1Room4').removeClass('out');jQuery('.child2Room4').addClass('in');jQuery('.child2Room4').removeClass('out');break;			   
          }
}
jQuery('.childRoom4').change(displayChildRoom4);

function displayChildRoom5() {
	var displayChildRoom5 = jQuery('.childRoom5').val();
          switch(displayChildRoom5)
          {
			   case '0': jQuery('.child1Room5').addClass('out');jQuery('.child1Room5').removeClass('in');jQuery('.child2Room5').addClass('out');jQuery('.child2Room5').removeClass('in');break;
			   case '1': jQuery('.child1Room5').addClass('in');jQuery('.child1Room5').removeClass('out');jQuery('.child2Room5').addClass('out');jQuery('.child2Room5').removeClass('in');break;
			   case '2': jQuery('.child1Room5').addClass('in');jQuery('.child1Room5').removeClass('out');jQuery('.child2Room5').addClass('in');jQuery('.child2Room5').removeClass('out');break;			   
          }
}
jQuery('.childRoom5').change(displayChildRoom5);



	
//------------------------------
//ROLLOVER
//------------------------------
	
var theSide = 'marginLeft';
var options = {};
options[theSide] = jQuery('.one').width()/2-15;
jQuery(".one")
	.mouseenter(function() {
		jQuery(".mhover", this).addClass( "block" );
		jQuery(".mhover", this).removeClass( "none" );
		jQuery(".icon", this).stop().animate(options, 100);
	})
jQuery(".one").mouseleave(function() {
		jQuery(".mhover", this).addClass( "none" );
		jQuery(".mhover", this).removeClass( "block" );
		jQuery(".icon", this).stop().animate({marginLeft:"0px"}, 100);
	});

function showDestinationResults(dName,dCode){
    //var dName = jQuery("", this).attr("href");
	var tDate = new Date();
	var tDate1 = new Date();
	
    var checkInDaysToAdd = 14;
	var checkOutDaysToAdd = 15;
    tDate.setDate(tDate.getDate() + checkInDaysToAdd);
    tDate1.setDate(tDate1.getDate() + checkOutDaysToAdd);	
    var cindd = tDate.getDate();
    var cinmm = tDate.getMonth() + 1;
    var ciny = tDate.getFullYear();
    var coutdd = tDate1.getDate();
    var coutmm = tDate1.getMonth() + 1;
    var couty = tDate1.getFullYear();	
    var checkInDate = cinmm + '%2F' + cindd + '%2F' + ciny;
	var checkOutDate = coutmm + '%2F' + coutdd + '%2F' + couty;	
	var stringUrl = "/searchHotels.action?hotelMasterDto.isPromotion=true&hotelMasterDto.hotelSearchCriteria.rooms%5B0%5D.adultsCount=1&hotelMasterDto.hotelSearchCriteria.nationality=IN&hotelMasterDto.hotelSearchCriteria.totalRoomCount=1&hotelMasterDto.hotelSearchCriteria.destination="+dCode+"&hotelMasterDto.paginationDto.begin=0&hotelMasterDto.hotelSearchCriteria.searchType=City&hotelMasterDto.paginationDto.end=19&hotelMasterDto.hotelSearchCriteria.minAvailabilityStatus=A&hotelMasterDto.hotelSearchCriteria.dateFormat=M&hotelMasterDto.hotelSearchCriteria.resultsBy=R&hotelMasterDto.hotelSearchCriteria.destinationName="+dName+"&hotelMasterDto.hotelSearchCriteria.checkOutDate="+checkOutDate+"&hotelMasterDto.hotelSearchCriteria.minCategory=Y&hotelMasterDto.hotelSearchCriteria.rooms%5B0%5D.childCount=0&hotelMasterDto.hotelSearchCriteria.checkInDate="+checkInDate+"&hotelMasterDto.paginationDto.itemPerPageResult=20&hotelMasterDto.hotelSearchCriteria.hotelCategory=0";
	//alert(checkInDate +"----"+checkOutDate);
	window.location.href = stringUrl;
}

function showHotelResults(dName,dCode,dHotelName){
    //var dName = jQuery("", this).attr("href");
	var tDate = new Date();
	var tDate1 = new Date();
    var checkInDaysToAdd = 14;
	var checkOutDaysToAdd = 15;
    tDate.setDate(tDate.getDate() + checkInDaysToAdd);
    tDate1.setDate(tDate1.getDate() + checkOutDaysToAdd);	
    var cindd = tDate.getDate();
    var cinmm = tDate.getMonth() + 1;
    var ciny = tDate.getFullYear();
    var coutdd = tDate1.getDate();
    var coutmm = tDate1.getMonth() + 1;
    var couty = tDate1.getFullYear();	
    var checkInDate = cinmm + '%2F' + cindd + '%2F' + ciny;
	var checkOutDate = coutmm + '%2F' + coutdd + '%2F' + couty;
	var stringUrl = "/searchHotels.action?hotelMasterDto.isPromotion=true&hotelMasterDto.hotelSearchCriteria.rooms%5B0%5D.adultsCount=1&hotelMasterDto.hotelSearchCriteria.nationality=IN&hotelMasterDto.hotelSearchCriteria.totalRoomCount=1&hotelMasterDto.hotelSearchCriteria.destination="+dCode+"&hotelMasterDto.paginationDto.begin=0&hotelMasterDto.hotelSearchCriteria.searchType=City&hotelMasterDto.paginationDto.end=19&hotelMasterDto.hotelSearchCriteria.minAvailabilityStatus=A&hotelMasterDto.hotelSearchCriteria.dateFormat=M&hotelMasterDto.hotelSearchCriteria.resultsBy=R&hotelMasterDto.hotelSearchCriteria.destinationName="+dName+"&hotelMasterDto.hotelSearchCriteria.checkOutDate="+checkOutDate+"&hotelMasterDto.hotelSearchCriteria.rooms%5B0%5D.childCount=0&hotelMasterDto.hotelSearchCriteria.minCategory=Y&hotelMasterDto.hotelSearchCriteria.checkInDate="+checkInDate+"&hotelMasterDto.paginationDto.itemPerPageResult=20&hotelMasterDto.hotelSearchCriteria.hotelCategory=0&hotelMasterDto.hotelSearchCriteria.hotelNameForSearch="+dHotelName+"";
alert(stringUrl);
	window.location.href = stringUrl;
	
}
function updateRoomRates(){
	var roomRatesDyna = $('#roomRateDyna').html();
	$('#roomrates').html(roomRatesDyna);

	var tripRoomType = $('#roomType').html();
	$('#tripRoomType').html(tripRoomType);

	var tripdate = $('#travelDate').html();
	$('#hotelRoomDetails').html(tripdate);
	
	var tripTotal = $('#roomRateLowest').html();
	$('#hotelDetailPrice').html(tripTotal);	

}
updateRoomRates();

function guestType() {
	var selectedGuestType = jQuery('input[name=selectUser]:checked').val();
	switch(selectedGuestType){
		case 'registered': 
			jQuery('#registeredUser').addClass('in');
			jQuery('#registeredUser').removeClass('out');
			jQuery('#bookingDetail').addClass('out');
			jQuery('#bookingDetail').removeClass('in');			
		break;
		case 'guest': 
			jQuery('#registeredUser').addClass('out');
			jQuery('#registeredUser').removeClass('in');
			jQuery('#userDetails').removeClass('in');
			jQuery('#userDetails').addClass('out');
			jQuery('#bookingDetail').addClass('in');
			jQuery('#bookingDetail').removeClass('out');
			
		break;  
	  }	
}
jQuery('input[name=selectUser]').change(guestType);



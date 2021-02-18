document.getElementById("thisYear").innerHTML = new Date().getFullYear(); 

function newripple() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").value = account.address;
  document.getElementById("secret").value = account.secret;
  document.getElementById("status").innerHTML = 'Note: <i class="orange">Don\'t share your secret key.</i>';
  document.getElementById("button").innerHTML = 'One more'; 
}



//for xdc address and secret
function newXDC() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address-1").value = account.address;
  document.getElementById("secret-1").value = account.secret;
  document.getElementById("status-1").innerHTML = 'Note: <i class="orange">Don\'t share your secret key.</i>';
  document.getElementById("button").innerHTML = 'One more'; 
}





//show the tab content of whatever option value was selected
$( window ).on( "load", function() {
$('.tab-content').hide();
$('#account-1').show();

$('#select-box').change(function () {
   dropdown = $('#select-box').val();
  $('.tab-content').hide();
  $('#' + "account-" + dropdown).show();                                    
});
});

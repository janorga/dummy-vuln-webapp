 $(document).ready(function () {
     $("#alertbox").hide();
     if (LISTALL==1)
     {
	     //listing listening services
	     for (var i in SENSORS) {
		 $('#tableBody').append('<tr id="row' + i +'">');
		 $('#row' + i).append("<td>" + SENSORS[i].name + "</td>");
		 $('#row' + i).append("<td>" + SENSORS[i].value + "</td>");
		 $('#row' + i).append("<td>" + SENSORS[i].description + "</td>");
		 $('#row' + i).append("<td><button type='button' class='delete btn btn-default' aria-label='Left Align'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>");
		 $('#row' + i).append("<td class='del' id=td"+ i +">" + SENSORS[i].id + "</td>");
		 $('#td' + i).hide();
		 $('#row' + i).append("</td>");
		
		 $('#tableBody').append('</tr>');
	     } 
     }
     else  {
	 $("#alertbox").show();
	 for (var i in SEARCHEDSENSOR) {
		$('#tableBody').append('<tr id="row' + i +'">');
		 $('#row' + i).append("<td>" + SEARCHEDSENSOR[i].name + "</td>");
		 $('#row' + i).append("<td>" + SEARCHEDSENSOR[i].value + "</td>");
		 $('#row' + i).append("<td>" + SEARCHEDSENSOR[i].description + "</td>");
		 $('#row' + i).append("<td><button id='delete' type='button' class='btn btn-default' aria-label='Left Align'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>");
		 $('#row' + i).append("<td class='del' id=td"+ i +">" + SENSORS[i].id + "</td>");
		 $('#td' + i).hide();
		 $('#row' + i).append("</td>");

		 $('#tableBody').append('</tr>');
		}
     }

     $('.alert .close').on('click', function (e) {
         $(this).parent().hide();
     });
     $('.delete').on('click', function (e) {
         var id = "id=" + $(this).parent().parent().find('.del').text();
	 $.ajax({
             type: 'POST',
             url: "./scweb.php",
             data: id,

             success: function (resp) {
		location.reload();
             }
         });
     });

     $('#logout').on('click', function (e) {
	console.log("logout");
     	window.location.href = "login.php?logout=true";
     });


 });

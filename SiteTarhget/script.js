// Efeito Menu

$(document).ready(function()
{
	$("#bt_menu").click(function()
	{
  		if($("#bt_menu").prop("checked", true))
  		{
  			$("#menu").slideDown('slow');
  		}
  		else
  		{
  			$("#menu").slideUp('slow');
  		}
  	});	
});
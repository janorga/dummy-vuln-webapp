<?php 
	session_start(); 
	if (!isset ($_SESSION['userName'])) {
		header('Location: http://'.$_SERVER['HTTP_HOST'].'/scweb/login.htm');
		session_destroy(); 
		exit;
	}
?>

<head>
	<?php include_once("./funcs.php"); ?>

	<!-- Latest compiled and minified Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="./scweb.css">
	<link rel="stylesheet" href="./interfmodal.css">
	<link rel="stylesheet" href="./modal.css">

	<!-- jquery lib -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<!-- Latest compiled and minified Bootstrap JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!--my js -->
	<script src="./scweb.js"></script>
</head>

<body style="padding-top: 0px;">
	<div class="alert alert-info fade in" id="alertbox">
        	<a href="#" class="close" data-dismiss="mydismiss">&times;</a>
       	 	<strong>Resultados encontrados: "<script>document.write(SEARCHEDSENSOR.length)</script>"</strong>
    	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
		    		<h2>Search a sensor</h2>
			    <div id="custom-search-input">
				<form  action="<?php $_SERVER['PHP_SELF']; ?>">
					<div class="input-group col-md-12">
					    <input type="text" name="senName" class="form-control input-lg" placeholder="Name" />
					    <span class="input-group-btn">
						<button class="btn btn-info btn-lg" type="submit">
						    <i class="glyphicon glyphicon-search"></i>
						</button>
					    </span>
					</div>
				</form>	
			    </div>
			</div>
		</div>

		<div class="row">
			<div class="span5">
		    <table class="table table-striped table-condensed">
		          <thead>
		          <tr>
		              <th>Name</th>
		              <th>Value</th>
		              <th>Description</th> 
			      <th>Delete</th>                                         
		          </tr>
		      </thead>   
		      <tbody id="tableBody" >
                            
		      </tbody>
		    </table>
		    </div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<button href="#" data-toggle="modal" data-target="#interfmodal" type="button" class="btn btn-default">Add Sensor</button>
			<button type="button" id="logout" class="btn btn-default">Log out</button>
		</div>
	</div>

	<!-- modal add-->
	<div class="modal fade" id="interfmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="container">
				<div class="col-md-5">
				    <div class="form-area"> 
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> 
					<form role="form" action="./scweb.php" method="post">
					<br style="clear:both">
						<h3 style="margin-bottom: 25px; text-align: center;">New Sensor</h3>
		    				<div class="form-group">
							<input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" id="value" name="value" placeholder="Value" required>
						</div>
						<div class="form-group">
					 		<textarea class="form-control" type="textarea" id="description" name = "description" placeholder="Description" maxlength="140" rows="7"></textarea>
					 	</div>
					    
						<button type="submit" class="btn btn-primary pull-right">Submit Form</button>
					</form>
				    </div>
				</div>
			</div>		
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

	<!-- modal /add-->

</body>


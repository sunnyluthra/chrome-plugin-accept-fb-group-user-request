//IDK if facebook can ban us for making multiple requests
//This funtion is just to be safe, it will reload the page after 10 mins.
//But still no guarantee biradar
$friendThreshold = 1;

function be_safe(){
	console.log('be_safe triggered');
	//delay of 10 min
	setTimeout(function(){location.reload()}, 600000) 
}
function accept_req(){
	console.log('accept_req triggerdfsfed');
	$list = document.querySelectorAll("#pagelet_requests_queue >div> ul > li");
	for(i=0;i<$list.length;i++){
		$present = $list[i].querySelectorAll(".uiList > li")[2].querySelector('a');

		if($present != null){
			$totalFriends = $present.innerHTML;
			$totalFriends = parseInt($totalFriends.replace(/\D+/, ''));
			if($totalFriends>=$friendThreshold){
				$list[i].querySelector("a.selected").click();
				//$present.click();
			}
		}

	 // 	if($present!=null&&undefined!==$present){
	 // 		$name = $list[i].querySelector(".fsl.fwb.fcb > a").innerHTML;
		// 	//$confirm_button = $list[i].querySelector(".uiButtonConfirm").click();
		// 	console.log($name+"'s Request accepeted("+$present.innerHTML+" Friend in group)");
		// }
		if(i==$list.length-1){
			be_safe();
		}
	}
}
window.onload = function(){
	accept_req();
}
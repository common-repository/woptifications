function woptifications_push(theicon,thebody,theurl) {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Congratulations!', {
      icon: theicon,
      body: thebody,
    });

    if(theurl.length) {
	    notification.onclick = function () {
	      window.open(theurl);      
	    };
	}
    
  }

}

// push notifications test
jQuery(document).ready(function($) {
	$('.woptifications-push-test').on('click', function(event) {
		event.preventDefault();
		woptifications_push('https://plugins.svn.wordpress.org/woptifications/assets/icon128x128.png','Looks like push notifications work','');
	});
});

// browser notifications test
jQuery(document).ready(function($) {
  $('.woptifications-popup-test').on('click', function(event) {
    event.preventDefault();
    toastr["success"]("Continue the setup to enable notifications.", "Browser notifications working!");
  });
});

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
    {
    c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
  }
return c_value;
}

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : ";expires="+exdate.toUTCString()) +";path=/";
	document.cookie=c_name + "=" + c_value;
}


if (getCookie("cookiesAccepted") != "true"){

	Event.observe(window, 'load', function() {
  		var cookie_bar = new Element ('nav', {
    	 	 id: 'ep_cookies_navbar',
		 'class': 'navbar navbar-inverse navbar-fixed-top'
  		});
  		var cookie_container = new Element ('div', {
		 id: 'ep_cookies_container',
		 'class': 'container-fluid'
		});
		var cookie_head = new Element ('div',{
		 'class': 'navbar-header'
		});
  		var cookie_brand = new Element ('h3', {
    	 	 id: '',
		 'class': 'navbar-brand'
  		});
		var cookie_ul = new Element ('ul', {
		 'class': 'nav navbar-nav'
		});
  		var cookie_message = new Element ('li', {
    		 id: 'ep_cookies_message',
		 'class': ''
  		});
		var cookie_ul_right = new Element ('ul', {
		 'class': 'nav navbar-nav navbar-right'
		});
  		var btn_accept = new Element ('button', {
    	 	 id: 'ep_cookies_acceptX',
     	 	 'class': 'btn btn-success'
  		});
  		var btn_decline = new Element ('a', {
     	 	 'class': 'btn btn-danger',
		 'href': 'http://www.google.com'
  		});
	
		var div_post_button = new Element ('div', {
		 id: 'ep_cookies_post_button',
		 'class': 'ep_cookies_messages'
		});

  		cookie_bar.insert (cookie_container);
  		cookie_head.insert (cookie_brand);
  		cookie_container.insert (cookie_head);
  		cookie_ul.insert (cookie_message);
  		cookie_container.insert (cookie_ul);
  		cookie_ul_right.insert (btn_accept);
  		cookie_ul_right.insert (btn_decline);
		cookie_ul_right.insert (div_post_button);
		cookie_container.insert (cookie_ul_right);
  
  		cookie_bar.hide ();
  		$(document.body).insert (cookie_bar);

  		btn_accept.observe ('click', function(e) {
    
    			setCookie("cookiesAccepted","true",100);
    			Effect.Fade ('ep_cookies_navbar', {
    	 	 	 duration: .5
    			})
  		});


  		eprints.currentRepository().phrase ({'cookies_title': {},'cookies_help': {}, 'cookies_action_accept': {}, 'cookies_post_button_message': {}}, function(phrases) {
    			cookie_brand.insert (phrases['cookies_title']);
    			cookie_message.insert (phrases['cookies_help']);
    			btn_accept.insert (phrases['cookies_action_accept']);
    			btn_decline.insert (phrases['cookies_action_decline']);
			div_post_button.insert (phrases['cookies_post_button_message']);

    			Effect.Appear ('ep_cookies_navbar', {
      	 	 	 duration: .0
    			});
			Effect.Appear ('ep_cookies_navbar', {
                         duration: .5
                        });

  		});
	});

}



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
  		var cookie_bar = new Element ('div', {
    	 	 id: 'ep_cookies_navbar',
		 'class': 'navbar navbar-inverse navbar-fixed-top'
  		});
  		var cookie_container = new Element ('div', {
		 id: 'ep_cookies_container',
		 'class': 'container'
		});
		var cookie_ul = new Element ('ul', {
		 'class': 'nav navbar-nav'
		});
  		var cookie_li_msg = new Element ('li', {
		});
  		var cookie_message = new Element ('strong', {
		 'class':'navbar-text navbar-left'
  		});
		var cookie_form = new Element ('form', {
                 'class': 'navbar-form navbar-left'
                });
		var cookie_btn_group = new Element ('div', {
		 'class':'btn-group'
		});
  		var btn_accept = new Element ('button', {
     	 	 'class': 'btn btn-success',
		 'type': 'reset'
  		});
  		var btn_decline = new Element ('button', {
     	 	 'class': 'btn btn-danger',
		 'type': 'submit'
  		});

  		var cookie_moreinfo = new Element ('p', {
		 'class': 'navbar-text'
		});
		var cookie_moreinfo_a = new Element ('a', {
                 'href': './cookies.html'
                });
		
  		cookie_bar.insert (cookie_container);
  		
		cookie_container.insert (cookie_message);
  		
		cookie_btn_group.insert (btn_accept);
  		cookie_btn_group.insert (btn_decline);
		cookie_form.insert (cookie_btn_group);
		
		cookie_container.insert (cookie_form);
		
		cookie_moreinfo.insert ({
			bottom: cookie_moreinfo_a
		});
		cookie_container.insert (cookie_moreinfo);
  
  		cookie_bar.hide ();
  		$(document.body).insert (cookie_bar);

  		btn_accept.observe ('click', function(e) {
    
    			setCookie("cookiesAccepted","true",100);
    			Effect.Fade ('ep_cookies_navbar', {
    	 	 	 duration: .5
    			})
  		});


  		eprints.currentRepository().phrase ({'cookies_help': {}, 'cookies_action_accept': {},'cookies_action_decline': {},'cookies_redirect': {}, 'cookies_moreinfo': {}, 'cookies_moreinfo_a': {}}, function(phrases) {
    			cookie_message.insert (phrases['cookies_help']);
    			cookie_moreinfo.insert ({ top: phrases['cookies_moreinfo']});
    			cookie_moreinfo_a.insert (phrases['cookies_moreinfo_a']);
			
			cookie_form.setAttribute('action',phrases['cookies_redirect']);
			
    			btn_accept.insert (phrases['cookies_action_accept']);
    			btn_decline.insert (phrases['cookies_action_decline']);

    			Effect.Appear ('ep_cookies_navbar', {
      	 	 	 duration: .0
    			});
			Effect.Appear ('ep_cookies_navbar', {
                         duration: .5
                        });

  		});
		
	});

}



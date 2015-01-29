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
  		var cookie_li_msg = new Element ('li', {
		});
  		var cookie_message = new Element ('p', {
		 'class':'navbar-text navbar-left'
  		});
		var cookie_form = new Element ('form', {
                 'class': 'navbar-form navbar-left'
                });
		var cookie_btn_group = new Element ('div', {
		 'class':'btn-group'
		});
  		var btn_accept = new Element ('button', {
     	 	 'class': 'btn btn-success'
  		});
  		var btn_decline = new Element ('button', {
     	 	 'class': 'btn btn-danger',
		 'type': 'submit'
  		});

  		var cookie_moreinfo = new Element ('p', {
		 'class': 'navbar-text navbar-right'
		});
		var cookie_moreinfo_a = new Element ('a', {
                 'class': 'navbar-link',
                 'href': './cookies.html'
                });
		
  		cookie_bar.insert (cookie_container);
  		
		//cookie_head.insert (cookie_brand);
  		//cookie_container.insert (cookie_head);
  		//cookie_ul.insert (cookie_li_msg);
  		//cookie_li_msg.insert (cookie_message);
  		//cookie_ul.insert (cookie_li_moreinfo);
  		//cookie_li_moreinfo.insert (btn_moreinfo);
  		//cookie_container.insert (cookie_ul);
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


  		eprints.currentRepository().phrase ({'cookies_title': {},'cookies_help': {}, 'cookies_action_accept': {},'cookies_action_decline': {},'cookies_moreinfo': {}, 'cookies_moreinfo_a': {}, 'cookies_post_button_message': {}}, function(phrases) {
    			cookie_brand.insert (phrases['cookies_title']);
    			cookie_message.insert (phrases['cookies_help']);
    			cookie_moreinfo.insert ({ top: phrases['cookies_moreinfo']});
    			cookie_moreinfo_a.insert (phrases['cookies_moreinfo_a']);
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



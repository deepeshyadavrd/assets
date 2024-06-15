function formRule(formid) {
    var validatebool = 1;
    $('.errorResponse').remove();
    $('[id^=' + formid + '] input,[id^=' + formid + '] textarea').each(function(index) {
        var domelement = $(this);
        var domename = domelement.attr('name');
        var inputVal = domelement.val().trim();
        var radioReview = $('input[name=rate]:checked', '#review_product_form').val();
        var errorResponse = '';
		domelement.css('border','');
        if (domename && domelement.attr('type') != 'hidden') {
            if (domename == 'email' && inputVal == '') {
                errorResponse = 'Please enter email';
            } else if (domename == 'email' && !ve(inputVal)) {
                errorResponse = 'Please enter valid email';
            } else if (domename == 'register_email' && inputVal == '') {
                errorResponse = 'Please enter email';
            } else if (domename == 'register_email' && !ve(inputVal)) {
                errorResponse = 'Please enter valid email';
            } else if ((domename == 'name' || domename == 'firstname' || domename == 'lastname') && inputVal == '') {
                errorResponse = 'Please enter valid name';
            } else if ((domename == 'telephone') && inputVal.length < 10) {
                errorResponse = 'Please enter 10 digit mobile';
            } else if ((domename == 'telephone') && !vm(inputVal)) {
                errorResponse = 'Please enter valid mobile no.';
            } else if ((domename == 'mobile') && inputVal.length < 10) {
                errorResponse = 'Please enter 10 digit mobile';
            } else if ((domename == 'mobile') && !vm(inputVal)) {
                errorResponse = 'Please enter valid mobile no.';
            } else if ((inputVal == '' && domename == 'pincode') && inputVal.length < 6) {
                errorResponse = 'Please enter 6 digit pincode';
            } else if ((domename == 'pincode') && !vp(inputVal)) {
                errorResponse = 'Please enter valid pincode';
            } else if (domename == 'password' && inputVal == '') {
                errorResponse = 'Please enter valid password';
            } else if (inputVal != '' && domename == 'password' && inputVal.length < 6) {
                errorResponse = 'Please enter at least 6 characters password';
            } else if (inputVal != '' && domename == 'password' && inputVal.length > 20) {
                errorResponse = 'Please enter between 6 and 20 characters!';
            } else if (domename == 'confirm' && inputVal != $('#password').val()) {
                errorResponse = 'Confirm password does not match';
            } else if (domename == 'city' && inputVal == '') {
                errorResponse = 'Please enter city name';
            } else if (domename == 'country' && inputVal == '') {
                errorResponse = 'Please enter country name';
            } else if (domename == 'rate' && typeof(radioReview) == 'undefined') {
                console.log('kkk')
                errorResponse = 'Please select a start rating';
            } else if (domename == 'title' && inputVal == '') {
                errorResponse = 'Please enter title';
            } else if (domename == 'message' && inputVal == '') {
                errorResponse = 'Please enter message';
            } else if (domename == 'address_1' && inputVal == '') {
                errorResponse = 'Please enter House No';
            } else if (domename == 'address_3' && inputVal == '') {
                errorResponse = 'Please enter Street Address';
            }
        }
        if (errorResponse) {
            validatebool = 0;
			domelement.css('border','1px solid red');
            domelement.after(' <p class="errorResponse" style="font-size: 12px;color: red;position: absolute;padding: 2px;">' + errorResponse + '</p>');
            return false;
        }
    });
    return validatebool;
}
function ve(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
function vm(mvalue) {
    var defaultMvalue = 6;
    var mnumber = mvalue.toString()[0];
    if (Number(mnumber) < defaultMvalue) {
        return 0;
    }
    return 1;
}
function vp(pvalue) {
    if (pvalue.length == 6 && pvalue.match(/^[1-9][0-9]{5}$/)) {
        return 1
    } else {
        return 0;
    }
}
function getURLVar(key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

$(document).ready(function() {
	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();

		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});

	// Currency
	$('#form-currency .currency-select').on('click', function(e) {
		e.preventDefault();

		$('#form-currency input[name=\'code\']').val($(this).attr('name'));

		$('#form-currency').submit();
	});

	// Language
	$('#form-language .language-select').on('click', function(e) {
		e.preventDefault();

		$('#form-language input[name=\'code\']').val($(this).attr('name'));

		$('#form-language').submit();
	});

	/* Search */
	$('#search input[name=\'search\']').parent().find('button').on('click', function() {
		var url = 'search';

		var value = $(' #search input[name=\'search\']').val();
		// value = value.replace( ' ', '+' );
		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;
	});

	$('#searchmob input[name=\'search\']').parent().find('button').on('click', function() {
		var url = 'search';

		var value = $(' #searchmob input[name=\'search\']').val();
		// value = value.replace( ' ', '+' );
		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;
	});

	$('#search input[name=\'search\']').on('keydown', function(e) {
		if (e.keyCode == 13) {
			$('#search input[name=\'search\']').parent().find('button').trigger('click');
		}
	});

	// Menu
	$('#menu .dropdown-menu').each(function() {
		var menu = $('#menu').offset();
		var dropdown = $(this).parent().offset();

		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 10) + 'px');
		}
	});

	// Product List
	$('#list-view').click(function() {
		$('#content .product-grid > .clearfix').remove();

		$('#content .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
		$('#grid-view').removeClass('active');
		$('#list-view').addClass('active');

		localStorage.setItem('display', 'list');
	});

	// Product Grid
	$('#grid-view').click(function() {
		// What a shame bootstrap does not take into account dynamically loaded columns
		var cols = $('#column-right, #column-left').length;

		if (cols == 2) {
			$('#content .product-list').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
		} else if (cols == 1) {
			$('#content .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		} else {
			$('#content .product-list').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
		}

		$('#list-view').removeClass('active');
		$('#grid-view').addClass('active');

		localStorage.setItem('display', 'grid');
	});

	if (localStorage.getItem('display') == 'list') {
		$('#list-view').trigger('click');
		$('#list-view').addClass('active');
	} else {
		$('#grid-view').trigger('click');
		$('#grid-view').addClass('active');
	}

	// Checkout
	$(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
		if (e.keyCode == 13) {
			$('#collapse-checkout-option #button-login').trigger('click');
		}
	});

	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});
});

// Cart add remove functions
var cart = {
	'add': function(product_id, quantity, mtw = 0) {
		$.ajax({
			url: '?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				if(mtw != 0){
					window.location = '?route=account/wishlist&remove='+product_id;
				}
				$('.alert-dismissible, .text-danger').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					// $('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					$('body').prepend('<div class="success-popup ">	<span class="warrning-svg">	<svg id="smile"		width="35" height="35" viewBox="0 0 41 41" fill="none">					  <path d="M16.2432 29.9911L16.5968 30.3439L16.95 29.9907L30.5886 16.352L30.9422 15.9985L30.5886 15.6449L27.7128 12.7691L27.3593 12.4156L27.0057 12.7691L16.592 23.1828L12.2699 18.8682L11.9158 18.5148L11.5626 18.869L8.69086 21.7489L8.33792 22.1028L8.69174 22.4558L16.2432 29.9911ZM0.823975 20.662C0.823975 9.72375 9.72375 0.823975 20.662 0.823975C31.6002 0.823975 40.5 9.72375 40.5 20.662C40.5 31.6002 31.6002 40.5 20.662 40.5C9.72375 40.5 0.823975 31.6002 0.823975 20.662Z" stroke="#33C300"/>  </svg>					</span>	<span class="warrning-text">   <p>' + json['success'] + '</p>	</span>;				  </div>')

					// Need to set timeout otherwise it wont update the total
					setTimeout(function () {
						$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
					}, 100);

					$('html, body').animate({ scrollTop: 0 }, 'slow');

					$('#cart > ul').load('?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: '?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = '?route=checkout/cart';
				} else {
					$('#cart > ul').load('?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: '?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);
				delete_cookie('cartt');
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = '?route=checkout/cart';
				} else {
					$('#cart > ul').load('?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}
function delete_cookie(name) {
	document.cookie = name +'=; Path=/;';
  }
var voucher = {
	'add': function() {

	},
	'remove': function(key) {
		$.ajax({
			url: '?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = '?route=checkout/cart';
				} else {
					$('#cart > ul').load('?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}

var wishlist = {
	'add': function(product_id, cart_id = 0) {
		$.ajax({
			url: '?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				if(cart_id != 0){
					//alert('here');
					cart.remove(cart_id);
				}
				$('.success-popup-outer').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					// $('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					$('body').prepend('<div class="success-popup ">	<span class="warrning-svg">	<svg id="smile"		width="35" height="35" viewBox="0 0 41 41" fill="none"><path d="M16.2432 29.9911L16.5968 30.3439L16.95 29.9907L30.5886 16.352L30.9422 15.9985L30.5886 15.6449L27.7128 12.7691L27.3593 12.4156L27.0057 12.7691L16.592 23.1828L12.2699 18.8682L11.9158 18.5148L11.5626 18.869L8.69086 21.7489L8.33792 22.1028L8.69174 22.4558L16.2432 29.9911ZM0.823975 20.662C0.823975 9.72375 9.72375 0.823975 20.662 0.823975C31.6002 0.823975 40.5 9.72375 40.5 20.662C40.5 31.6002 31.6002 40.5 20.662 40.5C9.72375 40.5 0.823975 31.6002 0.823975 20.662Z" stroke="#33C300"/>  </svg> </span>	<span class="warrning-text">   <p>' + json['success'] + '</p>	</span> </div>');
				}else{
					$('.success-popup2').remove();
					$('body').prepend('<div class="success-popup2"> <span class="warrning-svg"> <svg id="smile2" width="35" height="35" viewBox="0 0 27 27" fill="none">  <path d="M13.6154 0.84668C6.57223 0.84668 0.846741 6.60249 0.846741 13.6733C0.846741 20.7464 6.60033 26.5 13.6734 26.5C20.7464 26.5 26.5 20.7464 26.5 13.6733C26.5 6.59806 20.7183 0.84668 13.6154 0.84668ZM14.406 19.3366H12.9407V17.8713H14.406V19.3366ZM14.406 14.406H12.9407V8.01H14.406V14.406Z" stroke="#FFD1D1"/>     </svg>  </span> <span class="warrning-text">  <p>'+ json['error'] +'</p> </span> </div>');
				}
				if(json['added']){
					$('#likeheart').addClass('red');
				}

				$('#wishlist-total span').html(json['total']);
				$('#wishlist-total').attr('title', json['total']);

				$('html, body').animate({ scrollTop: 0 }, 'slow');
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: '?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert-dismissible').remove();

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					$('#compare-total').html(json['total']);

					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();

	$('#modal-agree').remove();

	var element = this;

	$.ajax({
		url: $(element).attr('href'),
		type: 'get',
		dataType: 'html',
		success: function(data) {
			html  = '<div id="modal-agree" class="modal">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">';
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div>';
			html += '  </div>';
			html += '</div>';

			$('body').append(html);

			$('#modal-agree').modal('show');
		}
	});
});

// Autocomplete */
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			this.timer = null;
			this.items = new Array();

			$.extend(this, option);

			$(this).attr('autocomplete', 'off');

			// Focus
			$(this).on('focus', function() {
				this.request();
			});

			// Blur
			$(this).on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);
			});

			// Keydown
			$(this).on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}
			});

			// Click
			this.click = function(event) {
				event.preventDefault();

				value = $(event.target).parent().attr('data-value');

				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}

			// Show
			this.show = function() {
				var pos = $(this).position();

				$(this).siblings('ul.dropdown-menu').css({
					top: pos.top + $(this).outerHeight(),
					left: pos.left
				});

				$(this).siblings('ul.dropdown-menu').show();
			}

			// Hide
			this.hide = function() {
				$(this).siblings('ul.dropdown-menu').hide();
			}

			// Request
			this.request = function() {
				clearTimeout(this.timer);

				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}

			// Response
			this.response = function(json) {
				html = '';

				if (json.length) {
					for (i = 0; i < json.length; i++) {
						this.items[json[i]['value']] = json[i];
					}

					for (i = 0; i < json.length; i++) {
						if (!json[i]['category']) {
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						}
					}

					// Get all the ones with a categories
					var category = new Array();

					for (i = 0; i < json.length; i++) {
						if (json[i]['category']) {
							if (!category[json[i]['category']]) {
								category[json[i]['category']] = new Array();
								category[json[i]['category']]['name'] = json[i]['category'];
								category[json[i]['category']]['item'] = new Array();
							}

							category[json[i]['category']]['item'].push(json[i]);
						}
					}

					for (i in category) {
						html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

						for (j = 0; j < category[i]['item'].length; j++) {
							html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
						}
					}
				}

				if (html) {
					this.show();
				} else {
					this.hide();
				}

				$(this).siblings('ul.dropdown-menu').html(html);
			}

			$(this).after('<ul class="dropdown-menu"></ul>');
			$(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

		});
	}
})(window.jQuery);

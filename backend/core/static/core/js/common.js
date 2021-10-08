(function($) {
	var id_select_all = "#action-toggle"

	var actions_element = $("input.action-select")
	
	$(id_select_all).on('click', function(event) {
		if(actions_element.length > 0)
			event.target.checked
				? actions_element.prop('checked', true)
				: actions_element.prop('checked', false)
	})
}
)(django.jQuery)
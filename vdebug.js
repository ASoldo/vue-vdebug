export default {
	install(Vue) {
		Vue.directive("debug", {
			inserted: function (el, binding) {
				switch (binding.arg) {
					case 'color':
						el.style.border = `5px solid ${binding.value}`;
						el.style.borderStyle = `dotted`;
						el.style.boxSizing = `border-box`;
						break;

					case 'bgcolor': 
						el.style.backgroundColor = `${binding.value}`;
						break;

					default:
						console.log("Please use one of the following: color, ...");
						break;
				}
			}
		})
	}
}

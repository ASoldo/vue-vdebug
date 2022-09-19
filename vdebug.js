export default {
	install(Vue) {
		Vue.directive("debug", {
			inserted: function (el, binding) {
				switch (binding.arg) {

					case 'wire':
						el.style.outline = `1px dotted limegreen`;
						el.style.boxSizing = `border-box`;
						break;

					case 'color':
						if (binding.value) {
							el.style.outlineColor = `${binding.value}`;
							return;
						}
						console.warn("Please use: 'red' or '#0000ff' as an example...");
						break;

					case 'bgcolor':
						if (binding.value) {
							el.style.backgroundColor = `${binding.value}`;
							return;
						}
						console.warn("Please use: 'red' or '#0000ff' as an example...");
						break;

					case 'size':
						if (binding.value) {
							el.style.outlineWidth = `${binding.value}`;
							return;
						}
						console.warn("Please use: 1px 1px as an example...");
						break;

					case 'style':
						if (binding.value) {
							el.style.outlineStyle = `${binding.value}`;
							return;
						}
						console.warn("Please use: solid, dotted, dashed...");
						break;


					default:
						console.error("Please use one of the following: default, color, bgcolor, width, style!");
						break;
						
				}
			}
		})
	}
}

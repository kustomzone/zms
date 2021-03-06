import "./sass/main.sass";
import "./theme/table.sass";

import Vue from "vue/dist/vue.min.js";

import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

import VueVisible from "vue-visible";
Vue.use(VueVisible);

import Icon from "vue-awesome/components/Icon.vue";
Vue.component("icon", Icon);

import NamedInput from "./theme/components/named-input.vue";
Vue.component("named-input", NamedInput);

import NamedTextArea from "./theme/components/named-textarea.vue";
Vue.component("named-textarea", NamedTextArea);

import ThemeButton from "./theme/components/button.vue";
Vue.component("theme-button", ThemeButton);


Vue.prototype.$eventBus = new Vue();

import root from "./vue_components/root.vue";
var app = new Vue({
	el: "#app",
	render: h => h(root),
	data: {
		currentView: null,
		zeroPage: null
	}
});

import {route, zeroPage} from "./route.js";
route(app);

Vue.prototype.$zeroPage = zeroPage;

let currentSiteInfo;
(async function() {
	const siteInfo = await zeroPage.getSiteInfo();
	currentSiteInfo = siteInfo;
	app.$eventBus.$emit("setSiteInfo", siteInfo);
})();
zeroPage.on("setSiteInfo", msg => {
	currentSiteInfo = msg.params;
	app.$eventBus.$emit("setSiteInfo", msg.params);
});

app.$eventBus.$on("needSiteInfo", async () => {
	if(currentSiteInfo) {
		app.$eventBus.$emit("setSiteInfo", currentSiteInfo);
	}
});
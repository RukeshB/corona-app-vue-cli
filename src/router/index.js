import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Introduction from '../views/Introduction.vue';
import WorldData from '../views/WorldData.vue';

Vue.use(VueRouter);

const routes = [
	{
		path      : '/',
		name      : 'Home',
		component : Home
	},
	{
		path      : '/introduction',
		name      : 'Introduction',
		component : Introduction
	},
	{
		path      : '/world',
		name      : 'WorldData',
		component : WorldData
	},
	{
		path      : '/news',
		name      : 'News',
		component : News
	},
	{
		path      : '/about',
		name      : 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component : () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
];

const router = new VueRouter({
	mode   : 'history',
	base   : process.env.BASE_URL,
	routes
});

export default router;

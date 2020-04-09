import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AllNews from '../views/AllNews.vue';
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
		name      : 'AllNews',
		component : AllNews
	},
	{
		path      : '/myths',
		name      : 'Myths',
		// route level code-splitting
		// this generates a separate chunk (Myths.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component : () => import(/* webpackChunkName: "Myths" */ '../views/Myths.vue')
	}
];

const router = new VueRouter({
	mode   : 'history',
	base   : process.env.BASE_URL,
	routes
});

export default router;

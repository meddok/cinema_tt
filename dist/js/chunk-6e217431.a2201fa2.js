(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e217431"],{"0b8b":function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("title",[t._v("Список фильмов")]),l("div",{staticClass:"row"},t._l(t.filmInfo,(function(e,a){return l("div",{key:a,staticClass:"col-12 col-sm-6 col-lg-4 col-xl-3 d-flex"},[l("film-card",{staticClass:"mt-3 mb-3",attrs:{filmInfo:e},nativeOn:{click:function(e){return t.toSingleMovie(a)}}})],1)})),0)])},i=[],n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.filmInfo?l("div",{staticClass:"card card--modify"},[l("div",{staticClass:"card-img-wrapper"},[l("img",{staticClass:"card-img-top",attrs:{src:t.filmInfo.image,alt:t.filmInfo.name}})]),l("div",{staticClass:"card-body"},[l("h5",{staticClass:"card-title"},[t._v(t._s(t.filmInfo.name))]),l("p",{staticClass:"card-text"},[t._v(t._s(t.filmInfo.descr))])])]):t._e()},c=[],s={name:"cFilmItem",props:{filmInfo:{type:Object,required:!0,default:function(){}}}},o=s,m=l("2877"),r=Object(m["a"])(o,n,c,!1,null,null,null),d=r.exports,u={name:"cFilmsList",data:function(){return{filmInfo:[{image:"https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default2.jpg",name:"Card title",descr:"Some quick example text to build on the card title and make up the bulk of the card's content."},{image:"https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg",name:"Card title",descr:"Some quick"},{image:"https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg",name:"Card title",descr:"Some quick example text to build on the card title and make up the bulk of the card's content."},{image:"https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg",name:"Card title",descr:"Some quick example text to build on the card title and make up the bulk of the card's content."},{image:"https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg",name:"Card title",descr:"Some quick example text to build on the card title and make up the bulk of the card's content."}]}},components:{FilmCard:d},methods:{toSingleMovie:function(t){this.$router.push({name:"FilmInfo",params:{id:t}})}}},f=u,p=Object(m["a"])(f,a,i,!1,null,null,null);e["a"]=p.exports},d95d:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"films container"},["Films"===t.$route.name?l("films-list"):t._e(),l("router-view")],1)},i=[],n=l("0b8b"),c={name:"filmsPage",components:{FilmsList:n["a"]}},s=c,o=l("2877"),m=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-6e217431.a2201fa2.js.map
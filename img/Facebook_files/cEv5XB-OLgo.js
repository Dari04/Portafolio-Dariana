if (self.CavalryLogger) { CavalryLogger.start_js(["840jz"]); }

__d('PhotoResizeMath',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getScaledPhotoDimensions:function(i,j,k,l,m){var n=i/j,o=k/l;if(k&&l&&m==='stretch')return {width:k,height:l};if(!k&&l||m==='contain'!==n>=o)return {width:l*n,height:l};if(k)return {width:k,height:k/n};return {width:i,height:j};}};f.exports=h;},null);
__d('PixelzFocus',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={search:function(i,j){var k=0,l=i.length-1;while(k<=l){var m=k+Math.floor((l-k)/2),n=i[m];if(n>j){l=m-1;}else if(n<j){k=m+1;}else return m;}return Math.min(k,l);},forceSpecificPoint:function(i,j,k){var l=1e-09,m=h.search(i,j-k-l)+1,n=h.search(i,j+k);return i.slice(m,n+1);},findBiggestSets:function(i,j){var k=[],l=-1;for(var m=0;m<i.length;++m){var n=i[m],o=m,p=h.search(i,n+j),q=p-o;if(q>l)k=[];if(q>=l){l=q;k.push({low:o,high:p});}}return k;},getBestSet:function(i,j,k){var l=-1,m=null;for(var n=0;n<j.length;++n){var o=j[n],p=i[o.low],q=i[o.high],r=p+(q-p)/2,s=Math.min(p-(r-k),r+k-q);if(s>l){l=s;m=o;}}return m;},getFocusFromSet:function(i,j){var k=i[j.low],l=i[j.high];return k+(l-k)/2;},clampFocus:function(i,j){var k=j/2,l=1-j/2;if(i<k)return k;if(i>l)return l;return i;},convertFromCenterToCSS:function(i,j){if(Math.abs(1-j)<1e-05)return 0;return (i-j/2)/(1-j);},convertFromCSSToCenter:function(i,j){return i*(1-j)+j/2;},getVisible:function(i,j){if(i<j)return i/j;return j/i;},getHidden:function(i,j){return 1-h.getVisible(i,j);},focusHorizontally:function(i,j){return i<j;},convertVectorFromCenterToCSS:function(i,j,k){var l=h.focusHorizontally(j,k),m=void 0;if(l){m=i.x/100;}else m=i.x/100;var n=h.convertFromCenterToCSS(m,h.getVisible(j,k));if(l){return {x:n,y:0};}else return {x:0,y:n};},getCropRect:function(i,j,k){var l=h.focusHorizontally(j,k),m=h.getVisible(j,k);if(l){var n=(1-m)*i.x;return {left:n,top:0,width:m,height:1};}else{var o=(1-m)*i.y;return {left:0,top:o,width:1,height:m};}}};f.exports=h;},null);
__d('loadImage',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=new Image();k.onload=function(){j(k.width,k.height,k);};k.src=i;}f.exports=h;},null);
__d('Pixelz.react',['cx','arrayContains','loadImage','joinClasses','React','PhotoResizeMath','PixelzFocus'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'Pixelz',propTypes:{width:i.number,height:i.number,resizeMode:i.oneOf(['contain','cover','stretch']),alt:i.string,letterbox:i.bool,borderRadius:i.number,insetBorderColor:i.string,animated:i.bool,upscale:i.bool,cropRect:function(k,l,m){var n=k[l],o='Invalid prop `'+l+'` supplied to `'+m+'`, expected a rectangle with values normalized '+'between 0 and 1.';if(n.left<0||n.top<0||n.width<0||n.height<0||n.left+n.width>1||n.top+n.height>1)return new Error(o);},focus:function(k,l,m){var n=k[l],o='Invalid prop `'+l+'` supplied to `'+m+'`, expected either a {x, y, type} vector where type '+'is `css` or `center` or an array of {x, y} vectors. All the vectors '+'have with values normalized between 0 and 1.';if(Array.isArray(n)){for(var p=0;p<n.length;++p)if(!(n[p].x>=0&&n[p].x<=1)||!(n[p].y>=0&&n[p].y<=1))return new Error(o);}else{if(!n.type)n.type='css';if(!(n.x>=0&&n.x<=1)||!(n.y>=0&&n.y<=1)||!c('arrayContains')(['center','css'],n.type))return new Error(o);}}},getDefaultProps:function(){return {resizeMode:'cover',alt:'',letterbox:true,upscale:true,cropRect:{width:1,height:1,top:0,left:0},focus:{x:.5,y:.5,type:'css'}};},getInitialState:function(){return {srcDimensions:{}};},getSrcDimensions:function(){var k=this.props.src,l=this.state.srcDimensions[k];if(l)return l;c('loadImage')(k,function(m,n){var o={};o[k]={width:m,height:n};this.isMounted()&&this.setState({srcDimensions:o});}.bind(this));return null;},getCropSrcDimensions:function(){var k=this.getSrcDimensions();return {width:k.width*this.props.cropRect.width,height:k.height*this.props.cropRect.height};},getUpscaleCropDimensions:function(){var k=this.getCropSrcDimensions();return c('PhotoResizeMath').getScaledPhotoDimensions(k.width,k.height,this.props.width,this.props.height,this.props.resizeMode);},getCropDimensions:function(){var k=this.getUpscaleCropDimensions(),l=this.getCropSrcDimensions();if(!this.props.upscale)return {width:Math.min(k.width,l.width),height:Math.min(k.height,l.height)};return k;},getCropAspectRatio:function(){var k=this.getCropDimensions();return k.width/k.height;},getContainerDimensions:function(){if(this.props.letterbox&&this.props.width&&this.props.height)return {width:this.props.width,height:this.props.height};return this.getCropDimensions();},getContainerAspectRatio:function(){var k=this.getContainerDimensions();return k.width/k.height;},getContainerPosition:function(){return {left:0,top:0};},getFocus:function(){var k=this.props.focus;if(!Array.isArray(k)&&k.type==='css')return {x:k.x,y:k.y};var l=this.getContainerAspectRatio(),m=this.getCropAspectRatio(),n=c('PixelzFocus').getVisible(l,m),o=c('PixelzFocus').focusHorizontally(l,m),p=void 0;if(!Array.isArray(k)){p=c('PixelzFocus').convertFromCenterToCSS(o?k.x:k.y,n);}else{var q=k.map(function(t){return o?t.x:t.y;});q.sort();var r=c('PixelzFocus').findBiggestSets(q,n),s=c('PixelzFocus').getBestSet(q,r,n);p=c('PixelzFocus').getFocusFromSet(q,s);}return {x:o?p:.5,y:o?.5:p};},getCropPosition:function(){var k=this.getCropDimensions(),l=this.getContainerDimensions(),m=this.getFocus();return {left:m.x*(l.width-k.width),top:m.y*(l.height-k.height)};},getScaleDimensions:function(){var k=this.getCropDimensions();return {width:k.width/this.props.cropRect.width,height:k.height/this.props.cropRect.height};},getScalePosition:function(){var k=this.getScaleDimensions();return {left:-k.width*this.props.cropRect.left,top:-k.height*this.props.cropRect.top};},getClipCropRectangle:function(){var k=this.getContainerDimensions(),l=this.getCropDimensions(),m=this.getContainerPosition(),n=this.getCropPosition(),o=Math.max(m.left,n.left),p=Math.max(m.top,n.top),q=Math.min(m.top+k.height,n.top+l.height),r=Math.min(m.left+k.width,n.left+l.width);return {left:o,top:p,width:r-o,height:q-p};},getClipCropPosition:function(){var k=this.getClipCropRectangle();return {left:k.left,top:k.top};},getClipCropDimensions:function(){var k=this.getClipCropRectangle();return {width:k.width,height:k.height};},getClipScalePosition:function(){var k=this.getScalePosition(),l=this.getClipCropPosition(),m=this.getCropPosition();return {left:k.left+(m.left-l.left),top:k.top+(m.top-l.top)};},getClipScaleDimensions:function(){return this.getScaleDimensions();},areDimensionsEqual:function(k,l){return k.width===l.width&&k.height===l.height;},shouldAddAllNodesAndStyles:function(){return this.props.animated;},hasCrop:function(){if(this.shouldAddAllNodesAndStyles())return true;var k=this.getContainerDimensions(),l=this.getClipCropDimensions(),m=this.getClipScaleDimensions();if(this.areDimensionsEqual(k,l)||this.areDimensionsEqual(l,m))return false;return true;},hasContainer:function(){if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())return true;var k=this.getContainerDimensions(),l=this.getClipScaleDimensions();if(this.areDimensionsEqual(k,l))return false;return true;},hasInsetBorder:function(){return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor;},applyPositionStyle:function(k,l){if(this.shouldAddAllNodesAndStyles()||l.left)k.left=Math.round(l.left);if(this.shouldAddAllNodesAndStyles()||l.top)k.top=Math.round(l.top);},applyDimensionsStyle:function(k,l){k.width=Math.round(l.width);k.height=Math.round(l.height);},applyBorderRadiusStyle:function(k){if(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)k.borderRadius=this.props.borderRadius||0;},getScaleStyle:function(){var k={},l=this.getClipCropDimensions(),m=this.getClipScaleDimensions();if(this.shouldAddAllNodesAndStyles()||!this.areDimensionsEqual(l,m)){this.applyPositionStyle(k,this.getClipScalePosition());}else this.applyPositionStyle(k,this.getClipCropPosition());this.applyDimensionsStyle(k,this.getClipScaleDimensions());this.applyBorderRadiusStyle(k);return k;},getCropStyle:function(){var k={};this.applyPositionStyle(k,this.getClipCropPosition());this.applyDimensionsStyle(k,this.getClipCropDimensions());this.applyBorderRadiusStyle(k);return k;},getInsetBorderStyle:function(){var k={borderColor:this.props.insetBorderColor||'transparent'};this.applyPositionStyle(k,this.getClipCropPosition());this.applyDimensionsStyle(k,this.getClipCropDimensions());this.applyBorderRadiusStyle(k);return k;},getContainerStyle:function(){var k={};this.applyDimensionsStyle(k,this.getContainerDimensions());this.applyBorderRadiusStyle(k);return k;},getScale:function(){var k=this.getScaleStyle(),l=k.width,m=k.height;k=babelHelpers['extends']({},k);delete k.width;delete k.height;return (c('React').createElement('img',babelHelpers['extends']({},this.props,{alt:this.props.alt,className:c('joinClasses')(this.props.className,"_56wb"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":'')),src:this.props.src,style:babelHelpers['extends']({},this.props.style||{},k),width:l,height:m})));},getCrop:function(){var k=this.getScale();if(!this.hasCrop())return k;return (c('React').createElement('div',{className:"_56ma"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getCropStyle()},k));},getInsetBorder:function(){if(!this.hasInsetBorder())return null;return (c('React').createElement('div',{className:"_56lv"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getInsetBorderStyle()}));},getContainer:function(){var k=this.getCrop();if(!this.hasContainer())return k;var l=this.getInsetBorder();return (c('React').createElement('div',{className:"_56jj"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),'data-skipchecker':null,style:this.getContainerStyle()},k,l));},render:function(){var k=this.getSrcDimensions();if(!k)return c('React').createElement('span',{'data-skipchecker':null});return this.getContainer();}});f.exports=j;},null);
__d("Autosize",["cx","CSS","DOM","Style"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=['fontFamily','fontStyle','fontVariant','fontWeight','letterSpacing','textDecoration','textIndent','textTransform','whiteSpace','wordSpacing','wordWrap'],j=/^[0-9]+$/;function k(p){var q=p.cloneNode(true);c("CSS").addClass(q,"_4g");var r=p.clientWidth-c("Style").getFloat(p,'paddingLeft')-c("Style").getFloat(p,'paddingRight');c("Style").set(q,'width',r+'px');var s=p.clientHeight-c("Style").getFloat(p,'paddingTop')-c("Style").getFloat(p,'paddingBottom');c("Style").set(q,'height',s+'px');c("DOM").insertAfter(p,q);return q;}function l(p,q,r,s,t){var u=p.style.fontSize,v=p.style.height;c("Style").set(p,"height","auto");if(q!==null){var w=p.style.width;c("Style").set(p,"width","auto");}var x=0,y=t.length-1;while(x<y){var z=Math.ceil((x+y)/2);c("Style").set(p,"font-size",t[z]+s);if(r!==null&&p.scrollHeight>r||q!==null&&p.scrollWidth>q){y=z-1;}else x=z;}p.style.fontSize=u;p.style.height=v;if(q!==null)p.style.width=w;return t[x]+s;}function m(p,q,r,s,t,u){var v=p.style.fontSize,w=p.style.height;c("Style").set(p,"height","auto");if(q!==null){var x=p.style.width;c("Style").set(p,"width","auto");}c("Style").set(p,"font-size",u+s);if((r===null||p.scrollHeight<=r)&&(q===null||p.scrollWidth<=q)){p.style.fontSize=v;p.style.height=w;if(q!==null)p.style.width=x;return u+s;}c("Style").set(p,"font-size",t+s);if(r!==null&&p.scrollHeight>r||q!==null&&p.scrollWidth>q){p.style.fontSize=v;p.style.height=w;if(q!==null)p.style.width=x;return t+s;}while(t+1<u){var y=Math.ceil((t+u)/2);c("Style").set(p,"font-size",y+s);if(r!==null&&p.scrollHeight>r||q!==null&&p.scrollWidth>q){u=y;}else t=y;}p.style.fontSize=v;p.style.height=w;if(q!==null)p.style.width=x;return t+s;}function n(p,q){this._wrap=p;this._attr=q;if(this._attr.sizes){var r=this._attr.sizes;for(var s=1,t=r.length;s<t;s++){if(r[s-1]<=r[s])continue;r.sort(function(v,w){return v-w;});break;}}else if(q.min>q.max){var u=q.min;q.min=q.max;q.max=u;}this.fit();}n.prototype.fit=function(p,q){var r=this._wrap;if(!r.clientWidth){o.push(this);return;}var s=k(r);if(typeof p==="undefined")p=this._attr.width;if(j.test(p)){s.style.width=p+"px";}else if(p!==null&&p!=="auto")s.style.width=p;if(typeof q==="undefined")q=this._attr.height;if(j.test(q)){s.style.height=q+"px";}else if(q!==null&&q!=="auto")s.style.height=q;var t=null;if(!this._attr.wrap)t=s.clientWidth;var u=null;if(this._attr.wrap||q!==null)u=s.clientHeight;var v;if(this._attr.sizes){v=l(s,t,u,"px",this._attr.sizes);}else v=m(s,t,u,"px",this._attr.min,this._attr.max);c("DOM").remove(s);c("Style").set(r,"font-size",v);c("CSS").removeClass(r,"invisible_elem");};var o=[];n.onNodeInserted=function(){var p=o;o=[];p.forEach(function(q){q.fit();});};f.exports=n;},null);
__d('FileFormResetOnSubmit',['DOMQuery','Event','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=c('Event').listen(j,'change',c('emptyFunction').thatReturnsFalse,c('Event').Priority.URGENT);try{k();}catch(m){throw m;}finally{l.remove();}}function i(j){'use strict';this._form=j;}i.prototype.enable=function(){'use strict';var j=this._reset.bind(this);this._subscription=this._form.subscribe('submit',function(){setTimeout(j,0);});};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};i.prototype._reset=function(){'use strict';var j=this._form.getRoot();h(j,function(){var k=c('DOMQuery').scry(j,'input[type="file"]');k.forEach(function(l){l.value='';});});};f.exports=i;},null);
__d('ProgressBarBase',['emptyFunction','requestAnimationFrame','removeFromArray','arrayContains'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(j,k){'use strict';this._min=j||0;this._max=k||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=c('emptyFunction');}i.prototype.setPosition=function(j){'use strict';j=this._normalizePosition(j);this._initialPosition=j;this._position=j;this.updateMeter(this._position);this.stop();return this;};i.prototype.setCompleteHandler=function(j){'use strict';this._onComplete=j||c('emptyFunction');return this;};i.prototype.setTarget=function(j,k){'use strict';this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=j;var l=this._normalizePosition(j);this._targetTime=k;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(l-this._initialPosition-this._initialVelocity*k)/(k*k);}else{this._acceleration=0;this._velocity=this._initialVelocity=(l-this._initialPosition)/k;}if(this._position>=l){this._onComplete();}else this._start();return this;};i.prototype.setNoAcceleration=function(j){'use strict';this.useAcceleration=!j;return this;};i.prototype._clearOnCompleteTimeout=function(){'use strict';b.clearTimeout(this._onCompleteTimeout);};i.prototype.stop=function(){'use strict';this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};i.prototype._start=function(){'use strict';this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout(function(){this.setPosition(this._targetPosition);this._onComplete();}.bind(this),this._targetTime);this._startAnimating();return this;};i.prototype._loop=function(){'use strict';var j=Date.now()-this._startTime;this._position=.5*this._acceleration*j*j+this._initialVelocity*j+this._initialPosition;var k=this._velocity;this._velocity=this._acceleration*j+this._initialVelocity;var l=k<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||l){this.setPosition(this._targetPosition);this._onComplete();}else this.updateMeter(this._position);};i.prototype.updateMeter=function(j){'use strict';throw "Unimplemented function: updateMeter";};i.prototype._normalizePosition=function(j){'use strict';return Math.min(Math.max((j-this._min)/(this._max-this._min),0),1);};i.prototype._startAnimating=function(){'use strict';if(!c('arrayContains')(h,this)){h.push(this);if(h.length===1)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);}};i.prototype._stopAnimating=function(){'use strict';c('removeFromArray')(h,this);};i.prototype._requestAnimationFrameCallback=function(){'use strict';h.forEach(function(j){j._loop();});if(h.length)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);};i.setPosition=function(j,k){'use strict';j.setPosition(k);};i.setTarget=function(j,k,l){'use strict';j.setTarget(k,l);};f.exports=i;},null);
__d('ProgressBar',['cx','csx','ProgressBarBase','CSS','Style','DOM'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('ProgressBarBase'));k=j&&j.prototype;function l(m,n,o){'use strict';k.constructor.call(this,n,o);this._root=m;this._meter=c('DOM').find(m,"div._5e4k");this._meter2=c('DOM').scry(m,"div._5e2g")[0];}l.prototype.getRoot=function(){'use strict';return this._root;};l.prototype.updateMeter=function(m){'use strict';var n=Math.min(Math.max(m,0),1);c('CSS').conditionClass(this._meter,"_5e2d",n<=0);c('CSS').conditionClass(this._meter,"_5e4j",n>=1);n=n*100+'%';c('Style').set(this._meter,'width',n);if(this._meter2){c('Style').set(this._meter2,'left',n);c('Style').set(this._meter2,'width',n);}};l.prototype.changeLabel=function(m){'use strict';var n=c('DOM').scry(this._root,"span._5e2h");n.forEach(function(o){c('DOM').setContent(o,m);});return this;};f.exports=l;},null);
__d('FormSubmitOnChange',['Event','submitForm'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._form=i;}h.prototype.enable=function(){'use strict';this._listener=c('Event').listen(this._form.getRoot(),'change',this._submit.bind(this));};h.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};h.prototype._submit=function(){'use strict';c('submitForm')(this._form.getRoot());};Object.assign(h.prototype,{_listener:null});f.exports=h;},null);
__d('VaultBoxURI',['URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j)&&i.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j);},getSyncedTabURI:function(){return new (c('URI'))('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=h;},null);
__d("XEventCreateDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/events\/create\/",{acontext:{type:"String",required:true},page_id:{type:"Int"},group_id:{type:"Int"},event_id_for_copy:{type:"Int"},invite_ids:{type:"IntVector"},default_theme_id:{type:"Int"},default_title:{type:"String"},default_start_time:{type:"Int"},friend_birthday_prompt_xout_id:{type:"FBID"},__asyncDialog:{type:"Int"}});},null);
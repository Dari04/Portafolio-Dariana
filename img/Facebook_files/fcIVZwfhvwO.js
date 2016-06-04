if (self.CavalryLogger) { CavalryLogger.start_js(["oe8mJ"]); }

__d('VideoWithLoopingPlayback',['VideoPlayerReason','setImmediate'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$VideoWithLoopingPlayback2=i;this.$VideoWithLoopingPlayback1=1;this.$VideoWithLoopingPlayback2.addListener('finishPlayback',function(){return this.$VideoWithLoopingPlayback3(j);}.bind(this));this.$VideoWithLoopingPlayback2.registerOption('Looping','isLooping',function(){return true;});}h.prototype.$VideoWithLoopingPlayback3=function(i){'use strict';var j=this.$VideoWithLoopingPlayback2.getOption('FeedAutoplay','isVisibleForAutoplay');if((j||j===undefined)&&(this.$VideoWithLoopingPlayback1<i||i==-1)){c('setImmediate')(function(){return this.$VideoWithLoopingPlayback2.play(c('VideoPlayerReason').LOOP);}.bind(this));this.$VideoWithLoopingPlayback1++;}};f.exports=h;},null);
__d('ProfileVideoPlayerController',['Arbiter','Event','Parent','VideoPlayerReason','destroyOnUnload','getViewportDimensions','setTimeout','tidyEvent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$ProfileVideoPlayerController1=i;this.$ProfileVideoPlayerController2=j;this.$ProfileVideoPlayerController3=false;this.$ProfileVideoPlayerController5();var k=c('Parent').byTag(i.getRootNode(),'a')||i.getRootNode();if(k)c('tidyEvent')(c('Event').listen(k,'mouseover',this.resetPlaybackTimer.bind(this)));if(j&&j.isHovercard)i.addListener('stateChange',function(){if(!this.$ProfileVideoPlayerController4&&i.isState('paused'))this.$ProfileVideoPlayerController4=c('Arbiter').subscribe('Hovercard/show',function(){if(i.isState('paused')&&this.isVisible())this.play(c('VideoPlayerReason').AUTOPLAY);}.bind(this));}.bind(this));c('destroyOnUnload')(function(){return this.$ProfileVideoPlayerController4&&this.$ProfileVideoPlayerController4.unsubscribe();}.bind(this));}h.prototype.isVisible=function(){'use strict';if(this.$ProfileVideoPlayerController1.isFullscreen())return true;var i=c('getViewportDimensions')().height,j=this.getDOMPosition();if(j.height===0)return false;var k=j.y,l=j.y+j.height;if(k<0||l>=i)return false;return true;};h.prototype.play=function(i){'use strict';if(!this.$ProfileVideoPlayerController3)this.$ProfileVideoPlayerController1.play(i);};h.prototype.pause=function(i){'use strict';this.$ProfileVideoPlayerController1.pause(i);};h.prototype.getDOMPosition=function(){'use strict';return this.$ProfileVideoPlayerController1.getDOMPosition();};h.prototype.$ProfileVideoPlayerController5=function(){'use strict';if(this.$ProfileVideoPlayerController2&&this.$ProfileVideoPlayerController2.playback_limit_ms)c('setTimeout')(this.$ProfileVideoPlayerController6.bind(this),this.$ProfileVideoPlayerController2.playback_limit_ms);};h.prototype.resetPlaybackTimer=function(){'use strict';if(this.$ProfileVideoPlayerController3){this.$ProfileVideoPlayerController3=false;this.play(c('VideoPlayerReason').AUTOPLAY);this.$ProfileVideoPlayerController5();}};h.prototype.$ProfileVideoPlayerController6=function(){'use strict';this.pause(c('VideoPlayerReason').AUTOPLAY);this.$ProfileVideoPlayerController3=true;};h.prototype.getPausedPermanently=function(){'use strict';return this.$ProfileVideoPlayerController3;};f.exports=h;},null);
__d('ProfileVideoManager',['Arbiter','DesktopHscrollUnitEventConstants','Event','ProfileVideoPlayerController','SubscriptionsHandler','VideoPlayerReason','Visibility','destroyOnUnload','throttle'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=500;j.registerVideo=function(k,l){'use strict';if(!h)h=new j(l);var m=new (c('ProfileVideoPlayerController'))(k,l);h.addVideoUnit(m);if(m.isVisible())h.updateAutoplay();};function j(k){'use strict';this.$ProfileVideoManager1=k.interval?k.interval:i;this.$ProfileVideoManager2=[];this.$ProfileVideoManager5=[];this.$ProfileVideoManager3=null;this.$ProfileVideoManager4=new (c('SubscriptionsHandler'))();this.$ProfileVideoManager4.addSubscriptions(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),c('Event').listen(window,'blur',this.$ProfileVideoManager7.bind(this)),c('Event').listen(window,'focus',this.$ProfileVideoManager8.bind(this)),c('Visibility').addListener(c('Visibility').HIDDEN,this.$ProfileVideoManager7.bind(this)),c('Visibility').addListener(c('Visibility').VISIBLE,this.$ProfileVideoManager8.bind(this)),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));this.$ProfileVideoManager3=c('Event').listen(window,'scroll',c('throttle')(this.updateAutoplay.bind(this),this.$ProfileVideoManager1));c('destroyOnUnload')(function(){this.$ProfileVideoManager5=[];this.$ProfileVideoManager2=[];if(this.$ProfileVideoManager3)this.$ProfileVideoManager3.remove();this.$ProfileVideoManager3=null;this.$ProfileVideoManager4.release();}.bind(this));}j.prototype.getVideoUnits=function(){'use strict';return this.$ProfileVideoManager5;};j.prototype.addVideoUnit=function(k){'use strict';this.$ProfileVideoManager5.push(k);if(this.$ProfileVideoManager6)k.pause(c('VideoPlayerReason').PAGE_VISIBILITY);this.updateAutoplay();};j.prototype.getPlayingVideoUnits=function(){'use strict';return this.$ProfileVideoManager2;};j.prototype.getVisibleUnits=function(){'use strict';var k=[];this.$ProfileVideoManager5.forEach(function(l){if(l.isVisible())k.push(l);});return k;};j.prototype.updateAutoplay=function(){'use strict';var k=this.getPlayingVideoUnits(),l=this.getVisibleUnits();if(this.$ProfileVideoManager6){k.forEach(function(m){m.pause(c('VideoPlayerReason').PAGE_VISIBILITY);});this.$ProfileVideoManager2=[];}else{k.forEach(function(m){if(l.indexOf(m)===-1)m.pause(c('VideoPlayerReason').AUTOPLAY);});l.forEach(function(m){if(k.indexOf(m)===-1)m.play(c('VideoPlayerReason').AUTOPLAY);});this.$ProfileVideoManager2=l;}};j.prototype.$ProfileVideoManager7=function(){'use strict';this.getPlayingVideoUnits().forEach(function(k){k.pause(c('VideoPlayerReason').PAGE_VISIBILITY);});this.$ProfileVideoManager6=true;this.$ProfileVideoManager2=[];};j.prototype.$ProfileVideoManager8=function(){'use strict';this.$ProfileVideoManager6=false;this.updateAutoplay();};f.exports=j;},null);
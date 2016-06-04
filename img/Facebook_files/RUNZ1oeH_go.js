if (self.CavalryLogger) { CavalryLogger.start_js(["Z1f8w"]); }

__d("GroupSellProductDetailsEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PHOTO_CLICK:"photo_click",SHOW_DIALOG:"show_dialog",HIDE_DIALOG:"hide_dialog",PROFILE_LINK_CLICK:"profile_link_click",GROUP_LINK_CLICK:"group_link_click",PERMALINK_CLICK:"permalink_click",ASYNC_DATA_REQUEST_FAIL:"async_data_request_fail",DIALOG_INSTANCE_NULL:"dialog_instance_null",MESSAGE_SELLER_CLICK:"message_seller_click",UFI_CLICK:"ufi_click",MARK_AS_SOLD_CLICK:"mark_as_sold_click",FAILED_SALE_POST_GEN:"failed_sale_post_gen",PHOTO_SWIPE:"photo_swipe",GROUP_POST_LIKE:"group_post_like",GROUP_POST_COMMENT:"group_post_comment",SUGGESTED_ITEM_VPV:"suggested_item_vpv",SUGGESTED_ITEM_CLICK:"suggested_item_click"};},null);
__d("GroupSellProductDetailsImageAspect",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={HORIZONTAL:"horizontal",VERTICAL:"vertical",WIDE_HORIZONTAL:"wide_horizontal",WIDE_VERTICAL:"wide_vertical",SQUARE:"square",HEIGHT_BOUND:"height_bound"};},null);
__d("StoryRenderLocation",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={HOMEPAGE_STREAM:"homepage_stream",SUMMARY:"summary",ACTIVITY_LOG:"activity_log",BRIEF_ACTIVITY_LOG:"brief_activity_log",TIMELINE:"timeline",NEWSSTAND:"newsstand",GROUP:"group",EVENT:"event",NEWSSTAND_PERMALINK:"newsstand_permalink",TIMELINE_ENTSTREAM:"timeline_entstream",PERMALINK:"permalink",COVER_FEED:"cover_feed",BLENDED_SEARCH_RESULTS:"blended_search",FEED_MOBILE:"feed_mobile",HOME_BUBBLE:"home_bubble",FEED_IMMERSIVE:"feed_immersive",PERMALINK_IMMERSIVE:"permalink_immersive",TIMELINE_IMMERSIVE:"timeline_immersive",GROUP_IMMERSIVE:"group_immersive",COVER_IMMERSIVE:"cover_immersive",TIMELINE_CONTEXT:"timeline_context",EDIT_HISTORY:"edit_history",SNAPTU_FEED:"snaptu_feed",SNAPTU_TIMELINE:"snaptu_timeline",SIDE_FEED:"side_feed",MESSAGE_THREAD:"message_thread",PRESENCE_FEED:"presence_feed",APP_FEED:"app_feed",TRENDING_HOVERCARD:"trending_hovercard",SPACES_FEED:"spaces_feed",GAMETIME_HIGHLIGHTS:"gametime_highlights",VIDEO_CHANNEL:"video_channel",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME:"video_home",GROUPS_LANDING:"groups_landing",BUY_AND_SELL:"buy_and_sell",APPENDABLE_PROMPT:"appendable_prompt",REVIEWS_FEED:"reviews_feed",TOPIC_FEED:"topic_feed",ADMIN_FEED:"admin_feed",BREAKUP_VIEW_POSTS_FEED:"breakup_view_posts_feed",LOCAL_SEARCH_RESULTS_PAGE:"local_search_results_page",PLACE_FEED:"place_feed",NATIVE_TEMPLATES:"native_templates",SEARCH_RESULTS_PAGE:"search_results_page",FUNDRAISER_PAGE:"fundraiser_page",REACTION_OVERLAY:"reaction_overlay",VIDEO_INSTREAM:"video_instream",UNSPECIFIED:"unspecified"};},null);
__d('UFIFeedbackContext.react',['React','UFICentralUpdates','UFIFeedbackTargets'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'UFIFeedbackContext',_feedbackTargetSubscriberID:null,propTypes:{contextArgs:h.object.isRequired,render:h.func.isRequired},contextTypes:{stores:h.object},getInitialState:function(){return {contextArgs:this.props.contextArgs,feedback:null};},loadFeedbackTarget:function(j){if(!this._feedbackTargetSubscriberID)this._feedbackTargetSubscriberID=c('UFIFeedbackTargets').getFeedbackTarget(j,function(k){this._fbTargetSubscriberID=null;this.setState({feedback:k});}.bind(this));},componentDidMount:function(){this.loadFeedbackTarget(this.state.contextArgs.ftentidentifier);this.ufiCentralUpdatesSubscriptions=[c('UFICentralUpdates').subscribe('instance-updated',function(j,k){var l=this.state.contextArgs;if(l.instanceid in k.updates)this.loadFeedbackTarget(l.ftentidentifier);}.bind(this)),c('UFICentralUpdates').subscribe('feedback-updated',function(j,k){var l=this.state.contextArgs;if(l.ftentidentifier in k.updates)this.loadFeedbackTarget(l.ftentidentifier);}.bind(this)),c('UFICentralUpdates').subscribe('feedback-id-changed',function(j,k){var l=this.state.contextArgs;if(l.ftentidentifier in k.updates){var m=k.updates[l.ftentidentifier];this.setState({contextArgs:babelHelpers['extends']({},l,{ftentidentifier:m})});this.loadFeedbackTarget(m);}}.bind(this))];},componentWillUnmount:function(){this.ufiCentralUpdatesSubscriptions.forEach(function(j){return j&&c('UFICentralUpdates').unsubscribe(j);});if(this._feedbackTargetSubscriberID)c('UFIFeedbackTargets').unsubscribe(this._feedbackTargetSubscriberID);},render:function(){if(this.state.feedback)return this.props.render(this.state.contextArgs,this.state.feedback);return null;}});f.exports=i;},null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIActionTypes','UFIAddComment.react','UFICallbackStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFIInstanceState','UFINewCommentNotifier','UFIVideoPlayerRegistry'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.factory=function(i,j){'use strict';new h(i,j);};function h(i,j){'use strict';this.$UFIAddCommentController1=i;this.$UFIAddCommentController2={videoTimeOffset:null};this.$UFIAddCommentController3=j;this.$UFIAddCommentController3.rootid=i.id;this.$UFIAddCommentController4=new (c('UFIDispatcher'))();this.$UFIAddCommentController5={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController4)};this.$UFIAddCommentController5.UFICallbackStore.on(c('UFIActionTypes').ADD_COMMENT.SUBMIT_NEW,function(k){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(i,'form'),this.$UFIAddCommentController3,k.comment,k.target,k.replyCommentID,k.timestamp,this.$UFIAddCommentController2.videoTimeOffset);}.bind(this));if(this.$UFIAddCommentController3.isFluentWithContent)c('UFIVideoPlayerRegistry').registerUFIController(this.$UFIAddCommentController1,function(k){k.addListener('updateStatus',function(l){this.$UFIAddCommentController2.videoTimeOffset=Math.floor(l.position);}.bind(this));}.bind(this));this.render();}h.prototype.render=function(){'use strict';var i=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController4,stores:this.$UFIAddCommentController5},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController3,render:this.renderAddComment}));c('ReactDOM').render(i,this.$UFIAddCommentController1);};h.prototype.renderAddComment=function(i,j){'use strict';var k=c('UFIInstanceState').getKeyForInstance(i.instanceid,'isediting');if(k||!j||!j.cancomment||!j.actorforpost)return null;return (c('React').createElement(c('UFIAddComment.react'),{viewerActorID:j.actorforpost,replyCommentID:null,targetID:j.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:j.mentionsdatasource,showSendOnEnterTip:j.showsendonentertip,allowPhotoAttachments:j.allowphotoattachments&&!i.islivestreaming,allowVideoAttachments:j.allowvideoattachments&&!i.islivestreaming,allowStickerAttachments:j.allowstickerattachments&&!i.islivestreaming,contextArgs:i,subtitle:j.subtitle,isQAndA:j.isqanda}));};f.exports=h;},null);
__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'MentionsInputTypeaheadView',propTypes:{id:i.string,highlightedEntry:i.object,entries:i.array.isRequired,onSelect:i.func.isRequired,onHighlight:i.func,onRenderHighlight:i.func},_renderItem:function(k){var l=k===this.props.highlightedEntry;return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:k.getUniqueID(),entry:k,highlighted:l,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var k="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return (c('React').createElement('ul',{className:k,role:'listbox',id:this.props.id},this.props.entries.map(this._renderItem)));}});f.exports=j;},null);
__d('GroupSellProductDetailActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$GroupSellProductDetailActionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$GroupSellProductDetailActionsTypedLogger1=babelHelpers['extends']({},this.$GroupSellProductDetailActionsTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$GroupSellProductDetailActionsTypedLogger1.event=j;return this;};h.prototype.setGroupID=function(j){this.$GroupSellProductDetailActionsTypedLogger1.group_id=j;return this;};h.prototype.setIsEmployee=function(j){this.$GroupSellProductDetailActionsTypedLogger1.is_employee=j;return this;};h.prototype.setReferralSurface=function(j){this.$GroupSellProductDetailActionsTypedLogger1.referral_surface=j;return this;};h.prototype.setStoryID=function(j){this.$GroupSellProductDetailActionsTypedLogger1.story_id=j;return this;};h.prototype.setSurface=function(j){this.$GroupSellProductDetailActionsTypedLogger1.surface=j;return this;};h.prototype.setVC=function(j){this.$GroupSellProductDetailActionsTypedLogger1.vc=j;return this;};var i={event:true,group_id:true,is_employee:true,referral_surface:true,story_id:true,surface:true,vc:true};f.exports=h;},null);
__d('GroupCommerceProductDetailImageContainer.react',['cx','DOM','Event','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','Image.react','React','ScrollableArea.react','Style','Vector'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=38,m=483;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;function n(o,p){j.constructor.call(this,o,p);var q=this;q.$GroupCommerceProductDetailImageContainer2=this.$GroupCommerceProductDetailImageContainer2.bind(this);q.$GroupCommerceProductDetailImageContainer3=this.$GroupCommerceProductDetailImageContainer3.bind(this);this.state={currentIndex:0,stageWidth:m,stageHeight:558};}n.prototype.render=function(){return (c('React').createElement('div',null,c('React').createElement('div',{className:"_57xm"},this.$GroupCommerceProductDetailImageContainer4()),c('React').createElement('div',{className:"_57xn"},this.props.media.length==0?this.$GroupCommerceProductDetailImageContainer5():this.$GroupCommerceProductDetailImageContainer6())));};n.prototype.componentDidUpdate=function(o,p){if(this.props.media&&this.props.media.length>1&&this.props.media!==o.media){this.$GroupCommerceProductDetailImageContainer7();this.$GroupCommerceProductDetailImageContainer1=c('Event').listen(document.body,'keydown',this.$GroupCommerceProductDetailImageContainer3);}else if(!this.props.media||this.props.media.length<1)this.$GroupCommerceProductDetailImageContainer7();};n.prototype.componentWillUnmount=function(){this.$GroupCommerceProductDetailImageContainer7();};n.prototype.componentWillReceiveProps=function(o){var p=this;if(this.props.media!==o.media){var q=0;if(o.media.length<1){this.setState({stageWidth:m});}else (function(){var r=p.props.query;if(r&&r.fbid){q=o.media.findIndex(function(s){return s.id.toString()===r.fbid;});if(q==-1)q=0;}p.$GroupCommerceProductDetailImageContainer8(q,o.media);})();this.setState({currentIndex:q});}};n.prototype.$GroupCommerceProductDetailImageContainer5=function(){var o=this.props.elem;if(!o)return null;var p=c('DOM').scry(o,'img')[0],q=c('DOM').scry(o,'i')[0],r=null,s=null;if(p){r=p.src;s=c('Vector').from(p.naturalWidth,p.naturalHeight);}else if(q){r=c('Style').get(q,'backgroundImage').replace(/.*url\("?([^"]*)"?\).*/,'$1');s=c('Vector').from(p.naturalWidth,p.naturalHeight);}else return null;if(!s.x||!s.y||!r)return null;return (c('React').createElement(c('Image.react'),{className:"_580_",width:s.x,height:s.y,src:r,style:this.$GroupCommerceProductDetailImageContainer9(s.x,s.y)}));};n.prototype.$GroupCommerceProductDetailImageContainer3=function(event){switch(event.keyCode){case 37:case 38:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer10();break;case 39:case 40:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer11();break;}};n.prototype.$GroupCommerceProductDetailImageContainer7=function(){if(this.$GroupCommerceProductDetailImageContainer1){this.$GroupCommerceProductDetailImageContainer1.remove();this.$GroupCommerceProductDetailImageContainer1=null;}};n.prototype.$GroupCommerceProductDetailImageContainer2=function(o){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PHOTO_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.$GroupCommerceProductDetailImageContainer8(o,this.props.media);this.setState({currentIndex:o});};n.prototype.$GroupCommerceProductDetailImageContainer8=function(o,p){var q=p[o],r=this.state.stageWidth;switch(q.aspect){case c('GroupSellProductDetailsImageAspect').HORIZONTAL:case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:r=744;break;case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:r=314;break;case c('GroupSellProductDetailsImageAspect').VERTICAL:r=419;break;case c('GroupSellProductDetailsImageAspect').SQUARE:r=558;break;case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:r=q.width;break;}this.props.onResize(q.aspect,r);this.setState({stageWidth:r});};n.prototype.$GroupCommerceProductDetailImageContainer11=function(){var o=this.state.currentIndex+1,p=this.props.media.length-1;if(o>p)o=0;this.$GroupCommerceProductDetailImageContainer2(o);};n.prototype.$GroupCommerceProductDetailImageContainer10=function(){var o=this.state.currentIndex-1,p=this.props.media.length-1;if(o<0)o=p;this.$GroupCommerceProductDetailImageContainer2(o);};n.prototype.$GroupCommerceProductDetailImageContainer6=function(){var o=[],p=this.props.media.length;for(var q=0;q<p;q++){var r=this.props.media[q];o.push(c('React').createElement(c('Image.react'),{className:(this.state.currentIndex!=q?"_5810":'')+(' '+"_580_"),width:r.width,height:r.height,src:r.uri,key:'stage'+r.id,style:this.$GroupCommerceProductDetailImageContainer9(r.width,r.height)}));}return o;};n.prototype.$GroupCommerceProductDetailImageContainer9=function(o,p){var q=0;if(o>this.state.stageWidth){q=this.state.stageWidth/o;o*=q;p*=q;}if(p>this.state.stageHeight){q=this.state.stageHeight/p;o*=q;p*=q;}return {paddingTop:(this.state.stageHeight-p)/2+'px',paddingLeft:(this.state.stageWidth-o)/2+'px',maxWidth:this.state.stageWidth,maxHeight:this.state.stageHeight};};n.prototype.$GroupCommerceProductDetailImageContainer4=function(){var o=[],p=this.props.media.length;for(var q=0;q<p;q++){var r=this.props.media[q];o.push(c('React').createElement(c('Image.react'),{className:"_5811"+(this.state.currentIndex==q?' '+"_5812":''),width:l,height:l,src:r.uriThumb,onClick:this.$GroupCommerceProductDetailImageContainer2.bind(this,q),key:'thumbnail'+r.id}));}return (c('React').createElement('div',null,c('React').createElement(c('ScrollableArea.react'),{height:this.props.maxHeight,shadow:false},o),c('React').createElement('div',{className:"_2dh4",style:{width:l}})));};n.propTypes={group:k.object.isRequired,media:k.any.isRequired,onResize:k.func.isRequired,maxHeight:k.number.isRequired,storyID:k.string,query:k.object,elem:k.object};f.exports=n;},null);
__d('GroupCommerceProductDetailRHCContent.react',['cx','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','XUIText.react'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){var n=this.$GroupCommerceProductDetailRHCContent1(),o=this.$GroupCommerceProductDetailRHCContent2();return (c('React').createElement('div',{className:"_4g63"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},c('React').createElement('div',{className:"_4g65"},o,n,c('React').createElement(c('XUIText.react'),{className:"_4g66"},this.props.product.price),c('React').createElement('div',{className:"_4g67"},this.props.description,c('React').createElement('div',{className:"_4g68"},this.props.actionButton))),c('React').createElement('div',{className:"_4g6d",ref:'ufi',onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').UFI_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();}.bind(this)},this.props.ufi)));};m.prototype.$GroupCommerceProductDetailRHCContent2=function(){var n=this.props.product.statusText?this.props.product.statusText+' '+this.props.product.title:this.props.product.title;return (c('React').createElement(c('XUIText.react'),{id:this.props.titleID,className:"_4g6e"},n));};m.prototype.$GroupCommerceProductDetailRHCContent1=function(){var n=!this.props.product.deliveryNote?null:c('React').createElement(c('XUIText.react'),{display:'inline'},this.props.product.deliveryNote),o=n?' \u00b7 ':null,p=n?c('React').createElement(c('Image.react'),{className:"_4g6g",src:i('images/groups/sell/place_icon_sell.png')}):null;return (c('React').createElement('div',{className:"_4g6h"},p,c('React').createElement(c('XUIText.react'),null,n),o,c('React').createElement('div',{className:"_4g6i"},c('React').createElement(c('Link.react'),{href:this.props.product.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PERMALINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}.bind(this)},this.props.timestamp))));};function m(){j.apply(this,arguments);}m.propTypes={actor:l.object.isRequired,product:l.object.isRequired,group:l.object.isRequired,feedback:l.object.isRequired,timestamp:l.any.isRequired,ufi:l.any.isRequired,actionButton:l.any.isRequired,storyID:l.string,description:l.any.isRequired,titleID:l.string};f.exports=m;},null);
__d('GroupCommerceProductDetailRHCFooter.react',['cx','Event','MentionsInputTypeaheadView.react','React','ReactDOM','UFIAddCommentController','UFIMentionsInputProxy.react'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.componentDidMount=function(){this.$GroupCommerceProductDetailRHCFooter1=c('Event').listen(c('ReactDOM').findDOMNode(this.refs.ufiAddComment),'keydown',this.$GroupCommerceProductDetailRHCFooter2);};l.prototype.createUFIAddComment=function(m){if(m.ufi&&m.ufi.params){m.ufi.params.mentionsinput={inputComponent:c('UFIMentionsInputProxy.react'),viewComponent:c('MentionsInputTypeaheadView.react')};new (c('UFIAddCommentController'))(c('ReactDOM').findDOMNode(this.refs.ufiAddComment),m.ufi.params).render();}};l.prototype.componentWillUnmount=function(){if(this.$GroupCommerceProductDetailRHCFooter1){this.$GroupCommerceProductDetailRHCFooter1.remove();this.$GroupCommerceProductDetailRHCFooter1=null;}};l.prototype.render=function(){return (c('React').createElement('div',{className:"_3g6i"+(!this.props.actor.profilePicURI?' '+"_34xy":''),key:this.props.ufiInstanceID,ref:'ufiAddComment'}));};l.prototype.$GroupCommerceProductDetailRHCFooter2=function(event){switch(event.keyCode){case 37:case 38:case 39:case 40:event.stopPropagation();break;}};function l(){i.apply(this,arguments);}l.propTypes={ufiInstanceID:k.string.isRequired,ufi:k.object.isRequired,actor:k.object.isRequired};f.exports=l;},null);
__d('GroupCommerceProductDetailRHCHeader.react',['cx','fbt','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','ReactLayeredComponentMixin','XUIContextualDialog.react','XUIContextualDialogBody.react','classWithMixins','mixin'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes,n=104,o=56;k=babelHelpers.inherits(p,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactLayeredComponentMixin'))));l=k&&k.prototype;p.prototype.renderLayers=function(){return {contextualDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.recommendation;}.bind(this),offsetX:-8,shown:true,hoverContextRef:function(){return this.refs.recommendation;}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.recommendationID}))),actorDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.actorName;}.bind(this),shown:true,hoverContextRef:function(){return this.refs.actorName;}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.actorHoverID}))),actorImageDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.actorImage;}.bind(this),shown:true,hoverContextRef:function(){return this.refs.actorImage;}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.actorImageHoverID}))),groupDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.groupName;}.bind(this),shown:true,hoverContextRef:function(){return this.refs.groupName;}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.groupHoverID})))};};p.prototype.render=function(){var q=this.$GroupCommerceProductDetailRHCHeader1();return (c('React').createElement('div',{className:"_34xx"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},c('React').createElement(c('Image.react'),{className:"_34xz",width:o,height:o,src:this.props.actor.profilePicURI,ref:'actorImage'}),c('React').createElement('div',{className:"_34x-"},c('React').createElement('div',{className:"_34x_"},c('React').createElement('div',{ref:'actorName',className:"_34y0"},c('React').createElement(c('Link.react'),{href:this.props.actor.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PROFILE_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}.bind(this)},this.props.actor.name)),c('React').createElement(c('Image.react'),{className:"_34y1",src:j('images/icons/wall_arrow.gif')}),c('React').createElement('div',{ref:'groupName',className:"_34y0"},c('React').createElement(c('Link.react'),{href:this.props.group.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').GROUP_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}.bind(this)},this.props.group.name))),c('React').createElement('div',{ref:'recommendation',className:"_34y2"},q)),c('React').createElement('div',{id:this.props.chevronID})));};p.prototype.$GroupCommerceProductDetailRHCHeader1=function(){if(!this.props.actor.hasRecommendations)return null;var q=this.props.actor.recommendationsCount,r=this.props.actor.maxRecommendations,s=q<r?q:i._("{count}+",[i.param('count',r-1)]),t=q!==1?i._("{count} personas recomendaron a {short name of user}",[i.param('count',s),i.param('short name of user',this.props.actor.shortName)]):i._("{count} persona recomend\u00f3 a {short name of user}",[i.param('count',s),i.param('short name of user',this.props.actor.shortName)]);return (c('React').createElement('div',null,c('React').createElement('div',{className:"_1my1"+(!q?' '+"_29jg":'')}),c('React').createElement('div',{className:"_34y3"},t)));};p.prototype.componentDidUpdate=function(q,r){var s=this.refs.actorName.offsetWidth,t=n-s;this.refs.groupName.style.maxWidth=n+t+'px';};function p(){k.apply(this,arguments);}p.propTypes={actor:m.object.isRequired,group:m.object.isRequired,storyID:m.string,recommendationID:m.string.isRequired,actorHoverID:m.string.isRequired,actorImageHoverID:m.string.isRequired,groupHoverID:m.string.isRequired,chevronID:m.string.isRequired};f.exports=p;},null);
__d("XGroupCommerceMarketplaceProductDetailController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/marketplace\/product_detail\/",{sale_post_id:{type:"FBID",required:true},ufi_id:{type:"String",required:true},date_time_id:{type:"String",required:true},action_button_id:{type:"String",required:true},recommendation_dialog_id:{type:"String",required:true},actor_dialog_id:{type:"String",required:true},actor_image_dialog_id:{type:"String",required:true},description_id:{type:"String",required:true},title_id:{type:"String",required:true},group_hover_id:{type:"String",required:true},ufi_instance_id:{type:"String",required:true},chevron_id:{type:"String",required:true}});},null);
__d("XGroupCommerceMarketplaceSimilarProductsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/marketplace\/similar_products\/",{rid:{type:"Int"},rt:{type:"Enum",enumType:0},location:{type:"Enum",enumType:1},share_id:{type:"Int"},sale_post_id:{type:"FBID",required:true},post_dom_id:{type:"String",required:true},render_location:{type:"Enum",required:true,enumType:1}});},null);
__d('GroupCommerceProductDetail.react',['csx','cx','fbt','Arbiter','AsyncRequest','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','LayerFadeOnHide','LayerHideOnEscape','LeftRight.react','GroupCommerceProductDetailRHCHeader.react','GroupCommerceProductDetailImageContainer.react','GroupCommerceProductDetailRHCContent.react','GroupCommerceProductDetailRHCFooter.react','StoryRenderLocation','Parent','React','ReactLayeredComponentMixin','ReactRenderer','ResponsiveBlock.react','ScrollableArea.react','XGroupCommerceMarketplaceProductDetailController','XGroupCommerceMarketplaceSimilarProductsController','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react','classWithMixins','guid','mixin'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=495,n=530,o=891;k=babelHelpers.inherits(p,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactLayeredComponentMixin'))));l=k&&k.prototype;function p(q,r){l.constructor.call(this,q,r);var s=this;s.hideDialog=this.hideDialog.bind(this);s.showDialog=this.showDialog.bind(this);s.$GroupCommerceProductDetail3=this.$GroupCommerceProductDetail3.bind(this);s.$GroupCommerceProductDetail4=this.$GroupCommerceProductDetail4.bind(this);s.$GroupCommerceProductDetail5=this.$GroupCommerceProductDetail5.bind(this);s.$GroupCommerceProductDetail6=this.$GroupCommerceProductDetail6.bind(this);this.$GroupCommerceProductDetail2={};this.state={isDialogShown:false,width:o,rhcHeight:200,payload:this.$GroupCommerceProductDetail7(),ufiID:'ufi_detail_'+c('guid')(),datetimeID:'datetime_'+c('guid')(),actionButtonID:'actionButton'+c('guid')(),recommendationDialogID:'recommendationDialogID'+c('guid')(),actorHoverID:'actorHoverID'+c('guid')(),actorImageHoverID:'actorImageHoverID'+c('guid')(),descriptionID:'descriptionID'+c('guid')(),titleID:'titleID'+c('guid')(),groupHoverID:'groupHoverID'+c('guid')(),ufiInstanceID:'ufiInstanceID'+c('guid')(),chevronID:'chevronID'+c('guid')(),query:null,elem:null,salePostID:null};}p.prototype.componentDidMount=function(){this.$GroupCommerceProductDetail1=c('Arbiter').subscribe('XComposerEditDialog/doneEditing',function(){this.$GroupCommerceProductDetail8(this.state.salePostID);}.bind(this));};p.prototype.componentWillUnmount=function(){var q=this.refs.modal;if(q!=null)q.layer.hide();p.$GroupCommerceProductDetail9=null;this.$GroupCommerceProductDetail1&&this.$GroupCommerceProductDetail1.unsubscribe();this.$GroupCommerceProductDetail1=null;};p.prototype.renderLayers=function(){var q=c('React').createElement('div',{id:this.state.datetimeID}),r=c('React').createElement('div',{id:this.state.ufiID}),s=c('React').createElement('div',{id:this.state.actionButtonID}),t=c('React').createElement('div',{className:"_3g5q",id:this.state.descriptionID});return {dialog:c('React').createElement(c('XUIDialog.react'),{className:"_5p3y",shown:this.state.isDialogShown,onToggle:this.$GroupCommerceProductDetail3,ref:'modal',width:this.state.width,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')}},c('React').createElement(c('XUIDialogTitle.react'),null,j._("Detalles del art\u00edculo")),c('React').createElement(c('XUIDialogBody.react'),null,c('React').createElement('div',{className:"_3g6d"},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',{className:"_3g6e"},c('React').createElement(c('GroupCommerceProductDetailImageContainer.react'),{group:this.state.payload.group,media:this.state.payload.media,maxHeight:n,storyID:this.state.payload.storyID,query:this.state.query,elem:this.state.elem,onResize:this.$GroupCommerceProductDetail6})),c('React').createElement('div',{className:"_3g6f"},c('React').createElement(c('ScrollableArea.react'),{className:"_3g6g",height:this.state.rhcHeight},c('React').createElement(c('ResponsiveBlock.react'),{className:"_3g6h",onResize:this.$GroupCommerceProductDetail4},c('React').createElement(c('GroupCommerceProductDetailRHCHeader.react'),{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,recommendationID:this.state.recommendationDialogID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID}),c('React').createElement(c('GroupCommerceProductDetailRHCContent.react'),{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,timestamp:q,actionButton:s,ufi:r,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:t,titleID:this.state.titleID}))),c('React').createElement(c('GroupCommerceProductDetailRHCFooter.react'),{actor:this.state.payload.actor,ref:'rhcFooter',className:"_3g6i",ufiInstanceID:this.state.ufiInstanceID,ufi:this.state.payload.ufi}))))))};};p.prototype.render=function(){return null;};p.prototype.showDialog=function(q,r,s){this.$GroupCommerceProductDetail8(q);this.setState({payload:this.$GroupCommerceProductDetail7(),salePostID:q,query:r,elem:s,isDialogShown:true,width:o});this.$GroupCommerceProductDetail10(q,s);};p.prototype.$GroupCommerceProductDetail8=function(q){var r=c('XGroupCommerceMarketplaceProductDetailController').getURIBuilder().setFBID('sale_post_id',q).setString('ufi_id',this.state.ufiID).setString('date_time_id',this.state.datetimeID).setString('action_button_id',this.state.actionButtonID).setString('recommendation_dialog_id',this.state.recommendationDialogID).setString('actor_dialog_id',this.state.actorHoverID).setString('actor_image_dialog_id',this.state.actorImageHoverID).setString('description_id',this.state.descriptionID).setString('title_id',this.state.titleID).setString('group_hover_id',this.state.groupHoverID).setString('ufi_instance_id',this.state.ufiInstanceID).setString('chevron_id',this.state.chevronID).getURI();new (c('AsyncRequest'))().setURI(r).setMethod('GET').setHandler(this.$GroupCommerceProductDetail5).setErrorHandler(function(s){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').ASYNC_DATA_REQUEST_FAIL).setStoryID(q.toString()).log();}).setReadOnly(true).send();};p.prototype.$GroupCommerceProductDetail10=function(q,r){var s=r&&c('Parent').bySelector(r,"._4-u2");if(!r||!r.dataset.renderLocation||!s)return;var t=s.id;if(!t||this.$GroupCommerceProductDetail2[t])return;this.$GroupCommerceProductDetail2[t]=true;var u=c('XGroupCommerceMarketplaceSimilarProductsController').getURIBuilder().setFBID('sale_post_id',q).setString('post_dom_id',t).setEnum('render_location',r.dataset.renderLocation).getURI();new (c('AsyncRequest'))().setURI(u).setMethod('GET').setHandler(this.$GroupCommerceProductDetail11).setErrorHandler(function(v){}).setReadOnly(true).send();};p.prototype.$GroupCommerceProductDetail11=function(q){var r=q.getPayload();if(!r||!r.length)return;};p.prototype.hideDialog=function(){this.$GroupCommerceProductDetail3(false);};p.prototype.$GroupCommerceProductDetail6=function(q,r){var s=this.state.width;switch(q){case c('GroupSellProductDetailsImageAspect').HORIZONTAL:case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:s=1153;break;case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:s=723;break;case c('GroupSellProductDetailsImageAspect').VERTICAL:s=828;break;case c('GroupSellProductDetailsImageAspect').SQUARE:s=967;break;case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:s=r+409;break;}this.setState({width:s});};p.prototype.$GroupCommerceProductDetail4=function(q,r){if(r>m)r=m;this.setState({rhcHeight:r});};p.prototype.$GroupCommerceProductDetail3=function(q){if(p.$GroupCommerceProductDetail9!==null)this.setState({isDialogShown:q});if(!q){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').HIDE_DIALOG).setStoryID(this.state.payload.storyID).setGroupID(this.state.payload.group.id).log();if(p.$GroupCommerceProductDetail9!==null)setTimeout(function(){this.setState({payload:this.$GroupCommerceProductDetail7(),query:null,elem:null});}.bind(this));}};p.prototype.$GroupCommerceProductDetail7=function(){return {actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}};};p.prototype.$GroupCommerceProductDetail5=function(q){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').SHOW_DIALOG).setStoryID(q.payload.storyID).setGroupID(q.payload.group.id).log();this.refs.rhcFooter.createUFIAddComment(q.payload);this.setState({payload:q.payload,isDialogShown:true});};p.init=function(q){var r=c('ReactRenderer').constructAndRenderComponent(p,{},q);p.$GroupCommerceProductDetail12=q;p.$GroupCommerceProductDetail9=r;if(p.$GroupCommerceProductDetail13){p.showDialog(p.$GroupCommerceProductDetail13,p.$GroupCommerceProductDetail14,p.$GroupCommerceProductDetail15);p.$GroupCommerceProductDetail13=null;p.$GroupCommerceProductDetail14=null;p.$GroupCommerceProductDetail15=null;}};p.showDialog=function(q,r,s){if(!p.$GroupCommerceProductDetail9){if(!p.$GroupCommerceProductDetail12){p.$GroupCommerceProductDetail13=q;p.$GroupCommerceProductDetail14=r;p.$GroupCommerceProductDetail15=s;return;}p.init(p.$GroupCommerceProductDetail12);}if(!p.$GroupCommerceProductDetail9){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').DIALOG_INSTANCE_NULL).setStoryID(q.toString()).log();return;}p.$GroupCommerceProductDetail9.showDialog(q,r,s);};p.$GroupCommerceProductDetail9=null;p.$GroupCommerceProductDetail13=null;p.$GroupCommerceProductDetail12=null;p.$GroupCommerceProductDetail15=null;p.$GroupCommerceProductDetail14=null;f.exports=p;},null);
__d('GroupCommerceProductDetailLayer',['Layer','GroupCommerceProductDetail.react'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Layer'));i=h&&h.prototype;j.prototype._buildWrapper=function(k,l){c('GroupCommerceProductDetail.react').init(l);return l;};function j(){h.apply(this,arguments);}f.exports=j;},null);
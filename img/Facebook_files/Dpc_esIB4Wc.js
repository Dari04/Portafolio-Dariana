if (self.CavalryLogger) { CavalryLogger.start_js(["uOFIt"]); }

__d('StarsInput.react',['cx','fbt','invariant','React','TooltipLink.react','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m={CUMULATIVE:'CUMULATIVE',SINGLE:'SINGLE'},n={STAR:'STAR',BOX:'BOX'};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(p){l.constructor.call(this,p);if(p.initialStars)!Number.isInteger(p.initialStars)?j(0):void 0;this.state={starRating:p.initialStars!=undefined?p.initialStars:p.count,starsShown:p.initialStars!=undefined?p.initialStars:p.count,canUpdate:true};}o.prototype.onMouseEnter=function(p,event){if(this.state.canUpdate){this.setState({starsShown:p});this.props.onMouseEnter&&this.props.onMouseEnter(p);}};o.prototype.onMouseLeave=function(p,event){if(this.state.canUpdate){var q=this.state.starRating;this.setState({starsShown:q});this.props.onMouseLeave&&this.props.onMouseLeave(p);}};o.prototype.onClick=function(p,event){if(this.state.canUpdate){this.setState({starRating:p,starsShown:p,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(p);}};o.prototype.$StarsInput1=function(p,q,r){if(this.props.displayMode==m.SINGLE){return r?p+1==q:true;}else return r?p<q:p>=q;};o.prototype.$StarsInput2=function(p,q){var r="mls"+(' '+"_22mm")+(!this.state.canUpdate?' '+"_1g87":'');if(this.props.shape==n.BOX){var s="_5fx1"+(this.$StarsInput1(p,q,false)?' '+"_5fx2":'')+(this.$StarsInput1(p,q,true)?' '+"_5fx3":'');return c('joinClasses')(r,s);}else{var t=(this.props.large?"_1vr2":'')+(this.$StarsInput1(p,q,false)?' '+"_22mn":'')+(this.$StarsInput1(p,q,true)?' '+"_22mo":'');return c('joinClasses')(r,t);}};o.prototype.getStars=function(){if(!this.props.starLabels)return [];var p=this.props.starLabels.length,q=[],r=this.state.starsShown?this.state.starsShown:0;for(var s=0;s<p;s++){var t=s+1;q.push(c('React').createElement(c('TooltipLink.react'),{className:this.$StarsInput2(s,r),key:s,tooltip:this.props.starLabels&&this.props.starLabels[s],onMouseEnter:this.onMouseEnter.bind(this,t),onMouseLeave:this.onMouseLeave.bind(this,t),onClick:this.onClick.bind(this,t),position:'above',alignH:'center'}));}return q;};o.prototype.render=function(){return (c('React').createElement('div',{className:this.props.className},this.getStars()));};o.defaultProps={allowMultipleSubmissions:false,count:0,large:false,starLabels:[i._("Deficiente"),i._("Aceptable"),i._("Bueno"),i._("Muy bueno"),i._("Excelente")],displayMode:m.CUMULATIVE,shape:n.STAR,className:undefined,initialStars:undefined,onMouseEnter:undefined,onMouseLeave:undefined};f.exports=o;},null);
__d('XUIOverlayButton.react',['cx','AbstractButton.react','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIOverlayButton',render:function(){var j="_51tl selected";return (c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,j)})));}});f.exports=i;},null);
__d('SingleSelectorBase',['csx','cx','invariant','ArbiterMixin','Alignment','BehaviorsMixin','Button','CSS','DOM','DOMQuery','Event','Layer','LayerBounds','Locale','Rect','ParameterizedPopover','PopoverMenu','Scroll','SelectableMenuUtils','Style','getOverlayZIndex','mixin','throttle'],function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('Alignment').Anchor,n=c('Locale').isRTL()?m.RIGHT:m.LEFT,o=16;k=babelHelpers.inherits(p,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));l=k&&k.prototype;function p(r,s,t,u){'use strict';l.constructor.call(this);this.$SingleSelectorBase1=r;this.$SingleSelectorBase2=null;this.$SingleSelectorBase3=c('DOM').create('div',{});this.$SingleSelectorBase4=new (c('Layer'))({classNames:["_5xew"]},this.$SingleSelectorBase3);this.$SingleSelectorBase5=new (c('ParameterizedPopover'))(r.parentNode,r,[],babelHelpers['extends']({},t,{layer:this.$SingleSelectorBase4}));this.$SingleSelectorBase5.subscribe('show',this.$SingleSelectorBase6.bind(this));this.$SingleSelectorBase5.subscribe('hide',this.$SingleSelectorBase7.bind(this));this.$SingleSelectorBase8=new (c('PopoverMenu'))(this.$SingleSelectorBase5,r,s,[]);this.setMenu(s);if(u&&u.behaviors)this.enableBehaviors(u.behaviors);}p.prototype.$SingleSelectorBase6=function(){'use strict';this.$SingleSelectorBase9();this.$SingleSelectorBase10();c('CSS').conditionClass(this.$SingleSelectorBase4.getRoot(),"_5xex",this.$SingleSelectorBase11());c('Style').set(this.$SingleSelectorBase4.getRoot(),'min-width',this.$SingleSelectorBase1.offsetWidth+o+'px');var r=c('DOM').scry(this.$SingleSelectorBase3,'div.uiScrollableAreaWrap')[0];if(r){var s=c('Alignment').measure(new m(this.$SingleSelectorBase12(),n,m.MIDDLE),new m(this.$SingleSelectorBase2.getRoot(),n,m.MIDDLE));c('Scroll').setTop(r,c('Scroll').getTop(r)-s.y);}this.align();this.getMenu().focusAnItem();if(!this.$SingleSelectorBase13)this.$SingleSelectorBase13=c('Event').listen(window,'resize',c('throttle')(this.align.bind(this)));this.inform('show');};p.prototype.$SingleSelectorBase7=function(){'use strict';if(this.$SingleSelectorBase13){this.$SingleSelectorBase13.remove();this.$SingleSelectorBase13=null;}this.inform('hide');};p.prototype.$SingleSelectorBase14=function(r,s){'use strict';this.$SingleSelectorBase15=null;if(!this.$SingleSelectorBase16)this.inform('change',s);};p.prototype.isShown=function(){'use strict';return this.$SingleSelectorBase5.isShown();};p.prototype.setValue=function(r){'use strict';if(this.isShown()){this.$SingleSelectorBase17(r,false);}else{this.$SingleSelectorBase18=r;this.$SingleSelectorBase19=false;}};p.prototype.setValueWithoutChange=function(r){'use strict';if(this.isShown()){this.$SingleSelectorBase17(r,true);}else{this.$SingleSelectorBase18=r;this.$SingleSelectorBase19=true;}};p.prototype.$SingleSelectorBase10=function(){'use strict';if(this.$SingleSelectorBase18){this.$SingleSelectorBase17(this.$SingleSelectorBase18,this.$SingleSelectorBase19);this.$SingleSelectorBase18=null;}};p.prototype.$SingleSelectorBase17=function(r,s){'use strict';this.$SingleSelectorBase16=s;this.$SingleSelectorBase2.setValue(r);this.$SingleSelectorBase16=null;};p.prototype.getValue=function(){'use strict';return this.getSelectedItem().getValue();};p.prototype.getLayer=function(){'use strict';return this.$SingleSelectorBase4;};p.prototype.getButton=function(){'use strict';return this.$SingleSelectorBase1;};p.prototype.setMenu=function(r){'use strict';if(this.isShown()){this.$SingleSelectorBase20(r);}else this.$SingleSelectorBase21=r;};p.prototype.$SingleSelectorBase9=function(){'use strict';if(this.$SingleSelectorBase21){this.$SingleSelectorBase20(this.$SingleSelectorBase21);this.$SingleSelectorBase21=null;}};p.prototype.$SingleSelectorBase20=function(r){'use strict';if(r!==this.$SingleSelectorBase2){this.$SingleSelectorBase2=r;if(this.$SingleSelectorBase22)this.$SingleSelectorBase22.unsubscribe();this.$SingleSelectorBase22=this.$SingleSelectorBase2.subscribe('change',this.$SingleSelectorBase14.bind(this));c('DOM').setContent(this.$SingleSelectorBase3,r.getRoot());this.$SingleSelectorBase8.setMenu(r);this.$SingleSelectorBase15=null;}};p.prototype.getMenu=function(){'use strict';return this.$SingleSelectorBase21||this.$SingleSelectorBase2;};p.prototype.enable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,true);this.$SingleSelectorBase5.enable();};p.prototype.disable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,false);this.$SingleSelectorBase5.disable();};p.prototype.$SingleSelectorBase11=function(){'use strict';return (c('Style').isFixed(this.$SingleSelectorBase1)&&!c('Style').isFixed(this.$SingleSelectorBase4.getRoot().parentNode));};p.prototype.align=function(){'use strict';if(!this.$SingleSelectorBase15)this.$SingleSelectorBase15=this.getAlignment();this.$SingleSelectorBase15.align();var r=c('Rect').getElementBounds(this.$SingleSelectorBase2.getRoot()),s=c('LayerBounds').getViewportRectForContext(this.$SingleSelectorBase1),t=r.t-s.t,u=s.b-r.b,v=r.l-s.l,w=s.r-r.r,x=this.$SingleSelectorBase4.getRoot();if(t<10){q(x,'top',-t+10);}else if(u<10)q(x,'top',u-10);if(v<10){q(x,'left',-v+10);}else if(w<10)q(x,'left',w-10);var y=c('getOverlayZIndex')(this.$SingleSelectorBase1,this.$SingleSelectorBase4.getInsertParent());c('Style').set(this.$SingleSelectorBase4.getRoot(),'z-index',y>200?y:'');};p.prototype.getAlignment=function(){'use strict';return new (c('Alignment'))(new m(this.$SingleSelectorBase4.getRoot(),m.TOP,m.LEFT),new m(this.$SingleSelectorBase12(),n,m.MIDDLE),new m(this.$SingleSelectorBase23(),n,m.MIDDLE));};p.prototype.$SingleSelectorBase23=function(){'use strict';return c('DOMQuery').find(this.$SingleSelectorBase1,"._55pe");};p.prototype.getSelectedItem=function(){'use strict';var r=null;if(this.$SingleSelectorBase18){this.getMenu().forEachItem(function(s){if(s.getValue()===this.$SingleSelectorBase18){!(r===null)?j(0):void 0;r=s;}}.bind(this));}else this.getMenu().forEachItem(function(s){if(c('SelectableMenuUtils').isSelected(s)){!(r===null)?j(0):void 0;r=s;}});!(r!==null)?j(0):void 0;return r;};p.prototype.$SingleSelectorBase12=function(){'use strict';return c('DOMQuery').find(this.getSelectedItem().getRoot(),"._54nh");};p.prototype.destroy=function(){'use strict';this.$SingleSelectorBase2&&this.$SingleSelectorBase2.destroy();this.$SingleSelectorBase5.destroy();this.$SingleSelectorBase4.destroy();};function q(r,s,t){c('Style').set(r,s,c('Style').getFloat(r,s)+t+'px');}f.exports=p;},null);
__d('XUISingleSelectorButton.react',['ix','Image.react','React','XUIPopoverButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUISingleSelectorButton',render:function(){return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{chevron:c('React').createElement(c('Image.react'),{src:h('/images/ui/x/selector/chevron.png')})})));}});f.exports=i;},null);
__d('XUISingleSelector.react',['InlineBlock.react','React','ReactDOM','ReactSelectorUtils','ReactXUIMenu','SingleSelectorBase','SubscriptionsHandler','XUISingleSelectorButton.react','areEqual','cloneWithProps_DEPRECATED'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('ReactXUIMenu').SelectableMenu,j=c('ReactXUIMenu').SelectableItem,k=c('React').createClass({displayName:'XUISingleSelector',propTypes:{name:h.string,maxheight:h.number,maxwidth:h.number,defaultValue:h.string,disabled:h.bool,size:h.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:h.bool,value:h.any,onChange:h.func,onShow:h.func,onHide:h.func,behaviors:h.array,customButton:h.element},_menu:null,_singleSelector:null,_subscriptions:null,flattenMenuItems:function(){return c('React').Children.toArray(this.props.children).filter(function(l){return l;});},processMenuItems:function(){return c('ReactSelectorUtils').processMenuItems(this.flattenMenuItems(),this.getValue());},setMenuValue:function(l){this._singleSelector.setValueWithoutChange(l);},getDefaultProps:function(){return {disabled:false,size:'medium'};},getInitialState:function(){return {value:this.props.value!==undefined?this.props.value:this.props.defaultValue!==undefined?this.props.defaultValue:this.flattenMenuItems()[0].props.value};},componentWillReceiveProps:function(){if(this.props.value!==undefined)this.setState({value:this.props.value});},componentDidMount:function(){var l=c('ReactDOM').findDOMNode(this.refs.button);this._singleSelector=new (c('SingleSelectorBase'))(l,this._createMenu(),{disabled:this.props.disabled},{behaviors:this.props.behaviors});this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(this._singleSelector.subscribe('change',this.onChange));if(this.props.onShow)this._subscriptions.addSubscriptions(this._singleSelector.subscribe('show',this.props.onShow));if(this.props.onHide)this._subscriptions.addSubscriptions(this._singleSelector.subscribe('hide',this.props.onHide));},componentDidUpdate:function(l){if(!c('areEqual')(l.children,this.props.children))this._singleSelector.setMenu(this._createMenu());if(l.disabled!==this.props.disabled)if(!this.props.disabled){this._singleSelector.enable();}else this._singleSelector.disable();this.setMenuValue(this.getValue());},componentWillUnmount:function(){this._singleSelector.destroy();if(this._subscriptions){this._subscriptions.release();this._subscriptions=null;}},getValue:function(){return this.props.value!==undefined?this.props.value:this.state.value;},onChange:function(l,m){if(this.props.value===undefined){this.setState({value:m.value});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(m);},_createMenu:function(){var l=c('React').createElement(i,{maxheight:this.props.maxheight},this.processMenuItems().items);return new l.type(l.props);},render:function(){var l=this.processMenuItems().selectedItem,m;if(l.props.icon)m=c('cloneWithProps_DEPRECATED')(l.props.icon,{});var n={ref:'button',label:l.props.label||l.props.children,image:m},o=void 0;if(this.props.customButton){o=c('React').cloneElement(this.props.customButton,n);}else o=c('React').createElement(c('XUISingleSelectorButton.react'),babelHelpers['extends']({},n,{disabled:this.props.disabled,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth}));return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle'}),c('React').createElement('input',{type:'hidden',autoComplete:'off',name:this.props.name,value:l.props.value}),o));}});k.Option=j;f.exports=k;},null);
__d('MessengerProfileImageWrapper.react',['cssVar','cx','ReactComponentWithPureRenderMixin','React','getViewportDimensions','joinClasses'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'MessengerProfileImageWrapper',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{isMessengerUser:j.bool,showBadge:j.bool,size:j.number,tooltipContent:j.string},render:function(){var m={};if(this.props.tooltipContent){m['data-hover']='tooltip';m['data-tooltip-content']=this.props.tooltipContent;var n=c('getViewportDimensions')().width,o=parseInt("640px".replace('px',''),10);m['data-tooltip-content']=this.props.tooltipContent;m['data-tooltip-position']=n<=o?'above':'left';}return (c('React').createElement('div',babelHelpers['extends']({className:c('joinClasses')("_4ldz",this.props.className),style:{width:this.props.size+'px',height:this.props.size+'px'}},m),c('React').createElement('div',{className:"_4ld-",style:{width:this.props.size+'px',height:this.props.size+'px'}},this.props.children),this._renderBadge()));},_renderBadge:function(){if(!this.props.showBadge||this.props.isMessengerUser==null)return null;return (c('React').createElement(l,{className:"_4ld_",isMessengerUser:this.props.isMessengerUser}));}}),l=c('React').createClass({displayName:'MessengerBadge',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{isMessengerUser:j.bool,size:j.number},render:function(){return (c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_2pom")},c('React').createElement('div',{className:"_2pon"+(this.props.isMessengerUser?' '+"_2poo":'')+(!this.props.isMessengerUser?' '+"_2pop":'')})));}});f.exports=k;},null);
__d("XCollabCallSendMessageController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/collab\/sendmessage\/",{recipient_id:{type:"Int",required:true},msg_id:{type:"Int",required:true},message_info:{type:"String",required:true},webrtc_fbtrace:{type:"Int"}});},null);
__d("XLinkshimLinkAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/linkshim\/ajax\/link\/",{href:{type:"String",required:true},callsite:{type:"Enum",required:true,enumType:0}});},null);
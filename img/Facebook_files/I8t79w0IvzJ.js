if (self.CavalryLogger) { CavalryLogger.start_js(["C1qZ7"]); }

__d('MessengerContactActions',['keyMirror'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({ADD_OWNER:null,MESSAGE:null,PROFILE:null,REMOVE:null,REMOVE_OWNER:null,SELECT:null});},null);
__d('MessengerContactAdapters',['immutable','ImmutableObject','MercuryTypeaheadConstants'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={fromSearchableEntry:function(i){var j=i.getType(),k={alias:null,isMessengerUser:null,participants:null,photo:i.getPhoto(),subtitle:i.getSubtitle(),thread:null,title:i.getTitle(),type:j,uid:i.getUniqueID()},l=i.getAuxiliaryData();if(l)if(j===c('MercuryTypeaheadConstants').THREAD_TYPE){k.thread=new (c('ImmutableObject'))(l.thread);k.participants=c('immutable').Map().withMutations(function(m){l.participantsToRender.forEach(function(n){m.set(n.id,n);});});}else{k.isMessengerUser=l.isMessengerUser;k.alias=l.alias;}return new (c('ImmutableObject'))(k);},fromMercuryParticipant:function(i){return new (c('ImmutableObject'))({alias:i.alias,uid:i.id,photo:i.image_src,title:i.name,subtitle:'',type:i.type,isMessengerUser:i.is_messenger_user,href:i.href});}};f.exports=h;},null);
__d('MessengerThreadImage.react',['immutable','ImmutableObject','MercuryIDs','MercuryThreadImage.react','MessengerProfileImageWrapper.react','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'MessengerThreadImage',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{participants:h.instanceOf(c('immutable').Map).isRequired,showBadge:h.bool,size:h.number,thread:h.instanceOf(c('ImmutableObject')).isRequired,viewer:h.string.isRequired},getDefaultProps:function(){return {showBadge:true};},render:function(){return (c('React').createElement(c('MessengerProfileImageWrapper.react'),{className:this.props.className,isMessengerUser:this._getIsMessengerUser(),size:this.props.size,showBadge:this.props.showBadge&&c('MercuryIDs').isCanonical(this.props.thread.thread_id)},c('React').createElement(c('MercuryThreadImage.react'),{size:this.props.size,thread:this.props.thread,viewer:this.props.viewer,useBackground:true})));},_getIsMessengerUser:function(){if(!c('MercuryIDs').isCanonical(this.props.thread.thread_id)||this.props.participants.size===0)return null;var j=this.props.thread.other_user_fbid,k=c('MercuryIDs').getParticipantIDFromUserID(j),l=this.props.participants.get(k);return l&&l.is_messenger_user;}});f.exports=i;},null);
__d('MessengerTypeaheadUtils',['fbt','immutable','MercuryConfig','MercuryTypeaheadConstants','ReactDOM','WorkModeConfig','mapObject'],function a(b,c,d,e,f,g,h){'use strict';var i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').OrderedMap,k=c('WorkModeConfig').is_work_user?[c('MercuryTypeaheadConstants').FRIEND_TYPE,c('MercuryTypeaheadConstants').FB4C_TYPE,c('MercuryTypeaheadConstants').THREAD_TYPE,c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE,c('MercuryTypeaheadConstants').PAGE_TYPE,c('MercuryTypeaheadConstants').NON_FRIEND_TYPE]:[c('MercuryTypeaheadConstants').FRIEND_TYPE,c('MercuryTypeaheadConstants').THREAD_TYPE,c('MercuryTypeaheadConstants').FB4C_TYPE,c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE,c('MercuryTypeaheadConstants').PAGE_TYPE,c('MercuryTypeaheadConstants').NON_FRIEND_TYPE],l=(i={},i[c('MercuryTypeaheadConstants').FRIEND_TYPE]={header:h._("Amigos")},i[c('MercuryTypeaheadConstants').FB4C_TYPE]={header:h._("Compa\u00f1eros de trabajo")},i[c('MercuryTypeaheadConstants').THREAD_TYPE]={header:h._("Conversaciones de grupo")},i[c('MercuryTypeaheadConstants').PAGE_TYPE]={header:h._("Negocios")},i[c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE]={header:h._("Salas de reuniones")},i[c('MercuryTypeaheadConstants').NON_FRIEND_TYPE]={header:h._("M\u00e1s personas")},i),m={sortEntries:function(n,o){var p=[],q=[],r=[],s=[],t=[],u=[];n.forEach(function(v){switch(v.getType()){case c('MercuryTypeaheadConstants').FRIEND_TYPE:p.push(v);break;case c('MercuryTypeaheadConstants').FB4C_TYPE:q.push(v);break;case c('MercuryTypeaheadConstants').THREAD_TYPE:r.push(v);break;case c('MercuryTypeaheadConstants').PAGE_TYPE:case c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE:t.push(v);break;case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:s.push(v);break;case c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE:u.push(v);break;}});if(m._shouldHoistPages(o))return t.concat(p,q,r,u,s);return p.concat(q,r,u,t,s);},sortEntriesWithoutPages:function(n){var o=[],p=[],q=[],r=[];n.forEach(function(s){switch(s.getType()){case c('MercuryTypeaheadConstants').FRIEND_TYPE:o.push(s);break;case c('MercuryTypeaheadConstants').FB4C_TYPE:p.push(s);break;case c('MercuryTypeaheadConstants').THREAD_TYPE:q.push(s);break;case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:r.push(s);break;}});return o.concat(p,q,r);},sortEntriesWithoutGroupsOrViewer:function(n,o){var p=[],q=[],r=[];n.forEach(function(s){if(s.getUniqueID()===o)return;switch(s.getType()){case c('MercuryTypeaheadConstants').FRIEND_TYPE:p.push(s);break;case c('MercuryTypeaheadConstants').FB4C_TYPE:q.push(s);break;case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:r.push(s);break;}});return p.concat(q,r);},getEntryOrder:function(n){var o=arguments.length<=1||arguments[1]===undefined?k:arguments[1];if(m._shouldHoistPages(n)){o=[].concat(o);o.splice(o.indexOf(c('MercuryTypeaheadConstants').PAGE_TYPE));o.unshift(c('MercuryTypeaheadConstants').PAGE_TYPE);}return o;},orderEntries:function(n,o){var p=[];this.getEntryOrder(o).forEach(function(q){return p.push.apply(p,n.filter(function(r){return (this.areSectionsEqual(r.getType(),q));}.bind(this)));}.bind(this));return p;},buildListSections:function(n,o,p){if(!n.length)return j();p=this.getEntryOrder(o,p);var q=c('mapObject')(l,function(r){return babelHelpers['extends']({},r,{entries:[]});});q[c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE]=q[c('MercuryTypeaheadConstants').PAGE_TYPE];n.forEach(function(r){var s=r.getType();if(q[s])q[s].entries.push(r);});return j(p.filter(function(r){return q[r].entries.length;}).map(function(r){return [q[r].header,q[r].entries];}));},areSectionsEqual:function(n,o){if(n===c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE)return o===c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE||o===c('MercuryTypeaheadConstants').PAGE_TYPE;return n===o;},scrollEntryIntoView:function(n,o){var p=c('ReactDOM').findDOMNode(o),q=o.getScrollTop(),r=n.offsetTop-q,s=p.offsetHeight-n.offsetHeight;if(r>=s){o.scrollToPosition(q+r-s);}else if(r<0)o.scrollToPosition(q+r);},_shouldHoistPages:function(n){if(!n)return false;return !!(c('MercuryConfig').HoistAgentsKeywords&&c('MercuryConfig').HoistAgentsKeywords.indexOf(n.toLowerCase().trim())!==-1);}};f.exports=m;},null);
__d('MessengerContactListRow.react',['cx','fbt','ix','Image.react','ImageBlock.react','ImmutableObject','Link.react','MercuryConfig','MercuryThreads','MercuryTypeaheadConstants','MessengerAdminGroupUtils','MessengerContactActions','MessengerContactImage.react','MessengerStateStore','MessengerTextWithEntities.react','MessengerThreadImage.react','ReactComponentWithPureRenderMixin','React','ReactDOM','StoreAndPropBasedStateMixin','TextWithEntities.react','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=j('/images/mercury/clients/messenger/core/Checkmark.png'),m=32,n=c('React').createClass({displayName:'MessengerContactListRow',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('MessengerStateStore'))],propTypes:{actionsClass:k.func,className:k.string,contact:k.instanceOf(c('ImmutableObject')).isRequired,disableRole:k.bool,extraActionsEnabled:k.bool.isRequired,isHighlighted:k.bool,isOriginal:k.bool,isInvited:k.bool,isSelected:k.bool,onMouseEnter:k.func,onScrollIntoView:k.func,onAction:k.func,presenceStatus:k.bool,viewer:k.string.isRequired,adminIds:k.arrayOf(k.string)},statics:{calculateState:function(o){var p=c('MercuryThreads').getForFBID(o.viewer),q=c('MessengerStateStore').getState().activeThreadID,r=q?p.getOrFetch(q):null;return {thread:r};}},getInitialState:function(){return {isActionsOpen:false};},componentDidMount:function(){if(this.props.isHighlighted&&this.props.onScrollIntoView){var o=c('ReactDOM').findDOMNode(this);this.props.onScrollIntoView&&this.props.onScrollIntoView(o);this.props.onRenderHighlight&&this.props.onRenderHighlight(o);}},componentDidUpdate:function(o){if(this.props.isHighlighted&&!o.isHighlighted){var p=c('ReactDOM').findDOMNode(this);this.props.onScrollIntoView&&this.props.onScrollIntoView(p);this.props.onRenderHighlight&&this.props.onRenderHighlight(p);}},render:function(){var o=this.props.disableRole?{}:{'aria-selected':this.props.isHighlighted,role:'option'};return (c('React').createElement('li',babelHelpers['extends']({},o,{className:c('joinClasses')(this.props.className,"_5l37"+(this.props.isHighlighted?' '+"_1k1p":'')+(this.state.isActionsOpen?' '+"_rwn":''))}),c('React').createElement(c('Link.react'),{className:"_5f0v",onClick:this._handleClick,onMouseDown:this._handleMouseDown,onMouseEnter:this.props.onMouseEnter,tabIndex:this.props.actionsClass?0:-1},c('React').createElement(c('ImageBlock.react'),{contentClassName:"_5l38",spacing:'medium'},this._renderContactImage(),this._renderContactText(),this._renderActions()))));},_handleMouseDown:function(o){if(this.props.actionsClass)return;o.stopPropagation();o.preventDefault();},_handleClick:function(o){o.stopPropagation();this._handleContactAction(c('MessengerContactActions').SELECT,o);},_renderContactImage:function(){if(this.props.contact.photo){return (c('React').createElement(c('MessengerContactImage.react'),{className:"_5l39 _5rmm",isMessengerUser:this.props.contact.isMessengerUser,size:m,src:this.props.contact.photo}));}else if(this.props.contact.type===c('MercuryTypeaheadConstants').THREAD_TYPE)return (c('React').createElement(c('MessengerThreadImage.react'),{className:"_5l39",participants:this.props.contact.participants,size:m,thread:this.props.contact.thread,viewer:this.props.viewer}));return c('React').createElement('div',{className:"_5l39"});},_renderContactText:function(){if(this.props.contact.subtitle){var o=c('TextWithEntities.react');if(c('MercuryConfig').MessengerNewEmojiGK)o=c('MessengerTextWithEntities.react');return (c('React').createElement('div',null,c('React').createElement('div',{className:"_3q34"},c('React').createElement(o,{renderEmoji:true,renderEmoticons:true,text:this.props.contact.title})),c('React').createElement('div',{className:"_3q35"},this.props.contact.subtitle)));}else return (c('React').createElement('div',{className:"_364g"},this.props.contact.title));},_renderActions:function(){if(this.props.isOriginal)return (c('React').createElement('span',{className:"_5rh4"},i._("Agregado")));if(this.props.isInvited)return (c('React').createElement('span',{className:"_5rh4"},i._("Invitado")));if(this.props.isSelected)return (c('React').createElement(c('Image.react'),{className:"_1kqm",src:l}));if(this.props.presenceStatus)return (c('React').createElement('div',{className:"_jg2"}));var o=null,p=c('MessengerAdminGroupUtils').isAdmin(this.props.adminIds,this.props.contact.uid);if(c('MessengerAdminGroupUtils').isOwner(p,this.state.thread))o=c('React').createElement('span',{className:"_5qsj"},i._("Propietario"));if(this.props.actionsClass){var q=this.props.actionsClass;return (c('React').createElement('div',null,o,c('React').createElement(q,{className:"_rwo",adminIds:this.props.adminIds,contact:this.props.contact,extrasEnabled:this.props.extraActionsEnabled,isOpen:this.state.isActionsOpen,onAction:this._handleContactAction,onToggle:this._handleActionsToggle,viewer:this.props.viewer})));}return o;},_handleContactAction:function(o,event){this.props.onAction&&this.props.onAction(o,event);},_handleActionsToggle:function(o){this.setState({isActionsOpen:o});}});f.exports=n;},null);
__d('MessengerContactListRowContainer.react',['AvailableListConstants','immutable','MercuryIDs','MercuryParticipantTypes','MessengerContactActions','MessengerContactListRow.react','PresenceStatus','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'MessengerContactListRowContainer',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{actionsClass:h.func,contactAdapter:h.func.isRequired,disableRole:h.bool,extraActionsEnabled:h.bool.isRequired,hasHoverState:h.bool,isHighlighted:h.bool,onAction:h.func,onHighlight:h.func,onScrollIntoView:h.func,onSelect:h.func.isRequired,rawContact:h.object.isRequired,originalEntryIDs:h.instanceOf(c('immutable').Set),invitedEntryIDs:h.instanceOf(c('immutable').Set),rowClassName:h.string,selectedEntryIDs:h.instanceOf(c('immutable').Set),showPresence:h.bool,viewer:h.string.isRequired,adminIds:h.arrayOf(h.string)},getInitialState:function(){return {contact:this.props.contactAdapter(this.props.rawContact)};},componentWillReceiveProps:function(j){if(j.rawContact!==this.props.rawContact)this.setState({contact:j.contactAdapter(j.rawContact)});},render:function(){return (c('React').createElement(c('MessengerContactListRow.react'),{actionsClass:this.props.actionsClass,className:this.props.rowClassName,contact:this.state.contact,disableRole:this.props.disableRole,extraActionsEnabled:this.props.extraActionsEnabled,isHighlighted:this.props.isHighlighted,isOriginal:this.props.originalEntryIDs&&this.props.originalEntryIDs.contains(this.state.contact.uid),isInvited:this.props.invitedEntryIDs&&this.props.invitedEntryIDs.contains(this.state.contact.uid),isSelected:this.props.selectedEntryIDs&&this.props.selectedEntryIDs.contains(this.state.contact.uid),onAction:this._handleAction,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onMouseEnter:this._handleMouseEnter,onSelect:this._handleSelect,presenceStatus:this._getPresenceStatus(),viewer:this.props.viewer,adminIds:this.props.adminIds}));},_handleMouseEnter:function(){if(!this.props.hasHoverState)return;this.props.onHighlight&&this.props.onHighlight(this.props.rawContact);},_handleAction:function(j,event){switch(j){case c('MessengerContactActions').SELECT:this.props.onSelect(this.props.rawContact,event);break;default:this.props.onAction&&this.props.onAction(j,this.props.rawContact);break;}},_getPresenceStatus:function(){var j=this.state.contact;if(!this.props.showPresence||j.type!==c('MercuryParticipantTypes').FRIEND&&j.type!==c('MercuryParticipantTypes').USER)return false;var k=c('MercuryIDs').getUserIDFromParticipantID(j.uid);return c('PresenceStatus').get(k)==c('AvailableListConstants').ACTIVE;}});f.exports=i;},null);
__d('MessengerContactList.react',['cx','fbt','MessengerContactListRowContainer.react','ImageBlock.react','immutable','MessengerSpinner.react','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'MessengerContactList',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{actionsClass:j.func,ariaOwneeID:j.string,contactAdapter:j.func.isRequired,disableRole:j.bool,extraActionsEnabled:j.bool,hasHoverState:j.bool,highlightedEntry:j.object,isLoading:j.bool,listSections:j.instanceOf(c('immutable').OrderedMap).isRequired,onHighlight:j.func,onRenderHighlight:j.func,onScrollIntoView:j.func,onSelect:j.func.isRequired,onAction:j.func,originalEntryIDs:j.instanceOf(c('immutable').Set),invitedEntryIDs:j.instanceOf(c('immutable').Set),queryString:j.string,rowClassName:j.string,selectedEntryIDs:j.instanceOf(c('immutable').Set),showPresence:j.bool,viewer:j.string.isRequired,adminIds:j.arrayOf(j.string)},render:function(){return (c('React').createElement('div',{className:this.props.className},this.props.listSections.map(this._renderListSection).toArray(),this._renderSpinner(),this._renderEmptyResult()));},_renderListSection:function(l,m){return (c('React').createElement('div',{key:m,className:"_29hk"},this._renderHeader(m),c('React').createElement('ul',{id:this.props.ariaOwneeID,role:this.props.disableRole?undefined:'listbox',className:"_29hl"},l.map(function(n){return (c('React').createElement(c('MessengerContactListRowContainer.react'),{actionsClass:this.props.actionsClass,contactAdapter:this.props.contactAdapter,disableRole:this.props.disableRole,extraActionsEnabled:!!this.props.extraActionsEnabled,hasHoverState:this.props.hasHoverState,isHighlighted:this.props.highlightedEntry===n,key:n.id||n.getUniqueID(),onHighlight:this.props.onHighlight,onAction:this.props.onAction,onRenderHighlight:this.props.onRenderHighlight,onSelect:this.props.onSelect,onScrollIntoView:this.props.onScrollIntoView,rawContact:n,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,rowClassName:this.props.rowClassName,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:this.props.showPresence,viewer:this.props.viewer,adminIds:this.props.adminIds}));}.bind(this)))));},_renderHeader:function(l){if(!l)return null;return (c('React').createElement('div',{className:"_225b"},l));},_renderSpinner:function(){if(!this.props.isLoading)return null;return (c('React').createElement(c('ImageBlock.react'),{className:"_225c",spacing:'medium'},c('React').createElement(c('MessengerSpinner.react'),{className:"_2i59",color:'grey'}),c('React').createElement('div',{className:"_4g0h"},i._("Buscando..."))));},_renderEmptyResult:function(){if(this.props.isLoading||this.props.listSections.size>0||!this.props.queryString||this.props.queryString.length===0)return null;return (c('React').createElement('div',{className:"_3xcx"},i._("No se encontraron resultados")));}});f.exports=k;},null);
__d('MessengerTypeaheadView.react',['cx','immutable','MessengerContactAdapters','MessengerContactList.react','MessengerTypeaheadUtils','ReactComponentWithPureRenderMixin','React','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'MessengerTypeaheadView',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{ariaOwneeID:i.string,entries:i.array.isRequired,hasHoverState:i.bool,highlightedEntry:i.object,isLoading:i.bool,onHighlight:i.func,onRenderHighlight:i.func,onScrollIntoView:i.func,onSelect:i.func,originalEntryIDs:i.instanceOf(c('immutable').Set),invitedEntryIDs:i.instanceOf(c('immutable').Set),queryString:i.string,selectedEntryIDs:i.instanceOf(c('immutable').Set),viewer:i.string.isRequired},render:function(){return (c('React').createElement(c('MessengerContactList.react'),{ariaOwneeID:this.props.ariaOwneeID,className:c('joinClasses')(this.props.className,"_5t4c"),contactAdapter:c('MessengerContactAdapters').fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:c('MessengerTypeaheadUtils').buildListSections(this.props.entries,this.props.queryString),onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer}));}});f.exports=j;},null);
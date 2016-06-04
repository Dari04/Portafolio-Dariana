if (self.CavalryLogger) { CavalryLogger.start_js(["ky4jJ"]); }

__d("LanguageSettingsAction",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TRANSLATE_INTO:"translate_into",DO_NOT_TRANSLATE:"do_not_translate",DO_NOT_AUTO_TRANSLATE:"do_not_auto_translate",UNDO_NEVER_TRANSLATE:"undo_never_translate",UNDO_DISABLE_AUTO_TRANSLATE:"undo_disable_auto_translate"};},null);
__d("TranslationPreferenceEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_ORIGINAL:"click_see_original",HIDE_ORIGINAL:"click_hide_original",TRANSLATION_PREFERENCES:"click_translation_preferences",DISABLE_TRANSLATION:"disable_translation",DISABLE_AUTO_TRANSLATION:"disable_auto_translation",LANGUAGE_SETTINGS:"language_settings",EDIT_TRANSLATION:"edit_translation",REPORT_LANGUAGE:"report language",RATE_TRANSLATION:"rate_translation"};},null);
__d("TranslationTrigger",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion",NONE:"none"};},null);
__d("MultilingualPostStrings",["fbt"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={DELETE:h._("Eliminar"),EDIT:h._("Editar"),EDIT_POST:h._("Editar publicaci\u00f3n"),REMOVE:h._("Eliminar"),CANCEL:h._("Cancelar"),WRITE_IN_ANOTHER_LANGUAGE:h._("Escribir en otro idioma"),WRITE_IN_NEW_LANGUAGE:h._("Escribir en un idioma nuevo"),WRITE_POST_IN_ANOTHER_LANGUAGE:h._("Escribir publicaci\u00f3n en otro idioma"),POST_IN_MULTIPLE_LANGUAGES:h._("Publicar en varios idiomas"),MULTILINGUAL_POSTS_DESCRIPTION:h._("La publicaci\u00f3n se mostrar\u00e1 a tus seguidores en el idioma que sea m\u00e1s relevante para ellos. Los comentarios y Me gusta se agregar\u00e1n a la misma publicaci\u00f3n."),LINK_TO_MULTILINGUAL_SETTINGS:h._("Desactivar esta opci\u00f3n."),getEditPostInLanguage:function(j){return h._("Editar publicaci\u00f3n en {language name}",[h.param("language name",j)]);},getViewingLanguage:function(j){return h._("En: {language name}",[h.param("language name",j)]);},getDefaultLanguage:function(j){return h._("Predeterminado: {language switcher}",[h.param("language switcher",j)]);},getSelectLanguage:function(j){return h._("Idioma: {language switcher}",[h.param("language switcher",j)]);},getAuthorTranslationPlaceholder:function(j){return h._("Escribe en {language name}...",[h.param("language name",j)]);}};f.exports=i;},null);
__d('LtgTranslationPreferenceEntryBase',['BanzaiLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.translationData=i;}h.prototype.getPreferenceType=function(){'use strict';return null;};h.prototype.getShouldShowPreference=function(){'use strict';return false;};h.prototype.getEntryTitle=function(){'use strict';return null;};h.prototype.getEntrySubtitle=function(){'use strict';return null;};h.prototype.getConfirmDialogTitle=function(){'use strict';return null;};h.prototype.getConfirmDialogBody=function(){'use strict';return null;};h.prototype.getUseConfirmDialog=function(){'use strict';return false;};h.prototype.getSuccessDialogTitle=function(){'use strict';return null;};h.prototype.getSuccessDialogBody=function(){'use strict';return null;};h.prototype.getUseSuccessDialog=function(){'use strict';return false;};h.prototype.getUseCustomAction=function(){'use strict';return false;};h.prototype.getURIForAsyncAction=function(){'use strict';return null;};h.prototype.getGlyph=function(){'use strict';return null;};h.prototype.performAction=function(){'use strict';};h.prototype.log=function(){'use strict';c('BanzaiLogger').log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.translationData.requestID,fbid:this.translationData.targetID,content_locale:this.translationData.sourceDialect,target_locale:this.translationData.targetDialect,translation_trigger:this.translationData.trigger,click_type:this.getPreferenceType()});};f.exports=h;},null);
__d("XLtgDisableAutoTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/disable_auto_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgDisableAutoTranslatePreferenceEntry',['ix','ContentTranslationStrings','React','TranslationPreferenceEvent','TranslationTrigger','LtgTranslationPreferenceEntryBase','XLtgDisableAutoTranslatePreferenceController','LanguageSettingsAction','fbglyph'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);}k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;};k.prototype.getShouldShowPreference=function(){'use strict';return this.translationData.trigger===c('TranslationTrigger').AUTO_TRANSLATION;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getDisableAutoTranslate(this.translationData.sourceDialectName);};k.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('React').createElement('div',null,c('ContentTranslationStrings').getDisableAutoTranslateDialog(this.translationData.sourceDialectName)),c('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER));};k.prototype.getUseConfirmDialog=function(){'use strict';return true;};k.prototype.getUseSuccessDialog=function(){'use strict';return true;};k.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};k.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').SETTINGS_SAVED;};k.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgDisableAutoTranslatePreferenceController').getURIBuilder().setString('dialect',this.translationData.sourceDialect).setEnum('event_trigger',c('LanguageSettingsAction').DO_NOT_AUTO_TRANSLATE).getURI();};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/hide_20_fig-dark-50.png");};f.exports=k;},null);
__d("XLtgEditTranslationPreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/edit_translation\/",{content_id:{type:"FBID"},source_dialect:{type:"String",required:true},target_dialect:{type:"String",required:true},translation:{type:"String",required:true}});},null);
__d('LtgEditTranslationPreferenceEntryBase',['ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent','XLtgEditTranslationPreferenceController'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.newTranslation=this.translationData.translatedText;}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').EDIT_TRANSLATION;};j.prototype.getShouldShowPreference=function(){'use strict';return true;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').EDIT_TRANSLATION_MENU;};j.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};j.prototype.getUseConfirmDialog=function(){'use strict';return true;};j.prototype.getUseSuccessDialog=function(){'use strict';return true;};j.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};j.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').EDIT_TRANSLATION_THANKS;};j.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgEditTranslationPreferenceController').getURIBuilder().setFBID('content_id',this.translationData.targetID).setString('source_dialect',this.translationData.sourceDialect).setString('target_dialect',this.translationData.targetDialect).setString('translation',this.newTranslation).getURI();};f.exports=j;},null);
__d('LtgLanguageSettingsBasePreferenceEntry',['ix','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent','fbglyph'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').LANGUAGE_SETTINGS;};k.prototype.getShouldShowPreference=function(){'use strict';return true;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').LANGUAGE_SETTINGS;};k.prototype.getUseConfirmDialog=function(){'use strict';return false;};k.prototype.getUseEditableDialog=function(){'use strict';return false;};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/gear_20_fig-dark-50.png");};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d("XLtgNeverTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/never_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgNeverTranslatePreferenceEntry',['ix','ContentTranslationStrings','LanguageSettingsAction','LtgTranslationPreferenceEntryBase','React','TranslationPreferenceEvent','XLtgNeverTranslatePreferenceController','fbglyph'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_TRANSLATION;};k.prototype.getShouldShowPreference=function(){'use strict';return true;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getNeverTranslate(this.translationData.sourceDialectName);};k.prototype.getEntrySubtitle=function(){'use strict';return c('ContentTranslationStrings').getTranslatedFromTo(this.translationData.sourceDialectName,this.translationData.targetDialectName);};k.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('React').createElement('div',null,c('ContentTranslationStrings').getNeverTranslateDialog(this.translationData.sourceDialectName)),c('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER));};k.prototype.getUseConfirmDialog=function(){'use strict';return true;};k.prototype.getUseSuccessDialog=function(){'use strict';return true;};k.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};k.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').SETTINGS_SAVED;};k.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgNeverTranslatePreferenceController').getURIBuilder().setString('dialect',this.translationData.sourceDialect).setEnum('event_trigger',c('LanguageSettingsAction').DO_NOT_TRANSLATE).getURI();};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/cross_20_fig-dark-50.png");};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d("XLtgTranslationFeedbackController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation\/feedback\/",{target_id:{type:"FBID",required:true},translation_id:{type:"FBID",required:true},request_id:{type:"String",required:true},trigger:{type:"Enum",required:true,enumType:1},rating:{type:"Int",required:true}});},null);
__d('LtgRatingPreferenceEntry',['ContentTranslationStrings','TranslationPreferenceEvent','TranslationRating','LtgTranslationPreferenceEntryBase','XLtgTranslationFeedbackController'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k);this.setRating(l);}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').RATE_TRANSLATION;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').RATE_TRANSLATION;};j.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgTranslationFeedbackController').getURIBuilder().setEnum('trigger',this.translationData.trigger).setFBID('translation_id',this.translationData.translationID).setFBID('target_id',this.translationData.targetID).setString('request_id',this.translationData.requestID).setInt('rating',this.rating).getURI();};j.prototype.coerceRatingType=function(k){'use strict';switch(k){case 1:return c('TranslationRating').VERY_BAD;case 2:return c('TranslationRating').BAD;case 3:return c('TranslationRating').OK;case 4:return c('TranslationRating').GOOD;case 5:return c('TranslationRating').VERY_GOOD;default:return c('TranslationRating').UNDEFINED;}};j.prototype.setRating=function(k){'use strict';this.rating=this.coerceRatingType(k);};f.exports=j;},null);
__d('LtgReportLanguagePreferenceEntryBase',['BanzaiLogger','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k);this.isShowingOriginal=l;this.correctedDialect='xx_XX';}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;};j.prototype.getShouldShowPreference=function(){'use strict';return this.isShowingOriginal;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getReportLanguage(this.translationData.sourceDialectName);};j.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};j.prototype.getDialogBody=function(){'use strict';return c('ContentTranslationStrings').getReportLanguageDialogBody(this.translationData.sourceDialectName);};j.prototype.getUseConfirmDialog=function(){'use strict';return true;};j.prototype.getUseSuccessDialog=function(){'use strict';return true;};j.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};j.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').REPORT_LANGUAGE_THANKS;};j.prototype.performAction=function(){'use strict';c('BanzaiLogger').log('LtgLanguageFeedbackLoggerConfig',{fbid:this.translationData.targetID,text:this.translationData.originalText,detected_dialect:this.translationData.sourceDialect,corrected_dialect:this.correctedDialect});};f.exports=j;},null);
__d('LtgSeeOriginalPreferenceEntry',['ix','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent','TranslationTrigger','fbglyph'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;function k(l,m,n){'use strict';j.constructor.call(this,l);this.isShowingOriginal=m;this.seeOriginalAction=n;}k.prototype.getPreferenceType=function(){'use strict';return this.isShowingOriginal?c('TranslationPreferenceEvent').HIDE_ORIGINAL:c('TranslationPreferenceEvent').SEE_ORIGINAL;};k.prototype.getShouldShowPreference=function(){'use strict';return this.translationData.trigger==c('TranslationTrigger').AUTO_TRANSLATION;};k.prototype.getEntryTitle=function(){'use strict';if(this.isShowingOriginal)return c('ContentTranslationStrings').HIDE_ORIGINAL;return c('ContentTranslationStrings').SEE_ORIGINAL;};k.prototype.getUseConfirmDialog=function(){'use strict';return false;};k.prototype.getUseEditableDialog=function(){'use strict';return false;};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/rotate_20_fig-dark-50.png");};k.prototype.performAction=function(){'use strict';this.seeOriginalAction&&this.seeOriginalAction();};f.exports=k;},null);
__d('AbstractRatingInput.react',['AbstractRating.react','React'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.state={rating:k.rating||0};}j.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractRating.react'),babelHelpers['extends']({},this.props,{onClick:this.props.onClick,onMouseOut:function(){this.setState({rating:this.props.rating});this.props.onMouseOut&&this.props.onMouseOut();}.bind(this),onMouseOver:function(k){this.setState({rating:k});this.props.onMouseOver&&this.props.onMouseOver(k);}.bind(this),rating:this.state.rating})));};j.prototype.componentDidUpdate=function(k){'use strict';if(this.props.rating!==k.rating)this.setState({rating:this.props.rating});};f.exports=j;},null);
__d('StarRatingInput.react',['AbstractRatingInput.react','React','StarRatingEmptyStar.react','StarRatingFilledStar.react'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractRatingInput.react'),babelHelpers['extends']({},this.props,{emptyItem:c('React').createElement(c('StarRatingEmptyStar.react'),{size:this.props.size}),filledItem:c('React').createElement(c('StarRatingFilledStar.react'),{size:this.props.size})})));};function j(){'use strict';h.apply(this,arguments);}j.defaultProps={maxRating:5,size:'20'};f.exports=j;},null);
__d('LtgLanguageDialectSets',['LtgLanguageDialectRawSets','Map'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.prototype.$LtgLanguageDialectSets1=function(i){'use strict';var j=new (c('Map'))();for(var k in i)if(i.hasOwnProperty(k))j.set(k,i[k]);return j;};h.prototype.getFBInternalDialectNames=function(){'use strict';return this.$LtgLanguageDialectSets1(c('LtgLanguageDialectRawSets').INTERNAL_DIALECT_MAP);};h.prototype.getMultilingualPostDialectNames=function(){'use strict';return this.$LtgLanguageDialectSets1(c('LtgLanguageDialectRawSets').MULTILINGUAL_POST_DIALECT_MAP);};h.prototype.getFBSupportedLocalizedDialectNames=function(){'use strict';return this.$LtgLanguageDialectSets1(c('LtgLanguageDialectRawSets').SUPPORTED_LOCALIZED_DIALECT_MAP);};h.prototype.getLtgSupportedLocalizedDialectNames=function(){'use strict';return this.$LtgLanguageDialectSets1(c('LtgLanguageDialectRawSets').LTG_SUPPORTED_LOCALIZED_DIALECT_MAP);};h.prototype.getUniqueParentDialects=function(){'use strict';return this.$LtgLanguageDialectSets1(c('LtgLanguageDialectRawSets').UNIQUE_PARENT_DIALECTS);};h.prototype.getFBSupportedDialectsRaw=function(){'use strict';return c('LtgLanguageDialectRawSets').SUPPORTED_DIALECT_MAP;};h.prototype.getFBSupportedLocalizedDialectsRaw=function(){'use strict';return c('LtgLanguageDialectRawSets').SUPPORTED_LOCALIZED_DIALECT_MAP;};function h(){'use strict';}f.exports=new h();},null);
__d('LtgLanguageDialectDropdown.react',['fbt','LtgLanguageDialectSets','Map','MultilingualPostStrings','PopoverMenu.react','React','ReactComponentWithPureRenderMixin','ReactXUIMenu','Set','MenuSeparator.react'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('ReactXUIMenu').Item,j=c('ReactXUIMenu').SelectableItem,k=c('ReactXUIMenu').SelectableMenu,l=c('React').PropTypes,m=' \u25BE',n='xx_XX',o=c('React').createClass({displayName:'LtgLanguageDialectDropdown',mixins:[c('ReactComponentWithPureRenderMixin')],getInitialState:function(){return {selectedDialect:this.props.initialDialect};},propTypes:{className:l.string,dialectToNamesMap:l.instanceOf(c('Map')).isRequired,dialectsToExclude:l.instanceOf(c('Set')).isRequired,dialectsToInclude:l.instanceOf(c('Set')).isRequired,initialDialect:l.string.isRequired,maxheight:l.number,onAdd:l.func,onSelect:l.func.isRequired},getDefaultProps:function(){return {dialectToNamesMap:c('LtgLanguageDialectSets').getFBSupportedLocalizedDialectNames(),dialectsToExclude:new (c('Set'))(),dialectsToInclude:new (c('Set'))(),initialDialect:n};},render:function(){var p=c('React').createElement(k,{maxheight:this.props.maxheight,onChange:this._onItemClick},this._getLanguagesMenuItems().concat(this._getAdditionalMenuActions())),q=this.props.dialectToNamesMap.get(this.state.selectedDialect)||h._("Seleccionar");return (c('React').createElement(c('PopoverMenu.react'),{alignv:'baseline',className:this.props.className,menu:p},c('React').createElement('a',{title:this._getDisplayToolTipString()},q+m)));},_getLanguagesMenuItems:function(){var p=[],q=this.props.dialectsToInclude.size>0?this.props.dialectsToInclude:new (c('Set'))(this.props.dialectToNamesMap.keys());q.forEach(function(r){if(this.props.dialectsToExclude.has(r))return;var s=this.props.dialectToNamesMap.get(r);p.push(c('React').createElement(j,{key:r,selected:r===this.state.selectedDialect,value:r},s));}.bind(this));return p;},_getAdditionalMenuActions:function(){var p=[];if(this.props.onAdd)p.push(c('React').createElement(i,{key:'MLC_ADD',onclick:this.props.onAdd},c('MultilingualPostStrings').WRITE_IN_ANOTHER_LANGUAGE));if(p.length>0)p.unshift(c('React').createElement(c('MenuSeparator.react'),{key:'MLC_DIVIDER'}));return p;},_onItemClick:function(p,q){var r=q.item.getValue();this.setState({selectedDialect:r});this.props.onSelect(r);},_getDisplayToolTipString:function(){return h._("Mostrar idiomas disponibles");}});f.exports=o;},null);
__d('LtgEditTranslationPreferenceEntry',['cx','ContentTranslationStrings','Layout.react','LtgEditTranslationPreferenceEntryBase','React','TextAreaWithLineLimit.react','TextWithEntities.react','XUIGrayText.react'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('Layout.react').Column,l=c('Layout.react').FillColumn;i=babelHelpers.inherits(m,c('LtgEditTranslationPreferenceEntryBase'));j=i&&i.prototype;m.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{className:"_2pir",size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').ORIGINAL_TEXT)),c('React').createElement(l,null,c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small'},c('React').createElement(c('TextWithEntities.react'),{text:this.translationData.originalText})))),c('React').createElement(c('Layout.react'),{className:"_2pid"},c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{className:"_2pir",size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').YOUR_TRANSLATION)),c('React').createElement(l,null,c('React').createElement(c('TextAreaWithLineLimit.react'),{className:"_5d_f",onChange:function(n){return this.newTranslation=n;}.bind(this),defaultValue:this.translationData.translatedText})))));};function m(){'use strict';i.apply(this,arguments);}f.exports=m;},null);
__d('LtgLanguageSettingsPreferenceEntry',['LtgLanguageSettingsBasePreferenceEntry','URI'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgLanguageSettingsBasePreferenceEntry'));i=h&&h.prototype;j.prototype.performAction=function(){'use strict';new (c('URI'))('/settings').addQueryData('tab','language').go();};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('LtgRatingTranslationPreference.react',['cx','CenteredContainer.react','ContentTranslationStrings','LtgRatingPreferenceEntry','TranslationRating','React','StarRatingInput.react','XUIText.react'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.defaultProps={score:c('TranslationRating').UNDEFINED};function k(l){'use strict';j.constructor.call(this,l);this.state={hoverScore:this.props.score,score:this.props.score};}k.prototype.render=function(){'use strict';var l=this.state.hoverScore===c('TranslationRating').UNDEFINED?this.state.score:this.state.hoverScore,m=this.props.preferenceEntry.coerceRatingType(l);return (c('React').createElement(c('CenteredContainer.react'),{vertical:true},c('React').createElement(c('XUIText.react'),{size:'medium'},c('ContentTranslationStrings').RATE_TRANSLATION),c('React').createElement('div',{className:"_2pic _2pin"},c('React').createElement(c('StarRatingInput.react'),{rating:this.props.score,size:'24',onClick:function(n){return this.$LtgRatingTranslationPreference1(n);}.bind(this),onMouseOver:function(n){this.setState({hoverScore:this.props.preferenceEntry.coerceRatingType(n)});}.bind(this),onMouseOut:function(n){return this.setState({hoverScore:c('TranslationRating').UNDEFINED});}.bind(this)})),c('React').createElement(c('XUIText.react'),{className:"_2tsj"},m===c('TranslationRating').UNDEFINED?c('ContentTranslationStrings').CLICK_TO_RATE:c('ContentTranslationStrings').getUserFeedbackDescriptionForScore(m))));};k.prototype.$LtgRatingTranslationPreference1=function(l){'use strict';this.props.preferenceEntry.setRating(l);var m=this.props.preferenceEntry.rating;this.setState({score:m});this.props.onClick(m);};f.exports=k;},null);
__d('LtgReportLanguagePreferenceEntry',['cx','ContentTranslationStrings','LtgLanguageDialectDropdown.react','LtgLanguageDialectSets','LtgReportLanguagePreferenceEntryBase','React','Set','TextWithEntities.react','XUIGrayText.react'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgReportLanguagePreferenceEntryBase'));j=i&&i.prototype;k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('ContentTranslationStrings').getReportLanguageDialogBody(this.translationData.sourceDialectName),c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small',className:"_2ph_"},c('React').createElement(c('TextWithEntities.react'),{text:this.translationData.originalText})),c('ContentTranslationStrings').getReportLanguageSelector(c('React').createElement(c('LtgLanguageDialectDropdown.react'),{dialectsToExclude:new (c('Set'))().add(this.translationData.sourceDialect),dialectToNamesMap:c('LtgLanguageDialectSets').getFBSupportedLocalizedDialectNames().set('xx_XX',c('ContentTranslationStrings').I_DONT_KNOW),maxheight:230,onSelect:function(l){return this.correctedDialect=l;}.bind(this)}))));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('LtgTranslationPreferencesTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LtgTranslationPreferencesLoggerConfig',this.$LtgTranslationPreferencesTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LtgTranslationPreferencesLoggerConfig',this.$LtgTranslationPreferencesTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LtgTranslationPreferencesTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LtgTranslationPreferencesTypedLogger1=babelHelpers['extends']({},this.$LtgTranslationPreferencesTypedLogger1,j);return this;};h.prototype.setAuthorID=function(j){this.$LtgTranslationPreferencesTypedLogger1.author_id=j;return this;};h.prototype.setClickType=function(j){this.$LtgTranslationPreferencesTypedLogger1.click_type=j;return this;};h.prototype.setContentLocale=function(j){this.$LtgTranslationPreferencesTypedLogger1.content_locale=j;return this;};h.prototype.setFbid=function(j){this.$LtgTranslationPreferencesTypedLogger1.fbid=j;return this;};h.prototype.setTargetLocale=function(j){this.$LtgTranslationPreferencesTypedLogger1.target_locale=j;return this;};h.prototype.setTranslationApp=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_app=j;return this;};h.prototype.setTranslationID=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_id=j;return this;};h.prototype.setTranslationTrigger=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_trigger=j;return this;};h.prototype.setVC=function(j){this.$LtgTranslationPreferencesTypedLogger1.vc=j;return this;};var i={author_id:true,click_type:true,content_locale:true,fbid:true,target_locale:true,translation_app:true,translation_id:true,translation_trigger:true,vc:true};f.exports=h;},null);
__d('LtgTranslationPreferences.react',['cx','ix','AsyncRequest','ContentTranslationStrings','CSS','Image.react','Link.react','LtgDisableAutoTranslatePreferenceEntry','LtgEditTranslationPreferenceEntry','LtgLanguageSettingsPreferenceEntry','LtgNeverTranslatePreferenceEntry','LtgRatingPreferenceEntry','LtgReportLanguagePreferenceEntry','LtgRatingTranslationPreference.react','LtgSeeOriginalPreferenceEntry','LtgTranslationPreferenceEntryBase','LtgTranslationPreferencesTypedLogger','TranslationRating','MenuSeparator.react','Middot.react','PopoverMenu.react','React','ReactComponentWithPureRenderMixin','ReactXUIMenu','SimpleXUIDialog','TranslationPreferenceEvent','TranslationTrigger','XUIDialogButton.react','XUIDialogCancelButton.react','XUIMenuStaticItem.react','classWithMixins','highlight','mixin'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('ReactXUIMenu').Item,m='separator',n=[c('TranslationPreferenceEvent').RATE_TRANSLATION,m,c('TranslationPreferenceEvent').SEE_ORIGINAL,c('TranslationPreferenceEvent').DISABLE_TRANSLATION,c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION,c('TranslationPreferenceEvent').EDIT_TRANSLATION,c('TranslationPreferenceEvent').REPORT_LANGUAGE,c('TranslationPreferenceEvent').LANGUAGE_SETTINGS];j=babelHelpers.inherits(o,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactComponentWithPureRenderMixin'))));k=j&&j.prototype;o.defaultProps={isShowingOriginal:false};function o(p){k.constructor.call(this,p);this.state={rating:c('TranslationRating').UNDEFINED,isShowingOriginal:this.props.isShowingOriginal};}o.prototype.$LtgTranslationPreferences1=function(p){var q=null;switch(p){case c('TranslationPreferenceEvent').RATE_TRANSLATION:q=new (c('LtgRatingPreferenceEntry'))(this.props.translationData,this.state.rating);return (c('React').createElement(c('XUIMenuStaticItem.react'),{key:'rating'},c('React').createElement(c('LtgRatingTranslationPreference.react'),{onClick:function(r){this.setState({rating:r});this.$LtgTranslationPreferences2(q);}.bind(this),score:this.state.rating,translationData:this.props.translationData,preferenceEntry:q})));case m:return (c('React').createElement(c('MenuSeparator.react'),{key:'separator'}));case c('TranslationPreferenceEvent').SEE_ORIGINAL:if(this.props.shouldShowSeeOriginalInDropdown)q=new (c('LtgSeeOriginalPreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal,function(){return this.$LtgTranslationPreferences3();}.bind(this));break;case c('TranslationPreferenceEvent').DISABLE_TRANSLATION:q=new (c('LtgNeverTranslatePreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION:q=new (c('LtgDisableAutoTranslatePreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').LANGUAGE_SETTINGS:q=new (c('LtgLanguageSettingsPreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').EDIT_TRANSLATION:q=new (c('LtgEditTranslationPreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').REPORT_LANGUAGE:q=new (c('LtgReportLanguagePreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal);break;}if(q===null||!q.getShouldShowPreference())return null;return (c('React').createElement(l,{key:p,value:q},q&&q.getEntryTitle()));};o.prototype.$LtgTranslationPreferences4=function(p,q){if(!q.item.getValue)return;var r=q.item.getValue();this.$LtgTranslationPreferences2(r);};o.prototype.$LtgTranslationPreferences2=function(p){if(!p)return;if(p.getUseConfirmDialog()){this.$LtgTranslationPreferences5(p);}else this.$LtgTranslationPreferences6(p);p.log();};o.prototype.$LtgTranslationPreferences5=function(p){c('SimpleXUIDialog').showEx(p.getConfirmDialogBody(),p.getConfirmDialogTitle(),c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),null),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').SUBMIT,use:'confirm',onClick:function(){return this.$LtgTranslationPreferences6(p);}.bind(this)})));};o.prototype.$LtgTranslationPreferences7=function(p){c('SimpleXUIDialog').show(p.getSuccessDialogBody(),p.getSuccessDialogTitle());};o.prototype.$LtgTranslationPreferences6=function(p){var q=p.getURIForAsyncAction();if(q!==null){new (c('AsyncRequest'))().setURI(q).send();}else p.performAction();if(p.getUseSuccessDialog())this.$LtgTranslationPreferences7(p);};o.prototype.$LtgTranslationPreferences3=function(){if(this.props.originalMessage===null)return;if(this.state.isShowingOriginal){c('CSS').hide(this.props.originalMessage);}else{c('CSS').show(this.props.originalMessage);c('highlight')(this.props.originalMessage);}this.setState({isShowingOriginal:!this.state.isShowingOriginal});this.$LtgTranslationPreferences8(this.state.isShowingOriginal?c('TranslationPreferenceEvent').HIDE_ORIGINAL:c('TranslationPreferenceEvent').SEE_ORIGINAL);};o.prototype.$LtgTranslationPreferences9=function(){this.$LtgTranslationPreferences8(c('TranslationPreferenceEvent').TRANSLATION_PREFERENCES);};o.prototype.render=function(){var p=n.map(function(t){return this.$LtgTranslationPreferences1(t);}.bind(this)),q=c('React').createElement(c('ReactXUIMenu'),{onItemClick:function(t,u){return this.$LtgTranslationPreferences4(t,u);}.bind(this)},p),r=[];r.push(c('React').createElement(c('PopoverMenu.react'),{key:'gear',menu:q},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},c('React').createElement(c('Image.react'),{className:"_h8_",src:i('/images/browse/smurfbar/gear-icon.png')}))));if(this.props.translationData.trigger===c('TranslationTrigger').AUTO_TRANSLATION&&!this.props.shouldShowSeeOriginalInDropdown)r.push(c('React').createElement(c('Link.react'),{key:'seeOriginal',className:"_h90",onClick:function(){return this.$LtgTranslationPreferences3();}.bind(this)},this.state.isShowingOriginal?c('ContentTranslationStrings').HIDE_ORIGINAL:c('ContentTranslationStrings').SEE_ORIGINAL));r.push(c('React').createElement(c('PopoverMenu.react'),{key:'rating',menu:q},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},c('ContentTranslationStrings').RATE_TRANSLATION)));var s=[];r.forEach(function(t,u){if(u!==0)s.push(c('React').createElement(c('Middot.react'),{key:u}));s.push(t);});return (c('React').createElement('span',{className:"_5pio"},s));};o.prototype.$LtgTranslationPreferences8=function(event){new (c('LtgTranslationPreferencesTypedLogger'))().setTranslationID(this.props.translationData.translationID).setFbid(this.props.translationData.targetID).setTranslationTrigger(this.props.translationData.trigger).setClickType(event).log();};f.exports=o;},null);
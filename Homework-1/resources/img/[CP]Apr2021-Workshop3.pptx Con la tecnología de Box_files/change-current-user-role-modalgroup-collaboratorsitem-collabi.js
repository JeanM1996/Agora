(window.webpackJsonp=window.webpackJsonp||[]).push([["change-current-user-role-modal~group-collaborators~item-collab~item-collaborators~sidebar"],{"5VdB9i517s":function(e,t,n){},"Azl/ywd+pz":function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("DJuBjJIVWu");t.a=function(e){var t=e.className,n=void 0===t?"":t,a=e.color,i=void 0===a?"#494949":a,l=e.height,c=void 0===l?14:l,u=e.title,s=e.width,f=void 0===s?14:s;return r.createElement(o.default,{className:"icon-expiration-badge ".concat(n),height:c,title:u,viewBox:"0 0 16 16",width:f},r.createElement("circle",{className:"fill-color",cx:"8",cy:"8",fill:i,r:"8"}),r.createElement("path",{d:"M8,1.5C4.4,1.5,1.5,4.4,1.5,8s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S11.6,1.5,8,1.5z M8,13.5C5,13.5,2.5,11,2.5,8 C2.5,5,5,2.5,8,2.5S13.5,5,13.5,8C13.5,11,11,13.5,8,13.5z",fill:"#FFFFFF"}),r.createElement("polygon",{fill:"#FFFFFF",points:"8.5,8.2 8.5,3.5 7.5,3.5 7.5,8.5 9.7,11.3 10.5,10.7 "}))}},FIFApSGGrg:function(e,t,n){"use strict";var r=n("tGiIrIA8S4"),o=n("JdPdJY0Wnz"),a=n("lKq7gWJ4IC");t.a=function(e){switch(e){case a.g:return r.b.formatMessage(o.a.roleLevelOwner);case a.a:return r.b.formatMessage(o.a.roleLevelCoOwner);case a.b:return r.b.formatMessage(o.a.roleLevelEditor);case a.v:return r.b.formatMessage(o.a.roleLevelViewerUploader);case a.s:return r.b.formatMessage(o.a.roleLevelPreviewerUploader);case a.u:return r.b.formatMessage(o.a.roleLevelViewer);case a.r:return r.b.formatMessage(o.a.roleLevelPreviewer);case a.t:return r.b.formatMessage(o.a.roleLevelUploader);default:return""}}},H0VHfAJyJx:function(e,t,n){},"UBpSzi/uOy":function(e,t,n){},XwGuDx8Jky:function(e,t,n){},"YfCNSd/EUO":function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("/MKjzBatqn"),a=n("PuqeRHPhsD"),i=n.n(a),l=n("edfMKrmZUX"),c=n("tKo2w/h5Bc"),u=n("nw6ScQZYqL"),s=n("xgAAiiFhn0"),f=n("jyz5Lsk3MC"),p=n("tGiIrIA8S4"),b=n("oB2klZje1l"),d=n("PBNYkNogt5"),m=n("mjZGevsoyk"),v=(n("Vt8uAEo//w"),n("TPerhjkHMV"),n("JRPeW/Ew/U")),y=n("TSYQbtd+U2"),h=n.n(y),g=n("WrJ7TOT7fq"),O=n("/jk7UxFXE3"),w=n("rQjBobkOEY"),E=n("A5hl+//H6Z"),j=n("zfug/tAS+n"),I=(n("dYstP2JoGv"),n("iTFjQRguLo"),n("JdPdJY0Wnz")),C=n("iWPjRESdon"),x=n("FIFApSGGrg"),P=n("w/CIkbGFbD");function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}var S=function(e){var t=e.collabData,n=e.changeCollabRole,o=e.isLoading,a=e.isOpen,i=e.newRoleID,l=e.onRequestClose,c=t.email,u=t.name,s=t.itemName,f=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(i,!0);case 2:l();case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){R(a,r,o,i,l,"next",e)}function l(e){R(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return r.createElement(P.b,{body:r.createElement(v.FormattedMessage,D({values:{name:c||u,newRole:C.b[i]&&Object(x.a)(i),folderName:s}},I.a.changeCollabRoleInheritanceCheckModalBody)),heading:p.b.formatMessage(I.a.changeCollabRoleInheritanceCheckModalTitle),isLoading:o,isOpen:a,onConfirm:f,onRequestClose:l})};n("H0VHfAJyJx");function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){M(a,r,o,i,l,"next",e)}function l(e){M(a,r,o,i,l,"throw",e)}i(void 0)}))}}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?J(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){function t(){var e,n;N(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return A(J(n=B(this,(e=F(t)).call.apply(e,[this].concat(a)))),"state",{isInheritanceCheckModalOpen:!1,newRoleID:-1}),A(J(n),"toggleButtonEl",void 0),A(J(n),"setToggleButtonEl",(function(e){n.toggleButtonEl=e})),A(J(n),"recordResinClick",(function(e){j.default.recordActionFromElement(n.toggleButtonEl,{target:e,action:"click"})})),A(J(n),"openChangeCurrentUserRoleModal",(function(e){var t=n.props,r=t.item;(0,t.openChangeCurrentUserRoleModal)({itemTypedID:r.typedID,newRoleID:e})})),A(J(n),"handleOwnerClick",(function(){var e=n.props,t=e.collabData,r=e.item;(0,e.transferItemOwnership)(t,r),n.recordResinClick("owner")})),A(J(n),"handleRemoveClick",(function(){var e=n.props,t=e.collabData,r=e.item;(0,e.openRemoveItemCollabModal)({collabData:t,itemTypedID:r.typedID}),n.recordResinClick("remove")})),A(J(n),"closeInheritanceCheckModal",(function(){n.setState({isInheritanceCheckModalOpen:!1})})),A(J(n),"changeCollabRole",function(){var e=T(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.props.changeCollabRole,e.next=4,r(t,!1);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n.setState({isInheritanceCheckModalOpen:!0,newRoleID:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),A(J(n),"renderMenu",(function(){var e=n.props,t=e.availableRoles,o=e.collabData,a=o.isOwnerChangeable,i=o.roleID,l=o.type,c=o.isEditingUser,u=t||o.availableRoles,s="owner"===i||"group"!==l&&"pending"!==l&&a;return r.createElement(E.Menu,null,s&&r.createElement(E.SelectMenuItem,{key:"owner",isSelected:"owner"===i,onClick:n.handleOwnerClick},r.createElement(v.FormattedMessage,I.a.roleLevelOwner)),C.a.map((function(e){var t=e.roleID,o=e.name;return"number"===typeof t&&(u[o]||i===t)&&r.createElement(E.SelectMenuItem,{key:t,isSelected:i===t,onClick:function(){c?n.openChangeCurrentUserRoleModal(t):n.changeCollabRole(t),n.recordResinClick(o.toLowerCase())}},Object(x.a)(t))})),r.createElement(E.MenuSeparator,null),r.createElement(E.SelectMenuItem,{onClick:n.handleRemoveClick},r.createElement(v.FormattedMessage,I.a.removeCollabLabel)))})),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.changeCollabRole,n=e.children,o=e.collabData,a=e.isLoading,i=e.isRightAligned,l=void 0!==i&&i,c=o.translatedRole,u=this.state,s=u.isInheritanceCheckModalOpen,f=u.newRoleID;return r.createElement("div",null,r.createElement(w.default,{constrainToWindow:!0,isRightAligned:l},n?r.cloneElement(n,{getDOMRef:this.setToggleButtonEl}):r.createElement(g.default,{className:h()("lnk","collab-role-menu-toggle",{"is-disabled":a}),"data-resin-target":"rolebutton",disabled:a,getDOMRef:this.setToggleButtonEl},c,r.createElement(O.a,{className:"toggle-arrow"})),this.renderMenu()),r.createElement(S,{changeCollabRole:t,collabData:o,isLoading:a,isOpen:s,newRoleID:f,onRequestClose:this.closeInheritanceCheckModal}))}}])&&L(n.prototype,o),a&&L(n,a),t}(r.Component);function W(e){return(W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Y(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Y(a,r,o,i,l,"next",e)}function l(e){Y(a,r,o,i,l,"throw",e)}i(void 0)}))}}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=K(t).call(this,e),n=!o||"object"!==W(o)&&"function"!==typeof o?V(r):o,Q(V(n),"activePromise",void 0),Q(V(n),"state",{isLoading:!1}),Q(V(n),"changeCollabRole",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=function(){var r=G(regeneratorRuntime.mark((function r(){var o,a,i,l,c,s,b,d,m,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=n.props,a=o.collabData,i=o.item,l=o.refreshData,c=o.setLoadingState,s=o.showInfoNotification,b=o.showErrorNotification,d=a.collabID,m=a.email,v=a.name,a.roleID!==e){r.next=4;break}return r.abrupt("return");case 4:return c&&!t&&c(!0),n.setState({isLoading:!0}),r.prev=6,r.next=9,Object(f.g)("/app-api/enduserapp/collab/".concat(d,"/change-role"),{itemTypedID:i.typedID,newRoleID:e,ignoreInheritanceCheck:t});case 9:return c&&!t&&c(!1),r.next=12,l();case 12:s(p.b.formatMessage(I.a.changeCollabRoleSuccessNotification,{name:m||v})),r.next=21;break;case 15:if(r.prev=15,r.t0=r.catch(6),c&&!t&&c(!1),r.t0.errorCode!==u.a){r.next=20;break}throw r.t0;case 20:b(r.t0.data&&r.t0.data.message?r.t0.data.message:p.b.formatMessage(I.a.changeCollabRoleFailureNotification),"CHANGE_COLLAB_ROLE_FAILURE_ERROR");case 21:case"end":return r.stop()}}),r,null,[[6,15]])})));return function(){return r.apply(this,arguments)}}();return n.activePromise=Object(s.a)(r()),n.activePromise.then((function(){n.setState({isLoading:!1})})).catch((function(e){if(!e.isCanceled)throw n.setState({isLoading:!1}),e}))})),n.activePromise=null,n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,e),n=t,(o=[{key:"componentWillUnmount",value:function(){this.activePromise&&this.activePromise.cancel()}},{key:"render",value:function(){var e=this.props,t=e.refreshData,n=z(e,["refreshData"]),o=this.state.isLoading;return r.createElement(U,q({changeCollabRole:this.changeCollabRole,isLoading:o,refreshData:t},i()(n,["setLoadingState","showInfoNotification","showErrorNotification"])))}}])&&H(n.prototype,o),a&&H(n,a),t}(r.Component),$=function(e,t){e(Object(l.b)({activeModal:c.ob,modalProps:t}))};t.a=Object(o.connect)(null,(function(e){return{openChangeCurrentUserRoleModal:function(t){return e(Object(l.b)({activeModal:c.f,modalProps:t}))},openRemoveItemCollabModal:function(t){return e(Object(l.b)({activeModal:c.cb,modalProps:t}))},transferItemOwnership:function(t,n){if(n.type===m.f&&n.filesCount>d.a){var r={filesCount:n.filesCount,operationType:d.e,sourceFolderName:n.name,onConfirm:function(){$(e,{email:t.email,itemTypedID:n.typedID})}};e(Object(l.b)({activeModal:c.j,modalProps:r}))}else $(e,{email:t.email,itemTypedID:n.typedID})},showErrorNotification:function(t,n){return e(Object(b.f)({message:t,origin:n}))},showInfoNotification:function(t){return e(Object(b.g)(t))}}}))(X)},ea5sF5ngXf:function(e,t,n){},"h3r+HKBVns":function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("j40BKDjj29"),a=n("pDAn2Ss1To"),i=n("u13g9JNe6/"),l=(n("TPerhjkHMV"),n("/MKjzBatqn")),c=n("PuqeRHPhsD"),u=n.n(c),s=n("CGoMaPPNjC"),f=n("JRPeW/Ew/U"),p=n("gW3Cp1xYca"),b=n("WrJ7TOT7fq"),d=n("TSYQbtd+U2"),m=n.n(d),v=n("BBtKKuFpIS"),y=n("Azl/ywd+pz"),h=n("JdPdJY0Wnz");n("UBpSzi/uOy");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=Object(i.a)((function(e){var t=e.expirationData,n=e.isClickable,o=void 0!==n&&n,a=e.isSecurityIndicatorsEnabled,i=o?h.a.expirationTooltipClickableText:h.a.expirationTooltipText,l=r.createElement(f.FormattedMessage,g({},i,{values:{date:t.executeAt}}));return r.createElement(v.default,{position:"middle-left",text:l},r.createElement("div",{className:m()("ExpirationBadgeWrapper",{"ExpirationBadgeWrapper--security-indicator":a})},r.createElement(y.a,{className:"themed"})))}));O.displayName="ExpirationBadge";var w=O;n("5VdB9i517s");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){var t,n,o,a,i,l=e.expirationData,c=e.extendExpiration,u=e.isLeftPositioned,s=e.isLoading,d=e.isSecurityIndicatorsEnabled;return r.createElement(p.a,{className:"expiration-flyout",constrainToScrollParent:!1,offset:"-7px ".concat(u?15:10,"px"),position:"middle-".concat(u?"left":"right")},r.createElement("div",null,r.createElement(w,{expirationData:l,isClickable:!0,isSecurityIndicatorsEnabled:d})),r.createElement(p.b,null,r.createElement("div",null,r.createElement("strong",null,r.createElement(f.FormattedMessage,E({},h.a.expirationTooltipText,{values:{date:l.executeAtFormatted}}))),(n=(t=l).canChangeExpiration,o=t.canExtend,a=t.extendInterval,i=r.createElement(f.FormattedMessage,h.a.expirationFlyoutBodyCanNotChange),n&&o?i=r.createElement(f.FormattedMessage,E({},h.a.expirationFlyoutBodyCanExtend,{values:{numberOfDays:a}})):n&&(i=r.createElement(f.FormattedMessage,E({},h.a.expirationFlyoutBodyCanChange,{values:{numberOfDays:a-1}}))),r.createElement("p",null,i)),function(e,t,n){var o=e.canExtend,a=e.canChangeExpiration;return o&&a&&r.createElement(b.default,{className:"lnk".concat(n?" is-disabled":""),onClick:function(){n||t()}},r.createElement(f.FormattedMessage,h.a.expirationFlyoutExtendButtonText))}(l,c,s))))};j.displayName="ExpirationFlyout";var I=j;function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){P(a,r,o,i,l,"next",e)}function l(e){P(a,r,o,i,l,"throw",e)}i(void 0)}))}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?T(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){function t(){var e,n;R(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return L(T(n=k(this,(e=M(t)).call.apply(e,[this].concat(o)))),"state",{isLoading:!1}),L(T(n),"extendExpiration",D(regeneratorRuntime.mark((function e(){var t,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.extendExpirationCore,o=t.collabID,a=t.itemTypedID,n.setState({isLoading:!0}),e.next=4,r(o,a);case 4:n.setState({isLoading:!1});case 5:case"end":return e.stop()}}),e)})))),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.state.isLoading;return r.createElement(I,x({extendExpiration:this.extendExpiration,isLoading:e},u()(this.props,"extendExpirationCore")))}}])&&S(n.prototype,o),a&&S(n,a),t}(r.Component),F=Object(l.connect)(null,{extendExpirationCore:s.b})(B),J=n("mJVIYINk5O");n("XwGuDx8Jky");function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=Object(i.a)((function(e){var t=e.collabID,n=e.email,i=e.expirationData,l=e.isCollabGroupPage,c=void 0!==l&&l,u=e.isExternalCollab,s=e.isExpirationLeftPositioned,f=void 0!==s&&s,p=e.isSecurityIndicatorsEnabled,b=e.itemTypedID,d=_(e,["collabID","email","expirationData","isCollabGroupPage","isExternalCollab","isExpirationLeftPositioned","isSecurityIndicatorsEnabled","itemTypedID"]);return p?r.createElement(o.default,{bottomRight:u?r.createElement(J.a,{email:n,isSecurityIndicatorsEnabled:p}):void 0,topRight:i&&(c?r.createElement(w,{expirationData:i,isSecurityIndicatorsEnabled:p}):r.createElement(F,{collabID:t,expirationData:i,isLeftPositioned:f,isSecurityIndicatorsEnabled:p,itemTypedID:b}))},r.createElement(a.a,d)):r.createElement("div",null,i&&(c?r.createElement(w,{expirationData:i}):r.createElement(F,{collabID:t,expirationData:i,isLeftPositioned:f,itemTypedID:b})),u&&r.createElement(J.a,{email:n}),r.createElement(a.a,d))}));A.displayName="AvatarCell";t.a=A},iWPjRESdon:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var r,o=n("lKq7gWJ4IC");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(a(r={},o.g,{roleID:o.g,name:"owner"}),a(r,o.a,{roleID:o.a,name:"coowner"}),a(r,o.b,{roleID:o.b,name:"editor"}),a(r,o.v,{roleID:o.v,name:"viewerUploader"}),a(r,o.s,{roleID:o.s,name:"previewerUploader"}),a(r,o.u,{roleID:o.u,name:"viewer"}),a(r,o.r,{roleID:o.r,name:"previewer"}),a(r,o.t,{roleID:o.t,name:"uploader"}),r),l=[o.a,o.b,o.v,o.s,o.u,o.r,o.t].map((function(e){return i[e]}))},mJVIYINk5O:function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("JRPeW/Ew/U"),a=n("TSYQbtd+U2"),i=n.n(a),l=n("BBtKKuFpIS"),c=n("Nci6xOOe/H"),u=n("JdPdJY0Wnz");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){var t=e.email,n=e.isSecurityIndicatorsEnabled,a=r.createElement(o.FormattedMessage,s({},u.a.externalCollabTooltipText,{values:{email:t}})),f=r.createElement("div",{className:i()("ExternalCollabBadgeWrapper",{"ExternalCollabBadgeWrapper--security-indicator":n})},r.createElement(c.a,{className:"externalBadge"}));return t?r.createElement(l.default,{position:"middle-left",text:a},f):f};f.displayName="ExternalCollabBadge",t.a=f},nw6ScQZYqL:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="inheritedCollabError",o="tasksAffectedError"},pDAn2Ss1To:function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("fJnJky/6Nu"),a=n("u13g9JNe6/"),i=(n("ea5sF5ngXf"),Object(a.a)((function(e){var t=e.avatarURL,n=e.id,a=e.name;return r.createElement(o.a,{avatarURL:t||"",className:"avatar-cell",id:n,name:a})})));i.displayName="AvatarCell";var l=i,c=n("uQysw7cmB4");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=Object(a.a)((function(e){var t=e.email,n=s(e,["email"]);return t?r.createElement(c.a,u({href:"mailto:".concat(t),title:t},n),t):r.createElement("span",null,"--")}));f.displayName="EmailCell";var p=f;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=Object(a.a)((function(e){var t=e.id,n=e.name,o=e.profileURL,a=d(e,["id","name","profileURL"]);return r.createElement(c.a,b({href:o||"/profile/".concat(t),rel:"noopener",target:"_blank",title:n},a),n)}));m.displayName="ProfileCell";var v=m;n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return v}))},qXvDqNoLwO:function(e,t,n){"use strict";var r=n("q1tIBJhxTW"),o=n("/MKjzBatqn"),a=n("PuqeRHPhsD"),i=n.n(a),l=n("edfMKrmZUX"),c=n("tKo2w/h5Bc"),u=n("jyz5Lsk3MC"),s=n("oB2klZje1l"),f=n("tGiIrIA8S4"),p=n("JRPeW/Ew/U"),b=n("A5hl+//H6Z"),d=n("zfug/tAS+n"),m=n("JdPdJY0Wnz");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O=function(e){var t=e.getResinAttributes,n=e.openRemoveItemCollabModal,o=e.resendInvite,a=g(e,["getResinAttributes","openRemoveItemCollabModal","resendInvite"]);return r.createElement(b.Menu,a,r.createElement(b.MenuItem,{onClick:function(){o(),d.default.recordAction(y({},t(),{target:"resendinvite",action:"click"}))}},r.createElement(p.FormattedMessage,m.a.resendInviteLabel)),r.createElement(b.MenuItem,{onClick:function(){n(),d.default.recordAction(y({},t(),{target:"removependingcollab",action:"click"}))}},r.createElement(p.FormattedMessage,m.a.removeCollabLabel)))};n("TPerhjkHMV");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){j(a,r,o,i,l,"next",e)}function l(e){j(a,r,o,i,l,"throw",e)}i(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?R(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(e){function t(){var e,n;C(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return k(R(n=P(this,(e=D(t)).call.apply(e,[this].concat(o)))),"resendInvite",I(regeneratorRuntime.mark((function e(){var t,r,o,a,i,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.collabData,o=t.setLoadingState,a=t.showInfoNotification,i=t.showErrorNotification,l=r.collabID,c=r.email,o(!0),e.prev=3,e.next=6,Object(u.g)("/app-api/enduserapp/collab/".concat(l,"/resend-invite"));case 6:a(f.b.formatMessage(m.a.resendInviteSuccessNotification,{email:c})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),i(f.b.formatMessage(m.a.resendInviteErrorNotification),"RESEND_INVITE_ERROR");case 12:o(!1);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))),k(R(n),"openRemoveItemCollabModal",(function(){var e=n.props,t=e.collabData,r=e.itemTypedID;(0,e.openRemoveItemCollabModal)({collabData:t,itemTypedID:r,refreshData:e.refreshData})})),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement(O,E({},i()(this.props,["collabData","itemTypedID","refreshData","setLoadingState","showErrorNotification","showInfoNotification"]),{openRemoveItemCollabModal:this.openRemoveItemCollabModal,resendInvite:this.resendInvite}))}}])&&x(n.prototype,o),a&&x(n,a),t}(r.Component);t.a=Object(o.connect)(null,(function(e){return{openRemoveItemCollabModal:function(t){return e(Object(l.b)({activeModal:c.cb,modalProps:t}))},showErrorNotification:function(t,n){return e(Object(s.f)({message:t,origin:n}))},showInfoNotification:function(t){return e(Object(s.g)(t))}}}))(M)}}]);
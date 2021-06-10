(this["webpackJsonpreact-material-admin"]=this["webpackJsonpreact-material-admin"]||[]).push([[31],{859:function(r,e,a){"use strict";a.r(e);var o=a(28),s=a.n(o),n=a(48),d=a(384),t=a(781),i=a(413),c=a(468),l=a(845),u=a(850),w=a(342),m=a(183),p=a(343),f=a(49),h=a.n(f),P=a(285),b=function(){var r=Object(n.a)(s.a.mark((function r(e){var a,o,n,d;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.oldPassword,o=e.newPassword,r.next=3,h.a.put("/api/password",{oldPassword:a,newPassword:o});case 3:return n=r.sent,d=n.data,r.abrupt("return",d);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();var j=a(127),v=a(1);e.default=function(){var r=Object(j.b)(),e=Object(m.a)().t,a=function(){var r=Object(P.a)(b);return{isUpdating:r.isLoading,updatePassword:r.mutateAsync}}(),o=a.isUpdating,f=a.updatePassword,h=Object(w.a)({initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},validationSchema:p.b({oldPassword:p.d().min(8,e("common.validations.min",{size:8})).required(e("common.validations.required")),newPassword:p.d().min(8,e("common.validations.min",{size:8})).required(e("common.validations.required")),confirmPassword:p.d().oneOf([p.c("newPassword")],e("common.validations.passwordMatch")).required(e("common.validations.required"))}),onSubmit:function(r){return x(r.oldPassword,r.newPassword)}}),x=function(){var a=Object(n.a)(s.a.mark((function a(o,n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f({oldPassword:o,newPassword:n}).then((function(){h.resetForm(),r.success(e("profile.notifications.passwordChanged"))})).catch((function(){r.error(e("common.errors.unexpected.subTitle"))}));case 1:case"end":return a.stop()}}),a)})));return function(r,e){return a.apply(this,arguments)}}();return Object(v.jsx)("form",{onSubmit:h.handleSubmit,noValidate:!0,children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(c.a,{title:e("profile.password.title")}),Object(v.jsxs)(i.a,{children:[Object(v.jsx)(l.a,{margin:"normal",required:!0,fullWidth:!0,name:"oldPassword",label:e("profile.password.form.current.label"),type:"password",id:"oldPassword",autoComplete:"current-password",disabled:o,value:h.values.oldPassword,onChange:h.handleChange,error:h.touched.oldPassword&&Boolean(h.errors.oldPassword),helperText:h.touched.oldPassword&&h.errors.oldPassword}),Object(v.jsx)(l.a,{margin:"normal",required:!0,fullWidth:!0,name:"newPassword",label:e("profile.password.form.new.label"),type:"password",id:"newPassword",disabled:o,value:h.values.newPassword,onChange:h.handleChange,error:h.touched.newPassword&&Boolean(h.errors.newPassword),helperText:h.touched.newPassword&&h.errors.newPassword}),Object(v.jsx)(l.a,{margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:e("profile.password.form.confirm.label"),type:"password",id:"confirmPassword",disabled:o,value:h.values.confirmPassword,onChange:h.handleChange,error:h.touched.confirmPassword&&Boolean(h.errors.confirmPassword),helperText:h.touched.confirmPassword&&h.errors.confirmPassword})]}),Object(v.jsx)(t.a,{children:Object(v.jsx)(u.a,{type:"submit",loading:o,variant:"contained",children:e("common.update")})})]})})}}}]);
//# sourceMappingURL=31.20202d26.chunk.js.map
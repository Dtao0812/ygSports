var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20180814_syb_cb_crawl*/window.__wcc_version__='v0.5vv_20180814_syb_cb_crawl';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'03abb5e3'])
Z([3,'_view data-v-1f2f4d6f'])
Z([3,'content'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotcontent']],[1,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'44b132ae'])
Z([3,'_view data-v-47f2cf3c'])
Z([3,'true'])
Z([3,'_swiper data-v-47f2cf3c grace-swiper'])
Z([3,'#00B26A'])
Z([3,'rgba(255, 255, 255, 1)'])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperHeight']],[1,'px']]],[1,';']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[9])
Z([3,'_swiper-item data-v-47f2cf3c'])
Z([[7],[3,'index']])
Z([3,'_navigator data-v-47f2cf3c'])
Z([[6],[[7],[3,'item']],[3,'path']])
Z([3,'handleProxy'])
Z([3,'_image data-v-47f2cf3c'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'lpV-0-'],[[7],[3,'index']]])
Z([[2,'+'],[[7],[3,'swiperId']],[1,'-item-1']])
Z([3,'widthFix'])
Z([[6],[[7],[3,'item']],[3,'imgUrl']])
Z([[2,'!'],[[7],[3,'indicatorDots']]])
Z([3,'_view data-v-47f2cf3c title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'60d40076'])
Z([[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'IDi-1']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-30a554f9-default-IDi-1']]],[[8],'$slotcontent',[1,'data-v-30a554f9-content-IDi-1']]])
Z([3,'03abb5e3'])
Z([3,'defpage'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'60d40076'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'423089bd'])
Z([3,'_view data-v-359bfa43 content'])
Z([3,'_image data-v-359bfa43 logo'])
Z([3,'../../static/logo.png'])
Z([3,'_view data-v-359bfa43'])
Z([3,'_text data-v-359bfa43 title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'423089bd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fc233b5c'])
Z([3,'_view data-v-29b51574 content'])
Z([3,'_image data-v-29b51574 logo'])
Z([3,'../../static/logo.png'])
Z([3,'_view data-v-29b51574'])
Z([3,'_text data-v-29b51574 title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'fc233b5c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'420654a5'])
Z([3,'_view data-v-3571c52b content'])
Z([3,'_image data-v-3571c52b logo'])
Z([3,'../../static/logo.png'])
Z([3,'_view data-v-3571c52b'])
Z([3,'_text data-v-3571c52b title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'420654a5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/page/index.vue.wxml','/components/slots','./components/slots.wxml','/components/page/index.vue.wxml','./components/swiper/swiper.vue.wxml','./pages/home/index.vue.wxml','/components/swiper/swiper.vue.wxml','./pages/home/index.wxml','/pages/home/index.vue.wxml','./pages/message/index.vue.wxml','./pages/message/index.wxml','/pages/message/index.vue.wxml','./pages/my/index.vue.wxml','./pages/my/index.wxml','/pages/my/index.vue.wxml','./pages/product/index.vue.wxml','./pages/product/index.wxml','/pages/product/index.vue.wxml'];d_[x[0]]={}
d_[x[0]]["03abb5e3"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':03abb5e3'
r.wxVkey=b
gg.f=$gdc(f_["./components/page/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./components/page/index.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/page/index.vue.wxml:template:5:6")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[0],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[0],5,64)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["content"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':content'
r.wxVkey=b
gg.f=$gdc(f_["./components/page/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
oD.pop()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["44b132ae"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[4]+':44b132ae'
r.wxVkey=b
gg.f=$gdc(f_["./components/swiper/swiper.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./components/swiper/swiper.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/swiper/swiper.vue.wxml:swiper:3:6")
var xC=_mz(z,'swiper',['autoplay',2,'class',1,'indicatorActiveColor',2,'indicatorColor',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./components/swiper/swiper.vue.wxml:swiper-item:4:8")
var fE=function(hG,cF,oH,gg){
cs.push("./components/swiper/swiper.vue.wxml:swiper-item:4:8")
var oJ=_mz(z,'swiper-item',['class',13,'key',1],[],hG,cF,gg)
cs.push("./components/swiper/swiper.vue.wxml:navigator:5:10")
var lK=_mz(z,'navigator',['class',15,'url',1],[],hG,cF,gg)
cs.push("./components/swiper/swiper.vue.wxml:image:6:12")
var tM=_mz(z,'image',['bindload',17,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'mode',5,'src',6],[],hG,cF,gg)
cs.pop()
_(lK,tM)
var aL=_v()
_(lK,aL)
if(_oz(z,24,hG,cF,gg)){aL.wxVkey=1
cs.push("./components/swiper/swiper.vue.wxml:view:7:12")
cs.push("./components/swiper/swiper.vue.wxml:view:7:12")
var eN=_n('view')
_rz(z,eN,'class',25,hG,cF,gg)
var bO=_oz(z,26,hG,cF,gg)
_(eN,bO)
cs.pop()
_(aL,eN)
cs.pop()
}
aL.wxXCkey=1
cs.pop()
_(oJ,lK)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,11,fE,e,s,gg,oD,'item','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[4]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
d_[x[5]]["60d40076"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[5]+':60d40076'
r.wxVkey=b
gg.f=$gdc(f_["./pages/home/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/home/index.vue.wxml:template:4:4")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[5],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[5],4,175)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=e_[x[5]].i
_ai(hG,x[3],e_,x[5],1,1)
_ai(hG,x[6],e_,x[5],2,2)
hG.pop()
hG.pop()
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[x[3],x[6]],ic:[]}
d_[x[7]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cI=e_[x[7]].i
_ai(cI,x[8],e_,x[7],1,1)
var oJ=_v()
_(r,oJ)
cs.push("./pages/home/index.wxml:template:1:44")
var lK=_oz(z,1,e,s,gg)
var aL=_gd(x[7],lK,e_,d_)
if(aL){
var tM=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[7],1,56)
cs.pop()
cI.pop()
return r
}
e_[x[7]]={f:m4,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["423089bd"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[9]+':423089bd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/message/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/message/index.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/message/index.vue.wxml:image:3:6")
var xC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/message/index.vue.wxml:view:4:6")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
cs.push("./pages/message/index.vue.wxml:text:5:8")
var fE=_n('text')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oP=e_[x[10]].i
_ai(oP,x[11],e_,x[10],1,1)
var xQ=_v()
_(r,xQ)
cs.push("./pages/message/index.wxml:template:1:47")
var oR=_oz(z,1,e,s,gg)
var fS=_gd(x[10],oR,e_,d_)
if(fS){
var cT=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[10],1,59)
cs.pop()
oP.pop()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["fc233b5c"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[12]+':fc233b5c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/my/index.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/my/index.vue.wxml:image:3:6")
var xC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/my/index.vue.wxml:view:4:6")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
cs.push("./pages/my/index.vue.wxml:text:5:8")
var fE=_n('text')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cW=e_[x[13]].i
_ai(cW,x[14],e_,x[13],1,1)
var oX=_v()
_(r,oX)
cs.push("./pages/my/index.wxml:template:1:42")
var lY=_oz(z,1,e,s,gg)
var aZ=_gd(x[13],lY,e_,d_)
if(aZ){
var t1=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[13],1,54)
cs.pop()
cW.pop()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["420654a5"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[15]+':420654a5'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./pages/product/index.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/product/index.vue.wxml:image:3:6")
var xC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/product/index.vue.wxml:view:4:6")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
cs.push("./pages/product/index.vue.wxml:text:5:8")
var fE=_n('text')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[15]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o4=e_[x[16]].i
_ai(o4,x[17],e_,x[16],1,1)
var x5=_v()
_(r,x5)
cs.push("./pages/product/index.wxml:template:1:47")
var o6=_oz(z,1,e,s,gg)
var f7=_gd(x[16],o6,e_,d_)
if(f7){
var c8=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[16],1,59)
cs.pop()
o4.pop()
return r
}
e_[x[16]]={f:m10,j:[],i:[],ti:[x[17]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [["@font-face { font-family: \x22grace-iconfont\x22; src: url(\x27data:application/x-font-woff;charset\x3dutf-8;base64,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\x3d\x3d\x27) format(\x27woff\x27); }\n.",[1],"grace-iconfont { font-family: \x22grace-iconfont\x22 !important; font-size: ",[0,36],"; font-style: normal; }\n.",[1],"icon-shoppingcard:before { content: \x22\\E60A\x22; }\n.",[1],"icon-share:before { content: \x22\\E615\x22; }\n.",[1],"icon-position:before { content: \x22\\E61C\x22; }\n.",[1],"icon-safe:before { content: \x22\\E687\x22; }\n.",[1],"icon-time2:before { content: \x22\\E64C\x22; }\n.",[1],"icon-home:before { content: \x22\\E608\x22; }\n.",[1],"icon-back:before { content: \x22\\E616\x22; }\n.",[1],"icon-star:before { content: \x22\\E645\x22; }\n.",[1],"icon-like:before { content: \x22\\E645\x22; }\n.",[1],"icon-zan:before { content: \x22\\E6EA\x22; }\n.",[1],"icon-share2:before { content: \x22\\E606\x22; }\n.",[1],"icon-pinglun:before { content: \x22\\E6B8\x22; }\n.",[1],"icon-weibo:before { content: \x22\\E6CD\x22; }\n.",[1],"icon-weixin:before { content: \x22\\E63E\x22; }\n.",[1],"icon-qq:before { content: \x22\\E63C\x22; }\n.",[1],"icon-write:before { content: \x22\\E69E\x22; }\n.",[1],"icon-remove:before { content: \x22\\E684\x22; }\n.",[1],"icon-search:before { content: \x22\\E604\x22; }\n.",[1],"icon-close:before { content: \x22\\E602\x22; }\n.",[1],"icon-close2:before { content: \x22\\E78A\x22; }\n.",[1],"icon-refresh:before { content: \x22\\E61A\x22; }\n.",[1],"icon-loading:before { content: \x22\\E9DB\x22; }\n.",[1],"icon-arrow-left:before { content: \x22\\E600\x22; }\n.",[1],"icon-arrow-right:before { content: \x22\\E601\x22; }\n.",[1],"icon-arrow-up:before { content: \x22\\E654\x22; }\n.",[1],"icon-arrow-down:before { content: \x22\\E603\x22; }\n.",[1],"icon-right:before { content: \x22\\E60F\x22; }\n.",[1],"icon-shoucang:before { content: \x22\\E605\x22; }\n.",[1],"icon-time:before { content: \x22\\E607\x22; }\n.",[1],"icon-eye:before { content: \x22\\E609\x22; }\n.",[1],"icon-shaixuan:before { content: \x22\\E686\x22; }\n.",[1],"icon-share3:before { content: \x22\\E622\x22; }\n.",[1],"icon-voice:before { content: \x22\\E617\x22; }\n.",[1],"icon-photograph:before { content: \x22\\E60B\x22; }\n.",[1],"icon-keyboard:before { content: \x22\\E627\x22; }\nwx-view { font-size: ",[0,28],"; }\n.",[1],"grace-padding { padding: 2%; width: 96%; }\n.",[1],"grace-common-bg { background: #F8F8F8; }\n.",[1],"grace-noborder { border: 0 !important; }\n.",[1],"grace-left-padding-wrap { width: 96%; padding: ",[0,12]," 0; padding-left: 4%; overflow: hidden; background: #FFFFFF; }\n.",[1],"grace-left-padding-wrap .",[1],"grace-list { border-bottom: ",[0,1]," solid #D1D1D1; padding-left: 0; }\n.",[1],"grace-left-padding-wrap .",[1],"grace-list wx-view wx-text { color: #666; font-size: ",[0,28],"; }\n@-webkit-keyframes gradient { 50% { background-position: 100% 0; }\n}@keyframes gradient { 50% { background-position: 100% 0; }\n}.",[1],"grace-gradient-bg { width: 100%; background: -webkit-linear-gradient(45deg,#5a3694 0,#13bdce 33%,#0094d9 66%,#6fc7b5 100%); background: linear-gradient(45deg,#5a3694 0,#13bdce 33%,#0094d9 66%,#6fc7b5 100%); background-size: 400%; background-position: 0 100%; -webkit-animation: gradient 7.5s ease-in-out infinite; animation: gradient 7.5s ease-in-out infinite; padding: ",[0,50]," 0; }\n.",[1],"grace-gradient-bg wx-view { color: #FFF; }\n@-webkit-keyframes grace-fade-in { 0% { opacity: 0.1; }\n40% { opacity: 0.5; }\n100% { opacity: 1; }\n}@keyframes grace-fade-in { 0% { opacity: 0.1; }\n40% { opacity: 0.5; }\n100% { opacity: 1; }\n}.",[1],"grace-fade-in { -webkit-animation: grace-fade-in 200ms linear; animation: grace-fade-in 200ms linear; }\nwx-graceSwiper { width: 100%; height: auto; }\nwx-graceSlider, wx-graceSpeaker, wx-graceLoading { width: 100%; }\n.",[1],"grace-center { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; text-align: center; }\n.",[1],"grace-h1 { font-size: ",[0,80],"; line-height: 1.8em; }\n.",[1],"grace-h2 { font-size: ",[0,60],"; line-height: 1.8em; }\n.",[1],"grace-h3 { font-size: ",[0,45],"; line-height: 1.8em; }\n.",[1],"grace-h4 { font-size: ",[0,32],"; line-height: 1.8em; }\n.",[1],"grace-h5 { font-size: ",[0,30],"; line-height: 1.8em; }\n.",[1],"grace-text { font-size: ",[0,28],"; line-height: 2.2em; }\n.",[1],"grace-text wx-image { width: 100%; margin: ",[0,20]," 0; }\n.",[1],"grace-text-small { font-size: ",[0,24],"; line-height: 1.8em; }\n.",[1],"grace-line-through { text-decoration: line-through; }\n.",[1],"grace-italic { font-style: italic; }\n.",[1],"grace-indent { text-indent: 2em; }\n.",[1],"grace-blod { font-weight: 700; }\n.",[1],"grace-ellipsis { width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.",[1],"grace-flex { display: -webkit-box !important; display: -webkit-flex !important; display: flex !important; }\n.",[1],"grace-rows { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal !important; -webkit-box-direction: normal !important; -webkit-flex-direction: row !important; flex-direction: row !important; }\n.",[1],"grace-columns { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -webkit-flex-direction: column !important; flex-direction: column !important; }\n.",[1],"grace-wrap { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-nowrap { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap !important; flex-wrap: nowrap !important; }\n.",[1],"grace-space-between { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify !important; -webkit-justify-content: space-between !important; justify-content: space-between !important; }\n.",[1],"grace-bg-red { background: #F76260; }\n.",[1],"grace-bg-green { background: #09BB07; }\n.",[1],"grace-bg-blue { background: #10AEFF; }\n.",[1],"grace-scroll-x { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; white-space: nowrap; height: auto; font-size: 0; }\n.",[1],"grace-scroll-x .",[1],"grace-items { width: ",[0,355],"; height: ",[0,200],"; vertical-align: top; margin: 0 ",[0,10],"; display: -webkit-inline-box; display: -webkit-inline-flex; display: inline-flex; }\n.",[1],"grace-scroll-y { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; font-size: 0; height: ",[0,200],"; }\n.",[1],"grace-scroll-y .",[1],"grace-items { width: 100%; height: ",[0,200],"; }\n.",[1],"grace-badge { border-radius: ",[0,38],"; height: ",[0,38],"; line-height: ",[0,38],"; padding: 0 ",[0,13],"; font-size: ",[0,22],"; background: #D1D1D1; }\n.",[1],"grace-badge-red { background: #F76260; color: #FFF !important; }\n.",[1],"grace-badge-green { background: #09BB07; color: #FFF !important; }\n.",[1],"grace-badge-blue { background: #10AEFF; color: #FFF !important; }\n.",[1],"grace-badge-yellow { background: #F0AD4E; color: #FFF !important; }\n.",[1],"grace-list { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,20]," 2%; overflow: hidden; width: 96%; -webkit-flex-wrap: nowrap !important; flex-wrap: nowrap !important; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"grace-list \x3e wx-image { width: ",[0,56],"; height: ",[0,56],"; }\n.",[1],"grace-list \x3e wx-view { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-flex-shrink: 0; flex-shrink: 0; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"grace-list \x3e wx-view:last-child { -webkit-box-pack: right; -webkit-justify-content: right; justify-content: right; }\n.",[1],"grace-list \x3e wx-view \x3e wx-text { color: #666; font-size: ",[0,22],"; }\n.",[1],"grace-list-text { font-size: ",[0,30],"; line-height: 2em; width: 100%; -webkit-flex-shrink: 1; flex-shrink: 1; }\n.",[1],"grace-list-text wx-text { font-size: ",[0,26],"; line-height: 2em; color: #666; }\n.",[1],"grace-list-imgs-r { width: ",[0,56],"; -webkit-flex-shrink: 0; flex-shrink: 0; margin-left: ",[0,20],"; }\n.",[1],"grace-list-imgs-l { width: ",[0,56],"; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,20],"; }\n.",[1],"grace-list-imgs-arrow { width: ",[0,40],"; -webkit-flex-shrink: 0; flex-shrink: 0; text-align: right; color: #888; font-size: ",[0,36],"; }\n.",[1],"grace-list-mr { margin-right: ",[0,20],"; }\n.",[1],"grace-boxes { width: 23%; margin: 0 1%; padding: ",[0,10]," 0; }\n.",[1],"grace-boxes-img { width: 70%; margin: 0 auto; text-align: center; padding-bottom: ",[0,10],"; font-size: 0; }\n.",[1],"grace-boxes-img wx-image { width: 100%; }\n.",[1],"grace-boxes-text { line-height: 2em; text-align: center; font-size: ",[0,22],"; }\n.",[1],"grace-imgitems { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-imgitems .",[1],"grace-items { width: 48%; margin: ",[0,10]," 1%; overflow: hidden; font-size: 0; position: relative; }\n.",[1],"grace-imgitems wx-image { width: 100%; }\n.",[1],"grace-imgitems-text { margin: ",[0,6]," 1%; width: 98%; font-size: ",[0,26],"; height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"grace-imgitems-more { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; line-height: ",[0,46],"; }\n.",[1],"grace-imgitems-button { width: auto; border: 1px solid #09BB07; line-height: ",[0,44],"; padding: 0 ",[0,20],"; color: #49A761; font-size: ",[0,24],"; border-radius: ",[0,5],"; }\n.",[1],"grace-imgitems-tips { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; width: auto; position: absolute; top: ",[0,10],"; color: #FFFFFF; height: ",[0,36],"; font-size: ",[0,20],"; line-height: ",[0,36],"; background: #F76260; padding: 0 6px; }\n.",[1],"grace-imgitems-tips-green { background: #09BB07; }\n.",[1],"grace-imgitems-tips-r { right: 0; }\n.",[1],"grace-news-list { padding: ",[0,12]," 0; }\n.",[1],"grace-news-list \x3e wx-navigator { display: block; width: 100%; padding: ",[0,12]," 0; margin: ",[0,12]," 0; }\n.",[1],"grace-news-list-items { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; position: relative; }\n.",[1],"grace-news-list-img { width: ",[0,200],"; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-news-list-title { width: 100%; overflow: hidden; }\n.",[1],"grace-news-list-title-main { line-height: 1.5em; font-size: ",[0,32],"; width: 100%; }\n.",[1],"grace-news-list-title-desc { font-size: ",[0,24],"; display: block; color: #666; margin-top: ",[0,12],"; height: ",[0,40],"; line-height: ",[0,40],"; }\n.",[1],"grace-news-tips { width: auto; padding: 0 ",[0,12],"; border-radius: ",[0,5],"; overflow: hidden; background: #FF4343; position: absolute; top: 0; color: #FFFFFF; height: ",[0,36],"; line-height: ",[0,36],"; font-size: ",[0,20],"; }\n.",[1],"grace-news-tips-l { left: 0; }\n.",[1],"grace-news-tips-r { right: 0; }\n.",[1],"grace-news-list-info { width: 100%; margin-top: ",[0,10],"; line-height: ",[0,36],"; font-size: ",[0,24],"; color: #666; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-news-list-info wx-view { font-size: ",[0,24],"; color: #666; }\n.",[1],"grace-news-list-info wx-text { font-size: ",[0,24],"; color: #666; margin-right: ",[0,10],"; }\n.",[1],"grace-news-list-img-news { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-news-list-imgs { -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; margin: ",[0,18]," 0; -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; }\n.",[1],"grace-news-list-imgs wx-image { width: 31.3%; margin: 0 1%; }\n.",[1],"grace-news-list-img-big { width: 100%; padding: ",[0,18]," 0; }\n.",[1],"grace-news-list-img-big wx-image { width: 100%; }\n.",[1],"grace-tab { padding: 0; }\n.",[1],"grace-tab-title { white-space: nowrap; text-align: center; background: #FFFFFF; }\n.",[1],"grace-tab-title wx-view { width: auto; padding: 0 12px; margin: 0 8px; line-height: 42px; display: inline-block; text-align: center; border-bottom: 2px solid #FFFFFF; font-size: ",[0,30],"; }\n.",[1],"grace-tab-title wx-view:first-child { margin-left: 0; }\n.",[1],"grace-tab-title wx-view:last-child { margin-right: 0; }\n.",[1],"grace-tab-current { border-bottom: ",[0,4]," solid #49A761 !important; color: #49A761; }\n.",[1],"grace-tab-swiper { width: 100%; height: ",[0,350],"; padding: 0; }\n.",[1],"grace-tab-swiper wx-swiper-item { width: 100%; }\n.",[1],"grace-tab-swiper wx-swiper-item wx-navigator { line-height: ",[0,70],"; width: 100%; display: block; }\n.",[1],"grace-tab-swiper-full { width: 100%; height: auto; }\n.",[1],"grace-tab-swiper-full wx-swiper-item { width: 100%; }\n.",[1],"grace-tab-swiper-full wx-scroll-view { width: 100%; height: 100%; }\n.",[1],"grace-accordion { background: #FFFFFF; }\n.",[1],"grace-accordion-items { overflow: hidden; border-bottom: 1px solid #F2F3F4; }\n.",[1],"grace-accordion-items:last-child { border: none; }\n.",[1],"grace-accordion-title { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; width: 96%; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding: 0 1% 0 3%; line-height: ",[0,88],"; height: ",[0,88],"; overflow: hidden; font-size: ",[0,32],"; }\n.",[1],"grace-accordion .",[1],"grace-current { background: #F2F3F4; }\n.",[1],"grace-accordion-body { overflow: hidden; }\n.",[1],"grace-title { padding: ",[0,10]," 0; line-height: 1.8em; }\n.",[1],"grace-title .",[1],"grace-text-small { color: #888; }\n.",[1],"grace-more-bottom { font-size: ",[0,24],"; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding: ",[0,15]," 0; line-height: ",[0,40],"; }\n.",[1],"grace-more-bottom wx-text { font-size: ",[0,24],"; }\n.",[1],"grace-more-r { display: block; width: auto; -webkit-flex-shrink: 0; flex-shrink: 0; font-size: ",[0,22],"; }\n.",[1],"grace-more-r wx-text { font-size: ",[0,22],"; }\n.",[1],"grace-box-banner { padding: ",[0,20]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; overflow: hidden; background: #FFF; }\n.",[1],"grace-box-banner .",[1],"garce-items { width: 25%; border-right: 1px solid #F1F2F3; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; line-height: 1.4em; text-align: center；; }\n.",[1],"grace-box-banner .",[1],"garce-items:last-child { border: none; }\n.",[1],"grace-box-banner .",[1],"garce-items wx-view { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; text-align: center; }\n.",[1],"grace-box-banner .",[1],"garce-items wx-text wx-text { font-size: 22rupx; color: #666; }\n.",[1],"grace-box-banner .",[1],"line1 { font-size: ",[0,36],"; line-height: ",[0,60],"; overflow: hidden; }\n.",[1],"grace-box-banner .",[1],"line1 wx-text { font-size: ",[0,26],"; color: #666; line-height: ",[0,65],"; margin-left: ",[0,5],"; }\n.",[1],"grace-box-banner .",[1],"line2 { font-size: ",[0,26],"; color: #666; line-height: ",[0,32],"; }\n.",[1],"grace-select-tips { padding: ",[0,10]," 0; }\n.",[1],"grace-select-tips wx-checkbox-group, .",[1],"grace-select-tips wx-radio-group { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-select-tips .",[1],"_label { display: block; width: auto; overflow: hidden; padding: ",[0,15]," ",[0,22],"; height: ",[0,30],"; line-height: ",[0,30],"; margin: ",[0,8],"; background: #F6F7F8; font-size: ",[0,26],"; border-radius: ",[0,5],"; }\n.",[1],"grace-select-tips .",[1],"_label wx-checkbox, .",[1],"grace-select-tips .",[1],"_label wx-radio { display: none; }\n.",[1],"grace-checked { background: #63ba97 !important; color: #FFFFFF; }\n.",[1],"grace-footer { display: -webkit-box; display: -webkit-flex; display: flex; position: fixed; z-index: 2; left: 0; bottom: 0; background: #FFFFFF; width: 100%; height: ",[0,90],"; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; overflow: hidden; box-shadow: 1px 1px 6px #888; }\n.",[1],"grace-footer .",[1],"grace-input { width: 100%; margin: ",[0,15]," ",[0,20],"; padding: 0 ",[0,15],"; background: #F4F5F6; height: ",[0,60],"; border-radius: ",[0,60],"; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"grace-input-icon { width: ",[0,60],"; height: ",[0,60],"; line-height: ",[0,60],"; font-size: ",[0,30],"; color: #000000; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-footer .",[1],"grace-input .",[1],"_input { width: 100%; padding: ",[0,10]," ",[0,15],"; height: ",[0,40],"; line-height: ",[0,40],"; font-size: ",[0,26],"; background: none; border: 0; }\n.",[1],"grace-footer .",[1],"icons { width: ",[0,70],"; height: ",[0,60],"; margin: ",[0,15]," ",[0,8],"; text-align: center; line-height: ",[0,60],"; -webkit-flex-shrink: 0; flex-shrink: 0; font-size: ",[0,50],"; }\n.",[1],"grace-footer .",[1],"grace-items { width: auto; line-height: ",[0,90],"; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-footer .",[1],"_button { width: 100%; border: 0; border-radius: 0; height: ",[0,90],"; line-height: ",[0,90],"; }\n.",[1],"grace-form { padding: 0; width: 100%; }\n.",[1],"grace-form .",[1],"_form { display: block; width: 100%; overflow: hidden; }\n.",[1],"grace-form .",[1],"grace-items { display: -webkit-box; display: -webkit-flex; display: flex; border-bottom: 1px solid #F2F3F4; width: 100%; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding: ",[0,10]," 0; }\n.",[1],"grace-form .",[1],"grace-items .",[1],"grace-label { width: ",[0,130],"; height: ",[0,80],"; line-height: ",[0,80],"; -webkit-flex-shrink: 0; flex-shrink: 0; overflow: hidden; }\n.",[1],"grace-form .",[1],"grace-items .",[1],"input { width: 98%; height: ",[0,40],"; line-height: ",[0,40],"; background: none; -webkit-flex-shrink: 1; flex-shrink: 1; border: 0; text-align: right; padding: ",[0,20]," 2%; margin-left: ",[0,40],"; }\n.",[1],"grace-form-r { width: 100%; padding: 0 ",[0,10],"; line-height: ",[0,80],"; display: block; overflow: hidden; -webkit-flex-shrink: 1; flex-shrink: 1; margin-left: ",[0,40],"; text-align: right; }\n.",[1],"grace-form wx-picker { width: 100%; height: ",[0,80],"; line-height: ",[0,80],"; background: none; border: 0; text-align: right; }\n.",[1],"grace-form wx-switch { margin-top: ",[0,10],"; }\n.",[1],"grace-form .",[1],"grace-items wx-picker wx-text { -webkit-box-pack: right; -webkit-justify-content: right; justify-content: right; line-height: ",[0,80],"; font-size: ",[0,28],"; }\n.",[1],"grace-form .",[1],"grace-items wx-picker wx-text:after { content: \x22\\E601\x22; padding-left: ",[0,10],"; color: #888; font-family: \x22grace-iconfont\x22 !important; font-size: ",[0,30],"; }\n.",[1],"grace-form .",[1],"_textarea { width: 98%; height: ",[0,100],"; line-height: 2em; background: none; border: 0; padding: ",[0,8]," 2%; font-size: ",[0,28],"; }\n.",[1],"grace-label-x { width: 100%; padding: ",[0,12]," 0; -webkit-flex-shrink: 1; flex-shrink: 1; margin-left: ",[0,40],"; }\n.",[1],"grace-label-x .",[1],"_label { margin: ",[0,10],"; font-size: ",[0,28],"; }\n.",[1],"grace-label-y { width: 100%; padding: ",[0,12]," 0; -webkit-flex-shrink: 1; flex-shrink: 1; margin-left: ",[0,40],"; }\n.",[1],"grace-form wx-radio-group, .",[1],"grace-form wx-checkbox-group { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-label-y .",[1],"_label { margin: 8px 0; font-size: ",[0,28],"; width: 100%; }\n.",[1],"grace-items-wbg { background: #FFF; border: 0 !important; border-radius: ",[0,8],"; padding: ",[0,3]," 0 !important; }\n.",[1],"grace-items-wbg .",[1],"_input { text-align: left !important; }\n.",[1],"grace-login-three { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-login-three wx-view { width: 44px; height: 44px; line-height: 44px; font-size: 36px; color: #FFF; text-align: center; margin: 8px; }\n.",[1],"grace-mask { background: rgba(0, 0, 0, 0.6); position: fixed; width: 100%; height: 100%; left: 0; top: 0; z-index: 1; }\n.",[1],"grace-steps { padding: ",[0,20]," 0; background: #FFF; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-steps wx-view { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; }\n.",[1],"grace-steps .",[1],"step { width: 31.3%; margin: 0 1%; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-steps .",[1],"step-circle { width: ",[0,50],"; height: ",[0,50],"; border-radius: ",[0,50],"; background: #F1F1F3; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; line-height: ",[0,50],"; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,15],"; color: #666; font-size: ",[0,28],"; }\n.",[1],"grace-steps .",[1],"step-content { width: 100%; height: ",[0,22],"; border-bottom: 1px solid #F1F1F3; }\n.",[1],"grace-steps .",[1],"step-title { line-height: ",[0,50],"; height: ",[0,50],"; background: #FFFFFF; width: auto; padding-right: ",[0,12],"; }\n.",[1],"grace-steps .",[1],"current .",[1],"step-circle { background: #00B26A; color: #FFFFFF; }\n.",[1],"grace-steps .",[1],"current .",[1],"step-content { border-color: #00B26A; }\n.",[1],"grace-steps .",[1],"current .",[1],"step-title { color: #00B26A; }\n.",[1],"grace-comment { padding: ",[0,5]," 0; }\n.",[1],"grace-comment-list { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; padding: ",[0,10]," 0; margin: ",[0,10]," 0; }\n.",[1],"grace-comment-face { width: ",[0,70],"; height: ",[0,70],"; border-radius: 100%; margin-right: ",[0,20],"; -webkit-flex-shrink: 0; flex-shrink: 0; overflow: hidden; }\n.",[1],"grace-comment-face wx-image { width: 100%; border-radius: 100%; }\n.",[1],"grace-comment-body { width: 100%; }\n.",[1],"grace-comment-top { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; line-height: 1.5em; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-comment-top wx-text { color: #0A98D5; font-size: ",[0,24],"; }\n.",[1],"grace-comment-top wx-text:last-child { color: #666666; }\n.",[1],"grace-comment-date { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; line-height: 1.5em; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-comment-date wx-text { color: #666666; font-size: ",[0,24],"; }\n.",[1],"grace-comment-content { line-height: 1.6em; font-size: ",[0,28],"; padding: ",[0,8]," 0; }\n.",[1],"grace-comment-zan { color: #0A98D5 !important; }\n.",[1],"grace-comment-replay-btn { background: #F4F5F6; font-size: ",[0,24],"; padding: ",[0,8]," ",[0,15],"; border-radius: ",[0,30],"; color: #333 !important; margin: 0 ",[0,10],"; }\n.",[1],"grace-comment-imgs { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,8]," 0; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-comment-imgs .",[1],"imgs { width: 31.3% !important; max-height: 90px; margin: 5px 1%; overflow: hidden; }\n.",[1],"grace-comment-imgs .",[1],"imgs wx-image { width: 100%; }\n.",[1],"grace-search { width: 100%; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-search-btns { width: ",[0,50],"; height: ",[0,50],"; margin: ",[0,8]," 8px; }\n.",[1],"grace-search-btns wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"grace-search-in { background: #FFFFFF; border-radius: ",[0,66],"; height: ",[0,36],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; width: 92%; padding: ",[0,15]," 4%; }\n.",[1],"grace-search-icon { width: ",[0,36],"; height: ",[0,36],"; line-height: ",[0,36],"; color: #007AFF; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-family: \x22grace-iconfont\x22 !important; font-size: ",[0,30],"; font-style: normal; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-search-icon:before { content: \x22\\E604\x22; color: #007AFF; }\n.",[1],"grace-search .",[1],"_input { width: 100%; background: #900; padding: 0 ",[0,20],"; border: 0; background: #FFF; height: ",[0,28],"; line-height: ",[0,28],"; margin: 0; color: #000; }\n.",[1],"grace-search-clear:before { content: \x22\\E78A\x22 !important; color: #CCCCCC !important; }\n.",[1],"grace-search-remove:before { font-family: \x22grace-iconfont\x22; font-style: normal; content: \x22\\E684\x22 !important; color: #CCCCCC !important; font-size: ",[0,40],"; line-height: ",[0,40],"; }\n.",[1],"grace-tips { padding: ",[0,10]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-tips wx-view { padding: 0 ",[0,20],"; border-radius: ",[0,30],"; margin-right: ",[0,15],"; margin-bottom: ",[0,15],"; font-size: ",[0,24],"; line-height: ",[0,46],"; border: 1px solid #D1D1D1; color: #666666; width: auto; }\n.",[1],"grace-add-file { padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; width: ",[0,710],"; }\n.",[1],"grace-add-btn { width: ",[0,213],"; margin: ",[0,10],"; background: #F5F5F5; padding: ",[0,45]," 0; }\n.",[1],"grace-add-btn wx-view { font-size: ",[0,26],"; height: ",[0,40],"; line-height: ",[0,40],"; text-align: center; color: #999999; width: 100%; }\n.",[1],"grace-add-btn wx-view:first-child { font-size: ",[0,80],"; height: ",[0,80],"; line-height: ",[0,80],"; }\n.",[1],"grace-add-file .",[1],"garce-items { width: ",[0,213],"; height: ",[0,213],"; margin: ",[0,10],"; overflow: hidden; position: relative; }\n.",[1],"grace-add-file .",[1],"garce-items wx-image { width: 100%; }\n.",[1],"grace-add-file .",[1],"garce-items-media { width: ",[0,213],"; height: ",[0,213],"; margin: ",[0,10],"; overflow: hidden; }\n.",[1],"grace-add-file .",[1],"garce-items-media .",[1],"_video { width: 213px; height: ",[0,190],"; }\n.",[1],"grace-add-file .",[1],"grace-remove { height: ",[0,40],"; font-size: ",[0,22],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; line-height: ",[0,60],"; overflow: hidden; }\n.",[1],"grace-add-file .",[1],"garce-items .",[1],"grace-close { font-family: \x22grace-iconfont\x22 !important; width: ",[0,46],"; height: ",[0,46],"; position: absolute; z-index: 1; right: ",[0,10],"; bottom: ",[0,10],"; font-size: ",[0,46],"; color: #FF0000; opacity: 0.8; }\n.",[1],"grace-add-file .",[1],"garce-items .",[1],"grace-close:before { content: \x22\\E602\x22; }\n.",[1],"grace-stable { padding: 0; }\n.",[1],"grace-stable .",[1],"title { -webkit-flex-wrap: nowrap; flex-wrap: nowrap; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"grace-stable .",[1],"title \x3e wx-view { line-height: 50px; width: 25%; text-align: center; font-weight: 700; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; border-bottom: 1px solid #D1D1D1; border-right: 1px solid #D1D1D1; background: #F1F2F3; }\n.",[1],"grace-stable .",[1],"title \x3e wx-view:last-child { border-right: none; }\n.",[1],"grace-stable .",[1],"body { -webkit-flex-wrap: nowrap; flex-wrap: nowrap; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"grace-stable .",[1],"body \x3e wx-view { line-height: 46px; width: 25%; text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; border-bottom: 1px solid #D1D1D1; font-size: ",[0,24],"; border-right: 1px solid #D1D1D1; }\n.",[1],"grace-stable .",[1],"body \x3e wx-view:last-child { border-right: none; }\n.",[1],"grace-table { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; width: 100%; }\n.",[1],"grace-table-left { width: ",[0,200],"; }\n.",[1],"grace-table-right { width: ",[0,539],"; }\n.",[1],"grace-table-title { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; line-height: ",[0,100],"; background: #FFFFFF; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; margin-top: ",[0,2],"; }\n.",[1],"grace-table-title wx-view { line-height: ",[0,100],"; font-size: ",[0,30],"; text-align: center; width: 100%; }\n.",[1],"grace-table-right wx-scroll-view { width: 100%; }\n.",[1],"grace-table-right .",[1],"rows { width: ",[0,800],"; margin-top: ",[0,2],"; background: #FFFFFF; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-table-right .",[1],"rows .",[1],"items { width: 25%; line-height: ",[0,100],"; text-align: center; overflow: hidden; }\n.",[1],"grace-timeline { width: 100%; }\n.",[1],"grace-timeline .",[1],"rows { padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; position: relative; }\n.",[1],"grace-timeline-time { width: ",[0,130],"; -webkit-flex-shrink: 0; flex-shrink: 0; overflow: hidden; }\n.",[1],"grace-timeline-time wx-view { font-size: ",[0,22],"; color: #ccc; text-align: right; overflow: hidden; line-height: 1.5em; }\n.",[1],"grace-timeline-time wx-view:last-child { font-size: ",[0,32],"; color: #46A4DA; }\n.",[1],"grace-timeline-tips { width: ",[0,70],"; height: 100%; margin: 0 ",[0,15],"; -webkit-flex-shrink: 0; flex-shrink: 0; position: relative; }\n.",[1],"grace-timeline-circular { width: ",[0,50],"; height: ",[0,50],"; border: ",[0,10]," solid #AFDCF8; border-radius: 100%; line-height: ",[0,50],"; text-align: center; background: #46A4DA; color: #FFF; position: absolute; left: 0; top: 0; z-index: 2; }\n.",[1],"grace-timeline-circular wx-image { border-radius: 100%; font-size: 0; width: 100%; }\n.",[1],"grace-timeline-content { width: 100%; background: #46A4DA; color: #FFF; padding: ",[0,18],"; border-radius: ",[0,12],"; }\n.",[1],"grace-timeline-line { width: ",[0,8],"; height: 100%; background: #AFDCF8; position: absolute; z-index: 1; left: ",[0,195],"; top: ",[0,30],"; }\n.",[1],"grace-cate { width: 100%; height: 100%; background: #FFFFFF; position: fixed; z-index: 99; left: 0; top: 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grace-cate-left { width: 25%; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; background: #F8F8F8; }\n.",[1],"grace-cate-left wx-view { height: ",[0,150],"; line-height: ",[0,150],"; font-size: ",[0,30],"; border-bottom: 1px solid #EEE; text-align: center; }\n.",[1],"grace-cate-left .",[1],"current { background: #FFFFFF !important; }\n.",[1],"grace-cate-right { width: 75%; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; background: #FFFFFF; }\n.",[1],"grace-cate-sons { padding: ",[0,15]," 3%; width: 94%; }\n.",[1],"grace-cate-sons-title { line-height: ",[0,80],"; margin-top: ",[0,18],"; font-size: ",[0,30],"; }\n.",[1],"grace-cate-sons-nav { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; border-bottom: 1px dashed #D1D1D1; padding-bottom: ",[0,22],"; }\n.",[1],"grace-cate-sons-nav wx-view { width: 29.3%; padding: ",[0,15]," 0; margin: ",[0,8]," 2%; color: #888; overflow: hidden; }\n.",[1],"grace-shoppingcard { background: #FFFFFF; width: 94%; padding: ",[0,15]," 3%; margin-bottom: ",[0,22],"; }\n.",[1],"grace-shoppingcard .",[1],"shop-name { line-height: ",[0,50],"; }\n.",[1],"grace-shoppingcard .",[1],"goods { margin: ",[0,10]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-shoppingcard .",[1],"goods wx-image { width: ",[0,150],"; margin-right: ",[0,20],"; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-shoppingcard .",[1],"goods .",[1],"desc { width: 100%; }\n.",[1],"grace-shoppingcard .",[1],"goods .",[1],"goods-title { line-height: 1.4em; }\n.",[1],"grace-shoppingcard .",[1],"goods .",[1],"goods-price { margin-top: ",[0,8],"; color: #F00; font-size: ",[0,36],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-shoppingcard .",[1],"goods .",[1],"goods-number { padding: 2px 0; }\n.",[1],"grace-shoppingcard .",[1],"goods-remove { display: -webkit-box; display: -webkit-flex; display: flex; line-height: ",[0,50],"; margin-top: ",[0,30],"; color: #CCCCCC; font-size: ",[0,26],"; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; }\n.",[1],"grace-shoppingcard .",[1],"goods-remove wx-text { color: #CCCCCC; margin-right: ",[0,20],"; }\n.",[1],"grace-filter { width: 100%; background: #FFFFFF; position: fixed; z-index: 9; left: 0; top: 0; border-bottom: 1px solid #F2F3F4; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-filter .",[1],"items { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; width: 25%; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,90],"; line-height: ",[0,90],"; }\n.",[1],"grace-filter .",[1],"items wx-image { width: ",[0,40],"; margin: ",[0,22]," ",[0,10],"; }\n.",[1],"grace-filter .",[1],"items wx-text { margin-left: ",[0,10],"; font-size: ",[0,24],"; }\n.",[1],"grace-filter-options { width: 100%; position: absolute; z-index: 10; padding: ",[0,20]," 0; right: 0; top: ",[0,92],"; background: #FFFFFF; }\n.",[1],"grace-filter-options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; text-indent: 2em; height: ",[0,70],"; line-height: ",[0,70],"; }\n.",[1],"grace-filter-options .",[1],"option wx-text { margin-right: ",[0,30],"; font-size: ",[0,30],"; color: #F00; font-weight: 700; }\n.",[1],"grace-filter-options .",[1],"current { color: #F00; font-weight: 700; }\n.",[1],"grace-filter-buttons { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; position: absolute; z-index: 11; left: 0; bottom: 0; height: ",[0,90],"; background: #FFF; }\n.",[1],"grace-filter-buttons wx-view { width: 50%; height: ",[0,100],"; line-height: ",[0,100],"; text-align: center; position: relative; }\n.",[1],"grace-filter-buttons wx-view:last-child { background: #FF0000; color: #FFF; }\n.",[1],"grace-filter-buttons wx-view .",[1],"_button { opacity: 0; width: 100%; position: absolute; z-index: 9; left: 0; top: 0; height: ",[0,90],"; }\n.",[1],"grace-waterfall { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: no-wrap; flex-wrap: no-wrap; }\n.",[1],"grace-waterfall .",[1],"list { width: 46%; margin: 0 2%; }\n.",[1],"grace-waterfall .",[1],"items { margin: ",[0,20]," 0; position: relative; }\n.",[1],"grace-waterfall .",[1],"items .",[1],"imgs { width: 100%; }\n.",[1],"grace-waterfall .",[1],"items .",[1],"title { line-height: 1.4em; font-size: 16px; margin-top: 12px; }\n.",[1],"grace-waterfall .",[1],"items .",[1],"price { padding: ",[0,10]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; font-size: ",[0,32],"; line-height: 35px; color: #FF0036; }\n.",[1],"grace-waterfall .",[1],"items .",[1],"tips { height: 32px; width: auto; line-height: 32px; background: #FF0036; color: #FFFFFF; padding: 0 ",[0,20],"; border-radius: 3px; }\n.",[1],"grace-scroll-do { width: ",[0,720],"; padding-left: ",[0,30],"; border-bottom: 1px solid #E6E6E6; border-top: 1px solid #E6E6E6; }\n.",[1],"grace-scroll-do wx-scroll-view { border-bottom: 1px solid #E6E6E6; width: ",[0,720],"; }\n.",[1],"grace-scroll-do wx-scroll-view:last-child { border: none; }\n.",[1],"grace-scroll-do .",[1],"grace-items { width: ",[0,720],"; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; height: ",[0,80],"; margin: ",[0,20]," 0; -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; }\n.",[1],"grace-scroll-do .",[1],"grace-items wx-image { width: ",[0,100],"; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,20],"; font-size: 0; border-radius: ",[0,3],"; }\n.",[1],"grace-scroll-do .",[1],"grace-items .",[1],"contents { width: 100%; margin-right: ",[0,20],"; }\n.",[1],"grace-scroll-do .",[1],"grace-items .",[1],"contents wx-view { line-height: 1.6em !important; }\n.",[1],"grace-scroll-do .",[1],"btn { background: #FF3A30; color: #FFF; width: ",[0,130],"; height: ",[0,140],"; line-height: ",[0,140],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; text-align: center; margin: 0; overflow: hidden; }\n.",[1],"grace-scroll-do .",[1],"btn-first { background: #5959D3; }\n.",[1],"grace-product-title { background: #FFF; font-weight: 600; line-height: 1.8; font-size: ",[0,32],"; }\n.",[1],"grace-product-share { width: 28px; font-size: 24px; color: #FF7900; line-height: 40px; -webkit-flex-shrink: 0; flex-shrink: 0; margin-left: 12px; }\n.",[1],"grace-product-price { background: #FFF; padding: ",[0,20]," 2%; padding-bottom: ",[0,5],"; color: #FF7900; line-height: 30px; font-size: 24px; font-weight: 600; margin-top: 5px; }\n.",[1],"grace-product-price wx-text { color: #999; font-size: 16px; text-decoration: line-through; line-height: 30px; margin-left: 8px; }\n.",[1],"grace-product-desc { background: #FFF; padding: ",[0,8]," 2%; padding-bottom: ",[0,20],"; font-size: ",[0,24],"; color: #666666; line-height: 1.8; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-product-menu { padding: ",[0,0]," 2%; padding-top: 10px; background: #FFF; margin-top: 5px; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-product-menu wx-view { width: 40%; margin: 0 5%; line-height: ",[0,80],"; border-bottom: ",[0,6]," solid #FFFFFF; font-size: ",[0,32],"; text-align: center; }\n.",[1],"grace-product-menu .",[1],"active { border-color: #FF7900; font-weight: 600; color: #FF7900; }\n.",[1],"grace-product-info { background: #FFF; padding: ",[0,30]," 2%; }\n.",[1],"grace-product-info wx-image { width: 100%; }\n.",[1],"grace-product-btn { width: 30%; height: ",[0,90],"; line-height: ",[0,90],"; font-size: ",[0,30],"; color: #FFF; text-align: center; background: #FF7900; }\n.",[1],"grace-product-attr { width: 94%; padding: 5px 3%; height: 80%; position: absolute; left: 0; bottom: 0; border-top-left-radius: 5px; border-top-right-radius: 5px; background: #FFF; }\n.",[1],"grace-product-attr-info { height: 60px; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; border-bottom: 1px solid #F1F1F3; padding-bottom: 12px; }\n.",[1],"grace-product-attr-info wx-image { width: 60px; height: auto; margin-right: 10px; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"grace-product-attr-info .",[1],"title { width: 100%; }\n.",[1],"grace-product-attr-info .",[1],"title wx-text { font-size: 10px; color: #666666; }\n.",[1],"grace-product-attr-list { padding-top: 15px; border-bottom: 1px solid #F1F1F3; }\n.",[1],"grace-product-attr-list .",[1],"title { font-weight: 700; }\n.",[1],"grace-product-attr-btn { width: 94%; padding: 5px 3%; position: fixed; z-index: 10; bottom: 0; left: 0; }\n.",[1],"grace-product-attr-btn .",[1],"_button { height: 40px; line-height: 40px; }\n.",[1],"grace-product-attr-close { padding: 5px 0; line-height: 25px; text-align: right; }\n.",[1],"grace-product-attr-close wx-text { font-size: 24px; color: #666666; }\n.",[1],"grace-skeleton { padding: 5px 0; background: #F1F2F3; border-radius: 8px; }\n.",[1],"grace-article-title { margin: 8px 12px; font-size: 26px; line-height: 1.5em; font-weight: 700; }\n.",[1],"grace-article-author-line { margin: 3px 12px; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-article-author { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"grace-article-author wx-image { width: 28px; height: 28px; border-radius: 100%; }\n.",[1],"grace-article-author .",[1],"author-name { line-height: 28px; padding-left: 5px; }\n.",[1],"grace-article-author-line .",[1],"btn { display: inline-block; height: 28px; line-height: 28px; border-radius: 3px; padding: 0 10px; background: #00B26A; color: #FFFFFF; }\n.",[1],"grace-article-info-line { margin: 8px 12px; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"grace-article-info-line wx-view { color: #888; line-height: 20px; font-size: 12px; }\n.",[1],"grace-article-contents { margin: 10px 0; }\n.",[1],"grace-article-contents .",[1],"img-item { width: 100%; }\n.",[1],"grace-article-contents .",[1],"img-item wx-image { width: 100%; }\n.",[1],"grace-article-contents .",[1],"text-item { margin: 8px 12px; line-height: 2.2em; font-size: 16px; color: #2F2F2F; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

var is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tf=0,gl=1,wf=2;var Da=1,lc=2,Cr=3,hi=0,on=1,Fn=2,li=0,Pr=1,Ir=2,_l=3,yl=4,Ef=5;var Is=100,Af=101,Rf=102,Cf=103,Pf=104,If=200,Lf=201,Df=202,Nf=203,xl=204,vl=205,Uf=206,Of=207,Ff=208,kf=209,Bf=210,zf=211,Vf=212,Hf=213,Gf=214,Bo=0,zo=1,Vo=2,ur=3,Ho=4,Go=5,Wo=6,Xo=7,bl=0,Wf=1,Xf=2,Jn=0,Sl=1,Ml=2,Tl=3,Na=4,wl=5,El=6,Al=7,il="attached",qf="detached",Rl=300,rs=301,Ls=302,uc=303,dc=304,Ua=306,Ji=1e3,On=1001,dr=1002,Te=1003,fc=1004;var Ds=1005;var we=1006,Lr=1007;var $n=1008;var gn=1009,Cl=1010,Pl=1011,Dr=1012,pc=1013,Qn=1014,Rn=1015,ti=1016,mc=1017,gc=1018,Nr=1020,Il=35902,Ll=35899,Dl=1021,Nl=1022,Cn=1023,ri=1026,as=1027,_c=1028,yc=1029,os=1030,xc=1031;var vc=1033,Oa=33776,Fa=33777,ka=33778,Ba=33779,bc=35840,Sc=35841,Mc=35842,Tc=35843,wc=36196,Ec=37492,Ac=37496,Rc=37488,Cc=37489,za=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Oc=37813,Fc=37814,kc=37815,Bc=37816,zc=37817,Vc=37818,Hc=37819,Gc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Kc=36283,Zc=36284,Va=36285,jc=36286;var Ts=2300,ws=2301,Oo=2302,sl=2303,rl=2400,al=2401,ol=2402,Yf=2500;var Ul=0,Ha=1,Ur=2,Kf=3200;var Jc=0,Zf=1,Ni="",De="srgb",rn="srgb-linear",oa="linear",Qt="srgb";var Fo=7680;var jf=519,Jf=512,$f=513,Qf=514,$c=515,tp=516,ep=517,Qc=518,np=519,Ol=35044;var Fl="300 es",Yn=2e3,fr=2001;function lg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ug(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ip(){let s=pr("canvas");return s.style.display="block",s}var kd={},mr=null;function ca(...s){let t="THREE."+s.shift();mr?mr("log",t,...s):console.log(t,...s)}function sp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=sp(s);let t="THREE."+s.shift();if(mr)mr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function It(...s){s=sp(s);let t="THREE."+s.shift();if(mr)mr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ms(...s){let t=s.join(" ");t in kd||(kd[t]=!0,Tt(...s))}function rp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ap={[Bo]:zo,[Vo]:Wo,[Ho]:Xo,[ur]:Go,[zo]:Bo,[Wo]:Vo,[Xo]:Ho,[Go]:ur},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,ra=Math.PI/180,Es=180/Math.PI;function Kn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function zt(s,t,e){return Math.max(t,Math.min(e,s))}function kl(s,t){return(s%t+t)%t}function dg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fg(s,t,e){return s!==t?(e-s)/(t-s):0}function aa(s,t,e){return(1-e)*s+e*t}function pg(s,t,e,n){return aa(s,t,1-Math.exp(-e*n))}function mg(s,t=1){return t-Math.abs(kl(s,t*2)-t)}function gg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _g(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xg(s,t){return s+Math.random()*(t-s)}function vg(s){return s*(.5-Math.random())}function bg(s){s!==void 0&&(Bd=s);let t=Bd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sg(s){return s*ra}function Mg(s){return s*Es}function Tg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function wg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ag(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),l=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*l,c*d,c*u,o*h);break;case"YZY":s.set(c*u,o*l,c*d,o*h);break;case"ZXZ":s.set(c*d,c*u,o*l,o*h);break;case"XZX":s.set(o*l,c*g,c*f,o*h);break;case"YXY":s.set(c*f,o*l,c*g,o*h);break;case"ZYZ":s.set(c*g,c*f,o*l,o*h);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ga={DEG2RAD:ra,RAD2DEG:Es,generateUUID:Kn,clamp:zt,euclideanModulo:kl,mapLinear:dg,inverseLerp:fg,lerp:aa,damp:pg,pingpong:mg,smoothstep:gg,smootherstep:_g,randInt:yg,randFloat:xg,randFloatSpread:vg,seededRandom:bg,degToRad:Sg,radToDeg:Mg,isPowerOfTwo:Tg,ceilPowerOfTwo:wg,floorPowerOfTwo:Eg,setQuaternionFromProperEuler:Ag,normalize:ee,denormalize:qn},Rt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],l=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==u||h!==f||l!==g){let p=c*u+h*f+l*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,c=c*m+u*o,h=h*m+f*o,l=l*m+g*o,d=d*m+_*o}else{c=c*m+u*o,h=h*m+f*o,l=l*m+g*o,d=d*m+_*o;let M=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=M,h*=M,l*=M,d*=M}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],h=n[i+2],l=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+l*d+c*f-h*u,t[e+1]=c*g+l*u+h*d-o*f,t[e+2]=h*g+l*f+o*u-c*d,t[e+3]=l*g-o*d-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"YXZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"ZXY":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"ZYX":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"YZX":this._x=u*l*d+h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d-u*f*g;break;case"XZY":this._x=u*l*d-h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d+u*f*g;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(l-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+i*h-r*c,this._y=i*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-i*o,this._w=a*l-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,e=Math.sin(e*h)/l,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),l=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=i+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dh=new I,zd=new je,Lt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],A=i[4],v=i[7],b=i[2],T=i[5],E=i[8];return r[0]=a*_+o*M+c*b,r[3]=a*p+o*A+c*T,r[6]=a*m+o*v+c*E,r[1]=h*_+l*M+d*b,r[4]=h*p+l*A+d*T,r[7]=h*m+l*v+d*E,r[2]=u*_+f*M+g*b,r[5]=u*p+f*A+g*T,r[8]=u*m+f*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,u=o*c-l*r,f=h*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*h-l*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(l*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nh=new Lt,Vd=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rg(){let s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}var Bt=Rg();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var js,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=pr("canvas")),js.width=t.width,js.height=t.height;let i=js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cg=0,gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Uh(i[a].image)):r.push(Uh(i[a]))}else r=Uh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}var Pg=0,Oh=new I,Ne=class s extends Zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=On,i=On,r=we,a=$n,o=Cn,c=gn,h=s.DEFAULT_ANISOTROPY,l=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Kn(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Rl;Ne.DEFAULT_ANISOTROPY=1;var ne=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(h+1)/2,v=(f+1)/2,b=(m+1)/2,T=(l+u)/4,E=(d+_)/4,y=(g+p)/4;return A>v&&A>b?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=T/n,r=E/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=y/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-l)*(u-l));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(u-l)/M,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ne(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ha=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Nt=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,p)}set(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=l,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),a=1/Js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*l,f=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=f+g*h,e[5]=u-_*h,e[9]=-o*c,e[2]=_-u*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){let u=c*l,f=c*d,g=h*l,_=h*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*l,f=c*d,g=h*l,_=h*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*l,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*l,f=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=g*h-f,e[8]=u*h+_,e[1]=c*d,e[5]=_*h+u,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*c,f=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+_,e[5]=a*l,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*l,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ig,t,Lg)}lookAt(t,e,n){let i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Wi.crossVectors(n,Mn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Wi.crossVectors(n,Mn)),Wi.normalize(),lo.crossVectors(Mn,Wi),i[0]=Wi.x,i[4]=lo.x,i[8]=Mn.x,i[1]=Wi.y,i[5]=lo.y,i[9]=Mn.y,i[2]=Wi.z,i[6]=lo.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],A=n[7],v=n[11],b=n[15],T=i[0],E=i[4],y=i[8],w=i[12],C=i[1],L=i[5],F=i[9],O=i[13],P=i[2],B=i[6],X=i[10],G=i[14],Q=i[3],q=i[7],J=i[11],et=i[15];return r[0]=a*T+o*C+c*P+h*Q,r[4]=a*E+o*L+c*B+h*q,r[8]=a*y+o*F+c*X+h*J,r[12]=a*w+o*O+c*G+h*et,r[1]=l*T+d*C+u*P+f*Q,r[5]=l*E+d*L+u*B+f*q,r[9]=l*y+d*F+u*X+f*J,r[13]=l*w+d*O+u*G+f*et,r[2]=g*T+_*C+p*P+m*Q,r[6]=g*E+_*L+p*B+m*q,r[10]=g*y+_*F+p*X+m*J,r[14]=g*w+_*O+p*G+m*et,r[3]=M*T+A*C+v*P+b*Q,r[7]=M*E+A*L+v*B+b*q,r[11]=M*y+A*F+v*X+b*J,r[15]=M*w+A*O+v*G+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],M=c*f-h*u,A=o*f-h*d,v=o*u-c*d,b=a*f-h*l,T=a*u-c*l,E=a*d-o*l;return e*(_*M-p*A+m*v)-n*(g*M-p*b+m*T)+i*(g*A-_*b+m*E)-r*(g*v-_*T+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],l=t[10];return e*(a*l-o*h)-n*(r*l-o*c)+i*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=e*o-n*a,A=e*c-i*a,v=e*h-r*a,b=n*c-i*o,T=n*h-r*o,E=i*h-r*c,y=l*_-d*g,w=l*p-u*g,C=l*m-f*g,L=d*p-u*_,F=d*m-f*_,O=u*m-f*p,P=M*O-A*F+v*L+b*C-T*w+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(o*O-c*F+h*L)*B,t[1]=(i*F-n*O-r*L)*B,t[2]=(_*E-p*T+m*b)*B,t[3]=(u*T-d*E-f*b)*B,t[4]=(c*C-a*O-h*w)*B,t[5]=(e*O-i*C+r*w)*B,t[6]=(p*v-g*E-m*A)*B,t[7]=(l*E-u*v+f*A)*B,t[8]=(a*F-o*C+h*y)*B,t[9]=(n*C-e*F-r*y)*B,t[10]=(g*T-_*v+m*M)*B,t[11]=(d*v-l*T-f*M)*B,t[12]=(o*w-a*L-c*y)*B,t[13]=(e*L-n*w+i*y)*B,t[14]=(_*A-g*b-p*M)*B,t[15]=(l*b-d*A+u*M)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+n,l*c-i*a,0,h*c-i*o,l*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,u=r*h,f=r*l,g=r*d,_=a*l,p=a*d,m=o*d,M=c*h,A=c*l,v=c*d,b=n.x,T=n.y,E=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+v)*b,i[2]=(g-A)*b,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(u+m))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+A)*E,i[9]=(p-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Js.set(i[0],i[1],i[2]).length(),o=Js.set(i[4],i[5],i[6]).length(),c=Js.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Gn.copy(this);let h=1/a,l=1/o,d=1/c;return Gn.elements[0]*=h,Gn.elements[1]*=h,Gn.elements[2]*=h,Gn.elements[4]*=l,Gn.elements[5]*=l,Gn.elements[6]*=l,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=Yn,c=!1){let h=this.elements,l=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Yn,c=!1){let h=this.elements,l=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Js=new I,Gn=new Nt,Ig=new I(0,0,0),Lg=new I(1,1,1),Wi=new I,lo=new I,Mn=new I,Gd=new Nt,Wd=new je,wi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],l=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dg=0,Xd=new I,$s=new je,yi=new Nt,uo=new I,Jr=new I,Ng=new I,Ug=new je,qd=new I(1,0,0),Yd=new I(0,1,0),Kd=new I(0,0,1),Zd={type:"added"},Og={type:"removed"},Qs={type:"childadded",child:null},Fh={type:"childremoved",child:null},ge=class s extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new wi,n=new je,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Lt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(qd,t)}rotateY(t){return this.rotateOnAxis(Yd,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qd,t)}translateY(t){return this.translateOnAxis(Yd,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Jr,uo,this.up):yi.lookAt(uo,Jr,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(yi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Og),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(h,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function kh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Bt.workingColorSpace){if(t=kl(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kh(a,r,t+1/3),this.g=kh(a,r,t),this.b=kh(a,r,t-1/3)}return Bt.colorSpaceToWorking(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Bt.workingToColorSpace(Ze.copy(this),t),Math.round(zt(Ze.r*255,0,255))*65536+Math.round(zt(Ze.g*255,0,255))*256+Math.round(zt(Ze.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,i=Ze.g,r=Ze.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Bt.workingColorSpace){return Bt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=De){Bt.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,i=Ze.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(fo);let n=aa(Xi.h,fo.h,e),i=aa(Xi.s,fo.s,e),r=aa(Xi.l,fo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Pt;Pt.NAMES=op;var la=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ua=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new I,xi=new I,Bh=new I,vi=new I,tr=new I,er=new I,jd=new I,zh=new I,Vh=new I,Hh=new I,Gh=new ne,Wh=new ne,Xh=new ne,ji=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wn.subVectors(t,e),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Wn.subVectors(i,e),xi.subVectors(n,e),Bh.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(xi),c=Wn.dot(Bh),h=xi.dot(xi),l=xi.dot(Bh),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*c-o*l)*u,g=(a*l-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Gh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Gh,r.x),a.addScaledVector(Wh,r.y),a.addScaledVector(Xh,r.z),a}static isFrontFacing(t,e,n,i){return Wn.subVectors(n,e),xi.subVectors(t,e),Wn.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;tr.subVectors(i,n),er.subVectors(r,n),zh.subVectors(t,n);let c=tr.dot(zh),h=er.dot(zh);if(c<=0&&h<=0)return e.copy(n);Vh.subVectors(t,i);let l=tr.dot(Vh),d=er.dot(Vh);if(l>=0&&d<=l)return e.copy(i);let u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(tr,a);Hh.subVectors(t,r);let f=tr.dot(Hh),g=er.dot(Hh);if(g>=0&&f<=g)return e.copy(r);let _=f*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(er,o);let p=l*g-f*d;if(p<=0&&d-l>=0&&f-g>=0)return jd.subVectors(r,i),o=(d-l)/(d-l+(f-g)),e.copy(i).addScaledVector(jd,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},En=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),mo.subVectors(this.max,$r),nr.subVectors(t.a,$r),ir.subVectors(t.b,$r),sr.subVectors(t.c,$r),qi.subVectors(ir,nr),Yi.subVectors(sr,ir),xs.subVectors(nr,sr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-xs.z,xs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,xs.z,0,-xs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-xs.y,xs.x,0];return!qh(e,nr,ir,sr,mo)||(e=[1,0,0,0,1,0,0,0,1],!qh(e,nr,ir,sr,mo))?!1:(go.crossVectors(qi,Yi),e=[go.x,go.y,go.z],qh(e,nr,ir,sr,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bi=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,po=new En,nr=new I,ir=new I,sr=new I,qi=new I,Yi=new I,xs=new I,$r=new I,mo=new I,go=new I,vs=new I;function qh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){vs.fromArray(s,r);let o=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),c=t.dot(vs),h=e.dot(vs),l=n.dot(vs);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Pe=new I,_o=new Rt,kg=0,ve=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var da=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fa=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bg=new En,Qr=new I,Yh=new I,fn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Yh)),this.expandByPoint(Qr.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zg=0,Un=new Nt,Kh=new ge,rr=new I,Tn=new En,ta=new En,He=new I,Ue=class s extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lg(t)?fa:da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Kh.lookAt(t),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(Tn.min,ta.min),Tn.expandByPoint(He),He.addVectors(Tn.max,ta.max),Tn.expandByPoint(He)):(Tn.expandByPoint(ta.min),Tn.expandByPoint(ta.max))}Tn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)He.fromBufferAttribute(o,h),c&&(rr.fromBufferAttribute(t,h),He.add(rr)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new I,c[y]=new I;let h=new I,l=new I,d=new I,u=new Rt,f=new Rt,g=new Rt,_=new I,p=new I;function m(y,w,C){h.fromBufferAttribute(n,y),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),l.sub(h),d.sub(h),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(L),o[y].add(_),o[w].add(_),o[C].add(_),c[y].add(p),c[w].add(p),c[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,w=M.length;y<w;++y){let C=M[y],L=C.start,F=C.count;for(let O=L,P=L+F;O<P;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new I,v=new I,b=new I,T=new I;function E(y){b.fromBufferAttribute(i,y),T.copy(b);let w=o[y];A.copy(w),A.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(T,w);let L=v.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,L)}for(let y=0,w=M.length;y<w;++y){let C=M[y],L=C.start,F=C.count;for(let O=L,P=L+F;O<P;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,h=new I,l=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l),f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*l;for(let m=0;m<l;m++)u[g++]=h[f++]}return new ve(u,l,d)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){let u=h[l],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];l.push(f.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],d=r[h];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},nn=new I,vr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new I,Vg=new I,Hg=new Lt,wn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Zh.subVectors(n,e).cross(Vg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Zh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hg.getNormalMatrix(t),i=this.coplanarPoint(Zh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gg=0,an=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Pr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Si=new I,jh=new I,yo=new I,xo=new I,ai=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jh.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(jh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(yo),o=xo.dot(this.direction),c=-xo.dot(yo),h=xo.lengthSq(),l=Math.abs(1-a*a),d,u,f,g;if(l>0)if(d=a*c-o,u=a*o-c,g=r*l,d>=0)if(u>=-g)if(u<=g){let _=1/l;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(jh).addScaledVector(yo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,i=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,i=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(c),b=Math.abs(h),T=Math.abs(l),E,y,w,C,L,F,O,P,B,X,G,Q;if(v>=b&&v>=T?(w=c,F=d,B=g,Q=m,c>=0?(E=h,y=l,C=u,L=f,O=_,P=p,X=M,G=A):(E=l,y=h,C=f,L=u,O=p,P=_,X=A,G=M)):b>=T?(w=h,F=u,B=_,Q=M,h>=0?(E=l,y=c,C=f,L=d,O=p,P=g,X=A,G=m):(E=c,y=l,C=d,L=f,O=g,P=p,X=m,G=A)):(w=l,F=f,B=p,Q=A,l>=0?(E=c,y=h,C=d,L=u,O=g,P=_,X=m,G=M):(E=h,y=c,C=u,L=d,O=_,P=g,X=M,G=m)),w===0)return null;let q=E/w,J=y/w,et=1/w,vt=C-q*F,St=L-J*F,Xt=O-q*B,Ut=P-J*B,jt=X-q*Q,K=G-J*Q,tt=jt*Ut-K*Xt,_t=vt*K-St*jt,Dt=Xt*St-Ut*vt;if(i){if(tt<0||_t<0||Dt<0)return null}else if((tt<0||_t<0||Dt<0)&&(tt>0||_t>0||Dt>0))return null;let mt=tt+_t+Dt;if(mt===0)return null;let Vt=et*(tt*F+_t*B+Dt*Q);return(mt>0?Vt<0:Vt>0)?null:this.at(Vt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends an{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jd=new Nt,bs=new ai,vo=new fn,$d=new I,bo=new I,So=new I,Mo=new I,Jh=new I,To=new I,Qd=new I,wo=new I,Oe=class extends ge{constructor(t=new Ue,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],d=r[c];l!==0&&(Jh.fromBufferAttribute(d,t),a?To.addScaledVector(Jh,l):To.addScaledVector(Jh.sub(e),l))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(vo.containsPoint(bs.origin)===!1&&(bs.intersectSphere(vo,$d)===null||bs.origin.distanceToSquared($d)>(t.far-t.near)**2))&&(Jd.copy(r).invert(),bs.copy(t.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,b=A;v<b;v+=3){let T=o.getX(v),E=o.getX(v+1),y=o.getX(v+2);i=Eo(this,m,t,n,h,l,d,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=Eo(this,a,t,n,h,l,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,b=A;v<b;v+=3){let T=v,E=v+1,y=v+2;i=Eo(this,m,t,n,h,l,d,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,A=p+1,v=p+2;i=Eo(this,a,t,n,h,l,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Wg(s,t,e,n,i,r,a,o){let c;if(t.side===on?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===hi,o),c===null)return null;wo.copy(o),wo.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(wo);return h<e.near||h>e.far?null:{distance:h,point:wo.clone(),object:s}}function Eo(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,bo),s.getVertexPosition(c,So),s.getVertexPosition(h,Mo);let l=Wg(s,t,e,n,bo,So,Mo,Qd);if(l){let d=new I;ji.getBarycoord(Qd,bo,So,Mo,d),i&&(l.uv=ji.getInterpolatedAttribute(i,o,c,h,d,new Rt)),r&&(l.uv1=ji.getInterpolatedAttribute(r,o,c,h,d,new Rt)),a&&(l.normal=ji.getInterpolatedAttribute(a,o,c,h,d,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new I,materialIndex:0};ji.getNormal(bo,So,Mo,u.normal),l.face=u,l.barycoord=d}return l}var ea=new ne,tf=new ne,ef=new ne,Xg=new ne,nf=new Nt,Ao=new I,$h=new fn,sf=new Nt,Qh=new ai,pa=class extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=il,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$h.copy(this.boundingSphere),$h.applyMatrix4(i),t.ray.intersectsSphere($h)!==!1&&(sf.copy(i).invert(),Qh.copy(t.ray).applyMatrix4(sf),!(this.boundingBox!==null&&Qh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Qh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;tf.fromBufferAttribute(i.attributes.skinIndex,t),ef.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(ea.copy(e),e.set(0,0,0,0)):(ea.set(...e,1),e.set(0,0,0)),ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ef.getComponent(r);if(a!==0){let o=tf.getComponent(r);nf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Xg.copy(ea).applyMatrix4(nf),a)}}return e.isVector4&&(e.w=ea.w),e.applyMatrix4(this.bindMatrixInverse)}},br=class extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sr=class extends Ne{constructor(t=null,e=1,n=1,i,r,a,o,c,h=Te,l=Te,d,u){super(null,a,o,c,h,l,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rf=new Nt,qg=new Nt,ma=class s{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:qg;rf.multiplyMatrices(o,e[r]),rf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Sr(e,t,t,Cn,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(Tt("Skeleton: No bone found with UUID:",r),a=new br),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ei=class extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new Nt,af=new Nt,Ro=[],of=new En,Yg=new Nt,na=new Oe,ia=new fn,ga=class extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),of.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(of)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),ia.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),t.ray.intersectsSphere(ia)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ar),af.multiplyMatrices(n,ar),na.matrixWorld=af,na.raycast(t,Ro);for(let a=0,o=Ro.length;a<o;a++){let c=Ro[a];c.instanceId=r,c.object=this,e.push(c)}Ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(i*this.count),i,this.count,_c,Rn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new fn,Kg=new Rt(.5,.5),Co=new I,Mr=class{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,a=new wn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],A=r[13],v=r[14],b=r[15];if(i[0].setComponents(h-a,f-l,m-g,b-M).normalize(),i[1].setComponents(h+a,f+l,m+g,b+M).normalize(),i[2].setComponents(h+o,f+d,m+_,b+A).normalize(),i[3].setComponents(h-o,f-d,m-_,b-A).normalize(),n)i[4].setComponents(c,u,p,v).normalize(),i[5].setComponents(h-c,f-u,m-p,b-v).normalize();else if(i[4].setComponents(h-c,f-u,m-p,b-v).normalize(),e===Yn)i[5].setComponents(h+c,f+u,m+p,b+v).normalize();else if(e===fr)i[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);let e=Kg.distanceTo(t.center);return Ss.radius=.7071067811865476+e,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Co.x=i.normal.x>0?t.max.x:t.min.x,Co.y=i.normal.y>0?t.max.y:t.min.y,Co.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends an{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new I,jo=new I,cf=new Nt,sa=new ai,Po=new fn,tl=new I,hf=new I,As=class extends ge{constructor(t=new Ue,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zo.fromBufferAttribute(e,i-1),jo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zo.distanceTo(jo);t.setAttribute("lineDistance",new sn(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;cf.copy(i).invert(),sa.copy(t.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=h){let m=l.getX(_),M=l.getX(_+1),A=Io(this,t,sa,c,m,M,_);A&&e.push(A)}if(this.isLineLoop){let _=l.getX(g-1),p=l.getX(f),m=Io(this,t,sa,c,_,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=h){let m=Io(this,t,sa,c,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=Io(this,t,sa,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Io(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Zo.fromBufferAttribute(o,i),jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Zo,jo,tl,hf)>n)return;tl.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(tl);if(!(h<t.near||h>t.far))return{distance:h,point:hf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var lf=new I,uf=new I,_a=class extends As{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)lf.fromBufferAttribute(e,i),uf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lf.distanceTo(uf);t.setAttribute("lineDistance",new sn(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ya=class extends As{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ai=class extends an{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},df=new Nt,cl=new ai,Lo=new fn,Do=new I,$i=class extends ge{constructor(t=new Ue,e=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;df.copy(i).invert(),cl.copy(t.ray).applyMatrix4(df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,_=f;g<_;g++){let p=h.getX(g);Do.fromBufferAttribute(d,p),ff(Do,p,c,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Do.fromBufferAttribute(d,g),ff(Do,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ff(s,t,e,n,i,r,a){let o=cl.distanceSqToPoint(s);if(o<e){let c=new I;cl.closestPointToPoint(s,c),c.applyMatrix4(n);let h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var xa=class extends Ne{constructor(t=[],e=rs,n,i,r,a,o,c,h,l){super(t,e,n,i,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},va=class extends Ne{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends Ne{constructor(t,e,n=Qn,i,r,a,o=Te,c=Te,h,l=ri,d=1){if(l!==ri&&l!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends Qi{constructor(t,e=Qn,n=rs,i,r,a=Te,o=Te,c,h=ri){let l={width:t,height:t,depth:1},d=[l,l,l,l,l,l];super(t,t,e,n,i,r,a,o,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ba=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wr=class s extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(d,2));function g(_,p,m,M,A,v,b,T,E,y,w){let C=v/E,L=b/y,F=v/2,O=b/2,P=T/2,B=E+1,X=y+1,G=0,Q=0,q=new I;for(let J=0;J<X;J++){let et=J*L-O;for(let vt=0;vt<B;vt++){let St=vt*C-F;q[_]=St*M,q[p]=et*A,q[m]=P,h.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[m]=T>0?1:-1,l.push(q.x,q.y,q.z),d.push(vt/E),d.push(1-J/y),G+=1}}for(let J=0;J<y;J++)for(let et=0;et<E;et++){let vt=u+et+B*J,St=u+et+B*(J+1),Xt=u+(et+1)+B*(J+1),Ut=u+(et+1)+B*J;c.push(vt,St,Ut),c.push(St,Xt,Ut),Q+=6}o.addGroup(f,Q,w),f+=Q,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rs=class s extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,l=c+1,d=t/o,u=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<l;m++){let M=m*u-a;for(let A=0;A<h;A++){let v=A*d-r;g.push(v,-M,0),_.push(0,0,1),p.push(A/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let A=M+h*m,v=M+h*(m+1),b=M+1+h*(m+1),T=M+1+h*m;f.push(A,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sa=class extends an{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ns(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(pf(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(pf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Je(s){let t={};for(let e=0;e<s.length;e++){let n=Ns(s[e]);for(let i in n)t[i]=n[i]}return t}function pf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Zg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bl(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var cp={clone:Ns,merge:Je},jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends an{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ne().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Cs=class extends an{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pn=class extends Cs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Qo=class extends an{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends an{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ko(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function $g(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function mf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Qg(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}var oi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends oi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=t,o=2*e-n;break;case ol:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case al:a=t,c=2*n-e;break;case ol:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let b=0;b!==o;++b)r[b]=m*a[l+b]+M*a[h+b]+A*a[c+b]+v*a[d+b];return r}},nc=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(n-e)/(i-e),d=1-l;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[c+u]*l;return r}},ic=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},sc=class extends oi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this.inTangents,d=this.outTangents;if(!l||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)r[p]=a[h+p]*_+a[c+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[h+g],p=a[c+g],m=f*u+g*2,M=d[m],A=d[m+1],v=t*u+g*2,b=l[v],T=l[v+1],E=e_(n,e,M,b,i);r[g]=hp(E,_,A,T,p)}return r}};function hp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function t_(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function e_(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=hp(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let c=t_(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var mn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ko(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case ws:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break;case sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ko(this.settings)&&(gf(this.settings.inTangents,t),gf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){It("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){It("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&ug(i))for(let o=0,c=i.length;o!==c;++o){let h=i[o];if(isNaN(h)){It("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ko(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function gf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ws;var Ri=class extends mn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ts;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};Ma.prototype.ValueTypeName="color";var Ci=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};Ci.prototype.ValueTypeName="number";var rc=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),h=t*o;for(let l=h+o;h!==l;h+=4)je.slerpFlat(r,0,a,h-o,a,h,c);return r}},Pi=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends mn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ts;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};ts.prototype.ValueTypeName="vector";var Ta=class{constructor(t="",e=-1,n=[],i=Yf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(i_(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);let l=$g(c);c=mf(c,1,l),h=mf(h,1,l),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new Ci(".morphTargetInfluences["+e[o].name+"]",c,h).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let h=t[o],l=h.name.match(r);if(l&&l.length>1){let d=l[1],u=i[d];u||(i[d]=u=[]),u.push(h)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function n_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Ma;case"quaternion":return Pi;case"bool":case"boolean":return Ri;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function i_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=n_(s.type);if(s.times===void 0){let n=[],i=[];Qg(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),ko(s.settings)&&(e.settings={inTangents:Zi(s.settings.inTangents,Float32Array),outTangents:Zi(s.settings.outTangents,Float32Array)}),e}var si={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(_f(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!_f(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function _f(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ac=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new ac,ci=class{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},hl=class extends Error{constructor(t,e){super(t),this.response=e}},Er=class extends ci{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Mi[t]!==void 0){Mi[t].push({onLoad:e,onProgress:n,onError:i});return}Mi[t]=[],Mi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=Mi[t],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,_=0,p=new ReadableStream({start(m){M();function M(){d.read().then(({done:A,value:v})=>{if(A)m.close();else{_+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,E=l.length;T<E;T++){let y=l[T];y.onProgress&&y.onProgress(b)}m.enqueue(v),M()}},A=>{m.error(A)})}}});return new Response(p)}else throw new hl(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o==="")return h.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{si.add(`file:${t}`,h);let l=Mi[t];delete Mi[t];for(let d=0,u=l.length;d<u;d++){let f=l[d];f.onLoad&&f.onLoad(h)}}).catch(h=>{let l=Mi[t];if(l===void 0)throw this.manager.itemError(t),h;delete Mi[t];for(let d=0,u=l.length;d<u;d++){let f=l[d];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=new WeakMap,oc=class extends ci{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=si.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=or.get(a);d===void 0&&(d=[],or.set(a,d)),d.push({onLoad:e,onError:i})}return a}let o=pr("img");function c(){l(),e&&e(this);let d=or.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}or.delete(this),r.manager.itemEnd(t)}function h(d){l(),i&&i(d),si.remove(`image:${t}`);let u=or.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}or.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var wa=class extends ci{constructor(t){super(t)}load(t,e,n,i){let r=new Ne,a=new oc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Ps=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var el=new Nt,yf=new I,xf=new I,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(el,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,h=i?i.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},No=new I,Uo=new je,ii=new I,Ea=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(No,Uo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(No,Uo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new I,vf=new Rt,bf=new Rt,Ie=class extends Ea{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,vf,bf),e.subVectors(bf,vf)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ll=class extends Ar{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Es*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Aa=class extends Ps{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ul=class extends Ar{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0}},es=class extends Ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ns=class extends Ea{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dl=class extends Ar{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Li=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new dl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ra=class extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Di=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var nl=new WeakMap,Ca=class extends ci{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=si.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(h=>{nl.has(a)===!0?(i&&i(nl.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(h),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(h){return si.add(`image-bitmap:${t}`,h),e&&e(h),r.manager.itemEnd(t),h}).catch(function(h){i&&i(h),nl.set(c,h),si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});si.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var cr=-90,hr=1,cc=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ie(cr,hr,t,e);i.layers=this.layers,this.add(i);let r=new Ie(cr,hr,t,e);r.layers=this.layers,this.add(r);let a=new Ie(cr,hr,t,e);a.layers=this.layers,this.add(a);let o=new Ie(cr,hr,t,e);o.layers=this.layers,this.add(o);let c=new Ie(cr,hr,t,e);c.layers=this.layers,this.add(c);let h=new Ie(cr,hr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zl="\\[\\]\\.:\\/",s_=new RegExp("["+zl+"]","g"),Vl="[^"+zl+"]",r_="[^"+zl.replace("\\.","")+"]",a_=/((?:WC+[\/:])*)/.source.replace("WC",Vl),o_=/(WCOD+)?/.source.replace("WCOD",r_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),h_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),l_=new RegExp("^"+a_+o_+c_+h_+"$"),u_=["material","materials","bones","map"],fl=class{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[i];if(a===void 0){let h=e.nodeName;It("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=fl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lM=new Float32Array(1);var Sf=new Nt,Pa=class{constructor(t,e,n=0,i=1/0){this.ray=new ai(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(Mf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)pl(t[i],this,n,e);return n.sort(Mf),n}};function Mf(s,t){return s.distance-t.distance}function pl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)pl(r[a],t,e,!0)}}var Ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Rr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ml=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};var La=class extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Hl(s,t,e,n){let i=d_(n);switch(e){case Dl:return s*t;case _c:return s*t/i.components*i.byteLength;case yc:return s*t/i.components*i.byteLength;case os:return s*t*2/i.components*i.byteLength;case xc:return s*t*2/i.components*i.byteLength;case Nl:return s*t*3/i.components*i.byteLength;case Cn:return s*t*4/i.components*i.byteLength;case vc:return s*t*4/i.components*i.byteLength;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:case Tc:return Math.max(s,16)*Math.max(t,8)/4;case bc:case Mc:return Math.max(s,8)*Math.max(t,8)/2;case wc:case Ec:case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ac:case za:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kc:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Va:case jc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d_(s){switch(s){case gn:case Cl:return{byteLength:1,components:1};case Dr:case Pl:case ti:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Qn:case pc:case Rn:return{byteLength:4,components:1};case Il:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Lp(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function p_(s){let t=new WeakMap;function e(o,c){let h=o.array,l=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){let l=c.array,d=c.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,l);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,T_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ty=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,My=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:y_,alphatest_fragment:x_,alphatest_pars_fragment:v_,aomap_fragment:b_,aomap_pars_fragment:S_,batching_pars_vertex:M_,batching_vertex:T_,begin_vertex:w_,beginnormal_vertex:E_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:D_,color_fragment:N_,color_pars_fragment:U_,color_pars_vertex:O_,color_vertex:F_,common:k_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:V_,displacementmap_vertex:H_,emissivemap_fragment:G_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:K_,envmap_pars_fragment:Z_,envmap_pars_vertex:j_,envmap_physical_pars_fragment:o0,envmap_vertex:J_,fog_vertex:$_,fog_pars_vertex:Q_,fog_fragment:t0,fog_pars_fragment:e0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:l0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,lightprobes_pars_fragment:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:b0,map_fragment:S0,map_pars_fragment:M0,map_particle_fragment:T0,map_particle_pars_fragment:w0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:A0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:N0,normal_pars_fragment:U0,normal_pars_vertex:O0,normal_vertex:F0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:H0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:$0,shadowmap_vertex:Q0,shadowmask_pars_fragment:ty,skinbase_vertex:ey,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:ay,tonemapping_fragment:oy,tonemapping_pars_fragment:cy,transmission_fragment:hy,transmission_pars_fragment:ly,uv_pars_fragment:uy,uv_pars_vertex:dy,uv_vertex:fy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:_y,backgroundCube_frag:yy,cube_vert:xy,cube_frag:vy,depth_vert:by,depth_frag:Sy,distance_vert:My,distance_frag:Ty,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:Ay,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:ky,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:Vy,meshtoon_frag:Hy,points_vert:Gy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Ky},lt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},di={basic:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Je([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Je([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Je([lt.points,lt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Je([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Je([lt.common,lt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Je([lt.sprite,lt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Je([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Je([lt.lights,lt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};di.physical={uniforms:Je([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var th={r:0,b:0,g:0},Zy=new Nt,Dp=new Lt;Dp.set(-1,0,0,0,1,0,0,0,1);function jy(s,t,e,n,i,r){let a=new Pt(0),o=i===!0?0:1,c,h,l=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(M){let A=!1,v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Ua)?(h===void 0&&(h=new Oe(new wr(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ns(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Dp),h.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Qt,(l!==v||d!==v.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,l=v,d=v.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new Rs(2,2),new An({name:"BackgroundMaterial",uniforms:Ns(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,l=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(th,Bl(s)),e.buffers.color.setClear(th.r,th.g,th.b,A,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Jy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(L,F,O,P,B){let X=!1,G=d(L,P,O,F);r!==G&&(r=G,h(r.object)),X=f(L,P,O,B),X&&g(L,P,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(L,F,O,P),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function h(L){return s.bindVertexArray(L)}function l(L){return s.deleteVertexArray(L)}function d(L,F,O,P){let B=P.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let G=L.isInstancedMesh===!0?L.id:0,Q=X[G];Q===void 0&&(Q={},X[G]=Q);let q=Q[O.id];q===void 0&&(q={},Q[O.id]=q);let J=q[B];return J===void 0&&(J=u(c()),q[B]=J),J}function u(L){let F=[],O=[],P=[];for(let B=0;B<e;B++)F[B]=0,O[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,F,O,P){let B=r.attributes,X=F.attributes,G=0,Q=O.getAttributes();for(let q in Q)if(Q[q].location>=0){let et=B[q],vt=X[q];if(vt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),et===void 0||et.attribute!==vt||vt&&et.data!==vt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(L,F,O,P){let B={},X=F.attributes,G=0,Q=O.getAttributes();for(let q in Q)if(Q[q].location>=0){let et=X[q];et===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let vt={};vt.attribute=et,et&&et.data&&(vt.data=et.data),B[q]=vt,G++}r.attributes=B,r.attributesNum=G,r.index=P}function _(){let L=r.newAttributes;for(let F=0,O=L.length;F<O;F++)L[F]=0}function p(L){m(L,0)}function m(L,F){let O=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;O[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),B[L]!==F&&(s.vertexAttribDivisor(L,F),B[L]=F)}function M(){let L=r.newAttributes,F=r.enabledAttributes;for(let O=0,P=F.length;O<P;O++)F[O]!==L[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function A(L,F,O,P,B,X,G){G===!0?s.vertexAttribIPointer(L,F,O,B,X):s.vertexAttribPointer(L,F,O,P,B,X)}function v(L,F,O,P){_();let B=P.attributes,X=O.getAttributes(),G=F.defaultAttributeValues;for(let Q in X){let q=X[Q];if(q.location>=0){let J=B[Q];if(J===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let et=J.normalized,vt=J.itemSize,St=t.get(J);if(St===void 0)continue;let Xt=St.buffer,Ut=St.type,jt=St.bytesPerElement,K=Ut===s.INT||Ut===s.UNSIGNED_INT||J.gpuType===pc;if(J.isInterleavedBufferAttribute){let tt=J.data,_t=tt.stride,Dt=J.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)m(q.location+mt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let mt=0;mt<q.locationSize;mt++)A(q.location+mt,vt/q.locationSize,Ut,et,_t*jt,(Dt+vt/q.locationSize*mt)*jt,K)}else{if(J.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt,J.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let tt=0;tt<q.locationSize;tt++)A(q.location+tt,vt/q.locationSize,Ut,et,vt*jt,vt/q.locationSize*tt*jt,K)}}else if(G!==void 0){let et=G[Q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}M()}function b(){w();for(let L in n){let F=n[L];for(let O in F){let P=F[O];for(let B in P){let X=P[B];for(let G in X)l(X[G].object),delete X[G];delete P[B]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let O in F){let P=F[O];for(let B in P){let X=P[B];for(let G in X)l(X[G].object),delete X[G];delete P[B]}}delete n[L.id]}function E(L){for(let F in n){let O=n[F];for(let P in O){let B=O[P];if(B[L.id]===void 0)continue;let X=B[L.id];for(let G in X)l(X[G].object),delete X[G];delete B[L.id]}}}function y(L){for(let F in n){let O=n[F],P=L.isInstancedMesh===!0?L.id:0,B=O[P];if(B!==void 0){for(let X in B){let G=B[X];for(let Q in G)l(G[Q].object),delete G[Q];delete B[X]}delete O[P],Object.keys(O).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==i&&(r=i,h(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function $y(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,l){l!==0&&(s.drawArraysInstanced(n,c,h,l),e.update(h,n,l))}function o(c,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,l);let u=0;for(let f=0;f<l;f++)u+=h[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Cn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==gn&&E!==Rn&&!y&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(Tt("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:T}}function tx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new wn,o=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?l(null):h();else{let M=r?0:n,A=M*4,v=m.clippingState||null;c.value=v,v=l(g,u,A,f);for(let b=0;b!==A;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Fr=4,ex=6,nx=20,ix=256,Wa=new ns,up=new Pt,Gl=null,Wl=0,Xl=0,ql=!1,sx=new I,Us=new I,nh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=sx}=r;Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Wl,Xl),this._renderer.xr.enabled=ql,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:ti,format:Cn,colorSpace:rn,depthBuffer:!1},i=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rx(r)),this._blurMaterial=ox(r,t,e),this._ggxMaterial=ax(r,t,e)}return i}_compileMaterial(t){let e=new Oe(new Ue,t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,i,r){let c=new Ie(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(up),d.toneMapping=Jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new wr,new jn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(up),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[A],r.y,r.z)):v===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[A]));let b=this._cubeSize;Or(i,v*b,A>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-l*l),u=h*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Fr?n-g+Fr:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Or(r,p,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Wa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Or(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Wa)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let l=this._sizeLods[i],d=3*l*(i>this._lodMax-Fr?i-this._lodMax+Fr:0),u=4*(this._cubeSize-l);Or(e,d,u,3*l,2*l),a.setRenderTarget(e),a.render(c,Wa)}};function rx(s){let t=[],e=[],n=s,i=s-Fr+1+ex;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,l=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(v,f*u*m);for(let b=0;b<u;b++){let T=l[b*2]*2-1,E=l[b*2+1]*2-1;m===0?Us.set(1,E,T):m===1?Us.set(-T,1,-E):m===2?Us.set(-T,E,1):m===3?Us.set(-1,E,-T):m===4?Us.set(-T,-1,E):Us.set(T,E,-1),Us.toArray(_,(m*u+b)*f)}}let p=new Ue;p.setAttribute("position",new ve(g,f)),p.setAttribute("outputDirection",new ve(_,f)),e.push(new Oe(p,null)),n>Fr&&n--}return{lodMeshes:e,sizeLods:t}}function dp(s,t,e){let n=new dn(s,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ax(s,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ox(s,t,e){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function fp(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function pp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ih=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wr(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:li});r.uniforms.tEquirect.value=e;let a=new Oe(i,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=we),new cc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function cx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===uc||f===dc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new ih(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===uc||f===dc,_=f===rs||f===Ls;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new nh(s)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new nh(s)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",l),p.texture):null}}}return u}function o(u,f){return f===uc?u.mapping=rs:f===dc&&(u.mapping=Ls),u}function c(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function hx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ms("WebGLRenderer: "+n+" extension not supported."),i}}}function lx(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,v=M.length;A<v;A+=3){let b=M[A+0],T=M[A+1],E=M[A+2];u.push(b,T,T,E,E,b)}}else{let M=g.array;_=g.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let b=A+0,T=A+1,E=A+2;u.push(b,T,T,E,E,b)}}let p=new(g.count>=65535?fa:da)(u,1);p.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function l(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function ux(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function h(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function l(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function dx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fx(s,t,e){let n=new WeakMap,i=new ne;function r(a,o,c){let h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*b*4*d),E=new ha(T,v,b,d);E.type=Rn,E.needsUpdate=!0;let y=A*4;for(let C=0;C<d;C++){let L=p[C],F=m[C],O=M[C],P=v*b*4*C;for(let B=0;B<L.count;B++){let X=B*y;f===!0&&(i.fromBufferAttribute(L,B),T[P+X+0]=i.x,T[P+X+1]=i.y,T[P+X+2]=i.z,T[P+X+3]=0),g===!0&&(i.fromBufferAttribute(F,B),T[P+X+4]=i.x,T[P+X+5]=i.y,T[P+X+6]=i.z,T[P+X+7]=0),_===!0&&(i.fromBufferAttribute(O,B),T[P+X+8]=i.x,T[P+X+9]=i.y,T[P+X+10]=i.z,T[P+X+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new Rt(v,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function px(s,t,e,n,i){let r=new WeakMap;function a(h){let l=i.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==l&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function c(h){let l=h.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}var mx={[Sl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[Na]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function gx(s,t,e,n,i,r){let a=new dn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new Ue;h.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new sn([0,2,0,0,2,0],2));let l=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(h,l),u=new ns(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,M=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),c!==null&&c.setSize(v,b);for(let T=0;T<M.length;T++){let E=M[T];E.setSize&&E.setSize(v,b)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let b=a.width,T=a.height;M.length>0&&o===null&&(o=new dn(b,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new dn(b,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let y=M[E];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(_||v.toneMapping===Jn&&M.length===0)return!1;if(m=b,b!==null){let T=b.width,E=b.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Jn,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=p,_=!0;let T=a,E=o;for(let y=0;y<M.length;y++){let w=M[y];w.enabled!==!1&&(w.render(v,E,T,b),w.needsSwap!==!1&&(T=E,E=E===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,l.defines={},Bt.getTransfer(f)===Qt&&(l.defines.SRGB_TRANSFER="");let y=mx[g];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}var Np=new Ne,Zl=new Qi(1,1),Up=new ha,Op=new Ko,Fp=new xa,mp=[],gp=[],_p=new Float32Array(16),yp=new Float32Array(9),xp=new Float32Array(4);function Br(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=mp[i];if(r===void 0&&(r=new Float32Array(i),mp[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ah(s,t){let e=gp[t];e===void 0&&(e=new Int32Array(t),gp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _x(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;xp.set(n),s.uniformMatrix2fv(this.addr,!1,xp),ke(e,n)}}function Sx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;yp.set(n),s.uniformMatrix3fv(this.addr,!1,yp),ke(e,n)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;_p.set(n),s.uniformMatrix4fv(this.addr,!1,_p),ke(e,n)}}function Tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function Rx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function Lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zl.compareFunction=e.isReversedDepthBuffer()?Qc:$c,r=Zl):r=Np,e.setTexture2D(t||r,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Op,i)}function Nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fp,i)}function Ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Up,i)}function Ox(s){switch(s){case 5126:return _x;case 35664:return yx;case 35665:return xx;case 35666:return vx;case 35674:return bx;case 35675:return Sx;case 35676:return Mx;case 5124:case 35670:return Tx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Fx(s,t){s.uniform1fv(this.addr,t)}function kx(s,t){let e=Br(t,this.size,2);s.uniform2fv(this.addr,e)}function Bx(s,t){let e=Br(t,this.size,3);s.uniform3fv(this.addr,e)}function zx(s,t){let e=Br(t,this.size,4);s.uniform4fv(this.addr,e)}function Vx(s,t){let e=Br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hx(s,t){let e=Br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gx(s,t){let e=Br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wx(s,t){s.uniform1iv(this.addr,t)}function Xx(s,t){s.uniform2iv(this.addr,t)}function qx(s,t){s.uniform3iv(this.addr,t)}function Yx(s,t){s.uniform4iv(this.addr,t)}function Kx(s,t){s.uniform1uiv(this.addr,t)}function Zx(s,t){s.uniform2uiv(this.addr,t)}function jx(s,t){s.uniform3uiv(this.addr,t)}function Jx(s,t){s.uniform4uiv(this.addr,t)}function $x(s,t,e){let n=this.cache,i=t.length,r=ah(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Zl:a=Np;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Qx(s,t,e){let n=this.cache,i=t.length,r=ah(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Op,r[a])}function tv(s,t,e){let n=this.cache,i=t.length,r=ah(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Fp,r[a])}function ev(s,t,e){let n=this.cache,i=t.length,r=ah(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Up,r[a])}function nv(s){switch(s){case 5126:return Fx;case 35664:return kx;case 35665:return Bx;case 35666:return zx;case 35674:return Vx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return Kx;case 36294:return Zx;case 36295:return jx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}},$l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function vp(s,t){s.seq.push(t),s.map[t.id]=t}function iv(s,t,e){let n=s.name,i=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),a=Yl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){vp(e,h===void 0?new jl(o,s,t):new Jl(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new $l(o),vp(e,d)),e=d}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);iv(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function bp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sv=37297,rv=0;function av(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sp=new Lt;function ov(s){Bt._getMatrix(Sp,Bt.workingColorSpace,s);let t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(s)){case oa:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+av(s.getShaderSource(t),o)}else return r}function cv(s,t){let e=ov(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hv={[Sl]:"Linear",[Ml]:"Reinhard",[Tl]:"Cineon",[Na]:"ACESFilmic",[El]:"AgX",[Al]:"Neutral",[wl]:"Custom"};function lv(s,t){let e=hv[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eh=new I;function uv(){Bt.getLuminanceCoefficients(eh);let s=eh.x.toFixed(4),t=eh.y.toFixed(4),e=eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function fv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function qa(s){return s!==""}function Tp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(mv,_v)}var gv=new Map;function _v(s,t){let e=kt[t];if(e===void 0){let n=gv.get(t);if(n!==void 0)e=kt[n],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ql(e)}var yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(s){return s.replace(yv,xv)}function xv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ap(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vv={[Da]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function bv(s){return vv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sv={[rs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function Mv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tv={[Ls]:"ENVMAP_MODE_REFRACTION"};function wv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ev={[bl]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function Av(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[s.combine]||"ENVMAP_BLENDING_NONE"}function Rv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=bv(e),h=Mv(e),l=wv(e),d=Av(e),u=Rv(e),f=dv(e),g=fv(r),_=i.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(p=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qa).join(`
`)),a=Ql(a),a=Tp(a,e),a=wp(a,e),o=Ql(o),o=Tp(o,e),o=wp(o,e),a=Ep(a),o=Ep(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+p+a,v=M+m+o,b=bp(i,i.VERTEX_SHADER,A),T=bp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(b)||"",P=i.getShaderInfoLog(T)||"",B=F.trim(),X=O.trim(),G=P.trim(),Q=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{let J=Mp(i,b,"vertex"),et=Mp(i,T,"fragment");It("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+J+`
`+et)}else B!==""?Tt("WebGLProgram: Program Info Log:",B):(X===""||G==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(b),i.deleteShader(T),y=new kr(i,_),w=pv(i,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,sv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var Pv=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eu(t),e.set(t,n)),n}},eu=class{constructor(t){this.id=Pv++,this.code=t,this.usedTimes=0}};function Iv(s){return s===os||s===za||s===Va}function Lv(s,t,e,n,i,r){let a=new _r,o=new tu,c=new Set,h=[],l=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,w,C,L,F,O){let P=L.fog,B=F.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=t.get(y.envMap||X,G),q=Q&&Q.mapping===Ua?Q.image.height:null,J=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Tt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=et!==void 0?et.length:0,St=0;B.morphAttributes.position!==void 0&&(St=1),B.morphAttributes.normal!==void 0&&(St=2),B.morphAttributes.color!==void 0&&(St=3);let Xt,Ut,jt,K;if(J){let le=di[J];Xt=le.vertexShader,Ut=le.fragmentShader}else{Xt=y.vertexShader,Ut=y.fragmentShader;let le=o.getVertexShaderStage(y),Jt=o.getFragmentShaderStage(y);o.update(y,le,Jt),jt=le.id,K=Jt.id}let tt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Vt=!!y.map,Le=!!y.matcap,Gt=!!Q,Zt=!!y.aoMap,he=!!y.lightMap,qt=!!y.bumpMap&&y.wireframe===!1,fe=!!y.normalMap,Ve=!!y.displacementMap,ln=!!y.emissiveMap,me=!!y.metalnessMap,Re=!!y.roughnessMap,U=y.anisotropy>0,qe=y.clearcoat>0,te=y.dispersion>0,R=y.retroreflectivity>0,x=y.iridescence>0,k=y.sheen>0,H=y.transmission>0,Y=U&&!!y.anisotropyMap,it=qe&&!!y.clearcoatMap,st=qe&&!!y.clearcoatNormalMap,Z=qe&&!!y.clearcoatRoughnessMap,$=x&&!!y.iridescenceMap,rt=x&&!!y.iridescenceThicknessMap,wt=k&&!!y.sheenColorMap,ht=k&&!!y.sheenRoughnessMap,at=!!y.specularMap,Et=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Ot=H&&!!y.transmissionMap,N=H&&!!y.thicknessMap,ot=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,ft=!!y.alphaHash,nt=!!y.extensions,At=Jn;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(At=s.toneMapping);let bt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:Ut,defines:y.defines,customVertexShaderID:jt,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:Le,envMap:Gt,envMapMode:Gt&&Q.mapping,envMapCubeUVHeight:q,aoMap:Zt,lightMap:he,bumpMap:qt,normalMap:fe,displacementMap:Ve,emissiveMap:ln,normalMapObjectSpace:fe&&y.normalMapType===Zf,normalMapTangentSpace:fe&&y.normalMapType===Jc,packedNormalMap:fe&&y.normalMapType===Jc&&Iv(y.normalMap.format),metalnessMap:me,roughnessMap:Re,anisotropy:U,anisotropyMap:Y,clearcoat:qe,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Z,dispersion:te,retroreflection:R,iridescence:x,iridescenceMap:$,iridescenceThicknessMap:rt,sheen:k,sheenColorMap:wt,sheenRoughnessMap:ht,specularMap:at,specularColorMap:Et,specularIntensityMap:Ct,transmission:H,transmissionMap:Ot,thicknessMap:N,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Pr&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ft,combine:y.combine,mapUv:Vt&&g(y.map.channel),aoMapUv:Zt&&g(y.aoMap.channel),lightMapUv:he&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:fe&&g(y.normalMap.channel),displacementMapUv:Ve&&g(y.displacementMap.channel),emissiveMapUv:ln&&g(y.emissiveMap.channel),metalnessMapUv:me&&g(y.metalnessMap.channel),roughnessMapUv:Re&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:it&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(y.sheenRoughnessMap.channel),specularMapUv:at&&g(y.specularMap.channel),specularColorMapUv:Et&&g(y.specularColorMap.channel),specularIntensityMapUv:Ct&&g(y.specularIntensityMap.channel),transmissionMapUv:Ot&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||U),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Vt||j),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&Bt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:ln&&y.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&y.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(m(w,y),M(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let w=f[y.type],C;if(w){let L=di[w];C=cp.clone(L.uniforms)}else C=y.uniforms;return C}function v(y,w){let C=l.get(w);return C!==void 0?++C.usedTimes:(C=new Cv(s,w,y,i),h.push(C),l.set(w,C)),C}function b(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),l.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:E}}function Dv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function c(u,f,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let A=o(u,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function h(u,f,g,_,p,m){let M=o(u,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):e.unshift(M)}function l(u,f){e.length>1&&e.sort(u||Nv),n.length>1&&n.sort(f||Rp),i.length>1&&i.sort(f||Rp)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:h,finish:d,sort:l}}function Uv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Cp,s.set(n,[a])):i>=r.length?(a=new Cp,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ov(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Fv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var kv=0;function Bv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zv(s){let t=new Ov,e=Fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let i=new I,r=new Nt,a=new Nt;function o(h){let l=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,A=0,v=0,b=0,T=0,E=0,y=0,w=0,C=0;h.sort(Bv);for(let F=0,O=h.length;F<O;F++){let P=h[F],B=P.color,X=P.intensity,G=P.distance,Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=B.r*X,d+=B.g*X,u+=B.b*X;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],X);C++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Q;let vt=J.getViewportCount();for(let St=0;St<vt;St++)n.sunShadowMatrix[_+St]=J.getMatrix(St),n.sunShadowCascade[_+St]=J._cascadeData[St];_+=vt,g++}n.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;let J=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,J.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=J.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=Q,E++}M++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=q,A++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(X),q.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[v]=q,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==E||L.numSpotMaps!==y||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=E,L.numSpotMaps=y,L.numLightProbes=C,n.version=kv++)}function c(h,l){let d=0,u=0,f=0,g=0,_=0,p=0,m=l.matrixWorldInverse;for(let M=0,A=h.length;M<A;M++){let v=h[M];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Pp(s){let t=new zv(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function h(){t.setup(e)}function l(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Vv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Pp(s),t.set(i,[o])):r>=a.length?(o=new Pp(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Xv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ip=new Nt,Xa=new I,Kl=new I;function qv(s,t,e){let n=new Mr,i=new Rt,r=new Rt,a=new ne,o=new Qo,c=new tc,h={},l=e.maxTextureSize,d={[hi]:on,[on]:hi,[Fn]:Fn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Hv,fragmentShader:Gv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Oe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let m=this.type;this.render=function(T,E,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===lc&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Da);let w=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(li),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=T.length;P<B;P++){let X=T[P],G=X.shadow;if(G===void 0){Tt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Q=G.getFrameExtents();i.multiply(Q),r.copy(G.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/Q.x),i.x=r.x*Q.x,G.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/Q.y),i.y=r.y*Q.y,G.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Cr){if(X.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dn(i.x,i.y,{format:os,type:ti,minFilter:we,magFilter:we,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Qi(i.x,i.y,Rn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ri,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Te,G.map.depthTexture.magFilter=Te}else X.isPointLight?(G.map=new ih(i.x),G.map.depthTexture=new Jo(i.x,Qn)):(G.map=new dn(i.x,i.y),G.map.depthTexture=new Qi(i.x,i.y,Qn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ri,this.type===Da?(G.map.depthTexture.compareFunction=q?Qc:$c,G.map.depthTexture.minFilter=we,G.map.depthTexture.magFilter=we):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Te,G.map.depthTexture.magFilter=Te);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,y);for(let et=0;et<J;et++){let vt=G.getCamera(et);if(X.isPointLight){let St=G.camera,Xt=G.matrix,Ut=X.distance||St.far;Ut!==St.far&&(St.far=Ut,St.updateProjectionMatrix()),Xa.setFromMatrixPosition(X.matrixWorld),St.position.copy(Xa),Kl.copy(St.position),Kl.add(Wv[et]),St.up.copy(Xv[et]),St.lookAt(Kl),St.updateMatrixWorld(),Xt.makeTranslation(-Xa.x,-Xa.y,-Xa.z),Ip.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ip,St.coordinateSystem,St.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,et),s.clear();else{et===0&&(s.setRenderTarget(G.map),s.clear());let St=G.getViewport(et);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(a)}n=G.getFrustum(et),v(E,y,vt,X,this.type)}G.isPointLightShadow!==!0&&this.type===Cr&&M(G,y),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(w,C,L)};function M(T,E){let y=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new dn(i.x,i.y,{format:os,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,y,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,y,f,_,null)}function A(T,E,y,w){let C=null,L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=y.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let F=C.uuid,O=E.uuid,P=h[F];P===void 0&&(P={},h[F]=P);let B=P[O];B===void 0&&(B=C.clone(),P[O]=B,E.addEventListener("dispose",b)),C=B}if(C.visible=E.visible,C.wireframe=E.wireframe,w===Cr?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=s.properties.get(C);F.light=y}return C}function v(T,E,y,w,C){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let O=t.update(T),P=T.material;if(Array.isArray(P)){let B=O.groups;for(let X=0,G=B.length;X<G;X++){let Q=B[X],q=P[Q.materialIndex];if(q&&q.visible){let J=A(T,q,w,C);T.onBeforeShadow(s,T,E,y,O,J,Q),s.renderBufferDirect(y,null,O,J,T,Q),T.onAfterShadow(s,T,E,y,O,J,Q)}}}else if(P.visible){let B=A(T,P,w,C);T.onBeforeShadow(s,T,E,y,O,B,null),s.renderBufferDirect(y,null,O,B,T,null),T.onAfterShadow(s,T,E,y,O,B,null)}}let F=T.children;for(let O=0,P=F.length;O<P;O++)v(F[O],E,y,w,C)}function b(T){T.target.removeEventListener("dispose",b);for(let y in h){let w=h[y],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Yv(s,t){function e(){let N=!1,ot=new ne,j=null,ct=new ne(0,0,0,0);return{setMask:function(ft){j!==ft&&!N&&(s.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){N=ft},setClear:function(ft,nt,At,bt,le){le===!0&&(ft*=bt,nt*=bt,At*=bt),ot.set(ft,nt,At,bt),ct.equals(ot)===!1&&(s.clearColor(ft,nt,At,bt),ct.copy(ot))},reset:function(){N=!1,j=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,j=null,ct=null,ft=null;return{setReversed:function(nt){if(ot!==nt){let At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=nt;let bt=ft;ft=null,this.setClear(bt)}},getReversed:function(){return ot},setTest:function(nt){nt?tt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(s.depthMask(nt),j=nt)},setFunc:function(nt){if(ot&&(nt=ap[nt]),ct!==nt){switch(nt){case Bo:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case Vo:s.depthFunc(s.LESS);break;case ur:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ft!==nt&&(ft=nt,ot&&(nt=1-nt),s.clearDepth(nt))},reset:function(){N=!1,j=null,ct=null,ft=null,ot=!1}}}function i(){let N=!1,ot=null,j=null,ct=null,ft=null,nt=null,At=null,bt=null,le=null;return{setTest:function(Jt){N||(Jt?tt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(Jt){ot!==Jt&&!N&&(s.stencilMask(Jt),ot=Jt)},setFunc:function(Jt,Hn,ei){(j!==Jt||ct!==Hn||ft!==ei)&&(s.stencilFunc(Jt,Hn,ei),j=Jt,ct=Hn,ft=ei)},setOp:function(Jt,Hn,ei){(nt!==Jt||At!==Hn||bt!==ei)&&(s.stencilOp(Jt,Hn,ei),nt=Jt,At=Hn,bt=ei)},setLocked:function(Jt){N=Jt},setClear:function(Jt){le!==Jt&&(s.clearStencil(Jt),le=Jt)},reset:function(){N=!1,ot=null,j=null,ct=null,ft=null,nt=null,At=null,bt=null,le=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,h=new WeakMap,l={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,b=null,T=null,E=null,y=new Pt(0,0,0),w=0,C=!1,L=null,F=null,O=null,P=null,B=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=Q>=2);let J=null,et={},vt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Xt=new ne().fromArray(vt),Ut=new ne().fromArray(St);function jt(N,ot,j,ct){let ft=new Uint8Array(4),nt=s.createTexture();s.bindTexture(N,nt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<j;At++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,ct,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ot+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return nt}let K={};K[s.TEXTURE_2D]=jt(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(s.DEPTH_TEST),a.setFunc(ur),qt(!1),fe(gl),tt(s.CULL_FACE),Zt(li);function tt(N){l[N]!==!0&&(s.enable(N),l[N]=!0)}function _t(N){l[N]!==!1&&(s.disable(N),l[N]=!1)}function Dt(N,ot){return u[N]!==ot?(s.bindFramebuffer(N,ot),u[N]=ot,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ot),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(N,ot){let j=g,ct=!1;if(N){j=f.get(ot),j===void 0&&(j=[],f.set(ot,j));let ft=N.textures;if(j.length!==ft.length||j[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,At=ft.length;nt<At;nt++)j[nt]=s.COLOR_ATTACHMENT0+nt;j.length=ft.length,ct=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,ct=!0);ct&&s.drawBuffers(j)}function Vt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let Le={[Is]:s.FUNC_ADD,[Af]:s.FUNC_SUBTRACT,[Rf]:s.FUNC_REVERSE_SUBTRACT};Le[Cf]=s.MIN,Le[Pf]=s.MAX;let Gt={[If]:s.ZERO,[Lf]:s.ONE,[Df]:s.SRC_COLOR,[xl]:s.SRC_ALPHA,[Bf]:s.SRC_ALPHA_SATURATE,[Ff]:s.DST_COLOR,[Uf]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[vl]:s.ONE_MINUS_SRC_ALPHA,[kf]:s.ONE_MINUS_DST_COLOR,[Of]:s.ONE_MINUS_DST_ALPHA,[zf]:s.CONSTANT_COLOR,[Vf]:s.ONE_MINUS_CONSTANT_COLOR,[Hf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,ot,j,ct,ft,nt,At,bt,le,Jt){if(N===li){p===!0&&(_t(s.BLEND),p=!1);return}if(p===!1&&(tt(s.BLEND),p=!0),N!==Ef){if(N!==m||Jt!==C){if((M!==Is||b!==Is)&&(s.blendEquation(s.FUNC_ADD),M=Is,b=Is),Jt)switch(N){case Pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ir:s.blendFunc(s.ONE,s.ONE);break;case _l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",N);break}else switch(N){case Pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _l:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",N);break}A=null,v=null,T=null,E=null,y.set(0,0,0),w=0,m=N,C=Jt}return}ft=ft||ot,nt=nt||j,At=At||ct,(ot!==M||ft!==b)&&(s.blendEquationSeparate(Le[ot],Le[ft]),M=ot,b=ft),(j!==A||ct!==v||nt!==T||At!==E)&&(s.blendFuncSeparate(Gt[j],Gt[ct],Gt[nt],Gt[At]),A=j,v=ct,T=nt,E=At),(bt.equals(y)===!1||le!==w)&&(s.blendColor(bt.r,bt.g,bt.b,le),y.copy(bt),w=le),m=N,C=!1}function he(N,ot){N.side===Fn?_t(s.CULL_FACE):tt(s.CULL_FACE);let j=N.side===on;ot&&(j=!j),qt(j),N.blending===Pr&&N.transparent===!1?Zt(li):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ln(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function fe(N){N!==Tf?(tt(s.CULL_FACE),N!==F&&(N===gl?s.cullFace(s.BACK):N===wf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),F=N}function Ve(N){N!==O&&(G&&s.lineWidth(N),O=N)}function ln(N,ot,j){N?(tt(s.POLYGON_OFFSET_FILL),(P!==ot||B!==j)&&(P=ot,B=j,a.getReversed()&&(ot=-ot),s.polygonOffset(ot,j))):_t(s.POLYGON_OFFSET_FILL)}function me(N){N?tt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Re(N){N===void 0&&(N=s.TEXTURE0+X-1),J!==N&&(s.activeTexture(N),J=N)}function U(N,ot,j){j===void 0&&(J===null?j=s.TEXTURE0+X-1:j=J);let ct=et[j];ct===void 0&&(ct={type:void 0,texture:void 0},et[j]=ct),(ct.type!==N||ct.texture!==ot)&&(J!==j&&(s.activeTexture(j),J=j),s.bindTexture(N,ot||K[N]),ct.type=N,ct.texture=ot)}function qe(){let N=et[J];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function k(){try{s.texSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function it(){try{s.texStorage2D(...arguments)}catch(N){It("WebGLState:",N)}}function st(){try{s.texStorage3D(...arguments)}catch(N){It("WebGLState:",N)}}function Z(){try{s.texImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function $(){try{s.texImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function rt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function wt(N,ot){d[N]!==ot&&(s.pixelStorei(N,ot),d[N]=ot)}function ht(N){Xt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Xt.copy(N))}function at(N){Ut.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ut.copy(N))}function Et(N,ot){let j=h.get(ot);j===void 0&&(j=new WeakMap,h.set(ot,j));let ct=j.get(N);ct===void 0&&(ct=s.getUniformBlockIndex(ot,N.name),j.set(N,ct))}function Ct(N,ot){let ct=h.get(ot).get(N);c.get(ot)!==ct&&(s.uniformBlockBinding(ot,ct,N.__bindingPointIndex),c.set(ot,ct))}function Ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),l={},d={},J=null,et={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,b=null,T=null,E=null,y=new Pt(0,0,0),w=0,C=!1,L=null,F=null,O=null,P=null,B=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Ut.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Dt,drawBuffers:mt,useProgram:Vt,setBlending:Zt,setMaterial:he,setFlipSided:qt,setCullFace:fe,setLineWidth:Ve,setPolygonOffset:ln,setScissorTest:me,activeTexture:Re,bindTexture:U,unbindTexture:qe,compressedTexImage2D:te,compressedTexImage3D:R,texImage2D:Z,texImage3D:$,pixelStorei:wt,getParameter:rt,updateUBOMapping:Et,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:ht,viewport:at,reset:Ot}}function Kv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,l=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return g?new OffscreenCanvas(R,x):pr("canvas")}function p(R,x,k){let H=1,Y=te(R);if((Y.width>k||Y.height>k)&&(H=k/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let it=Math.floor(H*Y.width),st=Math.floor(H*Y.height);u===void 0&&(u=_(it,st));let Z=x?_(it,st):u;return Z.width=it,Z.height=st,Z.getContext("2d").drawImage(R,0,0,it,st),Tt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+st+")."),Z}else return"data"in R&&Tt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){s.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,x,k,H,Y,it=!1){if(R!==null){if(s[R]!==void 0)return s[R];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let st;H&&(st=t.get("EXT_texture_norm16"),st||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&st&&(Z=st.R16_EXT),k===s.SHORT&&st&&(Z=st.R16_SNORM_EXT)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),x===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&st&&(Z=st.RG16_EXT),k===s.SHORT&&st&&(Z=st.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_SHORT&&st&&(Z=st.RGB16_EXT),k===s.SHORT&&st&&(Z=st.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),x===s.RGBA){let $=it?oa:Bt.getTransfer(Y);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=$===Qt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&st&&(Z=st.RGBA16_EXT),k===s.SHORT&&st&&(Z=st.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(R,x){let k;return R?x===null||x===Qn||x===Nr?k=s.DEPTH24_STENCIL8:x===Rn?k=s.DEPTH32F_STENCIL8:x===Dr&&(k=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===Nr?k=s.DEPTH_COMPONENT24:x===Rn?k=s.DEPTH_COMPONENT32F:x===Dr&&(k=s.DEPTH_COMPONENT16),k}function T(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Te&&R.minFilter!==we?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){let x=R.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&l.delete(x),x.isHTMLTexture&&d.delete(x)}function y(R){let x=R.target;x.removeEventListener("dispose",y),L(x)}function w(R){let x=n.get(R);if(x.__webglInit===void 0)return;let k=R.source,H=f.get(k);if(H){let Y=H[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(R),Object.keys(H).length===0&&f.delete(k)}n.remove(R)}function C(R){let x=n.get(R);s.deleteTexture(x.__webglTexture);let k=R.source,H=f.get(k);delete H[x.__cacheKey],a.memory.textures--}function L(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let Y=0;Y<x.__webglFramebuffer[H].length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[H][Y]);else s.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)s.deleteFramebuffer(x.__webglFramebuffer[H]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=R.textures;for(let H=0,Y=k.length;H<Y;H++){let it=n.get(k[H]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(k[H])}n.remove(R)}let F=0;function O(){F=0}function P(){return F}function B(R){F=R}function X(){let R=F;return R>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function G(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Q(R,x){let k=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let H=R.image;if(H===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function q(R,x){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_t(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function J(R,x){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_t(k,R,x);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function et(R,x){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Dt(k,R,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}let vt={[Ji]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[dr]:s.MIRRORED_REPEAT},St={[Te]:s.NEAREST,[fc]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[Lr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},Xt={[Jf]:s.NEVER,[np]:s.ALWAYS,[$f]:s.LESS,[$c]:s.LEQUAL,[Qf]:s.EQUAL,[Qc]:s.GEQUAL,[tp]:s.GREATER,[ep]:s.NOTEQUAL};function Ut(R,x){if(x.type===Rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===we||x.magFilter===Lr||x.magFilter===Ds||x.magFilter===$n||x.minFilter===we||x.minFilter===Lr||x.minFilter===Ds||x.minFilter===$n)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,vt[x.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,vt[x.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,vt[x.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,St[x.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Te||x.minFilter!==Ds&&x.minFilter!==$n||x.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));let H=x.source,Y=f.get(H);Y===void 0&&(Y={},f.set(H,Y));let it=G(x);if(it!==R.__cacheKey){Y[it]===void 0&&(Y[it]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[it].usedTimes++;let st=Y[R.__cacheKey];st!==void 0&&(Y[R.__cacheKey].usedTimes--,st.usedTimes===0&&C(x)),R.__cacheKey=it,R.__webglTexture=Y[it].texture}return k}function K(R,x,k){return Math.floor(Math.floor(R/k)/x)}function tt(R,x,k,H){let it=R.updateRanges;if(it.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,H,x.data);else{it.sort((wt,ht)=>wt.start-ht.start);let st=0;for(let wt=1;wt<it.length;wt++){let ht=it[st],at=it[wt],Et=ht.start+ht.count,Ct=K(at.start,x.width,4),Ot=K(ht.start,x.width,4);at.start<=Et+1&&Ct===Ot&&K(at.start+at.count-1,x.width,4)===Ct?ht.count=Math.max(ht.count,at.start+at.count-ht.start):(++st,it[st]=at)}it.length=st+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let wt=0,ht=it.length;wt<ht;wt++){let at=it[wt],Et=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Ot=Et%x.width,N=Math.floor(Et/x.width),ot=Ct,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Ot,N,ot,j,k,H,x.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function _t(R,x,k){let H=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=s.TEXTURE_3D);let Y=jt(R,x),it=x.source;e.bindTexture(H,R.__webglTexture,s.TEXTURE0+k);let st=n.get(it);if(it.version!==st.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=Bt.getPrimaries(Bt.workingColorSpace),ct=x.colorSpace===Ni?null:Bt.getPrimaries(x.colorSpace),ft=x.colorSpace===Ni||j===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let $=p(x.image,!1,i.maxTextureSize);$=qe(x,$);let rt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),ht=v(x.internalFormat,rt,wt,x.normalized,x.colorSpace,x.isVideoTexture);Ut(H,x);let at,Et=x.mipmaps,Ct=x.isVideoTexture!==!0,Ot=st.__version===void 0||Y===!0,N=it.dataReady,ot=T(x,$);if(x.isDepthTexture)ht=b(x.format===as,x.type),Ot&&(Ct?e.texStorage2D(s.TEXTURE_2D,1,ht,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,ht,$.width,$.height,0,rt,wt,null));else if(x.isDataTexture)if(Et.length>0){Ct&&Ot&&e.texStorage2D(s.TEXTURE_2D,ot,ht,Et[0].width,Et[0].height);for(let j=0,ct=Et.length;j<ct;j++)at=Et[j],Ct?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,wt,at.data):e.texImage2D(s.TEXTURE_2D,j,ht,at.width,at.height,0,rt,wt,at.data);x.generateMipmaps=!1}else Ct?(Ot&&e.texStorage2D(s.TEXTURE_2D,ot,ht,$.width,$.height),N&&tt(x,$,rt,wt)):e.texImage2D(s.TEXTURE_2D,0,ht,$.width,$.height,0,rt,wt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ht,Et[0].width,Et[0].height,$.depth);for(let j=0,ct=Et.length;j<ct;j++)if(at=Et[j],x.format!==Cn)if(rt!==null)if(Ct){if(N)if(x.layerUpdates.size>0){let ft=Hl(at.width,at.height,x.format,x.type);for(let nt of x.layerUpdates){let At=at.data.subarray(nt*ft/at.data.BYTES_PER_ELEMENT,(nt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,nt,at.width,at.height,1,rt,At)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,$.depth,rt,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,ht,at.width,at.height,$.depth,0,at.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,$.depth,rt,wt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,ht,at.width,at.height,$.depth,0,rt,wt,at.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ct&&Ot&&e.texStorage2D(s.TEXTURE_2D,ot,ht,Et[0].width,Et[0].height);for(let j=0,ct=Et.length;j<ct;j++)at=Et[j],x.format!==Cn?rt!==null?Ct?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(s.TEXTURE_2D,j,ht,at.width,at.height,0,at.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,wt,at.data):e.texImage2D(s.TEXTURE_2D,j,ht,at.width,at.height,0,rt,wt,at.data)}else if(x.isDataArrayTexture)if(Ct){if(Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ht,$.width,$.height,$.depth),N)if(x.layerUpdates.size>0){let j=Hl($.width,$.height,x.format,x.type);for(let ct of x.layerUpdates){let ft=$.data.subarray(ct*j/$.data.BYTES_PER_ELEMENT,(ct+1)*j/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,$.width,$.height,1,rt,wt,ft)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,rt,wt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,$.width,$.height,$.depth,0,rt,wt,$.data);else if(x.isData3DTexture)Ct?(Ot&&e.texStorage3D(s.TEXTURE_3D,ot,ht,$.width,$.height,$.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,rt,wt,$.data)):e.texImage3D(s.TEXTURE_3D,0,ht,$.width,$.height,$.depth,0,rt,wt,$.data);else if(x.isFramebufferTexture){if(Ot)if(Ct)e.texStorage2D(s.TEXTURE_2D,ot,ht,$.width,$.height);else{let j=$.width,ct=$.height;for(let ft=0;ft<ot;ft++)e.texImage2D(s.TEXTURE_2D,ft,ht,j,ct,0,rt,wt,null),j>>=1,ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),$.parentNode!==j){j.appendChild($),d.add(x),j.onpaint=ct=>{let ft=ct.changedElements;for(let nt of d)ft.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let ft=s.RGBA,nt=s.RGBA,At=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ft,nt,At,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Ct&&Ot){let j=te(Et[0]);e.texStorage2D(s.TEXTURE_2D,ot,ht,j.width,j.height)}for(let j=0,ct=Et.length;j<ct;j++)at=Et[j],Ct?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,rt,wt,at):e.texImage2D(s.TEXTURE_2D,j,ht,rt,wt,at);x.generateMipmaps=!1}else if(Ct){if(Ot){let j=te($);e.texStorage2D(s.TEXTURE_2D,ot,ht,j.width,j.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,wt,$)}else e.texImage2D(s.TEXTURE_2D,0,ht,rt,wt,$);m(x)&&M(H),st.__version=it.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Dt(R,x,k){if(x.image.length!==6)return;let H=jt(R,x),Y=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let it=n.get(Y);if(Y.version!==it.__version||H===!0){e.activeTexture(s.TEXTURE0+k);let st=Bt.getPrimaries(Bt.workingColorSpace),Z=x.colorSpace===Ni?null:Bt.getPrimaries(x.colorSpace),$=x.colorSpace===Ni||st===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let rt=x.isCompressedTexture||x.image[0].isCompressedTexture,wt=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!rt&&!wt?ht[nt]=p(x.image[nt],!0,i.maxCubemapSize):ht[nt]=wt?x.image[nt].image:x.image[nt],ht[nt]=qe(x,ht[nt]);let at=ht[0],Et=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Ot=v(x.internalFormat,Et,Ct,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ot=it.__version===void 0||H===!0,j=Y.dataReady,ct=T(x,at);Ut(s.TEXTURE_CUBE_MAP,x);let ft;if(rt){N&&ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ot,at.width,at.height);for(let nt=0;nt<6;nt++){ft=ht[nt].mipmaps;for(let At=0;At<ft.length;At++){let bt=ft[At];x.format!==Cn?Et!==null?N?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Ot,bt.width,bt.height,0,bt.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,bt.width,bt.height,Et,Ct,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Ot,bt.width,bt.height,0,Et,Ct,bt.data)}}}else{if(ft=x.mipmaps,N&&ot){ft.length>0&&ct++;let nt=te(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(wt){N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,Et,Ct,ht[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,ht[nt].width,ht[nt].height,0,Et,Ct,ht[nt].data);for(let At=0;At<ft.length;At++){let le=ft[At].image[nt].image;N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,le.width,le.height,Et,Ct,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Ot,le.width,le.height,0,Et,Ct,le.data)}}else{N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et,Ct,ht[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Et,Ct,ht[nt]);for(let At=0;At<ft.length;At++){let bt=ft[At];N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Et,Ct,bt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Ot,Et,Ct,bt.image[nt])}}}m(x)&&M(s.TEXTURE_CUBE_MAP),it.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function mt(R,x,k,H,Y,it){let st=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),$=v(k.internalFormat,st,Z,k.normalized,k.colorSpace),rt=n.get(x),wt=n.get(k);if(wt.__renderTarget=x,!rt.__hasExternalTextures){let ht=Math.max(1,x.width>>it),at=Math.max(1,x.height>>it);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,$,ht,at,x.depth,0,st,Z,null):e.texImage2D(Y,it,$,ht,at,0,st,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,Y,wt.__webglTexture,0,me(x)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,Y,wt.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),x.depthBuffer){let H=x.depthTexture,Y=H&&H.isDepthTexture?H.type:null,it=b(x.stencilBuffer,Y),st=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Re(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me(x),it,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,me(x),it,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,it,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,R)}else{let H=x.textures;for(let Y=0;Y<H.length;Y++){let it=H[Y],st=r.convert(it.format,it.colorSpace),Z=r.convert(it.type),$=v(it.internalFormat,st,Z,it.normalized,it.colorSpace);Re(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me(x),$,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,me(x),$,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(R,x,k){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,x.depthTexture);let rt=r.convert(x.depthTexture.format),wt=r.convert(x.depthTexture.type),ht;x.depthTexture.format===ri?ht=s.DEPTH_COMPONENT24:x.depthTexture.format===as&&(ht=s.DEPTH24_STENCIL8);for(let at=0;at<6;at++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ht,x.width,x.height,0,rt,wt,null)}}else Q(x.depthTexture,0);let it=Y.__webglTexture,st=me(x),Z=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,$=x.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ri)Re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,it,0);else if(x.depthTexture.format===as)Re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(R){let x=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=H}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)Le(x.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?Le(x.__webglFramebuffer[0],R,0):Le(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=s.createRenderbuffer(),Vt(x.__webglDepthbuffer[H],R,!1);else{let Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,it)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Vt(x.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,it)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(R,x,k){let H=n.get(R);x!==void 0&&mt(H.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Gt(R)}function he(R){let x=R.texture,k=n.get(R),H=n.get(x);R.addEventListener("dispose",y);let Y=R.textures,it=R.isWebGLCubeRenderTarget===!0,st=Y.length>1;if(st||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=x.version,a.memory.textures++),it){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[Z][$]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(st)for(let Z=0,$=Y.length;Z<$;Z++){let rt=n.get(Y[Z]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Re(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let $=Y[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let rt=r.convert($.format,$.colorSpace),wt=r.convert($.type),ht=v($.internalFormat,rt,wt,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),at=me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,ht,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)mt(k.__webglFramebuffer[Z][$],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else mt(k.__webglFramebuffer[Z],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(x)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Z=0,$=Y.length;Z<$;Z++){let rt=Y[Z],wt=n.get(rt),ht=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,wt.__webglTexture),Ut(ht,rt),mt(k.__webglFramebuffer,R,rt,s.COLOR_ATTACHMENT0+Z,ht,0),m(rt)&&M(ht)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),Ut(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)mt(k.__webglFramebuffer[$],R,x,s.COLOR_ATTACHMENT0,Z,$);else mt(k.__webglFramebuffer,R,x,s.COLOR_ATTACHMENT0,Z,0);m(x)&&M(Z),e.unbindTexture()}R.depthBuffer&&Gt(R)}function qt(R){let x=R.textures;for(let k=0,H=x.length;k<H;k++){let Y=x[k];if(m(Y)){let it=A(R),st=n.get(Y).__webglTexture;e.bindTexture(it,st),M(it),e.unbindTexture()}}}let fe=[],Ve=[];function ln(R){if(R.samples>0){if(Re(R)===!1){let x=R.textures,k=R.width,H=R.height,Y=s.COLOR_BUFFER_BIT,it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=n.get(R),Z=x.length>1;if(Z)for(let rt=0;rt<x.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let wt=n.get(x[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,k,H,0,0,k,H,Y,s.NEAREST),c===!0&&(fe.length=0,Ve.length=0,fe.push(s.COLOR_ATTACHMENT0+rt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(fe.push(it),Ve.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let rt=0;rt<x.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let wt=n.get(x[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let x=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function me(R){return Math.min(i.maxSamples,R.samples)}function Re(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){let x=a.render.frame;l.get(R)!==x&&(l.set(R,x),R.update())}function qe(R,x){let k=R.colorSpace,H=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==rn&&k!==Ni&&(Bt.getTransfer(k)===Qt?(H!==Cn||Y!==gn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",k)),x}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zv(s,t){function e(n,i=Ni){let r,a=Bt.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===mc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return s.BYTE;if(n===Pl)return s.SHORT;if(n===Dr)return s.UNSIGNED_SHORT;if(n===pc)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===ti)return s.HALF_FLOAT;if(n===Dl)return s.ALPHA;if(n===Nl)return s.RGB;if(n===Cn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===_c)return s.RED;if(n===yc)return s.RED_INTEGER;if(n===os)return s.RG;if(n===xc)return s.RG_INTEGER;if(n===vc)return s.RGBA_INTEGER;if(n===Oa||n===Fa||n===ka||n===Ba)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Sc||n===Mc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ec||n===Ac||n===Rc||n===Cc||n===za||n===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ec)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rc)return r.COMPRESSED_R11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===kc||n===Bc||n===zc||n===Vc||n===Hc||n===Gc||n===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xc)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Zc||n===Va||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:jv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends Zn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new nu,m={},M=e.getContextAttributes(),A=null,v=null,b=[],T=[],E=new Rt,y=null,w=null,C=new Ie;C.viewport=new ne;let L=new Ie;L.viewport=new ne;let F=[C,L],O=new hc,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getHandSpace()};function X(K){let tt=T.indexOf(K.inputSource);if(tt===-1)return;let _t=b[tt];_t!==void 0&&(_t.update(K.inputSource,K.frame,h||a),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Q);for(let K=0;K<b.length;K++){let tt=T[K];tt!==null&&(T[K]=null,b[K].disconnect(tt))}P=null,B=null,p.reset();for(let K in m)delete m[K];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,v=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Dt=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=M.stencil?as:ri,Dt=M.stencil?Nr:Qn);let Vt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new dn(u.textureWidth,u.textureHeight,{format:Cn,type:gn,depthTexture:new Qi(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new dn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(K){for(let tt=0;tt<K.removed.length;tt++){let _t=K.removed[tt],Dt=T.indexOf(_t);Dt>=0&&(T[Dt]=null,b[Dt].disconnect(_t))}for(let tt=0;tt<K.added.length;tt++){let _t=K.added[tt],Dt=T.indexOf(_t);if(Dt===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=T.length){T.push(_t),Dt=Vt;break}else if(T[Vt]===null){T[Vt]=_t,Dt=Vt;break}if(Dt===-1)break}let mt=b[Dt];mt&&mt.connect(_t)}}let q=new I,J=new I;function et(K,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);let Dt=q.distanceTo(J),mt=tt.projectionMatrix.elements,Vt=_t.projectionMatrix.elements,Le=mt[14]/(mt[10]-1),Gt=mt[14]/(mt[10]+1),Zt=(mt[9]+1)/mt[5],he=(mt[9]-1)/mt[5],qt=(mt[8]-1)/mt[0],fe=(Vt[8]+1)/Vt[0],Ve=Le*qt,ln=Le*fe,me=Dt/(-qt+fe),Re=me*-qt;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),mt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let U=Le+me,qe=Gt+me,te=Ve-Re,R=ln+(Dt-Re),x=Zt*Gt/qe*U,k=he*Gt/qe*U;K.projectionMatrix.makePerspective(te,R,x,k,U,qe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let tt=K.near,_t=K.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),O.near=L.near=C.near=tt,O.far=L.far=C.far=_t,(P!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,B=O.far),O.layers.mask=K.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Dt=K.parent,mt=O.cameras;vt(O,Dt);for(let Vt=0;Vt<mt.length;Vt++)vt(mt[Vt],Dt);mt.length===2?et(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),St(K,O,Dt)};function St(K,tt,_t){_t===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Es*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return m[K]};let Xt=null;function Ut(K,tt){if(l=tt.getViewerPose(h||a),g=tt,l!==null){let _t=l.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Dt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Gt=0;Gt<_t.length;Gt++){let Zt=_t[Gt],he=null;if(f!==null)he=f.getViewport(Zt);else{let fe=d.getViewSubImage(u,Zt);he=fe.viewport,Gt===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let qt=F[Gt];qt===void 0&&(qt=new Ie,qt.layers.enable(Gt),qt.viewport=new ne,F[Gt]=qt),qt.matrix.fromArray(Zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(he.x,he.y,he.width,he.height),Gt===0&&(O.matrix.copy(qt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(qt)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Gt=d.getDepthInformation(_t[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Gt=0;Gt<_t.length;Gt++){let Zt=_t[Gt].camera;if(Zt){let he=m[Zt];he||(he=new ba,m[Zt]=he);let qt=d.getCameraImage(Zt);he.sourceTexture=qt}}}}for(let _t=0;_t<b.length;_t++){let Dt=T[_t],mt=b[_t];Dt!==null&&mt!==void 0&&mt.update(Dt,tt,h||a)}Xt&&Xt(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let jt=new Lp;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(K){Xt=K},this.dispose=function(){}}},$v=new Nt,kp=new Lt;kp.set(-1,0,0,0,1,0,0,0,1);function Qv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bl(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),l(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,A):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),A=M.envMap,v=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tb(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function h(v,b){let T=i[v.id];T===void 0&&(p(v),T=l(v),i[v.id]=T,v.addEventListener("dispose",M));let E=b.program;n.updateUBOMapping(v,E);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function l(v){let b=d();v.__bindingPointIndex=b;let T=s.createBuffer(),E=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=i[v.id],T=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,w=T.length;y<w;y++){let C=T[y];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)f(C[L],y,L,E);else f(C,y,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,T,E){if(_(v,b,T,E)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let L=0;L<w.length;L++){let F=w[L],O=m(F);g(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function _(v,b,T,E){let y=v.value,w=b+"_"+T;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{let C=E[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function p(v){let b=v.uniforms,T=0,E=16;for(let w=0,C=b.length;w<C;w++){let L=Array.isArray(b[w])?b[w]:[b[w]];for(let F=0,O=L.length;F<O;F++){let P=L[F],B=Array.isArray(P.value)?P.value:[P.value];for(let X=0,G=B.length;X<G;X++){let Q=B[X],q=m(Q),J=T%E,et=J%q.boundary,vt=J+et;T+=et,vt!==0&&E-vt<q.storage&&(T+=E-vt),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=q.storage}}}let y=T%E;return y>0&&(T+=E-y),v.__size=T,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function A(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:h,dispose:A}}var eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function nb(){return ui===null&&(ui=new Sr(eb,16,16,os,ti),ui.name="DFG_LUT",ui.minFilter=we,ui.magFilter=we,ui.wrapS=On,ui.wrapT=On,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var sh=class{constructor(t={}){let{canvas:e=ip(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=gn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([vc,xc,yc]),m=new Set([gn,Qn,Dr,Nr,mc,gc]),M=new Uint32Array(4),A=new Int32Array(4),v=new I,b=null,T=null,E=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,O=null,P=null,B=null;this._outputColorSpace=De;let X=0,G=0,Q=null,q=-1,J=null,et=new ne,vt=new ne,St=null,Xt=new Pt(0),Ut=0,jt=e.width,K=e.height,tt=1,_t=null,Dt=null,mt=new ne(0,0,jt,K),Vt=new ne(0,0,jt,K),Le=!1,Gt=new Mr,Zt=!1,he=!1,qt=new Nt,fe=new I,Ve=new ne,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Re(){return Q===null?tt:1}let U=n;function qe(S,D){return e.getContext(S,D)}let te,R,x,k,H,Y,it,st,Z,$,rt,wt,ht,at,Et,Ct,Ot,N,ot,j,ct,ft,nt;try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),U===null){let D="webgl2";if(U=qe(D,S),U===null)throw qe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(S){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),It("WebGLRenderer: "+S.message),S}function At(){te=new hx(U),te.init(),ct=new Zv(U,te),R=new Qy(U,te,t,ct),x=new Yv(U,te),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=U.createFramebuffer(),P=U.createFramebuffer(),B=U.createFramebuffer(),k=new dx(U),H=new Dv,Y=new Kv(U,te,x,H,R,ct,k),it=new cx(C),st=new p_(U),ft=new Jy(U,st),Z=new lx(U,st,k,ft),$=new px(U,Z,st,ft,k),N=new fx(U,R,Y),Et=new tx(H),rt=new Lv(C,it,te,R,ft,Et),wt=new Qv(C,H),ht=new Uv,at=new Vv(te),Ot=new jy(C,it,x,$,g,c),Ct=new qv(C,$,R),nt=new tb(U,k,R,x),ot=new $y(U,te,k),j=new ux(U,te,k),k.programs=rt.programs,C.capabilities=R,C.extensions=te,C.properties=H,C.renderLists=ht,C.shadowMap=Ct,C.state=x,C.info=k}_!==gn&&(w=new gx(_,e.width,e.height,o,i,r));let bt=new iu(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(jt,K,!1))},this.getSize=function(S){return S.set(jt,K)},this.setSize=function(S,D,W=!0){if(bt.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=S,K=D,e.width=Math.floor(S*tt),e.height=Math.floor(D*tt),W===!0&&(e.style.width=S+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(jt*tt,K*tt).floor()},this.setDrawingBufferSize=function(S,D,W){jt=S,K=D,tt=W,e.width=Math.floor(S*W),e.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===gn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,D,W,z){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,D,W,z),x.viewport(et.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,D,W,z){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,D,W,z),x.scissor(vt.copy(Vt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(S){x.setScissorTest(Le=S)},this.setOpaqueSort=function(S){_t=S},this.setTransparentSort=function(S){Dt=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let z=0;if(S){let V=!1;if(Q!==null){let dt=Q.texture.format;V=p.has(dt)}if(V){let dt=Q.texture.type,gt=m.has(dt),ut=Ot.getClearColor(),yt=Ot.getClearAlpha(),Mt=ut.r,Ft=ut.g,Wt=ut.b;gt?(M[0]=Mt,M[1]=Ft,M[2]=Wt,M[3]=yt,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Mt,A[1]=Ft,A[2]=Wt,A[3]=yt,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),Ot.dispose(),ht.dispose(),at.dispose(),H.dispose(),it.dispose(),$.dispose(),ft.dispose(),nt.dispose(),rt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Cd),bt.removeEventListener("sessionend",Pd),ys.stop()};function le(S){S.preventDefault(),ca("WebGLRenderer: Context Lost."),L=!0}function Jt(){ca("WebGLRenderer: Context Restored."),L=!1;let S=k.autoReset,D=Ct.enabled,W=Ct.autoUpdate,z=Ct.needsUpdate,V=Ct.type;At(),k.autoReset=S,Ct.enabled=D,Ct.autoUpdate=W,Ct.needsUpdate=z,Ct.type=V}function Hn(S){It("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ei(S){let D=S.target;D.removeEventListener("dispose",ei),ig(D)}function ig(S){sg(S),H.remove(S)}function sg(S){let D=H.get(S).programs;D!==void 0&&(D.forEach(function(W){rt.releaseProgram(W)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,z,V,dt){D===null&&(D=ln);let gt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ut=og(S,D,W,z,V);x.setMaterial(z,gt);let yt=W.index,Mt=1;if(z.wireframe===!0){if(yt=Z.getWireframeAttribute(W),yt===void 0)return;Mt=2}let Ft=W.drawRange,Wt=W.attributes.position,xt=Ft.start*Mt,$t=(Ft.start+Ft.count)*Mt;dt!==null&&(xt=Math.max(xt,dt.start*Mt),$t=Math.min($t,(dt.start+dt.count)*Mt)),yt!==null?(xt=Math.max(xt,0),$t=Math.min($t,yt.count)):Wt!=null&&(xt=Math.max(xt,0),$t=Math.min($t,Wt.count));let Ce=$t-xt;if(Ce<0||Ce===1/0)return;ft.setup(V,z,ut,W,yt);let de,re=ot;if(yt!==null&&(de=st.get(yt),re=j,re.setIndex(de)),V.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Re()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(V.isLine){let Ye=z.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*Re()),V.isLineSegments?re.setMode(U.LINES):V.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else V.isPoints?re.setMode(U.POINTS):V.isSprite&&re.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ye=V._multiDrawStarts,pt=V._multiDrawCounts,en=V._multiDrawCount,Kt=yt?st.get(yt).bytesPerElement:1,Nn=H.get(z).currentProgram.getUniforms();for(let ni=0;ni<en;ni++)Nn.setValue(U,"_gl_DrawID",ni),re.render(Ye[ni]/Kt,pt[ni])}else if(V.isInstancedMesh)re.renderInstances(xt,Ce,V.count);else if(W.isInstancedBufferGeometry){let Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pt=Math.min(W.instanceCount,Ye);re.renderInstances(xt,Ce,pt)}else re.render(xt,Ce)};function Rd(S,D,W,z){F!==null&&S.isNodeMaterial&&F.setObject(z,S),Zt===!0&&Et.setState(S,W,!1),S.transparent===!0&&S.side===Fn&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,ho(S,D,z),S.side=hi,S.needsUpdate=!0,ho(S,D,z),S.side=Fn):ho(S,D,z)}this.compile=function(S,D,W=null){W===null&&(W=S),F!==null&&F.renderStart(S,D,W),T=at.get(W),T.init(D),y.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),he=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,he),Zt===!0&&Et.setGlobalState(this.clippingPlanes,D),F!==null&&Ct.render(T.state.shadowsArray,W,D);let z=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let dt=V.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ut=dt[gt];Rd(ut,W,D,V),z.add(ut)}else Rd(dt,W,D,V),z.add(dt)}),T=y.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(S,D,W=null){let z=this.compile(S,D,W);return new Promise(V=>{function dt(){if(z.forEach(function(gt){let yt=H.get(gt).currentProgram;(yt===void 0||yt.isReady())&&z.delete(gt)}),z.size===0){V(S);return}setTimeout(dt,10)}te.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ih=null;function rg(S){Ih&&Ih(S)}function Cd(){ys.stop()}function Pd(){ys.start()}let ys=new Lp;ys.setAnimationLoop(rg),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(S){Ih=S,bt.setAnimationLoop(S),S===null?ys.stop():ys.start()},bt.addEventListener("sessionstart",Cd),bt.addEventListener("sessionend",Pd),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,D);let W=bt.enabled===!0&&bt.isPresenting===!0,z=w!==null&&(Q===null||W)&&w.begin(C,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,Q),T=at.get(S,y.length),T.init(D),T.state.textureUnits=Y.getTextureUnits(),y.push(T),qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Gt.setFromProjectionMatrix(qt,Yn,D.reversedDepth),he=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,he),b=ht.get(S,E.length),b.init(),E.push(b),bt.enabled===!0&&bt.isPresenting===!0){let gt=C.xr.getDepthSensingMesh();gt!==null&&Lh(gt,D,-1/0,C.sortObjects)}Lh(S,D,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(_t,Dt),me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,me&&Ot.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Et.beginShadows();let V=T.state.shadowsArray;if(Ct.render(V,S,D),Zt===!0&&Et.endShadows(),(z&&w.hasRenderPass())===!1){let gt=b.opaque,ut=b.transmissive;if(T.setupLights(),D.isArrayCamera){let yt=D.cameras;if(ut.length>0)for(let Mt=0,Ft=yt.length;Mt<Ft;Mt++){let Wt=yt[Mt];Ld(gt,ut,S,Wt)}me&&Ot.render(S);for(let Mt=0,Ft=yt.length;Mt<Ft;Mt++){let Wt=yt[Mt];Id(b,S,Wt,Wt.viewport)}}else ut.length>0&&Ld(gt,ut,S,D),me&&Ot.render(S),Id(b,S,D)}Q!==null&&G===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),z&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),ft.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(T=y[y.length-1],Y.setTextureUnits(T.state.textureUnits),Zt===!0&&Et.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,F!==null&&F.renderEnd()};function Lh(S,D,W,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Gt)){z&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qt);let gt=$.update(S),ut=S.material;ut.visible&&b.push(S,gt,ut,W,Ve.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Gt))){let gt=$.update(S),ut=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ve.copy(gt.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(qt)),Array.isArray(ut)){let yt=gt.groups;for(let Mt=0,Ft=yt.length;Mt<Ft;Mt++){let Wt=yt[Mt],xt=ut[Wt.materialIndex];xt&&xt.visible&&b.push(S,gt,xt,W,Ve.z,Wt,D)}}else ut.visible&&b.push(S,gt,ut,W,Ve.z,null,D)}}let dt=S.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Lh(dt[gt],D,W,z)}function Id(S,D,W,z){let{opaque:V,transmissive:dt,transparent:gt}=S;T.setupLightsView(W),Zt===!0&&Et.setGlobalState(C.clippingPlanes,W),z&&x.viewport(et.copy(z)),V.length>0&&co(V,D,W),dt.length>0&&co(dt,D,W),gt.length>0&&co(gt,D,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ld(S,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let xt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new dn(1,1,{generateMipmaps:!0,type:xt?ti:gn,minFilter:$n,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[z.id],gt=z.viewport||et;dt.setSize(gt.z*C.transmissionResolutionScale,gt.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),yt=C.getActiveCubeFace(),Mt=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor(Xt),Ut=C.getClearAlpha(),Ut<1&&C.setClearColor(16777215,.5),C.clear(),me&&Ot.render(W);let Ft=C.toneMapping;C.toneMapping=Jn;let Wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Zt===!0&&Et.setGlobalState(C.clippingPlanes,z),co(S,W,z),Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt),te.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let $t=0,Ce=D.length;$t<Ce;$t++){let de=D[$t],{object:re,geometry:Ye,material:pt,group:en}=de;if(pt.side===Fn&&re.layers.test(z.layers)){let Kt=pt.side;pt.side=on,pt.needsUpdate=!0,Dd(re,W,z,Ye,pt,en),pt.side=Kt,pt.needsUpdate=!0,xt=!0}}xt===!0&&(Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt))}C.setRenderTarget(ut,yt,Mt),C.setClearColor(Xt,Ut),Wt!==void 0&&(z.viewport=Wt),C.toneMapping=Ft}function co(S,D,W){let z=D.isScene===!0?D.overrideMaterial:null;for(let V=0,dt=S.length;V<dt;V++){let gt=S[V],{object:ut,geometry:yt,group:Mt}=gt,Ft=gt.material;Ft.allowOverride===!0&&z!==null&&(Ft=z),ut.layers.test(W.layers)&&Dd(ut,D,W,yt,Ft,Mt)}}function Dd(S,D,W,z,V,dt){F!==null&&V.isNodeMaterial&&F.setObject(S,V),S.onBeforeRender(C,D,W,z,V,dt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,D,W,z,S,dt),V.transparent===!0&&V.side===Fn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,C.renderBufferDirect(W,D,z,V,S,dt),V.side=hi,V.needsUpdate=!0,C.renderBufferDirect(W,D,z,V,S,dt),V.side=Fn):C.renderBufferDirect(W,D,z,V,S,dt),S.onAfterRender(C,D,W,z,V,dt)}function ho(S,D,W){D.isScene!==!0&&(D=ln);let z=H.get(S),V=T.state.lights,dt=T.state.shadowsArray,gt=V.state.version,ut=rt.getParameters(S,V.state,dt,D,W,T.state.lightProbeGridArray),yt=rt.getProgramCacheKey(ut),Mt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Ft=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=it.get(S.envMap||z.environment,Ft),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Mt===void 0&&(S.addEventListener("dispose",ei),Mt=new Map,z.programs=Mt);let Wt=Mt.get(yt);if(Wt!==void 0){if(z.currentProgram===Wt&&z.lightsStateVersion===gt)return Ud(S,ut),Wt}else ut.uniforms=rt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,W,ut),S.onBeforeCompile(ut,C),Wt=rt.acquireProgram(ut,yt),Mt.set(yt,Wt),z.uniforms=ut.uniforms;let xt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xt.clippingPlanes=Et.uniform),Ud(S,ut),z.needsLights=hg(S),z.lightsStateVersion=gt,z.needsLights&&(xt.ambientLightColor.value=V.state.ambient,xt.lightProbe.value=V.state.probe,xt.sunLights.value=V.state.sun,xt.sunLightShadows.value=V.state.sunShadow,xt.directionalLights.value=V.state.directional,xt.directionalLightShadows.value=V.state.directionalShadow,xt.spotLights.value=V.state.spot,xt.spotLightShadows.value=V.state.spotShadow,xt.rectAreaLights.value=V.state.rectArea,xt.ltc_1.value=V.state.rectAreaLTC1,xt.ltc_2.value=V.state.rectAreaLTC2,xt.pointLights.value=V.state.point,xt.pointLightShadows.value=V.state.pointShadow,xt.hemisphereLights.value=V.state.hemi,xt.sunShadowMatrix.value=V.state.sunShadowMatrix,xt.sunShadowCascade.value=V.state.sunShadowCascade,xt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,xt.spotLightMatrix.value=V.state.spotLightMatrix,xt.spotLightMap.value=V.state.spotLightMap,xt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Wt,z.uniformsList=null,Wt}function Nd(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=kr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ud(S,D){let W=H.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function ag(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=S.length;W<z;W++){let V=S[W];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function og(S,D,W,z,V){D.isScene!==!0&&(D=ln),Y.resetTextureUnits();let dt=D.fog,gt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ut=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Bt.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Mt=it.get(z.envMap||gt,yt),Ft=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,Ce=!!W.morphAttributes.color,de=Jn;z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(de=C.toneMapping);let re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=re!==void 0?re.length:0,pt=H.get(z),en=T.state.lights;if(Zt===!0&&(he===!0||S!==J)){let ue=S===J&&z.id===q;Et.setState(z,S,ue)}let Kt=!1;z.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==en.state.version||pt.outputColorSpace!==ut||V.isBatchedMesh&&pt.batching===!1||!V.isBatchedMesh&&pt.batching===!0||V.isBatchedMesh&&pt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&pt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&pt.instancing===!1||!V.isInstancedMesh&&pt.instancing===!0||V.isSkinnedMesh&&pt.skinning===!1||!V.isSkinnedMesh&&pt.skinning===!0||V.isInstancedMesh&&pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&pt.instancingMorph===!1&&V.morphTexture!==null||pt.envMap!==Mt||z.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Et.numPlanes||pt.numIntersection!==Et.numIntersection)||pt.vertexAlphas!==Ft||pt.vertexTangents!==Wt||pt.morphTargets!==xt||pt.morphNormals!==$t||pt.morphColors!==Ce||pt.toneMapping!==de||pt.morphTargetsCount!==Ye||!!pt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,pt.__version=z.version);let Nn=pt.currentProgram;Kt===!0&&(Nn=ho(z,D,V),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Nn,pt));let ni=!1,Vi=!1,Ks=!1,se=Nn.getUniforms(),Me=pt.uniforms;if(x.useProgram(Nn.program)&&(ni=!0,Vi=!0,Ks=!0),z.id!==q&&(q=z.id,Vi=!0),pt.needsLights){let ue=ag(T.state.lightProbeGridArray,V);pt.lightProbeGrid!==ue&&(pt.lightProbeGrid=ue,Vi=!0)}if(ni||J!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),se.setValue(U,"projectionMatrix",S.projectionMatrix),se.setValue(U,"viewMatrix",S.matrixWorldInverse);let Gi=se.map.cameraPosition;Gi!==void 0&&Gi.setValue(U,fe.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&se.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Vi=!0,Ks=!0)}if(pt.needsLights&&(en.state.sunShadowMap.length>0&&se.setValue(U,"sunShadowMap",en.state.sunShadowMap,Y),en.state.directionalShadowMap.length>0&&se.setValue(U,"directionalShadowMap",en.state.directionalShadowMap,Y),en.state.spotShadowMap.length>0&&se.setValue(U,"spotShadowMap",en.state.spotShadowMap,Y),en.state.pointShadowMap.length>0&&se.setValue(U,"pointShadowMap",en.state.pointShadowMap,Y)),V.isSkinnedMesh){se.setOptional(U,V,"bindMatrix"),se.setOptional(U,V,"bindMatrixInverse");let ue=V.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),se.setValue(U,"boneTexture",ue.boneTexture,Y))}V.isBatchedMesh&&(se.setOptional(U,V,"batchingTexture"),se.setValue(U,"batchingTexture",V._matricesTexture,Y),se.setOptional(U,V,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",V._indirectTexture,Y),se.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",V._colorsTexture,Y));let Hi=W.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&N.update(V,W,Nn),(Vi||pt.receiveShadow!==V.receiveShadow)&&(pt.receiveShadow=V.receiveShadow,se.setValue(U,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Me.envMapIntensity.value=D.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=nb()),Vi){if(se.setValue(U,"toneMappingExposure",C.toneMappingExposure),pt.needsLights&&cg(Me,Ks),dt&&z.fog===!0&&wt.refreshFogUniforms(Me,dt),wt.refreshMaterialUniforms(Me,z,tt,K,T.state.transmissionRenderTarget[S.id]),pt.needsLights&&pt.lightProbeGrid){let ue=pt.lightProbeGrid;Me.probesSH.value=ue.texture,Me.probesMin.value.copy(ue.boundingBox.min),Me.probesMax.value.copy(ue.boundingBox.max),Me.probesResolution.value.copy(ue.resolution)}kr.upload(U,Nd(pt),Me,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kr.upload(U,Nd(pt),Me,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&se.setValue(U,"center",V.center),se.setValue(U,"modelViewMatrix",V.modelViewMatrix),se.setValue(U,"normalMatrix",V.normalMatrix),se.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let ue=z.uniformsGroups;for(let Gi=0,Zs=ue.length;Gi<Zs;Gi++){let Fd=ue[Gi];nt.update(Fd,Nn),nt.bind(Fd,Nn)}}return Nn}function cg(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function hg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,D,W){let z=H.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=D,H.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let W=H.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){Q=S,X=D,G=W;let z=null,V=!1,dt=!1;if(S){let ut=H.get(S);if(ut.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(S.viewport),vt.copy(S.scissor),St=S.scissorTest,x.viewport(et),x.scissor(vt),x.setScissorTest(St),q=-1;return}else if(ut.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ut.__hasExternalTextures)Y.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ft=S.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&H.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(dt=!0);let Mt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Mt[D])?z=Mt[D][W]:z=Mt[D],V=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?z=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Mt)?z=Mt[W]:z=Mt,et.copy(S.viewport),vt.copy(S.scissor),St=S.scissorTest}else et.copy(mt).multiplyScalar(tt).floor(),vt.copy(Vt).multiplyScalar(tt).floor(),St=Le;if(W!==0&&(z=O),x.bindFramebuffer(U.FRAMEBUFFER,z)&&x.drawBuffers(S,z),x.viewport(et),x.scissor(vt),x.setScissorTest(St),V){let ut=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,W)}else if(dt){let ut=D;for(let yt=0;yt<S.textures.length;yt++){let Mt=H.get(S.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,Mt.__webglTexture,W,ut)}}else if(S!==null&&W!==0){let ut=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,W)}q=-1};function Od(S){let D=H.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=R.textureFormatReadable(S.format),D.__typeReadable=R.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,z,V,dt,gt,ut=0){if(!(S&&S.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt){x.bindFramebuffer(U.FRAMEBUFFER,yt);try{let Mt=S.textures[ut],Ft=Mt.format,Wt=Mt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ut);let xt=Od(Mt);if(xt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&W>=0&&W<=S.height-V&&U.readPixels(D,W,z,V,ct.convert(Ft),ct.convert(Wt),dt)}finally{let Mt=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,z,V,dt,gt,ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt)if(D>=0&&D<=S.width-z&&W>=0&&W<=S.height-V){x.bindFramebuffer(U.FRAMEBUFFER,yt);let Mt=S.textures[ut],Ft=Mt.format,Wt=Mt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ut);let xt=Od(Mt);if(xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(D,W,z,V,ct.convert(Ft),ct.convert(Wt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ce=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ce);let de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rp(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($t),U.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){let z=Math.pow(2,-W),V=Math.floor(S.image.width*z),dt=Math.floor(S.image.height*z),gt=D!==null?D.x:0,ut=D!==null?D.y:0;Y.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,gt,ut,V,dt),x.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,z=null,V=0,dt=0){let gt,ut,yt,Mt,Ft,Wt,xt,$t,Ce,de=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(W!==null)gt=W.max.x-W.min.x,ut=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Ft=W.min.y,Wt=W.isBox3?W.min.z:0;else{let Me=Math.pow(2,-V);gt=Math.floor(de.width*Me),ut=Math.floor(de.height*Me),S.isDataArrayTexture?yt=de.depth:S.isData3DTexture?yt=Math.floor(de.depth*Me):yt=1,Mt=0,Ft=0,Wt=0}z!==null?(xt=z.x,$t=z.y,Ce=z.z):(xt=0,$t=0,Ce=0);let re=ct.convert(D.format),Ye=ct.convert(D.type),pt;D.isData3DTexture?(Y.setTexture3D(D,0),pt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),pt=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),pt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let en=x.getParameter(U.UNPACK_ROW_LENGTH),Kt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Nn=x.getParameter(U.UNPACK_SKIP_PIXELS),ni=x.getParameter(U.UNPACK_SKIP_ROWS),Vi=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);let Ks=S.isDataArrayTexture||S.isData3DTexture,se=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Me=H.get(S),Hi=H.get(D),ue=H.get(Me.__renderTarget),Gi=H.get(Hi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,ue.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Zs=0;Zs<yt;Zs++)Ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(S).__webglTexture,V,Wt+Zs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,dt,Ce+Zs)),U.blitFramebuffer(Mt,Ft,gt,ut,xt,$t,gt,ut,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||H.has(S)){let Me=H.get(S),Hi=H.get(D);x.bindFramebuffer(U.READ_FRAMEBUFFER,P),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let ue=0;ue<yt;ue++)Ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,V,Wt+ue):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,V),se?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hi.__webglTexture,dt,Ce+ue):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hi.__webglTexture,dt),V!==0?U.blitFramebuffer(Mt,Ft,gt,ut,xt,$t,gt,ut,U.COLOR_BUFFER_BIT,U.NEAREST):se?U.copyTexSubImage3D(pt,dt,xt,$t,Ce+ue,Mt,Ft,gt,ut):U.copyTexSubImage2D(pt,dt,xt,$t,Mt,Ft,gt,ut);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else se?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(pt,dt,xt,$t,Ce,gt,ut,yt,re,Ye,de.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(pt,dt,xt,$t,Ce,gt,ut,yt,re,de.data):U.texSubImage3D(pt,dt,xt,$t,Ce,gt,ut,yt,re,Ye,de):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,xt,$t,gt,ut,re,Ye,de.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,xt,$t,de.width,de.height,re,de.data):U.texSubImage2D(U.TEXTURE_2D,dt,xt,$t,gt,ut,re,Ye,de);x.pixelStorei(U.UNPACK_ROW_LENGTH,en),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Nn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ni),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Vi),dt===0&&D.generateMipmaps&&U.generateMipmap(pt),x.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){X=0,G=0,Q=null,x.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};function su(s,t){if(t===Ul)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ur||t===Ha){let e=s.getIndex();if(e===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Ur)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function zp(s){let t=new Map,e=new Map,n=s.clone();return Vp(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vp(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Vp(s.children[n],t.children[n],e)}var oh=class extends ci{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new uu(e)}),this.register(function(e){return new du(e)}),this.register(function(e){return new bu(e)}),this.register(function(e){return new Su(e)}),this.register(function(e){return new Mu(e)}),this.register(function(e){return new pu(e)}),this.register(function(e){return new mu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new _u(e)}),this.register(function(e){return new lu(e)}),this.register(function(e){return new yu(e)}),this.register(function(e){return new fu(e)}),this.register(function(e){return new vu(e)}),this.register(function(e){return new xu(e)}),this.register(function(e){return new cu(e)}),this.register(function(e){return new ch(e,Ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new ch(e,Ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Tu(e)})}load(t,e,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let h=Di.extractUrlBase(t);a=Di.resolveURL(h,this.path)}else a=Di.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){i?i(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Er(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{r.parse(h,a,function(l){e(l),r.manager.itemEnd(t)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===qp){try{a[Ht.KHR_BINARY_GLTF]=new wu(t)}catch(d){i&&i(d);return}r=JSON.parse(a[Ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Lu(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let d=this.pluginCallbacks[l](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let d=r.extensionsUsed[l],u=r.extensionsRequired||[];switch(d){case Ht.KHR_MATERIALS_UNLIT:a[d]=new hu;break;case Ht.KHR_DRACO_MESH_COMPRESSION:a[d]=new Eu(r,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:a[d]=new Au;break;case Ht.KHR_MESH_QUANTIZATION:a[d]=new Ru;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function ib(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Ee(s,t,e){let n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cu=class{constructor(t){this.parser=t,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],h,l=new Pt(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],rn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Li(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new es(l),h.distance=d;break;case"spot":h=new Aa(l),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),fi(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(h),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},hu=class{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(t,e,n){let i=[];t.color=new Pt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],rn),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,De))}return Promise.all(i)}},lu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},uu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Rt(r,r)}return Promise.all(i)}},du=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},fu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},pu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new Pt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,De)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},mu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},gu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Pt().setRGB(r[0],r[1],r[2],rn),Promise.all(i)}},_u=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},yu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new Pt().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,De)),Promise.all(i)}},xu=class{constructor(t){this.parser=t,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},vu=class{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){let n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},bu=class{constructor(t){this.parser=t,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},Su=class{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let h=n.options.manager.getHandler(o.uri);h!==null&&(c=h)}return n.loadTextureImage(t,a.source,c)}},Mu=class{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let h=n.options.manager.getHandler(o.uri);h!==null&&(c=h)}return n.loadTextureImage(t,a.source,c)}},ch=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,h=i.byteLength||0,l=i.count,d=i.byteStride,u=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(l*d);return a.decodeGltfBuffer(new Uint8Array(f),l,d,u,i.mode,i.filter),f})})}else return null}},Tu=class{constructor(t){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let h of i.primitives)if(h.mode!==kn.TRIANGLES&&h.mode!==kn.TRIANGLE_STRIP&&h.mode!==kn.TRIANGLE_FAN&&h.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let h in a)o.push(this.parser.getDependency("accessor",a[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let l=h.pop(),d=l.isGroup?l.children:[l],u=h[0].count,f=[];for(let g of d){let _=new Nt,p=new I,m=new je,M=new I(1,1,1),A=new ga(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),A.setMatrixAt(b,_.compose(p,m,M));let v=null;for(let b in c)if(b==="_COLOR_0"){let T=c[b];A.instanceColor=new Ei(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let E=A.geometry;v=new Ue,v.name=E.name;for(let y in E.attributes)v.setAttribute(y,E.attributes[y]);for(let y in E.morphAttributes)v.morphAttributes[y]=E.morphAttributes[y];E.index!==null&&v.setIndex(E.index),v.morphTargetsRelative=E.morphTargetsRelative;for(let y of E.groups)v.addGroup(y.start,y.count,y.materialIndex);E.boundingBox!==null&&(v.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(v.boundingSphere=E.boundingSphere.clone()),v.drawRange.start=E.drawRange.start,v.drawRange.count=E.drawRange.count,v.userData=Object.assign({},E.userData),A.geometry=v}let T=c[b];v.setAttribute(b,new Ei(T.array,T.itemSize,T.normalized))}ge.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}},qp="glTF",Ya=12,Hp={JSON:1313821514,BIN:5130562},wu=class{constructor(t){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ya,r=new DataView(t,Ya),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Hp.JSON){let h=new Uint8Array(t,Ya+a,o);this.content=n.decode(h)}else if(c===Hp.BIN){let h=Ya+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Eu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},h={};for(let l in a){let d=Pu[l]||l.toLowerCase();o[d]=a[l]}for(let l in t.attributes){let d=Pu[l]||l.toLowerCase();if(a[l]!==void 0){let u=n.accessors[t.attributes[l]],f=zr[u.componentType];h[d]=f.name,c[d]=u.normalized===!0}}return e.getDependency("bufferView",r).then(function(l){return new Promise(function(d,u){i.decodeDracoFile(l,function(f){for(let g in f.attributes){let _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}d(f)},o,h,rn,u)})})}},Au=class{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},Ru=class{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}},hh=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=i-e,d=(n-e)/l,u=d*d,f=u*d,g=t*h,_=g-h,p=-2*f+3*u,m=f-u,M=1-p,A=m-u+d;for(let v=0;v!==o;v++){let b=a[_+v+o],T=a[_+v+c]*l,E=a[g+v+o],y=a[g+v]*l;r[v]=M*b+A*T+p*E+m*y}return r}},sb=new je,Cu=class extends hh{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return sb.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gp={9728:Te,9729:we,9984:fc,9985:Lr,9986:Ds,9987:$n},Wp={33071:On,33648:dr,10497:Ji},ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rb={CUBICSPLINE:void 0,LINEAR:ws,STEP:Ts},au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ab(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Cs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function Os(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ob(s,t,e){let n=!1,i=!1,r=!1;for(let h=0,l=t.length;h<l;h++){let d=t[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let h=0,l=t.length;h<l;h++){let d=t[h];if(n){let u=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],d=h[1],u=h[2];return n&&(s.morphAttributes.position=l),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function cb(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hb(s){let t,e=s.extensions&&s.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ou(e.attributes):t=s.indices+":"+ou(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+ou(s.targets[n]);return t}function ou(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Iu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ub=new Nt,Lu=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new wa(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Er(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Os(r,o,i),fi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[h,l]of a.children.entries())r(l,o.children[h])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Di.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=ru[i.type],o=zr[i.componentType],c=i.normalized===!0,h=new o(i.count*a);return Promise.resolve(new ve(h,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=ru[i.type],h=zr[i.componentType],l=h.BYTES_PER_ELEMENT,d=l*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(f&&f!==d){let m=Math.floor(u/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=e.cache.get(M);A||(_=new h(o,m*f,i.count*f/l),A=new xr(_,f/l),e.cache.add(M,A)),p=new vr(A,c,u%f/l,g)}else o===null?_=new h(i.count*c):_=new h(o,u,i.count*c),p=new ve(_,c,g);if(i.sparse!==void 0){let m=ru.SCALAR,M=zr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new M(a[1],A,i.sparse.count*m),T=new h(a[2],v,i.sparse.count*c);o!==null&&(p=new ve(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,y=b.length;E<y;E++){let w=b[E];if(p.setX(w,T[E*c]),c>=2&&p.setY(w,T[E*c+1]),c>=3&&p.setZ(w,T[E*c+2]),c>=4&&p.setW(w,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){let i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(e,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return l.magFilter=Gp[u.magFilter]||we,l.minFilter=Gp[u.minFilter]||$n,l.wrapS=Wp[u.wrapS]||Ji,l.wrapT=Wp[u.wrapT]||Ji,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Te&&l.minFilter!==we,i.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());let a=i.images[t],o=self.URL||self.webkitURL,c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){h=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;e.isImageBitmapLoader===!0&&(g=function(_){let p=new Ne(_);p.needsUpdate=!0,u(p)}),e.load(Di.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return h===!0&&o.revokeObjectURL(c),fi(d,a),d.userData.mimeType=a.mimeType||lb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=l,l}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ai,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Tr,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Cs}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],a,o={},c=r.extensions||{},h=[];if(c[Ht.KHR_MATERIALS_UNLIT]){let d=i[Ht.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(o,r,e))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Pt(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],rn),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(e.assignTexture(o,"map",d.baseColorTexture,De)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(e.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Fn);let l=r.alphaMode||au.OPAQUE;if(l===au.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===au.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==jn&&(h.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Rt(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==jn&&(h.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==jn){let d=r.emissiveFactor;o.emissive=new Pt().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&a!==jn&&h.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,De)),Promise.all(h).then(function(){let d=new a(o);return r.name&&(d.name=r.name),fi(d,r),e.associations.set(d,{materials:t}),r.extensions&&Os(i,d,r),d})}createUniqueName(t){let e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Xp(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let h=t[o],l=hb(h),d=i[l];if(d)a.push(d.promise);else{let u;h.extensions&&h.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?u=r(h):u=Xp(new Ue,h,e),h.mode===kn.TRIANGLE_STRIP?u=u.then(f=>su(f,Ha)):h.mode===kn.TRIANGLE_FAN&&(u=u.then(f=>su(f,Ur))),i[l]={primitive:h,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,h=a.length;c<h;c++){let l=a[c].material===void 0?ab(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(e.loadGeometries(a)),Promise.all(o).then(async function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],d=[];for(let f=0,g=l.length;f<g;f++){let _=l[f],p=a[f],m,M=h[f];if(p.mode===kn.TRIANGLES||p.mode===kn.TRIANGLE_STRIP||p.mode===kn.TRIANGLE_FAN||p.mode===void 0){let A=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&v?new pa(_,M):new Oe(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===kn.LINES)m=new _a(_,M);else if(p.mode===kn.LINE_STRIP)m=new As(_,M);else if(p.mode===kn.LINE_LOOP)m=new ya(_,M);else if(p.mode===kn.POINTS)m=new $i(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&cb(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),fi(m,r),p.extensions&&Os(i,m,p),e.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)e.associations.set(d[f],{meshes:t,primitives:f});if(d.length===1)return r.extensions&&Os(i,d[0],r),d[0];let u=new un;r.extensions&&Os(i,u,r),e.associations.set(u,{meshes:t});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ie(Ga.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let h=0,l=a.length;h<l;h++){let d=a[h];if(d){o.push(d);let u=new Nt;r!==null&&u.fromArray(r.array,h*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new ma(o,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],h=[],l=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),h.push(g),l.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(d){let u=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let A=0,v=u.length;A<v;A++){let b=u[A],T=f[A],E=g[A],y=_[A],w=p[A];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let C=n._createAnimationTracks(b,T,E,y,w);if(C)for(let L=0;L<C.length;L++)m.push(C[L])}let M=new Ta(r,void 0,m);return fi(M,i),M})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=i.weights.length;c<h;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let h=0,l=o.length;h<l;h++)a.push(n.getDependency("node",o[h]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(h){let l=h[0],d=h[1],u=h[2];u!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ub)});for(let f=0,g=d.length;f<g;f++)l.add(d[f]);if(l.userData.pivot!==void 0&&d.length>0){let f=l.userData.pivot,g=d[0];l.pivot=new I().fromArray(f),l.position.x-=f[0],l.position.y-=f[1],l.position.z-=f[2],g.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let l;if(r.isBone===!0?l=new br:h.length>1?l=new un:h.length===1?l=h[0]:l=new ge,l!==h[0])for(let d=0,u=h.length;d<u;d++)l.add(h[d]);if(r.name&&(l.userData.name=r.name,l.name=a),fi(l,r),r.extensions&&Os(n,l,r),r.matrix!==void 0){let d=new Nt;d.fromArray(r.matrix),l.applyMatrix4(d)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);if(!i.associations.has(l))i.associations.set(l,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(l);i.associations.set(l,{...d})}return i.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new un;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&Os(e,r,n);let a=n.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,d=c.length;l<d;l++){let u=c[l];u.parent!==null?r.add(zp(u)):r.add(u)}let h=l=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof an||u instanceof Ne)&&d.set(u,f);return l.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=h(r),r})}_createAnimationTracks(t,e,n,i,r){let a=[],o=t.name?t.name:t.uuid,c=[];function h(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}cs[r.path]===cs.weights?(h(t),t.isGroup&&t.children.forEach(h)):c.push(o);let l;switch(cs[r.path]){case cs.weights:l=Ci;break;case cs.rotation:l=Pi;break;case cs.translation:case cs.scale:l=ts;break;default:n.itemSize===1?l=Ci:l=ts;break}let d=i.interpolation!==void 0?rb[i.interpolation]:ws,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new l(c[f]+"."+cs[r.path],e.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Iu(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Pi?Cu:hh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function db(s,t,e){let n=t.attributes,i=new En;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(h[0],h[1],h[2])),o.normalized){let l=Iu(zr[o.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let o=new I,c=new I;for(let h=0,l=r.length;h<l;h++){let d=r[h];if(d.POSITION!==void 0){let u=e.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let _=Iu(zr[u.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Xp(s,t,e){let n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Pu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){let a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Bt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bt.workingColorSpace}" not supported.`),fi(s,t),db(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ob(s,t.targets,e):s})}var Yp={type:"change"},Nu={type:"start"},Zp={type:"end"},lh=new ai,Kp=new wn,fb=Math.cos(70*Ga.DEG2RAD),Be=new I,_n=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6,uh=class extends La{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new je,this._lastTargetPosition=new I,this._quat=new je().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rr,this._sphericalDelta=new Rr,this._scale=1,this._panOffset=new I,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new I,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mb.bind(this),this._onPointerDown=pb.bind(this),this._onPointerUp=gb.bind(this),this._onContextMenu=Mb.bind(this),this._onMouseWheel=xb.bind(this),this._onKeyDown=vb.bind(this),this._onTouchStart=bb.bind(this),this._onTouchMove=Sb.bind(this),this._onMouseDown=_b.bind(this),this._onMouseMove=yb.bind(this),this._interceptControlDown=Tb.bind(this),this._interceptControlUp=wb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ie.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yp),this.update(),this.state=ie.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Be.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lh.origin.copy(this.object.position),lh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lh.direction))<fb?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),lh.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(Yp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Be.copy(i).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function pb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function gb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=ie.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _b(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ie.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Nu)}function yb(s){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function xb(s){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(s.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zp))}function vb(s){this.enabled!==!1&&this._handleKeyDown(s)}function bb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ie.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ie.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Nu)}function Sb(s){switch(this._trackPointer(s),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ie.NONE}}function Mb(s){this.enabled!==!1&&s.preventDefault()}function Tb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ui(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qa={duration:.5,overwrite:!1,delay:0},$u,Ge,pe,zn=1e8,ce=1/zn,Hu=Math.PI*2,Eb=Hu/4,Ab=0,rm=Math.sqrt,Rb=Math.cos,Cb=Math.sin,ze=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},bh=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},vn=function(t){return t!==!1},Qu=function(){return typeof window<"u"},dh=function(t){return be(t)||ze(t)},am=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qe=Array.isArray,Pb=/random\([^)]+\)/g,Ib=/,\s*/g,jp=/(?:-?\.?\d|\.)+/gi,td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ed=/[+-]=-?[.\d]+/,Lb=/[^,'"\[\]\s]+/gi,Db=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,pi,Gu,nd,In={},gh={},om,cm=function(t){return(gh=Hr(t,In))&&tn},Sh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},to=function(t,e){return!e&&console.warn(t)},hm=function(t,e){return t&&(In[t]=e)&&gh&&(gh[t]=e)||In},eo=function(){return 0},Nb={suppressEvents:!0,isStart:!0,kill:!1},fh={suppressEvents:!0,kill:!1},Ub={suppressEvents:!0},id={},ls=[],Wu={},lm,yn={},Ou={},Jp=30,ph=[],sd="",rd=function(t){var e=t[0],n,i;if(gi(e)||be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ph.length;i--&&!ph[i].targetTest(e););n=ph[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hd(t[i],n)))||t.splice(i,1);return t},us=function(t){return t._gsap||rd(Vn(t))[0]._gsap},ad=function(t,e,n){return(n=t[e])&&be(n)?t[e]():bh(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Se=function(t){return Math.round(t*1e5)/1e5||0},_e=function(t){return Math.round(t*1e7)/1e7||0},Vs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ob=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_h=function(){var t=ls.length,e=ls.slice(0),n,i;for(Wu={},ls.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},od=function(t){return!!(t._initted||t._startAt||t.add)},um=function(t,e,n,i){ls.length&&!Ge&&_h(),t.render(e,n,i||!!(Ge&&e<0&&od(t))),ls.length&&!Ge&&_h()},dm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Lb).length<2?e:ze(t)?t.trim():t},fm=function(t){return t},Ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Hr=function(t,e){for(var n in e)t[n]=e[n];return t},$p=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},yh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ja=function(t){var e=t.parent||ye,n=t.keyframes?Fb(Qe(t.keyframes)):Ln;if(vn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},pm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Mh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ds=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Bb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Xu=function(t,e,n,i){return t._startAt&&(Ge?t._startAt.revert(fh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},zb=function s(t){return!t||t._ts&&s(t.parent)},Qp=function(t){return t._repeat?Gr(t._tTime,t=t.duration()+t._rDelay)*t:0},Gr=function(t,e){var n=Math.floor(t=_e(t/e));return t&&n===t?n-1:n},xh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Th=function(t){return t._end=_e(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},wh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=_e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Th(t),n._dirty||Fs(n,t)),t},mm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xh(t.rawTime(),e),(!e._dur||so(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),Fs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},mi=function(t,e,n,i){return e.parent&&ds(e),e._start=_e((Fi(n)?n:n||t!==ye?Bn(t,n,e):t._time)+e._delay),e._end=_e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pm(t,e,"_first","_last",t._sort?"_start":0),qu(e)||(t._recent=e),i||mm(t,e),t._ts<0&&wh(t,t._tTime),t},gm=function(t,e){return(In.ScrollTrigger||Sh("scrollTrigger",e))&&In.ScrollTrigger.create(e,t)},_m=function(t,e,n,i,r){if(dd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ge&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&lm!==xn.frame)return ls.push(t),t._lazy=[r,i],1},Vb=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},qu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Hb=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Vb(t)&&!(!t._initted&&qu(t))||(t._ts<0||t._dp._ts<0)&&!qu(t))?0:1,o=t._rDelay,c=0,h,l,d;if(o&&t._repeat&&(c=so(0,t._tDur,e),l=Gr(c,o),t._yoyo&&l&1&&(a=1-a),l!==Gr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Ge||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&_m(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,h=t._pt;h;)h.r(a,h.d),h=h._next;e<0&&Xu(t,e,n,!0),t._onUpdate&&!n&&Pn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Pn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ds(t,1),!n&&!Ge&&(Pn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Wr=function(t,e,n,i){var r=t._repeat,a=_e(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:_e(a*(r+1)+t._rDelay*r):a,o>0&&!i&&wh(t,t._tTime=t._tDur*o),t.parent&&Th(t),n||Fs(t.parent,t),t},tm=function(t){return t instanceof $e?Fs(t):Wr(t,t._dur)},Wb={_start:0,endTime:eo,totalDuration:eo},Bn=function s(t,e,n){var i=t.labels,r=t._recent||Wb,a=t.duration()>=zn?r.endTime(!1):t._dur,o,c,h;return ze(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),h=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),h&&n&&(c=c/100*(Qe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Ja=function(t,e,n){var i=Fi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=vn(c.vars.inherit)&&c.parent;a.immediateRender=vn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ae(e[0],a,e[r+1])},fs=function(t,e){return t||t===0?e(t):e},so=function(t,e,n){return n<t?t:n>e?e:n},We=function(t,e){return!ze(t)||!(e=Db.exec(t))?"":e[1]},Xb=function(t,e,n){return fs(n,function(i){return so(t,e,i)})},Yu=[].slice,ym=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==pi},qb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ze(i)&&!e||ym(i,1)?(r=n).push.apply(r,Vn(i)):n.push(i)})||n},Vn=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):ze(t)&&!n&&(Gu||!Xr())?Yu.call((e||nd).querySelectorAll(t),0):Qe(t)?qb(t,n):ym(t)?Yu.call(t,0):t?[t]:[]},Ku=function(t){return t=Vn(t)[0]||to("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Vn(e,n.querySelectorAll?n:n===t?to("Invalid scope")||nd.createElement("div"):t)}},xm=function(t){return t.sort(function(){return .5-Math.random()})},vm=function(t){if(be(t))return t;var e=gi(t)?t:{each:t},n=ks(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,h=e.axis,l=i,d=i;return ze(i)?l=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(l=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,p=a[_],m,M,A,v,b,T,E,y,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,zn])[1],!w){for(E=-zn;E<(E=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=c?Math.min(w,_)*l-.5:i%w,M=w===zn?0:c?_*d/w-.5:i/w|0,E=0,y=zn,T=0;T<_;T++)A=T%w-m,v=M-(T/w|0),p[T]=b=h?Math.abs(h==="y"?v:A):rm(A*A+v*v),b>E&&(E=b),b<y&&(y=b);i==="random"&&xm(p),p.max=E-y,p.min=y,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:h?h==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=We(e.amount||e.each)||0,n=n&&_<0?rS(n):n}return _=(p[u]-p.min)/p.max||0,_e(p.b+(n?n(_):_)*p.v)+p.u}},Zu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=_e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Fi(n)?0:We(n))}},bm=function(t,e){var n=Qe(t),i,r;return!n&&gi(t)&&(i=n=t.radius||zn,t.values?(t=Vn(t.values),(r=!Fi(t[0]))&&(i*=i)):t=Zu(t.increment)),fs(e,n?be(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),h=zn,l=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-c,u=u*u+f*f):u=Math.abs(t[d]-o),u<h&&(h=u,l=d);return l=!i||h<=i?t[l]:a,r||l===a||Fi(a)?l:l+We(a)}:Zu(t))},Sm=function(t,e,n,i){return fs(Qe(t)?!e:n===!0?!!(n=0):!i,function(){return Qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Yb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Kb=function(t,e){return function(n){return t(parseFloat(n))+(e||We(n))}},Zb=function(t,e,n){return Tm(t,e,0,1,n)},Mm=function(t,e,n){return fs(n,function(i){return t[~~e(i)]})},jb=function s(t,e,n){var i=e-t;return Qe(t)?Mm(t,s(0,t.length),e):fs(n,function(r){return(i+(r-t)%i)%i+t})},Jb=function s(t,e,n){var i=e-t,r=i*2;return Qe(t)?Mm(t,s(0,t.length-1),e):fs(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},qr=function(t){return t.replace(Pb,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Ib);return Sm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Tm=function(t,e,n,i,r){var a=e-t,o=i-n;return fs(r,function(c){return n+((c-t)/a*o||0)})},$b=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=ze(t),o={},c,h,l,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Qe(t)&&!Qe(e)){for(l=[],d=t.length,u=d-2,h=1;h<d;h++)l.push(s(t[h-1],t[h]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return l[_](g-_)},n=e}else i||(t=Hr(Qe(t)?[]:{},t));if(!l){for(c in e)ld.call(o,t,c,"get",e[c]);r=function(g){return md(g,o)||(a?t.p:t)}}}return fs(n,r)},em=function(t,e,n){var i=t.labels,r=zn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Pn=function(t,e,n){var i=t.vars,r=i[e],a=pe,o=t._ctx,c,h,l;if(r)return c=i[e+"Params"],h=i.callbackScope||t,n&&ls.length&&_h(),o&&(pe=o),l=c?r.apply(h,c):r.call(h),pe=a,l},Ka=function(t){return ds(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ge),t.progress()<1&&Pn(t,"onInterrupt"),t},Vr,wm=[],Em=function(t){if(t)if(t=!t.name&&t.default||t,Qu()||t.headless){var e=t.name,n=be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:eo,render:md,add:ld,kill:mS,modifier:pS,rawVars:0},a={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(Xr(),t!==i){if(yn[e])return;Ln(i,Ln(yh(t,r),a)),Hr(i.prototype,Hr(r,yh(t,a))),yn[i.prop=e]=i,t.targetTest&&(ph.push(i),id[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hm(e,i),t.register&&t.register(tn,i,hn)}else wm.push(t)},oe=255,Za={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},Fu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},Am=function(t,e,n){var i=t?Fi(t)?[t>>16,t>>8&oe,t&oe]:0:Za.black,r,a,o,c,h,l,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Za[t])i=Za[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&oe,i&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(jp),!e)c=+i[0]%360/360,h=+i[1]/100,l=+i[2]/100,a=l<=.5?l*(h+1):l+h-l*h,r=l*2-a,i.length>3&&(i[3]*=1),i[0]=Fu(c+1/3,r,a),i[1]=Fu(c,r,a),i[2]=Fu(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(td),n&&i.length<4&&(i[3]=1),i}else i=t.match(jp)||Za.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/oe,a=i[1]/oe,o=i[2]/oe,d=Math.max(r,a,o),u=Math.min(r,a,o),l=(d+u)/2,d===u?c=h=0:(f=d-u,h=l>.5?f/(2-d-u):f/(d+u),c=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(h*100+.5),i[2]=~~(l*100+.5)),n&&i.length<4&&(i[3]=1),i},Rm=function(t){var e=[],n=[],i=-1;return t.split(Oi).forEach(function(r){var a=r.match(zs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},nm=function(t,e,n){var i="",r=(t+i).match(Oi),a=e?"hsla(":"rgba(",o=0,c,h,l,d;if(!r)return t;if(r=r.map(function(u){return(u=Am(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(l=Rm(t),c=n.c,c.join(i)!==l.c.join(i)))for(h=t.replace(Oi,"1").split(zs),d=h.length-1;o<d;o++)i+=h[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(l.length?l:r.length?r:n).shift());if(!h)for(h=t.split(Oi),d=h.length-1;o<d;o++)i+=h[o]+r[o];return i+h[d]},Oi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Za)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Qb=/hsl[a]?\(/,cd=function(t){var e=t.join(" "),n;if(Oi.lastIndex=0,Oi.test(e))return n=Qb.test(e),t[1]=nm(t[1],n),t[0]=nm(t[0],n,Rm(t[1])),!0},no,xn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,h,l,d,u,f,g=function _(p){var m=s()-i,M=p===!0,A,v,b,T;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,A=b-a,(A>0||M)&&(T=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,a+=A+(A>=r?4:r-A),v=1),M||(c=h(_)),v)for(f=0;f<o.length;f++)o[f](b,u,T,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){om&&(!Gu&&Qu()&&(pi=Gu=window,nd=pi.document||{},In.gsap=tn,(pi.gsapVersions||(pi.gsapVersions=[])).push(tn.version),cm(gh||pi.GreenSockGlobals||!pi.gsap&&pi||{}),wm.forEach(Em)),l=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),h=l||function(p){return setTimeout(p,a-d.time*1e3+1|0)},no=1,g(2))},sleep:function(){(l?cancelAnimationFrame:clearTimeout)(c),no=0,h=eo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,m,M){var A=m?function(v,b,T,E){p(v,b,T,E),d.remove(A)}:p;return d.remove(p),o[M?"unshift":"push"](A),Xr(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Xr=function(){return!no&&xn.wake()},Yt={},tS=/^[\d.\-M][\d.\-,\s]/,eS=/["']/g,nS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,h;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,h=c.substr(0,o),e[i]=isNaN(h)?h.replace(eS,"").trim():+h,i=c.substr(o+1).trim();return e},iS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sS=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[nS(e[1])]:iS(t).split(",").map(dm)):Yt._CE&&tS.test(t)?Yt._CE("",t):n},rS=function(t){return function(e){return 1-t(1-e)}},ks=function(t,e){return t&&(be(t)?t:Yt[t]||sS(t))||e},Hs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return cn(t,function(o){Yt[o]=In[o]=r,Yt[a=o.toLowerCase()]=n;for(var c in r)Yt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Yt[o+"."+c]=r[c]}),r},Cm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ku=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Hu*(Math.asin(1/i)||0),o=function(l){return l===1?1:i*Math.pow(2,-10*l)*Cb((l-a)*r)+1},c=t==="out"?o:t==="in"?function(h){return 1-o(1-h)}:Cm(o);return r=Hu/r,c.config=function(h,l){return s(t,h,l)},c},Bu=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Cm(n);return i.config=function(r){return s(t,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Hs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Hs("Elastic",ku("in"),ku("out"),ku());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Hs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Hs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Hs("Circ",function(s){return-(rm(1-s*s)-1)});Hs("Sine",function(s){return s===1?1:-Rb(s*Eb)+1});Hs("Back",Bu("in"),Bu("out"),Bu());Yt.SteppedEase=Yt.steps=In.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ce;return function(o){return((i*so(0,a,o)|0)+r)*n}}};Qa.ease=Yt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return sd+=s+","+s+"Params,"});var hd=function(t,e){this.id=Ab++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ad,this.set=e?e.getSetter:Eh},io=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Wr(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),no||xn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(wh(this,n),!r._dp||r.parent||mm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),um(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Gr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(so(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Th(this),Bb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=_e(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ub);var i=Ge;return Ge=n,od(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ge=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Bn(this,n),vn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,vn(i)),this._dur||(this._zTime=-ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ce)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=be(n)?n:fm,c=function(){var l=i.then;i.then=null,r&&r(),be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),a(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Ka(this)},s})();Ln(io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var $e=(function(s){sm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=vn(n.sortChildren),ye&&mi(n.parent||ye,Ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&gm(Ui(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Ja(0,arguments,this),this},e.from=function(i,r,a){return Ja(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Ja(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ja(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ae(i,r,Bn(this,a),1),this},e.call=function(i,r,a){return mi(this,Ae.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,c,h,l){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=h,a.onCompleteParams=l,a.parent=this,new Ae(i,a,Bn(this,c)),this},e.staggerFrom=function(i,r,a,o,c,h,l){return a.runBackwards=1,ja(a).immediateRender=vn(a.immediateRender),this.staggerTo(i,r,a,o,c,h,l)},e.staggerFromTo=function(i,r,a,o,c,h,l,d){return o.startAt=a,ja(o).immediateRender=vn(o.immediateRender),this.staggerTo(i,r,o,c,h,l,d)},e.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,h=this._dur,l=i<=0?0:_e(i),d=this._zTime<0!=i<0&&(this._initted||!h),u,f,g,_,p,m,M,A,v,b,T,E;if(this!==ye&&l>c&&i>=0&&(l=c),l!==this._tTime||a||d){if(o!==this._time&&h&&(l+=this._time-o,i+=this._time-o),u=l,v=this._start,A=this._ts,m=!A,d&&(h||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(u=_e(l%p),l===c?(_=this._repeat,u=h):(b=_e(l/p),_=~~b,_&&_===b&&(u=h,_--),u>h&&(u=h)),b=Gr(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),T&&_&1&&(u=h-u,E=1),_!==b&&!this._lock){var y=T&&b&1,w=y===(T&&_&1);if(_<b&&(y=!y),o=y?0:l%h?h:l,this._lock=1,this.render(o||(E?0:_e(_*p)),r,!h)._lock=0,this._tTime=l,!r&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,c=this._tDur,w&&(this._lock=2,o=y?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Gb(this,_e(o),_e(u)),M&&(l-=u-(u=M._start))),this._tTime=l,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&l&&h&&!r&&!b&&(Pn(this,"onStart"),this._tTime!==l))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!m){M=0,g&&(l+=this._zTime=-ce);break}}f=g}else{f=this._last;for(var C=i<0?i:u;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,a||Ge&&od(f)),u!==this._time||!this._ts&&!m){M=0,g&&(l+=this._zTime=C?-ce:ce);break}}f=g}}if(M&&!r&&(this.pause(),M.render(u>=o?0:-ce)._zTime=u>=o?1:-1,this._ts))return this._start=v,Th(this),this.render(i,r,a);this._onUpdate&&!r&&Pn(this,"onUpdate",!0),(l===c&&this._tTime>=this.totalDuration()||!l&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(l===c&&this._ts>0||!l&&this._ts<0)&&ds(this,1),!r&&!(i<0&&!o)&&(l||o||!c)&&(Pn(this,l===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Fi(r)||(r=Bn(this,r,i)),!(i instanceof io)){if(Qe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ze(i))return this.addLabel(i,r);if(be(i))i=Ae.delayedCall(0,i);else return this}return this!==i?mi(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-zn);for(var c=[],h=this._first;h;)h._start>=o&&(h instanceof Ae?r&&c.push(h):(a&&c.push(h),i&&c.push.apply(c,h.getChildren(!0,r,a)))),h=h._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ze(i)?this.removeLabel(i):be(i)?this.killTweensOf(i):(i.parent===this&&Mh(this,i),i===this._recent&&(this._recent=this._last),Fs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_e(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Bn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ae.delayedCall(0,r||eo,a);return o.data="isPause",this._hasPause=1,mi(this,o,Bn(this,i))},e.removePause=function(i){var r=this._first;for(i=Bn(this,i);r;)r._start===i&&r.data==="isPause"&&ds(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)hs!==o[c]&&o[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Vn(i),c=this._first,h=Fi(r),l;c;)c instanceof Ae?Ob(c._targets,o)&&(h?(!hs||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(l=c.getTweensOf(o,r)).length&&a.push.apply(a,l),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Bn(a,i),c=r,h=c.startAt,l=c.onStart,d=c.onStartParams,u=c.immediateRender,f,g=Ae.to(a,Ln({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale())||ce,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale());g._dur!==p&&Wr(g,p,0,1).render(g._time,!0,!0),f=1}l&&l.apply(g,d||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Ln({startAt:{time:Bn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),em(this,Bn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),em(this,Bn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,h;for(i=_e(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(h in c)c[h]>=a&&(c[h]+=i);return Fs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fs(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,c=zn,h,l,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),l=o._start,l>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,mi(a,o,l-o._delay,1)._lock=0):c=l,l<0&&o._ts&&(r-=l,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=_e(l/a._ts),a._time-=l,a._tTime-=l),a.shiftChildren(-l,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=h;Wr(a,a===ye&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ye._ts&&(um(ye,xh(i,ye)),lm=xn.frame),xn.frame>=Jp){Jp+=bn.autoSleep||120;var r=ye._first;if((!r||!r._ts)&&bn.autoSleep&&xn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xn.sleep()}}},t})(io);Ln($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var aS=function(t,e,n,i,r,a,o){var c=new hn(this._pt,t,e,0,1,pd,null,r),h=0,l=0,d,u,f,g,_,p,m,M;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=qr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),u=n.match(Uu)||[];d=Uu.exec(i);)g=d[0],_=i.substring(h,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[l++]&&(p=parseFloat(u[l-1])||0,c._pt={_next:c._pt,p:_||l===1?_:",",s:p,c:g.charAt(1)==="="?Vs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},h=Uu.lastIndex);return c.c=h<i.length?i.substring(h,i.length):"",c.fp=o,(ed.test(i)||m)&&(c.e=0),this._pt=c,c},ld=function(t,e,n,i,r,a,o,c,h,l){be(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:be(d)?h?t[e.indexOf("set")||!be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():d,f=be(d)?h?uS:Lm:fd,g;if(ze(i)&&(~i.indexOf("random(")&&(i=qr(i)),i.charAt(1)==="="&&(g=Vs(u,i)+(We(u)||0),(g||g===0)&&(i=g))),!l||u!==i||ju)return!isNaN(u*i)&&i!==""?(g=new hn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?fS:Dm,0,f),h&&(g.fp=h),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Sh(e,i),aS.call(this,t,e,u,i,f,c||bn.stringFilter,h))},oS=function(t,e,n,i,r){if(be(t)&&(t=$a(t,r,e,n,i)),!gi(t)||t.style&&t.nodeType||Qe(t)||am(t))return ze(t)?$a(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=$a(t[o],r,e,n,i);return a},ud=function(t,e,n,i,r,a){var o,c,h,l;if(yn[t]&&(o=new yn[t]).init(r,o.rawVars?e[t]:oS(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new hn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Vr))for(h=n._ptLookup[n._targets.indexOf(r)],l=o._props.length;l--;)h[o._props[l]]=c;return o},hs,ju,dd=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,h=i.onUpdate,l=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!$u,v=t.timeline,b=i.easeReverse||d,T,E,y,w,C,L,F,O,P,B,X,G,Q;if(v&&(!u||!r)&&(r="none"),t._ease=ks(r,Qa.ease),t._rEase=b&&(ks(b)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(O=p[0]?us(p[0]).harness:0,G=O&&i[O.prop],T=yh(i,id),_&&(_._zTime<0&&_.progress(1),e<0&&l&&o&&!f?_.render(-1,!0):_.revert(l&&g?fh:Nb),_._lazy=0),a){if(ds(t._startAt=Ae.set(p,Ln({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&vn(c),startAt:null,delay:0,onUpdate:h&&function(){return Pn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge||!o&&!f)&&t._startAt.revert(fh),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(l&&g&&!_){if(e&&(o=!1),y=Ln({overwrite:!1,data:"isFromStart",lazy:o&&!_&&vn(c),immediateRender:o,stagger:0,parent:m},T),G&&(y[O.prop]=G),ds(t._startAt=Ae.set(p,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge?t._startAt.revert(fh):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&vn(c)||c&&!g,E=0;E<p.length;E++){if(C=p[E],F=C._gsap||rd(p)[E]._gsap,t._ptLookup[E]=B={},Wu[F.id]&&ls.length&&_h(),X=M===p?E:M.indexOf(C),O&&(P=new O).init(C,G||T,t,X,M)!==!1&&(t._pt=w=new hn(t._pt,C,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(q){B[q]=w}),P.priority&&(L=1)),!O||G)for(y in T)yn[y]&&(P=ud(y,T,t,X,C,M))?P.priority&&(L=1):B[y]=w=ld.call(t,C,y,"get",T[y],X,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),A&&t._pt&&(hs=t,ye.killTweensOf(C,B,t.globalTime(e)),Q=!t.parent,hs=0),t._pt&&c&&(Wu[F.id]=1)}L&&gd(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&v.render(zn,!0,!0)},cS=function(t,e,n,i,r,a,o,c){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,d,u,f;if(!h)for(h=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(l=u[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return ju=1,t.vars[e]="+=0",dd(t,o),ju=0,c?to(e+" not eligible for reset. Try splitting into individual properties"):1;h.push(l)}for(f=h.length;f--;)d=h[f],l=d._pt||d,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,d.e&&(d.e=Se(n)+We(d.e)),d.b&&(d.b=l.s+We(d.b))},hS=function(t,e){var n=t[0]?us(t[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return e;r=Hr({},e);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},lS=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Qe(e))o=n[t]||(n[t]=[]),e.forEach(function(c,h){return o.push({t:h/(e.length-1)*100,v:c,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},$a=function(t,e,n,i,r){return be(t)?t.call(e,n,i,r):ze(t)&&~t.indexOf("random(")?qr(t):t},Pm=sd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Im={};cn(Pm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Im[s]=1});var Ae=(function(s){sm(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ja(i))||this;var c=o.vars,h=c.duration,l=c.delay,d=c.immediateRender,u=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=i.parent||ye,M=(Qe(n)||am(n)?Fi(n[0]):"length"in i)?[n]:Vn(n),A,v,b,T,E,y,w,C;if(o._targets=M.length?rd(M):to("GSAP target "+n+" not found. https://gsap.com",!bn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||dh(h)||dh(l)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(A=o.timeline=new $e({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),A.kill(),A.parent=A._dp=Ui(o),A._start=0,u||dh(h)||dh(l)){if(T=M.length,w=u&&vm(u),gi(u))for(E in u)~Pm.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(v=0;v<T;v++)b=yh(i,Im),b.stagger=0,L&&(b.easeReverse=L),C&&Hr(b,C),y=M[v],b.duration=+$a(h,Ui(o),v,y,M),b.delay=(+$a(l,Ui(o),v,y,M)||0)-o._delay,!u&&T===1&&b.delay&&(o._delay=l=b.delay,o._start+=l,b.delay=0),A.to(y,b,w?w(v,y,M):0),A._ease=Yt.none;A.duration()?h=l=0:o.timeline=0}else if(g){ja(Ln(A.vars.defaults,{ease:"none"})),A._ease=ks(g.ease||i.ease||"none");var F=0,O,P,B;if(Qe(g))g.forEach(function(X){return A.to(M,X,">")}),A.duration();else{b={};for(E in g)E==="ease"||E==="easeEach"||lS(E,g[E],b,g.easeEach);for(E in b)for(O=b[E].sort(function(X,G){return X.t-G.t}),F=0,v=0;v<O.length;v++)P=O[v],B={ease:P.e,duration:(P.t-(v?O[v-1].t:0))/100*h},B[E]=P.v,A.to(M,B,F),F+=B.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||o.duration(h=A.duration())}else o.timeline=0;return f===!0&&!$u&&(hs=Ui(o),ye.killTweensOf(M),hs=0),mi(m,Ui(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!h&&!g&&o._start===_e(m._time)&&vn(d)&&zb(Ui(o))&&m.data!=="nested")&&(o._tTime=-ce,o.render(Math.max(0,-l)||0)),p&&gm(Ui(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,c=this._tDur,h=this._dur,l=i<0,d=i>c-ce&&!l?c:i<ce?0:i,u,f,g,_,p,m,M,A;if(!h)Hb(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&l)return this.totalTime(_*100+i,r,a);if(u=_e(d%_),d===c?(g=this._repeat,u=h):(p=_e(d/_),g=~~p,g&&g===p?(u=h,g--):u>h&&(u=h)),m=this._yoyo&&g&1,m&&(u=h-u),p=Gr(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(_e(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(_m(this,l?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(h!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var b=v?o:h-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/h);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!p&&(Pn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(l&&Xu(this,i,r,a),Pn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Pn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(l&&!this._onUpdate&&Xu(this,i,!0,!0),(i||!h)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ds(this,1),!r&&!(l&&!o)&&(d||o||m)&&(Pn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,c){no||xn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||dd(this,h),l=this._ease(h/this._dur),cS(this,i,r,a,o,l,h,c)?this.resetTo(i,r,a,o,1):(wh(this,0),this.parent||pm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ge),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,hs&&hs.vars.overwrite!==!0)._first||Ka(this),this.parent&&a!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Vn(i):o,h=this._ptLookup,l=this._pt,d,u,f,g,_,p,m;if((!r||r==="all")&&kb(o,c))return r==="all"&&(this._pt=0),Ka(this);for(d=this._op=this._op||[],r!=="all"&&(ze(r)&&(_={},cn(r,function(M){return _[M]=1}),r=_),r=hS(o,r)),m=o.length;m--;)if(~c.indexOf(o[m])){u=h[m],r==="all"?(d[m]=r,g=u,f={}):(f=d[m]=d[m]||{},g=r);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Mh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&l&&Ka(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ja(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Ja(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ye.killTweensOf(i,r,a)},t})(io);Ln(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){Ae[s]=function(){var t=new $e,e=Yu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var fd=function(t,e,n){return t[e]=n},Lm=function(t,e,n){return t[e](n)},uS=function(t,e,n,i){return t[e](i.fp,n)},dS=function(t,e,n){return t.setAttribute(e,n)},Eh=function(t,e){return be(t[e])?Lm:bh(t[e])&&t.setAttribute?dS:fd},Dm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},md=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pS=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},mS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Mh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},gd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},hn=(function(){function s(e,n,i,r,a,o,c,h,l){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Dm,this.d=c||this,this.set=h||fd,this.pr=l||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gS,this.m=n,this.mt=r,this.tween=i},s})();cn(sd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return id[s]=1});In.TweenMax=In.TweenLite=Ae;In.TimelineLite=In.TimelineMax=$e;ye=new $e({sortChildren:!1,defaults:Qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=cd;var Bs=[],mh={},_S=[],im=0,yS=0,zu=function(t){return(mh[t]||_S).map(function(e){return e()})},Ju=function(){var t=Date.now(),e=[];t-im>2&&(zu("matchMediaInit"),Bs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,h;for(o in i)a=pi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,h=1);h&&(n.revert(),c&&e.push(n))}),zu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),im=t,zu("matchMedia"))},Nm=(function(){function s(e,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yS++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){be(n)&&(r=i,i=n,n=be);var a=this,o=function(){var h=pe,l=a.selector,d;return h&&h!==a&&h.data.push(a),r&&(a.selector=Ku(r)),pe=a,d=i.apply(a,arguments),be(d)&&a._r.push(d),pe=h,a.selector=l,a.isReverted=!1,d};return a.last=o,n===be?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ae&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,h;c--;)h=r.data[c],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}));for(o.map(function(l){return{g:l._dur||l._delay||l._sat&&!l._sat.vars.immediateRender?l.globalTime(0):-1/0,t:l}}).sort(function(l,d){return d.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),c=r.data.length;c--;)h=r.data[c],h instanceof $e?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Ae)&&h.revert&&h.revert(n);r._r.forEach(function(l){return l(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Bs.length;a--;)Bs[a].id===this.id&&Bs.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),xS=(function(){function s(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){gi(n)||(n={matches:n});var a=new Nm(0,r||this.scope),o=a.conditions={},c,h,l;pe&&!a.selector&&(a.selector=pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?l=1:(c=pi.matchMedia(n[h]),c&&(Bs.indexOf(a)<0&&Bs.push(a),(o[h]=c.matches)&&(l=1),c.addListener?c.addListener(Ju):c.addEventListener("change",Ju)));return l&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),vh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Em(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){ze(t)&&(t=Vn(t)[0]);var r=us(t||{}).get,a=n?fm:dm;return n==="native"&&(n=""),t&&(e?a((yn[e]&&yn[e].get||r)(t,e,n,i)):function(o,c,h){return a((yn[o]&&yn[o].get||r)(t,o,c,h))})},quickSetter:function(t,e,n){if(t=Vn(t),t.length>1){var i=t.map(function(l){return tn.quickSetter(l,e,n)}),r=i.length;return function(l){for(var d=r;d--;)i[d](l)}}t=t[0]||{};var a=yn[e],o=us(t),c=o.harness&&(o.harness.aliases||{})[e]||e,h=a?function(l){var d=new a;Vr._pt=0,d.init(t,n?l+n:l,Vr,0,[t]),d.render(1,d),Vr._pt&&md(1,Vr)}:o.set(t,c);return a?h:function(l){return h(t,c,n?l+n:l,o,1)}},quickTo:function(t,e,n){var i,r=tn.to(t,Ln((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,h,l){return r.resetTo(e,c,h,l)};return a.tween=r,a},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ks(t.ease,Qa.ease)),$p(Qa,t||{})},config:function(t){return $p(bn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!yn[o]&&!In[o]&&to(e+" effect requires "+o+" plugin.")}),Ou[e]=function(o,c,h){return n(Vn(o),Ln(c||{},r),h)},a&&($e.prototype[e]=function(o,c,h){return this.add(Ou[e](o,gi(c)?c:(h=c)&&{},this),h)})},registerEase:function(t,e){Yt[t]=ks(e)},parseEase:function(t,e){return arguments.length?ks(t,e):Yt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,r;for(n.smoothChildTiming=vn(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,i=ye._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ae&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=r;return mi(ye,n,0),n},context:function(t,e){return t?new Nm(t,e):pe},matchMedia:function(t){return new xS(t)},matchMediaRefresh:function(){return Bs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ju()},addEventListener:function(t,e){var n=mh[t]||(mh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=mh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:jb,wrapYoyo:Jb,distribute:vm,random:Sm,snap:bm,normalize:Zb,getUnit:We,clamp:Xb,splitColor:Am,toArray:Vn,selector:Ku,mapRange:Tm,pipe:Yb,unitize:Kb,interpolate:$b,shuffle:xm},install:cm,effects:Ou,ticker:xn,updateRoot:$e.updateRoot,plugins:yn,globalTimeline:ye,core:{PropTween:hn,globals:hm,Tween:Ae,Timeline:$e,Animation:io,getCache:us,_removeLinkedListItem:Mh,reverting:function(){return Ge},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return $u=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return vh[s]=Ae[s]});xn.add($e.updateRoot);Vr=vh.to({},{duration:0});var vS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bS=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=vS(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Vu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,h;if(ze(r)&&(c={},cn(r,function(l){return c[l]=1}),r=c),e){c={};for(h in r)c[h]=e(r[h]);r=c}bS(o,r)}}}},tn=vh.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ge?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vu("roundProps",Zu),Vu("modifiers"),Vu("snap",bm))||vh;Ae.version=$e.version=tn.version="3.15.0";om=1;Qu()&&Xr();var SS=Yt.Power0,MS=Yt.Power1,TS=Yt.Power2,wS=Yt.Power3,ES=Yt.Power4,AS=Yt.Linear,RS=Yt.Quad,CS=Yt.Cubic,PS=Yt.Quart,IS=Yt.Quint,LS=Yt.Strong,DS=Yt.Elastic,NS=Yt.Back,US=Yt.SteppedEase,OS=Yt.Bounce,FS=Yt.Sine,kS=Yt.Expo,BS=Yt.Circ;var Um,ps,Kr,Sd,qs,zS,Om,Md,VS=function(){return typeof window<"u"},Bi={},Xs=180/Math.PI,Zr=Math.PI/180,Yr=Math.atan2,Fm=1e8,Td=/([A-Z])/g,HS=/(left|right|width|margin|padding|x)/i,GS=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},WS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},XS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},YS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},KS=function(t,e,n){return t.style[e]=n},ZS=function(t,e,n){return t.style.setProperty(e,n)},jS=function(t,e,n){return t._gsap[e]=n},JS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},$S=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},QS=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},xe="transform",Sn=xe+"Origin",tM=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Bi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=_i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ki(i,o)}):this.tfm[t]=a.x?a[t]:ki(i,t),t===Sn&&(this.tfm.zOrigin=a.zOrigin);else return _i.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(xe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=xe}(r||e)&&this.props.push(t,e,r[t])},Ym=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},eM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Td,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Md(),(!r||!r.isStart)&&!n[xe]&&(Ym(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Km=function(t,e){var n={target:t,props:[],revert:eM,save:tM};return t._gsap||tn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Zm,xd=function(t,e){var n=ps.createElementNS?ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ps.createElement(t);return n&&n.style?n:ps.createElement(t)},Dn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Td,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,jr(e)||e,1)||""},km="O,Moz,ms,Ms,Webkit".split(","),jr=function(t,e,n){var i=e||qs,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(km[a]+t in r););return a<0?null:(a===3?"ms":a>=0?km[a]:"")+t},vd=function(){VS()&&window.document&&(Um=window,ps=Um.document,Kr=ps.documentElement,qs=xd("div")||{style:{}},zS=xd("div"),xe=jr(xe),Sn=xe+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zm=!!jr("perspective"),Md=tn.core.reverting,Sd=1)},Bm=function(t){var e=t.ownerSVGElement,n=xd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Kr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Kr.removeChild(n),r},zm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},jm=function(t){var e,n;try{e=t.getBBox()}catch{e=Bm(t),n=1}return e&&(e.width||e.height)||n||(e=Bm(t)),e&&!e.width&&!e.x&&!e.y?{x:+zm(t,["x","cx","x1"])||0,y:+zm(t,["y","cy","y1"])||0,width:0,height:0}:e},Jm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&jm(t))},gs=function(t,e){if(e){var n=t.style,i;e in Bi&&e!==Sn&&(e=xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Td,"-$1").toLowerCase())):n.removeAttribute(e)}},ms=function(t,e,n,i,r,a){var o=new hn(t._pt,e,n,0,1,a?qm:Xm);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Vm={deg:1,rad:1,turn:1},nM={grid:1,flex:1},_s=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=qs.style,c=HS.test(e),h=t.tagName.toLowerCase()==="svg",l=(h?"client":"offset")+(c?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!r||Vm[i]||Vm[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&Jm(t),(f||a==="%")&&(Bi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[c?"width":"height"]:t[l],Se(f?r/g*d:r/100*g);if(o[c?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!h?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ps||!_.appendChild)&&(_=ps.body),p=_._gsap,p&&f&&p.width&&c&&p.time===xn.time&&!p.uncache)return Se(r/p.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,g=t[l],M?t.style[e]=M:gs(t,e)}else(f||a==="%")&&!nM[Dn(_,"display")]&&(o.position=Dn(t,"position")),_===t&&(o.position="static"),_.appendChild(qs),g=qs[l],_.removeChild(qs),o.position="absolute";return c&&f&&(p=us(_),p.time=xn.time,p.width=_[l]),Se(u?g*r/d:g&&r?d/g*r:0)},ki=function(t,e,n,i){var r;return Sd||vd(),e in _i&&e!=="transform"&&(e=_i[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bi[e]&&e!=="transform"?(r=oo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Rh(Dn(t,Sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ah[e]&&Ah[e](t,e,n)||Dn(t,e)||ad(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?_s(t,e,r,n)+n:r},iM=function(t,e,n,i){if(!n||n==="none"){var r=jr(e,t,1),a=r&&Dn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var o=new hn(this._pt,t.style,e,0,1,pd),c=0,h=0,l,d,u,f,g,_,p,m,M,A,v,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Dn(t,e)||i,_?t.style[e]=_:gs(t,e)),l=[n,i],cd(l),n=l[0],i=l[1],u=n.match(zs)||[],b=i.match(zs)||[],b.length){for(;d=zs.exec(i);)p=d[0],M=i.substring(c,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=u[h++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Vs(f,p)+v),m=parseFloat(p),A=p.substr((m+"").length),c=zs.lastIndex-A.length,A||(A=A||bn.units[e]||v,c===i.length&&(i+=A,o.e+=A)),v!==A&&(f=_s(t,e,_,A)||0),o._pt={_next:o._pt,p:M||h===1?M:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?qm:Xm;return ed.test(i)&&(o.e=0),this._pt=o,o},Hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Hm[n]||n,e[1]=Hm[i]||i,e.join(" ")},rM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,c,h;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),h=r.length;--h>-1;)o=r[h],Bi[o]&&(c=1,o=o==="transformOrigin"?Sn:xe),gs(n,o);c&&(gs(n,xe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",oo(n,1),a.uncache=1,Ym(i)))}},Ah={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new hn(t._pt,e,n,0,0,rM);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},ao=[1,0,0,1,0,0],$m={},Qm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gm=function(t){var e=Dn(t,xe);return Qm(e)?ao:e.substr(7).match(td).map(Se)},wd=function(t,e){var n=t._gsap||us(t),i=t.style,r=Gm(t),a,o,c,h;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ao:r):(r===ao&&!t.offsetParent&&t!==Kr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,o=t.nextElementSibling,Kr.appendChild(t)),r=Gm(t),c?i.display=c:gs(t,"display"),h&&(o?a.insertBefore(t,o):a?a.appendChild(t):Kr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},bd=function(t,e,n,i,r,a){var o=t._gsap,c=r||wd(t,!0),h=o.xOrigin||0,l=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],M=c[5],A=e.split(" "),v=parseFloat(A[0])||0,b=parseFloat(A[1])||0,T,E,y,w;n?c!==ao&&(E=f*p-g*_)&&(y=v*(p/E)+b*(-_/E)+(_*M-p*m)/E,w=v*(-g/E)+b*(f/E)-(f*M-g*m)/E,v=y,b=w):(T=jm(t),v=T.x+(~A[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(A[1]||A[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&o.smooth?(m=v-h,M=b-l,o.xOffset=d+(m*f+M*_)-m,o.yOffset=u+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Sn]="0px 0px",a&&(ms(a,o,"xOrigin",h,v),ms(a,o,"yOrigin",l,b),ms(a,o,"xOffset",d,o.xOffset),ms(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},oo=function(t,e){var n=t._gsap||new hd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),h=Dn(t,Sn)||"0",l,d,u,f,g,_,p,m,M,A,v,b,T,E,y,w,C,L,F,O,P,B,X,G,Q,q,J,et,vt,St,Xt,Ut;return l=d=u=_=p=m=M=A=v=0,f=g=1,n.svg=!!(t.getCTM&&Jm(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[xe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[xe]!=="none"?c[xe]:"")),i.scale=i.rotate=i.translate="none"),E=wd(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),h=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),bd(t,G||h,!!G||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,T=n.yOrigin||0,E!==ao&&(L=E[0],F=E[1],O=E[2],P=E[3],l=B=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(L*L+F*F),g=Math.sqrt(P*P+O*O),_=L||F?Yr(F,L)*Xs:0,M=O||P?Yr(O,P)*Xs+_:0,M&&(g*=Math.abs(Math.cos(M*Zr))),n.svg&&(l-=b-(b*L+T*O),d-=T-(b*F+T*P))):(Ut=E[6],St=E[7],J=E[8],et=E[9],vt=E[10],Xt=E[11],l=E[12],d=E[13],u=E[14],y=Yr(Ut,vt),p=y*Xs,y&&(w=Math.cos(-y),C=Math.sin(-y),G=B*w+J*C,Q=X*w+et*C,q=Ut*w+vt*C,J=B*-C+J*w,et=X*-C+et*w,vt=Ut*-C+vt*w,Xt=St*-C+Xt*w,B=G,X=Q,Ut=q),y=Yr(-O,vt),m=y*Xs,y&&(w=Math.cos(-y),C=Math.sin(-y),G=L*w-J*C,Q=F*w-et*C,q=O*w-vt*C,Xt=P*C+Xt*w,L=G,F=Q,O=q),y=Yr(F,L),_=y*Xs,y&&(w=Math.cos(y),C=Math.sin(y),G=L*w+F*C,Q=B*w+X*C,F=F*w-L*C,X=X*w-B*C,L=G,B=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Se(Math.sqrt(L*L+F*F+O*O)),g=Se(Math.sqrt(X*X+Ut*Ut)),y=Yr(B,X),M=Math.abs(y)>2e-4?y*Xs:0,v=Xt?1/(Xt<0?-Xt:Xt):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qm(Dn(t,xe)),G&&t.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=l-((n.xPercent=l&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-l)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Se(f),n.scaleY=Se(g),n.rotation=Se(_)+o,n.rotationX=Se(p)+o,n.rotationY=Se(m)+o,n.skewX=M+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(h.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Sn]=Rh(h)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?oM:Zm?tg:aM,n.uncache=0,n},Rh=function(t){return(t=t.split(" "))[0]+" "+t[1]},_d=function(t,e,n){var i=We(e);return Se(parseFloat(e)+parseFloat(_s(t,"x",n+"px",i)))+i},aM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tg(t,e)},Gs="0deg",ro="0px",Ws=") ",tg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,h=n.rotation,l=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,A=n.zOrigin,v="",b=m==="auto"&&t&&t!==1||m===!0;if(A&&(d!==Gs||l!==Gs)){var T=parseFloat(l)*Zr,E=Math.sin(T),y=Math.cos(T),w;T=parseFloat(d)*Zr,w=Math.cos(T),a=_d(M,a,E*w*-A),o=_d(M,o,-Math.sin(T)*-A),c=_d(M,c,y*w*-A+A)}p!==ro&&(v+="perspective("+p+Ws),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||a!==ro||o!==ro||c!==ro)&&(v+=c!==ro||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ws),h!==Gs&&(v+="rotate("+h+Ws),l!==Gs&&(v+="rotateY("+l+Ws),d!==Gs&&(v+="rotateX("+d+Ws),(u!==Gs||f!==Gs)&&(v+="skew("+u+", "+f+Ws),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ws),M.style[xe]=v||"translate(0, 0)"},oM=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,h=n.skewX,l=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,A=parseFloat(a),v=parseFloat(o),b,T,E,y,w;c=parseFloat(c),h=parseFloat(h),l=parseFloat(l),l&&(l=parseFloat(l),h+=l,c+=l),c||h?(c*=Zr,h*=Zr,b=Math.cos(c)*d,T=Math.sin(c)*d,E=Math.sin(c-h)*-u,y=Math.cos(c-h)*u,h&&(l*=Zr,w=Math.tan(h-l),w=Math.sqrt(1+w*w),E*=w,y*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,T*=w)),b=Se(b),T=Se(T),E=Se(E),y=Se(y)):(b=d,y=u,T=E=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=_s(f,"x",a,"px"),v=_s(f,"y",o,"px")),(g||_||p||m)&&(A=Se(A+g-(g*b+_*E)+p),v=Se(v+_-(g*T+_*y)+m)),(i||r)&&(w=f.getBBox(),A=Se(A+i/100*w.width),v=Se(v+r/100*w.height)),w="matrix("+b+","+T+","+E+","+y+","+A+","+v+")",f.setAttribute("transform",w),M&&(f.style[xe]=w)},cM=function(t,e,n,i,r){var a=360,o=ze(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Xs:1),h=c-i,l=i+h+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),d==="cw"&&h<0?h=(h+a*Fm)%a-~~(h/a)*a:d==="ccw"&&h>0&&(h=(h-a*Fm)%a-~~(h/a)*a)),t._pt=u=new hn(t._pt,e,n,i,h,WS),u.e=l,u.u="deg",t._props.push(n),u},Wm=function(t,e){for(var n in e)t[n]=e[n];return t},hM=function(t,e,n){var i=Wm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,h,l,d,u,f,g;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[xe]=e,o=oo(n,1),gs(n,xe),n.setAttribute("transform",h)):(h=getComputedStyle(n)[xe],a[xe]=e,o=oo(n,1),a[xe]=h);for(c in Bi)h=i[c],l=o[c],h!==l&&r.indexOf(c)<0&&(f=We(h),g=We(l),d=f!==g?_s(n,c,h,g):parseFloat(h),u=parseFloat(l),t._pt=new hn(t._pt,o,c,d,u-d,yd),t._pt.u=g||0,t._props.push(c));Wm(o,i)};cn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Ah[t>1?"border"+s:s]=function(o,c,h,l,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return ki(o,g,h)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(l+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,d)}});var Ed={name:"css",register:vd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,c=n.vars.startAt,h,l,d,u,f,g,_,p,m,M,A,v,b,T,E,y,w;Sd||vd(),this.styles=this.styles||Km(t),y=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(l=e[_],!(yn[_]&&ud(_,e,n,i,t,r)))){if(f=typeof l,g=Ah[_],f==="function"&&(l=l.call(n,i,t,r),f=typeof l),f==="string"&&~l.indexOf("random(")&&(l=qr(l)),g)g(this,t,_,l,n)&&(E=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(_)+"").trim(),l+="",Oi.lastIndex=0,Oi.test(h)||(p=We(h),m=We(l),m?p!==m&&(h=_s(t,_,h,m)+m):p&&(l+=p)),this.add(o,"setProperty",h,l,i,r,0,0,_),a.push(_),y.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(h=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],ze(h)&&~h.indexOf("random(")&&(h=qr(h)),We(h+"")||h==="auto"||(h+=bn.units[_]||We(ki(t,_))||""),(h+"").charAt(1)==="="&&(h=ki(t,_))):h=ki(t,_),u=parseFloat(h),M=f==="string"&&l.charAt(1)==="="&&l.substr(0,2),M&&(l=l.substr(2)),d=parseFloat(l),_ in _i&&(_==="autoAlpha"&&(u===1&&ki(t,"visibility")==="hidden"&&d&&(u=0),y.push("visibility",0,o.visibility),ms(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Bi,A){if(this.styles.save(_),w=l,f==="string"&&l.substring(0,6)==="var(--"){if(l=Dn(t,l.substring(4,l.indexOf(")"))),l.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=l,l=Dn(t,"perspective"),C?t.style.perspective=C:gs(t,"perspective")}d=parseFloat(l)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||oo(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new hn(this._pt,o,xe,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new hn(this._pt,b,"scaleY",b.scaleY,(M?Vs(b.scaleY,M+d):d)-b.scaleY||0,yd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(Sn,0,o[Sn]),l=sM(l),b.svg?bd(t,l,0,T,0,this):(m=parseFloat(l.split(" ")[2])||0,m!==b.zOrigin&&ms(this,b,"zOrigin",b.zOrigin,m),ms(this,o,_,Rh(h),Rh(l)));continue}else if(_==="svgOrigin"){bd(t,l,1,T,0,this);continue}else if(_ in $m){cM(this,b,_,u,M?Vs(u,M+l):l);continue}else if(_==="smoothOrigin"){ms(this,b,"smooth",b.smooth,l);continue}else if(_==="force3D"){b[_]=l;continue}else if(_==="transform"){hM(this,l,t);continue}}else _ in o||(_=jr(_)||_);if(A||(d||d===0)&&(u||u===0)&&!GS.test(l)&&_ in o)p=(h+"").substr((u+"").length),d||(d=0),m=We(l)||(_ in bn.units?bn.units[_]:p),p!==m&&(u=_s(t,_,h,m)),this._pt=new hn(this._pt,A?b:o,_,u,(M?Vs(u,M+d):d)-u,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?YS:yd),this._pt.u=m||0,A&&w!==l?(this._pt.b=h,this._pt.e=w,this._pt.r=qS):p!==m&&m!=="%"&&(this._pt.b=h,this._pt.r=XS);else if(_ in o)iM.call(this,t,_,h,M?M+l:l);else if(_ in t)this.add(t,_,h||t[_],M?M+l:l,i,r);else if(_!=="parseTransform"){Sh(_,l);continue}A||(_ in o?y.push(_,0,o[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,h||t[_])),a.push(_)}}E&&gd(this)},render:function(t,e){if(e.tween._time||!Md())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ki,aliases:_i,getSetter:function(t,e,n){var i=_i[e];return i&&i.indexOf(",")<0&&(e=i),e in Bi&&e!==Sn&&(t._gsap.x||ki(t,"x"))?n&&Om===n?e==="scale"?JS:jS:(Om=n||{})&&(e==="scale"?$S:QS):t.style&&!bh(t.style[e])?KS:~e.indexOf("-")?ZS:Eh(t,e)},core:{_removeProperty:gs,_getMatrix:wd}};tn.utils.checkPrefix=jr;tn.core.getStyleSaver=Km;(function(s,t,e,n){var i=cn(s+","+t+","+e,function(r){Bi[r]=1});cn(t,function(r){bn.units[r]="deg",$m[r]=1}),_i[i[13]]=s+","+t,cn(n,function(r){var a=r.split(":");_i[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){bn.units[s]="px"});tn.registerPlugin(Ed);var Xe=tn.registerPlugin(Ed)||tn,AE=Xe.core.Tween;var Ad=class{constructor(){this.ctx=null,this.bgAudio=null,this.isPlayingMusic=!1,this.musicUrl="https://treuah.netlify.app/ordinary.mp3"}init(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playUnboxSound(){if(this.init(),!this.ctx)return;let t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51,1567.98,2093].forEach((a,o)=>{let c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=o%2===0?"sine":"triangle",c.frequency.setValueAtTime(a,t+o*.04),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(.08/(o+1),t+o*.04+.02),h.gain.exponentialRampToValueAtTime(1e-4,t+o*.04+2.4),c.connect(h),h.connect(this.ctx.destination),c.start(t+o*.04),c.stop(t+o*.04+2.5)});let n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(880,t+.9),r.type="lowpass",r.frequency.setValueAtTime(200,t),r.frequency.exponentialRampToValueAtTime(2500,t+.9),i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.045,t+.35),i.gain.exponentialRampToValueAtTime(1e-4,t+1.2),n.connect(r),r.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+1.3)}playBloomSound(){if(this.init(),!this.ctx)return;let t=this.ctx.currentTime;[1046.5,1318.5,1568,2093,2637].forEach((n,i)=>{let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+i*.08),a.gain.setValueAtTime(0,t+i*.08),a.gain.linearRampToValueAtTime(.05,t+i*.08+.03),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.08+1.8),r.connect(a),a.connect(this.ctx.destination),r.start(t+i*.08),r.stop(t+i*.08+1.9)})}setupMusic(t){t&&(this.musicUrl=t),this.bgAudio||(this.bgAudio=new Audio(this.musicUrl),this.bgAudio.loop=!0,this.bgAudio.volume=.55)}toggleMusic(){return this.bgAudio||this.setupMusic(),this.isPlayingMusic?(this.bgAudio.pause(),this.isPlayingMusic=!1):this.bgAudio.play().then(()=>{this.isPlayingMusic=!0}).catch(t=>{console.warn("Audio play prevented:",t)}),this.isPlayingMusic}startMusic(){this.bgAudio||this.setupMusic(),this.isPlayingMusic||this.bgAudio.play().then(()=>{this.isPlayingMusic=!0}).catch(t=>console.warn("Music play:",t))}},Ys=new Ad;var Ch=class{constructor(t){this.canvas=t,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.boxGroup=new un,this.flowerGroup=new un,this.boxBase=null,this.boxLid=null,this.flower=null,this.blossomHead=null,this.boxInteriorLight=null,this.flowerSpotlight=null,this.idleParticles=null,this.burstParticles=null,this.flowerAura=null,this.isOpened=!1,this.isAnimating=!1,this.clock=new Ia,this.mouse=new Rt,this.raycaster=new Pa,this.init()}init(){this.scene=new ua,this.scene.fog=new la(395021,.035);let t=window.innerWidth/window.innerHeight;this.camera=new Ie(45,t,.1,100),this.camera.position.set(0,2.2,5.8),this.renderer=new sh({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Na,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.controls=new uh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.minDistance=2.8,this.controls.maxDistance=10,this.controls.target.set(0,1.2,0),this.setupLighting(),this.setupParticles(),this.scene.add(this.boxGroup),this.scene.add(this.flowerGroup),this.loadModels(),window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("pointermove",this.onPointerMove.bind(this)),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){let t=new Ra(2759221,1.2);this.scene.add(t);let e=new Li(16773328,2.8);e.position.set(4,7,5),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.bias=-1e-4,this.scene.add(e);let n=new Li(16728193,2.2);n.position.set(-5,4,-4),this.scene.add(n);let i=new Li(7964363,1.4);i.position.set(0,-2,4),this.scene.add(i),this.boxInteriorLight=new es(16766720,0,8),this.boxInteriorLight.position.set(0,1.2,0),this.scene.add(this.boxInteriorLight),this.flowerSpotlight=new es(16751035,0,6),this.flowerSpotlight.position.set(0,2.5,0),this.scene.add(this.flowerSpotlight);let r=new Rs(12,12),a=new Sa({opacity:.45}),o=new Oe(r,a);o.rotation.x=-Math.PI/2,o.position.y=-.02,o.receiveShadow=!0,this.scene.add(o)}setupParticles(){let e=new Ue,n=new Float32Array(420),i=new Float32Array(140);for(let _=0;_<140;_++)n[_*3]=(Math.random()-.5)*8,n[_*3+1]=Math.random()*5,n[_*3+2]=(Math.random()-.5)*8,i[_]=Math.random()*.08+.03;e.setAttribute("position",new ve(n,3));let r=document.createElement("canvas");r.width=64,r.height=64;let a=r.getContext("2d"),o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255, 235, 150, 1)"),o.addColorStop(.4,"rgba(255, 200, 50, 0.6)"),o.addColorStop(1,"rgba(255, 180, 0, 0)"),a.fillStyle=o,a.fillRect(0,0,64,64);let c=new va(r),h=new Ai({size:.16,map:c,transparent:!0,blending:Ir,depthWrite:!1});this.idleParticles=new $i(e,h),this.scene.add(this.idleParticles);let l=220,d=new Ue,u=new Float32Array(l*3),f=[];for(let _=0;_<l;_++){u[_*3]=0,u[_*3+1]=1,u[_*3+2]=0;let p=Math.random()*Math.PI*2,m=Math.random()*3.5+2,M=Math.random()*1.8;f.push({vx:Math.cos(p)*M,vy:m,vz:Math.sin(p)*M,rot:Math.random()*.1,life:0})}d.setAttribute("position",new ve(u,3));let g=new Ai({size:.22,map:c,transparent:!0,opacity:0,blending:Ir,depthWrite:!1});this.burstParticles=new $i(d,g),this.burstParticles.userData={velos:f,active:!1},this.scene.add(this.burstParticles)}loadModels(){let t=new oh;t.load("models/luxury_gift_box.glb",e=>{let n=e.scene;n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.name.includes("Ribbon")||i.name.includes("Bow")||i.name.includes("Rim")||i.name.includes("Gold")?(i.material.metalness=.95,i.material.roughness=.16):(i.name.includes("Base")||i.name.includes("Lid"))&&(i.material.roughness=.24,i.material.metalness=.18))}),this.boxBase=n.getObjectByName("Box_Base"),this.boxLid=n.getObjectByName("Box_Lid"),this.boxGroup.add(n),this.boxGroup.position.set(0,0,0),console.log("Luxury Gift Box loaded into 3D scene")},void 0,e=>console.error("Error loading gift box GLB:",e)),t.load("models/magic_flower.glb",e=>{this.flower=e.scene,this.flower.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,(n.name.includes("Petal")||n.name.includes("Rose"))&&(n.material.roughness=.32,n.material.metalness=.08))}),this.blossomHead=this.flower.getObjectByName("Blossom_Head"),this.flower.position.set(0,.1,0),this.flower.scale.set(.001,.001,.001),this.flower.visible=!1,this.flowerGroup.add(this.flower),console.log("Magic Flower loaded into 3D scene")},void 0,e=>console.error("Error loading magic flower GLB:",e))}onResize(){!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)))}onPointerMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1}openGiftBox(t={}){this.isOpened||this.isAnimating||(this.isAnimating=!0,Ys.playUnboxSound(),Xe.to(this.boxGroup.position,{x:"+=0.06",duration:.05,repeat:7,yoyo:!0,ease:"sine.inOut",onComplete:()=>{this.boxGroup.position.x=0}}),Xe.to(this.boxInteriorLight,{intensity:6.5,duration:1.2,ease:"power2.out"}),this.boxLid&&(Xe.to(this.boxLid.position,{y:"+=1.9",z:"-=1.1",duration:1.6,delay:.3,ease:"power3.out"}),Xe.to(this.boxLid.rotation,{x:-Math.PI*.45,z:.14,duration:1.6,delay:.3,ease:"power3.out"})),setTimeout(()=>{this.triggerConfettiBurst(),t.onWingsReady&&t.onWingsReady()},700),setTimeout(()=>{this.flower&&(this.flower.visible=!0,Ys.playBloomSound(),Xe.to(this.flower.position,{y:.95,duration:2.2,ease:"back.out(1.3)"}),Xe.to(this.flower.scale,{x:1.15,y:1.15,z:1.15,duration:2.2,ease:"back.out(1.3)"}),Xe.to(this.flower.rotation,{y:Math.PI*2,duration:2.4,ease:"power2.out"}),Xe.to(this.flowerSpotlight,{intensity:4.5,duration:1.5})),t.onFlowerReady&&t.onFlowerReady()},1200),setTimeout(()=>{this.isOpened=!0,this.isAnimating=!1,t.onLetterReady&&t.onLetterReady()},2800))}triggerConfettiBurst(){if(!this.burstParticles)return;this.burstParticles.material.opacity=1,this.burstParticles.userData.active=!0;let t=this.burstParticles.geometry.attributes.position.array,e=this.burstParticles.userData.velos;for(let n=0;n<e.length;n++)t[n*3]=0,t[n*3+1]=1,t[n*3+2]=0,e[n].life=1;this.burstParticles.geometry.attributes.position.needsUpdate=!0}reset(){this.isOpened=!1,this.isAnimating=!1,this.boxLid&&(Xe.to(this.boxLid.position,{x:0,y:0,z:0,duration:1,ease:"power2.inOut"}),Xe.to(this.boxLid.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.inOut"})),this.flower&&(Xe.to(this.flower.position,{y:.1,duration:.8}),Xe.to(this.flower.scale,{x:.001,y:.001,z:.001,duration:.8,onComplete:()=>{this.flower.visible=!1}})),Xe.to(this.boxInteriorLight,{intensity:0,duration:.8}),Xe.to(this.flowerSpotlight,{intensity:0,duration:.8}),this.burstParticles&&(this.burstParticles.material.opacity=0)}animate(){requestAnimationFrame(this.animate);let t=this.clock.getElapsedTime();if(!this.isOpened&&!this.isAnimating&&this.boxGroup&&(this.boxGroup.position.y=Math.sin(t*1.5)*.06,this.boxGroup.rotation.y=Math.sin(t*.8)*.08),this.isOpened&&this.flower&&(this.flower.rotation.y+=.006,this.flower.position.y=.95+Math.sin(t*2)*.04),this.idleParticles){this.idleParticles.rotation.y=t*.03;let e=this.idleParticles.geometry.attributes.position.array;for(let n=0;n<e.length/3;n++)e[n*3+1]-=.003,e[n*3+1]<0&&(e[n*3+1]=5);this.idleParticles.geometry.attributes.position.needsUpdate=!0}if(this.burstParticles&&this.burstParticles.userData.active){let e=this.burstParticles.geometry.attributes.position.array,n=this.burstParticles.userData.velos,i=0;for(let r=0;r<n.length;r++)n[r].life>0&&(i++,e[r*3]+=n[r].vx*.016,e[r*3+1]+=n[r].vy*.016,e[r*3+2]+=n[r].vz*.016,n[r].vy-=.08,n[r].life-=.008);this.burstParticles.geometry.attributes.position.needsUpdate=!0,i===0&&(this.burstParticles.userData.active=!1,Xe.to(this.burstParticles.material,{opacity:0,duration:.5}))}this.controls&&this.controls.update(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}};var eg={day:9,month:6,photos:["images/birthday/z7912769188496_fba42a0e2807fbead245ba822d2ed1e2.jpg","images/birthday/z7912769240071_f07a699af75d2d169194e938421a20a3.jpg","images/birthday/z7912769283827_92061c656206c440fda4b368213e802f.jpg","images/birthday/z7912769348321_05bd0cd58607eef5227700ef1c313ea8.jpg","images/birthday/z7912769388906_37630896355a641f184ee37d9a6693ec.jpg","images/birthday/z7912769432323_6b32251c989510cad34986c71edff852.jpg","images/birthday/z7912769496467_534fa31f0157927c08bc20eedc16c568.jpg","images/birthday/z7912769546984_4b3fa4bd8f843ba751658ddb05182320.jpg","images/birthday/z7912769611831_549a4f70bf71c3efe64eddcf1d6c0547.jpg","images/birthday/z7912769684155_018c74f5ca09542124d11ff1367b6add.jpg"],photoFallback:"images/xinh1.jpg",letter:{title:"G\u1EEDi em, c\xF4 g\xE1i tuy\u1EC7t v\u1EDDi nh\u1EA5t t\u1EEBng \u0111\u01B0\u1EE3c sinh ra =))) nghe h\u01A1i s\u1EBFn t\xED nh\u01B0ng m\xE0 th\xF4i",content:"<p>H\xF4m nay l\xE0 ng\xE0y sinh nh\u1EADt c\u1EE7a em, l\xE0 ng\xE0y m\xE0 m\u1EB9 em \u0111\xE3 sinh ra em =))) anh bi\u1EBFt nh\u01B0ng m\xE0 \xFD l\xE0 ki\u1EC3u ng\xE0y m\xE0 m\u1EB9 em \u0111\u1EBB ra thi\xEAn th\u1EA7n lu\xF4n r\u1ED3i \u1EA5y ki\u1EC3u em tuy\u1EC7t v\u1EDDi m\xE0 xinh x\u1EAFn l\u1EA1i c\xF2n gi\u1ECFi giang n\u1EEFa omg</p><p> C\xF3 l\u1EBD n\u1EBFu x\xE9t v\u1EC1 t\xECnh c\u1EA3m d\xE0nh cho em ch\u1EAFc anh thua m\u1ED7i m\u1EB9 em th\xF4i \u1EA5y, anh y\xEAu em nhi\u1EC1u l\u1EAFm lu\xF4n \xED. Th\xF4i anh nh\u1EAFn v th t\u1EA1i anh vi\u1EBFt th\u01B0 tay cho em r\u1ED3i m\xE0 =)) vl d\xF2ng tr\u01B0\u1EDBc n\xE0y l\xE0 l\xFAc t\u01B0\u1EDFng \u0111\u01B0a ai ng\u1EDD ch\u01B0a \u0111\u01B0a th\u01B0 omg so t\u1ED9i l\u1ED7i, si\xEAu sorry t\xECnh y\xEAu lu\xF4n, \xEA anh y\xEAu em l\u1EAFm lu\xF4n, \xEA \u0111\u1ECDc th\u01B0 tay n\xF3 m\u1EDBi t\xECnh c\u1EA3m h\u01A1n ch\u1EE9 nh\u01B0ng m\xE0 l\u1EA1i kh\xF4ng mang dcmm \u0111i\xEAn vl ch\u1EAFc l\xE0 n\u1ED5 m\u1EB9 \u0111\u1EA7u n\u1EA5t, \xEA anh bi\u1EBFt l\xE0 all the animations in this web so ugly or not enough for ki\u1EC3u m\u1ED3m ch\u1EEF O m\u1EAFt ch\u1EEF A,\xEA th\u01B0 ch\u01B0a \u0111\u01B0\u1EE3c d\xE0i m\xE0 \u0111\xE3 th\u1EA5y l\xE0 kh\xF4ng bi\u1EBFt vi\u1EBFt g\xEC ch\u1EC9 bi\u1EBFt vi\u1EBFt anh y\xEAu em nhi\u1EC1u l\u1EAFm ?? <p>Ch\xFAc em sinh nh\u1EADt vui v\u1EBB!</p></p>"},song:{file:"https://treuah.netlify.app/ordinary.mp3",title:"Ordinary - Alex Warren"}};var ng={day:20,month:10,photos:["images/love/photobooth_16_oct_1.jpg","images/love/photo_lib_1.jpg","images/love/photobooth_16_oct_2.jpg","images/love/photo_lib_2.jpg","images/love/photobooth_16_oct_3.jpg","images/love/photo_lib_3.jpg","images/love/photobooth_16_oct_4.jpg","images/love/photo_lib_4.jpg","images/love/photobooth_16_oct_5.jpg","images/love/photo_lib_5.jpg","images/love/photobooth_3_oct_1.jpg","images/love/photobooth_3_oct_2.jpg","images/love/photobooth_3_oct_3.jpg","images/birthday/z7912769188496_fba42a0e2807fbead245ba822d2ed1e2.jpg","images/birthday/z7912769240071_f07a699af75d2d169194e938421a20a3.jpg","images/birthday/z7912769283827_92061c656206c440fda4b368213e802f.jpg","images/birthday/z7912769348321_05bd0cd58607eef5227700ef1c313ea8.jpg","images/birthday/z7912769388906_37630896355a641f184ee37d9a6693ec.jpg","images/birthday/z7912769432323_6b32251c989510cad34986c71edff852.jpg","images/birthday/z7912769496467_534fa31f0157927c08bc20eedc16c568.jpg"],photoFallback:"images/love/photobooth_16_oct_1.jpg",letter:{title:"Ch\xFAc M\u1EEBng Ng\xE0y 20/10 Ng\u01B0\u1EDDi Y\xEAu Tuy\u1EC7t V\u1EDDi Nh\u1EA5t C\u1EE7a Anh \u{1F339}\u2764\uFE0F",content:`<p>Ch\xFAc m\u1EEBng ng\xE0y Ph\u1EE5 n\u1EEF Vi\u1EC7t Nam 20/10 t\xECnh y\xEAu c\u1EE7a anh! H\xF4m nay l\xE0 ng\xE0y \u0111\u1EC3 c\u1EA3 th\u1EBF gi\u1EDBi t\xF4n vinh ph\xE1i \u0111\u1EB9p, nh\u01B0ng \u0111\u1ED1i v\u1EDBi anh, em l\xE0 c\xF4 g\xE1i xinh \u0111\u1EB9p, \u0111\xE1ng y\xEAu v\xE0 \u0111\u1EB7c bi\u1EC7t nh\u1EA5t v\u0169 tr\u1EE5 n\xE0y.</p>
        <p>B\xF4ng hoa h\u1ED3ng 3D l\u1EA5p l\xE1nh n\xE0y anh d\xE0nh t\u1EB7ng ri\xEAng cho em \u2014 n\u1EDF r\u1EF1c r\u1EE1 v\xE0 kh\xF4ng bao gi\u1EDD t\xE0n, c\u0169ng gi\u1ED1ng nh\u01B0 t\xECnh c\u1EA3m ch\xE2n th\xE0nh v\xE0 ng\u1ECDt ng\xE0o nh\u1EA5t anh d\xE0nh cho em v\u1EADy.</p>
        <p>Anh gom l\u1EA1i nh\u1EEFng b\u1EE9c \u1EA3nh k\u1EF7 ni\u1EC7m g\u1EA7n nh\u1EA5t c\u1EE7a hai \u0111\u1EE9a m\xECnh, t\u1EEBng n\u1EE5 c\u01B0\u1EDDi, t\u1EEBng \xE1nh m\u1EAFt, t\u1EEBng kho\u1EA3nh kh\u1EAFc \u1EDF b\xEAn em \u0111\u1EC1u l\xE0 nh\u1EEFng \u0111i\u1EC1u v\xF4 gi\xE1 m\xE0 anh lu\xF4n tr\xE2n tr\u1ECDng. C\u1EA3m \u01A1n em v\xEC \u0111\xE3 lu\xF4n \u1EDF b\xEAn anh, c\xF9ng anh chia s\u1EBB t\u1EEBng ni\u1EC1m vui n\u1ED7i bu\u1ED3n.</p>
        <p>Ch\xFAc em ng\xE0y 20/10 ng\u1EADp tr\xE0n ni\u1EC1m vui, lu\xF4n r\u1EA1ng r\u1EE1, t\u1EF1 tin, h\u1EA1nh ph\xFAc v\xE0 \u0111\u01B0\u1EE3c anh y\xEAu th\u01B0\u01A1ng chi\u1EC1u chu\u1ED9ng nhi\u1EC1u h\u01A1n m\u1ED7i ng\xE0y nh\xE9!</p>
        <p>Anh y\xEAu em nhi\u1EC1u l\u1EAFm bae \u01A1i! Happy Vietnamese Women's Day 20/10! \u{1F339}\u2728\u{1F496}</p>`},song:{file:"https://treuah.netlify.app/ordinary.mp3",title:"Ordinary - Alex Warren"}};var zi={sun:"images/sun.jpg",venus:"images/venus.jpg",earth:"images/earth.jpg",mars:"images/mars.jpg",jupiter:"images/jupiter.jpg",saturn:"images/saturn.jpg",neptune:"images/neptune.jpg",stars:"images/stars.jpg",moon:"images/moon.jpg",phobos:"images/phobos.jpg",asteroid:"images/asteroid.jpg",vetinh:"images/vetinh.jpg"},UE=[{id:"sun",type:"star",name:"M\u1EB7t Tr\u1EDDi",texture:zi.sun,size:80,orbitRadius:0,spinSpeed:.2,fact:"N\u0103ng l\u01B0\u1EE3ng c\u1EE7a m\u1EB7t tr\u1EDDi s\u01B0\u1EDFi \u1EA5m c\u1EA3 v\u0169 tr\u1EE5 n\xE0y...",message:"...nh\u01B0ng n\u1EE5 c\u01B0\u1EDDi c\u1EE7a c\u1EADu m\u1EDBi l\xE0 th\u1EE9 s\u01B0\u1EDFi \u1EA5m m\xF9a \u0111\xF4ng n\xE0y =))) .",camera:{offset:{x:0,y:150,z:250},lookAtOffset:{x:0,y:20,z:0},orbitSpeed:5e-4}},{id:"venus",type:"planet",name:"Sao Kim",texture:zi.venus,size:6,orbitRadius:150,orbitSpeed:4,spinSpeed:.5,fact:"Sao Kim \u0111\u01B0\u1EE3c \u0111\u1EB7t theo t\xEAn n\u1EEF th\u1EA7n t\xECnh y\xEAu v\xE0 s\u1EAFc \u0111\u1EB9p trong th\u1EA7n tho\u1EA1i La M\xE3...",message:"...\u0111i\u1EC1u \u0111\xF3 gi\u1EA3i th\xEDch t\u1EA1i sao t\u1EDB l\u1EA1i t\xECm th\u1EA5y c\u1EADu \u1EDF \u0111\xE2y hehe.",camera:{offset:{x:-18,y:8,z:18},lookAtOffset:{x:0,y:1,z:0},orbitSpeed:.0025}},{id:"earth",type:"planet",name:"Tr\xE1i \u0110\u1EA5t",texture:zi.earth,size:7,orbitRadius:220,orbitSpeed:3,spinSpeed:2.5,fact:"Tr\xE1i \u0110\u1EA5t l\xE0 h\xE0nh tinh duy nh\u1EA5t \u0111\u01B0\u1EE3c bi\u1EBFt \u0111\u1EBFn c\xF3 s\u1EF1 s\u1ED1ng...",message:"...v\xE0 c\xF3 l\u1EBD ch\xFAng ta c\u0169ng m\u1EDBi b\u1EAFt \u0111\u1EA7u m\u1ED9t h\xE0nh tr\xECnh nh\u1ECF.",moons:[{id:"moon",name:"M\u1EB7t Tr\u0103ng",texture:zi.moon,size:1.5,orbitRadius:15,orbitSpeed:1.5,spinSpeed:.2}],camera:{offset:{x:25,y:5,z:25},lookAtOffset:{x:0,y:0,z:0},orbitSpeed:.002}},{id:"mars",type:"planet",name:"Sao H\u1ECFa",texture:zi.mars,size:5,orbitRadius:300,orbitSpeed:2.5,spinSpeed:2,fact:"Sao H\u1ECFa \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 'H\xE0nh tinh \u0110\u1ECF' v\xEC m\xE0u s\u1EAFc c\u1EE7a n\xF3...",message:"...gi\u1ED1ng nh\u01B0 nh\u1EEFng rung \u0111\u1ED9ng m\u1EDBi m\u1EBB trong tim c\u1EE7a m\xECnh hehehehe, \xED l\xE0 tim n\xF3 c\u1EE9 \u0111\u1ECF r\u1EF1c th =)))) .",moons:[{id:"phobos",name:"Phobos",texture:zi.phobos,size:.8,orbitRadius:8,orbitSpeed:3,spinSpeed:.5}],camera:{offset:{x:0,y:10,z:-18},lookAtOffset:{x:0,y:0,z:0},orbitSpeed:.003}},{id:"jupiter",type:"planet",name:"Sao M\u1ED9c",texture:zi.jupiter,size:30,orbitRadius:450,orbitSpeed:1.5,spinSpeed:4,fact:"Sao M\u1ED9c l\xE0 h\xE0nh tinh l\u1EDBn nh\u1EA5t...",message:"...gi\u1ED1ng t\u1EDB \xED l\xE0 y\xEAu c\u1EADu nhi\u1EC1u \u1EA5y =)))) .",camera:{offset:{x:50,y:-15,z:50},lookAtOffset:{x:0,y:10,z:0},orbitSpeed:8e-4}},{id:"saturn",type:"planet",name:"Sao Th\u1ED5",texture:zi.saturn,size:25,orbitRadius:650,orbitSpeed:1,spinSpeed:3.5,fact:"Sao Th\u1ED5 n\u1ED5i ti\u1EBFng v\u1EDBi v\xE0nh \u0111ai tuy\u1EC7t \u0111\u1EB9p c\u1EE7a n\xF3...",message:"...bi\u1EBFt \u0111\xE2u sau n\xE0y m\xECnh c\u0169ng c\xF3 th\xEAm nhi\u1EC1u k\u1EF7 ni\u1EC7m v\xF2ng quanh nhau ha =))).",camera:{offset:{x:60,y:-20,z:60},lookAtOffset:{x:0,y:5,z:0},orbitSpeed:7e-4}},{id:"neptune",type:"planet",name:"Sao H\u1EA3i V\u01B0\u01A1ng",texture:zi.neptune,size:15,orbitRadius:800,orbitSpeed:.8,spinSpeed:2.8,fact:"Sao H\u1EA3i V\u01B0\u01A1ng l\xE0 h\xE0nh tinh xa m\u1EB7t tr\u1EDDi nh\u1EA5t...",message:"...nh\u01B0ng d\xF9 \u1EDF xa th\u1EBF n\xE0o th\xEC kho\u1EA3ng c\xE1ch v\u1EABn ch\u01B0a bao gi\u1EDD l\xE0 v\u1EA5n \u0111\u1EC1.",camera:{offset:{x:0,y:20,z:45},lookAtOffset:{x:0,y:0,z:0},orbitSpeed:.0015}}];var OE=[{id:0,position:new I(0,15,0),attachedTo:"earth"},{id:1,position:new I(12,0,0),attachedTo:"mars"},{id:2,position:new I(0,40,0),attachedTo:"saturn"},{id:3,position:new I(380,5,10),attachedTo:"scene"},{id:4,position:new I(10,5,0),attachedTo:"venus"}];var FE={star:{name:"Ng\xF4i Sao D\u1EABn L\u1ED1i",vertices:[new I(0,500,50),new I(380,150,50),new I(235,-200,50),new I(-235,-200,50),new I(-380,150,50),new I(0,0,150),new I(0,500,-50),new I(380,150,-50),new I(235,-200,-50),new I(-235,-200,-50),new I(-380,150,-50),new I(0,0,-150)],faces:[[5,1,0],[5,2,1],[5,3,2],[5,4,3],[5,0,4],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6],[0,1,7],[0,7,6],[1,2,8],[1,8,7],[2,3,9],[2,9,8],[3,4,10],[3,10,9],[4,0,6],[4,6,10]],hints:["\u0110i\u1EC3m \u0111\u1EA7u ti\xEAn l\xE0 \u0111\u1EC9nh cao nh\u1EA5t. Ng\xF4i sao ti\u1EBFp theo n\u1EB1m \u1EDF ph\xEDa tr\xEAn b\xEAn ph\u1EA3i...","Ch\xEDnh x\xE1c. Gi\u1EDD h\xE3y t\xECm \u0111i\u1EC3m \u1EDF ph\xEDa d\u01B0\u1EDBi b\xEAn ph\u1EA3i...","Tuy\u1EC7t v\u1EDDi. \u0110i\u1EC3m ti\u1EBFp theo \u1EDF ph\xEDa d\u01B0\u1EDBi b\xEAn tr\xE1i...","G\u1EA7n xong r\u1ED3i! T\xECm n\u1ED1t \u0111i\u1EC3m \u1EDF ph\xEDa tr\xEAn b\xEAn tr\xE1i...","\u0110\xE2y l\xE0 t\xE2m c\u1EE7a m\u1EB7t tr\u01B0\u1EDBc, n\xF3 h\u01A1i nh\xF4 ra m\u1ED9t ch\xFAt...","B\xE2y gi\u1EDD ch\xFAng ta b\u1EAFt \u0111\u1EA7u m\u1EB7t sau. T\xECm \u0111\u1EC9nh cao nh\u1EA5t m\u1ED9t l\u1EA7n n\u1EEFa...","\u0110\xFAng r\u1ED3i. Ti\u1EBFp t\u1EE5c v\u1EDBi \u0111\u1EC9nh tr\xEAn b\xEAn ph\u1EA3i c\u1EE7a m\u1EB7t sau...","T\xECm \u0111\u1EC9nh d\u01B0\u1EDBi b\xEAn ph\u1EA3i c\u1EE7a m\u1EB7t sau...","\u0110\u1EC9nh d\u01B0\u1EDBi b\xEAn tr\xE1i c\u1EE7a m\u1EB7t sau...","\u0110\u1EC9nh cu\u1ED1i c\xF9ng c\u1EE7a c\xE1c c\xE1nh! Ph\xEDa tr\xEAn b\xEAn tr\xE1i...","Ho\xE0n h\u1EA3o! C\u1EADu \u0111\xE3 t\xECm th\u1EA5y t\u1EA5t c\u1EA3 c\xE1c \u0111i\u1EC3m. H\xE3y xem \u0111i\u1EC1u k\u1EF3 di\u1EC7u!"],specialMessage:{title:"V\xEC Sao L\u1EA5p L\xE1nh",content:"<p>T\u1EEB nh\u1EEFng \u0111i\u1EC3m s\xE1ng c\u1EADu ki\xEAn nh\u1EABn t\xECm ki\u1EBFm, m\u1ED9t ng\xF4i sao ho\xE0n ch\u1EC9nh \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA1o n\xEAn.</p><p>N\xF3 l\xE0 bi\u1EC3u t\u01B0\u1EE3ng cho s\u1EF1 ki\xEAn nh\u1EABn v\xE0 s\xE1ng t\u1EA1o, t\u1EEB nh\u1EEFng th\u1EE9 nh\u1ECF nh\u1EA5t c\xF3 th\u1EC3 \u0111\u1ECBnh h\xECnh n\xEAn s\u1EF1 ho\xE0n h\u1EA3o cho n\xEAn l\xE0 c\u1ED1 g\u1EAFng l\xEAn nh\xE9 !! T\u1EDB tin \u1EDF c\u1EADu.</p>"}},pyramid:{name:"Kim T\u1EF1 Th\xE1p K\xFD \u1EE8c",vertices:[new I(0,300,0),new I(-150,0,-150),new I(150,0,-150),new I(150,0,150),new I(-150,0,150)],faces:[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[1,3,2],[1,4,3]],hints:["B\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\u1EC9nh cao nh\u1EA5t. Gi\u1EDD t\xECm m\u1ED9t g\xF3c c\u1EE7a m\u1EB7t \u0111\xE1y...","\u0110\xFAng r\u1ED3i, t\xECm g\xF3c ti\u1EBFp theo theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3...","Tuy\u1EC7t v\u1EDDi, g\xF3c th\u1EE9 ba...","Ch\xEDnh x\xE1c! C\u1EADu \u0111\xE3 t\xECm th\u1EA5y t\u1EA5t c\u1EA3 c\xE1c \u0111i\u1EC3m. \u0110i\u1EC1u g\xEC s\u1EBD hi\u1EC7n ra \u0111\xE2y?"],specialMessage:{title:"N\u1EC1n T\u1EA3ng V\u1EEFng Ch\u1EAFc",content:"<p>Gi\u1ED1ng nh\u01B0 kim t\u1EF1 th\xE1p n\xE0y, li\xEAn t\u01B0\u1EDFng \u0111\u1EBFn h\u1ED3i xa x\u01B0a nhi\u1EC1u ng\u01B0\u1EDDi c\u1EF1c nh\u1ECDc m\u1EDBi x\xE2y d\u1EF1ng n\xEAn c\xE1i n\xE0y =))) gi\u1ED1ng nh\u01B0 th\u1EA7y cle d\u1EA1y kh\xF4ng l\xE0m th\xEC l\xE0m g\xEC c\xF3 \u0103n th troll !!! \xED l\xE0 c\u1EADu ph\u1EA3i c\u1ED1 g\u1EAFng x\xE2y d\u1EF1ng \u0111\u01B0\u1EE3c n\u1EC1n m\xF3ng v\u1EEFng ch\u1EAFc same nh\u01B0 kim t\u1EF1 th\xE1p th\xEC t\u1EDB tin m\u1ECDi vi\u1EC7c sau n\xE0y c\u1EE7a c\u1EADu c\u0169ng s\u1EBD c\xF3 th\u1EC3 ph\xE1t tri\u1EC3n thu\u1EADn l\u1EE3i v\xE0 d\u1EC5 d\xE0ng h\u01A1n. T\u1EDA TIN C\u1EACU !!! You can do it...</p>"}}};var Ph=class{constructor(){this.scene=null,this.canvas=null;let t=ng||eg;this.photos=t&&t.photos&&t.photos.length>0?t.photos:["images/love/photobooth_16_oct_1.jpg","images/love/photo_lib_1.jpg","images/love/photobooth_16_oct_2.jpg","images/love/photo_lib_2.jpg","images/love/photobooth_16_oct_3.jpg","images/love/photo_lib_3.jpg","images/love/photobooth_16_oct_4.jpg","images/love/photobooth_16_oct_5.jpg"],this.letterData=t&&t.letter?t.letter:{title:"Ch\xFAc M\u1EEBng Ng\xE0y 20/10 Ng\u01B0\u1EDDi Y\xEAu Tuy\u1EC7t V\u1EDDi Nh\u1EA5t C\u1EE7a Anh \u{1F339}\u2764\uFE0F",content:"<p>Ch\xFAc m\u1EEBng ng\xE0y 20/10 em y\xEAu! Anh ch\xFAc c\xF4 g\xE1i c\u1EE7a anh lu\xF4n xinh \u0111\u1EB9p, r\u1EA1ng r\u1EE1 v\xE0 h\u1EA1nh ph\xFAc nh\u1EA5t.</p>"},this.activeData=t,this.currentPhotoIndex=0,this.init()}init(){this.createDOM(),this.setup3DScene(),this.setupEvents(),this.activeData&&this.activeData.song&&this.activeData.song.file&&Ys.setupMusic(this.activeData.song.file)}createDOM(){let t=document.getElementById("gift-app-container")||document.body,e=[{src:this.photos[0]||"images/love/photobooth_16_oct_1.jpg",title:"16/10 PhotoBooth \u2728",rot:-8},{src:this.photos[1]||"images/love/photo_lib_1.jpg",title:"Kho\u1EA3nh kh\u1EAFc ng\u1ECDt ng\xE0o \u{1F496}",rot:6},{src:this.photos[2]||"images/love/photobooth_16_oct_2.jpg",title:"N\u1EE5 c\u01B0\u1EDDi c\u1EE7a em \u{1F338}",rot:-5}],n=[{src:this.photos[3]||"images/love/photo_lib_2.jpg",title:"Em xinh nh\u1EA5t tr\u1EA7n \u0111\u1EDDi \u{1F339}",rot:7},{src:this.photos[4]||"images/love/photobooth_16_oct_3.jpg",title:"B\xEAn nhau b\xECnh y\xEAn \u2728",rot:-7},{src:this.photos[5]||"images/love/photo_lib_3.jpg",title:"M\xE3i y\xEAu em 20/10 \u2764\uFE0F",rot:8}],i=e.map((a,o)=>`
      <div class="polaroid-card" style="transform: rotate(${a.rot}deg);" data-img="${a.src}" data-index="${o}">
        <div class="polaroid-img-wrapper">
          <img src="${a.src}" alt="${a.title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">${a.title}</div>
      </div>
    `).join(""),r=n.map((a,o)=>`
      <div class="polaroid-card" style="transform: rotate(${a.rot}deg);" data-img="${a.src}" data-index="${o+3}">
        <div class="polaroid-img-wrapper">
          <img src="${a.src}" alt="${a.title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">${a.title}</div>
      </div>
    `).join("");t.innerHTML=`
      <canvas id="gift-webgl-canvas"></canvas>
      <div class="ambient-glow-layer"></div>

      <!-- Top bar -->
      <div class="gift-top-bar">
        <div class="gift-badge">
          <span>\u{1F339}</span>
          <span>Happy Vietnamese Women's Day 20/10 \u2728</span>
        </div>
        <div class="gift-top-actions">
          <button id="gift-gallery-btn" class="gift-btn-circle" title="T\u1EA5t C\u1EA3 \u1EA2nh K\u1EF7 Ni\u1EC7m (${this.photos.length})">\u{1F4F8}</button>
          <button id="gift-music-btn" class="gift-btn-circle" title="B\u1EADt/T\u1EAFt Nh\u1EA1c">\u{1F3B5}</button>
          <button id="gift-back-btn" class="gift-btn-circle" title="V\u1EC1 Trang Ch\xEDnh">\u{1F680}</button>
        </div>
      </div>

      <!-- Hint to open -->
      <div id="gift-hint-box" class="gift-hint-container">
        <button id="gift-open-btn" class="gift-hint-pill">
          <span>\u{1F381}</span>
          <span>M\u1EDF m\xF3n qu\xE0 20/10 b\u1EA5t ng\u1EDD d\xE0nh cho em \u2728</span>
        </button>
      </div>

      <!-- Photo Wings -->
      <div id="gift-wing-left" class="gift-photo-wing wing-left">
        ${i}
      </div>
      <div id="gift-wing-right" class="gift-photo-wing wing-right">
        ${r}
      </div>

      <!-- Royal Love Letter Modal -->
      <div id="gift-letter-backdrop" class="gift-letter-backdrop">
        <div class="gift-letter-modal">
          <div class="gift-wax-seal">\u{1F339}</div>
          <div class="gift-letter-header">
            <p class="gift-letter-kicker">M\u1EEBng Ng\xE0y Ph\u1EE5 N\u1EEF Vi\u1EC7t Nam 20/10</p>
            <h1 class="gift-letter-title">${this.letterData.title}</h1>
            <div class="gift-letter-divider"></div>
          </div>
          <div class="gift-letter-body">
            ${this.letterData.content}
          </div>
          <div class="gift-letter-footer">
            <button id="letter-minimize-btn" class="gift-action-btn btn-secondary">
              <span>\u{1F441}\uFE0F</span>
              <span>Ng\u1EAFm \u0110\xF3a Hoa & H\u1ED9p Qu\xE0 3D</span>
            </button>
            <button id="letter-replay-btn" class="gift-action-btn btn-primary">
              <span>\u{1F504}</span>
              <span>M\u1EDF L\u1EA1i Qu\xE0 20/10</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Minimized Dock -->
      <div id="gift-minimized-dock" class="gift-minimized-dock">
        <button id="dock-open-letter-btn" class="gift-dock-btn">
          <span>\u{1F48C}</span>
          <span>\u0110\u1ECDc Th\u01B0 20/10</span>
        </button>
        <button id="dock-replay-btn" class="gift-dock-btn">
          <span>\u{1F504}</span>
          <span>M\u1EDF L\u1EA1i</span>
        </button>
        <button id="dock-gallery-btn" class="gift-dock-btn">
          <span>\u{1F4F8}</span>
          <span>Xem ${this.photos.length} \u1EA2nh</span>
        </button>
        <button id="dock-music-btn" class="gift-dock-btn">
          <span>\u{1F3B5}</span>
          <span>Nh\u1EA1c</span>
        </button>
      </div>

      <!-- Lightbox for photos -->
      <div id="gift-lightbox" class="gift-lightbox">
        <button id="gift-lightbox-close" class="gift-lightbox-close">&times;</button>
        <div class="gift-lightbox-content" style="position: relative; display: flex; align-items: center; justify-content: center;">
          <button id="lightbox-prev" class="gift-btn-circle" style="position: absolute; left: -60px; z-index: 10;">\u2039</button>
          <img id="gift-lightbox-img" class="gift-lightbox-img" src="" alt="Zoom" />
          <button id="lightbox-next" class="gift-btn-circle" style="position: absolute; right: -60px; z-index: 10;">\u203A</button>
        </div>
        <p id="gift-lightbox-caption" class="gift-lightbox-caption"></p>
        <p id="gift-lightbox-counter" style="font-size: 0.85rem; color: #ffd700; opacity: 0.8; margin-top: 4px;"></p>
      </div>
    `,this.canvas=document.getElementById("gift-webgl-canvas")}setup3DScene(){this.scene=new Ch(this.canvas)}setupEvents(){let t=document.getElementById("gift-open-btn"),e=document.getElementById("gift-hint-box"),n=document.getElementById("gift-wing-left"),i=document.getElementById("gift-wing-right"),r=document.getElementById("gift-letter-backdrop"),a=document.getElementById("letter-minimize-btn"),o=document.getElementById("letter-replay-btn"),c=document.getElementById("gift-minimized-dock"),h=document.getElementById("dock-open-letter-btn"),l=document.getElementById("dock-replay-btn"),d=document.getElementById("gift-music-btn"),u=document.getElementById("dock-music-btn"),f=document.getElementById("gift-back-btn"),g=document.getElementById("gift-lightbox"),_=document.getElementById("gift-lightbox-img"),p=document.getElementById("gift-lightbox-caption"),m=document.getElementById("gift-lightbox-close"),M=()=>{this.scene.isOpened||this.scene.isAnimating||(e.style.opacity="0",e.style.pointerEvents="none",Ys.startMusic(),this.scene.openGiftBox({onWingsReady:()=>{n.classList.add("is-visible"),i.classList.add("is-visible")},onLetterReady:()=>{r.classList.add("is-open")}}))};t&&t.addEventListener("click",M),this.canvas.addEventListener("click",()=>{!this.scene.isOpened&&!this.scene.isAnimating&&M()}),a&&a.addEventListener("click",()=>{r.classList.remove("is-open"),c.classList.add("is-visible")}),h&&h.addEventListener("click",()=>{c.classList.remove("is-visible"),r.classList.add("is-open")});let A=()=>{r.classList.remove("is-open"),c.classList.remove("is-visible"),n.classList.remove("is-visible"),i.classList.remove("is-visible"),this.scene.reset(),setTimeout(()=>{e.style.opacity="1",e.style.pointerEvents="auto"},800)};o&&o.addEventListener("click",A),l&&l.addEventListener("click",A);let v=()=>{let O=Ys.toggleMusic(),P=O?"\u23F8":"\u{1F3B5}";d&&(d.textContent=P),u&&(u.innerHTML=`<span>${P}</span><span>${O?"T\u1EAFt":"B\u1EADt"}</span>`)};d&&d.addEventListener("click",v),u&&u.addEventListener("click",v),f&&f.addEventListener("click",()=>{window.location.href="./index.html"});let b=document.getElementById("gift-lightbox-counter"),T=document.getElementById("lightbox-prev"),E=document.getElementById("lightbox-next"),y=document.getElementById("gift-gallery-btn"),w=document.getElementById("dock-gallery-btn"),C=O=>{this.currentPhotoIndex=(O+this.photos.length)%this.photos.length;let P=this.photos[this.currentPhotoIndex];_.src=P,p.textContent=`K\u1EF7 ni\u1EC7m ng\u1ECDt ng\xE0o #${this.currentPhotoIndex+1}`,b&&(b.textContent=`\u1EA2nh ${this.currentPhotoIndex+1} / ${this.photos.length}`)},L=O=>{C(O),g.classList.add("is-open")};T&&T.addEventListener("click",O=>{O.stopPropagation(),C(this.currentPhotoIndex-1)}),E&&E.addEventListener("click",O=>{O.stopPropagation(),C(this.currentPhotoIndex+1)}),y&&y.addEventListener("click",()=>L(0)),w&&w.addEventListener("click",()=>L(0)),document.querySelectorAll(".polaroid-card").forEach(O=>{O.addEventListener("click",P=>{P.stopPropagation();let B=parseInt(O.getAttribute("data-index")||"0",10);L(B)})}),m&&m.addEventListener("click",()=>{g.classList.remove("is-open")}),g&&g.addEventListener("click",O=>{O.target===g&&g.classList.remove("is-open")})}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>new Ph):new Ph;export{Ph as GiftUnboxingApp};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=gift_unboxing.mjs.map

const wa=t=>"https://wa.me/27698302556?text="+encodeURIComponent(t),R=90,$=i=>document.getElementById(i);
if($("svc")){const M={"Standard home clean":1,"Deep clean":1.6,"Move in/out clean":1.8,"Post-construction clean":2,"Office clean":1,"Daily cleaner":1,"Permanent cleaner":1,"Nanny":1,"Gardening":1,"Painting":1,"Carpet and upholstery":1,"Window cleaning":1,"Laundry and ironing":1};
$("svc").innerHTML=Object.keys(M).map(k=>"<option>"+k+"</option>").join("");const f=n=>"R"+Math.round(n).toLocaleString("en-ZA");
const calc=()=>{const c=+$("cl").value||1,h=+$("hr").value||0,v=+$("vs").value||1,p=c*h*R;
$("out").innerHTML='<div class="mu">Per visit: '+c+" × "+h+"h × R90</div><div class=\"tot\">"+f(p)+"</div><div>Per month ("+v+" visits): <b>"+f(p*v)+"</b></div>";
$("bk").href=wa("Hi Kena, I’d like to book: "+$("svc").value+". "+c+" cleaner(s), "+h+"h per visit, "+v+" visit(s) a month. Estimate: "+f(p)+" per visit, "+f(p*v)+" a month.")};
$("sug").onclick=()=>{$("hr").value=Math.max(2,Math.round((1.5+$("bd").value*.75+$("bt").value*.75)*M[$("svc").value]*2)/2);calc()};
document.querySelectorAll("#calc input,#calc select").forEach(e=>e.oninput=calc);calc()}
if($("qf"))$("qf").onsubmit=e=>{e.preventDefault();location.href=wa("Hi Kena! Name: "+$("n").value+". Phone: "+$("p").value+". Service: "+$("s").value+". Suburb: "+$("a").value+". Date: "+$("d").value+". Notes: "+$("m").value)};
const mb=$("mb"),nv=$("nv");mb.onclick=()=>{const o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};nv.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nv.classList.remove("open");mb.setAttribute("aria-expanded",false)}));

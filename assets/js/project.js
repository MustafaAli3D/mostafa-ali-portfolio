function driveImg(id,w){return "https://drive.google.com/thumbnail?id="+id+"&sz=w"+(w||1800)}
var slug=new URLSearchParams(location.search).get("project");
var p=PROJECTS.find(function(x){return x.slug===slug})||PROJECTS[0];
if(window.GALLERIES&&GALLERIES[p.slug])p.images=GALLERIES[p.slug];
var exactBehance=(window.BEHANCE_LINKS&&BEHANCE_LINKS[p.slug])||"";
document.title=p.title+" — Mostafa Ali";
var imgs=p.images||[];
var gallery=imgs.map(function(id,i){return '<figure><img src="'+driveImg(id,2000)+'" alt="'+p.title+' — image '+(i+1)+'" loading="'+(i<2?'eager':'lazy')+'" decoding="async"></figure>'}).join("");
var topBehance=exactBehance?'<a class="behance-btn" href="'+exactBehance+'" target="_blank" rel="noopener">VIEW ON BEHANCE ↗</a>':'';
var bottomBehance=exactBehance?'<a class="behance-btn" href="'+exactBehance+'" target="_blank" rel="noopener">VIEW FULL PROJECT ON BEHANCE ↗</a>':'';
document.getElementById("projectPage").innerHTML=
'<section class="project-hero-card">'+
  '<a class="project-back" href="work.html">← BACK TO ALL WORK</a>'+
  '<div class="project-title-row">'+
    '<div><div class="project-kicker">'+p.category.toUpperCase()+' // '+p.year+'</div><h1>'+p.title+'</h1></div>'+
    topBehance+
  '</div>'+
  '<div class="project-facts">'+
    '<div><span>ROLE</span><b>3D DESIGN & VISUALIZATION</b></div>'+
    '<div><span>YEAR</span><b>'+p.year+'</b></div>'+
    '<div><span>GALLERY</span><b>'+imgs.length+' IMAGES</b></div>'+
  '</div>'+
'</section>'+
'<section class="gallery">'+gallery+'</section>'+
'<section class="project-end">'+bottomBehance+'<a class="back-work-btn" href="work.html">BACK TO ALL WORK</a></section>';
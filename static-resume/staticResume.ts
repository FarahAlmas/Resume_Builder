let ObjectiveBtn = document.getElementById('ObjectiveBtn');
let EducationBtn = document.getElementById('EducationBtn');
let SkillsBtn    = document.getElementById('SkillsBtn');
let WorkExpBtn   = document.getElementById('WorkExpBtn');

let ObjectiveSec:any = document.getElementById('objectiveSec');
let Edusec:any       = document.getElementById('edusec');
let SkillSec:any     = document.getElementById('skillSec');
let WorkExpSec:any   = document.getElementById('workExpSec');

ObjectiveBtn?.addEventListener('click', ()=>{
  if(ObjectiveSec.style.display == 'block'){
    ObjectiveSec.style.display = 'none';
  }else{
    ObjectiveSec.style.display='block'
  }
})


EducationBtn?.addEventListener('click', ()=>{
  if(Edusec.style.display == 'block'){
    Edusec.style.display = 'none';
  }else{
    Edusec.style.display='block'
  }
})


SkillsBtn ?.addEventListener('click', ()=>{
  if(SkillSec.style.display == 'block'){
    SkillSec.style.display = 'none';
  }else{
    SkillSec.style.display='block'
  }
})


WorkExpBtn ?.addEventListener('click', ()=>{
  if( WorkExpSec.style.display == 'block'){
    WorkExpSec.style.display = 'none';
  }else{
    WorkExpSec.style.display='block'
  }
})
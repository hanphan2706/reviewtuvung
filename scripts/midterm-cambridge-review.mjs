/** Cambridge-style inline review patch for mid-term reading/listening HTML. */

import { injectExamCopyFriction } from "../lib/exam/inject-exam-copy-friction.mjs";
import { injectExamDictionaryPopover } from "../lib/exam/inject-exam-dictionary-popover.mjs";

export const REVIEW_CSS = `
#exam-screen.exam-review-mode .opt.review-user{border-color:var(--exam-purple);background:#ebe6f4;font-weight:500}
#exam-screen.exam-review-mode .opt.review-correct{border-color:#34a853;background:#f4fbf5;font-weight:500}
#exam-screen.exam-review-mode .opt.review-user.review-correct{border-color:#34a853;background:#e8f5e9;box-shadow:inset 0 0 0 2px var(--exam-purple)}
#exam-screen.exam-review-mode .tfngsel.review-user,
#exam-screen.exam-review-mode .msel.review-user,
#exam-screen.exam-review-mode .wbsel.review-user{border-color:var(--exam-purple);background:#ebe6f4;font-weight:500}
#exam-screen.exam-review-mode .tfngsel.review-correct,
#exam-screen.exam-review-mode .msel.review-correct,
#exam-screen.exam-review-mode .wbsel.review-correct{border-color:#34a853;background:#f4fbf5;font-weight:500}
#exam-screen.exam-review-mode .tfngsel.review-user.review-correct,
#exam-screen.exam-review-mode .msel.review-user.review-correct,
#exam-screen.exam-review-mode .wbsel.review-user.review-correct{border-color:#34a853;background:#e8f5e9;box-shadow:inset 0 0 0 2px var(--exam-purple)}
.review-correct-pill{display:block;margin:0;padding:0;border:none;background:transparent;color:#1a7a30;font-size:11px;font-weight:600;line-height:1.35;white-space:nowrap;text-align:right}
.review-correct-pill::before{content:'Đáp án đúng: ';color:#5a6b5f;font-weight:500}
.qb-tfng .review-correct-pill{align-self:flex-end}
.mrow .review-correct-pill{width:100%;margin-top:2px;text-align:right}
.exam-review-mode .wbchip-drag-handle{cursor:default;pointer-events:none}
#sub-btn .review-score-band{font-weight:600;color:rgba(250,250,250,.82)}
#exam-screen.exam-review-mode #questions-panel input,
#exam-screen.exam-review-mode #questions-panel select,
#exam-screen.exam-review-mode #questions-panel label.opt{pointer-events:none!important}
#exam-screen.exam-review-mode #questions-panel input,
#exam-screen.exam-review-mode #questions-panel select{opacity:.92}
#exam-screen.exam-review-mode #sub-btn{cursor:default;pointer-events:none}
#exam-screen.exam-review-mode #sub-btn:hover{background:var(--exam-submit-bg)}
#exam-screen.exam-review-mode .track-hint{color:var(--exam-chrome-subtle)}
.ans-review-line{margin-top:6px;font-size:11px;line-height:1.45;display:flex;flex-wrap:wrap;gap:6px 14px}
.ans-review-line .ans-your{color:#555}
.ans-review-line .ans-correct{color:#1a7a30;font-weight:700}
.ans-review-line.is-correct .ans-your{color:#1a7a30}
.ans-review-line.is-wrong .ans-your{color:#b71c1c}
#exam-screen.exam-review-mode #questions-panel .mtext,
#exam-screen.exam-review-mode #questions-panel .qtext,
#exam-screen.exam-review-mode #questions-panel .sec-instr,
#exam-screen.exam-review-mode #questions-panel .sec-range,
#exam-screen.exam-review-mode #questions-panel .sumtext,
#exam-screen.exam-review-mode #questions-panel .sumtitle,
#exam-screen.exam-review-mode #questions-panel .people-bank-name,
#exam-screen.exam-review-mode #questions-panel .wbchip-text,
#exam-screen.exam-review-mode #questions-panel .opt-text{user-select:text;-webkit-user-select:text}
#success-overlay{display:none!important}
`;

export const REVIEW_HELPERS = `
var QUESTION_NUMS=[];
for(var _qi=1;_qi<=40;_qi++)QUESTION_NUMS.push(_qi);
var TOTAL_Q=40;
var examAnswerKey=(window.__EXAM_BOOT__&&window.__EXAM_BOOT__.answerKey)||null;
var examReviewMode=false;
var userAnswersSnapshot={};

function stopExamTimer(){
  if(timerInt){clearInterval(timerInt);timerInt=null;}
}

function stopExamAudio(){
  var ae=document.getElementById('exam-audio');
  if(ae){try{ae.pause();}catch(e){}}
}

function clearPhrasePick(){}

function normalizeAns(v){
  return String(v||'')
    .replace(/[\\u2018\\u2019\\u201A\\u2032\\u0060\\u00B4]/g,"'")
    .replace(/[\\u201C\\u201D\\u201E\\u2033]/g,'"')
    .replace(/[\\u2010\\u2011\\u2012\\u2013\\u2014\\u2212]/g,'-')
    .replace(/\\u00A0/g,' ')
    .trim().toLowerCase().replace(/\\s+/g,' ');
}

function ieltsAcademicReadingBandFromRaw40(raw){
  var r=Math.max(0,Math.min(40,Math.round(raw)));
  if(r>=39)return 9;
  if(r>=37)return 8.5;
  if(r>=35)return 8;
  if(r>=33)return 7.5;
  if(r>=30)return 7;
  if(r>=27)return 6.5;
  if(r>=23)return 6;
  if(r>=19)return 5.5;
  if(r>=15)return 5;
  if(r>=13)return 4.5;
  if(r>=10)return 4;
  if(r>=8)return 3.5;
  if(r>=6)return 3;
  if(r>=4)return 2.5;
  if(r>=2)return 2;
  if(r>=1)return 1;
  return 0;
}

function ieltsListeningBandFromRaw40(raw){
  var r=Math.max(0,Math.min(40,Math.round(raw)));
  if(r>=39)return 9;
  if(r>=37)return 8.5;
  if(r>=35)return 8;
  if(r>=32)return 7.5;
  if(r>=30)return 7;
  if(r>=26)return 6.5;
  if(r>=23)return 6;
  if(r>=18)return 5.5;
  if(r>=16)return 5;
  if(r>=13)return 4.5;
  if(r>=10)return 4;
  if(r>=8)return 3.5;
  if(r>=6)return 3;
  if(r>=4)return 2.5;
  if(r>=2)return 2;
  if(r>=1)return 1;
  return 0;
}

function formatIeltsBand(band){
  return Number(band).toFixed(1);
}

function splitAnswerLetters(val){
  return String(val||'').split(/[,，/]/).map(function(x){return x.trim();}).filter(Boolean);
}

function getCorrectAnswerForQuestion(num){
  if(examAnswerKey&&examAnswerKey['q'+num])return examAnswerKey['q'+num];
  if(examAnswerKey&&examAnswerKey[String(num)])return examAnswerKey[String(num)];
  if(!examAnswerKey)return '';
  var keys=Object.keys(examAnswerKey);
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    if(k.indexOf('&')<0)continue;
    var parts=k.split('&').map(function(p){return parseInt(p,10);});
    var idx=parts.indexOf(num);
    if(idx<0)continue;
    var letters=splitAnswerLetters(examAnswerKey[k]);
    if(letters.length===parts.length)return letters[idx];
    return examAnswerKey[k];
  }
  return '';
}

function getChooseTwoPairKey(num){
  if(!examAnswerKey)return null;
  var keys=Object.keys(examAnswerKey);
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    if(k.indexOf('&')<0)continue;
    var parts=k.split('&').map(function(p){return parseInt(p,10);});
    if(parts.indexOf(num)>=0)return {key:k,parts:parts,letters:splitAnswerLetters(examAnswerKey[k])};
  }
  return null;
}

function answersMatch(userVal,correctVal){
  if(!userVal||!correctVal)return false;
  var userNorm=normalizeAns(userVal);
  var alts=String(correctVal).split(/\\//).map(function(x){return normalizeAns(x);}).filter(Boolean);
  if(alts.length===0)alts=[normalizeAns(correctVal)];
  if(alts.indexOf(userNorm)>=0)return true;
  if(alts.some(function(a){
    return normalizeAns(userVal.replace(/[^a-z0-9\\s]/gi,''))===a.replace(/[^a-z0-9\\s]/gi,'');
  }))return true;
  return false;
}

/** Choose-TWO: thứ tự không quan trọng — C,B cùng đúng như B,C. */
function isAnswerCorrect(num,userVal){
  if(!String(userVal||'').trim())return false;
  var pair=getChooseTwoPairKey(num);
  if(pair){
    var expected=pair.letters.map(function(x){return normalizeAns(x);}).filter(Boolean);
    return expected.indexOf(normalizeAns(userVal))>=0;
  }
  var direct=getCorrectAnswerForQuestion(num);
  if(direct)return answersMatch(userVal,direct);
  return false;
}

function computeExamScore(){
  if(!examAnswerKey||!QUESTION_NUMS.length)return null;
  var correct=0,total=0;
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var n=QUESTION_NUMS[i];
    var correctVal=getCorrectAnswerForQuestion(n);
    if(!String(correctVal).trim())continue;
    total++;
    if(isAnswerCorrect(n,userAnswersSnapshot['q'+n]||''))correct++;
  }
  if(!total)return null;
  var rawForBand=total===40?correct:Math.round((correct/total)*40);
  var bandFn=typeof ieltsListeningBandFromRaw40==='function'&&document.getElementById('exam-audio')
    ?ieltsListeningBandFromRaw40
    :ieltsAcademicReadingBandFromRaw40;
  return {
    correct:correct,
    total:total,
    band:bandFn(rawForBand),
    equivalent:total!==40
  };
}

function renderReviewScore(){
  var btn=document.getElementById('sub-btn');
  if(!btn)return;
  var score=computeExamScore();
  if(!score){
    btn.textContent='Submit answers';
    btn.disabled=false;
    btn.removeAttribute('aria-label');
    return;
  }
  var bandLabel=score.equivalent?'Band tương đương ':'Band ';
  btn.innerHTML='<span>'+score.correct+'/'+score.total+' câu đúng</span>'+
    '<span class="review-score-band"> · '+bandLabel+formatIeltsBand(score.band)+'</span>';
  btn.disabled=true;
  btn.setAttribute('aria-label',score.correct+' trên '+score.total+' câu đúng, '+bandLabel+formatIeltsBand(score.band));
}

function reviewLineHtml(userVal,correctVal,num){
  var u=pdfEscHtml(userVal||'—');
  var c=pdfEscHtml(correctVal||'—');
  var match=typeof num==='number'?isAnswerCorrect(num,userVal):answersMatch(userVal,correctVal);
  var cls='ans-review-line'+(match?' is-correct':' is-wrong');
  return '<div class="'+cls+'"><span class="ans-your">Bạn: '+u+'</span><span class="ans-correct">Đáp án: '+c+'</span></div>';
}

function insertReviewLineAfter(el,html){
  if(!el||el.nextElementSibling&&el.nextElementSibling.classList.contains('ans-review-line'))return;
  var d=document.createElement('div');
  d.innerHTML=html;
  var line=d.firstElementChild;
  if(!line)return;
  if(el.parentNode)el.parentNode.insertBefore(line,el.nextSibling);
}

function highlightSelectReview(sel,userVal,correctVal,num){
  if(!sel)return;
  var pillKey=sel.id;
  if(!pillKey){
    var oc=sel.getAttribute('onchange')||'';
    var m=oc.match(/'q(\\d+)'/);
    if(m)pillKey='sel-q'+m[1];
  }
  var pillId=pillKey?'review-pill-'+pillKey:null;
  sel.classList.remove('review-user','review-correct');
  var userNorm=normalizeAns(userVal);
  var match=typeof num==='number'?isAnswerCorrect(num,userVal):answersMatch(userVal,correctVal);
  if(userNorm)sel.classList.add('review-user');
  if(match)sel.classList.add('review-correct');
  if(pillId){
    var existing=document.getElementById(pillId);
    if(existing)existing.remove();
  }
  if(!match&&String(correctVal||'').trim()){
    var pill=document.createElement('span');
    if(pillId)pill.id=pillId;
    pill.className='review-correct-pill';
    pill.textContent=correctVal;
    var tfngWrap=sel.closest('.tfng');
    var mrowTop=sel.closest('.mrow-top');
    if(tfngWrap){
      tfngWrap.appendChild(pill);
    }else if(mrowTop&&mrowTop.parentNode){
      mrowTop.parentNode.insertBefore(pill,mrowTop.nextSibling);
    }else if(sel.parentNode){
      sel.parentNode.insertBefore(pill,sel.nextSibling);
    }
  }
}

function highlightMcqReview(qid,userVal,correctVal,num){
  var opts=document.getElementById(qid+'-opts');
  if(!opts)return;
  var userNorm=normalizeAns(userVal);
  var correctNorm=normalizeAns(correctVal);
  opts.querySelectorAll('.opt').forEach(function(lab){
    var inp=lab.querySelector('input[type="radio"]');
    if(!inp)return;
    var val=normalizeAns(inp.value);
    lab.classList.remove('review-user','review-correct');
    if(userNorm&&val===userNorm)lab.classList.add('review-user');
    if(correctNorm&&val===correctNorm)lab.classList.add('review-correct');
  });
}

function applyReviewAnswers(){
  if(!examAnswerKey||!TOTAL_Q)return;
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var n=QUESTION_NUMS[i];
    var qid='q'+n;
    var correct=getCorrectAnswerForQuestion(n);
    if(!String(correct).trim())continue;
    var user=userAnswersSnapshot[qid]||'';
    var html=reviewLineHtml(user,correct,n);
    var inp=document.getElementById(qid);
    if(inp){
      if(inp.classList&&inp.classList.contains('phrase-drop')){
        insertReviewLineAfter(inp.closest('.phrase-gap-stack')||inp,html);
      }else{
        insertReviewLineAfter(inp.closest('.fi-stack')||inp,html);
      }
      continue;
    }
    var sel=document.getElementById('sel-'+qid);
    if(sel){
      if(sel.type==='hidden'){
        var dndRow=document.getElementById('anchor-'+qid)||sel.closest('.dnd-row');
        if(dndRow)insertReviewLineAfter(dndRow,html);
      }else{
        highlightSelectReview(sel,user,correct,n);
      }
      continue;
    }
    var optsEl=document.getElementById(qid+'-opts');
    if(optsEl){
      highlightMcqReview(qid,user,correct,n);
      continue;
    }
    var msel=document.querySelector('#questions-panel [onchange*="'+qid+'"]');
    if(msel&&msel.tagName==='SELECT'){
      highlightSelectReview(msel,user,correct,n);
    }
  }
}

function lockExamInputs(){
  document.querySelectorAll('#questions-panel input, #questions-panel select').forEach(function(el){
    el.disabled=true;
  });
  document.querySelectorAll('#questions-panel .wbchip-drag-handle').forEach(function(handle){
    handle.setAttribute('draggable','false');
  });
  clearPhrasePick();
}

function recordIeltsPracticeAttempt(){
  var score=computeExamScore();
  if(!score||!Number.isFinite(score.band))return;
  var skill=document.getElementById('exam-audio')?'listening':'reading';
  try{
    var key='anthicIeltsAttempts:'+skill;
    var prev=JSON.parse(localStorage.getItem(key)||'[]');
    if(!Array.isArray(prev))prev=[];
    prev.unshift({band:score.band,at:Date.now()});
    localStorage.setItem(key,JSON.stringify(prev.slice(0,20)));
  }catch(e){}
  try{
    fetch('/api/ielts/practice-attempt',{
      method:'POST',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({skill:skill,band:score.band,examKey:window.location.pathname||''})
    }).catch(function(){});
  }catch(e){}
}

function enterReviewMode(){
  if(examReviewMode)return;
  examReviewMode=true;
  stopExamTimer();
  stopExamAudio();
  userAnswersSnapshot=collectAnswers();
  var ex=document.getElementById('exam-screen');
  if(ex)ex.classList.add('exam-review-mode');
  lockExamInputs();
  if(examAnswerKey)applyReviewAnswers();
  renderReviewScore();
  recordIeltsPracticeAttempt();
  sendSubmissionToGoogleSheet();
  if(typeof window.__examDictEnterReviewMode==="function")window.__examDictEnterReviewMode();
}
`;

export const SUBMIT_FLOW = {
  reading: `
function showSuccess(){enterReviewMode();}

function autoSubmit(){enterReviewMode();}

function submitExam(){
  if(examReviewMode)return;
  if(!confirm('Nộp bài và xem lại trên trang này?'))return;
  stopExamTimer();
  enterReviewMode();
}
`,
  listening: `
function showSuccess(){enterReviewMode();}

function autoSubmit(){enterReviewMode();}

function submitExam(){
  if(examReviewMode)return;
  if(!examStarted){
    alert('Please click Play on the listening screen to start the exam before submitting.');
    return;
  }
  if(!confirm('Nộp bài và xem lại trên trang này?'))return;
  stopExamTimer();
  enterReviewMode();
}
`,
};

export function applyCambridgeReviewPatch(html, kind) {
  let out = html;

  const styleEnd = out.indexOf("</style>");
  if (styleEnd !== -1) {
    out =
      out.slice(0, styleEnd) +
      `\n/* Cambridge review mode */\n${REVIEW_CSS}\n` +
      out.slice(styleEnd);
  }

  out = out.replace(/function showSuccess\(\)/, `${REVIEW_HELPERS}\nfunction showSuccess()`);

  out = out.replace(
    /function showSuccess\(\)\{[\s\S]*?function submitExam\(\)\{[\s\S]*?\n\}/,
    SUBMIT_FLOW[kind].trim(),
  );

  out = out.replace(
    /function getHighlightRootForRange\(range\)\{[\s\S]*?return null;\n\}/,
    `function getHighlightRootForRange(range){
  if(!range)return null;
  var anc=range.commonAncestorContainer;
  if(anc.nodeType===3)anc=anc.parentElement;
  if(anc&&anc.closest&&anc.closest('input,select,textarea,button,.fi,.msel,.fi-num,.mqnum'))return null;
  var passage=document.querySelector('.passage-content.active .p-body');
  var questions=document.querySelector('.qsection.active');
  if(examReviewMode){
    if(passage&&passage.contains(anc))return passage;
    if(questions&&questions.contains(anc))return questions;
    return null;
  }
  if(passage&&passage.contains(anc))return passage;
  if(questions&&questions.contains(anc))return questions;
  return null;
}`,
  );

  out = out.replace(
    "!document.getElementById('success-overlay').style.display.includes('flex')",
    "!examReviewMode",
  );

  out = out.replace(
    /var ov=document\.getElementById\('success-overlay'\);\s*if\(ov&&ov\.style\.display==='flex'\)return;/g,
    "if(examReviewMode)return;",
  );

  out = out.replace(
    /function syncHlPopover\(\)\{\s*\n\s*var exam=document\.getElementById\('exam-screen'\);/,
    `function syncHlPopover(){
  if(examReviewMode){hideHlPopover();return;}
  var exam=document.getElementById('exam-screen');`,
  );

  const withFriction = injectExamCopyFriction(out, kind === "listening" ? "listening" : "reading");
  return injectExamDictionaryPopover(withFriction, kind === "listening" ? "listening" : "reading");
}

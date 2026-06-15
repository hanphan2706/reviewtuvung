/** Cambridge listening review shell + grading for mid-term listening HTML. */

import { REVIEW_HELPERS } from "./midterm-cambridge-review.mjs";

const LEFT_REVIEW_COLUMN_HTML = `
    <div id="exam-body">
      <div id="left-review-column" class="left-review-column">
        <aside id="transcript-panel" class="transcript-panel" aria-label="Transcript">
          <div class="transcript-scroll" id="transcript-scroll">
            <div class="transcript-body" id="transcript-body"><p class="transcript-empty">Transcript sẽ hiện sau khi nộp bài.</p></div>
          </div>
        </aside>
        <div id="review-audio-bar" class="transcript-audio-dock" aria-label="Nghe lại recording">
          <div class="review-audio-card">
            <div class="review-audio-seek" id="review-audio-seek" role="slider" aria-label="Tiến độ audio" tabindex="0">
              <div class="review-audio-seek-track"><div class="review-audio-seek-fill" id="review-audio-seek-fill"></div></div>
              <div class="review-audio-times">
                <span id="review-audio-current">0:00</span>
                <span id="review-audio-duration">—:—</span>
              </div>
            </div>
            <div class="review-audio-controls">
              <div class="review-audio-side">
                <button type="button" class="review-audio-speed" id="review-audio-speed" title="Tốc độ nghe">
                  <svg class="ra-icon ra-icon-gauge" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  <span id="review-audio-speed-label">1x</span>
                </button>
                <button type="button" class="review-audio-mute" id="review-audio-mute" aria-label="Tắt âm thanh" title="Tắt âm thanh">
                  <svg class="ra-icon ra-icon-vol" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </button>
              </div>
              <div class="review-audio-center">
                <button type="button" class="review-audio-skip" id="review-audio-back" aria-label="Lùi 10 giây">
                  <span class="review-audio-skip-wrap">
                    <svg class="ra-icon ra-icon-rotate" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    <span class="review-audio-skip-num">10</span>
                  </span>
                </button>
                <button type="button" class="review-audio-play" id="review-audio-play" aria-label="Phát">
                  <svg class="ra-icon ra-icon-play" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                </button>
                <button type="button" class="review-audio-skip" id="review-audio-fwd" aria-label="Tới 30 giây">
                  <span class="review-audio-skip-wrap">
                    <svg class="ra-icon ra-icon-rotate" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                    <span class="review-audio-skip-num">30</span>
                  </span>
                </button>
              </div>
              <div class="review-audio-side-spacer" aria-hidden="true"></div>
            </div>
            <audio id="review-audio" preload="metadata" playsinline src=""></audio>
          </div>
        </div>
      </div>`;

const LISTENING_REVIEW_CSS = `
#exam-body{display:flex;flex:1;flex-direction:column;min-height:0;overflow:hidden}
#left-review-column{display:none;flex-direction:column;width:50%;min-width:0;border-right:1px solid var(--exam-chrome-border);background:var(--exam-chrome-bg)}
#transcript-panel{display:flex;flex-direction:column;flex:1;min-height:0;overflow:hidden}
.transcript-scroll{flex:1;overflow-y:auto;min-height:0;padding:18px 22px 16px}
.transcript-body{font-size:13.5px;line-height:1.75;color:var(--exam-chrome-text);user-select:text;-webkit-user-select:text}
.transcript-empty{font-size:13px;color:var(--exam-chrome-muted);line-height:1.6}
#review-audio-bar{display:none;flex-shrink:0;padding:6px 10px 8px;background:#fff;border-top:1px solid var(--exam-chrome-border)}
#exam-screen.exam-review-mode #exam-body{flex-direction:row}
#exam-screen.exam-review-mode #left-review-column{display:flex}
#exam-screen.exam-review-mode #questions-panel{width:50%;flex:1;border-left:none}
#exam-screen.exam-review-mode.no-transcript #transcript-panel{display:none}
#exam-screen.exam-review-mode.no-transcript #left-review-column{width:100%;border-right:none;border-bottom:1px solid var(--exam-chrome-border)}
#exam-screen.exam-review-mode.no-transcript #questions-panel{width:100%;flex:1}
#exam-screen.exam-review-mode #review-audio-bar{display:block}
#exam-screen.exam-review-mode #prog-wrap{display:none}
#exam-screen.exam-review-mode #timer-box{display:none}
#exam-screen.exam-review-mode #audio-finished-msg{display:none!important}
#exam-screen.exam-review-mode #transcript-scroll mark.user-hl{background:#fff59d}
.transcript-audio-dock .review-audio-card{border:none;box-shadow:none;padding:0;max-width:none;margin:0;display:flex;flex-direction:column;gap:0}
.review-audio-seek{cursor:pointer}
.review-audio-seek-track{height:5px;border-radius:999px;background:#E4E4E7;overflow:hidden}
.review-audio-seek-fill{height:100%;width:0%;border-radius:999px;background:#000001;transition:width .1s linear}
.review-audio-times{display:flex;justify-content:space-between;margin-top:4px;font-size:11px;line-height:1;color:#47464b;font-variant-numeric:tabular-nums}
.review-audio-controls{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:2px}
.review-audio-side{display:flex;align-items:center;gap:6px;min-width:60px}
.review-audio-side-spacer{width:3.5rem;min-width:3.5rem;flex-shrink:0}
.review-audio-speed{display:inline-flex;align-items:center;gap:4px;border:none;background:transparent;color:#47464b;font-size:12px;font-weight:600;cursor:pointer;padding:0;font-family:inherit}
.review-audio-mute{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:none;border-radius:999px;background:transparent;color:#47464b;cursor:pointer;padding:0}
.review-audio-center{display:flex;align-items:center;justify-content:center;gap:6px}
.review-audio-skip{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:999px;background:transparent;color:#47464b;cursor:pointer;padding:0}
.review-audio-skip-wrap{position:relative;display:flex;width:20px;height:20px;align-items:center;justify-content:center}
.review-audio-skip-num{position:absolute;font-size:7px;font-weight:700;line-height:1}
.review-audio-play{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border:none;border-radius:999px;background:#000001;color:#fff;cursor:pointer;padding:0;box-shadow:0 2px 4px rgba(0,0,1,.12)}
.ra-icon{display:block;flex-shrink:0}
.ra-icon-gauge{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.ra-icon-vol{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.ra-icon-rotate{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.ra-icon-play{width:16px;height:16px;fill:currentColor;stroke:none}
.ra-icon-pause{width:16px;height:16px;fill:currentColor;stroke:none}
#review-audio{display:none}
#exam-screen.exam-review-mode .fi.review-user,
#exam-screen.exam-review-mode .si.review-user{border-bottom-color:var(--exam-purple)}
#exam-screen.exam-review-mode .fi.review-correct,
#exam-screen.exam-review-mode .si.review-correct{border-bottom-color:#34a853}
#exam-screen.exam-review-mode .fi.review-user.review-wrong,
#exam-screen.exam-review-mode .si.review-user.review-wrong{border-bottom-color:#e57373}
#exam-screen.exam-review-mode .opt.review-user{border-color:var(--exam-purple);background:var(--exam-purple-soft);font-weight:500}
#exam-screen.exam-review-mode .opt.review-correct{border-color:#34a853;background:#f4fbf5;font-weight:500}
#exam-screen.exam-review-mode .opt.review-user.review-correct{border-color:#34a853;background:#e8f5e9;box-shadow:inset 0 0 0 2px var(--exam-purple)}
.ans-review-line{margin:4px 0 8px;padding:0;font-size:11px;line-height:1.45;display:flex;flex-wrap:wrap;gap:6px 14px}
.ans-review-line .ans-your{color:#555}
.ans-review-line .ans-correct{color:#1a7a30;font-weight:700}
.ans-review-line.is-correct .ans-your{color:#1a7a30}
.ans-review-line.is-wrong .ans-your{color:#b71c1c}
.fill-review,.dnd-review{margin-top:6px;font-size:11px;line-height:1.45;width:100%}
.dnd-row .dnd-review{grid-column:1/-1}
.ntable .fill-review{display:block;margin-top:4px;max-width:220px}
.ntable td{vertical-align:top}
.transcript-cue{display:flex;width:100%;gap:10px;align-items:flex-start;border:none;background:transparent;padding:8px 10px;margin:0 0 4px;border-radius:8px;text-align:left;cursor:pointer;font:inherit;color:inherit}
.transcript-cue-time{width:42px;flex-shrink:0;font-size:12px;font-weight:600;color:rgba(75,40,118,.55);font-variant-numeric:tabular-nums;padding-top:2px}
.transcript-cue-speaker{font-weight:600;color:#4b2876}
.transcript-q-marker{font-weight:700;color:#4b2876}
.transcript-cue.is-active{background:rgba(75,40,118,.07)}
.transcript-cue.is-active .transcript-cue-time{color:#4b2876;font-weight:700}
.transcript-cue.is-active .transcript-cue-text{font-weight:600;color:#000001}
#success-overlay{display:none!important}
#sub-btn .review-score-band{font-weight:600;color:rgba(250,250,250,.82)}
#exam-screen.exam-review-mode #bot-bar{align-items:center;flex-wrap:nowrap}
#exam-screen.exam-review-mode #sub-btn{cursor:default;pointer-events:none;flex-shrink:0;font-size:13px;padding:8px 14px;white-space:nowrap}
#exam-screen.exam-review-mode #sub-btn:hover{opacity:1}
#exam-screen.exam-review-mode .track-hint{display:none}
#exam-screen.exam-review-mode .track-groups{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:thin;-webkit-overflow-scrolling:touch}
#exam-screen.exam-review-mode .track-grp{flex-wrap:nowrap;flex-shrink:0}
#exam-screen.exam-review-mode .track-grid{flex-wrap:nowrap}
`;

const LISTENING_REVIEW_TAIL = `
var reviewAudioWired=false;
var REVIEW_SPEEDS=[1,1.25,1.5,1.75];
var reviewSpeedIdx=0;
var REVIEW_ICON_PLAY='<svg class="ra-icon ra-icon-play" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>';
var REVIEW_ICON_PAUSE='<svg class="ra-icon ra-icon-pause" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>';
var REVIEW_ICON_VOLUME='<svg class="ra-icon ra-icon-vol" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
var REVIEW_ICON_VOLUME_X='<svg class="ra-icon ra-icon-vol" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>';

function bindExamAudioSrc(audio,src,fallback){
  if(!audio||!src)return;
  audio.src=src;
  if(fallback)audio.dataset.fallback=fallback;
  else delete audio.dataset.fallback;
  audio.dataset.fallbackTried='';
  try{audio.load();}catch(e){}
}

function applyExamPayload(data){
  if(!data)return;
  if(data.answerKey&&typeof data.answerKey==='object')examAnswerKey=data.answerKey;
  if(data.audioUrl||data.audioFallbackUrl){
    var ae=document.getElementById('exam-audio');
    var ra=document.getElementById('review-audio');
    var src=data.audioUrl||data.audioFallbackUrl;
    var fb=data.audioUrl&&data.audioFallbackUrl&&data.audioUrl!==data.audioFallbackUrl?data.audioFallbackUrl:'';
    bindExamAudioSrc(ae,src,fb);
    bindExamAudioSrc(ra,src,fb);
  }
  if(data.transcriptHtml){
    var body=document.getElementById('transcript-body');
    if(body)body.innerHTML=data.transcriptHtml;
  }else if(data.hasTranscript===false){
    var ex=document.getElementById('exam-screen');
    if(ex)ex.classList.add('no-transcript');
  }
}

function formatAudioTime(seconds){
  if(!Number.isFinite(seconds)||seconds<0)return '0:00';
  var total=Math.floor(seconds);
  var m=Math.floor(total/60);
  var s=total%60;
  return m+':'+(s<10?'0':'')+s;
}

function updateReviewAudioUi(){
  var audio=document.getElementById('review-audio');
  var fill=document.getElementById('review-audio-seek-fill');
  var cur=document.getElementById('review-audio-current');
  var dur=document.getElementById('review-audio-duration');
  var playBtn=document.getElementById('review-audio-play');
  if(!audio)return;
  var progress=audio.duration>0?Math.min(1,audio.currentTime/audio.duration):0;
  if(fill)fill.style.width=Math.round(progress*100)+'%';
  if(cur)cur.textContent=formatAudioTime(audio.currentTime);
  if(dur)dur.textContent=audio.duration>0?formatAudioTime(audio.duration):'—:—';
  if(playBtn){
    playBtn.innerHTML=audio.paused?REVIEW_ICON_PLAY:REVIEW_ICON_PAUSE;
    playBtn.setAttribute('aria-label',audio.paused?'Phát':'Tạm dừng');
  }
}

function setReviewMuteIcon(muted){
  var muteBtn=document.getElementById('review-audio-mute');
  if(!muteBtn)return;
  muteBtn.innerHTML=muted?REVIEW_ICON_VOLUME_X:REVIEW_ICON_VOLUME;
  muteBtn.setAttribute('aria-label',muted?'Bật âm thanh':'Tắt âm thanh');
}

function updateTranscriptCueHighlight(){
  var audio=document.getElementById('review-audio');
  if(!audio)return;
  var t=audio.currentTime;
  var activeEl=null;
  document.querySelectorAll('.transcript-cue').forEach(function(el){
    var start=parseFloat(el.getAttribute('data-start'));
    var end=parseFloat(el.getAttribute('data-end'));
    var on=Number.isFinite(start)&&Number.isFinite(end)&&t>=start&&t<=end;
    el.classList.toggle('is-active',on);
    if(on)activeEl=el;
  });
  if(activeEl)activeEl.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function wireTranscriptCueClicks(audio){
  document.querySelectorAll('.transcript-cue').forEach(function(btn){
    btn.addEventListener('click',function(){
      var start=parseFloat(btn.getAttribute('data-start'));
      if(!Number.isFinite(start))return;
      audio.currentTime=start;
      if(audio.paused){var p=audio.play();if(p&&p.catch)p.catch(function(){});}
      updateReviewAudioUi();
      updateTranscriptCueHighlight();
    });
  });
}

function wireReviewAudioPlayer(){
  if(reviewAudioWired)return;
  var audio=document.getElementById('review-audio');
  var seek=document.getElementById('review-audio-seek');
  var playBtn=document.getElementById('review-audio-play');
  var backBtn=document.getElementById('review-audio-back');
  var fwdBtn=document.getElementById('review-audio-fwd');
  var speedBtn=document.getElementById('review-audio-speed');
  var muteBtn=document.getElementById('review-audio-mute');
  if(!audio||!seek||!playBtn)return;
  reviewAudioWired=true;
  audio.addEventListener('error',function(){tryFallbackAudio(audio);});
  audio.addEventListener('loadedmetadata',updateReviewAudioUi);
  audio.addEventListener('timeupdate',function(){
    updateReviewAudioUi();
    if(examReviewMode)updateTranscriptCueHighlight();
  });
  audio.addEventListener('play',updateReviewAudioUi);
  audio.addEventListener('pause',updateReviewAudioUi);
  audio.addEventListener('ended',updateReviewAudioUi);
  wireTranscriptCueClicks(audio);
  playBtn.addEventListener('click',function(){
    if(audio.paused){var p=audio.play();if(p&&p.catch)p.catch(function(){});}
    else audio.pause();
  });
  if(backBtn)backBtn.addEventListener('click',function(){
    if(!Number.isFinite(audio.duration))return;
    audio.currentTime=Math.max(0,audio.currentTime-10);
    updateReviewAudioUi();
  });
  if(fwdBtn)fwdBtn.addEventListener('click',function(){
    if(!Number.isFinite(audio.duration))return;
    audio.currentTime=Math.min(audio.duration,audio.currentTime+30);
    updateReviewAudioUi();
  });
  if(speedBtn)speedBtn.addEventListener('click',function(){
    reviewSpeedIdx=(reviewSpeedIdx+1)%REVIEW_SPEEDS.length;
    var speed=REVIEW_SPEEDS[reviewSpeedIdx];
    audio.playbackRate=speed;
    var speedLabel=document.getElementById('review-audio-speed-label');
    if(speedLabel)speedLabel.textContent=speed+'x';
  });
  if(muteBtn)muteBtn.addEventListener('click',function(){
    audio.muted=!audio.muted;
    setReviewMuteIcon(audio.muted);
  });
  seek.addEventListener('click',function(e){
    if(!Number.isFinite(audio.duration)||!audio.duration)return;
    var rect=seek.getBoundingClientRect();
    var ratio=Math.min(1,Math.max(0,(e.clientX-rect.left)/rect.width));
    audio.currentTime=ratio*audio.duration;
    updateReviewAudioUi();
  });
  updateReviewAudioUi();
}

function setReviewAudioSrc(audio,src){
  if(!audio||!src)return;
  audio.src=src;
  try{audio.load();}catch(e){}
}

function audioSrcPath(src){
  try{var u=new URL(src,window.location.origin);return u.pathname+u.search;}catch(e){return String(src||'');}
}

function tryFallbackAudio(audio){
  if(!audio||audio.dataset.fallbackTried==='1')return;
  var fb=audio.dataset.fallback||'';
  if(!fb||audioSrcPath(audio.src)===audioSrcPath(fb))return;
  audio.dataset.fallbackTried='1';
  setReviewAudioSrc(audio,fb);
}

function showReviewAudioPlayer(){
  stopExamAudio();
  var boot=window.__EXAM_BOOT__||{};
  var src=boot.audioUrl||boot.audioFallbackUrl||'';
  var ae=document.getElementById('exam-audio');
  var reviewAe=document.getElementById('review-audio');
  if(!reviewAe)return;
  if(!src&&ae)src=ae.getAttribute('src')||ae.src||'';
  if(src){
    if(boot.audioFallbackUrl)reviewAe.dataset.fallback=boot.audioFallbackUrl;
    setReviewAudioSrc(reviewAe,src);
  }
  wireReviewAudioPlayer();
  updateTranscriptCueHighlight();
}

function reviewLineHtml(userVal,correctVal,num){
  var u=pdfEscHtml(userVal||'—');
  var c=pdfEscHtml(correctVal||'—');
  var match=typeof num==='number'?isAnswerCorrect(num,userVal):answersMatch(userVal,correctVal);
  var cls='ans-review-line'+(match?' is-correct':' is-wrong');
  return '<div class="'+cls+'"><span class="ans-your">Bạn: '+u+'</span><span class="ans-correct">Đáp án: '+c+'</span></div>';
}

function insertReviewLineAfterParagraph(qnum,user,correct){
  var inp=document.getElementById('q'+qnum);
  if(!inp)return;
  var p=inp.closest('p');
  if(!p||!p.parentNode)return;
  if(p.parentNode.querySelector('.ans-review-line[data-q="'+qnum+'"]'))return;
  var html=reviewLineHtml(user,correct,qnum);
  var d=document.createElement('div');
  d.innerHTML=html;
  var line=d.firstElementChild;
  if(!line)return;
  line.setAttribute('data-q',String(qnum));
  p.parentNode.insertBefore(line,p.nextSibling);
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

function lockExamInputs(){
  document.querySelectorAll('#questions-panel input, #questions-panel select, #questions-panel textarea').forEach(function(el){
    el.disabled=true;
  });
  document.querySelectorAll('#questions-panel .dnd-handle').forEach(function(handle){
    handle.setAttribute('draggable','false');
    handle.style.pointerEvents='none';
  });
  document.querySelectorAll('#questions-panel .dnd-slot, #questions-panel .dnd-pill-row').forEach(function(el){
    el.style.pointerEvents='none';
  });
}

function highlightFillReview(inp,userVal,correctVal,num){
  if(!inp)return;
  inp.classList.remove('review-user','review-correct','review-wrong');
  if(!String(userVal).trim()&&!String(correctVal).trim())return;
  if(String(userVal).trim()){
    if(isAnswerCorrect(num,userVal))inp.classList.add('review-user','review-correct');
    else inp.classList.add('review-user','review-wrong');
  }
  var stack=inp.closest('.fi-stack')||inp.closest('.si-wrap');
  var host=stack?stack.parentElement:inp.parentElement;
  if(!host)return;
  var rev=host.querySelector('.fill-review[data-q="'+num+'"]');
  if(!rev){
    rev=document.createElement('div');
    rev.className='fill-review';
    rev.setAttribute('data-q',String(num));
    if(stack)host.insertBefore(rev,stack.nextSibling);
    else host.appendChild(rev);
  }
  rev.innerHTML=reviewLineHtml(userVal,correctVal,num);
}

function highlightDndReview(qid,userVal,correctVal,num){
  var row=document.getElementById('anchor-'+qid);
  if(!row){
    var slot=document.querySelector('.dnd-slot[data-qid="'+qid+'"]');
    if(slot)row=slot.closest('.dnd-row');
  }
  if(!row)return;
  var rev=row.querySelector('.dnd-review');
  if(!rev){
    rev=document.createElement('div');
    rev.className='dnd-review';
    row.appendChild(rev);
  }
  rev.innerHTML=reviewLineHtml(userVal,correctVal,num);
}

function applyReviewAnswers(){
  if(!examAnswerKey||!QUESTION_NUMS.length)return;
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var n=QUESTION_NUMS[i];
    var qid='q'+n;
    var correct=getCorrectAnswerForQuestion(n);
    if(!String(correct).trim())continue;
    var user=userAnswersSnapshot[qid]||'';
    var inp=document.getElementById(qid);
    if(inp&&inp.tagName==='INPUT'&&inp.type!=='radio'&&inp.type!=='hidden'){
      highlightFillReview(inp,user,correct,n);
      continue;
    }
    var sel=document.getElementById('sel-'+qid);
    if(sel&&sel.type==='hidden'){
      highlightDndReview(qid,user,correct,n);
      continue;
    }
    var optsEl=document.getElementById(qid+'-opts');
    if(optsEl){
      highlightMcqReview(qid,user,correct,n);
    }
  }
}

function enterReviewMode(){
  if(examReviewMode)return;
  examReviewMode=true;
  stopExamTimer();
  stopExamAudio();
  userAnswersSnapshot=collectAnswers();
  var ex=document.getElementById('exam-screen');
  if(ex)ex.classList.add('exam-review-mode');
  showReviewAudioPlayer();
  lockExamInputs();
  if(examAnswerKey)applyReviewAnswers();
  renderReviewScore();
  sendSubmissionToGoogleSheet();
}
`;

export const LISTENING_REVIEW_HELPERS = REVIEW_HELPERS.replace(
  /function reviewLineHtml\(userVal,correctVal,num\)\{[\s\S]*?sendSubmissionToGoogleSheet\(\);\n\}/,
  LISTENING_REVIEW_TAIL.trim(),
);

export function applyMidtermListeningReviewPatch(html) {
  let out = html;

  const styleEnd = out.indexOf("</style>");
  if (styleEnd !== -1) {
    out =
      out.slice(0, styleEnd) +
      `\n/* Mid-term listening review (Cambridge shell) */\n${LISTENING_REVIEW_CSS}\n` +
      out.slice(styleEnd);
  }

  out = out.replace(
    /<div id="main">\s*<div class="audio-sr-only"[^>]*>[\s\S]*?<p id="audio-finished-msg"[^>]*>[\s\S]*?<\/p>\s*<div id="questions-panel">/,
    (match) =>
      match.replace(
        /<div id="questions-panel">$/,
        `${LEFT_REVIEW_COLUMN_HTML}\n      <div id="questions-panel">`,
      ),
  );

  out = out.replace(
    /<\/div><!-- \/questions-panel -->\s*<\/div><!-- \/main -->/,
    `</div><!-- /questions-panel -->
    </div><!-- /exam-body -->
  </div><!-- /main -->`,
  );

  out = out.replace(/function showSuccess\(\)/, `${LISTENING_REVIEW_HELPERS}\nfunction showSuccess()`);

  out = out.replace(
    /function showSuccess\(\)\{[\s\S]*?function submitExam\(\)\{[\s\S]*?\n\}/,
    `function showSuccess(){enterReviewMode();}

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
}`,
  );

  out = out.replace(
    /function getHighlightRootForRange\(range\)\{[\s\S]*?return null;\n\}/,
    `function getHighlightRootForRange(range){
  if(!range)return null;
  var anc=range.commonAncestorContainer;
  if(anc.nodeType===3)anc=anc.parentElement;
  if(anc&&anc.closest&&anc.closest('input,select,textarea,button,.fi,.msel,.fi-num,.mqnum,.si'))return null;
  var qp=document.getElementById('questions-panel');
  var ts=document.getElementById('transcript-scroll');
  if(examReviewMode){
    if(ts&&anc&&ts.contains(anc))return ts;
    if(qp&&anc&&qp.contains(anc))return qp;
    return null;
  }
  if(!qp||!anc||!qp.contains(anc))return null;
  return qp;
}`,
  );

  out = out.replace(
    /function getHighlightBlockElements\(root\)\{[\s\S]*?return root\.querySelectorAll\([\s\S]*?\);\n\}/,
    `function getHighlightBlockElements(root){
  if(!root)return[];
  if(root.id==='transcript-scroll'){
    var body=root.querySelector('.transcript-body');
    return body?[body]:[];
  }
  return root.querySelectorAll(
    'p, td, th, .sec-topic, .sec-range, .sec-instr, .qtext, .qnum, .mtext, .sumtext, .sumtitle, .wbitem, label.opt, .mqnum, .wbank-title, .dnd-pill-text, .dnd-label, .dnd-col-title'
  );
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
    /if\(typeof startExam==='function'\)startExam\(\);/,
    "if(window.__EXAM_BOOT__&&typeof applyExamPayload==='function')applyExamPayload(window.__EXAM_BOOT__);\n    if(typeof startExam==='function')startExam();",
  );

  out = out.replace(
    /function beginListeningExam\(\)\{[\s\S]*?^\}/m,
    `function beginListeningExam(){
  if(examStarted)return;
  examStarted=true;
  var aio=document.getElementById('audio-intro-overlay');
  if(aio)aio.classList.remove('is-open');
  timerInt=setInterval(tick,1000);
  updateProg();
  wireExamAudioOnce();
  var ae=document.getElementById('exam-audio');
  if(ae){
    var boot=window.__EXAM_BOOT__||{};
    var src=ae.getAttribute('src')||(boot.audioUrl||boot.audioFallbackUrl)||'';
    if(src){
      if(boot.audioFallbackUrl)ae.dataset.fallback=boot.audioFallbackUrl;
      if(ae.getAttribute('src')!==src)ae.setAttribute('src',src);
      ae.load();
      ae.currentTime=0;
      ae.addEventListener('error',function onErr(){
        ae.removeEventListener('error',onErr);
        tryFallbackAudio(ae);
        ae.play().catch(function(err){console.error('[exam-audio]',err);});
      },{once:true});
      var playPromise=ae.play();
      if(playPromise&&typeof playPromise.catch==='function'){
        playPromise.catch(function(err){console.error('[exam-audio]',err);});
      }
    }
  }
}`,
  );

  return out;
}

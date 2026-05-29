import fs from "node:fs";
import path from "node:path";

const file = path.join(process.cwd(), "public/reading-passage-exam.html");
let html = fs.readFileSync(file, "utf8");

html = html.replace(/<title>.*?<\/title>/, "<title>ANTHICHTUHOC | Luyện đọc IELTS</title>");

html = html.replace(
  /<h1>Mid-Term Reading Test<\/h1>\s*<p>60 minutes.*?<\/p>/s,
  `<h1 id="login-exam-title">IELTS Reading — Passage</h1>
      <p id="login-exam-meta">20 minutes · one passage</p>`,
);

html = html.replace(
  /<div id="passage-panel">[\s\S]*?<\/div><!-- \/passage-panel -->/,
  `<div id="passage-panel">
      <div id="passage-mount" class="passage-content active">
        <p style="padding:28px 30px;color:#666">Đang tải bài đọc…</p>
      </div>
    </div><!-- /passage-panel -->`,
);

html = html.replace(
  /<div id="questions-panel">[\s\S]*?<\/div><!-- \/questions-panel -->/,
  `<div id="questions-panel">
      <div id="questions-mount" class="qsection active">
        <p style="padding:28px;color:#666">Đang tải câu hỏi…</p>
      </div>
    </div><!-- /questions-panel -->`,
);

html = html.replace(/<div class="ptab-bar">[\s\S]*?<\/div>\s*\n\s*<div id="prog-wrap">/, '<div id="prog-wrap">');

html = html.replace(
  /<div class="tb-title">.*?<\/div>/,
  '<div class="tb-title" id="tb-passage-title">IELTS Reading</div>',
);

html = html.replace(
  /<div class="track-groups">[\s\S]*?<p class="track-hint">/,
  `<div class="track-groups">
        <div class="track-grp"><span class="track-label" id="track-range-label">Questions</span><div id="track-grid" class="track-grid"></div></div>
      </div>
      <p class="track-hint">`,
);

const loaderScript = `
var examMeta=null;
var QUESTION_NUMS=[];
var TOTAL_Q=0;
var examLoadError=null;

function getQueryParams(){
  var p=new URLSearchParams(location.search);
  return {
    pilot:(p.get('pilot')||'').trim(),
    passage:parseInt(p.get('passage')||'1',10)||1,
    back:decodeURIComponent(p.get('back')||'/tu-hoc/luyen-doc')
  };
}

function loadExamContent(){
  var q=getQueryParams();
  if(!q.pilot){
    examLoadError='Thiếu tham số pilot trong URL.';
    return Promise.resolve();
  }
  return fetch('/api/reading/exam?pilot='+encodeURIComponent(q.pilot)+'&passage='+q.passage,{credentials:'include'})
    .then(function(res){return res.json().then(function(data){return {ok:res.ok,data:data};});})
    .then(function(r){
      if(!r.ok||!r.data.passageHtml){
        examLoadError=r.data&&r.data.error?String(r.data.error):'Không tải được đề bài.';
        return;
      }
      examMeta=r.data;
      QUESTION_NUMS=r.data.questionNums||[];
      TOTAL_Q=QUESTION_NUMS.length;
      timeLeft=(r.data.timeMinutes||20)*60;
      document.getElementById('passage-mount').outerHTML=r.data.passageHtml;
      document.getElementById('questions-mount').outerHTML='<div class="qsection active" id="q1-section">'+r.data.questionsHtml+'</div>';
      var loginTitle=document.getElementById('login-exam-title');
      if(loginTitle)loginTitle.textContent=r.data.title;
      var loginMeta=document.getElementById('login-exam-meta');
      if(loginMeta)loginMeta.textContent=r.data.pilotLabel+' · Questions '+QUESTION_NUMS[0]+'–'+QUESTION_NUMS[QUESTION_NUMS.length-1];
      var tb=document.getElementById('tb-passage-title');
      if(tb)tb.textContent=r.data.title;
      document.title='ANTHICHTUHOC | '+r.data.title;
      var tr=document.getElementById('track-range-label');
      if(tr&&QUESTION_NUMS.length)tr.textContent='Q'+QUESTION_NUMS[0]+'–'+QUESTION_NUMS[QUESTION_NUMS.length-1];
      trackerBuilt=false;
      ensureQuestionTracker();
    })
    .catch(function(){
      examLoadError='Lỗi mạng khi tải đề bài. Kiểm tra đăng nhập và thử lại.';
    });
}

(function bootExamPage(){
  var q=getQueryParams();
  var note=document.querySelector('.login-note');
  if(note){
    note.innerHTML='Timer starts when you click Start.<br><a href="'+q.back.replace(/"/g,'&quot;')+'" style="color:#4b2876;font-weight:700">← Quay lại bài đọc</a>';
  }
  loadExamContent();
})();
`;

html = html.replace(
  /var sName='',sCourse='',timeLeft=3600/,
  `var sName='',sCourse='',timeLeft=1200${loaderScript}`,
);

html = html.replace(
  /function ensureQuestionTracker\(\)\{[\s\S]*?trackerBuilt=true;\s*\}/,
  `function ensureQuestionTracker(){
  if(trackerBuilt)return;
  var grid=document.getElementById('track-grid');
  if(!grid)return;
  grid.innerHTML='';
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var n=QUESTION_NUMS[i];
    var b=document.createElement('button');
    b.type='button';
    b.className='qt';
    b.id='qt-'+n;
    b.textContent=n;
    b.setAttribute('aria-label','Question '+n+' — not answered');
    (function(num){b.onclick=function(){goToQuestion(num);};})(n);
    grid.appendChild(b);
  }
  trackerBuilt=true;
}`,
);

html = html.replace(
  /function goToQuestion\(n\)\{[\s\S]*?\},90\);\s*\}/,
  `function goToQuestion(n){
  if(QUESTION_NUMS.indexOf(n)<0)return;
  var el=null;
  el=document.getElementById('q'+n);
  if(!el)el=document.getElementById('sel-q'+n);
  if(!el)el=document.querySelector('input[name="q'+n+'"]');
  if(!el)el=document.querySelector('[onchange*="\\'q'+n+'\\'"]');
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}`,
);

html = html.replace(
  /document\.getElementById\('prog-bar'\)\.style\.width=Math\.round\(\(c\/40\)\*100\)\+'%'/,
  "document.getElementById('prog-bar').style.width=(TOTAL_Q?Math.round((c/TOTAL_Q)*100):0)+'%'",
);

html = html.replace(
  /for\(i=1;i<=40;i\+\+\)/,
  "for(i=0;i<QUESTION_NUMS.length;i++){qid='q'+QUESTION_NUMS[i];",
);

html = html.replace(
  /for\(i=0;i<QUESTION_NUMS\.length;i\+\+\)\{qid='q'\+\+QUESTION_NUMS\[i\];\s*cell=document\.getElementById\('qt-'\+\+i\);/,
  "for(i=0;i<QUESTION_NUMS.length;i++){var qn=QUESTION_NUMS[i];qid='q'+qn;cell=document.getElementById('qt-'+qn);",
);

// Fix botched replace - read current updateProg and fix manually
html = html.replace(
  /function updateProg\(\)\{[\s\S]*?\}\s*function markFill/,
  (m) => {
    return `function updateProg(){
  var c=Object.keys(answered).length;
  document.getElementById('prog-bar').style.width=(TOTAL_Q?Math.round((c/TOTAL_Q)*100):0)+'%';
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var qn=QUESTION_NUMS[i];
    var qid='q'+qn;
    var cell=document.getElementById('qt-'+qn);
    if(!cell)continue;
    var done=!!answered[qid];
    cell.classList.toggle('qt-done',done);
    cell.setAttribute('aria-label','Question '+qn+(done?' — answered':' — not answered'));
  }
}

function markFill`;
  },
);

html = html.replace(
  /function collectAnswers\(\)\{[\s\S]*?return r;\s*\}/,
  `function collectAnswers(){
  var r={};
  document.querySelectorAll('#questions-panel .fi,#questions-panel .si').forEach(function(el){
    if(el.id)r[el.id]=el.value.trim();
  });
  document.querySelectorAll('#questions-panel select.tfngsel').forEach(function(el){
    if(el.id)r[el.id.replace('sel-','')]=el.value;
  });
  document.querySelectorAll('#questions-panel select.msel,#questions-panel select.wbsel').forEach(function(el){
    var oc=el.getAttribute('onchange')||'';
    var m=oc.match(/'q(\\d+)'/);
    if(m)r['q'+m[1]]=el.value;
  });
  for(var i=0;i<QUESTION_NUMS.length;i++){
    var qid='q'+QUESTION_NUMS[i];
    var sel=document.querySelector('#questions-panel input[name="'+qid+'"]:checked');
    if(sel)r[qid]=sel.value;
  }
  return r;
}`,
);

html = html.replace(
  /'<b>Questions answered:<\/b> '\+Object\.keys\(answered\)\.length\+' \/ 40'/,
  "'<b>Questions answered:</b> '+Object.keys(answered).length+' / '+TOTAL_Q",
);

html = html.replace(
  /function switchPassage\(n\)\{[\s\S]*?scrollTop=0;\s*\}/,
  "function switchPassage(n){/* single passage */}",
);

html = html.replace(
  /function startExam\(\)\{\s*sName=document/,
  `function startExam(){
  if(examLoadError){alert(examLoadError);return;}
  if(!examMeta||!TOTAL_Q){alert('Đề bài chưa tải xong. Đợi vài giây rồi thử lại.');return;}
  sName=document`,
);

html = html.replace(
  /\.notes-list\{[^}]*\}/,
  "",
);

const notesCss =
  ".notes-list{font-size:13px;line-height:1.85;color:#1a1a2e;padding:4px 0 8px}.notes-list p{margin-bottom:10px}";
html = html.replace("</style>", `${notesCss}\n</style>`);

fs.writeFileSync(file, html);
console.log("patched", file);
